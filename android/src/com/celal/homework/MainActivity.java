package com.celal.homework;

import android.content.ContentValues;
import android.content.pm.ActivityInfo;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Environment;
import android.provider.MediaStore;
import android.webkit.ValueCallback;
import android.webkit.WebResourceRequest;
import android.widget.Toast;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import android.Manifest;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.os.VibrationEffect;
import android.os.Vibrator;
import android.speech.RecognitionListener;
import android.speech.RecognizerIntent;
import android.speech.SpeechRecognizer;
import android.speech.tts.TextToSpeech;
import android.speech.tts.UtteranceProgressListener;
import android.speech.tts.Voice;
import android.view.View;
import android.view.WindowInsets;
import android.view.WindowInsetsController;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Locale;
import java.util.Set;

/**
 * Homework — birleşik WebView kabuğu (ana uygulama + gömülü 6 oyun).
 * Arayüz assets/www içindeki HTML/JS ile çizilir; bu sınıf yerel servisleri
 * (metin okuma, ses tanıma, bildirim, titreşim) JavaScript'e köprüler.
 */
public class MainActivity extends Activity {

    private static final int REQ_MIC = 11;
    private static final int REQ_NOTIF = 12;
    private static final int PICK_FILE = 13;
    private static final String HUB = "file:///android_asset/www/index.html";
    private ValueCallback<Uri[]> fileCallback;

    private WebView web;
    private TextToSpeech tts;
    private volatile boolean ttsReady = false;
    private volatile String ttsStatus = "init";
    private String currentTtsLang = "";
    private SpeechRecognizer recognizer;
    private String sttId = null;
    private long lastRms = 0;
    private final Handler main = new Handler(Looper.getMainLooper());

    @SuppressLint({"SetJavaScriptEnabled", "AddJavascriptInterface"})
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        if ((getApplicationInfo().flags & ApplicationInfo.FLAG_DEBUGGABLE) != 0) {
            WebView.setWebContentsDebuggingEnabled(true);
        }

        web = new WebView(this);
        web.setBackgroundColor(0xFFF3F5FB);
        web.setOverScrollMode(View.OVER_SCROLL_NEVER);
        web.setHapticFeedbackEnabled(false);
        web.setLongClickable(false);
        web.setOnLongClickListener(v -> true);

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setAllowFileAccess(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setTextZoom(100);
        s.setBuiltInZoomControls(false);
        s.setSupportZoom(false);

        web.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView v, WebResourceRequest r) {
                // Uygulama dışına çıkışı engelle (çocuk güvenliği)
                return !"file".equals(r.getUrl().getScheme());
            }
            @Override
            public void onPageStarted(WebView v, String url, Bitmap icon) {
                if (tts != null) tts.stop();
                cancelRecognizer();
                getWindow().clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
                // Dikey tasarlanmış oyunlar dikeyde kilitlenir; diğerleri serbest döner
                boolean dikey = url != null && url.matches(".*/apps/(roket|carpim|matematik|bilmece)/.*");
                setRequestedOrientation(dikey ? ActivityInfo.SCREEN_ORIENTATION_PORTRAIT : ActivityInfo.SCREEN_ORIENTATION_FULL_USER);
            }
        });
        web.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onShowFileChooser(WebView v, ValueCallback<Uri[]> cb, FileChooserParams fp) {
                if (fileCallback != null) fileCallback.onReceiveValue(null);
                fileCallback = cb;
                Intent i = new Intent(Intent.ACTION_GET_CONTENT);
                i.addCategory(Intent.CATEGORY_OPENABLE);
                i.setType("*/*");
                try {
                    startActivityForResult(Intent.createChooser(i, "Yedek dosyasını seç"), PICK_FILE);
                } catch (Exception e) {
                    fileCallback = null;
                    return false;
                }
                return true;
            }
        });
        web.addJavascriptInterface(new Bridge(), "AndroidBridge");
        web.addJavascriptInterface(new TrBridge(), "Android");
        setContentView(web);

        initTts();
        Reminders.createChannel(this);
        hideSystemUi();

        web.loadUrl(HUB);
    }

    // ---------------------------------------------------------------- UI

    private void hideSystemUi() {
        if (Build.VERSION.SDK_INT >= 30) {
            getWindow().setDecorFitsSystemWindows(false);
            WindowInsetsController c = getWindow().getInsetsController();
            if (c != null) {
                c.hide(WindowInsets.Type.statusBars() | WindowInsets.Type.navigationBars());
                c.setSystemBarsBehavior(WindowInsetsController.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE);
            }
        } else {
            getWindow().getDecorView().setSystemUiVisibility(
                    View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                            | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                            | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                            | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                            | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                            | View.SYSTEM_UI_FLAG_FULLSCREEN);
        }
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) hideSystemUi();
    }

    @Override
    protected void onResume() {
        super.onResume();
        hideSystemUi();
        js("typeof App!=='undefined' && App.onResume && App.onResume()");
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (tts != null) tts.stop();
        cancelRecognizer();
        js("typeof onHide==='function' && onHide(); typeof App!=='undefined' && App.onPause && App.onPause()");
    }

    @Override
    protected void onDestroy() {
        if (tts != null) {
            tts.stop();
            tts.shutdown();
        }
        destroyRecognizer();
        if (web != null) web.destroy();
        super.onDestroy();
    }

    @SuppressWarnings("deprecation")
    @Override
    public void onBackPressed() {
        if (web == null) { finish(); return; }
        web.evaluateJavascript("(function(){try{return window.__hwBack?__hwBack():'exit'}catch(e){return 'exit'}})()", v -> {
            if (!"\"exit\"".equals(v)) return;
            String u = web.getUrl();
            if (u != null && u.startsWith(HUB)) finish(); else goHub();
        });
    }

    private void goHub() {
        main.post(() -> { if (web != null) web.loadUrl(HUB); });
    }

    @Override
    protected void onActivityResult(int req, int res, Intent data) {
        if (req == PICK_FILE && fileCallback != null) {
            Uri[] r = null;
            if (res == RESULT_OK && data != null && data.getData() != null) r = new Uri[]{data.getData()};
            fileCallback.onReceiveValue(r);
            fileCallback = null;
            return;
        }
        super.onActivityResult(req, res, data);
    }

    private void js(final String code) {
        main.post(() -> {
            if (web != null) web.evaluateJavascript(code, null);
        });
    }

    private static String q(String s) {
        return JSONObject.quote(s == null ? "" : s);
    }

    // ---------------------------------------------------------------- TTS

    private void initTts() {
        tts = new TextToSpeech(this, status -> {
            if (status == TextToSpeech.SUCCESS) {
                int r = tts.setLanguage(Locale.US);
                ttsReady = true;
                ttsStatus = (r == TextToSpeech.LANG_MISSING_DATA || r == TextToSpeech.LANG_NOT_SUPPORTED)
                        ? "missing_en" : "ok";
                currentTtsLang = "";
                tts.setOnUtteranceProgressListener(new UtteranceProgressListener() {
                    @Override public void onStart(String id) { cb(id, "'start'"); }
                    @Override public void onDone(String id) { cb(id, "'done'"); js("typeof ttsDone==='function' && ttsDone(" + q(id) + ")"); }
                    @Override public void onError(String id) { cb(id, "'error'"); }
                    @Override public void onStop(String id, boolean interrupted) { cb(id, "'stop'"); }
                    @Override public void onRangeStart(String id, int start, int end, int frame) {
                        cb(id, "'range'," + start + "," + end);
                    }
                });
            } else {
                ttsStatus = "fail";
            }
            js("window.NativeCB && NativeCB.ttsReady(" + q(ttsStatus) + ")");
        });
    }

    private void cb(String id, String args) {
        js("window.NativeCB && NativeCB.tts && NativeCB.tts(" + q(id) + "," + args + ")");
    }

    /** lang: "en-US", "en-GB" veya "tr-TR" */
    private void applyTtsLanguage(String lang) {
        if (lang.equals(currentTtsLang)) return;
        currentTtsLang = lang;
        Locale loc;
        if (lang.startsWith("tr")) loc = new Locale("tr", "TR");
        else if (lang.equals("en-GB")) loc = Locale.UK;
        else loc = Locale.US;

        Voice best = null;
        try {
            Set<Voice> voices = tts.getVoices();
            if (voices != null) {
                for (Voice v : voices) {
                    Locale vl = v.getLocale();
                    if (!vl.getLanguage().equals(loc.getLanguage())) continue;
                    if (!loc.getCountry().isEmpty() && !vl.getCountry().equals(loc.getCountry())) continue;
                    if (v.getFeatures() != null && v.getFeatures().contains("notInstalled")) continue;
                    if (best == null || score(v) > score(best)) best = v;
                }
            }
        } catch (Exception ignored) { }
        if (best != null) tts.setVoice(best);
        else tts.setLanguage(loc);
    }

    private static int score(Voice v) {
        int sc = v.getQuality();
        if (!v.isNetworkConnectionRequired()) sc += 1000; // çevrimdışı ses: gecikmesiz
        return sc;
    }

    // ---------------------------------------------------------------- STT

    private void destroyRecognizer() {
        if (recognizer != null) {
            try { recognizer.destroy(); } catch (Exception ignored) { }
            recognizer = null;
        }
    }

    private void cancelRecognizer() {
        main.post(() -> {
            if (recognizer != null) {
                try { recognizer.cancel(); } catch (Exception ignored) { }
            }
            destroyRecognizer();
            if (sttId != null) {
                String id = sttId;
                sttId = null;
                js("window.NativeCB && NativeCB.stt(" + q(id) + ",'end','{}')");
            }
        });
    }

    private void startRecognizer(final String id, final String lang, final String hint) {
        main.post(() -> {
            if (!SpeechRecognizer.isRecognitionAvailable(this)) {
                js("window.NativeCB && NativeCB.stt(" + q(id) + ",'error'," + q("{\"code\":\"unavailable\"}") + ")");
                return;
            }
            if (checkSelfPermission(Manifest.permission.RECORD_AUDIO) != PackageManager.PERMISSION_GRANTED) {
                requestPermissions(new String[]{Manifest.permission.RECORD_AUDIO}, REQ_MIC);
                js("window.NativeCB && NativeCB.stt(" + q(id) + ",'error'," + q("{\"code\":\"permission\"}") + ")");
                return;
            }
            if (tts != null) tts.stop();
            destroyRecognizer();
            sttId = id;
            recognizer = SpeechRecognizer.createSpeechRecognizer(this);
            recognizer.setRecognitionListener(new Listener(id));

            Intent i = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
            i.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);
            i.putExtra(RecognizerIntent.EXTRA_LANGUAGE, lang);
            i.putExtra(RecognizerIntent.EXTRA_LANGUAGE_PREFERENCE, lang);
            i.putExtra(RecognizerIntent.EXTRA_ONLY_RETURN_LANGUAGE_PREFERENCE, false);
            i.putExtra(RecognizerIntent.EXTRA_MAX_RESULTS, 10);
            i.putExtra(RecognizerIntent.EXTRA_PARTIAL_RESULTS, true);
            i.putExtra(RecognizerIntent.EXTRA_CALLING_PACKAGE, getPackageName());
            // Çocuklar yavaş ve duraklayarak konuşur: sessizlik süresini uzat
            i.putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_COMPLETE_SILENCE_LENGTH_MILLIS, 1800L);
            i.putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_POSSIBLY_COMPLETE_SILENCE_LENGTH_MILLIS, 1500L);
            i.putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_MINIMUM_LENGTH_MILLIS, 1200L);
            if (Build.VERSION.SDK_INT >= 33 && hint != null && !hint.isEmpty()) {
                // Beklenen kelimeye doğru yönlendir (Android 13+)
                ArrayList<String> bias = new ArrayList<>();
                bias.add(hint);
                for (String w : hint.split("\\s+")) if (w.length() > 2) bias.add(w);
                i.putStringArrayListExtra(RecognizerIntent.EXTRA_BIASING_STRINGS, bias);
            }
            try {
                recognizer.startListening(i);
            } catch (Exception e) {
                js("window.NativeCB && NativeCB.stt(" + q(id) + ",'error'," + q("{\"code\":\"start\"}") + ")");
            }
        });
    }

    private class Listener implements RecognitionListener {
        private final String id;
        Listener(String id) { this.id = id; }

        private boolean current() { return id.equals(sttId); }

        @Override public void onReadyForSpeech(Bundle params) {
            if (current()) js("window.NativeCB && NativeCB.stt(" + q(id) + ",'ready','{}')");
        }
        @Override public void onBeginningOfSpeech() {
            if (current()) js("window.NativeCB && NativeCB.stt(" + q(id) + ",'begin','{}')");
        }
        @Override public void onRmsChanged(float rmsdB) {
            long now = System.currentTimeMillis();
            if (!current() || now - lastRms < 70) return;
            lastRms = now;
            js("window.NativeCB && NativeCB.stt(" + q(id) + ",'rms'," + q("{\"v\":" + rmsdB + "}") + ")");
        }
        @Override public void onBufferReceived(byte[] buffer) { }
        @Override public void onEndOfSpeech() {
            if (current()) js("window.NativeCB && NativeCB.stt(" + q(id) + ",'endspeech','{}')");
        }
        @Override public void onError(int error) {
            if (!current()) return;
            sttId = null;
            String code;
            switch (error) {
                case SpeechRecognizer.ERROR_NO_MATCH: code = "nomatch"; break;
                case SpeechRecognizer.ERROR_SPEECH_TIMEOUT: code = "timeout"; break;
                case SpeechRecognizer.ERROR_AUDIO: code = "audio"; break;
                case SpeechRecognizer.ERROR_NETWORK:
                case SpeechRecognizer.ERROR_NETWORK_TIMEOUT: code = "network"; break;
                case SpeechRecognizer.ERROR_INSUFFICIENT_PERMISSIONS: code = "permission"; break;
                case SpeechRecognizer.ERROR_RECOGNIZER_BUSY: code = "busy"; break;
                default: code = "other" + error;
            }
            js("window.NativeCB && NativeCB.stt(" + q(id) + ",'error'," + q("{\"code\":\"" + code + "\"}") + ")");
            main.postDelayed(MainActivity.this::destroyRecognizer, 50);
        }
        @Override public void onResults(Bundle results) {
            if (!current()) return;
            sttId = null;
            js("window.NativeCB && NativeCB.stt(" + q(id) + ",'results'," + q(pack(results)) + ")");
            main.postDelayed(MainActivity.this::destroyRecognizer, 50);
        }
        @Override public void onPartialResults(Bundle partial) {
            if (current()) js("window.NativeCB && NativeCB.stt(" + q(id) + ",'partial'," + q(pack(partial)) + ")");
        }
        @Override public void onEvent(int eventType, Bundle params) { }
    }

    private static String pack(Bundle b) {
        JSONObject o = new JSONObject();
        try {
            JSONArray texts = new JSONArray();
            ArrayList<String> list = b.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION);
            if (list != null) for (String t : list) texts.put(t);
            o.put("texts", texts);
            float[] conf = b.getFloatArray(SpeechRecognizer.CONFIDENCE_SCORES);
            JSONArray c = new JSONArray();
            if (conf != null) for (float f : conf) c.put((double) f);
            o.put("conf", c);
        } catch (Exception ignored) { }
        return o.toString();
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        boolean ok = grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED;
        String name = requestCode == REQ_MIC ? "mic" : "notif";
        js("window.NativeCB && NativeCB.perm(" + q(name) + "," + ok + ")");
    }

    // ---------------------------------------------------------------- Bridge

    private class Bridge {
        @JavascriptInterface
        public String ttsStatus() { return ttsStatus; }

        @JavascriptInterface
        public void speak(final String text, final String id, final String lang, final float rate, final float pitch) {
            main.post(() -> {
                if (!ttsReady) {
                    cb(id, "'error'");
                    return;
                }
                applyTtsLanguage(lang == null ? "en-US" : lang);
                tts.setSpeechRate(rate);
                tts.setPitch(pitch);
                Bundle p = new Bundle();
                p.putString(TextToSpeech.Engine.KEY_PARAM_UTTERANCE_ID, id);
                tts.speak(text, TextToSpeech.QUEUE_FLUSH, p, id);
            });
        }

        @JavascriptInterface
        public void stopSpeak() {
            main.post(() -> { if (tts != null) tts.stop(); });
        }

        @JavascriptInterface
        public void installTtsData() {
            main.post(() -> {
                try {
                    Intent i = new Intent(TextToSpeech.Engine.ACTION_INSTALL_TTS_DATA);
                    i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                    startActivity(i);
                } catch (Exception ignored) { }
            });
        }

        @JavascriptInterface
        public boolean speechAvailable() {
            return SpeechRecognizer.isRecognitionAvailable(MainActivity.this);
        }

        @JavascriptInterface
        public boolean hasMic() {
            return checkSelfPermission(Manifest.permission.RECORD_AUDIO) == PackageManager.PERMISSION_GRANTED;
        }

        @JavascriptInterface
        public void requestMic() {
            main.post(() -> requestPermissions(new String[]{Manifest.permission.RECORD_AUDIO}, REQ_MIC));
        }

        @JavascriptInterface
        public void listen(String id, String lang, String hint) {
            startRecognizer(id, lang == null ? "en-US" : lang, hint);
        }

        @JavascriptInterface
        public void stopListen() {
            main.post(() -> {
                if (recognizer != null) {
                    try { recognizer.stopListening(); } catch (Exception ignored) { }
                }
            });
        }

        @JavascriptInterface
        public void cancelListen() { cancelRecognizer(); }

        @JavascriptInterface
        public void setReminder(boolean enabled, int hour, int minute, String title, String text) {
            Reminders.save(MainActivity.this, enabled, hour, minute, title, text);
            if (enabled) {
                if (Build.VERSION.SDK_INT >= 33 &&
                        checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) {
                    main.post(() -> requestPermissions(new String[]{Manifest.permission.POST_NOTIFICATIONS}, REQ_NOTIF));
                }
                Reminders.schedule(MainActivity.this);
            } else {
                Reminders.cancel(MainActivity.this);
            }
        }

        @JavascriptInterface
        public void markPlayed(String day) {
            Reminders.markPlayed(MainActivity.this, day);
        }

        @JavascriptInterface
        public void testReminder() {
            Reminders.show(MainActivity.this, true);
        }

        @JavascriptInterface
        public void vibrate(int ms) {
            try {
                Vibrator v = (Vibrator) getSystemService(VIBRATOR_SERVICE);
                if (v == null || !v.hasVibrator()) return;
                if (Build.VERSION.SDK_INT >= 26) v.vibrate(VibrationEffect.createOneShot(ms, VibrationEffect.DEFAULT_AMPLITUDE));
                else v.vibrate(ms);
            } catch (Exception ignored) { }
        }

        @JavascriptInterface
        public void keepScreenOn(boolean on) {
            main.post(() -> {
                if (on) getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
                else getWindow().clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
            });
        }

        @JavascriptInterface
        public String version() {
            try {
                return getPackageManager().getPackageInfo(getPackageName(), 0).versionName;
            } catch (Exception e) {
                return "?";
            }
        }

        @JavascriptInterface
        public void exitApp() {
            goHub();
        }
    }

    /** Türkçe seslendirme köprüsü: eski uygulamaların "Android" arayüzlerinin birleşimi. */
    private class TrBridge {
        private void say(final String text, final String id, final float rate, final float pitch) {
            main.post(() -> {
                if (tts == null || !ttsReady || text == null) return;
                applyTtsLanguage("tr-TR");
                tts.setSpeechRate(rate);
                tts.setPitch(pitch);
                Bundle p = new Bundle();
                p.putString(TextToSpeech.Engine.KEY_PARAM_UTTERANCE_ID, id);
                tts.speak(text, TextToSpeech.QUEUE_FLUSH, p, id);
            });
        }
        @JavascriptInterface public void speak(String t) { say(t, "u", 0.95f, 1.0f); }
        @JavascriptInterface public void speakId(String t, String id) { say(t, id, 0.95f, 1.0f); }
        @JavascriptInterface public void speakRate(String t, double rate) { say(t, "zeka", (float) rate, 1.1f); }
        @JavascriptInterface public void stop() { main.post(() -> { if (tts != null) tts.stop(); }); }
        @JavascriptInterface public boolean ttsReady() { return ttsReady; }
        @JavascriptInterface public void exit() { goHub(); }
        @JavascriptInterface
        public void saveFile(final String name, final String content) {
            String msg;
            try {
                byte[] data = content.getBytes(StandardCharsets.UTF_8);
                if (Build.VERSION.SDK_INT >= 29) {
                    ContentValues cv = new ContentValues();
                    cv.put(MediaStore.MediaColumns.DISPLAY_NAME, name);
                    cv.put(MediaStore.MediaColumns.MIME_TYPE, "application/json");
                    cv.put(MediaStore.MediaColumns.RELATIVE_PATH, Environment.DIRECTORY_DOWNLOADS);
                    Uri uri = getContentResolver().insert(MediaStore.Downloads.EXTERNAL_CONTENT_URI, cv);
                    OutputStream os = getContentResolver().openOutputStream(uri);
                    os.write(data);
                    os.close();
                    msg = "Yedek 'İndirilenler' klasörüne kaydedildi: " + name;
                } else {
                    File f = new File(getExternalFilesDir(null), name);
                    FileOutputStream os = new FileOutputStream(f);
                    os.write(data);
                    os.close();
                    msg = "Yedek kaydedildi: " + f.getAbsolutePath();
                }
            } catch (Exception e) {
                msg = "Yedek kaydedilemedi";
            }
            final String m = msg;
            main.post(() -> Toast.makeText(MainActivity.this, m, Toast.LENGTH_LONG).show());
        }
    }
}
