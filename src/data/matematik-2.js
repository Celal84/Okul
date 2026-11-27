HW.add({ders:"matematik", sinif:2, uniteler:[
  {ad:"Sayılar ve Örüntüler", konular:[
    {id:"mat2-sayilar-basamak", ad:"100'e Kadar Sayılar, Basamak Değeri", e:"🔢",
     anlat:[
       {b:"100'e kadar sayılar", m:"Sayıları 100'e kadar sayarız. Onar onar sayarken 10, 20, 30 diye 100'e gideriz.", o:"10, 20, 30, 40, 50"},
       {b:"Basamaklar", m:"İki basamaklı sayıda sağdaki basamak birlikler, soldaki basamak onluklardır.", o:"47: 4 onluk ve 7 birlik"},
       {b:"Basamak değeri", m:"Bir rakamın değeri bulunduğu basamağa göre değişir. 47'de 4'ün değeri 40, 7'nin değeri 7'dir.", o:"47 = 40 + 7"},
       {b:"Sayıları karşılaştırma", m:"Önce onluklara bakarız. Onluğu çok olan sayı büyüktür. Onlukları aynıysa birliklere bakarız.", o:"63 > 58 ve 63 < 67"}
     ],
     ipucu:"Sağ bir, sol on! Sağdaki basamak birlik, soldaki basamak onluktur.",
     kartlar:[["47 sayısında 4'ün basamak değeri","40"],["47 sayısında 7'nin basamak değeri","7"],["3 onluk 5 birlik","35"],["10 onluk","100"],["60 + 8","68"],["Sağdaki basamak","Birlikler"],["Soldaki basamak","Onluklar"]],
     sorular:[
       {s:"56 sayısının onlar basamağındaki rakam kaçtır?", c:["5","6","56","11"], a:"56 = 5 onluk + 6 birlik. Onlar basamağındaki rakam 5'tir."},
       {s:"4 onluk 3 birlik hangi sayıdır?", c:["43","34","7","40"], a:"4 onluk 40, 3 birlik 3 eder. 40 + 3 = 43."},
       {s:"72 sayısında 7'nin basamak değeri kaçtır?", c:["70","7","72","14"], a:"7 onlar basamağında olduğu için değeri 70'tir."},
       {s:"80 + 5 işleminin sonucu kaçtır?", c:["85","58","13","800"], a:"8 onluk ve 5 birlik, 85 eder."},
       {s:"47, 74, 44 ve 70 sayılarından hangisi en büyüktür?", c:["74","47","44","70"], a:"Onluğu en çok olan 74'tür."},
       {s:"Onar onar sayıyoruz: 30, 40, 50, ? Sıradaki sayı kaçtır?", c:["60","51","70","55"], a:"Her adımda 10 artar. 50'den sonra 60 gelir."},
       {s:"9 onluk kaç eder?", c:["90","9","19","99"], a:"9 onluk 90'dır."},
       {s:"Hangi sayıda onlar ve birler basamağındaki rakamlar 6'dır?", c:["66","16","60","6"], a:"Her iki basamakta da 6 olan sayı 66'dır."},
       {s:"3 ve 8 rakamlarını bir kez kullanarak yazılabilecek en büyük iki basamaklı sayı kaçtır?", c:["83","38","88","33"], a:"Büyük rakamı onlar basamağına yazarız. En büyük sayı 83'tür."},
       {s:"Ela 10'arlı 3 kutu kalem ve 6 tane tek kalem aldı. Kaç kalemi vardır?", c:["36","63","9","30"], a:"3 kutu 30 kalem eder. 30 + 6 = 36."}
     ],
     uret:["basamak",100]
    },
    {id:"mat2-yuvarlama-oruntu", ad:"Yuvarlama ve Sayı Örüntüleri", e:"🎯",
     anlat:[
       {b:"En yakın onluk", m:"Bir sayıyı en yakın onluğa yuvarlarken birlik basamağına bakarız. Sayı hangi onluğa daha yakınsa ona yuvarlarız."},
       {b:"Yuvarlama kuralı", m:"Birler 0, 1, 2, 3, 4 ise aşağı yuvarlarız. Birler 5, 6, 7, 8, 9 ise yukarı yuvarlarız.", o:"43 → 40 ve 47 → 50"},
       {b:"Artan örüntü", m:"Sayılar aynı sayı kadar artabilir. Kuralı bulursak örüntüyü devam ettiririz.", o:"5, 10, 15, 20, 25"},
       {b:"Azalan örüntü", m:"Azalan örüntüde her adımda aynı sayı çıkarılır.", o:"50, 45, 40, 35"}
     ],
     ipucu:"0-4 aşağı kalır, 5-9 yukarı çıkar: 'Beş ve üstü, yukarı koş!'",
     kartlar:[["43 en yakın onluğa","40"],["47 en yakın onluğa","50"],["65 en yakın onluğa","70"],["82 en yakın onluğa","80"],["29 en yakın onluğa","30"],["3, 6, 9, ?","12"],["50, 45, 40, ?","35"]],
     sorular:[
       {s:"34 sayısı en yakın onluğa yuvarlanırsa kaç olur?", c:["30","40","35","3"], a:"Birler basamağı 4'tür. Aşağı yuvarlarız: 30."},
       {s:"68 sayısı en yakın onluğa yuvarlanırsa kaç olur?", c:["70","60","68","80"], a:"Birler basamağı 8'dir. Yukarı yuvarlarız: 70."},
       {s:"75 sayısı en yakın onluğa yuvarlanırsa kaç olur?", c:["80","70","75","90"], a:"Birler basamağı 5'tir. Yukarı yuvarlarız: 80."},
       {s:"21 sayısı en yakın onluğa yuvarlanırsa kaç olur?", c:["20","30","10","21"], a:"Birler basamağı 1'dir. Aşağı yuvarlarız: 20."},
       {s:"5, 10, 15, 20, ? Sıradaki sayı kaçtır?", c:["25","30","22","24"], a:"Her adımda 5 artar. 20'den sonra 25 gelir."},
       {s:"3, 6, 9, 12, ? Sıradaki sayı kaçtır?", c:["15","14","16","18"], a:"Her adımda 3 artar. 12'den sonra 15 gelir."},
       {s:"50, 45, 40, 35, ? Sıradaki sayı kaçtır?", c:["30","25","20","32"], a:"Her adımda 5 azalır. 35'ten sonra 30 gelir."},
       {s:"Hangi sayı en yakın onluğa yuvarlanınca 50 olur?", c:["52","57","44","36"], a:"52'nin birler basamağı 2'dir. Aşağı yuvarlanır: 50."},
       {s:"12, 14, 16, 18 örüntüsünün kuralı her adımda kaç artmaktır?", c:["2","4","12","18"], a:"Sayılar her adımda 2 artıyor."},
       {s:"Bir kitapta 38 sayfa var. Öğretmen sayfa sayısını en yakın onluğa yuvarlamamızı istedi. Cevap kaçtır?", c:["40","30","38","35"], a:"Birler basamağı 8'dir. Yukarı yuvarlarız: 40."}
     ],
     uret:["yuvarla",100]
    }
  ]},
  {ad:"Dört İşlem", konular:[
    {id:"mat2-toplama", ad:"Toplama İşlemi (Eldeli)", e:"➕",
     anlat:[
       {b:"Eldesiz toplama", m:"Birlikleri birliklerle, onlukları onluklarla toplarız. 23 + 14 için 3 + 4 = 7 ve 2 + 1 = 3 olur.", o:"23 + 14 = 37"},
       {b:"Eldeli toplama", m:"Birlikler 10 ya da daha çok ediyorsa 1 onluk oluşur. Bu onluğu onlar basamağına ekleriz. Buna el denir.", o:"28 + 15: 8 + 5 = 13, 3 yaz 1 el. 2 + 1 + 1 = 4. Sonuç 43."},
       {b:"Alt alta yazma", m:"Sayıları alt alta yazarız. Birlikler birliklerin, onluklar onlukların altına gelir. Toplamaya sağdan başlarız."},
       {b:"Kontrol", m:"Toplamdan bir sayıyı çıkarırsak diğer sayıyı buluruz. Böylece sonucu kontrol ederiz.", o:"43 − 15 = 28"}
     ],
     ipucu:"Sağdan başla, 10 olunca el ver: 'Birlik 10 oldu, onluğa taşı!'",
     kartlar:[["23 + 14","37"],["35 + 20","55"],["28 + 15","43"],["47 + 26","73"],["59 + 1","60"],["Toplama nereden başlar?","Sağdan"],["Birlikler 10 olursa ne olur?","1 el olur"]],
     sorular:[
       {s:"32 + 25 = ?", c:["57","47","67","52"], a:"2 + 5 = 7 ve 3 + 2 = 5. Sonuç 57."},
       {s:"41 + 36 = ?", c:["77","75","87","67"], a:"1 + 6 = 7 ve 4 + 3 = 7. Sonuç 77."},
       {s:"24 + 18 = ?", c:["42","32","52","41"], a:"4 + 8 = 12, 2 yaz 1 el. 2 + 1 + 1 = 4. Sonuç 42."},
       {s:"36 + 27 = ?", c:["63","53","62","73"], a:"6 + 7 = 13, 3 yaz 1 el. 3 + 2 + 1 = 6. Sonuç 63."},
       {s:"58 + 9 = ?", c:["67","57","68","77"], a:"8 + 9 = 17, 7 yaz 1 el. 5 + 1 = 6. Sonuç 67."},
       {s:"45 + 45 = ?", c:["90","80","89","100"], a:"5 + 5 = 10, 0 yaz 1 el. 4 + 4 + 1 = 9. Sonuç 90."},
       {s:"67 + 25 = ?", c:["92","82","91","93"], a:"7 + 5 = 12, 2 yaz 1 el. 6 + 2 + 1 = 9. Sonuç 92."},
       {s:"Bir okulda 48 kız ve 37 erkek öğrenci var. Okulda kaç öğrenci vardır?", c:["85","75","84","95"], a:"8 + 7 = 15, 5 yaz 1 el. 4 + 3 + 1 = 8. Sonuç 85."},
       {s:"Ece'nin 29 kartı, Can'ın 34 kartı var. İkisinin birlikte kaç kartı vardır?", c:["63","53","62","73"], a:"9 + 4 = 13, 3 yaz 1 el. 2 + 3 + 1 = 6. Sonuç 63."},
       {s:"Hangi sayıya 26 eklersek 51 olur?", c:["25","77","35","75"], a:"51 − 26 = 25. Kontrol: 25 + 26 = 51."}
     ],
     uret:["topla",100]
    },
    {id:"mat2-cikarma", ad:"Çıkarma İşlemi (Onluk Bozarak)", e:"➖",
     anlat:[
       {b:"Onluk bozmadan çıkarma", m:"Birlikten birliği, onluktan onluğu çıkarırız. 57 − 24 için 7 − 4 = 3 ve 5 − 2 = 3 olur.", o:"57 − 24 = 33"},
       {b:"Onluk bozma", m:"Birlikler yetmiyorsa 1 onluğu bozarız. 1 onluk 10 birlik olur. Bu birliklerle çıkarmayı yaparız.", o:"42 − 17: 12 − 7 = 5, 3 − 1 = 2. Sonuç 25."},
       {b:"Sağdan başla", m:"Çıkarmaya da sağdan, yani birliklerden başlarız. Büyük sayıyı üste yazarız."},
       {b:"Toplamayla kontrol", m:"Farka çıkarılan sayıyı ekleriz. Büyük sayıyı bulmalıyız.", o:"25 + 17 = 42"}
     ],
     ipucu:"Birlik yetmiyorsa komşu onluktan 10 birlik al: 'Komşudan onluk ödünç!'",
     kartlar:[["57 − 24","33"],["68 − 30","38"],["42 − 17","25"],["50 − 8","42"],["71 − 36","35"],["90 − 45","45"],["Birlik küçükse ne yaparız?","Onluk böleriz"]],
     sorular:[
       {s:"78 − 35 = ?", c:["43","53","113","42"], a:"8 − 5 = 3 ve 7 − 3 = 4. Sonuç 43."},
       {s:"86 − 40 = ?", c:["46","26","36","56"], a:"8 onluktan 4 onluk çıkarsa 4 onluk kalır. 4 onluk ve 6 birlik 46 eder."},
       {s:"52 − 18 = ?", c:["34","44","46","36"], a:"12 − 8 = 4. Onluk 4 kalır, 4 − 1 = 3. Sonuç 34."},
       {s:"73 − 29 = ?", c:["44","54","46","56"], a:"13 − 9 = 4. Onluk 6 kalır, 6 − 2 = 4. Sonuç 44."},
       {s:"60 − 27 = ?", c:["33","43","37","87"], a:"10 − 7 = 3. Onluk 5 kalır, 5 − 2 = 3. Sonuç 33."},
       {s:"91 − 46 = ?", c:["45","55","35","57"], a:"11 − 6 = 5. Onluk 8 kalır, 8 − 4 = 4. Sonuç 45."},
       {s:"100 − 40 = ?", c:["60","140","50","70"], a:"10 onluktan 4 onluk çıkarsak 6 onluk kalır: 60."},
       {s:"Bahçede 65 çiçek vardı. 28 çiçek soldu. Kaç çiçek kaldı?", c:["37","47","43","93"], a:"15 − 8 = 7. Onluk 5 kalır, 5 − 2 = 3. Sonuç 37."},
       {s:"Ali 84 sayfalık kitabın 39 sayfasını okudu. Kaç sayfa kaldı?", c:["45","55","53","123"], a:"14 − 9 = 5. Onluk 7 kalır, 7 − 3 = 4. Sonuç 45."},
       {s:"Hangi sayıdan 25 çıkarırsak 48 kalır?", c:["73","23","63","83"], a:"48 + 25 = 73. Kontrol: 73 − 25 = 48."}
     ],
     uret:["cikar",100]
    },
    {id:"mat2-zihinden-tahmin", ad:"Zihinden İşlem ve Tahmin", e:"🧠",
     anlat:[
       {b:"Onluk ekleme", m:"Onluk eklerken ya da çıkarırken yalnızca onlar basamağı değişir.", o:"34 + 20 = 54 ve 57 − 30 = 27"},
       {b:"10'a tamamlama", m:"Önce sayıyı 10'a tamamlarız. 8 + 6 için 8'e 2 ekle, 10 olur. Sonra 4 daha ekle, 14 olur.", o:"8 + 6 = 14"},
       {b:"Tahmin", m:"Sayıları en yakın onluğa yuvarlarız ve yaklaşık sonucu buluruz.", o:"48 + 31 yaklaşık 50 + 30 = 80"},
       {b:"Sonucu kontrol", m:"Bulduğumuz sonuç tahminimize yakın olmalıdır. Çok farklıysa işlemi yeniden yaparız."}
     ],
     ipucu:"Önce yuvarla, sonra işlem yap: yaklaşık sonucu bulursun!",
     kartlar:[["34 + 20","54"],["57 − 30","27"],["48 + 31 yaklaşık kaçtır?","80"],["Yaklaşık sonuçta sayıları ne yaparız?","Yuvarlarız"],["9 + 5","14"],["7 + ? = 10","3"],["62 − 20","42"]],
     sorular:[
       {s:"45 + 30 = ?", c:["75","48","65","85"], a:"Onluk eklenir. 4 onluk + 3 onluk = 7 onluk. Sonuç 75."},
       {s:"68 − 20 = ?", c:["48","88","58","46"], a:"6 onluktan 2 onluk çıkarsak 4 onluk kalır. Sonuç 48."},
       {s:"9 + 7 = ?", c:["16","15","17","14"], a:"9 + 1 = 10, 6 daha eklersek 16 olur."},
       {s:"80 − 30 = ?", c:["50","110","60","40"], a:"8 onluktan 3 onluk çıkarsa 5 onluk kalır: 50."},
       {s:"52 + 19 işleminin yaklaşık sonucu kaçtır? (Sayıları en yakın onluğa yuvarla.)", c:["70","80","60","50"], a:"52 yaklaşık 50, 19 yaklaşık 20. 50 + 20 = 70."},
       {s:"39 + 41 işleminin yaklaşık sonucu kaçtır? (Sayıları en yakın onluğa yuvarla.)", c:["80","70","90","100"], a:"39 yaklaşık 40, 41 yaklaşık 40. 40 + 40 = 80."},
       {s:"8 + 5 işleminde önce 10'a tamamlamak için 8'e kaç eklenir?", c:["2","3","5","1"], a:"8 + 2 = 10. Sonra 3 daha ekleriz: 13."},
       {s:"Zihinden hesapla: 15 + 15 = ?", c:["30","25","20","35"], a:"10 + 10 = 20 ve 5 + 5 = 10. Sonuç 30."},
       {s:"Süt 28 TL, ekmek 11 TL. Sayıları en yakın onluğa yuvarlarsak yaklaşık kaç TL öderiz?", c:["40 TL","50 TL","30 TL","20 TL"], a:"28 yaklaşık 30, 11 yaklaşık 10. 30 + 10 = 40 TL."},
       {s:"Hangi işlemin sonucu tam 90'dır?", c:["41 + 49","10 + 20","30 + 15","25 + 5"], a:"41 + 49 = 90. Diğerleri 30, 45 ve 30 eder."}
     ]
    },
    {id:"mat2-carpma", ad:"Çarpma İşlemi", e:"✖️",
     anlat:[
       {b:"Çarpma nedir?", m:"Aynı sayıyı tekrar tekrar toplamak çarpmadır. İşareti × dir.", o:"3 + 3 + 3 = 3 × 3 = 9"},
       {b:"Gruplar", m:"Her grupta aynı sayıda nesne varsa çarparız. 4 tabakta 2'şer kurabiye varsa 4 × 2 = 8 kurabiye vardır.", o:"4 × 2 = 8"},
       {b:"2'lerin çarpımı", m:"2 × 1 = 2, 2 × 2 = 4, 2 × 3 = 6, 2 × 4 = 8, 2 × 5 = 10.", o:"2, 4, 6, 8, 10"},
       {b:"3, 4 ve 5'in çarpımı", m:"3'ler: 3, 6, 9, 12, 15. 4'ler: 4, 8, 12, 16, 20. 5'ler: 5, 10, 15, 20, 25."},
       {b:"0 ve 1 ile çarpma", m:"Bir sayıyı 1 ile çarparsak sayı değişmez. 0 ile çarparsak sonuç 0 olur.", o:"4 × 1 = 4 ve 4 × 0 = 0"}
     ],
     ipucu:"5'in çarpımları 0 ya da 5 ile biter: 5, 10, 15, 20, 25!",
     kartlar:[["2 × 3","6"],["3 × 3","9"],["4 × 2","8"],["5 × 4","20"],["4 × 3","12"],["5 × 1","5"],["3 × 5","15"]],
     sorular:[
       {s:"2 + 2 + 2 işleminin sonucu kaçtır?", c:["6","4","8","22"], a:"2 üç kez toplanır. 2 × 3 = 6."},
       {s:"3 × 4 = ?", c:["12","7","34","9"], a:"3'ler: 3, 6, 9, 12. 3 × 4 = 12."},
       {s:"5 × 2 = ?", c:["10","7","52","25"], a:"5 iki kez toplanır: 5 + 5 = 10."},
       {s:"4 × 4 = ?", c:["16","8","12","44"], a:"4'ler: 4, 8, 12, 16. 4 × 4 = 16."},
       {s:"5 × 3 = ?", c:["15","8","53","35"], a:"5 + 5 + 5 = 15."},
       {s:"4 × 0 = ?", c:["0","4","1","40"], a:"Bir sayıyı 0 ile çarparsak sonuç 0 olur."},
       {s:"Her tabakta 3 kurabiye var. 4 tabakta kaç kurabiye vardır?", c:["12","7","34","9"], a:"3 + 3 + 3 + 3 = 12. Yani 4 × 3 = 12."},
       {s:"Bir elde 5 parmak vardır. 4 elde kaç parmak vardır?", c:["20","9","10","45"], a:"5 + 5 + 5 + 5 = 20. Yani 4 × 5 = 20."},
       {s:"Hangi işlem 3 × 5 ile aynı sonucu verir?", c:["5 × 3","3 + 5","3 + 3 + 3","5 + 5"], a:"Çarpmada sayıların yeri değişse de sonuç aynıdır: 5 × 3 = 15."},
       {s:"Ece her gün 3 sayfa okuyor. 5 günde kaç sayfa okur?", c:["15","8","35","53"], a:"3 × 5 = 15 sayfa."}
     ],
     uret:["carp",5]
    },
    {id:"mat2-bolme", ad:"Bölme İşlemi", e:"➗",
     anlat:[
       {b:"Paylaştırma", m:"Bir grubu eşit paylara ayırmaya bölme denir. İşareti ÷ dir.", o:"12 şekeri 3 kişiye paylaştırınca 12 ÷ 3 = 4"},
       {b:"Gruplama", m:"Bir sayıyı eşit gruplara ayırabiliriz. 10 elmayı 2'şerli gruplarsak 5 grup olur.", o:"10 ÷ 2 = 5"},
       {b:"Çarpmayla ilişki", m:"Bölme çarpmanın tersidir. 3 × 4 = 12 ise 12 ÷ 3 = 4 olur."},
       {b:"Eşit paylar", m:"Bölmede paylar birbirine eşit olmalıdır. Hiç kimse fazla ya da eksik almaz."}
     ],
     ipucu:"Bölmeyi bulmak için çarpmayı hatırla: 3 × ? = 12!",
     kartlar:[["10 ÷ 2","5"],["12 ÷ 3","4"],["15 ÷ 5","3"],["8 ÷ 4","2"],["Bölmenin işareti","÷"],["Bölme hangi işlemin tersidir?","Çarpma"]],
     sorular:[
       {s:"6 elmayı 2 kişiye eşit paylaştırınca her biri kaç elma alır?", c:["3","4","8","12"], a:"6 ÷ 2 = 3."},
       {s:"10 ÷ 2 = ?", c:["5","8","12","20"], a:"2 × 5 = 10 olduğu için 10 ÷ 2 = 5."},
       {s:"12 ÷ 4 = ?", c:["3","8","16","48"], a:"4 × 3 = 12 olduğu için 12 ÷ 4 = 3."},
       {s:"15 ÷ 5 = ?", c:["3","10","20","75"], a:"5 × 3 = 15 olduğu için 15 ÷ 5 = 3."},
       {s:"8 bilyeyi 4 çocuğa eşit dağıtırsak her çocuk kaç bilye alır?", c:["2","4","12","32"], a:"8 ÷ 4 = 2."},
       {s:"3 × 5 = 15 ise 15 ÷ 3 = ?", c:["5","3","18","12"], a:"Bölme çarpmanın tersidir. 15 ÷ 3 = 5."},
       {s:"20 kalemi 5'erli kutulara koyarsak kaç kutu olur?", c:["4","15","25","100"], a:"20 ÷ 5 = 4 kutu."},
       {s:"12 kurabiyeyi 3 tabağa eşit paylaştırdık. Her tabakta kaç kurabiye olur?", c:["4","9","15","36"], a:"12 ÷ 3 = 4."},
       {s:"Hangi işlemin sonucu 4'tür?", c:["16 ÷ 4","8 ÷ 4","20 ÷ 4","12 ÷ 4"], a:"16 ÷ 4 = 4. Diğerleri 2, 5 ve 3 eder."},
       {s:"Ece 20 çiçeği 4 vazoya eşit koydu. Sonra bir vazodan 2 çiçek aldı. O vazoda kaç çiçek kaldı?", c:["3","5","7","18"], a:"Önce 20 ÷ 4 = 5. Sonra 5 − 2 = 3."}
     ],
     uret:["bol",5]
    },
    {id:"mat2-kesirler", ad:"Kesirler: Bütün, Yarım, Çeyrek", e:"🍕",
     anlat:[
       {b:"Bütün", m:"Bölünmemiş şeye bütün denir. Bir elmanın tamamı bir bütündür."},
       {b:"Yarım", m:"Bir bütün eşit 2 parçaya bölünürse her parça yarımdır. Yarım 1/2 diye yazılır.", o:"1/2 = yarım"},
       {b:"Çeyrek", m:"Bir bütün eşit 4 parçaya bölünürse her parça çeyrektir. Çeyrek 1/4 diye yazılır.", o:"1/4 = çeyrek"},
       {b:"Karşılaştırma", m:"Parçalar eşit olmalıdır. Yarım, çeyrekten büyüktür. 2 çeyrek 1 yarım eder.", o:"2/4 = 1/2"}
     ],
     ipucu:"Yarım 2 parçadan biri, çeyrek 4 parçadan biri. Parça sayısı arttıkça parça küçülür!",
     kartlar:[["Bütünün eşit 2 parçasından biri","1/2 (yarım)"],["Bütünün eşit 4 parçasından biri","1/4 (çeyrek)"],["2 yarım birleşince","1 bütün"],["2 çeyrek birleşince","1 yarım"],["Yarım mı çeyrek mi büyük?","Yarım"],["10'un yarısı","5"],["8'in çeyreği","2"]],
     sorular:[
       {s:"Bir pizza eşit 2 parçaya bölündü. Her parça pizzanın neyidir?", c:["Yarısı","Çeyreği","Tamamı","Üçte biri"], a:"Eşit 2 parçadan biri yarımdır."},
       {s:"1/2 nasıl okunur?", c:["Yarım","Çeyrek","Bütün","İki bütün"], a:"1/2 yarım diye okunur."},
       {s:"1/4 nasıl okunur?", c:["Çeyrek","Yarım","Bütün","Dörtte iki"], a:"1/4 çeyrek diye okunur."},
       {s:"Bir bütün eşit 4 parçaya bölünürse her parça nedir?", c:["Çeyrek","Yarım","Bütün","Üçte bir"], a:"Eşit 4 parçadan biri çeyrektir."},
       {s:"Aynı büyüklükteki iki elmadan birinin yarımı, diğerinin çeyreği alındı. Hangisi daha çoktur?", c:["Yarım","Çeyrek","İkisi eşittir","Karşılaştırılamaz"], a:"Yarım, çeyrekten büyüktür."},
       {s:"2 çeyrek hangisine eşittir?", c:["Yarım","Bütün","Çeyrek","İki bütün"], a:"2 çeyrek bir yarım eder: 2/4 = 1/2."},
       {s:"12 şekerin yarısı kaçtır?", c:["6","4","24","10"], a:"12 ÷ 2 = 6."},
       {s:"8 bilyenin çeyreği kaçtır?", c:["2","4","32","6"], a:"8 ÷ 4 = 2."},
       {s:"Ece 20 TL'sinin yarısını harcadı. Kaç TL harcadı?", c:["10 TL","5 TL","40 TL","15 TL"], a:"20 ÷ 2 = 10 TL."},
       {s:"Bir sandviç eşit 4 parçaya bölündü. Ali 1, Ece 1 parça yedi. Sandviçin ne kadarı yenildi?", c:["Yarısı","Çeyreği","Tamamı","Dörtte biri"], a:"4 parçadan 2'si yenildi. 2 çeyrek bir yarımdır."}
     ],
     uret:["kesir",4]
    }
  ]},
  {ad:"Geometri ve Ölçme", konular:[
    {id:"mat2-geometri-simetri", ad:"Şekiller, Cisimler ve Simetri", e:"🔷",
     anlat:[
       {b:"Düzlem şekiller", m:"Kare, dikdörtgen, üçgen ve daire düzlem şekillerdir. Karenin 4 kenarı vardır ve hepsi eşittir. Üçgenin 3 köşesi vardır."},
       {b:"Cisimler", m:"Küp, dikdörtgenler prizması, silindir, koni ve küre cisimdir. Küpün 6 yüzü vardır ve hepsi karedir.", o:"Zar küptür, top küredir."},
       {b:"Simetri", m:"Bir şekli ortadan katlayınca iki yarısı üst üste biniyorsa şekil simetriktir. Katlanma çizgisine simetri doğrusu denir.", o:"Kelebek ve kalp simetriktir."},
       {b:"Süsleme", m:"Şekilleri tekrar ederek süslemeler yaparız. Tekrar eden parçaya çekirdek denir."}
     ],
     ipucu:"Katla, üst üste gelsin: simetri!",
     kartlar:[["Üçgenin köşe sayısı","3"],["Karenin kenar sayısı","4 (hepsi eşit)"],["Küpün yüz sayısı","6"],["Top hangi cisimdir?","Küre"],["Konserve kutusu hangi cisimdir?","Silindir"],["Katlayınca iki yarı örtüşüyorsa","Simetri"],["Katlanma çizgisi","Simetri doğrusu"]],
     sorular:[
       {s:"Hangi cismin tüm yüzleri karedir?", c:["Küp","Silindir","Koni","Küre"], a:"Küpün 6 yüzünün hepsi karedir."},
       {s:"Dondurma külahı hangi cisme benzer?", c:["Koni","Küre","Küp","Silindir"], a:"Külah sivri uçlu bir cisimdir. Koniye benzer."},
       {s:"Üçgenin kaç köşesi vardır?", c:["3","4","5","6"], a:"Üçgenin 3 köşesi vardır."},
       {s:"Küpün kaç yüzü vardır?", c:["6","4","8","12"], a:"Küpün 6 yüzü vardır."},
       {s:"Hangi şeklin kenarı yoktur?", c:["Daire","Kare","Üçgen","Dikdörtgen"], a:"Daire yuvarlaktır. Kenarı ve köşesi yoktur."},
       {s:"Hangi harf dikey bir çizgiden katlanınca iki yarısı üst üste biner?", c:["A","F","G","R"], a:"A harfinin iki yarısı birbirinin aynıdır. Simetriktir."},
       {s:"Karenin kaç köşesi vardır?", c:["4","3","6","8"], a:"Karenin 4 köşesi vardır."},
       {s:"Silindirin alt ve üst yüzü hangi şekildir?", c:["Daire","Kare","Üçgen","Dikdörtgen"], a:"Silindirin alt ve üst yüzleri dairedir."},
       {s:"Hangisi dikdörtgenler prizmasına benzer?", c:["Kibrit kutusu","Top","Dondurma külahı","Konserve kutusu"], a:"Kibrit kutusunun yüzleri dikdörtgendir. Dikdörtgenler prizmasına benzer."},
       {s:"Kelebeğin bir kanadında 5 benek var. Kelebek simetrik olduğuna göre diğer kanadında kaç benek vardır?", c:["5","10","0","1"], a:"Simetride iki yan aynıdır. Diğer kanatta da 5 benek vardır."}
     ]
    },
    {id:"mat2-olcme", ad:"Uzunluk, Tartma ve Sıvı Ölçme", e:"📏",
     anlat:[
       {b:"Uzunluk", m:"Uzunluğu cetvel ve metreyle ölçeriz. Metre m, santimetre cm ile gösterilir. 1 m = 100 cm'dir.", o:"1 m = 100 cm"},
       {b:"Cetvel", m:"Cetvelde ölçmeye sıfırdan başlarız. Nesnenin bittiği çizgi uzunluğu gösterir.", o:"Kalem 12 cm uzunluğundadır."},
       {b:"Tartma", m:"Ağırlığı kilogram (kg) ile ölçeriz. Terazi ya da kantar kullanırız. Çocuklar için 1 kg bir paket şeker kadardır."},
       {b:"Sıvı ölçme", m:"Sıvıları litre (L) ile ölçeriz. 1 litrelik şişe 1 litre su alır. 2 tane yarım litre 1 litre eder."}
     ],
     ipucu:"Bir metre yüz santim, bir kilo bir paket şeker, bir litre bir şişe su!",
     kartlar:[["1 m kaç cm'dir?","100 cm"],["Uzunluk birimi (büyük)","Metre"],["Uzunluk ölçme aleti","Cetvel"],["Tartma birimi","Kilogram"],["Tartma aleti","Terazi"],["Sıvı ölçme birimi","Litre"],["2 yarım litre","1 litre"]],
     sorular:[
       {s:"1 metre kaç santimetredir?", c:["100","10","1000","50"], a:"1 m = 100 cm."},
       {s:"Hangisiyle uzunluk ölçeriz?", c:["Cetvel","Terazi","Saat","Takvim"], a:"Uzunluğu cetvelle ölçeriz."},
       {s:"Hangisi tartma birimidir?", c:["Kilogram","Metre","Litre","Santimetre"], a:"Tartma birimi kilogramdır."},
       {s:"Sıvılar hangi birimle ölçülür?", c:["Litre","Metre","Kilogram","Dakika"], a:"Sıvılar litre ile ölçülür."},
       {s:"2 m kaç cm'dir?", c:["200","20","2","102"], a:"1 m = 100 cm olduğu için 2 m = 200 cm."},
       {s:"Bir ip 30 cm, diğeri 25 cm. İkisini uç uca eklersek kaç cm olur?", c:["55","5","65","45"], a:"30 + 25 = 55 cm."},
       {s:"3 kg elma ve 2 kg portakal alındı. Kaç kg meyve alındı?", c:["5","1","6","32"], a:"3 + 2 = 5 kg."},
       {s:"Her biri 2 litrelik 3 şişede kaç litre su vardır?", c:["6","5","23","8"], a:"2 + 2 + 2 = 6 litre. Yani 3 × 2 = 6."},
       {s:"1 m + 20 cm kaç santimetredir?", c:["120","21","30","1020"], a:"1 m = 100 cm. 100 + 20 = 120 cm."},
       {s:"Ali'nin boyu 110 cm, Deniz'in boyu 98 cm. Ali, Deniz'den kaç cm uzundur?", c:["12","22","208","2"], a:"110 − 98 = 12 cm."}
     ]
    }
  ]},
  {ad:"Günlük Yaşam ve Veri", konular:[
    {id:"mat2-para-zaman", ad:"Paralarımız ve Zaman", e:"💰",
     anlat:[
       {b:"Paralarımız", m:"Paramız Türk lirasıdır. 1 TL, 100 kuruştur. Madeni ve kâğıt paralar vardır."},
       {b:"Para hesabı", m:"Paraları toplarız. Para üstü, verdiğimiz paradan ödediğimiz parayı çıkarınca bulunur.", o:"50 TL verdik, 35 TL ödedik. Para üstü 15 TL."},
       {b:"Saat", m:"Yelkovan 12'deyse tam saattir. Yelkovan 6'daysa buçuktur. Yelkovan 3'teyse çeyrek geçiyor demektir (15 dakika).", o:"Akrep 4, yelkovan 6: saat 4 buçuk"},
       {b:"Gün, hafta, ay, yıl", m:"Bir haftada 7 gün vardır. Bir yılda 12 ay vardır. Ayların uzunluğu 28 ile 31 gün arasında değişir."}
     ],
     ipucu:"Yelkovan 12 tam, 6 buçuk. Hafta 7 gün, yıl 12 ay!",
     kartlar:[["1 TL kaç kuruş?","100 kuruş"],["Para üstü nasıl bulunur?","Verilen − ödenen"],["Yelkovan 6'da","Buçuk"],["Yelkovan 12'de","Tam saat"],["1 haftada kaç gün var?","7"],["1 yılda kaç ay var?","12"],["20 TL + 15 TL","35 TL"]],
     sorular:[
       {s:"1 TL kaç kuruştur?", c:["100 kuruş","10 kuruş","50 kuruş","1000 kuruş"], a:"1 TL, 100 kuruştur."},
       {s:"10 TL + 5 TL + 1 TL kaç TL eder?", c:["16 TL","15 TL","17 TL","6 TL"], a:"10 + 5 + 1 = 16 TL."},
       {s:"Defter 18 TL. 20 TL verirsek para üstü kaç TL olur?", c:["2 TL","12 TL","38 TL","8 TL"], a:"20 − 18 = 2 TL."},
       {s:"Yelkovan 6'da, akrep 4 ile 5 arasındadır. Saat kaçtır?", c:["4 buçuk","5 buçuk","6 buçuk","Saat 4"], a:"Yelkovan 6'daysa buçuktur. Akrep 4'ü geçmiştir. Saat 4 buçuktur."},
       {s:"Bir haftada kaç gün vardır?", c:["7","5","12","30"], a:"Bir haftada 7 gün vardır."},
       {s:"Yılın ilk ayı hangisidir?", c:["Ocak","Şubat","Haziran","Aralık"], a:"Yılın ilk ayı Ocak'tır."},
       {s:"Şubat ayından sonra hangi ay gelir?", c:["Mart","Nisan","Ocak","Mayıs"], a:"Şubat'tan sonra Mart gelir."},
       {s:"Ali 50 TL ile 35 TL'lik çanta aldı. Para üstü kaç TL olur?", c:["15 TL","85 TL","25 TL","5 TL"], a:"50 − 35 = 15 TL."},
       {s:"Film saat 3'te başladı ve 2 saat sürdü. Film saat kaçta biter?", c:["Saat 5","Saat 1","Saat 6","Saat 2"], a:"3'ten 2 saat ileri gidince saat 5 olur."},
       {s:"Ece 25 TL'lik kitap ve 12 TL'lik kalem aldı. 50 TL verdi. Para üstü kaç TL olur?", c:["13 TL","37 TL","62 TL","23 TL"], a:"25 + 12 = 37 TL öder. 50 − 37 = 13 TL para üstü alır."}
     ],
     uret:["para",100]
    },
    {id:"mat2-veri-problem", ad:"Veri Toplama ve Problem Çözme", e:"📊",
     anlat:[
       {b:"Çetele", m:"Veri toplarken çetele tutarız. Her cevap için bir çizgi çekeriz. Beşinci çizgi, dört çizgiyi çapraz keser.", o:"Kedi: |||| = 4"},
       {b:"Sıklık tablosu", m:"Çetele sayıları bir tabloya yazılır. Bu tabloya sıklık tablosu denir.", o:"Kedi 4, Köpek 6"},
       {b:"Nesne ve şekil grafiği", m:"Verileri resimlerle gösteririz. Her resim aynı sayıda kişiyi gösterir. Çok resim, çok kişi demektir.", o:"Her ⭐ 2 kişi ise ⭐⭐⭐ 6 kişidir."},
       {b:"Problem çözme", m:"Dört adım izleriz: oku, ne istendiğini bul, işlemi seç ve çöz, sonucu kontrol et.", o:"8 + 5 = 13, kontrol: 13 − 5 = 8"}
     ],
     ipucu:"Dört adım: Oku, bul, çöz, kontrol et!",
     kartlar:[["Cevaplar için tutulan çizgiler","Çetele"],["Çetele sayılarının yazıldığı tablo","Sıklık tablosu"],["Resimlerle gösterilen grafik","Nesne grafiği"],["Problemin ilk adımı","Okumak"],["Problemin son adımı","Kontrol etmek"],["Toplama sonucu","Toplam"],["Çıkarma sonucu","Fark"]],
     sorular:[
       {s:"Çetelede |||| kaç kişi demektir?", c:["4","5","3","6"], a:"Dört çizgi, 4 kişi demektir."},
       {s:"Sıklık tablosu: Elma 5, Muz 8. Hangisi daha çok seçilmiştir?", c:["Muz","Elma","Eşit seçilmişler","Bilinemez"], a:"8, 5'ten büyüktür. Muz daha çok seçilmiştir."},
       {s:"Elmayı 5, muzu 8, çileği 4 kişi seçti. Kaç kişiye soruldu?", c:["17","12","13","16"], a:"5 + 8 + 4 = 17 kişi."},
       {s:"Elmayı 5, muzu 8 kişi seçti. Muzu elmadan kaç kişi fazla seçti?", c:["3","13","5","8"], a:"8 − 5 = 3 kişi."},
       {s:"Nesne grafiğinde her ⭐ 2 kişiyi gösteriyor. 4 ⭐ kaç kişi eder?", c:["8","6","4","2"], a:"2 + 2 + 2 + 2 = 8. Yani 4 × 2 = 8 kişi."},
       {s:"Grafikte her ⭐ 5 kişiyi gösteriyor. 3 ⭐ kaç kişi eder?", c:["15","8","35","53"], a:"5 + 5 + 5 = 15 kişi."},
       {s:"Bir sınıfta 14 kız ve 12 erkek öğrenci var. Kızlar erkeklerden kaç fazladır?", c:["2","26","12","14"], a:"14 − 12 = 2."},
       {s:"Ali'nin 45 bilyesi vardı. 18 bilyesini arkadaşına verdi. Kaç bilyesi kaldı?", c:["27","63","37","33"], a:"45 − 18 = 27."},
       {s:"Bir markette 36 kırmızı, 28 yeşil elma var. Toplam kaç elma vardır?", c:["64","54","8","62"], a:"6 + 8 = 14, 4 yaz 1 el. 3 + 2 + 1 = 6. Sonuç 64."},
       {s:"Ece her gün 4 sayfa okuyor. 5 günde 20 sayfa okudu. Kitap 35 sayfa ise kaç sayfası kaldı?", c:["15","20","55","9"], a:"35 − 20 = 15 sayfa kaldı."}
     ]
    }
  ]}
]});
