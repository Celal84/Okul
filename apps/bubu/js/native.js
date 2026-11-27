/* Yerel köprü: Android'de AndroidBridge, tarayıcıda Web Speech API yedeği */
'use strict';

const NativeCB = (() => {
  const ttsH = {};
  const sttH = {};
  return {
    _tts: ttsH,
    _stt: sttH,
    tts(id, type, a, b) {
      const h = ttsH[id];
      if (!h) return;
      if (type === 'range') { h.onRange && h.onRange(a, b); return; }
      if (type === 'start') { h.onStart && h.onStart(); return; }
      delete ttsH[id];
      h.done(type);
    },
    stt(id, type, json) {
      const h = sttH[id];
      if (!h) return;
      let d = {};
      try { d = typeof json === 'string' ? JSON.parse(json) : (json || {}); } catch (e) { /* yut */ }
      h(type, d);
    },
    perm(name, ok) { Native._onPerm(name, ok); },
    ttsReady(status) { Native.ttsStatus = status; },
  };
})();

window.NativeCB = NativeCB; // Java tarafı window.NativeCB üzerinden çağırır

/* ---- Gerçek ses kayıtları (ElevenLabs, js/audio.js) ---- */
const Clips = (() => {
  const key = t => t.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();
  const get = t => (typeof AUDIO !== 'undefined') ? AUDIO[key(t)] : null;
  /** Metni kayıt dizisine çevirir; tamamı kayıtlıysa [[dosya, süre], ...], yoksa null */
  function resolve(text) {
    if (typeof AUDIO === 'undefined') return null;
    const exact = get(text);
    if (exact) return [exact];
    let m;
    if ((m = text.match(/^Where is the (.+)\?$/i)) && get('where is the') && get(m[1])) return [get('where is the'), get(m[1])];
    if ((m = text.match(/^This is (a|an) (.+)\.$/i)) && get('this is ' + m[1].toLowerCase()) && get(m[2])) return [get('this is ' + m[1].toLowerCase()), get(m[2])];
    const parts = text.split(/(?<=[.!?])\s+/).filter(Boolean);
    if (parts.length > 1) {
      const out = [];
      for (const p of parts) { const r = resolve(p); if (!r) return null; out.push(...r); }
      return out;
    }
    return null;
  }
  return { resolve, key, count: () => (typeof AUDIO === 'undefined' ? 0 : Object.keys(AUDIO).length) };
})();

const Native = (() => {
  const A = window.AndroidBridge || null;
  let seq = 0;
  const permWaiters = [];
  let browserRec = null;
  let speaking = null;

  function voiceFor(lang) {
    if (!('speechSynthesis' in window)) return null;
    const vs = speechSynthesis.getVoices();
    return vs.find(v => v.lang.replace('_', '-') === lang) ||
      vs.find(v => v.lang.startsWith(lang.slice(0, 2))) || null;
  }

  const api = {
    isApp: !!A,
    ttsStatus: A ? A.ttsStatus() : ('speechSynthesis' in window ? 'ok' : 'none'),

    /** Metni seslendirir. opts: {lang:'en'|'tr', slow, onStart(süre?), onRange(start,end)}
     *  İngilizce metinde kayıtlı gerçek ses varsa onu çalar; yoksa cihazın metin okuyucusuna döner. */
    speak(text, opts = {}) {
      api.stopSpeak();
      if (opts.lang !== 'tr' && Store.s.settings.realVoice !== false) {
        const clips = Clips.resolve(text);
        if (clips) return api.playClips(clips, text, opts);
      }
      return api.speakTTS(text, opts);
    },

    /** Kayıtlı sesleri art arda çalar (süre bilgisiyle karaoke vurgusu için onStart(saniye) çağrılır) */
    playClips(clips, text, opts = {}) {
      const S = Store.s.settings;
      const base = { slow: 0.88, normal: 1, fast: 1.12 }[S.voiceSpeed] || 1;
      const rate = base * (opts.slow ? 0.72 : 1);
      const total = clips.reduce((t, c) => t + c[1], 0) / rate;
      return new Promise(resolve => {
        let finished = false, i = 0, a = null, started = false;
        let startGuard = null, endGuard = null;
        const clear = () => { clearTimeout(startGuard); clearTimeout(endGuard); };
        const kill = () => { if (a) { a.onended = a.onerror = a.onplaying = null; try { a.pause(); } catch (e) { /* yut */ } } };
        const done = (r) => {
          if (finished) return;
          finished = true; speaking = null; clear(); kill();
          resolve(r || 'done');
        };
        const fallback = () => { if (finished) return; finished = true; speaking = null; clear(); kill(); api.speakTTS(text, opts).then(resolve); };
        speaking = { id: 'c' + (++seq), done, stop() { clear(); kill(); } }; // durdurulunca done('stop') ile söz verilen çözülür
        // güvenlik: ilk kayıt 3 sn'de başlamazsa cihaz sesine dön; toplam süre aşılırsa devam et
        startGuard = setTimeout(() => { if (!started) fallback(); }, 3000);
        endGuard = setTimeout(() => done('timeout'), total * 1000 + 4000 + clips.length * 600);
        const next = () => {
          if (finished) return;
          if (i >= clips.length) { done('done'); return; }
          a = new Audio('audio/' + clips[i][0]);
          a.playbackRate = rate;
          a.preservesPitch = true; a.webkitPreservesPitch = true;
          const idx = i;
          a.onplaying = () => {
            if (!started) { started = true; clearTimeout(startGuard); opts.onStart && opts.onStart(total); }
            a.onplaying = null;
          };
          a.onended = () => { i = idx + 1; next(); };
          a.onerror = () => fallback();
          const p = a.play();
          if (p && p.catch) p.catch(() => { if (!started) fallback(); });
        };
        next();
      });
    },

    speakTTS(text, opts = {}) {
      const S = Store.s.settings;
      const lang = opts.lang === 'tr' ? 'tr-TR' : (S.accent || 'en-US');
      const base = { slow: 0.75, normal: 0.88, fast: 1.0 }[S.voiceSpeed] || 0.88;
      let rate = opts.lang === 'tr' ? 1.0 : base;
      if (opts.slow) rate *= 0.62;
      const id = 'u' + (++seq);
      return new Promise(resolve => {
        let finished = false;
        const done = (r) => { if (finished) return; finished = true; clearTimeout(guard); speaking = null; resolve(r || 'done'); };
        // Güvenlik: geri çağrı gelmezse yine de devam et
        const guard = setTimeout(() => done('timeout'), 2500 + text.length * 140 / rate);
        speaking = { id, done };
        if (A) {
          NativeCB._tts[id] = { done, onStart: opts.onStart, onRange: opts.onRange };
          A.speak(text, id, lang, rate, opts.lang === 'tr' ? 1.0 : 1.08);
        } else if ('speechSynthesis' in window) {
          const u = new SpeechSynthesisUtterance(text);
          u.lang = lang;
          u.rate = rate;
          u.pitch = 1.08;
          const v = voiceFor(lang);
          if (v) u.voice = v;
          u.onstart = () => opts.onStart && opts.onStart();
          u.onboundary = (e) => {
            if (e.name === 'word' && opts.onRange) {
              const len = e.charLength || (text.slice(e.charIndex).match(/^\S+/) || [''])[0].length;
              opts.onRange(e.charIndex, e.charIndex + len);
            }
          };
          u.onend = () => done('done');
          u.onerror = () => done('error');
          speechSynthesis.speak(u);
        } else {
          setTimeout(() => done('none'), 600);
        }
      });
    },

    /** "Merhaba [Hello] deriz" → Türkçe + İngilizce parçaları sırayla okur */
    async speakMixed(text, opts = {}) {
      const parts = text.split(/(\[[^\]]+\])/).filter(p => p.trim());
      for (const p of parts) {
        if (opts.cancelled && opts.cancelled()) return;
        if (p.startsWith('[')) await api.speak(p.slice(1, -1), { lang: 'en' });
        else await api.speak(p, { lang: 'tr' });
      }
    },

    stopSpeak() {
      if (speaking) { const s = speaking; speaking = null; s.stop && s.stop(); s.done('stop'); }
      if (A) A.stopSpeak();
      else if ('speechSynthesis' in window) speechSynthesis.cancel();
    },

    speechAvailable() {
      if (A) { try { return A.speechAvailable(); } catch (e) { return false; } }
      return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
    },

    hasMic() { return A ? A.hasMic() : true; },

    requestMic() {
      if (!A) return Promise.resolve(true);
      if (A.hasMic()) return Promise.resolve(true);
      return new Promise(res => { permWaiters.push({ name: 'mic', res }); A.requestMic(); });
    },

    _onPerm(name, ok) {
      for (let i = permWaiters.length - 1; i >= 0; i--) {
        if (permWaiters[i].name === name) { permWaiters[i].res(ok); permWaiters.splice(i, 1); }
      }
    },

    /** Dinler. opts: {hint, onLevel(0..1), onPartial(text), onState('ready'|'begin'|'end')}
     *  → {texts:[...], partials:[...], error?:code} */
    listen(opts = {}) {
      api.stopSpeak();
      const id = 's' + (++seq);
      const partials = [];
      return new Promise(resolve => {
        let finished = false;
        const done = (r) => {
          if (finished) return;
          finished = true;
          clearTimeout(guard);
          delete NativeCB._stt[id];
          r.partials = partials;
          resolve(r);
        };
        const guard = setTimeout(() => { api.stopListen(true); done({ texts: [], error: 'timeout' }); }, 12000);
        const handler = (type, d) => {
          if (type === 'rms') opts.onLevel && opts.onLevel(Math.max(0, Math.min(1, (d.v + 2) / 12)));
          else if (type === 'partial') {
            const t = (d.texts || [])[0];
            if (t) { partials.push(...d.texts); opts.onPartial && opts.onPartial(t); }
          } else if (type === 'results') done({ texts: d.texts || [], conf: d.conf || [] });
          else if (type === 'error') done({ texts: [], error: d.code || 'error' });
          else if (type === 'end') done({ texts: [], error: 'cancel' });
          else opts.onState && opts.onState(type);
        };
        NativeCB._stt[id] = handler;
        const lang = Store.s.settings.accent || 'en-US';
        if (A) {
          A.listen(id, lang, opts.hint || '');
        } else {
          const R = window.SpeechRecognition || window.webkitSpeechRecognition;
          if (!R) { done({ texts: [], error: 'unavailable' }); return; }
          const r = new R();
          browserRec = r;
          r.lang = lang;
          r.interimResults = true;
          r.maxAlternatives = 8;
          r.continuous = false;
          r.onstart = () => handler('ready', {});
          r.onresult = (e) => {
            const res = e.results[e.results.length - 1];
            const texts = Array.from(res).map(a => a.transcript);
            if (res.isFinal) handler('results', { texts });
            else handler('partial', { texts });
          };
          r.onerror = (e) => handler('error', { code: e.error === 'no-speech' ? 'timeout' : e.error });
          r.onend = () => setTimeout(() => handler('error', { code: 'nomatch' }), 300);
          try { r.start(); } catch (e) { done({ texts: [], error: 'start' }); }
        }
      });
    },

    stopListen(cancel) {
      if (A) { cancel ? A.cancelListen() : A.stopListen(); }
      else if (browserRec) { try { cancel ? browserRec.abort() : browserRec.stop(); } catch (e) { /* yut */ } }
    },

    setReminder(on, hh, mm, title, text) { if (A) A.setReminder(on, hh, mm, title, text); },
    testReminder() { if (A) A.testReminder(); },
    markPlayed(day) { if (A) A.markPlayed(day); },
    vibrate(ms) { if (A) A.vibrate(ms); else if (navigator.vibrate) navigator.vibrate(ms); },
    keepScreenOn(on) { if (A) A.keepScreenOn(on); },
    installTts() { if (A) A.installTtsData(); },
    version() { return A ? A.version() : 'web'; },
    exit() { if (A) A.exitApp(); },
  };
  return api;
})();
