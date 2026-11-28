HW.add({ders:"matematik", sinif:1, uniteler:[
  {ad:"Sayılar", konular:[
    {id:"mat1-sayilar", ad:"20'ye Kadar Sayılar ve Sayma", e:"🔢",
     anlat:[
       {b:"Nesneleri sayalım", m:"Nesneleri tek tek sayarız. Son söylediğin sayı, nesnelerin sayısıdır.", o:"🍎🍎🍎 = 3 elma"},
       {b:"11'den 20'ye", m:"10'dan sonra 11, 12, 13 diye devam ederiz. 20'ye kadar sayabiliriz.", o:"11, 12, 13, 14, 15, 16, 17, 18, 19, 20"},
       {b:"Ritmik sayma", m:"Atlayarak da sayarız. İkişer sayarken 2, 4, 6, 8 deriz. Beşer sayarken 5, 10, 15, 20 deriz."},
       {b:"Önce ve sonra", m:"Bir sayıdan önceki sayı 1 eksiktir. Sonraki sayı 1 fazladır.", o:"8'den önce 7, 8'den sonra 9 gelir."}
     ],
     ipucu:"İkişer: ayakkabı çifti gibi! 2, 4, 6, 8. Beşer: bir elin parmakları! 5, 10, 15, 20.",
     kartlar:[["10'dan sonra gelen sayı","11"],["19'dan sonra gelen sayı","20"],["İkişer sayma: 2, 4, 6, ?","8"],["Beşer sayma: 5, 10, ?","15"],["14'ten önce gelen sayı","13"],["20'den önce gelen sayı","19"],["Onar sayma: 10, 20, 30, ?","40"]],
     sorular:[
       {s:"🍎🍎🍎🍎🍎 Kaç elma var?", c:["5","4","6"], a:"Elmaları tek tek sayarız: 5 elma var."},
       {s:"7'den sonra hangi sayı gelir?", c:["8","6","9"], a:"7'den sonra 8 gelir."},
       {s:"12'den önce hangi sayı gelir?", c:["11","13","10"], a:"12'den bir önce 11 gelir."},
       {s:"İkişer sayıyoruz: 2, 4, 6, ? Sıradaki sayı kaçtır?", c:["8","7","10"], a:"Her adımda 2 artar. 6'dan sonra 8 gelir."},
       {s:"Beşer sayıyoruz: 5, 10, 15, ? Sıradaki sayı kaçtır?", c:["20","25","16"], a:"Her adımda 5 artar. 15'ten sonra 20 gelir."},
       {s:"19'dan sonra hangi sayı gelir?", c:["20","18","21"], a:"19'dan sonra 20 gelir."},
       {s:"⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ Kaç yıldız var?", c:["12","11","13"], a:"10 yıldız ve 2 yıldız daha var. Toplam 12 yıldız."},
       {s:"Hangi sayı 15 ile 17 arasındadır?", c:["16","14","18"], a:"15, 16, 17 diye sayarız. Aradaki sayı 16'dır."},
       {s:"Onar sayıyoruz: 0, 10, ? Sıradaki sayı kaçtır?", c:["20","11","15"], a:"Her adımda 10 artar. 10'dan sonra 20 gelir."},
       {s:"Ali ikişer sayıyor: 12, 14, 16, ? Ali hangi sayıyı söyler?", c:["18","17","20"], a:"Her adımda 2 artar. 16'dan sonra 18 gelir."}
     ],
     uret:["say",20]
    },
    {id:"mat1-karsilastirma", ad:"Karşılaştırma, Sıralama, Sıra Sayıları", e:"⚖️",
     anlat:[
       {b:"Büyük ve küçük", m:"Sayarken daha sonra gelen sayı daha büyüktür. 15 sayısı 12'den büyüktür.", o:"15 > 12 ve 12 < 15"},
       {b:"Eşit sayılar", m:"İki sayı aynıysa eşittir. Eşitlik işareti = dir.", o:"9 = 9"},
       {b:"Sıralama", m:"Sayıları küçükten büyüğe dizebiliriz. Büyükten küçüğe de dizebiliriz.", o:"3, 7, 12, 18 küçükten büyüğe sıralıdır."},
       {b:"Sıra bildiren sayılar", m:"Sırayı göstermek için 1., 2., 3. deriz. Okunuşu birinci, ikinci, üçüncüdür.", o:"Kuyrukta 3. kişi, üçüncü kişidir."}
     ],
     ipucu:"Büyük sayı, timsahın açık ağzı gibidir. Ağzı hep büyük sayıya doğru açılır: 9 > 4.",
     kartlar:[["15 mi 12 mi büyük?","15"],["8 mi 11 mi küçük?","8"],["7 ile 7 nasıl?","Eşit"],["1. nasıl okunur?","Birinci"],["2. nasıl okunur?","İkinci"],["3. nasıl okunur?","Üçüncü"],["5. nasıl okunur?","Beşinci"]],
     sorular:[
       {s:"5, 9, 7 sayılarından hangisi en büyüktür?", c:["9","5","7"], a:"9, bu üç sayının en büyüğüdür."},
       {s:"13 ile 8 sayılarından hangisi küçüktür?", c:["8","13","Eşittir"], a:"8, 13'ten önce gelir. Bu yüzden küçüktür."},
       {s:"Hangi sayı 6'ya eşittir?", c:["6","5","7"], a:"Aynı sayılar eşittir. 6 = 6."},
       {s:"Hangisi küçükten büyüğe doğru dizilmiştir?", c:["4, 9, 15","15, 9, 4","9, 4, 15"], a:"4 < 9 < 15 olduğu için ilk dizi küçükten büyüğe sıralıdır."},
       {s:"3. sayısı nasıl okunur?", c:["Üçüncü","İkinci","Dördüncü"], a:"3. sayısı üçüncü diye okunur."},
       {s:"Hangi sayı 14'ten büyüktür?", c:["17","11","9"], a:"17, 14'ten sonra gelir. Bu yüzden büyüktür."},
       {s:"Kuyrukta Ece 4. sıradadır. Önünde kaç kişi vardır?", c:["3","4","5"], a:"4. sıradaysa önünde 3 kişi vardır."},
       {s:"Hangi sayı 11'den küçük ve 8'den büyüktür?", c:["9","12","7"], a:"9, 8'den büyük ve 11'den küçüktür."},
       {s:"Hangisi büyükten küçüğe doğru dizilmiştir?", c:["18, 12, 5","5, 12, 18","12, 5, 18"], a:"18 > 12 > 5 olduğu için ilk dizi büyükten küçüğe sıralıdır."},
       {s:"Yarışta Can 5., Deniz 3. oldu. Kim yarışı daha önce bitirdi?", c:["Deniz","Can","Aynı anda bitirdiler"], a:"3. olan, 5. olandan önce bitirir. Deniz daha önce bitirdi."}
     ],
     uret:["karsilastir",20]
    },
    {id:"mat1-onluk-birlik", ad:"Onluk ve Birlik", e:"🧮",
     anlat:[
       {b:"Birlik", m:"Tek tek nesnelere birlik denir. 7 nesne, 7 birliktir."},
       {b:"Onluk", m:"10 birlik bir araya gelirse 1 onluk olur.", o:"10 birlik = 1 onluk"},
       {b:"Onluk ve birlik", m:"Sayıları onluk ve birliğe ayırırız. 13 sayısı 1 onluk ve 3 birliktir.", o:"13 = 1 onluk + 3 birlik"},
       {b:"20 sayısı", m:"2 onluk, 20 eder. 20'de 2 onluk vardır, birlik yoktur.", o:"20 = 2 onluk + 0 birlik"}
     ],
     ipucu:"Onluk bir deste gibidir, birlik tek tek. 10 tanesi bir deste olur.",
     kartlar:[["10 birlik kaç onluktur?","1 onluk"],["1 onluk kaç birliktir?","10 birlik"],["13 = 1 onluk ve ?","3 birlik"],["16 = 1 onluk ve ?","6 birlik"],["2 onluk kaçtır?","20"],["1 onluk 8 birlik kaçtır?","18"],["20 sayısında kaç onluk var?","2 onluk"]],
     sorular:[
       {s:"10 birlik kaç onluk eder?", c:["1 onluk","2 onluk","10 onluk"], a:"10 birlik, 1 onluk eder."},
       {s:"12 sayısında kaç onluk vardır?", c:["1 onluk","2 onluk","12 onluk"], a:"12 = 1 onluk + 2 birlik."},
       {s:"14 sayısı 1 onluk ve kaç birliktir?", c:["4","1","10"], a:"14 = 1 onluk + 4 birlik."},
       {s:"1 onluk 5 birlik kaçtır?", c:["15","6","51"], a:"1 onluk 10, 5 birlik 5 eder. 10 + 5 = 15."},
       {s:"17 sayısı kaç onluk kaç birliktir?", c:["1 onluk 7 birlik","7 onluk 1 birlik","1 onluk 1 birlik"], a:"17 = 1 onluk + 7 birlik."},
       {s:"2 onluk kaç eder?", c:["20","2","12"], a:"1 onluk 10 ise 2 onluk 20 eder."},
       {s:"Kaç birlik bir araya gelirse 1 onluk olur?", c:["10","5","20"], a:"10 birlik 1 onluk olur."},
       {s:"Hangi sayıda 1 onluk ve 9 birlik vardır?", c:["19","91","10"], a:"1 onluk + 9 birlik = 19."},
       {s:"Ela 10 kalemi bir kutuya koydu. Kutunun dışında 3 kalemi kaldı. Ela'nın kaç kalemi var?", c:["13","10","3"], a:"1 onluk ve 3 birlik var. 10 + 3 = 13."},
       {s:"Hangi sayı 1 onluktan fazla, 2 onluktan azdır ve birliği 6'dır?", c:["16","26","6"], a:"1 onluk ile 2 onluk arasında 6 birlikli sayı 16'dır."}
     ],
     uret:["basamak",20]
    },
    {id:"mat1-ritmik-sayma", ad:"Ritmik Sayma: İkişer, Beşer, Onar", e:"🪜",
     anlat:[
       {b:"Atlayarak sayma", m:"Sayıları belli sayıda atlayarak saymaya ritmik sayma denir. Her adımda aynı sayıyı ekleriz.", o:"İkişer: 2, 4, 6, 8, 10"},
       {b:"İkişer sayma", m:"İkişer sayarken her seferinde 2 ekleriz. Eldivenler, ayakkabılar ikişer ikişer sayılır.", o:"2, 4, 6, 8, 10, 12"},
       {b:"Beşer ve onar sayma", m:"Beşer sayarken 5, 10, 15, 20 deriz. Onar sayarken 10, 20, 30, 40 deriz.", o:"Onar: 10, 20, 30, 40, 50"},
       {b:"Ne işe yarar?", m:"Çok nesneyi hızlı saymak için gruplayıp ritmik sayarız. Sepetlerde 5'er elma varsa 5'er sayarız.", o:"3 sepet, her birinde 5 elma: 5, 10, 15"}
     ],
     ipucu:"İkişer: ayakkabı çifti! Beşer: bir elin parmakları! Onar: iki elin parmakları!",
     kartlar:[["2, 4, 6, ?","8"],["5, 10, 15, ?","20"],["10, 20, 30, ?","40"],["İkişer saymada 10'dan sonra","12"],["Beşer saymada 20'den sonra","25"],["Onar saymada 50'den sonra","60"],["Bir elde kaç parmak var?","5 parmak"]],
     sorular:[
       {s:"2, 4, 6, 8, ? Sıradaki sayı kaçtır?", c:["10","9","12"], a:"Her adımda 2 artar. 8'den sonra 10 gelir."},
       {s:"5, 10, 15, ? Sıradaki sayı kaçtır?", c:["20","16","25"], a:"Her adımda 5 artar. 15'ten sonra 20 gelir."},
       {s:"10, 20, 30, ? Sıradaki sayı kaçtır?", c:["40","31","35"], a:"Her adımda 10 artar. 30'dan sonra 40 gelir."},
       {s:"İkişer sayarken 12'den sonra hangi sayı gelir?", c:["14","13","15"], a:"12 + 2 = 14."},
       {s:"Beşer sayarken 25'ten sonra hangi sayı gelir?", c:["30","26","35"], a:"25 + 5 = 30."},
       {s:"Her sepette 2 elma var. 3 sepette kaç elma vardır?", c:["6","5","8"], a:"İkişer sayarız: 2, 4, 6. Toplam 6 elma."},
       {s:"Onar sayarken 60'tan önce hangi sayı gelir?", c:["50","59","40"], a:"Onar saymada 60'tan önce 50 gelir."},
       {s:"İkişer sayarken hangi sayı söylenmez?", c:["7","6","8"], a:"2, 4, 6, 8 diye sayarız. 7 söylenmez."},
       {s:"Bir elde 5 parmak var. 4 elde kaç parmak vardır?", c:["20","15","25"], a:"Beşer sayarız: 5, 10, 15, 20."},
       {s:"Ali kumbarasına her gün 5 lira atıyor. 4 gün sonra kumbarada kaç lira olur?", c:["20","15","25"], a:"5, 10, 15, 20. Kumbarada 20 lira olur."}
     ],
     uret:["ritmik",2]
    }
  ]},
  {ad:"İşlemler", konular:[
    {id:"mat1-toplama", ad:"Toplama İşlemi", e:"➕",
     anlat:[
       {b:"Toplama nedir?", m:"Nesneleri bir araya getirmek toplamadır. İşareti + dır. Sonuca toplam deriz.", o:"3 + 2 = 5"},
       {b:"İleri sayma", m:"İlk sayıdan sonra ileri sayarız. 6 + 3 için 7, 8, 9 deriz.", o:"6 + 3 = 9"},
       {b:"0 ile toplama", m:"Bir sayıya 0 eklersek sayı değişmez.", o:"8 + 0 = 8"},
       {b:"Yer değiştirme", m:"Sayıların yeri değişse de toplam aynıdır.", o:"4 + 5 = 5 + 4 = 9"},
       {b:"10'a tamamlama", m:"Önce 10'a tamamlarız. 8 + 5 için 8'e 2 ekle, 10 olur. Sonra 3 daha ekle, 13 olur.", o:"8 + 5 = 13"}
     ],
     ipucu:"Büyük sayıyı aklında tut, küçük sayı kadar ileri say. 9 + 3: 10, 11, 12!",
     kartlar:[["3 + 4","7"],["5 + 5","10"],["8 + 0","8"],["9 + 6","15"],["7 + 7","14"],["10 + 8","18"],["12 + 5","17"]],
     sorular:[
       {s:"2 + 3 = ?", c:["5","4","6"], a:"2'den sonra 3 ileri sayarız: 3, 4, 5."},
       {s:"4 + 4 = ?", c:["8","7","9"], a:"4 + 4 = 8."},
       {s:"6 + 0 = ?", c:["6","0","7"], a:"Bir sayıya 0 eklersek sayı değişmez."},
       {s:"7 + 5 = ?", c:["12","11","13"], a:"7 + 3 = 10, 2 daha eklersek 12 olur."},
       {s:"9 + 8 = ?", c:["17","16","18"], a:"9 + 1 = 10, 7 daha eklersek 17 olur."},
       {s:"10 + 6 = ?", c:["16","15","6"], a:"10 ile 6'yı toplayınca 16 olur."},
       {s:"8 + 7 = ?", c:["15","14","16"], a:"8 + 2 = 10, 5 daha eklersek 15 olur."},
       {s:"5 + ? = 12 işleminde ? yerine hangi sayı gelir?", c:["7","6","8"], a:"5 + 7 = 12."},
       {s:"Ali'nin 9 bilyesi var. 6 bilye daha aldı. Kaç bilyesi oldu?", c:["15","14","16"], a:"9 + 6 = 15."},
       {s:"Hangi işlemin toplamı 14'tür?", c:["8 + 6","7 + 8","9 + 4"], a:"8 + 6 = 14. 7 + 8 = 15, 9 + 4 = 13 eder."}
     ],
     uret:["topla",20]
    },
    {id:"mat1-cikarma", ad:"Çıkarma İşlemi", e:"➖",
     anlat:[
       {b:"Çıkarma nedir?", m:"Bir gruptan almak ya da ayırmak çıkarmadır. İşareti − dir. Sonuca fark deriz.", o:"5 − 2 = 3"},
       {b:"Geri sayma", m:"Sayıdan geriye doğru sayarız. 9 − 3 için 8, 7, 6 deriz.", o:"9 − 3 = 6"},
       {b:"0 ve kendisi", m:"Bir sayıdan 0 çıkarırsak sayı değişmez. Bir sayıdan kendisini çıkarırsak 0 olur.", o:"7 − 0 = 7 ve 7 − 7 = 0"},
       {b:"Toplamayla ilişki", m:"Çıkarma toplamanın tersidir. 5 + 3 = 8 ise 8 − 3 = 5 olur."}
     ],
     ipucu:"Çıkarma geri gitmektir: 12 − 3 için üç adım geri git: 11, 10, 9!",
     kartlar:[["8 − 3","5"],["10 − 4","6"],["7 − 7","0"],["9 − 0","9"],["15 − 5","10"],["14 − 6","8"],["17 − 4","13"]],
     sorular:[
       {s:"6 − 2 = ?", c:["4","3","5"], a:"6'dan 2 geri sayarız: 5, 4."},
       {s:"9 − 4 = ?", c:["5","4","6"], a:"9'dan 4 geri sayarız: 8, 7, 6, 5."},
       {s:"8 − 0 = ?", c:["8","0","7"], a:"Bir sayıdan 0 çıkarırsak sayı değişmez."},
       {s:"10 − 10 = ?", c:["0","10","1"], a:"Bir sayıdan kendisini çıkarırsak 0 kalır."},
       {s:"12 − 2 = ?", c:["10","9","11"], a:"12'den 2 çıkarınca 10 kalır."},
       {s:"13 − 4 = ?", c:["9","8","10"], a:"13 − 3 = 10, 1 daha çıkarırsak 9 kalır."},
       {s:"16 − 8 = ?", c:["8","7","9"], a:"8 + 8 = 16 olduğu için 16 − 8 = 8."},
       {s:"15 − 9 = ?", c:["6","7","5"], a:"9 + 6 = 15 olduğu için 15 − 9 = 6."},
       {s:"Elif'in 14 balonu vardı. 5 balon patladı. Kaç balonu kaldı?", c:["9","19","8"], a:"14 − 5 = 9."},
       {s:"Hangi sayıdan 6 çıkarırsak 7 kalır?", c:["13","12","14"], a:"13 − 6 = 7. Kontrol: 7 + 6 = 13."}
     ],
     uret:["cikar",20]
    },
    {id:"mat1-tamamlama", ad:"10'a Tamamlama ve Zihinden İşlem", e:"🧠",
     anlat:[
       {b:"10'a tamamlama", m:"Toplamı 10 eden sayı çiftlerini bilirsek işlemleri çabuk yaparız.", o:"1 + 9, 2 + 8, 3 + 7, 4 + 6, 5 + 5"},
       {b:"Yer değiştirme", m:"Toplarken sayıların yeri değişirse sonuç değişmez.", o:"3 + 5 = 5 + 3 = 8"},
       {b:"Sıfır ile işlem", m:"Bir sayıya 0 eklersek ya da sayıdan 0 çıkarırsak sayı değişmez.", o:"7 + 0 = 7 ve 7 − 0 = 7"},
       {b:"Büyük sayıdan başla", m:"Toplarken büyük sayıdan başlayıp küçüğü kadar ileri sayarız.", o:"2 + 6: 6'dan başla, 7, 8. Sonuç 8."}
     ],
     ipucu:"İki elin 10 parmak. 6 parmağı açarsan 4'ü kapalı kalır: 6 + 4 = 10!",
     kartlar:[["7 + ? = 10","3"],["4 + ? = 10","6"],["9 + ? = 10","1"],["8 + 0 = ?","8"],["3 + 5 ile 5 + 3","Aynı sonuç"],["10'a tamamlayan: 5 +","5"],["2 + 8 = ?","10"]],
     sorular:[
       {s:"6 + 4 = ?", c:["10","9","11"], a:"6 + 4 = 10."},
       {s:"7 + ▢ = 10 olması için kutuya hangi sayı gelmelidir?", c:["3","4","2"], a:"7'ye 3 eklersek 10 olur."},
       {s:"9 + 0 = ?", c:["9","0","10"], a:"Bir sayıya 0 eklenirse sayı değişmez."},
       {s:"3 + 5 = 5 + ▢ olması için kutuya hangi sayı gelmelidir?", c:["3","8","2"], a:"Toplamada yer değişince sonuç değişmez: 3 + 5 = 5 + 3."},
       {s:"Hangi toplamın sonucu 10'dur?", c:["2 + 8","3 + 6","5 + 4"], a:"2 + 8 = 10. Diğerleri 9 eder."},
       {s:"8 − 0 = ?", c:["8","0","7"], a:"Bir sayıdan 0 çıkarılırsa sayı değişmez."},
       {s:"Elimde 10 bilye var. 4 tanesi kırmızı, kalanı mavi. Kaç mavi bilye var?", c:["6","5","7"], a:"4 + 6 = 10 olduğundan 6 bilye mavidir."},
       {s:"1 + ▢ = 10 olması için kutuya hangi sayı gelmelidir?", c:["9","8","10"], a:"1 + 9 = 10."},
       {s:"Hangi işlemin sonucu diğerlerinden farklıdır?", c:["5 + 5","4 + 5","6 + 3"], a:"4 + 5 ve 6 + 3, 9 eder. 5 + 5 ise 10 eder."},
       {s:"Ayşe 6 sayfa kitap okudu. 10 sayfaya tamamlaması için kaç sayfa daha okumalı?", c:["4","5","3"], a:"6 + 4 = 10. Ayşe 4 sayfa daha okumalı."}
     ],
     uret:["eksik",10]
    },
    {id:"mat1-problemler", ad:"Toplama ve Çıkarma Problemleri", e:"🧩",
     anlat:[
       {b:"Problemi oku", m:"Önce problemi dikkatle oku. Neleri biliyoruz, neyi soruyor, bul."},
       {b:"Ne zaman toplarız?", m:"Eklenirse, birleşirse ya da hepsi sorulursa toplarız.", o:"5 elma ve 3 elma daha: 5 + 3 = 8"},
       {b:"Ne zaman çıkarırız?", m:"Verilirse, kaybolursa ya da kaç kaldı diye sorulursa çıkarırız.", o:"9 kalemin 4'ünü verdik: 9 − 4 = 5"},
       {b:"Kaç fazla?", m:"Kaç fazla ya da kaç eksik sorulursa büyük sayıdan küçük sayıyı çıkarırız.", o:"8 ve 5 için: 8 − 5 = 3 fazla"}
     ],
     ipucu:"Oku, düşün, işlemi seç, çöz, kontrol et. Eklenirse artı, giderse eksi!",
     kartlar:[["'Hepsi kaç oldu?' hangi işlem?","Toplama"],["'Kaç kaldı?' hangi işlem?","Çıkarma"],["Toplama işareti","+"],["Çıkarma işareti","−"],["Toplama sonucuna ne denir?","Toplam"],["Çıkarma sonucuna ne denir?","Fark"],["Problemde ilk adım ne?","Problemi okuruz"]],
     sorular:[
       {s:"Ayşe'nin 4 kalemi var. 3 kalem daha aldı. Kaç kalemi oldu?", c:["7","1","8"], a:"Kalem eklendi. 4 + 3 = 7."},
       {s:"Sepette 9 elma var. 4 elma yendi. Kaç elma kaldı?", c:["5","13","4"], a:"Elma azaldı. 9 − 4 = 5."},
       {s:"Bir sınıfta 8 kız, 7 erkek var. Sınıfta kaç çocuk var?", c:["15","1","14"], a:"Hepsi sorulur. 8 + 7 = 15."},
       {s:"Ağaçta 12 kuş vardı. 5 kuş uçtu. Kaç kuş kaldı?", c:["7","17","8"], a:"Kuşlar uçtu. 12 − 5 = 7."},
       {s:"Mert'in 6, Ece'nin 10 bilyesi var. Ece'nin kaç bilyesi fazla?", c:["4","16","3"], a:"Fark sorulur. 10 − 6 = 4."},
       {s:"Anne 7 elma, baba 5 elma aldı. Hepsi kaç elma aldı?", c:["12","2","11"], a:"7 + 5 = 12."},
       {s:"Bir kutuda 20 şeker vardı. 8 şeker yendi. Kaç şeker kaldı?", c:["12","28","13"], a:"20 − 8 = 12."},
       {s:"Ali'nin 9 pulu var. Veli'nin pulu Ali'den 3 fazla. Veli'nin kaç pulu var?", c:["12","6","13"], a:"9 + 3 = 12."},
       {s:"Defne 15 sayfa kitap okudu. Yarın 4 sayfa daha okuyacak. Toplam kaç sayfa okumuş olur?", c:["19","11","20"], a:"15 + 4 = 19."},
       {s:"Otobüste 11 kişi vardı. Durakta 4 kişi indi, 6 kişi bindi. Otobüste kaç kişi oldu?", c:["13","1","21"], a:"Önce 11 − 4 = 7. Sonra 7 + 6 = 13."}
     ],
     uret:["eksik",20]
    }
  ]},
  {ad:"Geometri ve Ölçme", konular:[
    {id:"mat1-sekiller", ad:"Cisimler, Şekiller, Yönler", e:"🔺",
     anlat:[
       {b:"Geometrik cisimler", m:"Küp, silindir, koni ve küre birer cisimdir. Top küredir. Zar küptür.", o:"Dondurma külahı koniye benzer."},
       {b:"Şekiller", m:"Üçgenin 3 kenarı vardır. Karenin ve dikdörtgenin 4 kenarı vardır. Dairenin kenarı yoktur.", o:"Üçgen 3, kare 4 kenarlıdır."},
       {b:"Sağ ve sol", m:"İki elimiz var: sağ el ve sol el. Sağ tarafımız sağ elimizin olduğu taraftır."},
       {b:"Ön, arka, alt, üst", m:"Yüzümüzün baktığı yer önümüzdür. Sırtımızın olduğu yer arkamızdır. Başımız üsttedir. Ayaklarımız alttadır."}
     ],
     ipucu:"Üçgen 3 köşeli, kare 4 köşeli, daire yuvarlak. Top küre, zar küp, konserve kutusu silindir!",
     kartlar:[["Üçgenin kaç kenarı var?","3"],["Dikdörtgenin kaç köşesi var?","4"],["Top hangi cisimdir?","Küre"],["Zar hangi cisimdir?","Küp"],["Konserve kutusu hangi cisimdir?","Silindir"],["Dondurma külahı hangi cisimdir?","Koni"],["Kenarı olmayan şekil","Daire"]],
     sorular:[
       {s:"Top hangi cisme benzer?", c:["Küre","Küp","Koni"], a:"Top her yandan yuvarlaktır. Küreye benzer."},
       {s:"Üçgenin kaç kenarı vardır?", c:["3","4","2"], a:"Üçgenin 3 kenarı vardır."},
       {s:"Hangi şeklin kenarı yoktur?", c:["Daire","Kare","Üçgen"], a:"Daire yuvarlaktır. Kenarı yoktur."},
       {s:"Zar hangi cisme benzer?", c:["Küp","Silindir","Küre"], a:"Zar, küp şeklindedir."},
       {s:"Karenin kaç köşesi vardır?", c:["4","3","5"], a:"Karenin 4 köşesi vardır."},
       {s:"Dondurma külahı hangi cisme benzer?", c:["Koni","Küre","Küp"], a:"Külah sivri uçludur. Koniye benzer."},
       {s:"Saatini sol koluna takan Can, saatini hangi koluna takmıştır?", c:["Sol","Sağ","Alt"], a:"Sol koluna taktığı için saati sol koldadır."},
       {s:"Ela'nın önünde Can, arkasında Deniz var. Ela'nın arkasında kim vardır?", c:["Deniz","Can","Efe"], a:"Arkasındaki çocuk Deniz'dir."},
       {s:"Hangi şeklin 3 köşesi vardır?", c:["Üçgen","Kare","Daire"], a:"Üçgenin 3 köşesi vardır."},
       {s:"Üç çocuk yan yana duruyor. Soldan sağa doğru Mert, Ece, Ali. Ece'nin sağında kim vardır?", c:["Ali","Mert","Ela"], a:"Soldan sağa Mert, Ece, Ali sıralıdır. Ece'nin sağında Ali vardır."}
     ]
    },
    {id:"mat1-oruntu", ad:"Örüntüler", e:"🔁",
     anlat:[
       {b:"Örüntü nedir?", m:"Kendini tekrar eden dizilere örüntü denir.", o:"🔴🔵🔴🔵🔴🔵"},
       {b:"Çekirdek", m:"Tekrar eden küçük parçaya çekirdek denir. 🔴🔵 bu örüntünün çekirdeğidir."},
       {b:"Sayı örüntüsü", m:"Sayılar da örüntü yapar. Her adımda aynı kadar artabilir.", o:"2, 4, 6, 8, 10"},
       {b:"Eksik parçayı bul", m:"Önce kuralı bul. Sonra boşluğa gelen parçayı yaz.", o:"1, 3, 5, ?, 9 için ? = 7"}
     ],
     ipucu:"Tekrar eden şey örüntüdür: çat-pat, çat-pat! Kuralı bul, devam et.",
     kartlar:[["Kendini tekrar eden dizi","Örüntü"],["Tekrar eden küçük parça","Çekirdek"],["2, 4, 6, ?","8"],["1, 3, 5, ?","7"],["5, 10, 15, ?","20"],["🔺🔵🔺🔵🔺 sıradaki","🔵"],["9, 8, 7, ?","6"]],
     sorular:[
       {s:"🔴🔵🔴🔵🔴 ? Sıradaki hangisidir?", c:["🔵","🔴","🔺"], a:"Kırmızı, mavi diye tekrar ediyor. Sıra maviye gelir."},
       {s:"2, 4, 6, 8, ? Sıradaki sayı kaçtır?", c:["10","9","12"], a:"Her adımda 2 artar. 8'den sonra 10 gelir."},
       {s:"1, 2, 3, 4, ? Sıradaki sayı kaçtır?", c:["5","6","4"], a:"Her adımda 1 artar. 4'ten sonra 5 gelir."},
       {s:"🍎🍌🍎🍌🍎 ? Sıradaki hangisidir?", c:["🍌","🍎","🍇"], a:"Elma, muz diye tekrar ediyor. Sıra muza gelir."},
       {s:"5, 10, 15, ? Sıradaki sayı kaçtır?", c:["20","25","16"], a:"Her adımda 5 artar. 15'ten sonra 20 gelir."},
       {s:"🔺🔺🔵🔺🔺🔵 örüntüsünün çekirdeği hangisidir?", c:["🔺🔺🔵","🔺🔵🔵","🔵🔵"], a:"Tekrar eden parça iki üçgen ve bir dairedir."},
       {s:"10, 9, 8, 7, ? Sıradaki sayı kaçtır?", c:["6","8","5"], a:"Her adımda 1 azalır. 7'den sonra 6 gelir."},
       {s:"1, 3, 5, 7, ? Sıradaki sayı kaçtır?", c:["9","8","10"], a:"Her adımda 2 artar. 7'den sonra 9 gelir."},
       {s:"3, 6, 9, ? Sıradaki sayı kaçtır?", c:["12","10","11"], a:"Her adımda 3 artar. 9'dan sonra 12 gelir."},
       {s:"⭐⭐🌙⭐⭐🌙⭐⭐ ? Sıradaki hangisidir?", c:["🌙","⭐","🌙🌙"], a:"İki yıldız, bir ay tekrar ediyor. İki yıldızdan sonra ay gelir."}
     ],
     uret:["oruntu",20]
    },
    {id:"mat1-uzunluk", ad:"Uzunluk Ölçme", e:"📏",
     anlat:[
       {b:"Uzunluğu ölçmek", m:"Bir şeyin uzunluğunu ölçerken adım, karış, ataç, kalem gibi aynı boyda nesneler kullanırız.", o:"Sıram 5 karış uzunluğunda."},
       {b:"Aynı birimi kullanalım", m:"Karşılaştırmak için hep aynı şeyle ölçmeliyiz. Büyük karışla az, küçük karışla çok karış çıkar.", o:"Büyük ayak az adım, küçük ayak çok adım atar."},
       {b:"Uzun ve kısa", m:"Aynı birimle ölçünce daha çok birim çıkan şey daha uzundur.", o:"8 kalem boyunda masa, 5 kalem boyundaki dolaptan uzundur."},
       {b:"Cetvel", m:"Cetvel uzunluk ölçmeye yarar. Cetvelle ölçerken 0 (sıfır) çizgisinden başlarız."}
     ],
     ipucu:"Ölçerken hep aynı birimi kullan. Boşluk bırakma, üst üste bindirme!",
     kartlar:[["Ölçmeden önce neyi seçeriz?","Bir birim"],["7 ataç mı 5 ataç mı uzun?","7 ataç"],["Cetvelde nereden başlarız?","Sıfırdan"],["Uzunluğu neyle ölçeriz?","Karış, adım"],["Daha kısa şeyde birim sayısı","Daha az çıkar"],["Daha uzun şeyde birim sayısı","Daha çok çıkar"]],
     sorular:[
       {s:"Hangisiyle uzunluk ölçülür?", c:["Cetvel","Terazi","Bardak"], a:"Uzunluğu cetvelle ölçeriz."},
       {s:"Masa 8 kalem, dolap 5 kalem boyundadır. Hangisi daha uzundur?", c:["Masa","Dolap","İkisi eşit"], a:"8, 5'ten büyüktür. Masa daha uzundur."},
       {s:"Cetvelle ölçerken nereden başlanır?", c:["0 (sıfır) çizgisinden","5 çizgisinden","Herhangi bir yerden"], a:"Cetvelde ölçmeye 0 çizgisinden başlarız."},
       {s:"Aynı sırayı Ali 6 karışla, Ece 8 karışla ölçtü. Karışı daha büyük olan kimdir?", c:["Ali","Ece","İkisi aynı"], a:"Karışı büyük olan daha az karış sayar. Ali'nin karışı daha büyüktür."},
       {s:"Hangisi uzunluk ölçmek için kullanılabilir?", c:["Adım","Kova","Terazi"], a:"Adımla uzunluk ölçebiliriz."},
       {s:"Hangisinin boyu en uzundur?", c:["Fil","Karınca","Kedi"], a:"Fil, bu hayvanların en uzun boylusudur."},
       {s:"Bir ip 3 kalem boyundadır. 4 kalem uç uca konursa ipten daha mı uzun daha mı kısa olur?", c:["Daha uzun","Daha kısa","Aynı"], a:"4 kalem, 3 kalemden uzundur."},
       {s:"Kalem 5 ataç, silgi 2 ataç uzunluğundadır. Kalem silgiden kaç ataç uzundur?", c:["3","7","2"], a:"5 − 2 = 3 ataç."},
       {s:"Ölçerken neden herkes aynı birimi kullanmalıdır?", c:["Sonuçlar karşılaştırılabilsin diye","Daha çabuk bitsin diye","Cetvel kırılmasın diye"], a:"Aynı birimle ölçersek sonuçları doğru karşılaştırırız."},
       {s:"Bir kalemi 4 ataçla ölçtük. Ataçlardan iki kat uzun olanlarla ölçersek kaç tane çıkar?", c:["2","8","4"], a:"Birim iki kat uzunsa sayı yarıya iner: 4'ün yarısı 2."}
     ]
    },
    {id:"mat1-tartma-sivi", ad:"Tartma ve Sıvı Ölçme", e:"⚖️",
     anlat:[
       {b:"Ağır ve hafif", m:"Terazi ile tartarız. Terazide aşağı inen kefedeki şey daha ağırdır, yukarı çıkan daha hafiftir.", o:"Taş tüyden ağırdır."},
       {b:"Tartma birimleri", m:"Nesneleri bilye ya da küp gibi aynı şeylerle tartabiliriz. Daha çok küp çeken daha ağırdır.", o:"Elma 4 bilye, armut 6 bilye ağırlığında. Armut daha ağırdır."},
       {b:"Sıvı ölçme", m:"Sıvıları bardak, kaşık, şişe gibi kaplarla ölçeriz. Kaç bardak olduğunu sayarız.", o:"Sürahide 3 bardak su var."},
       {b:"Dolu, yarım, boş", m:"Kap tam doluysa dolu, yarısı doluysa yarım dolu, içinde hiçbir şey yoksa boştur."}
     ],
     ipucu:"Terazide aşağı inen ağır, yukarı çıkan hafif. Sıvıyı kapla ölçeriz, say say!",
     kartlar:[["Terazide aşağı inen kefe","Daha ağır"],["Terazide yukarı çıkan kefe","Daha hafif"],["Sıvıyı neyle ölçeriz?","Bardakla"],["Tartma aleti","Terazi"],["Yarısı dolu kap","Yarım dolu"],["İçinde hiç su yok","Boş"]],
     sorular:[
       {s:"Hangisi tartma aletidir?", c:["Terazi","Cetvel","Saat"], a:"Tartmak için terazi kullanılır."},
       {s:"Terazide sol kefe aşağıdaysa hangisi daha ağırdır?", c:["Sol kefedeki","Sağ kefedeki","İkisi eşit"], a:"Aşağı inen kefedeki daha ağırdır."},
       {s:"Hangisi daha hafiftir?", c:["Tüy","Karpuz","Demir top"], a:"Tüy, bunların en hafifidir."},
       {s:"Sıvı ölçmek için hangisi kullanılır?", c:["Bardak","Cetvel","Terazi"], a:"Sıvıları bardak gibi kaplarla ölçeriz."},
       {s:"Sürahide 5 bardak su var. 2 bardak su içildi. Kaç bardak su kaldı?", c:["3","7","2"], a:"5 − 2 = 3 bardak."},
       {s:"Bir kefede 3 küp, diğerinde 5 küp var. Hangi kefe aşağı iner?", c:["5 küplü kefe","3 küplü kefe","İkisi de yerinde kalır"], a:"Daha çok küp olan kefe daha ağırdır, aşağı iner."},
       {s:"Terazinin iki kefesi aynı seviyedeyse ne söyleriz?", c:["Eşit ağırlıktalar","Biri çok ağırdır","Terazi bozuktur"], a:"Kefeler aynı seviyedeyse nesneler eşit ağırlıktadır."},
       {s:"Elma 4 bilye, armut 6 bilye ağırlığındadır. Hangisi daha ağırdır?", c:["Armut","Elma","İkisi aynı"], a:"6, 4'ten büyüktür. Armut daha ağırdır."},
       {s:"Dolu bir bardağın yarısını içtik. Bardak nasıl olur?", c:["Yarım dolu","Boş","Taşar"], a:"Yarısı içilince bardak yarım dolu kalır."},
       {s:"Kova 6 bardak su alıyor. Kovada 2 bardak su var. Kovayı doldurmak için kaç bardak su daha lazım?", c:["4","8","6"], a:"2 + 4 = 6. 4 bardak su daha lazım."}
     ]
    },
    {id:"mat1-olcme", ad:"Ölçme: Uzunluk, Tartma, Sıvı", e:"📏",
     anlat:[
       {b:"Uzunluk ölçme", m:"Uzunluğu adım, karış, kalem gibi araçlarla ölçeriz. Bunlara standart olmayan birimler denir.", o:"Sıra 6 kalem boyundadır."},
       {b:"Uzun ve kısa", m:"Daha çok kalem boyu olan nesne daha uzundur. Daha az olan daha kısadır."},
       {b:"Hafif ve ağır", m:"Terazide aşağı inen taraf daha ağırdır. Yukarı çıkan taraf daha hafiftir."},
       {b:"Sıvı ölçme", m:"Sıvıları bardak, şişe ve kaşıkla ölçeriz. Daha çok bardak alan kap daha çok sıvı alır.", o:"Sürahi 4 bardak su aldı."}
     ],
     ipucu:"Terazide ağır olan aşağı çöker. Hafif olan yukarı kalkar!",
     kartlar:[["Uzunluk için kullandığımız araç","Karış"],["Terazide aşağı inen taraf","Ağır"],["Terazide yukarı çıkan taraf","Hafif"],["Sıvıyı neyle ölçeriz?","Bardak"],["8 kalemlik ip, 5 kalemlikten","Daha uzun"],["Pamuk mu taş mı hafif?","Pamuk"],["Bir adım neyi ölçer?","Uzunluk"]],
     sorular:[
       {s:"Hangisiyle uzunluk ölçeriz?", c:["Karış","Bardak","Terazi"], a:"Karışla uzunluk ölçeriz. Bardak sıvı, terazi ağırlık ölçer."},
       {s:"Terazide aşağı inen taraf nasıldır?", c:["Ağır","Hafif","Boş"], a:"Aşağı inen taraf daha ağırdır."},
       {s:"Pamuk ve taştan hangisi daha hafiftir?", c:["Pamuk","Taş","Aynıdır"], a:"Pamuk, taştan daha hafiftir."},
       {s:"Hangisiyle sıvı ölçeriz?", c:["Bardak","Adım","Karış"], a:"Sıvıları bardakla ölçeriz."},
       {s:"Kalem 5 ataş, defter 8 ataş boyunda. Hangisi daha uzundur?", c:["Defter","Kalem","Aynı boydadırlar"], a:"8, 5'ten büyüktür. Defter daha uzundur."},
       {s:"Sürahi 6 bardak, kova 9 bardak su alıyor. Hangisi daha çok su alır?", c:["Kova","Sürahi","Eşit su alırlar"], a:"9, 6'dan büyüktür. Kova daha çok su alır."},
       {s:"Terazinin bir kefesinde 2 elma, diğerinde 5 elma var. Hangi kefe aşağı iner?", c:["5 elmalı kefe","2 elmalı kefe","İki kefe de aynı seviyede kalır"], a:"5 elma daha ağırdır. 5 elmalı kefe aşağı iner."},
       {s:"Boyu 10 kalem olan ip, 6 kalem olandan kaç kalem uzundur?", c:["4 kalem","16 kalem","6 kalem"], a:"10 − 6 = 4 kalem."},
       {s:"Fil mi kedi mi daha ağırdır?", c:["Fil","Kedi","Aynı ağırlıktadırlar"], a:"Fil, kediden çok daha ağırdır."},
       {s:"Bir kaba 3 bardak, başka bir kaba 4 bardak su koyduk. Toplam kaç bardak su var?", c:["7","1","12"], a:"3 + 4 = 7 bardak."}
     ]
    }
  ]},
  {ad:"Günlük Yaşam", konular:[
    {id:"mat1-para", ad:"Paralarımız", e:"💰",
     anlat:[
       {b:"Paramız", m:"Paramızın adı Türk lirasıdır. Kısaca TL yazarız.", o:"5 TL"},
       {b:"Madeni ve kâğıt para", m:"Paralar madeni ya da kâğıt olur. 1 TL madeni paradır. 5 TL, 10 TL, 20 TL kâğıt paradır."},
       {b:"Alışveriş", m:"Bir şey alınca parayı veririz. Para fazla ise para üstü alırız.", o:"10 TL verdik, 7 TL ödedik. 3 TL para üstü aldık."},
       {b:"Kuruş", m:"1 TL, 100 kuruştur. Kuruş küçük paradır."}
     ],
     ipucu:"Alışverişte önce say, sonra öde, sonra para üstünü kontrol et!",
     kartlar:[["Paramızın adı","Türk lirası"],["TL'nin kısa yazılışı","TL"],["1 TL kaç kuruştur?","100 kuruş"],["Alışverişte geri alınan para","Para üstü"],["5 TL + 5 TL","10 TL"],["10 TL − 4 TL","6 TL"],["2 TL + 3 TL","5 TL"]],
     sorular:[
       {s:"Paramızın adı nedir?", c:["Türk lirası","Dolar","Euro"], a:"Türkiye'de paramızın adı Türk lirasıdır."},
       {s:"5 TL ile 3 TL toplam kaç TL eder?", c:["8 TL","2 TL","7 TL"], a:"5 + 3 = 8 TL."},
       {s:"Bir kalem 4 TL. 10 TL verirsek para üstü kaç TL olur?", c:["6 TL","14 TL","5 TL"], a:"10 − 4 = 6 TL."},
       {s:"Hangi para en çoktur?", c:["20 TL","10 TL","5 TL"], a:"20, bu sayıların en büyüğüdür."},
       {s:"2 TL'lik ve 5 TL'lik iki şey aldık. Kaç TL öderiz?", c:["7 TL","3 TL","10 TL"], a:"2 + 5 = 7 TL."},
       {s:"1 TL kaç kuruştur?", c:["100 kuruş","10 kuruş","50 kuruş"], a:"1 TL, 100 kuruştur."},
       {s:"Elinde 15 TL var. 9 TL'lik kitap aldı. Kaç TL kaldı?", c:["6 TL","24 TL","5 TL"], a:"15 − 9 = 6 TL."},
       {s:"Sakız 3 TL, şeker 6 TL. İkisi birlikte kaç TL?", c:["9 TL","3 TL","10 TL"], a:"3 + 6 = 9 TL."},
       {s:"Ece 20 TL ile 12 TL'lik oyuncak aldı. Para üstü kaç TL?", c:["8 TL","32 TL","7 TL"], a:"20 − 12 = 8 TL."},
       {s:"Bir simit 5 TL. Ali 2 simit aldı. Kaç TL öder?", c:["10 TL","7 TL","25 TL"], a:"5 TL + 5 TL = 10 TL."}
     ],
     uret:["para",20]
    },
    {id:"mat1-zaman", ad:"Zaman: Saat, Gün, Ay", e:"⏰",
     anlat:[
       {b:"Saat", m:"Saatte akrep ve yelkovan vardır. Kısa olan akrep saati gösterir. Uzun olan yelkovan dakikayı gösterir."},
       {b:"Saat başı", m:"Yelkovan 12'deyse saat başıdır. Akrep 3'teyse saat 3'tür.", o:"Akrep 3, yelkovan 12: saat 3"},
       {b:"Buçuk", m:"Yelkovan 6'daysa saat buçuktur. Akrep 3 ile 4 arasındaysa saat 3 buçuktur.", o:"Saat 3 buçuk"},
       {b:"Günler ve aylar", m:"Bir haftada 7 gün vardır: Pazartesi, Salı, Çarşamba, Perşembe, Cuma, Cumartesi, Pazar. Bir yılda 12 ay vardır."}
     ],
     ipucu:"Kısa akrep saat, uzun yelkovan dakika. Yelkovan 12'de tam, 6'da buçuk!",
     kartlar:[["Saatte kısa ibre","Akrep"],["Saatte uzun ibre","Yelkovan"],["Haftada kaç gün var?","7"],["Yılda kaç ay var?","12"],["Yelkovan 12'de ise","Saat başı"],["Yelkovan 6'da ise","Buçuk"],["Pazartesi'den sonraki gün","Salı"]],
     sorular:[
       {s:"Saatte kısa olan ibre hangisidir?", c:["Akrep","Yelkovan","Kadran"], a:"Kısa ibre akreptir. Saati gösterir."},
       {s:"Bir haftada kaç gün vardır?", c:["7","5","12"], a:"Bir haftada 7 gün vardır."},
       {s:"Pazartesi'den sonra hangi gün gelir?", c:["Salı","Pazar","Çarşamba"], a:"Pazartesi'den sonra Salı gelir."},
       {s:"Yelkovan 12'de, akrep 5'te. Saat kaçtır?", c:["Saat 5","Saat 6","Saat 12"], a:"Yelkovan 12'deyse saat başıdır. Akrep 5'te olduğu için saat 5'tir."},
       {s:"Yelkovan 6'da, akrep 2 ile 3 arasında. Saat kaçtır?", c:["2 buçuk","3 buçuk","6 buçuk"], a:"Yelkovan 6'daysa buçuktur. Akrep 2'yi geçmiştir. Saat 2 buçuktur."},
       {s:"Bir yılda kaç ay vardır?", c:["12","7","10"], a:"Bir yılda 12 ay vardır."},
       {s:"Cumartesi'den önce hangi gün gelir?", c:["Cuma","Pazar","Perşembe"], a:"Cumartesi'den önce Cuma gelir."},
       {s:"Hafta sonu günleri hangileridir?", c:["Cumartesi ve Pazar","Pazartesi ve Salı","Cuma ve Cumartesi"], a:"Hafta sonu Cumartesi ve Pazar'dır."},
       {s:"Ocak ayından sonra hangi ay gelir?", c:["Şubat","Mart","Aralık"], a:"Ocak'tan sonra Şubat gelir."},
       {s:"Okul saat 9'da başlıyor. Ela okula saat 8 buçukta geldi. Ela nasıl geldi?", c:["Erken geldi","Geç geldi","Tam zamanında geldi"], a:"8 buçuk, 9'dan öncedir. Ela erken geldi."}
     ],
     uret:["saat",12]
    },
    {id:"mat1-saat", ad:"Saat: Tam ve Buçuk", e:"⏰",
     anlat:[
       {b:"Saatin parçaları", m:"Saatte kısa ibre akrep, uzun ibre yelkovandır. Akrep saati, yelkovan dakikayı gösterir."},
       {b:"Tam saat", m:"Yelkovan 12'yi gösteriyorsa saat tamdır. Akrep hangi sayıdaysa saat odur.", o:"Akrep 3'te, yelkovan 12'de: saat 3."},
       {b:"Buçuk", m:"Yelkovan 6'yı gösteriyorsa saat buçuktur. Akrep iki sayının arasındadır.", o:"Akrep 4 ile 5 arasında, yelkovan 6'da: saat 4 buçuk."},
       {b:"Saat geçince", m:"Saat ilerlerken akrep bir sayıdan sonraki sayıya gider. 1 saat sonra saat 1 artar.", o:"Saat 3 iken 1 saat sonra saat 4 olur."}
     ],
     ipucu:"Kısa akrep saati, uzun yelkovan dakikayı gösterir. Yelkovan 12'de TAM, 6'da BUÇUK!",
     kartlar:[["Saati gösteren ibre","Akrep"],["Dakikayı gösteren ibre","Yelkovan"],["Yelkovan 12'de ise","Saat tamdır"],["Yelkovan 6'da ise","Saat buçuktur"],["Akrep 5'te, yelkovan 12'de","Saat 5"],["Saatte uzun ibre hangisi?","Uzun ibre yelkovan"]],
     sorular:[
       {s:"Saatte kısa olan ibre hangisidir?", c:["Akrep","Yelkovan","Kadran"], a:"Kısa ibre akreptir."},
       {s:"Yelkovan 12'de, akrep 7'de. Saat kaçtır?", c:["7","12","6"], a:"Yelkovan 12'deyse saat tamdır. Akrep 7'de olduğundan saat 7'dir."},
       {s:"Saat 10 olduğunda yelkovan hangi sayıyı gösterir?", c:["12","6","10"], a:"Tam saatlerde yelkovan 12'dedir."},
       {s:"Yelkovan 6'yı gösteriyorsa saat nasıldır?", c:["Buçuk","Tam","Eksik"], a:"Yelkovan 6'dayken saat buçuktur."},
       {s:"Akrep 2 ile 3 arasında, yelkovan 6'da. Saat kaçtır?", c:["2 buçuk","3 buçuk","3 tam"], a:"Akrep 2'yi geçmiş, 3'e varmamış. Saat 2 buçuktur."},
       {s:"Okul saat 8'de başlıyor. Saat 8 iken yelkovan nerededir?", c:["12'de","6'da","8'de"], a:"Tam saatte yelkovan 12'dedir."},
       {s:"Saat 3'ten 4'e gelmesi için ne kadar zaman geçer?", c:["1 saat","2 saat","3 saat"], a:"3'ten 4'e 1 saat geçer."},
       {s:"Ela saat 7'de uyandı. 1 saat sonra kahvaltı yaptı. Kahvaltı saat kaçtaydı?", c:["8","6","9"], a:"7'den 1 saat sonra saat 8 olur."},
       {s:"Akrep 4'te, yelkovan 12'de. 2 saat sonra akrep hangi sayıyı gösterir?", c:["6","5","2"], a:"4'ten 2 saat sonra 5, 6 diye gider: saat 6."},
       {s:"Saat 9 buçuktur. Yarım saat sonra saat kaç olur?", c:["10","9","11"], a:"9 buçuktan yarım saat sonra yelkovan yine 12'ye gelir: saat 10."}
     ],
     uret:["saat",12]
    },
    {id:"mat1-takvim", ad:"Günler, Haftalar, Aylar, Mevsimler", e:"📅",
     anlat:[
       {b:"Hafta", m:"Bir haftada 7 gün vardır: Pazartesi, Salı, Çarşamba, Perşembe, Cuma, Cumartesi, Pazar."},
       {b:"Aylar", m:"Bir yılda 12 ay vardır: Ocak, Şubat, Mart, Nisan, Mayıs, Haziran, Temmuz, Ağustos, Eylül, Ekim, Kasım, Aralık."},
       {b:"Mevsimler", m:"4 mevsim vardır: ilkbahar, yaz, sonbahar, kış. Her mevsim 3 ay sürer.", o:"Kış: Aralık, Ocak, Şubat"},
       {b:"Dün, bugün, yarın", m:"Bugünden bir gün önceki gün dündür. Bugünden bir gün sonraki gün yarındır.", o:"Bugün Salı ise dün Pazartesi, yarın Çarşamba."}
     ],
     ipucu:"Haftada 7 gün, yılda 12 ay, 4 mevsim ve her mevsim 3 ay!",
     kartlar:[["Bir haftada kaç gün var?","7 gün"],["Bir yılda kaç ay var?","12 ay"],["Yılın ilk ayı","Ocak"],["Pazartesi'den sonraki gün","Salı"],["Kaç mevsim vardır?","4 mevsim"],["Cumartesi'den sonraki gün","Pazar"],["Yılın son ayı","Aralık"]],
     sorular:[
       {s:"Bir haftada kaç gün vardır?", c:["7","5","12"], a:"Bir hafta 7 gündür."},
       {s:"Bir yılda kaç ay vardır?", c:["12","7","10"], a:"Bir yıl 12 aydır."},
       {s:"Pazartesi'den sonra hangi gün gelir?", c:["Salı","Çarşamba","Pazar"], a:"Pazartesi'den sonra Salı gelir."},
       {s:"Bugün Çarşamba ise yarın hangi gündür?", c:["Perşembe","Salı","Cuma"], a:"Çarşamba'dan sonra Perşembe gelir."},
       {s:"Bugün Cuma ise dün hangi gündü?", c:["Perşembe","Cumartesi","Pazartesi"], a:"Cuma'dan önce Perşembe gelir."},
       {s:"Kar yağan mevsim hangisidir?", c:["Kış","Yaz","İlkbahar"], a:"Kar en çok kışın yağar."},
       {s:"Yılın ilk ayı hangisidir?", c:["Ocak","Şubat","Eylül"], a:"Yıl Ocak ayıyla başlar."},
       {s:"Bir mevsim kaç ay sürer?", c:["3","4","6"], a:"12 ay, 4 mevsime bölünür. Her mevsim 3 ay sürer."},
       {s:"Hafta sonu hangi günlerdir?", c:["Cumartesi ve Pazar","Pazartesi ve Salı","Cuma ve Cumartesi"], a:"Hafta sonu Cumartesi ve Pazar'dır."},
       {s:"Bugün Pazar. 3 gün sonra hangi gün olur?", c:["Çarşamba","Salı","Perşembe"], a:"Pazar'dan sonra Pazartesi, Salı, Çarşamba gelir. 3 gün sonra Çarşamba olur."}
     ]
    },
    {id:"mat1-veri-yarim", ad:"Veri Toplama, Bütün ve Yarım", e:"📊",
     anlat:[
       {b:"Veri toplama", m:"Sorular sorarak bilgi toplarız. Topladığımız bilgilere veri denir."},
       {b:"Çetele", m:"Her cevap için bir çizgi çekeriz. Çizgileri sayarak kaç kişi olduğunu buluruz.", o:"Elma: ||| = 3 kişi"},
       {b:"Sıklık tablosu", m:"Çeteledeki sayıları bir tabloya yazarız. Bu tabloya sıklık tablosu denir.", o:"Kedi 4, Köpek 6"},
       {b:"Bütün ve yarım", m:"Bir bütünü eşit iki parçaya bölersek her parça yarımdır. İki yarım bir bütün eder."}
     ],
     ipucu:"Çetele: çiz, çiz, çiz, say! Yarım: iki eşit parçadan biri.",
     kartlar:[["Toplanan bilgilere ne denir?","Veri"],["Çeteleyle ne sayarız?","Cevapları"],["Sayıların yazıldığı tablo","Sıklık tablosu"],["Bütünün eşit 2 parçasından biri","Yarım"],["İki yarım birleşirse","1 bütün"],["|||| çizgisi kaç eder?","4"],["Yarım elmanın diğer yarısı","Yarım elma"]],
     sorular:[
       {s:"Çetelede ||| kaç kişi demektir?", c:["3","2","4"], a:"Üç çizgi, 3 kişi demektir."},
       {s:"Bilgi toplayıp sayıları yazdığımız tabloya ne denir?", c:["Sıklık tablosu","Saat tablosu","Çarpım tablosu"], a:"Sayıları yazdığımız tabloya sıklık tablosu denir."},
       {s:"Bir elmayı eşit 2 parçaya bölersek her parça nedir?", c:["Yarım","Bütün","Üçte bir"], a:"Eşit iki parçadan biri yarımdır."},
       {s:"Çetele: Kedi ||||, Köpek ||. Kaç çocuk kediyi seçti?", c:["4","2","6"], a:"Kedinin yanında 4 çizgi var."},
       {s:"Çetele: Kırmızı |||, Mavi ||||. Hangi renk daha çok seçildi?", c:["Mavi","Kırmızı","Eşit seçildiler"], a:"4 çizgi, 3 çizgiden fazladır. Mavi daha çok seçildi."},
       {s:"İki yarım bir araya gelince ne olur?", c:["Bütün","Çeyrek","Yarım"], a:"İki yarım bir bütün eder."},
       {s:"Çetele: Elma ||||, Armut |||, Muz ||. Kaç çocuğa soruldu?", c:["9","3","8"], a:"4 + 3 + 2 = 9 çocuk."},
       {s:"Bir pizza eşit 2 parçaya bölündü. Ali 1 parçayı yedi. Pizzanın ne kadarı kaldı?", c:["Yarısı","Tamamı","Hiç kalmadı"], a:"2 parçadan 1'i kaldı. Pizzanın yarısı kaldı."},
       {s:"Bir ipi eşit iki parçaya böldük. Parçalar aynı uzunlukta mıdır?", c:["Evet, aynı uzunlukta","Hayır, biri daha uzun","Bilinemez"], a:"Eşit bölünce iki parça aynı uzunluktadır."},
       {s:"Çetele: Futbol ||||, Basket ||, Voleybol |||. Futbol, basketten kaç kişi fazla seçildi?", c:["2","6","1"], a:"4 − 2 = 2 kişi."}
     ]
    },
    {id:"mat1-yarim-butun", ad:"Bütün ve Yarım", e:"🍕",
     anlat:[
       {b:"Bütün", m:"Hiç bölünmemiş, eksiksiz şeye bütün denir.", o:"Bütün bir elma"},
       {b:"Yarım", m:"Bir bütünü 2 eşit parçaya bölersek her parçaya yarım denir.", o:"Pizzayı 2 eşit parçaya böl. Her parça yarımdır."},
       {b:"Parçalar eşit olmalı", m:"Parçalar aynı büyüklükte değilse bu parçalara yarım diyemeyiz."},
       {b:"İki yarım", m:"İki yarım bir araya gelirse bir bütün olur. Bir bütün de iki yarımdır.", o:"Yarım ekmek + yarım ekmek = 1 ekmek"}
     ],
     ipucu:"2 yarım = 1 bütün. Eşit olmayan parça yarım değildir!",
     kartlar:[["2 yarım kaç bütün eder?","1 bütün"],["Bütünün 2 eşit parçasından biri","Yarım"],["Hiç bölünmemiş şey","Bütün"],["1 bütün kaç yarımdır?","2 yarım"],["Yarımlar eşit midir?","Evet, eşittir"],["10'un yarısı","5"]],
     sorular:[
       {s:"Bir bütünü 2 eşit parçaya bölünce her parça neyi gösterir?", c:["Yarım","Bütün","İki bütün"], a:"Eşit iki parçadan her biri yarımdır."},
       {s:"2 yarım ne eder?", c:["1 bütün","2 bütün","Yarım"], a:"İki yarım bir bütün eder."},
       {s:"Bir elmayı iki arkadaş eşit paylaşırsa her biri elmanın neyini alır?", c:["Yarısını","Tamamını","Üçte birini"], a:"Elma 2 eşit parçaya bölünür, herkes yarısını alır."},
       {s:"Yarım ekmek ile yarım ekmek birleşirse ne olur?", c:["Bütün ekmek","Yarım ekmek","İki ekmek"], a:"Yarım ve yarım bir bütün eder."},
       {s:"12 bilyenin yarısı kaç bilyedir?", c:["6","5","7"], a:"12 bilye iki eşit gruba ayrılır. Her grup 6 bilye olur."},
       {s:"Bir kâğıdı 2 parçaya böldük ama bir parça diğerinden büyük. Bu parçalara yarım denir mi?", c:["Hayır, çünkü eşit değiller","Evet","Bazen"], a:"Yarım için parçaların eşit olması gerekir."},
       {s:"8 kalemin yarısı kaç kalemdir?", c:["4","3","16"], a:"8 kalem iki eşit gruba ayrılırsa her grup 4 kalem olur."},
       {s:"Elif pizzanın yarısını yedi. Geriye pizzanın ne kadarı kaldı?", c:["Yarısı","Tamamı","Dörtte biri"], a:"Bütünün yarısı yenince diğer yarısı kalır."},
       {s:"Bir sepetteki elmaların yarısı 5 elmadır. Sepette kaç elma vardır?", c:["10","5","2"], a:"İki yarım bir bütün eder: 5 + 5 = 10 elma."},
       {s:"Ayşe 6 kurabiyenin yarısını arkadaşına verdi. Ayşe'nin kaç kurabiyesi kaldı?", c:["3","6","2"], a:"6 kurabiyenin yarısı 3'tür. Ayşe'de 3 kurabiye kaldı."}
     ]
    },
    {id:"mat1-cetele-grafik", ad:"Çetele ve Nesne Grafiği", e:"📊",
     anlat:[
       {b:"Veri toplama", m:"Sorular sorarak bilgi toplarız. Örneğin sınıfta en sevilen meyveyi sorarız.", o:"5 kişi elma, 3 kişi muz seçti."},
       {b:"Çetele tutma", m:"Her cevap için bir çizgi çizeriz. 5. çizgiyi, ilk dört çizginin üstünden çapraz çizeriz. Böylece beşer sayarız."},
       {b:"Nesne grafiği", m:"Her cevap için bir resim ya da kutu koyarız. En çok olan en uzun sırayı oluşturur.", o:"🍎🍎🍎 elma, 🍌🍌 muz"},
       {b:"Grafiği okuyalım", m:"Grafiğe bakarak en çok olanı, en az olanı ve kaç tane olduğunu söyleriz."}
     ],
     ipucu:"Çetele: dört çizgi, beşincisi çapraz! En uzun sıra, en çok olandır.",
     kartlar:[["Veri nasıl toplanır?","Soru sorarak"],["Çetelede 5. çizgi nasıl çizilir?","Çapraz çizilir"],["En uzun sıra neyi gösterir?","En çok olanı"],["En kısa sıra neyi gösterir?","En az olanı"],["Resimlerle gösterim nedir?","Nesne grafiği"],["|||| ile 1 çapraz çizgi","5"]],
     sorular:[
       {s:"Çetelede 4 çizgi ve üstünden geçen 1 çapraz çizgi kaç eder?", c:["5","4","6"], a:"4 çizgi ve 1 çapraz çizgi 5 eder."},
       {s:"🍎🍎🍎🍌🍌 Grafikte kaç elma vardır?", c:["3","2","5"], a:"Üç elma vardır."},
       {s:"🍎🍎🍎🍌🍌 Hangi meyve daha çoktur?", c:["Elma","Muz","İkisi eşit"], a:"3 elma, 2 muzdan fazladır."},
       {s:"🍎🍎🍎🍌🍌 Elma muzdan kaç tane fazladır?", c:["1","2","3"], a:"3 − 2 = 1 tane fazladır."},
       {s:"Çetelede ||| kaç eder?", c:["3","4","1"], a:"Üç çizgi, 3 eder."},
       {s:"Grafikte en kısa sıra neyi gösterir?", c:["En az seçileni","En çok seçileni","Eşit olanı"], a:"En kısa sıra, en az olanı gösterir."},
       {s:"Sınıfta 4 kişi mavi, 6 kişi kırmızı rengi seçti. Her çocuk bir renk seçtiyse kaç çocuğa soruldu?", c:["10","2","9"], a:"4 + 6 = 10 çocuğa sorulmuştur."},
       {s:"⚽⚽⚽⚽ 🏀🏀 Futbol topu basket topundan kaç tane fazladır?", c:["2","4","6"], a:"4 − 2 = 2 tane fazladır."},
       {s:"Çetelede neden her 5. çizgiyi çapraz çizeriz?", c:["Beşer sayıp kolay saymak için","Daha güzel görünsün diye","Çizgiler bitsin diye"], a:"Beşerli gruplar saymayı kolaylaştırır."},
       {s:"Çetelede bir grupta 5 çizgi, diğer grupta 2 çizgi var. Toplam kaç çizgi vardır?", c:["7","5","10"], a:"5 + 2 = 7 çizgi."}
     ]
    }
  ]}
]});
