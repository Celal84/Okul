# Homework

İlkokul (1-4. sınıf) öğrencisi için tüm dersleri tek uygulamada toplayan eğitim uygulaması.
İnternetsiz çalışır; reklam, üyelik ve veri toplama yoktur. İlerleme yalnızca cihazda saklanır.

- **Android:** `Homework_vX.Y.Z.apk` (Google Drive "Claude Apk" klasörü)
- **iPhone / web:** GitHub Pages adresi Safari'de açılır → Paylaş → *Ana Ekrana Ekle* ile uygulama gibi kullanılır.

## İçerik
13 ders: Türkçe, Matematik, Hayat Bilgisi (1-3), Fen Bilimleri (3-4), Sosyal Bilgiler (4), İngilizce (1-4),
Din Kültürü (4), İnsan Hakları (4), Trafik Güvenliği (4), Müzik, Görsel Sanatlar, Satranç, Kodlama.

Her konuda: **Konu Anlatımı** (hafıza ipuçlu) → **Bilgi Kartları** → **Eşleştir** → **Test** → matematikte **Sınırsız Alıştırma**.
Yanlış yapılan sorular **Akıllı Tekrar**'a düşer (1-2-4-7-14 gün aralıklı tekrar); çalışılan konular 1-3-7-14-30 gün sonra hatırlatılır.
Günlük hedef, seri, puan/seviye ve **Karne** ile ilerleme izlenir.

### Gömülü oyunlar (eski uygulamaların tamamı)
| Klasör | Uygulama | Kaynak depo |
|---|---|---|
| `apps/roket` | Hızlı Okuma Roketi | Hizli-Okuma-Roketi |
| `apps/bilmece` | Bilmece Deyim Atasözü | bilmece-deyim-atasozu |
| `apps/matematik` | Matematik Adaları | Matematik-Adalari |
| `apps/carpim` | Midilli Çarpım Macerası | Midilli-Carpim-Macerasi |
| `apps/bubu` | Bubu English | ingilizce-ai |
| `apps/atlas` | Dünya ve Türkiye Atlası | Cocuk-Atlas |

Oyunlar olduğu gibi kopyalanır; derleme yalnızca ana sayfaya dönüş köprüsünü (`src/hw-home.js`, 🎒 düğmesi) ekler.
Bir oyunu güncellemek için kaynak deposunda derlenen web çıktısını ilgili `apps/` klasörüne kopyalayın.

## Yapı
- `VERSION` — sürüm numarası (X.Y.Z). Başlıkta, APK adında ve sürüm etiketinde kullanılır.
- `src/template.html`, `src/style.css`, `src/app.js` — ana uygulama
- `src/data/<ders>-<sınıf>.js` — ders içerikleri (biçim ve kurallar: `tools/ICERIK.md`)
- `android/` — birleşik WebView kabuğu (Türkçe/İngilizce seslendirme, ses tanıma, hatırlatma). Paket: `com.celal.homework` — **değiştirmeyin**, kayıtlar silinir.
- `tools/build.py` — web derlemesi → `dist/www`
- `tools/validate.mjs`, `tools/check-math.mjs` — içerik denetimi
- `build.sh` — web + imzalı APK (Gradle'sız)

## Derleme
```bash
python3 tools/build.py                       # yalnızca web: dist/www
ANDROID_HOME=$SDK KS=/yol/homework.jks KS_PASS=... bash build.sh   # + dist/Homework_vX.Y.Z.apk
```
Android SDK: build-tools 35.0.0 ve platforms/android-35 (dl.google.com'dan `build-tools_r35_linux.zip`, `platform-35_r02.zip`).

## İmza anahtarı
Depo herkese açık olduğu için imza anahtarı **depoda değildir**. Anahtar (`homework.jks`, alias `homework`) ve parolası
kullanıcının Google Drive'ında "Homework imza anahtarı" klasöründe saklanır. Her sürüm aynı anahtarla imzalanmalıdır;
yoksa güncelleme eski sürümün üstüne kurulmaz.
CI'da APK derlemek için depo ayarlarına `KEYSTORE_BASE64` ve `KEYSTORE_PASSWORD` secret'ları eklenebilir (isteğe bağlı).

## Yayın
`main` dalına gelen her değişiklikte `.github/workflows/yayin.yml` içeriği denetler, web sürümünü GitHub Pages'e yayınlar
ve `VERSION` yeniyse `Homework_vX.Y.Z` etiketiyle GitHub sürümü açar.
