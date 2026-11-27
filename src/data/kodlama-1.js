HW.add({ders:"kodlama", sinif:1, uniteler:[
  {ad:"Bilişim ve Kodlama", konular:[
    {id:"kod1-bilgisayar", ad:"Bilgisayarı Tanıyalım", e:"💻",
     anlat:[
       {b:"Bilgisayarın parçaları", m:"Bilgisayarın parçalarına donanım denir. Ekran, klavye, fare ve kasa donanımdır. Hepsi birlikte çalışır."},
       {b:"Girdi ve çıktı", m:"Klavye ve fare bilgisayara bilgi verir. Ekran, hoparlör ve yazıcı bilgisayardan bilgi alır."},
       {b:"Kasa ve beyin", m:"Kasanın içinde bilgisayarın beyni olan işlemci vardır. İşlemci bütün işleri yapar."},
       {b:"Dikkatli kullanım", m:"Bilgisayara nazik davranırız. Elimiz temiz olur. Kapatırken kapat düğmesini kullanırız."}
     ],
     ipucu:"Klavye yazar, fare gezdirir, ekran gösterir, hoparlör konuşur!",
     kartlar:[["Bilgisayar ekranı","Monitör"],["Harf yazmak için","Klavye"],["İşaretçiyi gezdiren","Fare"],["Sesi çıkaran parça","Hoparlör"],["Kâğıda yazdıran parça","Yazıcı"],["Bilgisayarın beyni","İşlemci"]],
     sorular:[
       {s:"Bilgisayarın ekranına ne denir?", c:["Monitör","Klavye","Fare"], a:"Ekrana monitör denir."},
       {s:"Harf ve sayı yazmak için hangisini kullanırız?", c:["Klavye","Fare","Yazıcı"], a:"Yazı yazmak için klavye kullanılır."},
       {s:"Ekrandaki oku hareket ettirmek için hangisini kullanırız?", c:["Fare","Hoparlör","Yazıcı"], a:"Fare ekrandaki oku hareket ettirir."},
       {s:"Müzik dinlemek için hangi parça gerekir?", c:["Hoparlör","Yazıcı","Klavye"], a:"Hoparlör ses çıkarır."},
       {s:"Hangisi kâğıda çıktı verir?", c:["Yazıcı","Monitör","Fare"], a:"Yazıcı çıktıyı kâğıda basar."},
       {s:"Bilgisayarın beyni hangisidir?", c:["İşlemci","Fare","Hoparlör"], a:"İşlemci bilgisayarın beynidir."},
       {s:"Hangisi bilgisayarın bir parçası değildir?", c:["Kaşık","Klavye","Fare"], a:"Kaşık bilgisayar parçası değildir."},
       {s:"Bilgisayarı doğru kapatmak için ne yaparız?", c:["Kapat düğmesini kullanırız","Fişi çekeriz","Ekrana vururuz"], a:"Bilgisayar kapat komutuyla kapatılır."}
     ]},
    {id:"kod1-algoritma", ad:"Algoritma Nedir?", e:"🧩",
     anlat:[
       {b:"Algoritma", m:"Bir işi yapmak için adım adım yazılan yönergeye algoritma denir. Her gün algoritma kullanırız."},
       {b:"Sıra önemli", m:"Adımlar doğru sırayla yapılır. Önce çorabı giyer, sonra ayakkabıyı giyeriz.", o:"1. çorap 2. ayakkabı"},
       {b:"Okların dili", m:"Robotlara oklarla yön söyleriz. ⬆️ yukarı, ⬇️ aşağı, ⬅️ sola, ➡️ sağa bir kare gider.", o:"➡️➡️ iki kare sağa"},
       {b:"Yanlış sıra", m:"Adımların sırası yanlış olursa iş yanlış çıkar. Önce doğru sırayı düşünürüz."}
     ],
     ipucu:"Algoritma = adım adım yönerge. Önce düşün, sonra sırala!",
     kartlar:[["Adım adım yönergeye","Algoritma"],["Adımlar hangi sırayla?","Doğru sırayla"],["⬆️","Bir kare yukarı"],["⬇️","Bir kare aşağı"],["⬅️","Bir kare sola"],["➡️","Bir kare sağa"]],
     sorular:[
       {s:"Bir işi yapmak için adım adım yazılan yönergeye ne denir?", c:["Algoritma","Klavye","Monitör"], a:"Adım adım yönergeye algoritma denir."},
       {s:"Reçelli ekmek için: 1) Ekmeği al 2) Reçel sür 3) ? Son adım nedir?", c:["Ye","Ekmeği at","Ekmeği al"], a:"Reçel sürdükten sonra ekmek yenir."},
       {s:"Algoritmada adımların sırası önemli midir?", c:["Evet","Hayır","Bazen"], a:"Adımlar doğru sırayla yapılmalıdır."},
       {s:"Hangisini ayakkabıdan önce giyeriz?", c:["Çorabı","Montu","Şapkayı"], a:"Önce çorap, sonra ayakkabı giyilir."},
       {s:"1) Kapıyı aç 2) İçeri gir 3) Kapıyı kapat. İkinci adım nedir?", c:["İçeri gir","Kapıyı kapat","Kapıyı aç"], a:"İkinci adım içeri girmektir."},
       {s:"➡️➡️ komutunu alan robot ne yapar?", c:["İki kare sağa gider","Bir kare sola gider","İki kare yukarı gider"], a:"➡️ bir kare sağa gitmektir; iki kez yazılmış."},
       {s:"⬇️⬇️ komutunu alan robot ne yapar?", c:["İki kare aşağı gider","İki kare yukarı gider","İki kare sağa gider"], a:"⬇️ aşağı bir kare demektir."},
       {s:"Bir algoritmanın adımları yanlış sıralanırsa ne olur?", c:["İş yanlış yapılır","İş hep doğru olur","Hiçbir şey olmaz"], a:"Sıra bozulursa sonuç da bozulur."}
     ]},
    {id:"kod1-guvenli-teknoloji", ad:"Güvenli ve Dengeli Teknoloji", e:"🛡️",
     anlat:[
       {b:"Süreyi ayarla", m:"Ekrana uzun süre bakmak gözlerimizi yorar. Kısa süre kullanırız. Sonra ara veririz."},
       {b:"Dengeli kullan", m:"Oyun oynamak, kitap okumak ve dışarıda koşmak birlikte olmalı. Teknoloji hayatımızın yalnız küçük bir parçasıdır."},
       {b:"Büyüğüne sor", m:"Yeni bir oyun indirirken ya da internete girerken anne babana veya öğretmenine sorarız. Yalnız başına karar vermeyiz."},
       {b:"Bilgini sakla", m:"Adresimizi, telefon numaramızı ve şifremizi kimseye söylemeyiz. Tanımadığımız biri yazarsa cevap vermeyiz, büyüğümüze söyleriz."}
     ],
     ipucu:"Kısa bak, ara ver! Şifre sır, adres sır, önce büyüğüne sor!",
     kartlar:[["Ekrana uzun bakınca","Göz dinlendirilir"],["Yeni uygulama indirirken","Büyüğe sorulur"],["Şifremiz","Sırdır, paylaşılmaz"],["Tanımadığımız biri yazarsa","Büyüğe söyleriz"],["Dengeli kullanım","Oyun, kitap, spor"],["Adresimizi yabancıya","Söylemeyiz"]],
     sorular:[
       {s:"Ekrana uzun süre baktıktan sonra ne yapmalıyız?", c:["Gözlerimizi dinlendirmeliyiz","Daha da yakından bakmalıyız","Hiç ara vermemeliyiz"], a:"Ara verip uzağa bakmak gözleri dinlendirir."},
       {s:"Yeni bir oyun indirmeden önce kime sorarız?", c:["Anne babamıza","Yabancıya","Hiç kimseye"], a:"Bir yetişkine sormak güvenlidir."},
       {s:"Şifreni arkadaşına söylemelisin mi?", c:["Hayır","Evet","Her zaman"], a:"Şifre sırdır, paylaşılmaz."},
       {s:"Tanımadığın biri internette sana yazarsa ne yaparsın?", c:["Cevap vermem, büyüğüme söylerim","Adresimi veririm","Telefon numaramı veririm"], a:"Tanımadığımızla konuşmayız, büyüğümüze söyleriz."},
       {s:"Hangisi dengeli teknoloji kullanımıdır?", c:["Biraz oyun, kitap ve spor","Bütün gün oyun","Hiç uyumamak"], a:"Dengeli kullanım birçok etkinliği içerir."},
       {s:"Telefon numaranı tanımadığın birine verir misin?", c:["Hayır","Evet","Yalnızca yarın"], a:"Kişisel bilgiler tanımadıklarla paylaşılmaz."},
       {s:"Tablet kullanırken nasıl otururuz?", c:["Dik ve ekrana çok yaklaşmadan","Yatarak ve çok yakından","Ayakta zıplayarak"], a:"Dik oturmak ve uzak durmak sağlıklıdır."},
       {s:"Ekran süresi dolunca ne yapmak doğrudur?", c:["Bırakıp başka etkinliğe geçmek","Daha çok oynamak","Gizlice devam etmek"], a:"Süreye uymak sağlıklı alışkanlıktır."}
     ]}
  ]}
]});
