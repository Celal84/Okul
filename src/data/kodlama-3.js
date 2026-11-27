HW.add({ders:"kodlama", sinif:3, uniteler:[
  {ad:"Bilişim ve Kodlama", konular:[
    {id:"kod3-kosul", ad:"Koşul: Eğer - Değilse", e:"🔀",
     anlat:[
       {b:"Koşul nedir?", m:"Bilgisayar bazen karar vermek zorundadır. Koşul, 'eğer şu doğruysa bunu yap' diyen komuttur. Koşul ya doğrudur ya yanlıştır.", o:"Eğer yağmur yağıyorsa şemsiye al."},
       {b:"Eğer - değilse", m:"Koşul doğruysa 'eğer' bölümü, yanlışsa 'değilse' bölümü çalışır. İkisi aynı anda çalışmaz.", o:"Eğer ışık yeşilse geç, değilse bekle."},
       {b:"Karşılaştırma", m:"Koşullarda çoğu zaman karşılaştırma yaparız: büyüktür (>), küçüktür (<), eşittir (=). 7 > 5 doğru, 3 > 9 yanlıştır."},
       {b:"Robot ve koşul", m:"Robot koşulla çevresine göre davranır: 'Eğer önünde duvar varsa sağa dön, değilse ileri git.' Böylece aynı kod farklı yollarda çalışır."}
     ],
     ipucu:"EĞER doğruysa üstteki, DEĞİLSE alttaki çalışır. Yol ayrımı gibi düşün: ya o yol ya bu yol!",
     kartlar:[["Karar verdiren komut","Koşul"],["Koşul doğruysa çalışan bölüm","Eğer bölümü"],["Koşul yanlışsa çalışan bölüm","Değilse bölümü"],["7 > 5","Doğru"],["3 > 9","Yanlış"],["> işareti","Büyüktür"],["< işareti","Küçüktür"]],
     sorular:[
       {s:"Bilgisayara karar verdiren komut yapısı hangisidir?", c:["Koşul","Döngü","Dosya","Klasör"], a:"Koşul, duruma göre farklı komut çalıştırır."},
       {s:"'Eğer yağmur yağıyorsa şemsiye al, değilse şapka tak.' Yağmur yağmıyorsa ne yapılır?", c:["Şapka takılır","Şemsiye alınır","İkisi de yapılır","Hiçbir şey yapılmaz"], a:"Koşul yanlış olduğundan 'değilse' bölümü çalışır."},
       {s:"Hangisi bir koşul cümlesidir?", c:["Eğer hava soğuksa mont giy.","Üç kez zıpla.","İleri git.","Kalemi al."], a:"'Eğer' ile başlayan ve duruma bağlı cümle koşuldur."},
       {s:"5 > 8 koşulunun sonucu nedir?", c:["Yanlış","Doğru","8","5"], a:"5, 8'den büyük değildir; koşul yanlıştır."},
       {s:"'Eğer sayı 10'dan büyükse BÜYÜK yaz, değilse KÜÇÜK yaz.' Sayı 15 ise ne yazılır?", c:["BÜYÜK","KÜÇÜK","15","10"], a:"15 > 10 doğrudur, 'eğer' bölümü çalışır."},
       {s:"'Eğer önünde duvar varsa sağa dön, değilse ileri git.' Robotun önü boşsa ne yapar?", c:["İleri gider","Sağa döner","Sola döner","Durur"], a:"Duvar yok; koşul yanlış, 'değilse' çalışır."},
       {s:"Eğer - değilse yapısında iki bölüm aynı anda çalışır mı?", c:["Hayır, yalnız biri çalışır","Evet, ikisi de çalışır","Önce ikisi, sonra biri","İkisi de hiç çalışmaz"], a:"Koşul doğruysa biri, yanlışsa öbürü çalışır."},
       {s:"'Eğer puan 50'den büyükse GEÇTİ yaz, değilse KALDI yaz.' Puan tam 50 ise ne yazılır?", c:["KALDI","GEÇTİ","50","İkisi birden"], a:"50, 50'den büyük değildir; koşul yanlış, KALDI yazılır."}
     ]},
    {id:"kod3-hata-ayiklama", ad:"Hata Ayıklama", e:"🐞",
     anlat:[
       {b:"Hata nedir?", m:"Kod beklediğimiz gibi çalışmıyorsa içinde hata vardır. Hata yapmak öğrenmenin doğal bir parçasıdır; iyi kodcular hatalarını bulup düzeltir."},
       {b:"Hata ayıklama", m:"Koddaki hatayı bulup düzeltmeye hata ayıklama denir. Kodu adım adım izleriz, her adımda robotun nerede olduğuna bakarız."},
       {b:"Sık görülen hatalar", m:"Eksik komut, fazla komut, yanlış yön ve yanlış sıra en sık görülen hatalardır. Döngüde tekrar sayısının yanlış olması da bir hatadır.", o:"Hedef 3 sağ; kod ➡️➡️ ise bir ➡️ eksik."},
       {b:"Dosyanı düzenli tut", m:"Çalışmanı anlamlı bir adla kaydet ve ilgili klasöre koy. Klasör, dosyaları bir arada tutan kaptır. Düzenli dosyalar hatayı aramayı kolaylaştırır."}
     ],
     ipucu:"Bul - Düzelt - Yeniden dene! Kodu parmağınla adım adım izle, hata saklanamaz.",
     kartlar:[["Hatayı bulup düzeltmek","Hata ayıklama"],["Hata bulmanın yolu","Kodu adım adım izlemek"],["Gerekenden az komut","Eksik komut hatası"],["Gerekenden çok komut","Fazla komut hatası"],["Komutların yeri karışmış","Sıra hatası"],["Dosyaları bir arada tutan kap","Klasör"]],
     sorular:[
       {s:"Koddaki hatayı bulup düzeltmeye ne denir?", c:["Hata ayıklama","Döngü","Koşul","Kaydetme"], a:"Hatayı bulup düzeltme işi hata ayıklamadır."},
       {s:"Kod hata verince en doğru davranış hangisidir?", c:["Adım adım izleyip hatayı bulmak","Bilgisayarı kapatmak","Kodu tümüyle silmek","Vazgeçmek"], a:"Kod adım adım izlenerek hata bulunur ve düzeltilir."},
       {s:"Robot 3 kare sağa gitmeli. Kod: ➡️➡️. Hata nedir?", c:["Bir ➡️ eksik","Bir ➡️ fazla","Yön yanlış","Hata yok"], a:"3 kare için üç ➡️ gerekir, kodda iki tane var."},
       {s:"Robot 2 kare yukarı çıkmalı. Kod: ⬆️➡️. Hata nedir?", c:["İkinci komutun yönü yanlış","Bir komut eksik","Bir komut fazla","Hata yok"], a:"İkinci komut ⬆️ olmalıydı; ➡️ yanlış yöndür."},
       {s:"Robot 2 kare sola gitmeli. Kod: ⬅️⬅️⬅️. Hata nedir?", c:["Bir ⬅️ fazla","Bir ⬅️ eksik","Yön yanlış","Hata yok"], a:"2 kare için iki ⬅️ yeter; üçüncüsü fazladır."},
       {s:"Diş fırçalama algoritması: 1) Ağzını çalkala 2) Macunu sür 3) Fırçala. Hata nedir?", c:["Adımların sırası yanlış","Bir adım eksik","Bir adım fazla","Hata yok"], a:"Çalkalama en sonda olmalıdır; sıra hatası var."},
       {s:"Dosyalarını bir arada ve düzenli tutmak için neyi kullanırsın?", c:["Klasör","Hoparlör","Fare","Döngü"], a:"Klasör, dosyaları gruplayan kaptır."},
       {s:"Robot yalnız 3 kare sağa gitmeli. Kod: 3 kez tekrarla (➡️⬆️). Hata nedir?", c:["Döngünün içinde fazladan ⬆️ var","Tekrar sayısı az","Tekrar sayısı çok","Hata yok"], a:"⬆️ robotu 3 kare de yukarı çıkarır; döngüde yalnız ➡️ olmalı."}
     ]},
    {id:"kod3-scratch", ad:"Blok Tabanlı Kodlama: Scratch", e:"🐱",
     anlat:[
       {b:"Blok tabanlı kodlama", m:"Blok tabanlı kodlamada komut yazmak yerine hazır blokları sürükleyip alt alta takarız. Scratch bu tür bir kodlama ortamıdır."},
       {b:"Sahne ve kukla", m:"<b>Sahne</b>, projenin göründüğü alandır. <b>Kukla</b>, sahnede hareket eden karakterdir. Scratch'in ilk kuklası bir kedidir. Her kuklanın kendi kodu olur."},
       {b:"Blok türleri", m:"Bloklar görevlerine göre gruplanır. Hareket blokları kuklayı yürütür. Görünüm blokları konuşturur ve kılık değiştirir. Ses blokları ses çalar. Olay blokları kodu başlatır. Kontrol blokları tekrar ve koşul içerir."},
       {b:"Projeyi başlatmak", m:"Kodlar çoğunlukla 'yeşil bayrak tıklanınca' bloğuyla başlar. Yeşil bayrağa basınca altındaki bloklar yukarıdan aşağıya sırayla çalışır."}
     ],
     ipucu:"Sahne tiyatro, kukla oyuncu, bloklar senaryo! Yeşil bayrak = perde açılır.",
     kartlar:[["Projenin göründüğü alan","Sahne"],["Sahnede hareket eden karakter","Kukla"],["Scratch'in ilk kuklası","Kedi"],["Kuklayı yürüten bloklar","Hareket blokları"],["Kuklayı konuşturan bloklar","Görünüm blokları"],["Kodu başlatan bloklar","Olay blokları"],["Tekrar ve koşul blokları","Kontrol blokları"]],
     sorular:[
       {s:"Scratch'te projenin göründüğü alana ne denir?", c:["Sahne","Kukla","Blok","Klasör"], a:"Proje sahnede görünür."},
       {s:"Sahnede hareket eden karaktere ne denir?", c:["Kukla","Sahne","Dekor","Bayrak"], a:"Karakterlere kukla denir."},
       {s:"Scratch'te kod nasıl oluşturulur?", c:["Bloklar sürüklenip alt alta takılır","Kâğıda yazılır","Yalnız sesle söylenir","Fotoğraf çekilir"], a:"Scratch blok tabanlıdır; bloklar birbirine takılır."},
       {s:"Kodlar çoğunlukla neye basınca başlar?", c:["Yeşil bayrağa","Kırmızı düğmeye","Kuklaya iki kez","Klavyedeki her tuşa"], a:"'Yeşil bayrak tıklanınca' bloğu kodu başlatır."},
       {s:"'10 adım git' bloğu hangi blok türündendir?", c:["Hareket","Ses","Görünüm","Olay"], a:"Kuklayı yürüten bloklar hareket bloklarıdır."},
       {s:"'Merhaba de' bloğu hangi blok türündendir?", c:["Görünüm","Hareket","Ses","Kontrol"], a:"Konuşma balonu görünüm bloklarıyla yapılır."},
       {s:"'10 kez tekrarla' bloğu hangi blok türündendir?", c:["Kontrol","Hareket","Görünüm","Ses"], a:"Tekrar ve koşul blokları kontrol grubundadır."},
       {s:"Yeşil bayrak tıklanınca: '10 adım git', sonra 'Merhaba de'. Kukla ne yapar?", c:["Önce yürür, sonra Merhaba der","Önce Merhaba der, sonra yürür","Yalnız yürür","Yalnız Merhaba der"], a:"Bloklar yukarıdan aşağıya sırayla çalışır."}
     ]}
  ]}
]});
