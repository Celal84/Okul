HW.add({ders:"matematik", sinif:4, uniteler:[
  {ad:"Doğal Sayılar", konular:[
    {id:"mat4-buyuk-sayilar", ad:"Büyük Sayılar ve Bölükler", e:"🔢",
     anlat:[
       {b:"Bölükler", m:"Sayılar sağdan başlayarak üçerli gruplara ayrılır; her gruba bölük denir. Sağdaki ilk bölük birler bölüğü, ikincisi binler bölüğüdür. Her bölükte birler, onlar, yüzler basamağı vardır.", o:"245 317: binler bölüğü 245, birler bölüğü 317. Okunuşu: iki yüz kırk beş bin üç yüz on yedi."},
       {b:"Basamaklar", m:"Dört basamaklı sayılarda binler, beş basamaklıda onbinler, altı basamaklıda yüzbinler basamağı da vardır. Rakamın basamak değeri, bulunduğu basamağa göre değişir.", o:"34 582 sayısında 4'ün basamak değeri 4000'dir."},
       {b:"Okuma ve çözümleme", m:"Bölüğü oku, 'bin' de, sonra diğer bölüğü oku. Boş basamak okunmaz. Çözümlemede basamak değerleri toplanır.", o:"372 140 = 300 000 + 70 000 + 2 000 + 100 + 40"},
       {b:"Karşılaştırma", m:"Basamak sayısı çok olan sayı büyüktür. Basamak sayıları eşitse soldan ilk farklı rakamlara bakılır.", o:"48 310 > 48 301 çünkü yüzler basamağı eşit (3), onlar basamağında 1 > 0"}
     ],
     ipucu:"Sayıyı sağdan üçerli ayır: yüzler-onlar-birler, sonra binler! Bölüğü okuyunca 'bin' de.",
     kartlar:[["Bir bölükte kaç basamak vardır?","3"],["En küçük dört basamaklı sayı","1000"],["En büyük dört basamaklı sayı","9999"],["En büyük altı basamaklı sayı","999 999"],["45 000 sayısının okunuşu","Kırk beş bin"],["3 205 sayısında 2'nin basamak değeri","200"],["Sağdaki ilk bölüğün adı","Birler bölüğü"]],
     sorular:[
       {s:"En küçük dört basamaklı sayı kaçtır?", c:["1000","999","1001","10 000"], a:"Dört basamaklı en küçük sayı 1000'dir."},
       {s:"6 207 sayısının okunuşu hangisidir?", c:["Altı bin iki yüz yedi","Altı bin yirmi yedi","Altı yüz iki bin yedi","Altı bin iki yüz yetmiş"], a:"6 binler, 2 yüzler, 0 onlar, 7 birler: altı bin iki yüz yedi."},
       {s:"34 582 sayısında 4'ün basamak değeri kaçtır?", c:["4000","400","40 000","4"], a:"4 binler basamağında olduğu için değeri 4000'dir."},
       {s:"Yüz yirmi bin üç yüz kırk sayısı hangisidir?", c:["120 340","12 340","120 034","102 340"], a:"Binler bölüğü 120, birler bölüğü 340: 120 340."},
       {s:"300 000 + 40 000 + 5 000 + 200 + 7 işleminin sonucu kaçtır?", c:["345 207","345 270","354 207","340 527"], a:"Basamak değerleri sırayla yazılır: 345 207."},
       {s:"95 480 sayısının onbinler basamağındaki rakam kaçtır?", c:["9","5","4","8"], a:"95 480'de 9 onbinler, 5 binler, 4 yüzler, 8 onlar basamağındadır."},
       {s:"Hangi sayı en büyüktür?", c:["48 310","48 301","43 810","8 431"], a:"8 431 dört basamaklıdır. Beş basamaklılarda 48 310 en büyüktür."},
       {s:"2, 7, 0 ve 5 rakamlarını birer kez kullanarak yazılabilen en büyük dört basamaklı sayı kaçtır?", c:["7520","7250","7502","7052"], a:"Rakamlar büyükten küçüğe dizilir: 7, 5, 2, 0 → 7520."},
       {s:"Rakamları birbirinden farklı en küçük dört basamaklı sayı kaçtır?", c:["1023","1000","1234","1032"], a:"Binler basamağına 1, sonra 0, 2, 3 yazılır: 1023."},
       {s:"Binler bölüğü 205, birler bölüğü 030 olan sayı kaçtır?", c:["205 030","205 300","20 530","250 030"], a:"Binler bölüğü 205, birler bölüğü 030 → 205 030."}
     ],
     uret:["basamak",999999]
    },
    {id:"mat4-yuvarlama-oruntu", ad:"Yuvarlama ve Sayı Örüntüleri", e:"🔁",
     anlat:[
       {b:"Yuvarlama kuralı", m:"Yuvarlanacak basamağın sağındaki rakama bakılır. 0, 1, 2, 3, 4 ise yuvarlanan basamak aynı kalır; 5, 6, 7, 8, 9 ise bir artar. Sağdaki basamaklar sıfır olur.", o:"4 372 → onluğa 4370, yüzlüğe 4400, binliğe 4000"},
       {b:"Neden yuvarlarız?", m:"Tam sayıya gerek olmayan yerlerde yaklaşık sayı kullanırız. Nüfus, uzaklık ve fiyat gibi sayılar yuvarlanarak söylenir.", o:"12 480 kişi yaklaşık 12 000 kişidir."},
       {b:"Sayı örüntüsü", m:"Bir kurala göre ilerleyen sayı dizisi örüntüdür. Ardışık sayılar arasındaki farka bakarak kuralı buluruz.", o:"120, 240, 360, 480 → her adımda 120 artar."},
       {b:"Kuralı kullanma", m:"Kuralı bulunca istediğin sıradaki sayıyı yazabilirsin. Kural artan, azalan ya da çarpmaya dayalı olabilir.", o:"7, 14, 21, ... kural 7'şer artar; 10. sayı 70"}
     ],
     ipucu:"Yuvarlanacak basamağın sağına bak: 5, 6, 7, 8, 9 yukarı; 0, 1, 2, 3, 4 aşağı!",
     kartlar:[["4 372 en yakın yüzlüğe","4400"],["4 372 en yakın onluğa","4370"],["4 372 en yakın binliğe","4000"],["8 650 en yakın binliğe","9000"],["Yuvarlarken sağdaki rakam 4 ise","Aşağı yuvarla"],["Yuvarlarken sağdaki rakam 5 ise","Yukarı yuvarla"],["250, 500, 750, ... sıradaki sayı","1000"],["Örüntüde sayıların izlediği yola ne denir?","Kural"]],
     sorular:[
       {s:"6 482 sayısı en yakın yüzlüğe yuvarlanırsa kaç olur?", c:["6500","6400","6000","6480"], a:"Onlar basamağı 8 olduğu için yüzlük artar: 6500."},
       {s:"5 349 sayısı en yakın onluğa yuvarlanırsa kaç olur?", c:["5350","5340","5300","5400"], a:"Birler basamağı 9 olduğu için onluk artar: 5350."},
       {s:"47 618 sayısı en yakın binliğe yuvarlanırsa kaç olur?", c:["48 000","47 000","47 600","47 700"], a:"Yüzler basamağı 6 olduğu için binlik artar: 48 000."},
       {s:"En yakın binliğe yuvarlandığında 3000 olan sayı hangisidir?", c:["2 540","3 560","2 480","3 500"], a:"2 540'ta yüzler basamağı 5 olduğu için 3000'e yuvarlanır. 3 560 ve 3 500 → 4000, 2 480 → 2000."},
       {s:"5, 12, 19, 26, ... örüntüsünde sıradaki sayı kaçtır?", c:["33","31","32","34"], a:"Her adımda 7 artıyor: 26 + 7 = 33."},
       {s:"1200, 1100, 1000, 900, ... örüntüsünün kuralı nedir?", c:["Her adımda 100 azalır","Her adımda 100 artar","Her adımda 10 azalır","Her adımda 1100 azalır"], a:"Her sayı bir öncekinden 100 küçüktür."},
       {s:"2, 4, 8, 16, ... örüntüsünde sıradaki sayı kaçtır?", c:["32","24","20","18"], a:"Her sayı 2 ile çarpılıyor: 16 × 2 = 32."},
       {s:"Bir örüntü 15 ile başlıyor ve her adımda 6 artıyor. Bu örüntünün 5. sayısı kaçtır?", c:["39","45","36","33"], a:"15, 21, 27, 33, 39. Beşinci sayı 39."},
       {s:"Bir kasabanın nüfusu 12 480'dir. Bu nüfus en yakın binliğe yuvarlanırsa kaç olur?", c:["12 000","13 000","12 500","10 000"], a:"Yüzler basamağı 4 olduğu için binlik artmaz: 12 000."},
       {s:"Bir sayı en yakın yüzlüğe yuvarlandığında 5 400 olmuştur. Bu sayı hangisi olabilir?", c:["5 362","5 330","5 460","5 500"], a:"5 362'nin onlar basamağı 6 olduğu için 5 400'e yuvarlanır. 5 330 → 5 300, 5 460 → 5 500."}
     ],
     uret:["yuvarla",9999]
    },
    {id:"mat4-toplama-cikarma", ad:"Toplama, Çıkarma ve Tahmin", e:"➕",
     anlat:[
       {b:"Büyük sayılarla toplama", m:"Birlerden başlanır, eldeler bir sol basamağa taşınır. Basamaklar alt alta yazılır.", o:"4 628 + 2 795 = 7 423"},
       {b:"Büyük sayılarla çıkarma", m:"Gerekirse sol komşu basamaktan onluk bozulur. Sonuç toplamayla kontrol edilir.", o:"5 203 − 1 478 = 3 725 çünkü 3 725 + 1 478 = 5 203"},
       {b:"Zihinden işlem", m:"Sayıyı yuvarlak bir sayıya tamamlayıp farkı düzeltebilirsin. Eklenen miktarı sonra geri çıkarırsın.", o:"398 + 250 = 400 + 250 − 2 = 648"},
       {b:"Tahmin", m:"Sayıları yuvarlayıp işlem yapınca sonuca yakın bir değer buluruz. Tahmin, sonucun mantıklı olup olmadığını kontrol etmeye yarar.", o:"4 892 + 3 117 ≈ 5 000 + 3 000 = 8 000"}
     ],
     ipucu:"Zihinden toplarken sayıyı yuvarlak yap, sonra farkı düzelt: 398 = 400 − 2.",
     kartlar:[["2 500 + 3 500 = ?","6 000"],["9 000 − 4 500 = ?","4 500"],["99 + 99 = ? (zihinden)","198"],["398 + 250 = ?","648"],["Toplamın kontrolü için","Çıkarma yapılır"],["Çıkarmanın kontrolü için","Toplama yapılır"],["4 892 + 3 117 yaklaşık kaçtır?","8 000"],["Tahmin için sayılar ne yapılır?","Yuvarlanır"]],
     sorular:[
       {s:"3 450 + 2 300 işleminin sonucu kaçtır?", c:["5 750","5 650","1 150","5 740"], a:"3 450 + 2 300 = 5 750."},
       {s:"4 628 + 2 795 işleminin sonucu kaçtır?", c:["7 423","7 323","6 423","7 413"], a:"8 + 5 = 13, 2 + 9 + 1 = 12, 6 + 7 + 1 = 14, 4 + 2 + 1 = 7. Sonuç 7 423."},
       {s:"7 000 − 2 500 işleminin sonucu kaçtır?", c:["4 500","5 500","4 000","9 500"], a:"7 000 − 2 500 = 4 500."},
       {s:"5 203 − 1 478 işleminin sonucu kaçtır?", c:["3 725","4 735","3 835","3 825"], a:"1 478 + 3 725 = 5 203 olduğundan fark 3 725'tir."},
       {s:"24 365 + 15 270 işleminin sonucu kaçtır?", c:["39 635","39 525","38 635","40 635"], a:"24 365 + 15 270 = 39 635."},
       {s:"599 + 300 işlemini zihinden yaparsak sonuç kaç olur?", c:["899","889","799","900"], a:"599 sayısı 600'e çok yakındır: 600 + 300 − 1 = 899."},
       {s:"1 000 − 396 işleminin sonucu kaçtır?", c:["604","704","614","596"], a:"1 000 − 400 = 600, sonra 4 eklenir: 604."},
       {s:"6 987 + 2 013 işleminin sonucuna yakın değer bulmak için sayıları en yakın binliğe yuvarlarsak tahmin kaç olur?", c:["9 000","8 000","10 000","9 900"], a:"6 987 → 7 000, 2 013 → 2 000. 7 000 + 2 000 = 9 000."},
       {s:"Bir konser salonunda 2 345 kadın ve 1 876 erkek vardır. Salonda toplam kaç kişi vardır?", c:["4 221","4 211","3 221","4 321"], a:"2 345 + 1 876 = 4 221."},
       {s:"Bir kitapçıda 3 750 kitap vardı. Pazartesi 1 285 kitap satıldı, salı günü 2 000 kitap geldi. Kitapçıda şimdi kaç kitap vardır?", c:["4 465","2 465","6 465","5 035"], a:"3 750 − 1 285 = 2 465. 2 465 + 2 000 = 4 465."}
     ],
     uret:["topla",9999]
    },
    {id:"mat4-carpma", ad:"Çarpma İşlemi", e:"✖️",
     anlat:[
       {b:"Bir basamaklı sayıyla çarpma", m:"Basamakları birlerden başlayarak çarpıp elde varsa sonraki basamağa eklersin.", o:"123 × 4 = 492"},
       {b:"İki basamaklı sayıyla çarpma", m:"Önce birler basamağıyla çarp, sonra onlar basamağıyla çarp (sonuca bir sıfır ekle), iki sonucu topla.", o:"123 × 14: 123 × 4 = 492, 123 × 10 = 1230, 492 + 1230 = 1722"},
       {b:"Kısa yoldan çarpma", m:"10, 100, 1000 ile çarparken sayıya 1, 2, 3 sıfır eklenir. 5 ile çarparken 10 ile çarpıp ikiye bölebilirsin. 25 ile çarparken 100 ile çarpıp 4'e bölebilirsin.", o:"24 × 5 = 240 ÷ 2 = 120, 48 × 25 = 4800 ÷ 4 = 1200"},
       {b:"Çarpma problemleri", m:"Eşit gruplar ve tekrarlı durumlarda çarpma kullanılır. İşlem sonucunun mantıklı olup olmadığını yuvarlayarak kontrol et.", o:"24 kalemlik 15 kutu: 24 × 15 = 360 kalem"}
     ],
     ipucu:"×10 sıfır ekle, ×5 = ×10'un yarısı, ×25 = ×100'ün dörtte biri!",
     kartlar:[["36 × 10 = ?","360"],["36 × 100 = ?","3 600"],["24 × 5 = ?","120"],["15 × 4 = ?","60"],["25 × 4 = ?","100"],["12 × 12 = ?","144"],["×10'da sayının sağına ne eklenir?","Bir sıfır"],["Çarpmada çarpanların yeri değişirse sonuç?","Değişmez"]],
     sorular:[
       {s:"45 × 10 işleminin sonucu kaçtır?", c:["450","405","4 500","55"], a:"10 ile çarparken sayının sağına bir sıfır eklenir: 450."},
       {s:"36 × 100 işleminin sonucu kaçtır?", c:["3 600","360","36 000","136"], a:"100 ile çarparken iki sıfır eklenir: 3 600."},
       {s:"123 × 4 işleminin sonucu kaçtır?", c:["492","482","412","592"], a:"3 × 4 = 12, 20 × 4 = 80, 100 × 4 = 400. 12 + 80 + 400 = 492."},
       {s:"26 × 15 işleminin sonucu kaçtır?", c:["390","380","310","416"], a:"26 × 5 = 130, 26 × 10 = 260. 130 + 260 = 390."},
       {s:"42 × 30 işleminin sonucu kaçtır?", c:["1 260","126","12 600","1 206"], a:"42 × 3 = 126, sağına bir sıfır eklenir: 1 260."},
       {s:"32 × 5 işlemini kısa yoldan yaparsak sonuç kaç olur?", c:["160","150","320","37"], a:"32 × 10 = 320, yarısı 160."},
       {s:"214 × 12 işleminin sonucu kaçtır?", c:["2 568","2 468","2 528","2 658"], a:"214 × 2 = 428, 214 × 10 = 2 140. 428 + 2 140 = 2 568."},
       {s:"Bir pakette 24 kalem vardır. 15 pakette kaç kalem vardır?", c:["360","39","240","390"], a:"24 × 15 = 240 + 120 = 360. Toplama değil çarpma yapılır."},
       {s:"Bir otobüs seferi 48 yolcu taşıyor. 25 seferde kaç yolcu taşınır?", c:["1 200","1 000","73","1 250"], a:"48 × 25 = 4 800 ÷ 4 = 1 200."},
       {s:"Bir bakkal tanesi 12 liradan 35 adet, tanesi 8 liradan 50 adet ürün satmıştır. Toplam satış kaç liradır?", c:["820","420","400","1 420"], a:"12 × 35 = 420, 8 × 50 = 400. 420 + 400 = 820."}
     ],
     uret:["carp",30]
    },
    {id:"mat4-bolme", ad:"Bölme ve Dört İşlem Problemleri", e:"➗",
     anlat:[
       {b:"Bölme işleminin adları", m:"Bölünen, bölen, bölüm ve kalan bölmenin parçalarıdır. Kalan bölenden her zaman küçüktür. Kontrol: bölen × bölüm + kalan = bölünen.", o:"250 ÷ 7: bölüm 35, kalan 5 (7 × 35 + 5 = 250)"},
       {b:"Basamak basamak bölme", m:"Bölme işleminde böl, çarp, çıkar, indir adımları tekrarlanır. Bölenin kaç basamaklı olduğuna göre bölünenin soldan gerekli kadar basamağı alınır.", o:"735 ÷ 5 = 147"},
       {b:"İki basamaklı bölen", m:"Bölünenin ilk basamakları bölenden küçükse bir basamak daha alınır. Çarpım tablosunu ve 10'un katlarını kullan.", o:"840 ÷ 12 = 70"},
       {b:"Dört işlem problemleri", m:"Problemi iyice oku, ne istendiğini bul, hangi işlemlerin gerektiğini seç, işlem sırasına dikkat et ve cevabın mantıklı olup olmadığını kontrol et.", o:"Kitap 25 lira, 8 kitap alınır, 300 lira verilir: 8 × 25 = 200, 300 − 200 = 100 lira para üstü."}
     ],
     ipucu:"Bölme adımları: Böl, Çarp, Çıkar, İndir. Sonra tekrar! Kalan hep bölenden küçük.",
     kartlar:[["100 ÷ 4 = ?","25"],["1 200 ÷ 100 = ?","12"],["81 ÷ 9 = ?","9"],["Bölme kontrolü nasıl yapılır?","Bölen × bölüm + kalan"],["Kalan bölenden nasıl olur?","Küçüktür"],["600 ÷ 3 = ?","200"],["Bir sayıyı 1'e bölünce sonuç","Sayının kendisi"],["0'ı (0 olmayan) bir sayıya bölünce","Sonuç 0"]],
     sorular:[
       {s:"84 ÷ 4 işleminin sonucu kaçtır?", c:["21","22","20","24"], a:"4 × 21 = 84 olduğundan 84 ÷ 4 = 21."},
       {s:"735 ÷ 5 işleminin sonucu kaçtır?", c:["147","137","157","141"], a:"5 × 147 = 735."},
       {s:"360 ÷ 12 işleminin sonucu kaçtır?", c:["30","3","300","12"], a:"12 × 30 = 360."},
       {s:"250 ÷ 7 işleminin bölümü ve kalanı hangisidir?", c:["Bölüm 35, kalan 5","Bölüm 35, kalan 7","Bölüm 36, kalan 5","Bölüm 34, kalan 12"], a:"7 × 35 = 245, 250 − 245 = 5."},
       {s:"Bir bölme işleminde bölünen 500, bölen 8, bölüm 62'dir. Kalan kaçtır?", c:["4","3","6","496"], a:"8 × 62 = 496. Kalan 500 − 496 = 4."},
       {s:"1 200 lirayı 6 arkadaş eşit paylaşırsa her birine kaç lira düşer?", c:["200","20","2 000","1 194"], a:"1 200 ÷ 6 = 200."},
       {s:"Bir kitap 25 liradır. 8 kitap alan Murat 300 lira veriyor. Kaç lira para üstü alır?", c:["100","75","200","275"], a:"8 × 25 = 200 lira. 300 − 200 = 100 lira."},
       {s:"Bölen 9 olan bir bölme işleminde kalan en çok kaç olabilir?", c:["8","9","10","0"], a:"Kalan bölenden küçük olmalı; en büyük kalan 9 − 1 = 8."},
       {s:"180 öğrenci 12 otobüse eşit olarak biniyor. Her otobüste kaç öğrenci vardır?", c:["15","16","14","168"], a:"180 ÷ 12 = 15."},
       {s:"Bir çiftçi 5 sandığın her birine 48 elma koydu. Sonra bütün elmaları 12'şerli poşetlere paylaştırdı. Kaç poşet doldu?", c:["20","4","5","240"], a:"5 × 48 = 240 elma. 240 ÷ 12 = 20 poşet."}
     ],
     uret:["bol",12]
    },
    {id:"mat4-problem", ad:"Problem Çözme ve Problem Kurma", e:"🧩",
     anlat:[
       {b:"Çözüm planı", m:"Önce problemi anla, sonra plan yap, işlemleri yap ve sonucu kontrol et. Gerekirse şema ya da tablo çiz."},
       {b:"Çok adımlı problemler", m:"Önce ara sonucu buluruz, sonra bu sonuçla ikinci işlemi yaparız.", o:"3 kutuda 24'er kalem var, 20 kalem dağıtıldı: 3 × 24 = 72, 72 − 20 = 52"},
       {b:"Gereksiz bilgi", m:"Bazı problemlerde çözümde kullanılmayan bilgiler olabilir. Soruyu dikkatle okuyup gerekenleri seçeriz."},
       {b:"Problem kurma", m:"Verilen bir işleme uygun bir hikâye yazarak problem kurabiliriz.", o:"48 ÷ 6 = 8 için: 48 bilye 6 çocuğa eşit paylaştırılırsa her çocuğa 8 bilye düşer."}
     ],
     ipucu:"Anla, planla, çöz, kontrol et: APÇK!",
     kartlar:[["Problemin ilk adımı","Soruyu anlamak"],["Çözümden sonra son adım","Kontrol etmek"],["24 × 5 − 30","90"],["360 ÷ 6 + 40","100"],["Soruda gereksiz bilgi varsa","Kullanmayız"],["Problem kurmak için","İşleme uygun hikâye yazarız"],["Ara sonuç nedir?","İlk işlemin sonucu"]],
     sorular:[
       {s:"Bir kitap 250 sayfadır. Ali ilk gün 45, ikinci gün 60 sayfa okudu. Okumadığı kaç sayfa kalmıştır?", c:["145","155","195","105"], a:"45 + 60 = 105 sayfa okudu. 250 − 105 = 145 sayfa kalmıştır."},
       {s:"Bir kutuda 24 kalem var. 15 kutuda kaç kalem vardır?", c:["360","39","320","300"], a:"24 × 15 = 360 kalem."},
       {s:"Bir otobüs seferinde 45 yolcu taşıyor. Günde 6 sefer yaparsa kaç yolcu taşır?", c:["270","51","240","300"], a:"45 × 6 = 270 yolcu."},
       {s:"432 elma 6 kasaya eşit olarak konulursa her kasada kaç elma olur?", c:["72","62","76","426"], a:"432 ÷ 6 = 72 elma."},
       {s:"Bir ayakkabı 185 TL, bir çanta 240 TL'dir. 500 TL ile ikisini alan kişinin kaç TL'si kalır?", c:["75","85","65","925"], a:"185 + 240 = 425 TL. 500 − 425 = 75 TL."},
       {s:"Bir bahçede 12 sıra var, her sırada 15 elma ağacı bulunuyor. 40 ağaç kesilirse kaç ağaç kalır?", c:["140","180","100","220"], a:"12 × 15 = 180 ağaç. 180 − 40 = 140 ağaç."},
       {s:"Sınıftaki 28 öğrenci 4'erli gruplara ayrılıyor. Her gruba 3 kitap verilirse kaç kitap gerekir?", c:["21","12","84","7"], a:"28 ÷ 4 = 7 grup. 7 × 3 = 21 kitap."},
       {s:"Ayşe'nin 5 kardeşi var. Ayşe'nin 120 TL'si var ve 45 TL'lik bir kitap aldı. Kaç TL'si kaldığını bulmak için hangi bilgi gereksizdir?", c:["Kardeş sayısı","Ayşe'nin parası","Kitabın fiyatı","Soru cümlesi"], a:"Kalan parayı bulmak için 120 − 45 yeterlidir. Kardeş sayısı gereksizdir."},
       {s:"'48 bilye 6 çocuğa eşit paylaştırılırsa her çocuğa kaç bilye düşer?' problemi hangi işlemle çözülür?", c:["48 ÷ 6","48 × 6","48 + 6","48 − 6"], a:"Eşit paylaştırma bölme işlemidir: 48 ÷ 6 = 8."},
       {s:"Bir bakkal 3 koliye 24'er paket süt koydu. 18 paketi satınca kalan sütleri 6'şar paketlik gruplara ayırdı. Kaç grup oldu?", c:["9","12","54","6"], a:"3 × 24 = 72 paket. 72 − 18 = 54 paket kaldı. 54 ÷ 6 = 9 grup."}
     ]
    }
  ]},
  {ad:"Kesirler", konular:[
    {id:"mat4-kesirler", ad:"Kesir Türleri ve Karşılaştırma", e:"🍰",
     anlat:[
       {b:"Basit, bileşik, tam sayılı", m:"Payı paydasından küçük kesir basit kesirdir. Payı paydasından büyük ya da eşit olan kesir bileşik kesirdir. Tam kısmı da olan kesir tam sayılı kesirdir.", o:"Basit: 3/5. Bileşik: 7/4. Tam sayılı: 1 3/4."},
       {b:"Dönüştürme", m:"Bileşik kesri tam sayılıya çevirirken payı paydaya böl: bölüm tam kısım, kalan yeni paydadır. Tam sayılıyı bileşiğe çevirirken tam kısmı paydayla çarpıp payı ekle.", o:"7/4 = 1 3/4 (7 ÷ 4 = 1 kalan 3). 2 1/3 = (2 × 3 + 1)/3 = 7/3."},
       {b:"Kesirleri karşılaştırma", m:"Paydalar eşitse payı büyük olan büyüktür. Paylar eşitse paydası küçük olan büyüktür. Tam sayılılarda önce tam kısımlar karşılaştırılır.", o:"5/8 > 3/8, 3/5 > 3/8, 2 1/2 > 1 3/4"},
       {b:"Bir çokluğun kesri", m:"Çokluğu paydaya böl, çıkan sayıyı paya çarp.", o:"30'un 2/5'i: 30 ÷ 5 = 6, 6 × 2 = 12"}
     ],
     ipucu:"Pay payda'dan küçükse basit; büyük ya da eşitse bileşik. Bileşiği çevirirken böl: bölüm tam kısım, kalan pay!",
     kartlar:[["Pay < payda olan kesir","Basit kesir"],["Pay ≥ payda olan kesir","Bileşik kesir"],["Tam kısmı da olan kesir","Tam sayılı kesir"],["7/4 tam sayılı olarak","1 3/4"],["2 1/3 bileşik kesir olarak","7/3"],["3/5 ile 3/8: hangisi büyük?","3/5"],["Paydalar eşitse hangisi büyük?","Payı büyük olan"],["24'ün 3/8'i kaçtır?","9"]],
     sorular:[
       {s:"Hangisi basit kesirdir?", c:["5/9","9/5","9/9","12/7"], a:"Payı paydasından küçük olan 5/9 basit kesirdir."},
       {s:"Hangisi bileşik kesirdir?", c:["11/6","6/11","3/7","1/9"], a:"Payı paydasından büyük olan 11/6 bileşik kesirdir."},
       {s:"9/4 kesrinin tam sayılı kesir olarak yazılışı hangisidir?", c:["2 1/4","2 3/4","4 1/2","1 1/4"], a:"9 ÷ 4 = 2, kalan 1. Tam sayılı kesir 2 1/4'tür."},
       {s:"3 2/5 tam sayılı kesrinin bileşik kesir olarak yazılışı hangisidir?", c:["17/5","11/5","32/5","10/5"], a:"3 × 5 + 2 = 17. Bileşik kesir 17/5'tir."},
       {s:"5/8 ile 3/8 kesirlerinin karşılaştırılması hangisidir?", c:["5/8 > 3/8","5/8 < 3/8","5/8 = 3/8","Karşılaştırılamaz"], a:"Paydalar eşit; payı büyük olan büyüktür."},
       {s:"2/7 ile 2/5 kesirlerinden hangisi daha büyüktür?", c:["2/5","2/7","Eşittir","Karşılaştırılamaz"], a:"Paylar eşit olduğunda paydası küçük olan kesir büyüktür: 2/5 > 2/7."},
       {s:"3/8, 7/8 ve 5/8 kesirleri küçükten büyüğe nasıl sıralanır?", c:["3/8, 5/8, 7/8","7/8, 5/8, 3/8","5/8, 3/8, 7/8","3/8, 7/8, 5/8"], a:"Paydalar eşit olduğundan paylara bakılır: 3 < 5 < 7."},
       {s:"20 öğrencinin 3/4'ü kızdır. Sınıfta kaç kız öğrenci vardır?", c:["15","5","12","17"], a:"20 ÷ 4 = 5, 5 × 3 = 15."},
       {s:"Hangi kesir 1 bütüne eşittir?", c:["6/6","5/6","7/6","6/12"], a:"Pay ile payda eşit olan kesir 1 bütündür: 6/6."},
       {s:"Bir depoda 48 litre su vardır. İlk gün suyun 1/6'sı, ikinci gün 3/8'i kullanıldı. Depoda kaç litre su kaldı?", c:["22","26","8","18"], a:"48'in 1/6'sı 8, 3/8'i 18. Kullanılan 8 + 18 = 26 litre. Kalan 48 − 26 = 22 litre."}
     ],
     uret:["kesir",10]
    },
    {id:"mat4-kesir-islemleri", ad:"Kesirlerle Toplama ve Çıkarma", e:"➖",
     anlat:[
       {b:"Paydası eşit kesirleri toplama", m:"Payda aynı kalır, paylar toplanır.", o:"2/7 + 3/7 = 5/7"},
       {b:"Paydası eşit kesirleri çıkarma", m:"Payda aynı kalır, paylar çıkarılır.", o:"6/9 − 2/9 = 4/9"},
       {b:"Sonuç bileşik kesir olursa", m:"Toplama sonucu payı paydadan büyük olabilir. Bunu tam sayılı kesir olarak yazabiliriz.", o:"5/6 + 4/6 = 9/6 = 1 3/6"},
       {b:"Tam sayılılar ve bütün", m:"Tam sayılı kesirlerde tam kısımlar kendi arasında, kesir kısımları kendi arasında toplanır ya da çıkarılır. Bütün, payı ve paydası eşit olan kesir olarak yazılabilir.", o:"1 2/5 + 2 1/5 = 3 3/5, 1 − 3/8 = 8/8 − 3/8 = 5/8"}
     ],
     ipucu:"Payda aynı kalır, paylar işleme girer! Bütün = payda/payda (1 = 5/5).",
     kartlar:[["2/9 + 4/9 = ?","6/9"],["7/10 − 3/10 = ?","4/10"],["1 − 1/4 = ?","3/4"],["5/6 + 5/6 = ?","10/6 = 1 4/6"],["Toplamada payda","Aynı kalır"],["Toplamada paylar","Toplanır"],["3/3 kaç bütündür?","1 bütün"],["1 2/5 + 1 1/5 = ?","2 3/5"]],
     sorular:[
       {s:"3/8 + 2/8 işleminin sonucu kaçtır?", c:["5/8","5/16","6/8","1/8"], a:"Payda aynı kalır, paylar toplanır: 3 + 2 = 5, yani 5/8."},
       {s:"7/9 − 4/9 işleminin sonucu kaçtır?", c:["3/9","11/9","3/18","4/9"], a:"Payda aynı kalır, paylar çıkarılır: 7 − 4 = 3, yani 3/9."},
       {s:"4/10 + 5/10 işleminin sonucu kaçtır?", c:["9/10","9/20","1/10","20/10"], a:"4 + 5 = 9, payda 10 kalır: 9/10."},
       {s:"5/6 + 4/6 işleminin sonucu tam sayılı kesir olarak nasıl yazılır?", c:["1 3/6","1 1/6","9/12","1 4/6"], a:"5/6 + 4/6 = 9/6. 9 ÷ 6 = 1 kalan 3: 1 3/6."},
       {s:"1 − 3/8 işleminin sonucu kaçtır?", c:["5/8","3/8","2/8","4/8"], a:"1 = 8/8 olduğundan 8/8 − 3/8 = 5/8."},
       {s:"2 1/5 + 1 3/5 işleminin sonucu kaçtır?", c:["3 4/5","3 2/5","4 4/5","3 4/10"], a:"Tam kısımlar 2 + 1 = 3, kesir kısımları 1/5 + 3/5 = 4/5. Sonuç 3 4/5."},
       {s:"4 5/7 − 2 2/7 işleminin sonucu kaçtır?", c:["2 3/7","2 4/7","6 7/7","3 3/7"], a:"4 − 2 = 2, 5/7 − 2/7 = 3/7. Sonuç 2 3/7."},
       {s:"Bir pastanın 3/12'sini Ali, 4/12'sini Ece yedi. Pastanın kaçta kaçı yendi?", c:["7/12","7/24","1/12","12/7"], a:"3/12 + 4/12 = 7/12."},
       {s:"Defne bir kitabın 2/9'unu pazartesi, 3/9'unu salı okudu. Kitabın kaçta kaçı okunmadı?", c:["4/9","5/9","1/9","6/9"], a:"Okunan 2/9 + 3/9 = 5/9. Okunmayan 9/9 − 5/9 = 4/9."},
       {s:"Bir tankın 2/9'u doludur. Önce tankın 3/9'u kadar su eklendi, sonra 1/9'u kadar su boşaltıldı. Tankın kaçta kaçı doludur?", c:["4/9","6/9","5/9","3/9"], a:"2/9 + 3/9 = 5/9, sonra 5/9 − 1/9 = 4/9."}
     ],
     uret:["kesir",10]
    },
    {id:"mat4-ondalik", ad:"Ondalık Gösterim", e:"🔟",
     anlat:[
       {b:"Onda bir", m:"Paydası 10 olan kesirleri virgül kullanarak yazabiliriz. Virgülden sonraki ilk basamak onda birler basamağıdır.", o:"1/10 = 0,1 ve 3/10 = 0,3"},
       {b:"Yüzde bir", m:"Paydası 100 olan kesirler virgülden sonra iki basamakla yazılır. İkinci basamak yüzde birler basamağıdır.", o:"25/100 = 0,25 ve 7/100 = 0,07"},
       {b:"Okuma ve yazma", m:"Virgülden önceki kısım tam kısımdır. 2,35 sayısı iki tam yüzde otuz beş diye okunur.", o:"0,5 = sıfır tam onda beş"},
       {b:"Karşılaştırma ve para", m:"Ondalık gösterimleri karşılaştırırken önce tam kısımlara, sonra onda birlere, sonra yüzde birlere bakarız. Paralarda 0,50 TL = 50 kuruştur.", o:"1,2 > 0,9"}
     ],
     ipucu:"Virgülden sonra ilk basamak ONDA BİR, ikinci basamak YÜZDE BİR!",
     kartlar:[["1/10","0,1"],["3/10","0,3"],["25/100","0,25"],["7/100","0,07"],["0,5 TL kaç kuruştur?","50 kuruş"],["0,75 kesir olarak","75/100"],["Virgülden sonraki ilk basamak","Onda birler"]],
     sorular:[
       {s:"3/10 kesrinin ondalık gösterimi hangisidir?", c:["0,3","3,0","0,03","30"], a:"Paydası 10 olan kesirde pay virgülden sonraki ilk basamağa yazılır: 0,3."},
       {s:"0,7 ondalık gösterimi hangi kesre eşittir?", c:["7/10","7/100","70/10","1/7"], a:"0,7, onda yedi demektir: 7/10."},
       {s:"25/100 kesrinin ondalık gösterimi hangisidir?", c:["0,25","2,5","0,025","25"], a:"Paydası 100 olan kesirde pay iki basamakla yazılır: 0,25."},
       {s:"0,05 sayısı hangi kesre eşittir?", c:["5/100","5/10","50/100","1/5"], a:"0,05 yüzde beş demektir: 5/100."},
       {s:"Hangisi en büyüktür?", c:["0,8","0,6","0,08","0,5"], a:"Onda birler basamağı en büyük olan 0,8'dir."},
       {s:"1,5 TL kaç kuruştur?", c:["150","15","105","1500"], a:"1 TL = 100 kuruştur. 0,5 TL = 50 kuruştur. Toplam 150 kuruş."},
       {s:"2,35 sayısındaki 3 hangi basamaktadır?", c:["Onda birler","Yüzde birler","Birler","Onlar"], a:"Virgülden sonraki ilk basamak onda birlerdir. 3 buradadır."},
       {s:"Bir pizzanın 10 eşit diliminden 6'sı yendi. Yenen kısmın ondalık gösterimi nedir?", c:["0,6","6,0","0,06","0,4"], a:"6/10 kesri 0,6 diye yazılır."},
       {s:"Hangi sıralama küçükten büyüğedir?", c:["0,09 < 0,5 < 1,2","0,5 < 0,09 < 1,2","1,2 < 0,5 < 0,09","0,09 < 1,2 < 0,5"], a:"0,09 yüzde dokuz, 0,5 onda beş, 1,2 ise 1'den büyüktür."},
       {s:"0,35 m kaç santimetredir?", c:["35","3,5","350","0,35"], a:"1 m = 100 cm olduğundan 0,35 m, 100 cm'in 35/100'üdür: 35 cm."}
     ]
    }
  ]},
  {ad:"Ölçme", konular:[
    {id:"mat4-zaman", ad:"Zaman Ölçme", e:"⏱️",
     anlat:[
       {b:"Zaman birimleri", m:"1 saat 60 dakika, 1 dakika 60 saniye, 1 gün 24 saattir. 1 yıl 12 ay, 1 yüzyıl 100 yıldır. Normal yıl 365, artık yıl 366 gündür.", o:"Artık yılda Şubat 29 gün çeker. 4'e tam bölünen yıllar genellikle artık yıldır (2028)."},
       {b:"24 saatlik gösterim", m:"Öğleden sonraki saatler 12 eklenerek de yazılabilir. Gece yarısı 00.00, öğlen 12.00'dir.", o:"Akşam 8 = 20.00, öğleden sonra 3 = 15.00"},
       {b:"Süre hesaplama", m:"Süre, bitiş saatinden başlangıç saatinin çıkarılmasıyla bulunur. Dakikalar 60'ı geçerse saat bir artar.", o:"14.45'ten 16.20'ye 1 saat 35 dakika"},
       {b:"Zaman toplama", m:"Saatler saatlerle, dakikalar dakikalarla toplanır. Dakika 60 ve üstündeyse saate çevrilir.", o:"2 saat 40 dk + 1 saat 35 dk = 3 saat 75 dk = 4 saat 15 dk"}
     ],
     ipucu:"Zaman altmışlıdır: 60 sn = 1 dk, 60 dk = 1 saat. Süre = bitiş − başlangıç.",
     kartlar:[["1 saat kaç dakikadır?","60 dakika"],["1 dakika kaç saniyedir?","60 saniye"],["1 yüzyıl kaç yıldır?","100 yıl"],["Artık yıl kaç gündür?","366 gün"],["Normal yıl kaç gündür?","365 gün"],["1 gün kaç saattir?","24 saat"],["Öğleden sonra 3 kaçtır (24 saat)?","15.00"],["Süre nasıl bulunur?","Bitiş − başlangıç"]],
     sorular:[
       {s:"2 saat kaç dakikadır?", c:["120 dakika","100 dakika","200 dakika","60 dakika"], a:"2 × 60 = 120 dakika."},
       {s:"3 dakika kaç saniyedir?", c:["180","130","300","60"], a:"3 × 60 = 180 saniye."},
       {s:"24 saatlik gösterimde 17.30 saati öğleden sonra kaç olur?", c:["5.30","7.30","4.30","6.30"], a:"17 − 12 = 5, yani öğleden sonra 5.30."},
       {s:"Akşam saat 8.00, 24 saatlik gösterimde nasıl yazılır?", c:["20.00","18.00","8.00","22.00"], a:"8 + 12 = 20, yani 20.00."},
       {s:"Bir film 14.45'te başlayıp 16.20'de bitiyor. Film kaç saat kaç dakika sürmüştür?", c:["1 saat 35 dakika","1 saat 25 dakika","2 saat 35 dakika","1 saat 65 dakika"], a:"14.45'ten 15.45'e 1 saat, 15.45'ten 16.20'ye 35 dakika."},
       {s:"2 saat 40 dakika ile 1 saat 35 dakika toplanırsa kaç saat kaç dakika olur?", c:["4 saat 15 dakika","3 saat 15 dakika","4 saat 25 dakika","3 saat 5 dakika"], a:"40 + 35 = 75 dakika = 1 saat 15 dakika. 2 + 1 + 1 = 4 saat 15 dakika."},
       {s:"Hangi yıl artık yıldır?", c:["2028","2026","2027","2029"], a:"2028, 4'e tam bölündüğü için artık yıldır."},
       {s:"Artık yılda Şubat ayı kaç gün çeker?", c:["29","28","30","31"], a:"Artık yılda Şubat 29 gündür."},
       {s:"3 yüzyıl kaç yıldır?", c:["300 yıl","30 yıl","3000 yıl","103 yıl"], a:"1 yüzyıl 100 yıl olduğundan 3 × 100 = 300 yıl."},
       {s:"Okul 08.30'da başlıyor. 6 ders vardır, her ders 40 dakikadır. Aralarda 5 teneffüs vardır, her teneffüs 10 dakikadır. Okul saat kaçta biter?", c:["13.20","12.50","13.30","12.30"], a:"6 × 40 = 240 dk, 5 × 10 = 50 dk, toplam 290 dk = 4 saat 50 dk. 08.30 + 4 saat 50 dk = 13.20."}
     ],
     uret:["saat",12]
    },
    {id:"mat4-uzunluk-birim", ad:"Uzunluk Ölçme: km, m, cm, mm Dönüşümleri", e:"📏",
     anlat:[
       {b:"Birimler arası ilişki", m:"1 km = 1000 m, 1 m = 100 cm, 1 cm = 10 mm, 1 m = 1000 mm'dir."},
       {b:"Dönüşüm kuralı", m:"Büyük birimden küçük birime geçerken çarparız. Küçük birimden büyüğe geçerken böleriz.", o:"4500 m = 4 km 500 m"},
       {b:"Uzunluklarla işlem", m:"Toplama ve çıkarma yapmadan önce uzunlukları aynı birime çeviririz.", o:"3 m 20 cm + 1 m 85 cm = 320 cm + 185 cm = 505 cm = 5 m 5 cm"},
       {b:"Problemler", m:"Yol, ip, kumaş gibi problemlerde birimlere dikkat ederiz."}
     ],
     ipucu:"Büyük birime çevirirken böl, küçük birime çevirirken çarp!",
     kartlar:[["1 km","1000 m"],["1 m","100 cm"],["1 cm","10 mm"],["2500 m","2 km 500 m"],["3 m 20 cm + 1 m 85 cm","5 m 5 cm"],["4 m kaç mm?","4000 mm"]],
     sorular:[
       {s:"6 km kaç metredir?", c:["6000","600","60","60000"], a:"6 × 1000 = 6000 m."},
       {s:"3500 m kaç km kaç m'dir?", c:["3 km 500 m","35 km","3 km 50 m","350 km"], a:"3000 m = 3 km. Kalan 500 m. Toplam 3 km 500 m."},
       {s:"7 m kaç santimetredir?", c:["700","70","7000","107"], a:"7 × 100 = 700 cm."},
       {s:"Hangisi en uzundur?", c:["2 m","150 cm","1900 mm","1 m 80 cm"], a:"2 m = 2000 mm; 1900 mm; 1 m 80 cm = 1800 mm; 150 cm = 1500 mm. En uzun 2 m'dir."},
       {s:"5 cm kaç milimetredir?", c:["50","500","5","15"], a:"5 × 10 = 50 mm."},
       {s:"Bir yol 2 km 300 m uzunluğundadır. Ali yolun 1 km 800 m'sini yürüdü. Kaç metre yolu kaldı?", c:["500","1500","4100","100"], a:"2300 − 1800 = 500 m."},
       {s:"3 m 20 cm + 1 m 85 cm toplamı kaçtır?", c:["5 m 5 cm","4 m 5 cm","5 m 50 cm","4 m 95 cm"], a:"320 + 185 = 505 cm = 5 m 5 cm."},
       {s:"4 m uzunluğundaki ip 25 cm'lik parçalara kesilirse kaç parça olur?", c:["16","15","25","100"], a:"4 m = 400 cm. 400 ÷ 25 = 16 parça."},
       {s:"Okul bahçesinin etrafını bir kez dolaşmak 600 m'dir. 5 tur kaç km eder?", c:["3","30","5","600"], a:"5 × 600 = 3000 m = 3 km."},
       {s:"Ela'nın boyu 1 m 35 cm, kardeşinin boyu 98 cm'dir. Ela kardeşinden kaç cm uzundur?", c:["37","47","33","43"], a:"135 − 98 = 37 cm."}
     ]
    },
    {id:"mat4-cevre", ad:"Çevre Ölçme", e:"🔲",
     anlat:[
       {b:"Çevre nedir?", m:"Bir şeklin kenar uzunluklarının toplamına çevre denir. Çevreyi cm, m, km gibi uzunluk birimleriyle ölçeriz.", o:"Kenarları 3, 4, 5 cm olan üçgenin çevresi 12 cm'dir."},
       {b:"Karenin çevresi", m:"Karenin 4 kenarı eşittir. Çevre = 4 × bir kenar.", o:"Kenarı 6 cm olan karenin çevresi 24 cm'dir."},
       {b:"Dikdörtgenin çevresi", m:"Dikdörtgende karşılıklı kenarlar eşittir. Çevre = 2 × (kısa kenar + uzun kenar).", o:"5 cm ve 8 cm kenarlı dikdörtgen: 2 × 13 = 26 cm"},
       {b:"Bilinmeyen kenar", m:"Çevre ve bazı kenarlar biliniyorsa eksik kenarı çıkarma ve bölme ile buluruz.", o:"Çevresi 30 cm, kısa kenarı 6 cm: 30 ÷ 2 = 15, 15 − 6 = 9 cm uzun kenar"}
     ],
     ipucu:"Çevre, şeklin etrafında yürürken kat ettiğin yoldur: kenarları topla!",
     kartlar:[["Çevre nedir?","Kenarların toplamı"],["Karenin çevresi","4 × kenar"],["Dikdörtgenin çevresi","2 × (a + b)"],["Kenarı 7 cm olan karenin çevresi","28 cm"],["5 cm ve 8 cm'lik dikdörtgenin çevresi","26 cm"],["Çevre hangi birimle ölçülür?","cm, m, km"]],
     sorular:[
       {s:"Kenarı 9 cm olan karenin çevresi kaç cm'dir?", c:["36","18","81","27"], a:"4 × 9 = 36 cm."},
       {s:"Kenarları 5 cm ve 8 cm olan dikdörtgenin çevresi kaç cm'dir?", c:["26","13","40","18"], a:"2 × (5 + 8) = 2 × 13 = 26 cm."},
       {s:"Kenarları 6 cm, 7 cm ve 9 cm olan üçgenin çevresi kaç cm'dir?", c:["22","42","16","13"], a:"6 + 7 + 9 = 22 cm."},
       {s:"Çevresi 40 cm olan karenin bir kenarı kaç cm'dir?", c:["10","20","8","160"], a:"40 ÷ 4 = 10 cm."},
       {s:"Kısa kenarı 6 cm, çevresi 30 cm olan dikdörtgenin uzun kenarı kaç cm'dir?", c:["9","15","24","18"], a:"30 ÷ 2 = 15. 15 − 6 = 9 cm."},
       {s:"Kenarları 12 m ve 8 m olan dikdörtgen bir bahçenin etrafına tel çekilecek. Kaç metre tel gerekir?", c:["40","20","96","32"], a:"2 × (12 + 8) = 40 m."},
       {s:"Çevresi 36 cm olan bir karenin kenarı 5 cm artırılırsa yeni çevre kaç cm olur?", c:["56","41","45","61"], a:"Eski kenar 9 cm. Yeni kenar 14 cm. 4 × 14 = 56 cm."},
       {s:"Bir kenarı 8 cm olan eşkenar üçgenin çevresi kaç cm'dir?", c:["24","16","32","64"], a:"3 × 8 = 24 cm."},
       {s:"Bir kenarı 15 m olan kare şeklindeki bahçenin çevresi kaç metredir?", c:["60","30","225","45"], a:"4 × 15 = 60 m."},
       {s:"Çevresi 28 cm olan dikdörtgenin bir kenarı 5 cm'dir. Diğer kenarı kaç cm'dir?", c:["9","23","14","19"], a:"28 ÷ 2 = 14. 14 − 5 = 9 cm."}
     ],
     uret:["cevre",20]
    },
    {id:"mat4-alan", ad:"Alan Ölçme", e:"🟦",
     anlat:[
       {b:"Alan nedir?", m:"Bir yüzeyin kapladığı yere alan denir. Alanı birim karelerle ölçeriz."},
       {b:"Santimetrekare ve metrekare", m:"Kenarı 1 cm olan karenin alanı 1 santimetrekaredir (cm²). Kenarı 1 m olan karenin alanı 1 metrekaredir (m²)."},
       {b:"Dikdörtgenin alanı", m:"Dikdörtgenin alanı, kısa kenar ile uzun kenarın çarpımıdır.", o:"4 cm × 6 cm = 24 cm²"},
       {b:"Karenin alanı", m:"Karenin alanı, bir kenarın kendisiyle çarpımıdır.", o:"Kenarı 5 cm olan karenin alanı 25 cm²"}
     ],
     ipucu:"Alan içini doldurur (cm²), çevre etrafını dolaşır (cm)!",
     kartlar:[["Alan nedir?","Yüzeyin kapladığı yer"],["Dikdörtgenin alanı","Kısa × uzun kenar"],["Karenin alanı","Kenar × kenar"],["6 cm kenarlı karenin alanı","36 cm²"],["4 cm × 7 cm'lik alan","28 cm²"],["Alan birimi","Santimetrekare"]],
     sorular:[
       {s:"Kenarları 4 cm ve 6 cm olan dikdörtgenin alanı kaç cm²'dir?", c:["24","20","10","48"], a:"4 × 6 = 24 cm²."},
       {s:"Kenarı 5 cm olan karenin alanı kaç cm²'dir?", c:["25","20","10","15"], a:"5 × 5 = 25 cm²."},
       {s:"Kenarları 3 m ve 9 m olan dikdörtgen bahçenin alanı kaç m²'dir?", c:["27","12","24","36"], a:"3 × 9 = 27 m²."},
       {s:"Alan hangi birimle ölçülür?", c:["Santimetrekare","Santimetre","Litre","Kilogram"], a:"Alan birim karelerle ölçülür: santimetrekare, metrekare."},
       {s:"Alanı 48 cm² olan dikdörtgenin kısa kenarı 6 cm ise uzun kenarı kaç cm'dir?", c:["8","42","54","288"], a:"48 ÷ 6 = 8 cm."},
       {s:"Kenarı 10 m olan kare şeklindeki arsanın alanı kaç m²'dir?", c:["100","40","20","1000"], a:"10 × 10 = 100 m²."},
       {s:"Kenarları 5 cm ve 8 cm olan dikdörtgenin alanı ve çevresi sırasıyla nedir?", c:["40 cm², 26 cm","26 cm², 40 cm","13 cm², 40 cm","40 cm, 26 cm²"], a:"Alan 5 × 8 = 40 cm². Çevre 2 × 13 = 26 cm."},
       {s:"12 tane 1 cm²'lik birim kare 3 satır olacak şekilde dikdörtgen biçiminde dizilirse her satırda kaç birim kare olur?", c:["4","9","36","15"], a:"12 ÷ 3 = 4 birim kare."},
       {s:"Alanı 36 cm² olan karenin bir kenarı kaç cm'dir?", c:["6","9","18","12"], a:"6 × 6 = 36 olduğundan kenar 6 cm'dir."},
       {s:"Kenarları 7 m ve 4 m olan dikdörtgen biçimindeki odaya 1 m²'lik halılardan kaç tane serilebilir?", c:["28","22","11","14"], a:"Oda alanı 7 × 4 = 28 m²'dir. 28 halı gerekir."}
     ],
     uret:["alan",20]
    },
    {id:"mat4-uzunluk-cevre-alan", ad:"Uzunluk, Çevre ve Alan", e:"📏",
     anlat:[
       {b:"Uzunluk birimleri", m:"1 km = 1000 m, 1 m = 100 cm, 1 cm = 10 mm, 1 m = 1000 mm. Büyük birimden küçüğe geçerken çarparız, küçükten büyüğe geçerken böleriz.", o:"3 km 250 m = 3250 m, 7 cm = 70 mm"},
       {b:"Çevre", m:"Kare için çevre = 4 × bir kenar. Dikdörtgen için çevre = 2 × (kısa kenar + uzun kenar). Şeklin tüm kenarlarını toplayarak da bulunur.", o:"12 cm ve 7 cm kenarlı dikdörtgen: 2 × (12 + 7) = 38 cm"},
       {b:"Alan", m:"Dikdörtgenin alanı kısa kenar × uzun kenardır. Karenin alanı bir kenar × bir kenardır. Birimi santimetrekare (cm²) ya da metrekaredir (m²).", o:"9 cm × 4 cm = 36 cm²"},
       {b:"Çevre ve alan karışmasın", m:"Çevre kenarlar boyunca uzunluktur (cm). Alan yüzeyi kaplayan miktardır (cm²). Aynı çevreli şekillerin alanı farklı olabilir.", o:"6 cm × 4 cm dikdörtgen: çevre 20 cm, alan 24 cm²"}
     ],
     ipucu:"Çevre: kenarları gez, topla (cm). Alan: içini doldur, çarp (cm²).",
     kartlar:[["1 km kaç metredir?","1000 m"],["1 m kaç santimetredir?","100 cm"],["1 cm kaç milimetredir?","10 mm"],["Dikdörtgenin alanı","Kısa kenar × uzun kenar"],["Karenin çevresi","4 × bir kenar"],["Kenarı 5 cm karenin alanı","25 cm²"],["Kenarları 6 cm ve 4 cm dikdörtgenin çevresi","20 cm"],["Alan birimi","Santimetrekare (cm²)"]],
     sorular:[
       {s:"5 km kaç metredir?", c:["5000 m","500 m","50 m","5100 m"], a:"1 km = 1000 m olduğundan 5 × 1000 = 5000 m."},
       {s:"3 m 25 cm kaç santimetredir?", c:["325 cm","3025 cm","35 cm","3250 cm"], a:"3 m = 300 cm. 300 + 25 = 325 cm."},
       {s:"7 cm kaç milimetredir?", c:["70 mm","700 mm","7 mm","17 mm"], a:"1 cm = 10 mm olduğundan 7 × 10 = 70 mm."},
       {s:"Kenarı 8 cm olan karenin çevresi kaç cm'dir?", c:["32 cm","16 cm","64 cm","24 cm"], a:"4 × 8 = 32 cm."},
       {s:"Kenarları 12 cm ve 7 cm olan dikdörtgenin çevresi kaç cm'dir?", c:["38 cm","19 cm","84 cm","26 cm"], a:"2 × (12 + 7) = 2 × 19 = 38 cm."},
       {s:"Kenarları 9 cm ve 4 cm olan dikdörtgenin alanı kaç santimetrekaredir?", c:["36 cm²","26 cm²","13 cm²","36 cm"], a:"9 × 4 = 36 cm²."},
       {s:"Alanı 48 cm² olan dikdörtgenin bir kenarı 8 cm ise diğer kenarı kaç cm'dir?", c:["6 cm","40 cm","56 cm","384 cm"], a:"48 ÷ 8 = 6 cm."},
       {s:"Çevresi 36 cm olan karenin alanı kaç santimetrekaredir?", c:["81 cm²","36 cm²","9 cm²","144 cm²"], a:"Kenar 36 ÷ 4 = 9 cm. Alan 9 × 9 = 81 cm²."},
       {s:"Kenarları 25 m ve 12 m olan dikdörtgen bahçenin çevresine bir sıra çit çekilecektir. Kaç metre çit gerekir?", c:["74 m","37 m","300 m","62 m"], a:"2 × (25 + 12) = 2 × 37 = 74 m."},
       {s:"Dikdörtgen bir odanın zemini 6 m × 5 m'dir. Zemin, her biri 1 m² olan karolarla döşenecek ve bir karonun fiyatı 40 liradır. Toplam maliyet kaç liradır?", c:["1 200 lira","440 lira","220 lira","3 000 lira"], a:"Alan 6 × 5 = 30 m², yani 30 karo. 30 × 40 = 1 200 lira."}
     ],
     uret:["alan",20]
    },
    {id:"mat4-kutle", ad:"Kütle Ölçme: ton, kg, g", e:"⚖️",
     anlat:[
       {b:"Kütle birimleri", m:"Kütle birimleri gram (g), kilogram (kg) ve tondur (t). 1 kg = 1000 g ve 1 ton = 1000 kg'dır."},
       {b:"Uygun birim seçme", m:"Baharat, ilaç gibi küçük şeyleri gramla; meyve, sebze, un gibi şeyleri kilogramla; kamyon yükü gibi büyük şeyleri tonla ölçeriz."},
       {b:"Birim dönüşümü", m:"Büyükten küçüğe çarparız, küçükten büyüğe böleriz.", o:"3 t = 3000 kg, 4500 g = 4 kg 500 g"},
       {b:"Kütle problemleri", m:"Toplama ve çıkarmadan önce kütleleri aynı birime çeviririz.", o:"2 kg 400 g + 1 kg 700 g = 2400 g + 1700 g = 4100 g = 4 kg 100 g"}
     ],
     ipucu:"Ton, kilo, gram: her basamakta 1000 var!",
     kartlar:[["1 ton","1000 kg"],["1 kg","1000 g"],["Yarım ton","500 kg"],["3 t","3000 kg"],["2 kg 400 g + 1 kg 700 g","4 kg 100 g"],["Kamyon yükü hangi birimle?","Ton"]],
     sorular:[
       {s:"1 ton kaç kilogramdır?", c:["1000","100","10","10000"], a:"1 ton = 1000 kg."},
       {s:"5 kg kaç gramdır?", c:["5000","500","50","50000"], a:"5 × 1000 = 5000 g."},
       {s:"4000 kg kaç tondur?", c:["4","40","400","4000"], a:"4000 ÷ 1000 = 4 ton."},
       {s:"2 kg 400 g + 1 kg 700 g toplamı kaçtır?", c:["4 kg 100 g","3 kg 100 g","4 kg 1000 g","3 kg 700 g"], a:"2400 + 1700 = 4100 g = 4 kg 100 g."},
       {s:"Bir kamyon 3 ton 500 kg yük taşıyor. Bu yük kaç kilogramdır?", c:["3500","350","35000","3050"], a:"3 ton = 3000 kg. 3000 + 500 = 3500 kg."},
       {s:"Hangisi en ağırdır?", c:["2 kg","1900 g","1 kg 800 g","1700 g"], a:"2 kg = 2000 g. Diğerleri 1900, 1800 ve 1700 g'dır."},
       {s:"Bir çuval 25 kg un alıyor. 40 çuval kaç ton un alır?", c:["1","10","100","4"], a:"25 × 40 = 1000 kg = 1 ton."},
       {s:"Elif 3 kg elma aldı. Kek için 750 g elma kullandı. Kaç gram elması kaldı?", c:["2250","2750","2350","750"], a:"3 kg = 3000 g. 3000 − 750 = 2250 g."},
       {s:"Bir pakette 250 g çay var. 12 paket kaç kilogram çay eder?", c:["3","30","25","300"], a:"250 × 12 = 3000 g = 3 kg."},
       {s:"Bir kasada 18 kg 500 g domates var. Aynı iki kasa kaç kilogram domates eder?", c:["37","36","38","35"], a:"18 kg 500 g + 18 kg 500 g = 36 kg 1000 g = 37 kg."}
     ]
    },
    {id:"mat4-sivi", ad:"Sıvı Ölçme: L, mL", e:"🧴",
     anlat:[
       {b:"Litre ve mililitre", m:"Sıvı ölçme birimleri litre (L) ve mililitredir (mL). 1 L = 1000 mL'dir.", o:"Yarım litre = 500 mL, çeyrek litre = 250 mL"},
       {b:"Uygun birim seçme", m:"Kaşık, bardak, ilaç şişesi gibi küçük miktarları mL ile; bidon, depo, havuz gibi büyük miktarları litre ile ölçeriz."},
       {b:"Dönüşüm", m:"Litreden mL'ye geçerken 1000 ile çarparız. mL'den litreye geçerken 1000'e böleriz.", o:"3 L = 3000 mL, 2500 mL = 2 L 500 mL"},
       {b:"Sıvı problemleri", m:"İşlem yapmadan önce miktarları aynı birime çeviririz.", o:"1 L 250 mL + 750 mL = 1250 mL + 750 mL = 2000 mL = 2 L"}
     ],
     ipucu:"Litreden mL'ye çarp 1000, geri dönerken böl 1000!",
     kartlar:[["1 L","1000 mL"],["Yarım L","500 mL"],["Çeyrek L","250 mL"],["3 L","3000 mL"],["2500 mL","2 L 500 mL"],["Şurup kaşığı hangi birimle?","mL"]],
     sorular:[
       {s:"4 L kaç mL'dir?", c:["4000","400","40","4100"], a:"4 × 1000 = 4000 mL."},
       {s:"3500 mL kaç litre kaç mL'dir?", c:["3 L 500 mL","35 L","3 L 50 mL","350 L"], a:"3000 mL = 3 L. Kalan 500 mL."},
       {s:"1 L 250 mL + 750 mL toplamı kaç litredir?", c:["2 L","1 L","3 L","2 L 500 mL"], a:"1250 + 750 = 2000 mL = 2 L."},
       {s:"Bir şişede 1500 mL su var. 600 mL su içilirse kaç mL su kalır?", c:["900","2100","600","1100"], a:"1500 − 600 = 900 mL."},
       {s:"Hangisi en çoktur?", c:["3 L","2900 mL","2 L 800 mL","2500 mL"], a:"3 L = 3000 mL. Diğerleri 2900, 2800 ve 2500 mL'dir."},
       {s:"Bir sürahi 2 L su alıyor. 250 mL'lik bardaklarla kaç bardak doldurulur?", c:["8","4","10","12"], a:"2 L = 2000 mL. 2000 ÷ 250 = 8 bardak."},
       {s:"Her biri 500 mL olan 6 şişe suyun toplamı kaç litredir?", c:["3","30","6","5"], a:"500 × 6 = 3000 mL = 3 L."},
       {s:"Bir bidonda 5 L zeytinyağı var. 750 mL yağ kullanılırsa kaç mL yağ kalır?", c:["4250","4750","4350","750"], a:"5 L = 5000 mL. 5000 − 750 = 4250 mL."},
       {s:"Hangisini ölçmek için mL kullanmak daha uygundur?", c:["Bir kaşık şurup","Yüzme havuzu","Okul su deposu","Bir gölün suyu"], a:"Bir kaşık şurup çok az sıvıdır; mL ile ölçülür."},
       {s:"Annem 2 L 500 mL süt aldı. Sabah 750 mL, akşam 600 mL kullandı. Kaç mL süt kaldı?", c:["1150","1350","1250","1750"], a:"2500 − (750 + 600) = 2500 − 1350 = 1150 mL."}
     ]
    },
    {id:"mat4-tartma-sivi", ad:"Tartma ve Sıvı Ölçme", e:"⚖️",
     anlat:[
       {b:"Kütle birimleri", m:"Ton, kilogram (kg), gram (g) ve miligram (mg) kütle birimleridir. 1 ton = 1000 kg, 1 kg = 1000 g, 1 g = 1000 mg.", o:"2 ton = 2000 kg, 4 kg 300 g = 4300 g"},
       {b:"Hangi birimi seçelim?", m:"Çok ağır şeyler için ton, günlük eşyalar için kg ve g, çok küçük miktarlar için mg kullanılır.", o:"Kamyon yükü ton, elma kg, ilaç mg ile ölçülür."},
       {b:"Sıvı ölçme", m:"Sıvıları litre (L) ve mililitre (mL) ile ölçeriz. 1 L = 1000 mL. Yarım litre 500 mL, çeyrek litre 250 mL'dir.", o:"5 L 200 mL = 5200 mL"},
       {b:"Toplama ve çıkarma problemleri", m:"Aynı birimde işlem yapılır. Birimler farklıysa önce küçük birime çevrilir. Sonuç gerekiyorsa büyük birimle de yazılır.", o:"3 L − 1 L 250 mL: 3000 − 1250 = 1750 mL = 1 L 750 mL"}
     ],
     ipucu:"Kilo ve mili bağlantısı: 1 ton = 1000 kg, 1 kg = 1000 g, 1 g = 1000 mg, 1 L = 1000 mL. Hep 1000!",
     kartlar:[["1 ton kaç kilogramdır?","1000 kg"],["1 kg kaç gramdır?","1000 g"],["1 g kaç miligramdır?","1000 mg"],["1 L kaç mL'dir?","1000 mL"],["Yarım litre kaç mL'dir?","500 mL"],["Çeyrek kilogram kaç gramdır?","250 g"],["Kamyon yükü için uygun birim","Ton"],["İlaç miktarı için uygun birim","Miligram"]],
     sorular:[
       {s:"2 ton kaç kilogramdır?", c:["2000 kg","200 kg","20 kg","2100 kg"], a:"1 ton = 1000 kg olduğundan 2 × 1000 = 2000 kg."},
       {s:"4 kg 300 g kaç gramdır?", c:["4300 g","430 g","4030 g","43 000 g"], a:"4 kg = 4000 g. 4000 + 300 = 4300 g."},
       {s:"3 000 mg kaç gramdır?", c:["3 g","30 g","300 g","3 000 g"], a:"1 g = 1000 mg olduğundan 3000 ÷ 1000 = 3 g."},
       {s:"5 L 200 mL kaç mililitredir?", c:["5200 mL","520 mL","5020 mL","52 mL"], a:"5 L = 5000 mL. 5000 + 200 = 5200 mL."},
       {s:"Bir yük kamyonunun taşıdığı yükü ölçmek için hangi birim uygundur?", c:["Ton","Gram","Miligram","Mililitre"], a:"Çok ağır yükler ton ile ölçülür."},
       {s:"Zeynep 2 kg 750 g elma ve 1 kg 500 g portakal aldı. Toplam kaç kg kaç g meyve almıştır?", c:["4 kg 250 g","3 kg 250 g","4 kg 25 g","4 kg 350 g"], a:"2750 + 1500 = 4250 g = 4 kg 250 g."},
       {s:"3 litre sütün 1 L 250 mL'si içildi. Kaç litre kaç mililitre süt kaldı?", c:["1 L 750 mL","2 L 250 mL","1 L 250 mL","2 L 750 mL"], a:"3000 − 1250 = 1750 mL = 1 L 750 mL."},
       {s:"Her biri 250 mL olan 6 bardak su toplam kaç litre kaç mL eder?", c:["1 L 500 mL","1 L 250 mL","15 L","2 L 500 mL"], a:"6 × 250 = 1500 mL = 1 L 500 mL."},
       {s:"Hangisi en ağırdır?", c:["3 kg","2 900 g","2 kg 500 g","2 400 g"], a:"3 kg = 3000 g. Diğerleri 2900, 2500 ve 2400 g'dır."},
       {s:"Bir kamyon 3 ton un taşıyor. Her çuvalda 50 kg un varsa kamyon kaç çuval taşır?", c:["60","6","600","150"], a:"3 ton = 3000 kg. 3000 ÷ 50 = 60 çuval."}
     ]
    }
  ]},
  {ad:"Geometri ve Veri", konular:[
    {id:"mat4-aci-olcme", ad:"Açı Ölçme: Derece ve İletki", e:"📐",
     anlat:[
       {b:"Açı nedir?", m:"Başlangıç noktaları aynı olan iki ışının oluşturduğu şekle açı denir. Ortak noktaya köşe, ışınlara kol denir."},
       {b:"Açı çeşitleri", m:"Dik açı 90°dir. 90°den küçük açı dar açı, 90°den büyük 180°den küçük açı geniş açıdır. 180° doğru açıdır."},
       {b:"İletki ile ölçme", m:"İletkinin ortasını açının köşesine, 0 çizgisini bir kola getiririz. Diğer kolun gösterdiği sayıyı okuruz. Açının birimi derecedir (°)."},
       {b:"Saatte açı", m:"Saat tam 3 iken akrep ile yelkovan arasındaki açı 90°, tam 6 iken 180°dir.", o:"Saat 3: dik açı, saat 6: doğru açı"}
     ],
     ipucu:"Dar açı sivri, dik açı köşebent, geniş açı açılmış. Dik açı = 90°!",
     kartlar:[["Dik açının ölçüsü","90°"],["Dar açı","90°'den küçük"],["Geniş açı","90°'den büyük, 180°'den küçük"],["Doğru açı","180°"],["Açıyı ölçen araç","İletki"],["Açının ölçü birimi","Derece"]],
     sorular:[
       {s:"Dik açı kaç derecedir?", c:["90°","45°","180°","60°"], a:"Dik açı 90°dir."},
       {s:"Ölçüsü 35° olan açı hangi açıdır?", c:["Dar açı","Dik açı","Geniş açı","Doğru açı"], a:"35°, 90°den küçüktür. Dar açıdır."},
       {s:"Ölçüsü 120° olan açı hangi açıdır?", c:["Geniş açı","Dar açı","Dik açı","Doğru açı"], a:"120°, 90°den büyük ve 180°den küçüktür. Geniş açıdır."},
       {s:"Açıları ölçmek için hangi araç kullanılır?", c:["İletki","Cetvel","Terazi","Saat"], a:"Açıyı iletkiyle ölçeriz."},
       {s:"Saat tam 3'te akrep ile yelkovan arasındaki açı kaç derecedir?", c:["90°","30°","60°","180°"], a:"Saat 3'te akrep 3'te, yelkovan 12'dedir. Aralarında dik açı vardır."},
       {s:"Hangi açı en büyüktür?", c:["110°","85°","90°","45°"], a:"110°, diğerlerinden büyüktür."},
       {s:"Doğru açı kaç derecedir?", c:["180°","90°","360°","100°"], a:"Doğru açı 180°dir."},
       {s:"Bir dik açı iki açıya ayrılmıştır. Açılardan biri 50° ise diğeri kaç derecedir?", c:["40°","140°","50°","90°"], a:"90° − 50° = 40°."},
       {s:"Saat tam 6'da akrep ile yelkovan arasındaki açı kaç derecedir?", c:["180°","90°","60°","120°"], a:"Saat 6'da yelkovan 12'de, akrep 6'dadır. Doğru açı oluşur: 180°."},
       {s:"Hangi ölçü bir dar açıya aittir?", c:["89°","90°","91°","180°"], a:"Dar açı 90°den küçüktür. 89° dar açıdır."}
     ]
    },
    {id:"mat4-ucgen-cesitleri", ad:"Üçgen Çeşitleri", e:"🔺",
     anlat:[
       {b:"Üçgenin elemanları", m:"Üçgenin 3 kenarı, 3 köşesi ve 3 açısı vardır. Çevresi, üç kenarın uzunlukları toplamıdır."},
       {b:"Kenarlarına göre", m:"Üç kenarı eşit olan üçgen eşkenardır. İki kenarı eşit olan üçgen ikizkenardır. Üç kenarı da farklı olan üçgen çeşitkenardır.", o:"5, 5, 8 cm: ikizkenar"},
       {b:"Açılarına göre", m:"Üç açısı dar olan üçgen dar açılıdır. Bir açısı 90° olan üçgen dik açılıdır. Bir açısı geniş olan üçgen geniş açılıdır."},
       {b:"Çevre hesabı", m:"Üçgenin çevresi kenarların toplamıdır. Eşkenar üçgende çevre 3 × kenardır.", o:"Kenarı 6 cm olan eşkenar üçgenin çevresi 18 cm"}
     ],
     ipucu:"Eşkenar: 3 eşit. İkizkenar: ikiz kenar eşit. Çeşitkenar: üçü de çeşit çeşit!",
     kartlar:[["Üç kenarı eşit üçgen","Eşkenar üçgen"],["İki kenarı eşit üçgen","İkizkenar üçgen"],["Üç kenarı farklı üçgen","Çeşitkenar üçgen"],["Bir açısı 90° olan üçgen","Dik açılı üçgen"],["Bir açısı geniş olan üçgen","Geniş açılı üçgen"],["Üçgenin kaç kenarı vardır?","3 kenar"]],
     sorular:[
       {s:"Üç kenarı da eşit olan üçgene ne denir?", c:["Eşkenar üçgen","İkizkenar üçgen","Çeşitkenar üçgen","Dik üçgen"], a:"Üç kenarı eşit olan üçgen eşkenardır."},
       {s:"Kenar uzunlukları 5 cm, 5 cm ve 8 cm olan üçgen hangisidir?", c:["İkizkenar üçgen","Eşkenar üçgen","Çeşitkenar üçgen","Dik açılı üçgen"], a:"İki kenarı eşit olduğundan ikizkenardır."},
       {s:"Kenar uzunlukları 4 cm, 6 cm ve 7 cm olan üçgen kenarlarına göre hangisidir?", c:["Çeşitkenar üçgen","İkizkenar üçgen","Eşkenar üçgen","Dikdörtgen"], a:"Üç kenarı da farklıdır. Çeşitkenardır."},
       {s:"Bir açısı 90° olan üçgene ne denir?", c:["Dik açılı üçgen","Dar açılı üçgen","Geniş açılı üçgen","Eşkenar üçgen"], a:"Bir açısı dik olan üçgen dik açılıdır."},
       {s:"Bir açısı 110° olan üçgen için hangisi doğrudur?", c:["Geniş açılı üçgendir","Dar açılı üçgendir","Dik açılı üçgendir","Eşkenar üçgendir"], a:"110°, 90°den büyük olduğundan üçgen geniş açılıdır."},
       {s:"Bir kenarı 6 cm olan eşkenar üçgenin çevresi kaç cm'dir?", c:["18","12","36","9"], a:"3 × 6 = 18 cm."},
       {s:"Kenarları 7 cm, 7 cm ve 5 cm olan üçgenin çevresi kaç cm'dir?", c:["19","14","12","35"], a:"7 + 7 + 5 = 19 cm."},
       {s:"Bir ikizkenar üçgenin eşit kenarları 9 cm'dir, çevresi 25 cm'dir. Üçüncü kenarı kaç cm'dir?", c:["7","16","9","34"], a:"9 + 9 = 18 cm. 25 − 18 = 7 cm."},
       {s:"Hangisinin üç açısı da dardır?", c:["Dar açılı üçgen","Dik açılı üçgen","Geniş açılı üçgen","Dörtgen"], a:"Dar açılı üçgenin üç açısı da 90°den küçüktür."},
       {s:"Çevresi 30 cm olan eşkenar üçgenin bir kenarı kaç cm'dir?", c:["10","15","90","6"], a:"Üç kenar eşittir. 30 ÷ 3 = 10 cm."}
     ]
    },
    {id:"mat4-dortgen-simetri", ad:"Kare, Dikdörtgen ve Simetri", e:"🪞",
     anlat:[
       {b:"Kare", m:"Karenin 4 kenarı eşittir ve 4 açısı da diktir (90°).", o:"Çevresi = 4 × kenar"},
       {b:"Dikdörtgen", m:"Dikdörtgenin karşılıklı kenarları eşittir ve 4 açısı da diktir.", o:"Çevresi = 2 × (kısa kenar + uzun kenar)"},
       {b:"Simetri doğrusu", m:"Bir şekli, üst üste çakışan iki eşit parçaya ayıran doğruya simetri doğrusu denir. Şekli bu doğru boyunca katlayınca iki yarısı çakışır."},
       {b:"Simetri doğrusu sayıları", m:"Karenin 4, dikdörtgenin (kare değilse) 2, eşkenar üçgenin 3 simetri doğrusu vardır."}
     ],
     ipucu:"Katla, çakışıyorsa simetri doğrusu! Kare 4, dikdörtgen 2, eşkenar üçgen 3.",
     kartlar:[["Karenin simetri doğrusu sayısı","4"],["Dikdörtgenin simetri doğrusu sayısı","2"],["Eşkenar üçgenin simetri doğrusu sayısı","3"],["Karenin kenarları","4 eşit kenar"],["Dikdörtgenin açıları","4 dik açı"],["Simetri doğrusu şekli nasıl böler?","İki eşit parçaya"]],
     sorular:[
       {s:"Karenin kaç simetri doğrusu vardır?", c:["4","2","1","8"], a:"Kare 4 farklı doğru boyunca katlanabilir."},
       {s:"Kare olmayan bir dikdörtgenin kaç simetri doğrusu vardır?", c:["2","4","1","3"], a:"Dikdörtgen yalnızca iki doğru boyunca katlanınca çakışır."},
       {s:"Eşkenar üçgenin kaç simetri doğrusu vardır?", c:["3","1","2","6"], a:"Eşkenar üçgenin her köşesinden geçen 3 simetri doğrusu vardır."},
       {s:"Kare için hangisi doğrudur?", c:["4 kenarı eşit ve 4 açısı diktir","Yalnızca karşılıklı kenarları eşittir","Açıları dar açıdır","3 kenarı vardır"], a:"Karenin 4 kenarı eşit, 4 açısı dik açıdır."},
       {s:"Dikdörtgen için hangisi doğrudur?", c:["Karşılıklı kenarları eşit, 4 açısı diktir","Dört kenarı da farklıdır","Açıları geniş açıdır","Üç köşesi vardır"], a:"Dikdörtgenin karşılıklı kenarları eşit, tüm açıları dik açıdır."},
       {s:"Kenarları 8 cm ve 3 cm olan dikdörtgenin çevresi kaç cm'dir?", c:["22","11","24","16"], a:"2 × (8 + 3) = 22 cm."},
       {s:"Hangi harfin simetri doğrusu yoktur?", c:["F","A","H","O"], a:"A'nın 1, H ve O'nun 2 simetri doğrusu vardır. F'nin yoktur."},
       {s:"Bir karenin çevresi 28 cm ise bir kenarı kaç cm'dir?", c:["7","14","4","24"], a:"28 ÷ 4 = 7 cm."},
       {s:"Bir şekil simetri doğrusu boyunca katlanırsa iki parça nasıl olur?", c:["Tam olarak çakışır","Biri daha büyük kalır","Çakışmaz","Biri eksik kalır"], a:"Simetri doğrusu boyunca katlanınca iki yarı çakışır."},
       {s:"Kenarı 5 cm olan karenin alanı ve çevresi sırasıyla nedir?", c:["25 cm², 20 cm","20 cm², 25 cm","10 cm², 20 cm","25 cm², 10 cm"], a:"Alan 5 × 5 = 25 cm². Çevre 4 × 5 = 20 cm."}
     ]
    },
    {id:"mat4-aci-geometri", ad:"Açılar, Üçgen, Dörtgen, Simetri", e:"📐",
     anlat:[
       {b:"Açı ve ölçüsü", m:"Açı iki ışının ortak başlangıç noktasıyla oluşur. Açılar iletkiyle derece (°) cinsinden ölçülür. Dik açı 90°, dar açı 90°'den küçük, geniş açı 90°'den büyük ve 180°'den küçüktür.", o:"35° dar açı, 90° dik açı, 120° geniş açıdır."},
       {b:"İletki ile ölçme", m:"İletkinin merkezi açının köşesine, 0 çizgisi açının bir kenarına getirilir. Diğer kenarın gösterdiği sayı açının ölçüsüdür.", o:"Saat 3.00'te akrep ile yelkovan arasındaki açı 90°'dir."},
       {b:"Üçgenler", m:"Kenarlarına göre: eşkenar üçgenin 3 kenarı eşit, ikizkenar üçgenin 2 kenarı eşit, çeşitkenar üçgenin kenarları farklıdır. Açılarına göre: dik açılı, dar açılı, geniş açılı olabilir.", o:"5 cm, 5 cm, 8 cm kenarlı üçgen ikizkenardır."},
       {b:"Kare, dikdörtgen ve simetri", m:"Karenin 4 kenarı eşit, 4 açısı diktir. Dikdörtgenin karşılıklı kenarları eşit, 4 açısı diktir. Simetri doğrusu şekli iki eş parçaya ayırır: karenin 4, dikdörtgenin 2, eşkenar üçgenin 3 simetri doğrusu vardır.", o:"Kare kâğıdı köşegenlerinden ve orta çizgilerinden katlarsan yarılar çakışır."}
     ],
     ipucu:"Dar açı 'dar' → 90°'den küçük; geniş açı 'geniş' → 90°'den büyük; dik açı tam 90°, köşe gibi.",
     kartlar:[["Dik açı kaç derecedir?","90°"],["Dar açı kaç dereceden küçüktür?","90°'den küçük"],["Geniş açı","90°'den büyük, 180°'den küçük"],["Açı ölçmeye yarayan araç","İletki"],["3 kenarı da eşit olan üçgen","Eşkenar üçgen"],["2 kenarı eşit olan üçgen","İkizkenar üçgen"],["Karenin simetri doğrusu sayısı","4"],["Dikdörtgenin simetri doğrusu sayısı","2"]],
     sorular:[
       {s:"Dik açı kaç derecedir?", c:["90°","180°","45°","60°"], a:"Dik açının ölçüsü 90°'dir."},
       {s:"Açı ölçmek için hangi araç kullanılır?", c:["İletki","Cetvel","Pergel","Takvim"], a:"Açıları derece cinsinden iletki ile ölçeriz."},
       {s:"Ölçüsü 35° olan açı hangi açıdır?", c:["Dar açı","Dik açı","Geniş açı","Düz açı"], a:"35°, 90°'den küçük olduğu için dar açıdır."},
       {s:"Ölçüsü 120° olan açı hangi açıdır?", c:["Geniş açı","Dar açı","Dik açı","Tam açı"], a:"120°, 90°'den büyük ve 180°'den küçük olduğu için geniş açıdır."},
       {s:"Üç kenarının uzunluğu da eşit olan üçgen hangisidir?", c:["Eşkenar üçgen","Çeşitkenar üçgen","Dik üçgen","Geniş açılı üçgen"], a:"Üç kenarı da eşit olan üçgene eşkenar üçgen denir."},
       {s:"Kenar uzunlukları 5 cm, 5 cm ve 8 cm olan üçgen hangisidir?", c:["İkizkenar üçgen","Eşkenar üçgen","Çeşitkenar üçgen","Dikdörtgen"], a:"Tam olarak iki kenarı eşit olduğu için ikizkenar üçgendir."},
       {s:"Dört kenarı da eşit ve dört açısı da dik olan şekil hangisidir?", c:["Kare","Üçgen","Yamuk","Daire"], a:"Dört kenarı eşit ve dört açısı dik olan şekil karedir."},
       {s:"Kenar uzunlukları 7 cm ve 3 cm olan, dört açısı da dik olan dörtgen hangisidir?", c:["Dikdörtgen","Kare","Eşkenar üçgen","Daire"], a:"Karşılıklı kenarları eşit ve 4 açısı dik olan, komşu kenarları farklı şekil dikdörtgendir."},
       {s:"Karenin kaç simetri doğrusu vardır?", c:["4","2","1","8"], a:"Kare iki köşegeni ve iki orta çizgisi boyunca katlanır: 4 simetri doğrusu."},
       {s:"Saat 3.00'te akrep ile yelkovan arasındaki açı kaç derecedir?", c:["90°","60°","180°","30°"], a:"Saat 3.00'te yelkovan 12'de, akrep 3'tedir. Aralarında dik açı, yani 90° vardır."}
     ]
    },
    {id:"mat4-veri-grafik", ad:"Veri ve Sütun Grafiği", e:"📊",
     anlat:[
       {b:"Veri toplama ve düzenleme", m:"Bilgi toplamak için sayma, anket ve çetele kullanılır. Toplanan veriler tabloda satır ve sütunlarla düzenlenir.", o:"Çetelede her 5. çizgi dört çizgiyi çaprazlar: 4 grup ve 3 çizgi = 23"},
       {b:"Sütun grafiğini okuma", m:"Önce grafiğin başlığına ve ölçeğine bak. Sütunun üst ucunun hizalandığı sayı verinin değerini gösterir. En uzun sütun en büyük, en kısa sütun en küçük değerdir.", o:"Ölçek 1 birim = 10 kişi, sütun 7 birim ise 70 kişi."},
       {b:"Verileri yorumlama", m:"Toplam bulmak için verileri toplar, fark bulmak için çıkarırız. Hangisi en çok, hangisi en az olduğunu söyleyebiliriz.", o:"Futbol 14, yüzme 6: fark 14 − 6 = 8"},
       {b:"Sütun grafiği çizme", m:"Önce uygun bir ölçek seçilir. Her veri için ölçeğe göre sütun çizilir; grafiğe başlık yazılır ve eksenler adlandırılır.", o:"Veriler 20, 40, 60 ise ölçek 1 birim = 20 seçilebilir."}
     ],
     ipucu:"Önce başlığa, sonra ölçeğe bak; sütunun tepesi hangi sayıya gelirse veri odur.",
     kartlar:[["Sütun grafiğinde en uzun sütun","En büyük değer"],["Sütun grafiğinde en kısa sütun","En küçük değer"],["Ölçek nedir?","Her aralığın temsil ettiği sayı"],["Grafiğin adı","Başlık"],["Verileri sayıp işaretleme","Çetele"],["Satır ve sütunlu veri düzeni","Tablo"],["Ölçek 5 ise 6 birimlik sütun","30"],["İki sütun farkı için işlem","Çıkarma"]],
     sorular:[
       {s:"Bir sütun grafiğinde ölçek 1 birim = 10 kişidir. Bir sütun 7 birim yüksekliğindedir. Bu sütun kaç kişiyi gösterir?", c:["70","17","7","700"], a:"7 × 10 = 70 kişi."},
       {s:"Bir kitaplıkta pazartesi 120, salı 150, çarşamba 90 kitap ödünç alındı. En az kitap hangi gün ödünç alınmıştır?", c:["Çarşamba","Pazartesi","Salı","Pazartesi ve salı"], a:"En küçük sayı 90'dır; çarşamba günü en az kitap alınmıştır."},
       {s:"Aynı veriye göre salı ile çarşamba arasındaki fark kaçtır?", c:["60","240","30","90"], a:"150 − 90 = 60."},
       {s:"Aynı veriye göre üç günde ödünç alınan toplam kitap sayısı kaçtır?", c:["360","330","390","340"], a:"120 + 150 + 90 = 360."},
       {s:"Ölçek 1 birim = 5 olan bir sütun grafiğinde bir sütun 9 birim yüksekliğindedir. Sütun kaçı gösterir?", c:["45","14","9","95"], a:"9 × 5 = 45."},
       {s:"Tabloya göre okulda futbol 14, basketbol 9, voleybol 11, yüzme 6 öğrenci tarafından seçildi. En çok tercih edilen spor hangisidir?", c:["Futbol","Basketbol","Voleybol","Yüzme"], a:"En büyük sayı 14'tür; futbol en çok tercih edilendir."},
       {s:"Aynı tabloya göre toplam kaç öğrenci spor seçmiştir?", c:["40","30","41","44"], a:"14 + 9 + 11 + 6 = 40."},
       {s:"Aynı tabloya göre futbolu seçenler yüzmeyi seçenlerden kaç fazladır?", c:["8","20","5","6"], a:"14 − 6 = 8."},
       {s:"Bir çetelede 4 beşli grup ve yanında 3 tek çizgi vardır. Kaç veri vardır?", c:["23","43","7","20"], a:"4 × 5 = 20, 20 + 3 = 23."},
       {s:"Ölçeği 1 kare = 20 olan bir sütun grafiğinde A sütunu 8 kare, B sütunu 5 kare yüksekliğindedir. A ile B'nin toplamı kaçtır?", c:["260","13","160","100"], a:"A = 8 × 20 = 160, B = 5 × 20 = 100. Toplam 260."}
     ]
    }
  ]}
]});
