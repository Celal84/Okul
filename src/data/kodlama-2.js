HW.add({ders:"kodlama", sinif:2, uniteler:[
  {ad:"Bilişim ve Kodlama", konular:[
    {id:"kod2-ok-yonergeleri", ad:"Ok Yönergeleriyle Kodlama", e:"🧭",
     anlat:[
       {b:"Ok komutları", m:"Harita üzerinde robota ok komutlarıyla yol tarif ederiz. ⬆️ bir kare yukarı, ⬇️ bir kare aşağı, ⬅️ bir kare sola, ➡️ bir kare sağa gider.", o:"➡️➡️⬆️: iki sağ, bir yukarı"},
       {b:"Yolu planla", m:"Önce başlangıç ve hedef karesine bakarız. Sonra gerekli adımları sayarız. Komutları sırayla yazarız."},
       {b:"İleri, sağa dön, sola dön", m:"Bazen robota 'ileri', 'sağa dön', 'sola dön' deriz. Robot hangi yöne bakıyorsa ona göre gider. Dön komutu yalnız yönünü değiştirir, ilerletmez."},
       {b:"Kontrol et", m:"Komutları yazdıktan sonra elimizle yolu izleyip hedefe vardığını kontrol ederiz."}
     ],
     ipucu:"Okun yönü = robotun yönü. Önce say, sonra yaz, sonra kontrol et!",
     kartlar:[["⬆️ komutu","Bir kare yukarı"],["⬇️ komutu","Bir kare aşağı"],["⬅️ komutu","Bir kare sola"],["➡️ komutu","Bir kare sağa"],["Sağa dön komutu","Yönü değiştirir"],["Yol bulmada ilk adım","Başlangıç ve hedefe bak"],["Kodu yazınca","Kontrol et"]],
     sorular:[
       {s:"⬆️ komutu robota ne yaptırır?", c:["Bir kare yukarı gider","Bir kare aşağı gider","Bir kare sağa gider","Bir kare sola gider"], a:"⬆️ yukarı bir kare demektir."},
       {s:"➡️➡️ komutu robotu nasıl hareket ettirir?", c:["İki kare sağa","İki kare sola","İki kare yukarı","Bir kare sağa"], a:"İki kez ➡️ iki kare sağ demektir."},
       {s:"Robot bir kareden başlıyor ve ➡️➡️⬆️ komutlarını uyguluyor. Nerede olur?", c:["Başladığı yerin iki sağında, bir yukarısında","İki yukarısında","Bir sağında","İki solunda"], a:"İki kez sağa, bir kez yukarı."},
       {s:"⬅️ komutunun tersi hangisidir?", c:["➡️","⬆️","⬇️","⬅️"], a:"Sol'un tersi sağdır."},
       {s:"Robot hedefe iki kare sağa gidip bir kare yukarı çıkmalı. Doğru komut hangisidir?", c:["➡️➡️⬆️","➡️⬆️⬆️","⬆️⬆️➡️","⬅️⬅️⬆️"], a:"İki ➡️ ve bir ⬆️ gerekir."},
       {s:"Robot yukarı bakıyor. 'İleri, sağa dön, ileri' komutlarını yaparsa ne olur?", c:["Bir kare yukarı, sonra bir kare sağa gider","İki kare yukarı gider","Bir kare sola gider","Yerinde kalır"], a:"İleri yukarı; sağa dönünce sağa bakar; sonra ileri sağa gider."},
       {s:"Robot yukarı bakıyor. 'Sola dön' komutundan sonra hangi yöne bakar?", c:["Sola","Sağa","Aşağı","Yukarı"], a:"Sola dönünce sola bakar."},
       {s:"Robot ⬆️⬆️➡️⬇️ komutlarını uyguluyor. Başladığı yere göre neredir?", c:["Bir yukarı, bir sağda","İki yukarı, bir sağda","Başladığı yerde","Bir aşağı, bir sağda"], a:"2 yukarı - 1 aşağı = 1 yukarı; 1 sağ."}
     ]},
    {id:"kod2-dongu", ad:"Döngü: Tekrar Eden Komutlar", e:"🔁",
     anlat:[
       {b:"Döngü nedir?", m:"Aynı komutları tekrar tekrar yazmak yerine döngü kullanırız. Döngü, komutları belirli sayıda tekrar eder.", o:"3 kez tekrarla: ➡️"},
       {b:"Kısa yazarız", m:"Döngü kodu kısaltır. ➡️➡️➡️➡️➡️ yazmak yerine '5 kez tekrarla ➡️' yazarız."},
       {b:"Döngüde dizi", m:"Birkaç komut birlikte tekrar edilebilir. 2 kez tekrarla (➡️⬆️) demek ➡️⬆️➡️⬆️ demektir. Merdiven gibi yol çıkar."},
       {b:"Hayatta döngü", m:"Günler, mevsimler ve kalp atışları tekrar eder. Bunlar döngüye benzer."}
     ],
     ipucu:"Tekrar yazma, tekrarla! Döngü = kısa kod.",
     kartlar:[["Komutları tekrar etmek","Döngü"],["3 kez tekrarla ➡️","➡️➡️➡️"],["Döngünün faydası","Kodu kısaltır"],["2 kez tekrarla (➡️⬆️)","➡️⬆️➡️⬆️"],["Günlerin tekrarı","Döngüye örnek"],["Merdiven yolu için","➡️⬆️ döngüsü"]],
     sorular:[
       {s:"Aynı komutları tekrar etmeye ne denir?", c:["Döngü","Hata","Şifre","Dosya"], a:"Tekrar eden komut yapısına döngü denir."},
       {s:"'3 kez tekrarla ➡️' ne demektir?", c:["➡️➡️➡️","➡️","⬆️⬆️⬆️","⬅️⬅️⬅️"], a:"➡️ komutu 3 kez uygulanır."},
       {s:"Döngü kullanmanın en büyük yararı nedir?", c:["Kodu kısaltmak","Bilgisayarı kapatmak","Şifre yapmak","Ekranı büyütmek"], a:"Döngü tekrar eden kodu kısaltır."},
       {s:"'5 kez tekrarla ⬆️' kodunda robot kaç kare yukarı çıkar?", c:["5","1","4","6"], a:"⬆️ 5 kez uygulanır, robot 5 kare yukarı çıkar."},
       {s:"'2 kez tekrarla (➡️⬆️)' hangi komut dizisine eşittir?", c:["➡️⬆️➡️⬆️","➡️➡️⬆️⬆️","⬆️⬆️➡️➡️","➡️⬆️"], a:"İki kez ➡️⬆️ yazılır."},
       {s:"'4 kez tekrarla (➡️⬆️)' sonunda robot başlangıca göre nerededir?", c:["4 sağda, 4 yukarıda","4 sağda, 1 yukarıda","1 sağda, 4 yukarıda","8 yukarıda"], a:"Her turda 1 sağ ve 1 yukarı, 4 turda 4 sağ 4 yukarı."},
       {s:"Hangisi döngüye örnektir?", c:["Gün doğumunun her gün tekrar etmesi","Bir kez doğum günü kutlamak","Tek bir şarkı","Bir kapının açılması"], a:"Her gün tekrar eden olaylar döngüye benzer."},
       {s:"'2 kez tekrarla (➡️➡️⬆️)' sonunda robot başlangıca göre nerededir?", c:["4 sağda, 2 yukarıda","2 sağda, 4 yukarıda","2 sağda, 2 yukarıda","4 sağda, 4 yukarıda"], a:"Her turda 2 sağ ve 1 yukarı; 2 turda 4 sağ ve 2 yukarı."}
     ]},
    {id:"kod2-internet-guvenligi", ad:"İnternet Güvenliği", e:"🔐",
     anlat:[
       {b:"Kişisel bilgi", m:"Adın, soyadın, adresin, telefon numaran, okulun ve fotoğrafların kişisel bilgidir. Bunları tanımadığın kişilerle paylaşmazsın."},
       {b:"Şifre", m:"Şifre sadece sana aittir. Anne babandan başka kimseyle paylaşmazsın. Güçlü şifre uzundur ve harf, rakam ve işaret içerir."},
       {b:"Tanımadığın kişiler", m:"İnternette tanımadığın biri yazarsa cevap verme. Arkadaş olmayı, buluşmayı teklif ederse hemen bir büyüğüne söyle."},
       {b:"Şüpheli bağlantı", m:"Tanımadığın linklere tıklama. Tuhaf ya da seni rahatsız eden bir şey görürsen sayfayı kapat ve yetişkine söyle."}
     ],
     ipucu:"Şifre diş fırçası gibidir: Kimseyle paylaşılmaz! Şüpheli görürsen kapat ve büyüğüne söyle.",
     kartlar:[["Kişisel bilgi örneği","Adres, telefon, okul"],["Şifre kiminle paylaşılır?","Yalnız anne babayla"],["Güçlü şifre","Uzun, karışık"],["Zayıf şifre örneği","1234"],["Tanımadık linke","Tıklamam"],["Rahatsız eden içerik","Kapat ve söyle"]],
     sorular:[
       {s:"Hangisi kişisel bilgidir?", c:["Adres","Hava durumu","Bir fıkra","Bir şarkı sözü"], a:"Adres kişisel bilgidir, paylaşılmamalıdır."},
       {s:"Şifreni kiminle paylaşabilirsin?", c:["Yalnız anne babanla","Arkadaşlarınla","Herkesle","Oyundaki tanımadıklarla"], a:"Şifreni yalnız güvendiğin büyüklerle paylaşabilirsin."},
       {s:"Hangisi güçlü bir şifredir?", c:["Rk7!ceZam21","1234","abc","ali"], a:"Uzun, harf, rakam ve işaret içeren şifre güçlüdür."},
       {s:"Hangisi zayıf bir şifredir?", c:["1234","M7!kaP3zz","Tg5#nBe9","k4Y!ra2Lm"], a:"Kolay tahmin edilen şifre zayıftır."},
       {s:"İnternette tanımadığın biri 'Seninle buluşalım' derse ne yaparsın?", c:["Cevap vermem, büyüğüme söylerim","Hemen kabul ederim","Adresimi yazarım","Gizlice giderim"], a:"Tanımadığınla buluşulmaz, büyüğüne söylenir."},
       {s:"Tuhaf bir mesajdaki linke ne yaparsın?", c:["Tıklamam","Tıklarım","Arkadaşlarıma gönderirim","Şifremi yazarım"], a:"Şüpheli linklere tıklanmaz."},
       {s:"Ekranında seni rahatsız eden bir görüntü çıkarsa ne yaparsın?", c:["Kapatıp yetişkine söylerim","Başkalarına gösteririm","Saklarım","Devam ederim"], a:"Hemen kapatıp güvendiğin büyüğe söylemelisin."},
       {s:"Oyun sitesi senden adresini ve telefon numaranı istiyor. Ne yaparsın?", c:["Vermem, büyüğüme danışırım","Hemen yazarım","Arkadaşıma yazdırırım","Yalan söylerim"], a:"Kişisel bilgi istenirse önce yetişkine sorulur."}
     ]}
  ]}
]});
