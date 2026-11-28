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
    }
  ]}
]});
