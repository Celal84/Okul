HW.add({ders:"matematik", sinif:3, uniteler:[
  {ad:"Sayılar", konular:[
    {id:"mat3-uc-basamakli", ad:"Üç Basamaklı Sayılar", e:"💯",
     anlat:[
       {b:"Yüzlük, onluk, birlik", m:"10 birlik 1 onluk, 10 onluk 1 yüzlük eder. Üç basamaklı sayılarda soldan sağa yüzler, onlar ve birler basamağı vardır.", o:"365 = 3 yüzlük + 6 onluk + 5 birlik"},
       {b:"Basamak değeri", m:"Bir rakamın sayıdaki yeri değerini belirler. Basamak değeri, rakamın bulunduğu basamağın değeriyle çarpılmış halidir.", o:"482 sayısında 4'ün basamak değeri 400, 8'inki 80, 2'ninki 2'dir."},
       {b:"Sayıları okumak", m:"Önce yüzler, sonra onlar, sonra birler okunur. Boş basamak okunmaz.", o:"507 = beş yüz yedi, 120 = yüz yirmi"},
       {b:"Çözümleme", m:"Bir sayıyı basamak değerlerinin toplamı olarak yazmaya çözümleme denir.", o:"634 = 600 + 30 + 4"}
     ],
     ipucu:"Sağdan sola B-O-Y: Birler, Onlar, Yüzler. Rakamın yeri, değerini belirler!",
     kartlar:[["100 kaç onluktur?","10 onluk"],["En küçük üç basamaklı sayı","100"],["En büyük üç basamaklı sayı","999"],["507 sayısının okunuşu","Beş yüz yedi"],["482'de 8'in basamak değeri","80"],["300 + 40 + 6 = ?","346"],["Birler basamağı sayının neresindedir?","En sağında"]],
     sorular:[
       {s:"En küçük üç basamaklı sayı kaçtır?", c:["100","99","101","1000"], a:"Üç basamaklı en küçük sayı 100'dür; 99 iki basamaklıdır."},
       {s:"10 onluk kaç yüzlüktür?", c:["1 yüzlük","10 yüzlük","100 yüzlük","10 birlik"], a:"10 onluk = 100 = 1 yüzlüktür."},
       {s:"256 sayısının onlar basamağındaki rakam kaçtır?", c:["5","2","6","50"], a:"256'da 2 yüzler, 5 onlar, 6 birler basamağındadır."},
       {s:"475 sayısında 7'nin basamak değeri kaçtır?", c:["70","7","700","470"], a:"7 onlar basamağında olduğu için değeri 7 × 10 = 70'tir."},
       {s:"Dört yüz altı sayısı hangisidir?", c:["406","460","416","4006"], a:"4 yüzlük, 0 onluk, 6 birlik = 406."},
       {s:"300 + 50 + 8 sayısı kaçtır?", c:["358","385","3058","538"], a:"3 yüzlük, 5 onluk, 8 birlik = 358."},
       {s:"6 yüzlük, 0 onluk ve 9 birlikten oluşan sayı kaçtır?", c:["609","690","69","906"], a:"Onlar basamağı boş (0) olduğu için sayı 609'dur."},
       {s:"En büyük üç basamaklı sayıdan 1 fazla sayı kaçtır?", c:["1000","900","990","1001"], a:"999 + 1 = 1000."},
       {s:"3, 8 ve 1 rakamlarını birer kez kullanarak yazılabilecek en büyük üç basamaklı sayı kaçtır?", c:["831","813","381","138"], a:"En büyük rakam yüzler basamağına yazılır: 8, 3, 1 sırasıyla 831."},
       {s:"Bir sayının yüzler basamağı 7, onlar basamağı yüzler basamağından 4 eksik, birler basamağı onlar basamağının 2 katıdır. Bu sayı kaçtır?", c:["736","763","376","734"], a:"Yüzler 7, onlar 7 − 4 = 3, birler 3 × 2 = 6. Sayı 736'dır."}
     ],
     uret:["basamak",999]
    },
    {id:"mat3-yuvarlama-siralama", ad:"Yuvarlama, Karşılaştırma, Sıralama", e:"⚖️",
     anlat:[
       {b:"Onluğa yuvarlama", m:"Birler basamağına bakılır. 0, 1, 2, 3, 4 ise onluk aynı kalır. 5, 6, 7, 8, 9 ise onluk bir artar.", o:"63 → 60, 68 → 70"},
       {b:"Yüzlüğe yuvarlama", m:"Bu sefer onlar basamağına bakılır. Onlar basamağı 5 ya da daha büyükse yüzlük bir artar.", o:"427 → 400, 463 → 500"},
       {b:"Sayıları karşılaştırma", m:"Önce yüzler basamağına bakılır. Eşitse onlara, o da eşitse birlere bakılır. Büyük sayının ağzı < ve > işaretinde büyük tarafa açılır.", o:"548 > 539 çünkü yüzler eşit, 4 onluk > 3 onluk"},
       {b:"Sıralama", m:"Küçükten büyüğe sıralarken en küçük sayı başa yazılır. Büyükten küçüğe sıralarken en büyük sayı başa yazılır.", o:"205 < 250 < 502"}
     ],
     ipucu:"5 ve büyükse yukarı çık, 4 ve küçükse aşağı in!",
     kartlar:[["67 en yakın onluğa","70"],["342 en yakın yüzlüğe","300"],["650 en yakın yüzlüğe","700"],["Yuvarlarken kaç ve üstü yukarı çıkar?","5 ve üstü"],["Karşılaştırmaya hangi basamaktan başlanır?","En soldan (yüzler)"],["< işareti ne demektir?","Küçüktür"],["> işareti ne demektir?","Büyüktür"]],
     sorular:[
       {s:"73 sayısı en yakın onluğa yuvarlanırsa kaç olur?", c:["70","80","60","75"], a:"Birler basamağı 3 (4'ten küçük), onluk aynı kalır: 70."},
       {s:"85 sayısı en yakın onluğa yuvarlanırsa kaç olur?", c:["90","80","85","100"], a:"Birler basamağı 5 olduğu için yukarı yuvarlanır: 90."},
       {s:"438 sayısı en yakın yüzlüğe yuvarlanırsa kaç olur?", c:["400","500","440","430"], a:"Onlar basamağı 3 olduğu için yüzlük aynı kalır: 400."},
       {s:"761 sayısı en yakın yüzlüğe yuvarlanırsa kaç olur?", c:["800","700","760","900"], a:"Onlar basamağı 6 olduğu için yüzlük artar: 800."},
       {s:"Hangi karşılaştırma doğrudur?", c:["529 > 519","340 < 330","705 < 699","250 = 205"], a:"Yüzler eşit, 2 onluk > 1 onluk olduğu için 529 > 519."},
       {s:"Küçükten büyüğe doğru sıralanmış olan hangisidir?", c:["74, 407, 470","407, 74, 470","470, 407, 74","74, 470, 407"], a:"74 iki basamaklı en küçük sayıdır. 407 < 470 olduğundan sıra 74, 407, 470."},
       {s:"612, 621, 261 ve 216 sayıları büyükten küçüğe nasıl sıralanır?", c:["621, 612, 261, 216","612, 621, 261, 216","216, 261, 612, 621","621, 612, 216, 261"], a:"Önce yüzlere bakılır: 6 yüzlükler büyük (621 > 612), sonra 261 > 216."},
       {s:"Hangi sayı en yakın yüzlüğe yuvarlanınca 500 olur?", c:["463","439","551","649"], a:"463'te onlar basamağı 6 olduğu için 500'e yuvarlanır. 439 → 400, 551 → 600, 649 → 600."},
       {s:"En yakın yüzlüğe yuvarlandığında 600 olan en küçük üç basamaklı sayı kaçtır?", c:["550","500","599","600"], a:"550'nin onlar basamağı 5 olduğu için 600'e yuvarlanır. 549 ise 500 olur. En küçük sayı 550'dir."},
       {s:"3, 6 ve 8 rakamlarını birer kez kullanarak yazılan en büyük sayı, en yakın yüzlüğe yuvarlanırsa kaç olur?", c:["900","800","1000","860"], a:"En büyük sayı 863'tür. Onlar basamağı 6 olduğu için yukarı yuvarlanır: 900."}
     ],
     uret:["yuvarla",999]
    },
    {id:"mat3-oruntu-tek-cift-romen", ad:"Örüntü, Tek-Çift, Romen Rakamı", e:"🔁",
     anlat:[
       {b:"Sayı örüntüsü", m:"Belirli bir kurala göre ilerleyen sayı dizisine örüntü denir. Kuralı bulursan sıradaki sayıyı tahmin edebilirsin.", o:"5, 10, 15, 20, ... Kural: her sayıya 5 eklenir. Sıradaki 25."},
       {b:"Tek ve çift sayılar", m:"Birler basamağı 0, 2, 4, 6, 8 olan sayılar çifttir; ikişerli gruplanınca artmaz. Birler basamağı 1, 3, 5, 7, 9 olanlar tektir.", o:"48 çifttir. 137 tektir."},
       {b:"Romen rakamları", m:"I = 1, V = 5, X = 10. Küçük rakam büyüğün sağındaysa eklenir, solundaysa çıkarılır.", o:"VI = 5 + 1 = 6, IV = 5 − 1 = 4"},
       {b:"Romen rakamıyla sayılar", m:"Yan yana yazarak sayıları oluştururuz. I, II, III, IV, V, VI, VII, VIII, IX, X sıralaması 1'den 10'a kadardır.", o:"XII = 12, XV = 15, XIX = 19, XX = 20"}
     ],
     ipucu:"Çiftler ikişerli eşleşir, tekte biri yalnız kalır. Romen: I-V-X, yani 1-5-10!",
     kartlar:[["8, 16, 24, 32, ... sıradaki","40"],["Birler basamağı 0, 2, 4, 6, 8 olan sayı","Çift sayı"],["Birler basamağı 1, 3, 5, 7, 9 olan sayı","Tek sayı"],["V Romen rakamı kaçtır?","5"],["IX kaçtır?","9"],["XIV kaçtır?","14"],["15 Romen rakamıyla nasıl yazılır?","XV"]],
     sorular:[
       {s:"2, 4, 6, 8, ... örüntüsünde sıradaki sayı kaçtır?", c:["10","9","12","11"], a:"Her sayıya 2 eklenir: 8 + 2 = 10."},
       {s:"Hangisi çift sayıdır?", c:["58","57","91","133"], a:"Birler basamağı 8 olan 58 çifttir."},
       {s:"Hangisi tek sayıdır?", c:["135","240","68","502"], a:"Birler basamağı 5 olan 135 tektir."},
       {s:"VII Romen rakamı kaç gösterir?", c:["7","6","12","4"], a:"V = 5, II = 2. 5 + 2 = 7."},
       {s:"14 sayısı Romen rakamıyla nasıl yazılır?", c:["XIV","XVI","XXIV","XIX"], a:"14 = 10 + 4 = X + IV = XIV."},
       {s:"5, 12, 19, 26, ... örüntüsünün kuralı nedir?", c:["Her sayıya 7 eklenir","Her sayıya 5 eklenir","Her sayıdan 7 çıkarılır","Her sayı 2 ile çarpılır"], a:"12 − 5 = 7, 19 − 12 = 7. Kural: 7 ekle."},
       {s:"100, 90, 80, 70, ... örüntüsünün 6. sayısı kaçtır?", c:["50","60","40","30"], a:"Sıra: 100, 90, 80, 70, 60, 50. Altıncı sayı 50."},
       {s:"Bir tek sayı ile bir tek sayının toplamı nasıl bir sayıdır?", c:["Çift sayıdır","Tek sayıdır","Hem tek hem çift sayıdır","Sıfırdır"], a:"Örneğin 3 + 5 = 8, 7 + 9 = 16. İki tek sayının toplamı çifttir."},
       {s:"XIX sayısından XI sayısını çıkarırsak kaç kalır?", c:["8","7","9","10"], a:"XIX = 19, XI = 11. 19 − 11 = 8."},
       {s:"Ece, 3, 7, 11, 15, ... örüntüsünü sürdürüyor. Bu örüntünün 8. sayısı kaçtır?", c:["31","27","35","29"], a:"Her adımda 4 artıyor: 3, 7, 11, 15, 19, 23, 27, 31. Sekizinci sayı 31."}
     ],
     uret:["oruntu",100]
    }
  ]},
  {ad:"Dört İşlem ve Kesirler", konular:[
    {id:"mat3-toplama-cikarma", ad:"Toplama ve Çıkarma", e:"➕",
     anlat:[
       {b:"Eldeli toplama", m:"Birler 10 ya da daha fazla olursa 10'u 1 onluk yaparız ve onlar basamağına ekleriz. Buna elde denir. Aynısı onlar basamağı için de geçerlidir.", o:"278 + 135 = 413 (8 + 5 = 13: 3 yaz, 1 elde)"},
       {b:"Onluk bozarak çıkarma", m:"Üstteki rakam alttakinden küçükse sol komşu basamaktan 1 bozarız; bozulan 10 olarak bu basamağa eklenir.", o:"425 − 168 = 257"},
       {b:"Kontrol etme", m:"Toplamayı çıkarmayla, çıkarmayı toplamayla kontrol edebilirsin. Fark + çıkan sayı eksilene eşit olmalıdır.", o:"257 + 168 = 425 doğru"},
       {b:"Problemlerde ipucu", m:"Birleştirmek, toplam, hepsi gibi sözler toplamayı; kaç kaldı, kaç fazla, ne kadar eksik gibi sözler çıkarmayı düşündürür.", o:"245 sayfalık kitabın 128 sayfası okundu: 245 − 128 = 117 sayfa kaldı."}
     ],
     ipucu:"Çıkarmayı toplamayla kontrol et: Fark + Çıkan = Eksilen.",
     kartlar:[["300 + 250 = ?","550"],["700 − 300 = ?","400"],["Elde nedir?","Onluğu bir sol basamağa taşımak"],["Çıkarmanın kontrolü","Fark + çıkan = eksilen"],["Toplananların yeri değişirse sonuç?","Değişmez"],["Bir sayıya 0 eklenirse sayı?","Aynı kalır"],["Eksilen − çıkan = ?","Fark"]],
     sorular:[
       {s:"346 + 123 işleminin sonucu kaçtır?", c:["469","459","479","569"], a:"6 + 3 = 9, 4 + 2 = 6, 3 + 1 = 4. Sonuç 469."},
       {s:"258 + 167 işleminin sonucu kaçtır?", c:["425","415","325","435"], a:"8 + 7 = 15 (5 yaz, 1 elde), 5 + 6 + 1 = 12 (2 yaz, 1 elde), 2 + 1 + 1 = 4. Sonuç 425."},
       {s:"507 − 204 işleminin sonucu kaçtır?", c:["303","313","711","403"], a:"7 − 4 = 3, 0 − 0 = 0, 5 − 2 = 3. Sonuç 303."},
       {s:"600 − 275 işleminin sonucu kaçtır?", c:["325","425","335","375"], a:"275 + 325 = 600 olduğundan fark 325'tir."},
       {s:"432 − 188 işleminin sonucu kaçtır?", c:["244","256","344","254"], a:"432 − 200 = 232, sonra 12 eklenir: 244. Kontrol: 244 + 188 = 432."},
       {s:"Bir okulda 348 kız, 276 erkek öğrenci vardır. Okulda kaç öğrenci vardır?", c:["624","514","614","634"], a:"348 + 276 = 624."},
       {s:"450 sayfalık bir kitabın 189 sayfası okundu. Okunmamış kaç sayfa vardır?", c:["261","361","271","639"], a:"450 − 189 = 261."},
       {s:"Hangi işlemin sonucu 500'dür?", c:["275 + 225","275 + 215","300 + 250","650 − 100"], a:"275 + 225 = 500. Diğerleri 490, 550 ve 550'dir."},
       {s:"□ + 178 = 432 ise □ kaçtır?", c:["254","610","264","244"], a:"Bilinmeyeni bulmak için 432 − 178 = 254 yapılır."},
       {s:"Bir kırtasiyede sabah 365 defter satıldı. Öğleden sonra sabahtakinden 48 defter fazla satıldı. Gün boyunca toplam kaç defter satıldı?", c:["778","413","730","826"], a:"Öğleden sonra 365 + 48 = 413 defter. Toplam 365 + 413 = 778."}
     ],
     uret:["topla",999]
    },
    {id:"mat3-carpma", ad:"Çarpma İşlemi", e:"✖️",
     anlat:[
       {b:"Çarpma tekrarlı toplamadır", m:"Aynı sayıyı birkaç kez toplamak yerine çarpma yazarız. Çarpılan sayı kaç kez toplanacağını söyleyen sayıyla çarpılır.", o:"3 + 3 + 3 + 3 = 4 × 3 = 12"},
       {b:"Çarpmanın özellikleri", m:"Çarpanların yeri değişse sonuç değişmez. 1 ile çarpınca sayı aynı kalır, 0 ile çarpınca sonuç 0 olur.", o:"6 × 4 = 4 × 6 = 24, 9 × 1 = 9, 9 × 0 = 0"},
       {b:"10 ve 100 ile çarpma", m:"Bir sayıyı 10 ile çarparken sağına bir sıfır, 100 ile çarparken iki sıfır eklenir. 10'un ve 100'ün katlarıyla önce sıfırsız çarpılır, sonra sıfırlar eklenir.", o:"36 × 10 = 360, 7 × 100 = 700, 6 × 40 = 240"},
       {b:"İki basamaklı sayıyı çarpma", m:"Onluk ve birlikleri ayrı ayrı çarpıp topla.", o:"23 × 4: 20 × 4 = 80, 3 × 4 = 12, 80 + 12 = 92"},
       {b:"Çarpma problemi", m:"Eşit gruplar varsa çarpma yaparız. Kaç grup olduğunu ve her grupta kaç tane bulunduğunu bul.", o:"8 kutuda 6'şar kalem varsa 8 × 6 = 48 kalem var."}
     ],
     ipucu:"9'lar tablosunda sonucun rakamları toplamı 9'dur: 9 × 7 = 63, 6 + 3 = 9!",
     kartlar:[["7 × 8 = ?","56"],["9 × 6 = ?","54"],["6 × 7 = ?","42"],["Bir sayıyı 0 ile çarparsak?","Sonuç 0 olur"],["Bir sayıyı 1 ile çarparsak?","Sayı değişmez"],["45 × 10 = ?","450"],["3 × 200 = ?","600"],["8 × 8 = ?","64"]],
     sorular:[
       {s:"4 + 4 + 4 + 4 + 4 işleminin çarpma ile yazılışı hangisidir?", c:["5 × 4","4 × 4","5 × 5","4 × 6"], a:"4 sayısı 5 kez toplanmıştır: 5 × 4 = 20."},
       {s:"7 × 6 işleminin sonucu kaçtır?", c:["42","36","48","49"], a:"7 × 6 = 42."},
       {s:"9 × 8 işleminin sonucu kaçtır?", c:["72","81","63","64"], a:"9 × 8 = 72."},
       {s:"53 × 10 işleminin sonucu kaçtır?", c:["530","5300","503","63"], a:"10 ile çarparken sayının sağına bir sıfır eklenir: 530."},
       {s:"6 × 40 işleminin sonucu kaçtır?", c:["240","24","2400","46"], a:"6 × 4 = 24, sağına bir sıfır eklenir: 240."},
       {s:"23 × 4 işleminin sonucu kaçtır?", c:["92","82","812","27"], a:"20 × 4 = 80, 3 × 4 = 12, 80 + 12 = 92."},
       {s:"Bir kutuda 9 çikolata vardır. 7 kutuda kaç çikolata vardır?", c:["63","16","72","54"], a:"7 × 9 = 63."},
       {s:"Hangi işlemin sonucu 0'dır?", c:["475 × 0","475 × 1","475 + 0","475 − 1"], a:"Bir sayıyı 0 ile çarpınca sonuç 0 olur."},
       {s:"8 × □ = 56 ise □ kaçtır?", c:["7","6","8","48"], a:"8 × 7 = 56 olduğu için □ = 7'dir."},
       {s:"Bir sınıfta her sırada 2 öğrenci oturur. Sınıfta 14 sıra vardır ama 3 sırada yalnızca 1 öğrenci oturmaktadır. Sınıfta kaç öğrenci vardır?", c:["25","28","22","31"], a:"11 sırada 2'şer öğrenci: 11 × 2 = 22. 3 sırada 1'er öğrenci: 3. Toplam 25."}
     ],
     uret:["carp",10]
    },
    {id:"mat3-bolme", ad:"Bölme İşlemi", e:"➗",
     anlat:[
       {b:"Bölme eşit paylaştırmadır", m:"Bir çokluğu eşit gruplara ayırmaya bölme deriz. Bölünen paylaştırılan sayı, bölen grup sayısı, bölüm her gruptaki sayıdır.", o:"12 bilye 3 kişiye eşit paylaşılırsa 12 ÷ 3 = 4"},
       {b:"Bölme çarpmanın tersidir", m:"Çarpım tablosunu bilirsen bölmeyi kolay yaparsın. 4 × 3 = 12 ise 12 ÷ 3 = 4 ve 12 ÷ 4 = 3 olur.", o:"8 × 5 = 40 ⇒ 40 ÷ 5 = 8"},
       {b:"Kalanlı bölme", m:"Eşit paylaştırınca artan sayıya kalan denir. Kalan her zaman bölenden küçüktür.", o:"17 ÷ 5: bölüm 3, kalan 2 (5 × 3 = 15, 17 − 15 = 2)"},
       {b:"Bölmeyi kontrol etme", m:"Bölen × bölüm + kalan = bölünen olmalıdır.", o:"5 × 3 + 2 = 17, işlem doğru"}
     ],
     ipucu:"Kalan, bölenden her zaman küçüktür! Kontrol: bölen × bölüm + kalan = bölünen.",
     kartlar:[["36 ÷ 4 = ?","9"],["42 ÷ 7 = ?","6"],["Bölünen − (bölen × bölüm) = ?","Kalan"],["Kalan bölenden nasıl olur?","Her zaman küçük"],["0 ÷ 5 = ?","0"],["Bölme hangi işlemin tersidir?","Çarpma"],["20 ÷ 6 işleminde kalan kaçtır?","2"]],
     sorular:[
       {s:"18 ÷ 3 işleminin sonucu kaçtır?", c:["6","5","15","54"], a:"3 × 6 = 18 olduğu için 18 ÷ 3 = 6."},
       {s:"56 ÷ 7 işleminin sonucu kaçtır?", c:["8","7","9","49"], a:"7 × 8 = 56 olduğundan 56 ÷ 7 = 8."},
       {s:"27 elma 3 kişiye eşit paylaştırılırsa her birine kaç elma düşer?", c:["9","8","24","81"], a:"27 ÷ 3 = 9."},
       {s:"4 × 7 = 28 ise 28 ÷ 7 kaçtır?", c:["4","7","21","32"], a:"Bölme çarpmanın tersidir: 28 ÷ 7 = 4."},
       {s:"23 ÷ 5 işleminin bölümü ve kalanı hangisidir?", c:["Bölüm 4, kalan 3","Bölüm 3, kalan 8","Bölüm 5, kalan 3","Bölüm 4, kalan 5"], a:"5 × 4 = 20, 23 − 20 = 3. Kalan bölenden küçük olmalıdır."},
       {s:"Bölen 6 olan bir bölme işleminde hangi sayı kalan olamaz?", c:["6","5","3","0"], a:"Kalan bölenden küçük olmalıdır. 6 sayısı bölene eşit olduğu için kalan olamaz."},
       {s:"Bir bölme işleminde bölen 8, bölüm 6, kalan 3'tür. Bölünen kaçtır?", c:["51","48","17","54"], a:"Bölünen = bölen × bölüm + kalan = 8 × 6 + 3 = 51."},
       {s:"Ayşe 38 kalemi 5 kutuya eşit paylaştırıyor. Her kutuya kaç kalem düşer, kaç kalem artar?", c:["7 kalem, 3 artar","7 kalem, 2 artar","6 kalem, 8 artar","7 kalem, 4 artar"], a:"5 × 7 = 35, 38 − 35 = 3. Her kutuya 7 kalem, 3 kalem artar."},
       {s:"Hangi sayıyı 4'e bölünce kalan 3 olur?", c:["27","28","26","25"], a:"27 ÷ 4 = 6, kalan 3. Diğerlerinde kalan 0, 2 ve 1'dir."},
       {s:"50 kişi 8 kişilik minibüslerle geziye gidecektir. En az kaç minibüs gerekir?", c:["7","6","8","5"], a:"50 ÷ 8 = 6, kalan 2. Artan 2 kişi için bir minibüs daha gerekir: 7."}
     ],
     uret:["bol",10]
    },
    {id:"mat3-kesirler", ad:"Kesirler", e:"🍕",
     anlat:[
       {b:"Kesir, bütünün eş parçalarıdır", m:"Bir bütün eşit parçalara bölünür. Alttaki sayı (payda) bütünün kaç eş parçaya bölündüğünü, üstteki sayı (pay) alınan parça sayısını gösterir.", o:"Pizza 4 eş parçaya bölünüp 3 parça yenirse yenen kısım 3/4'tür."},
       {b:"Birim kesir", m:"Payı 1 olan kesre birim kesir denir. Payda büyüdükçe parçalar küçülür.", o:"1/2 > 1/3 > 1/4 > 1/5"},
       {b:"Bir çokluğun kesri", m:"Çokluğu paydadaki sayıya bölersen bir parçayı bulursun. Pay kadar parçayla çarparsan istenen kesri bulursun.", o:"12'nin 1/3'ü = 12 ÷ 3 = 4, 12'nin 2/3'ü = 4 × 2 = 8"},
       {b:"Kesirleri karşılaştırma", m:"Paydaları eşit kesirlerde payı büyük olan kesir büyüktür. Payı aynı olan kesirlerde paydası küçük olan büyüktür.", o:"7/10 > 3/10, 1/2 > 1/4"}
     ],
     ipucu:"Payda altta durup bütünü tutar; pay üstte alınan parçayı sayar. Payda büyürse parça küçülür!",
     kartlar:[["Kesirde üstteki sayı","Pay"],["Kesirde alttaki sayı","Payda"],["Payı 1 olan kesir","Birim kesir"],["20'nin 1/4'ü kaçtır?","5"],["18'in 1/3'ü kaçtır?","6"],["1/2 mi 1/5 mi büyüktür?","1/2"],["Bütünün 4 eş parçasından 1'i","1/4"],["12'nin 3/4'ü kaçtır?","9"]],
     sorular:[
       {s:"Bir pizza 8 eş dilime bölünmüş ve 3 dilimi yenmiştir. Yenen kısım hangi kesirle gösterilir?", c:["3/8","8/3","5/8","3/5"], a:"Payda 8 (tüm parçalar), pay 3 (yenen parça): 3/8."},
       {s:"Hangisi birim kesirdir?", c:["1/6","2/6","6/1","3/7"], a:"Payı 1 olan kesir birim kesirdir: 1/6."},
       {s:"5/9 kesrinde payda kaçtır?", c:["9","5","14","4"], a:"Alttaki sayı paydadır: 9."},
       {s:"24'ün 1/6'sı kaçtır?", c:["4","6","18","144"], a:"24 ÷ 6 = 4."},
       {s:"30 kalemin 2/5'i kaç kalemdir?", c:["12","6","15","10"], a:"30 ÷ 5 = 6, 6 × 2 = 12."},
       {s:"Hangi kesir en büyüktür?", c:["1/2","1/3","1/4","1/8"], a:"Birim kesirlerde payda küçüldükçe kesir büyür. En büyüğü 1/2'dir."},
       {s:"3/10 ile 7/10 kesirlerinden hangisi daha büyüktür?", c:["7/10","3/10","Eşittir","Karşılaştırılamaz"], a:"Paydalar eşit olduğunda payı büyük olan büyüktür: 7/10."},
       {s:"Bir çubuk 4 eş parçaya bölünüyor ve 3 parçası boyanıyor. Boyanmayan kısım hangi kesirdir?", c:["1/4","3/4","1/3","4/3"], a:"4 parçadan 3'ü boyalı, 1'i boyasızdır: 1/4."},
       {s:"Bir kitabın 40 sayfası vardır. Elif kitabın 1/8'ini okudu. Kaç sayfa okumadı?", c:["35","5","8","32"], a:"40 ÷ 8 = 5 sayfa okudu. Okumadığı 40 − 5 = 35 sayfadır."},
       {s:"Ali'nin 36 bilyesi var. Bilyelerinin 1/4'ünü kardeşine, 1/3'ünü arkadaşına verdi. Kaç bilyesi kaldı?", c:["15","21","9","12"], a:"36'nın 1/4'ü 9, 1/3'ü 12. Verdiği 9 + 12 = 21. Kalan 36 − 21 = 15."}
     ],
     uret:["kesir",10]
    }
  ]},
  {ad:"Ölçme", konular:[
    {id:"mat3-zaman-para", ad:"Zaman Ölçme ve Paralarımız", e:"⏰",
     anlat:[
       {b:"Saat ve dakika", m:"Saatte kısa çubuk akrep saati, uzun çubuk yelkovan dakikayı gösterir. 1 saat 60 dakika, 1 dakika 60 saniyedir. Çeyrek saat 15 dakika, yarım saat 30 dakikadır.", o:"Yelkovan 3'te, akrep 5'te ise saat 5.15'tir."},
       {b:"Saati okumak", m:"Yelkovan 6'dan önceyse 'geçiyor', sonraysa 'var' deriz.", o:"Akrep 3'ü, yelkovan 4'ü gösteriyorsa 3'ü 20 geçiyor (3.20). Yelkovan 10'daysa 3'e 10 var (2.50)."},
       {b:"Gün, hafta, ay, yıl", m:"1 gün 24 saat, 1 hafta 7 gün, 1 yıl 12 aydır. Nisan, Haziran, Eylül ve Kasım 30 gün; Şubat 28 (artık yılda 29) gündür; diğerleri 31 gündür.", o:"1 yıl = 365 gün (artık yılda 366)"},
       {b:"Paralarımız", m:"Türk parasının ana birimi liradır. 1 lira 100 kuruştur. Alışverişte ödenen paradan fiyat çıkarılırsa para üstü bulunur.", o:"50 lira verip 37 liralık alışveriş yapan 13 lira para üstü alır."}
     ],
     ipucu:"1 saat = 60 dk, 1 dk = 60 sn; 1 lira = 100 kuruş. Altmışlar zamanı, yüzler parayı sayar!",
     kartlar:[["1 saat kaç dakikadır?","60 dakika"],["1 dakika kaç saniyedir?","60 saniye"],["1 gün kaç saattir?","24 saat"],["1 hafta kaç gündür?","7 gün"],["1 yıl kaç aydır?","12 ay"],["1 lira kaç kuruştur?","100 kuruş"],["Çeyrek saat kaç dakikadır?","15 dakika"],["Yarım saat kaç dakikadır?","30 dakika"]],
     sorular:[
       {s:"1 saat kaç dakikadır?", c:["60","100","30","24"], a:"1 saat = 60 dakikadır."},
       {s:"Yelkovan 12'de, akrep 4'te ise saat kaçtır?", c:["4.00","12.04","3.00","4.12"], a:"Yelkovan 12'de ise tam saattir; akrep 4'teyse saat 4.00."},
       {s:"Saat 6'yı 15 geçiyor. Bu saati rakamla nasıl yazarız?", c:["6.15","6.45","5.15","3.06"], a:"6'yı 15 geçiyorsa 6.15'tir."},
       {s:"2 saat kaç dakikadır?", c:["120","200","100","60"], a:"2 × 60 = 120 dakika."},
       {s:"Hangi ay 30 gün çeker?", c:["Nisan","Ocak","Mart","Ağustos"], a:"Nisan 30 gün çeker. Ocak, Mart ve Ağustos 31 gündür."},
       {s:"3 lira kaç kuruştur?", c:["300","30","3000","103"], a:"1 lira 100 kuruş olduğundan 3 × 100 = 300 kuruş."},
       {s:"75 kuruş ile 25 kuruş toplanırsa ne kadar olur?", c:["1 lira","100 lira","1 kuruş","10 kuruş"], a:"75 + 25 = 100 kuruş = 1 lira."},
       {s:"Zeynep 50 lira ile 37 liralık bir kitap alıyor. Kaç lira para üstü alır?", c:["13 lira","23 lira","17 lira","87 lira"], a:"50 − 37 = 13 lira."},
       {s:"Bir film 1 saat 30 dakika sürüyor. Film 14.20'de başlarsa saat kaçta biter?", c:["15.50","15.30","16.20","15.20"], a:"14.20 + 1 saat = 15.20, üstüne 30 dakika: 15.50."},
       {s:"Okul 08.40'ta başlıyor. Her ders 40 dakika, teneffüs 10 dakikadır. İkinci ders saat kaçta biter?", c:["10.10","10.00","09.30","10.20"], a:"1. ders 09.20'de biter. Teneffüs 09.30'a kadar. 2. ders 09.30 + 40 dk = 10.10'da biter."}
     ],
     uret:["saat",12]
    },
    {id:"mat3-tartma-uzunluk-sivi", ad:"Tartma, Uzunluk ve Sıvı Ölçme", e:"⚖️",
     anlat:[
       {b:"Tartma: kilogram ve gram", m:"Eşyaların ağırlığını kilogram (kg) ve gram (g) ile ölçeriz. 1 kg 1000 gramdır. Yarım kilogram 500 gramdır.", o:"2 kg 300 g = 2300 g"},
       {b:"Uzunluk: metre, santimetre, kilometre", m:"Kısa uzunluklar santimetre (cm), orta uzunluklar metre (m), uzun yollar kilometre (km) ile ölçülür. 1 m = 100 cm, 1 km = 1000 m.", o:"3 m = 300 cm, 2 km = 2000 m"},
       {b:"Sıvı ölçme", m:"Sıvıları litre (L) ve mililitre (mL) ile ölçeriz. 1 L = 1000 mL. Yarım litre 500 mL'dir.", o:"2 L = 2000 mL"},
       {b:"Uygun birimi seçme", m:"Ölçtüğümüz şeye uygun birim seçeriz: kalem boyu için cm, şehirler arası yol için km, elma için kg, kaşık ilaç için mL.", o:"Odanın boyunu metre ile ölçeriz."}
     ],
     ipucu:"Kilo, 1000 demektir: 1 kg = 1000 g, 1 km = 1000 m. Litre de 1000 mL'dir!",
     kartlar:[["1 kg kaç gramdır?","1000 g"],["1 m kaç santimetredir?","100 cm"],["1 km kaç metredir?","1000 m"],["1 L kaç mL'dir?","1000 mL"],["Yarım kilogram kaç gramdır?","500 g"],["Yarım litre kaç mL'dir?","500 mL"],["Kalem boyu için uygun birim","Santimetre"],["Şehirler arası yol için uygun birim","Kilometre"]],
     sorular:[
       {s:"1 kg kaç gramdır?", c:["1000 g","100 g","10 g","500 g"], a:"1 kilogram = 1000 gramdır."},
       {s:"3 m kaç cm'dir?", c:["300 cm","30 cm","3000 cm","103 cm"], a:"1 m = 100 cm olduğu için 3 × 100 = 300 cm."},
       {s:"2 kg 500 g kaç gramdır?", c:["2500 g","250 g","25000 g","700 g"], a:"2 kg = 2000 g. 2000 + 500 = 2500 g."},
       {s:"Evden okula olan uzaklığı ölçmek için hangi birim daha uygundur?", c:["Kilometre","Santimetre","Gram","Litre"], a:"Uzun yollar kilometre ile ölçülür."},
       {s:"4 L kaç mL'dir?", c:["4000 mL","400 mL","40 mL","4100 mL"], a:"1 L = 1000 mL. 4 × 1000 = 4000 mL."},
       {s:"1 kg'lık pirinç paketinden 350 g kullanılırsa kaç g pirinç kalır?", c:["650 g","750 g","350 g","550 g"], a:"1000 − 350 = 650 g."},
       {s:"Bir ip 2 m 40 cm uzunluğundadır. Bu uzunluk kaç cm'dir?", c:["240 cm","24 cm","2040 cm","420 cm"], a:"2 m = 200 cm. 200 + 40 = 240 cm."},
       {s:"Hangisi en ağırdır?", c:["2 kg","1500 g","1900 g","900 g"], a:"2 kg = 2000 g. Diğerleri 1500, 1900 ve 900 g olduğu için en ağır 2 kg'dır."},
       {s:"Bir şişede 1 L su vardır. Bu su 250 mL'lik bardaklara doldurulursa kaç bardak dolar?", c:["4","3","5","250"], a:"1 L = 1000 mL. 1000 ÷ 250 = 4 bardak."},
       {s:"Bir bidonda 5 L süt vardı. Her biri 500 mL olan 6 şişe doldurulursa bidonda kaç mL süt kalır?", c:["2000 mL","2 mL","3000 mL","2500 mL"], a:"6 × 500 = 3000 mL kullanıldı. 5 L = 5000 mL. 5000 − 3000 = 2000 mL."}
     ]
    },
    {id:"mat3-cevre-alan", ad:"Çevre ve Alan", e:"📐",
     anlat:[
       {b:"Çevre nedir?", m:"Bir şeklin kenar uzunluklarının toplamına çevre denir. Çevreyi cm ya da m gibi uzunluk birimleriyle ifade ederiz.", o:"Kenarları 5 cm ve 3 cm olan dikdörtgenin çevresi 5 + 3 + 5 + 3 = 16 cm"},
       {b:"Kare ve dikdörtgenin çevresi", m:"Karenin dört kenarı eşittir. Dikdörtgende karşılıklı kenarlar eşittir. Tüm kenarları topla.", o:"Kenarı 12 m olan kare bahçenin çevresi 12 + 12 + 12 + 12 = 48 m"},
       {b:"Alan nedir?", m:"Bir yüzeyin kapladığı yere alan denir. Alanı, aynı büyüklükteki birim karelerin sayısıyla ölçeriz.", o:"3 sıra, her sırada 4 birim kare: 3 × 4 = 12 birim kare"},
       {b:"Çevre ve alan farklıdır", m:"Çevre şeklin etrafını, alan ise içini ölçer. Aynı çevreli şekillerin alanları farklı olabilir.", o:"Kenarları 6 ve 2 birim olan dikdörtgenin çevresi 16, alanı 12 birim karedir."}
     ],
     ipucu:"Çevre: kenarların etrafında yürü, hepsini topla. Alan: içini birim karelerle doldur, say!",
     kartlar:[["Çevre nedir?","Kenar uzunlukları toplamı"],["Kenarı 6 cm olan karenin çevresi","24 cm"],["Kenarları 8 cm ve 2 cm dikdörtgenin çevresi","20 cm"],["Alan neyi gösterir?","Yüzeyin kapladığı yeri"],["Alan hangi birimle ölçülür?","Birim kare"],["4 sıra, her sırada 5 kare: alan?","20 birim kare"],["Üçgenin çevresi nasıl bulunur?","Üç kenar toplanır"],["Kenarı 7 cm olan eşkenar üçgenin çevresi","21 cm"]],
     sorular:[
       {s:"Kenar uzunlukları 3 cm, 4 cm ve 5 cm olan üçgenin çevresi kaç cm'dir?", c:["12 cm","60 cm","7 cm","15 cm"], a:"Çevre = 3 + 4 + 5 = 12 cm."},
       {s:"Kenarı 9 cm olan karenin çevresi kaç cm'dir?", c:["36 cm","18 cm","81 cm","27 cm"], a:"Karenin 4 eşit kenarı vardır: 4 × 9 = 36 cm."},
       {s:"Kısa kenarı 4 m, uzun kenarı 7 m olan dikdörtgenin çevresi kaç m'dir?", c:["22 m","11 m","28 m","44 m"], a:"4 + 7 + 4 + 7 = 22 m."},
       {s:"Bir şekil 3 sıra ve her sırada 6 birim kareden oluşuyor. Alanı kaç birim karedir?", c:["18 birim kare","9 birim kare","36 birim kare","24 birim kare"], a:"3 × 6 = 18 birim kare."},
       {s:"Alan hangi birimle ifade edilir?", c:["Birim kare","Santimetre","Litre","Kilogram"], a:"Alan, yüzeyi kaplayan birim karelerin sayısıyla ifade edilir."},
       {s:"Çevresi 20 cm olan karenin bir kenarı kaç cm'dir?", c:["5 cm","10 cm","4 cm","80 cm"], a:"20 ÷ 4 = 5 cm."},
       {s:"Bir kenarı 5 birim olan karenin alanı kaç birim karedir?", c:["25","20","10","5"], a:"5 sıra, her sırada 5 birim kare: 5 × 5 = 25."},
       {s:"Kenarları 10 m ve 6 m olan dikdörtgen bahçenin çevresine bir sıra tel çekilecektir. Kaç m tel gerekir?", c:["32 m","16 m","60 m","26 m"], a:"10 + 6 + 10 + 6 = 32 m."},
       {s:"Alanı 12 birim kare olan bir dikdörtgenin kenar uzunlukları (birim) hangisi olabilir?", c:["3 ve 4","2 ve 5","3 ve 3","6 ve 3"], a:"3 × 4 = 12. Diğer seçeneklerde alan 10, 9 ve 18 olur."},
       {s:"Kenarı 4 cm olan iki kare yan yana yapıştırılarak bir dikdörtgen oluşturuluyor. Oluşan dikdörtgenin çevresi kaç cm'dir?", c:["24 cm","32 cm","16 cm","12 cm"], a:"Dikdörtgenin kenarları 8 cm ve 4 cm'dir. Çevre = 8 + 4 + 8 + 4 = 24 cm."}
     ],
     uret:["cevre",20]
    }
  ]},
  {ad:"Geometri ve Veri", konular:[
    {id:"mat3-geometri", ad:"Cisimler, Doğru, Açı ve Simetri", e:"📦",
     anlat:[
       {b:"Geometrik cisimler", m:"Küp, dikdörtgen prizma, silindir, koni ve küre geometrik cisimlerdir. Küpün 6 yüzü, 8 köşesi ve 12 ayrıtı vardır. Küpün bütün yüzleri karedir.", o:"Zar küpe, futbol topu küreye, dondurma külahı koniye benzer."},
       {b:"Nokta, doğru, doğru parçası, ışın", m:"Nokta bir yeri gösterir. Doğru iki yönde de sonsuza uzanır. Doğru parçasının iki ucu da belli, ışının ise bir ucu belli, diğer yönü sonsuzdur.", o:"Güneş ışığı bir ışın gibi bir noktadan başlayıp ilerler."},
       {b:"Açı", m:"Başlangıç noktaları aynı olan iki ışının oluşturduğu şekle açı denir. Ortak noktaya köşe, ışınlara kenar denir. Kare ve dikdörtgenin köşelerindeki açılar dik açıdır.", o:"Kitabının köşesi dik açıdır."},
       {b:"Simetri", m:"Bir şekil bir doğru boyunca katlandığında iki yarısı tam üst üste geliyorsa şekil simetriktir. Katlama doğrusuna simetri doğrusu denir.", o:"Karenin 4, dikdörtgenin 2 simetri doğrusu vardır."}
     ],
     ipucu:"Doğru: iki yana ok. Işın: tek ok. Doğru parçası: iki uç nokta. Simetri: katla, üst üste otursun!",
     kartlar:[["Küpün kaç yüzü vardır?","6"],["Küpün kaç köşesi vardır?","8"],["Küpün kaç ayrıtı vardır?","12"],["Top hangi cisme benzer?","Küre"],["İki ucu belli çizgi","Doğru parçası"],["Tek ucu belli, bir yöne sonsuz","Işın"],["Kare kaç simetri doğrusuna sahiptir?","4"],["Açının ortak noktasına ne denir?","Köşe"]],
     sorular:[
       {s:"Hangisi küre şeklindeki bir cisme benzer?", c:["Futbol topu","Zar","Kitap","Dondurma külahı"], a:"Futbol topu küreye benzer. Zar küpe, külah koniye benzer."},
       {s:"Zar hangi geometrik cisme benzer?", c:["Küp","Silindir","Küre","Koni"], a:"Zarın bütün yüzleri karedir; küpe benzer."},
       {s:"Küpün kaç yüzü vardır?", c:["6","4","8","12"], a:"Küpün 6 yüzü, 8 köşesi, 12 ayrıtı vardır."},
       {s:"Bir ucu belli olup diğer yönde sonsuza giden çizgiye ne denir?", c:["Işın","Doğru","Doğru parçası","Nokta"], a:"Bir ucu belli, diğer ucu sonsuz olan çizgiye ışın denir."},
       {s:"Hangisi iki yönde de sonsuza uzanır?", c:["Doğru","Işın","Doğru parçası","Açı"], a:"Doğru her iki yönde de sonsuza uzanır."},
       {s:"Kare şeklinin köşesindeki açı nasıl bir açıdır?", c:["Dik açı","Dar açı","Geniş açı","Açı değildir"], a:"Karenin köşeleri dik açıdır."},
       {s:"Büyük harflerden hangisi dikey bir simetri doğrusuna sahiptir?", c:["A","F","G","R"], a:"A harfi ortadan dikey katlanınca iki yarısı üst üste gelir. F, G ve R gelmez."},
       {s:"Dikdörtgenin kaç simetri doğrusu vardır?", c:["2","4","1","3"], a:"Dikdörtgen yatay ve dikey olmak üzere iki yönde katlanınca üst üste gelir: 2."},
       {s:"Bir küpün yüzleri hangi şekildedir?", c:["Kare","Dikdörtgen","Üçgen","Daire"], a:"Küpün 6 yüzünün hepsi eş karedir."},
       {s:"Küp şeklindeki bir zarın 12 ayrıtının her biri 3 cm ise ayrıtların toplam uzunluğu kaç cm'dir?", c:["36 cm","12 cm","24 cm","18 cm"], a:"12 × 3 = 36 cm."}
     ]
    },
    {id:"mat3-veri", ad:"Veri: Tablo, Çetele ve Grafik", e:"📊",
     anlat:[
       {b:"Veri toplama ve çetele", m:"Bilgi toplamaya veri toplama denir. Çetelede her veri için bir çizgi çekilir. Beşinci çizgi, önceki dört çizgiyi çaprazlar. Beşer beşer saymak kolaydır.", o:"Dört çizgi ve çaprazlayan beşinci çizgi 5 demektir."},
       {b:"Tablo", m:"Toplanan veriler tablo ile düzenlenir. Tabloda satır ve sütunlar vardır. Böylece hangisinin çok, hangisinin az olduğunu görürüz.", o:"Elma 5, Armut 3, Muz 4"},
       {b:"Şekil grafiği", m:"Şekil grafiğinde her şekil belli sayıda şeyi gösterir. Şekillerin kaç sayıyı gösterdiğini grafiğin altında yazan açıklamadan öğreniriz.", o:"1 🍎 = 2 elma ise 3 🍎 = 6 elma"},
       {b:"Sütun grafiği", m:"Sütun grafiğinde sütunun uzunluğu verinin büyüklüğünü gösterir. En uzun sütun en çok olanı, en kısa sütun en az olanı gösterir.", o:"Mavi sütunu 8, kırmızı sütunu 5 ise mavi 3 fazladır."}
     ],
     ipucu:"Çetele: dört çizgi, beşinci çapraz. Sütun grafiği: sütun ne kadar uzunsa sayı o kadar büyük!",
     kartlar:[["Sayıları çizgiyle gösteren yöntem","Çetele"],["Satır ve sütunlu veri düzeni","Tablo"],["Sütunu en uzun olan neyi gösterir?","En çok olanı"],["Sütunu en kısa olan neyi gösterir?","En az olanı"],["Çetelede 5. çizgi nasıl çizilir?","Önceki dördü çaprazlar"],["1 simge = 2 ise 4 simge kaçtır?","8"],["Grafik başlığı neyi söyler?","Grafiğin konusunu"],["İki veri arasındaki fark için işlem","Çıkarma"]],
     sorular:[
       {s:"Çetelede 5 sayısı nasıl gösterilir?", c:["4 çizgi ve onları çaprazlayan 5. çizgi","5 ayrı nokta","2 çizgi","5 kare"], a:"Çetelede dört çizginin üstüne çapraz çizilen beşinci çizgi 5'i gösterir."},
       {s:"Sınıfta en sevilen renk anketine göre 8 öğrenci mavi, 5 öğrenci kırmızı, 6 öğrenci sarı seçti. En çok seçilen renk hangisidir?", c:["Mavi","Kırmızı","Sarı","Renkler eşit"], a:"8 en büyük sayıdır; en çok sevilen renk mavidir."},
       {s:"Aynı tabloda Mavi ile Kırmızı arasındaki fark kaçtır?", c:["3","13","8","5"], a:"8 − 5 = 3."},
       {s:"Aynı tabloya göre renk seçen toplam öğrenci sayısı kaçtır?", c:["19","18","14","21"], a:"8 + 5 + 6 = 19."},
       {s:"Bir şekil grafiğinde 1 🍎 = 3 elmayı gösteriyor. Grafikte 4 🍎 varsa kaç elma vardır?", c:["12","7","4","34"], a:"4 × 3 = 12 elma."},
       {s:"Okulda matematik 12, fen 15, Türkçe 9 oy almıştır. Fen ile Türkçe oylarının toplamı kaçtır?", c:["24","6","27","21"], a:"15 + 9 = 24."},
       {s:"Bir çetelede 3 tam beşli grup ve yanında 2 çizgi vardır. Kaç veri vardır?", c:["17","32","14","15"], a:"3 × 5 = 15, 15 + 2 = 17."},
       {s:"Sınıfta sevilen mevsim oyları: yaz 11, ilkbahar 7, sonbahar 5, kış 3. Yaz, kıştan kaç oy fazladır?", c:["8","14","4","6"], a:"11 − 3 = 8."},
       {s:"Bir sütun grafiğinde her 1 birim 5 kişiyi gösteriyor. Bir sütun 4 birim yüksekliğindedir. Sütun kaç kişiyi gösterir?", c:["20","9","4","45"], a:"4 × 5 = 20 kişi."},
       {s:"Üç şube yarışmada sırasıyla 28, 35 ve 22 kitap okudu. Hedef toplam 100 kitaptır. Hedefe kaç kitap kalmıştır?", c:["15","85","13","25"], a:"28 + 35 + 22 = 85. 100 − 85 = 15 kitap kalmıştır."}
     ]
    }
  ]}
]});
