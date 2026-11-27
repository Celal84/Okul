# Homework — ders içeriği yazım kuralları

Uygulama: özel okulda (TED düzeyi) okuyan ilkokul çocuğu (1-4. sınıf) için konu anlatımı + bilgi kartı + test + akıllı tekrar.
İçerik `src/data/<ders>-<sinif>.js` dosyalarında durur; her dosya tek bir `HW.add({...});` çağrısıdır.

## Biçim

```js
HW.add({ders:"matematik", sinif:2, uniteler:[
  {ad:"Sayılar", konular:[
    {id:"mat2-onluk-birlik", ad:"Onluk ve Birlik", e:"🔢",
     anlat:[
       {b:"Onluk nedir?", m:"10 tane birlik bir araya gelince 1 onluk olur.", o:"34 = 3 onluk + 4 birlik"},
       {b:"...", m:"..."}
     ],
     ipucu:"Sağdaki basamak birlik, solundaki onluk: 'Sağ bir, sol on!'",
     kartlar:[["47 sayısında kaç onluk var?","4"],["1 onluk kaç birlik?","10"]],
     sorular:[
       {s:"56 sayısının onlar basamağındaki rakam kaçtır?", c:["5","6","56","11"], a:"56 = 5 onluk + 6 birlik."}
     ],
     uret:["basamak",100]
    }
  ]}
]});
```

## Alanlar
- `ders`: turkce, matematik, hayat, fen, sosyal, ingilizce, din, insan, trafik, muzik, gorsel, satranc, kodlama
- `id`: yalnızca küçük harf/rakam/tire, tüm uygulamada benzersiz; `<kısaltma><sınıf>-<konu>` (ör. `tr1-sesli-harfler`).
- `e`: konuyu simgeleyen tek emoji.
- `anlat`: 3-5 kart. `b` başlık (≤50), `m` açıklama (≤300 karakter, çocuğa hitap eden sade dil), `o` isteğe bağlı örnek (≤200). Düz metin; yalnızca `<b>` kullanılabilir.
- `ipucu`: akılda kalıcı hafıza ipucu (tekerleme, kodlama, benzetme, kısaltma) ≤200.
- `kartlar`: 6-8 bilgi kartı `[ön, arka]`, her yüz ≤60 karakter. Ön yüzler de arka yüzler de kendi içinde benzersiz olmalı (eşleştirme oyununda kullanılır).
- `sorular`: ana derslerde 10, diğerlerinde 8 soru.
  - `c`: seçenekler; **ilk seçenek HER ZAMAN doğru cevaptır** (uygulama karıştırır). 1. sınıfta 3, diğerlerinde 4 seçenek; doğru/yanlış sorusunda 2.
  - Tek ve tartışmasız doğru cevap olmalı; yanlış seçenekler makul ama kesin yanlış olmalı.
  - "Hepsi", "hiçbiri", "yukarıdakilerden" ve seçenek harfine/sırasına gönderme YASAK.
  - Görsel gerektiren soru yazma; gerekiyorsa emoji kullan (ör. "🍎🍎🍎 kaç elma var?").
  - `a`: kısa açıklama (neden doğru) ≤220.
  - Sorular kolaydan zora sıralansın; ezber yanında anlama/uygulama/akıl yürütme soruları da olsun.
- `uret` (yalnızca matematik, isteğe bağlı): sınırsız alıştırma üreticisi `[tür, üst sınır]`.
  Türler: say, topla, cikar, carp, bol, karsilastir, oruntu, eksik, basamak, yuvarla, ritmik, kesir, saat, para, cevre, alan.
  Üst sınır: sayıların en büyük değeri (carp/bol için en büyük çarpan, ritmik için adım).

## Müfredat
- 1-3. sınıflar: MEB Türkiye Yüzyılı Maarif Modeli programı; 4. sınıf: MEB 2018 programı. Konular o sınıfın tüm ünitelerini kapsamalı.
- Düzey: özel okul; konu sonlarında bir iki zenginleştirilmiş (beceri temelli) soru olsun.
- Dil: Türkçe, yazım ve noktalama kusursuz. 1. sınıfta çok kısa cümleler.
- Bilgi kesin doğru olmalı; emin olmadığın bilgiyi yazma.
- JS geçerli olmalı: metin içinde çift tırnak gerekirse `\"` ya da tek tırnak kullan.

## Denetim
`node tools/validate.mjs src/data/<dosya>.js` hatasız geçmeli.
