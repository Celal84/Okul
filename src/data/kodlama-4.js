HW.add({ders:"kodlama", sinif:4, uniteler:[
  {ad:"Bilişim ve Kodlama", konular:[
    {id:"kod4-degisken-operator", ad:"Değişkenler ve Operatörler", e:"📦",
     anlat:[
       {b:"Değişken nedir?", m:"Değişken, içinde bilgi saklanan ve adı olan bir kutudur. İçindeki değer program çalışırken değişebilir. Oyundaki puan, can ve süre birer değişkendir.", o:"puan = 0"},
       {b:"Değer atama ve güncelleme", m:"'puan = 5' değişkene 5 değerini koyar. 'puan = puan + 1' eski değere 1 ekleyip yeniden saklar. Kutuya yeni değer girince eskisi silinir."},
       {b:"Aritmetik operatörler", m:"Operatörler işlem yaptıran işaretlerdir. Toplama (+), çıkarma (-), çarpma (*) ve bölme (/) aritmetik operatörlerdir.", o:"3 * 4 = 12"},
       {b:"Karşılaştırma operatörleri", m:"Büyüktür (>), küçüktür (<) ve eşittir (=) iki değeri karşılaştırır. Sonuç ya doğru ya yanlıştır. Koşullar bu sonuca göre çalışır."},
       {b:"Mantık operatörleri", m:"'ve' iki koşul da doğruysa doğru verir. 'veya' en az biri doğruysa doğru verir. 'değil' sonucu tersine çevirir."}
     ],
     ipucu:"Değişken = etiketli kutu. VE: ikisi de doğru olmalı; VEYA: biri yeter!",
     kartlar:[["Bilgi saklayan adlı kutu","Değişken"],["* işareti","Çarpma"],["/ işareti","Bölme"],["puan = 5, puan = puan + 1","puan 6 olur"],["'ve' ne zaman doğru?","İki koşul da doğruysa"],["'veya' ne zaman doğru?","En az biri doğruysa"],["'değil' ne yapar?","Sonucu ters çevirir"]],
     sorular:[
       {s:"İçinde bilgi saklanan ve değeri değişebilen adlı kutuya ne denir?", c:["Değişken","Döngü","Kukla","Sahne"], a:"Değişken, bilgiyi adıyla saklar."},
       {s:"Kodlamada * işareti hangi işlemi yapar?", c:["Çarpma","Toplama","Bölme","Çıkarma"], a:"* çarpma operatörüdür."},
       {s:"puan = 5 yazıldı, sonra puan = puan + 1 çalıştı. puan kaç olur?", c:["6","5","1","51"], a:"Eski değer 5'e 1 eklenir: 6."},
       {s:"Hangisi bir karşılaştırma operatörüdür?", c:[">","+","*","/"], a:"> iki değeri karşılaştırır; diğerleri aritmetiktir."},
       {s:"can = 10 yazıldı, sonra can = can - 3 çalıştı. can kaç olur?", c:["7","13","10","3"], a:"10 - 3 = 7."},
       {s:"(5 > 3) ve (2 > 8) ifadesinin sonucu nedir?", c:["Yanlış","Doğru","5","8"], a:"'ve' için iki koşul da doğru olmalı; 2 > 8 yanlıştır."},
       {s:"(5 > 3) veya (2 > 8) ifadesinin sonucu nedir?", c:["Doğru","Yanlış","3","2"], a:"'veya' için bir koşulun doğru olması yeter; 5 > 3 doğrudur."},
       {s:"a = 2, b = a * 5, c = b - 4 komutları sırayla çalışıyor. c kaç olur?", c:["6","10","3","14"], a:"b = 2 * 5 = 10, c = 10 - 4 = 6."}
     ]},
    {id:"kod4-olay-fonksiyon", ad:"Olaylar ve Fonksiyon Mantığı", e:"⚡",
     anlat:[
       {b:"Olay nedir?", m:"Olay, programın tepki verdiği bir durumdur. Fareyle tıklamak, bir tuşa basmak, yeşil bayrağa basmak birer olaydır. Olay gerçekleşince ona bağlı kod çalışır.", o:"Boşluk tuşuna basılınca zıpla."},
       {b:"Olaya bağlı kod", m:"Her olayın altına farklı kod yazılabilir. Sağ ok tuşu kuklayı sağa, sol ok tuşu sola götürebilir. Böylece program kullanıcıyla etkileşir."},
       {b:"Fonksiyon nedir?", m:"Fonksiyon, bir işi yapan komutlara ad verip paketlemektir. Fonksiyonu adıyla çağırınca içindeki komutlar çalışır. Aynı kodu tekrar tekrar yazmak gerekmez.", o:"ZIPLA = ⬆️⬇️"},
       {b:"Parametre", m:"Fonksiyona dışarıdan verilen bilgiye parametre denir. 'kare çiz(50)' fonksiyonunda 50, kenar uzunluğunu bildiren parametredir."}
     ],
     ipucu:"Olay = 'şu olunca', fonksiyon = 'adını söyle, işi yapsın'. Bir kez yaz, çok kez çağır!",
     kartlar:[["Programın tepki verdiği durum","Olay"],["Olay örneği","Tuşa basmak"],["Ad verilmiş komut paketi","Fonksiyon"],["Fonksiyonu çalıştırmak","Çağırmak"],["Fonksiyona verilen bilgi","Parametre"],["Fonksiyonun yararı","Kod tekrarını önler"]],
     sorular:[
       {s:"Hangisi bir olaydır?", c:["Fareyle tıklamak","puan değişkeni","Çarpma işareti","Bir klasör"], a:"Tıklama, programın tepki verdiği bir olaydır."},
       {s:"Ad verilmiş ve istenince çağrılan komut paketine ne denir?", c:["Fonksiyon","Olay","Değişken","Sahne"], a:"Fonksiyon, adıyla çağrılan komut grubudur."},
       {s:"Fonksiyonu çağırmak ne demektir?", c:["Adını yazarak içindeki komutları çalıştırmak","Fonksiyonu silmek","Adını değiştirmek","Ekranı kapatmak"], a:"Çağrılan fonksiyonun komutları çalışır."},
       {s:"Fonksiyon kullanmanın yararı hangisidir?", c:["Aynı kodu tekrar yazmak gerekmez","Bilgisayar hızlı açılır","İnternet hızlanır","Şifre güçlenir"], a:"Kod bir kez yazılır, çok kez çağrılır."},
       {s:"'kare çiz(50)' çağrısındaki 50 nedir?", c:["Parametre","Olay","Döngü","Koşul"], a:"Fonksiyona dışarıdan verilen bilgi parametredir."},
       {s:"'Boşluk tuşuna basılınca kedi zıplasın' kodunda olay hangisidir?", c:["Boşluk tuşuna basılması","Kedinin zıplaması","Kedinin kendisi","Sahnenin rengi"], a:"Tuşa basmak olaydır; zıplama ona verilen tepkidir."},
       {s:"ZIPLA fonksiyonu ⬆️⬇️ komutlarından oluşuyor. ZIPLA 3 kez çağrılırsa toplam kaç ok komutu çalışır?", c:["6","3","2","5"], a:"Her çağrıda 2 komut çalışır: 3 x 2 = 6."},
       {s:"ADIM fonksiyonu ➡️➡️⬆️ komutlarından oluşuyor. ADIM 2 kez çağrılırsa robot başlangıca göre nerede olur?", c:["4 sağda, 2 yukarıda","2 sağda, 1 yukarıda","2 sağda, 4 yukarıda","6 sağda"], a:"Her çağrıda 2 sağ ve 1 yukarı; iki çağrıda 4 sağ, 2 yukarı."}
     ]},
    {id:"kod4-dijital-vatandaslik", ad:"Dijital Vatandaşlık ve Yapay Zekâ", e:"🌐",
     anlat:[
       {b:"Dijital vatandaş", m:"Dijital vatandaş, interneti güvenli, saygılı ve sorumlu kullanan kişidir. Yüz yüze söylemeyeceğimiz sözü internette de yazmayız."},
       {b:"Siber zorbalık", m:"İnternette birini bilerek üzmek, alay etmek, tehdit etmek ya da dışlamak siber zorbalıktır. Karşılaşırsan cevap verme, ekran görüntüsü al, kişiyi engelle ve bir yetişkine söyle."},
       {b:"Telif hakkı", m:"Bir yazı, resim, müzik ya da oyun onu üretene aittir; buna telif hakkı denir. Başkasının eserini izinsiz kopyalayıp kendi eserimiz gibi göstermeyiz, kaynağını belirtiriz."},
       {b:"Güvenilir kaynak", m:"İnternetteki her bilgi doğru değildir. Yazanı belli, güncel ve başka kaynaklarla uyuşan bilgi daha güvenilirdir. Resmî kurum ve okul siteleri iyi başlangıçtır."},
       {b:"Yapay zekâ", m:"Yapay zekâ, çok sayıda örnekten öğrenerek tahmin yapan bilgisayar sistemleridir. Sesli asistanlar ve çeviri uygulamaları örnektir. Yapay zekâ da hata yapabilir; verdiği bilgi doğrulanmalıdır."}
     ],
     ipucu:"Siber zorbalıkta 4 adım: Cevap verme - Kaydet - Engelle - Büyüğüne söyle!",
     kartlar:[["İnterneti sorumlu kullanan kişi","Dijital vatandaş"],["İnternette birini bilerek üzmek","Siber zorbalık"],["Eser sahibinin hakkı","Telif hakkı"],["Başkasının bilgisini kullanınca","Kaynak belirtilir"],["Örneklerden öğrenen sistem","Yapay zekâ"],["Yapay zekânın cevabı","Doğrulanmalıdır"],["Zorbalık kanıtı için","Ekran görüntüsü alınır"]],
     sorular:[
       {s:"İnternette birini bilerek üzmeye, tehdit etmeye ya da alay etmeye ne denir?", c:["Siber zorbalık","Telif hakkı","Hata ayıklama","Yapay zekâ"], a:"Dijital ortamda yapılan zorbalık siber zorbalıktır."},
       {s:"Siber zorbalığa uğrayan biri ne yapmalıdır?", c:["Kanıtı saklayıp bir yetişkine söylemeli","Aynı şekilde karşılık vermeli","Kimseye söylememeli","Şifresini zorbaya vermeli"], a:"Karşılık verilmez; kanıt saklanır, engellenir, yetişkine söylenir."},
       {s:"Bir eserin onu üreten kişiye ait olmasına ne denir?", c:["Telif hakkı","Parametre","Siber zorbalık","Döngü"], a:"Eser sahibinin hakkına telif hakkı denir."},
       {s:"Ödevinde internetten bulduğun bir bilgiyi kullanırken ne yapmalısın?", c:["Kendi cümlelerimle yazıp kaynağını belirtmeliyim","Aynen kopyalayıp kendi yazım gibi sunmalıyım","Yazarın adını silmeliyim","Kaynağı gizlemeliyim"], a:"Başkasının emeği kaynak gösterilerek kullanılır."},
       {s:"Hangisi bir bilginin güvenilir olduğunu düşündürür?", c:["Yazanın belli olması ve başka kaynaklarla uyuşması","Çok renkli olması","Çok paylaşılmış olması","Büyük harflerle yazılması"], a:"Kaynağı belli ve doğrulanabilen bilgi daha güvenilirdir."},
       {s:"Yapay zekâ nasıl öğrenir?", c:["Çok sayıda örneği inceleyerek","Uyuyarak","Yemek yiyerek","Kendi kendine hiç veri olmadan"], a:"Yapay zekâ çok sayıda örnek veriden öğrenir."},
       {s:"Yapay zekânın verdiği bir bilgi için hangisi doğrudur?", c:["Yanlış olabilir, başka kaynaktan doğrulanmalı","Her zaman kesin doğrudur","Hiçbir zaman doğru değildir","Yalnız geceleri doğrudur"], a:"Yapay zekâ hata yapabilir; bilgi doğrulanmalıdır."},
       {s:"Sınıf grubunda bir arkadaşınla alay eden bir fotoğraf paylaşıldı. Sorumlu bir dijital vatandaş ne yapar?", c:["Paylaşmaz, arkadaşına destek olur ve öğretmenine söyler","Fotoğrafı başka gruplara gönderir","Gülen yüz yollar","Görmezden gelip daha çok yayar"], a:"Zorbalığı yaymamak ve yetişkine bildirmek doğru davranıştır."}
     ]}
  ]}
]});
