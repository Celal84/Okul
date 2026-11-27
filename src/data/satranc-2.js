HW.add({ders:"satranc", sinif:2, uniteler:[
  {ad:"Satranç Kuralları", konular:[
    {id:"st2-degerler", ad:"Taşların Değerleri", e:"⚖️",
     anlat:[
       {b:"Puan değerleri", m:"Taşların kıyaslama değeri vardır. Piyon 1, at 3, fil 3, kale 5, vezir 9 puandır. Şahın değeri yoktur, çünkü şah kaybedilmez."},
       {b:"Neden değerler?", m:"Taşları değiş tokuş ederken hangisinin daha değerli olduğunu bilmeliyiz. Böylece kazançlı takas yaparız."},
       {b:"Takas", m:"Rakibin taşını alıp kendi taşını verirsek takas olur. Kale (5) verip at (3) alırsan 2 puan kaybedersin. At (3) verip kale (5) alırsan 2 puan kazanırsın."},
       {b:"Toplama", m:"İki at 6, bir kale ve bir piyon 6 puan eder. Vezir 9 puan değerindedir, yani 9 piyona eşittir.", o:"vezir = kale + 4 piyon"}
     ],
     ipucu:"1-3-3-5-9: Piyon 1, At 3, Fil 3, Kale 5, Vezir 9. 'Bir, üç, üç, beş, dokuz!'",
     kartlar:[["Piyonun değeri","1"],["Atın değeri","3"],["Filin değeri","Atla aynı"],["Kalenin değeri","5"],["Vezirin değeri","9"],["Şahın değeri","Değeri ölçülmez"],["Vezir kaç piyona eşit?","9 piyon"]],
     sorular:[
       {s:"Piyonun puan değeri kaçtır?", c:["1","3","5","9"], a:"Piyon 1 puan değerindedir."},
       {s:"Kalenin puan değeri kaçtır?", c:["5","3","7","9"], a:"Kale 5 puan değerindedir."},
       {s:"Vezirin puan değeri kaçtır?", c:["9","5","10","3"], a:"Vezir 9 puan değerindedir."},
       {s:"At ve filin her birinin değeri kaç puandır?", c:["3","1","5","9"], a:"At ve fil 3 puandır."},
       {s:"Hangisi daha değerlidir?", c:["Kale","At","Fil","Piyon"], a:"Kale 5 puan, at ve fil 3, piyon 1 puandır."},
       {s:"Kale verip at alırsan ne olur?", c:["2 puan kaybedersin","2 puan kazanırsın","Puanın değişmez","5 puan kazanırsın"], a:"Kale 5, at 3 puandır; 2 puan kaybedersin."},
       {s:"İki at ve bir piyonun toplam değeri kaçtır?", c:["7","6","9","10"], a:"3 + 3 + 1 = 7 puan."},
       {s:"Vezirini verip iki kale (toplam 10 puan) alırsan ne olur?", c:["1 puan kazanırsın","1 puan kaybedersin","Puan eşit kalır","5 puan kazanırsın"], a:"Vezir 9, iki kale 10 puandır; 1 puan kazanırsın."}
     ]},
    {id:"st2-sah-cekme", ad:"Şah Çekme ve Şahtan Kurtulma", e:"👑",
     anlat:[
       {b:"Şah çekme", m:"Bir taş rakip şaha saldırırsa şah çekilmiştir. Şaha 'şah!' deriz. Şah çekilen oyuncu hemen şahını kurtarmak zorundadır."},
       {b:"Kurtulma yolları", m:"Şahtan kurtulmanın 3 yolu vardır: 1) Şahı güvenli bir kareye çekmek. 2) Saldıran taşı almak. 3) Saldıran taşla şah arasına başka bir taş koymak."},
       {b:"At'a karşı", m:"At diğer taşların üstünden atladığı için araya taş koyarak engellenemez. At şah çekerse şah kaçar ya da at alınır."},
       {b:"Yasaklar", m:"Şahını tehdit altında bırakacak hamle yapılamaz. İki şah da birbirinin yanındaki kareye gidemez."}
     ],
     ipucu:"Şahtan kurtulmak: KAÇ, AL ya da ARAYA KOY. At'a araya koyamazsın!",
     kartlar:[["Şaha saldırı olunca","Şah çekilmiştir"],["Kurtulma yolu sayısı","3"],["1. yol","Şahı kaçırmak"],["2. yol","Saldıran taşı almak"],["3. yol","Araya taş koymak"],["Atın şahına karşı","Araya taş konmaz"]],
     sorular:[
       {s:"Bir taş rakip şaha saldırırsa ne denir?", c:["Şah çekilmiştir","Pat","Rok","Terfi"], a:"Şaha saldırıya şah çekmek denir."},
       {s:"Şah çekilince şahtan kaç farklı yolla kurtulunabilir?", c:["3","1","2","4"], a:"Kaçmak, saldıranı almak ya da araya taş koymak: 3 yol."},
       {s:"Hangi taşın çektiği şaha karşı araya taş koyarak karşılık verilemez?", c:["At","Kale","Fil","Vezir"], a:"At taşların üstünden atladığı için araya taş konamaz."},
       {s:"Şah çekilmişken şahı kurtarmayan bir hamle yapılabilir mi?", c:["Hayır","Evet","Yalnız piyonla","Yalnız vezirle"], a:"Şah çekilmişse mutlaka şah kurtarılmalıdır."},
       {s:"İki şah yan yana gelen karelere gidebilir mi?", c:["Hayır","Evet","Yalnız beyaz şah","Yalnız oyun sonunda"], a:"Şahlar birbirinin bitişiğindeki kareye gidemez."},
       {s:"Şah, rakip taşın saldırdığı bir kareye gidebilir mi?", c:["Hayır","Evet","Yalnız ilk hamlede","Yalnız piyon saldırıyorsa"], a:"Şah tehdit edilen kareye gidemez."},
       {s:"Saldıran taşı almak şahtan kurtulmanın bir yolu mudur?", c:["Evet","Hayır","Yalnız piyonla","Yalnız şahla"], a:"Saldıran taş alınırsa şah çekilmesi sona erer."},
       {s:"Siyah kale e8'den e1'deki beyaz şaha şah çekiyor (e hattı boş, başka siyah taş yok). Hangi hamle şahı kurtarır?", c:["Şah d1'e gider","Şah e2'ye gider","Beyaz a2 piyonunu oynar","Beyaz h3 piyonunu oynar"], a:"d1 kalenin saldırı hattı dışındadır; e2 hâlâ e hattındadır."}
     ]},
    {id:"st2-mat-pat", ad:"Mat ve Pat", e:"🏁",
     anlat:[
       {b:"Mat", m:"Şah çekilmiş ve şahtan kurtulmanın hiçbir yolu yoksa buna <b>mat</b> denir. Oyun biter. Mat eden oyuncu oyunu kazanır."},
       {b:"Pat", m:"Şah çekilmemiş ama sırası gelen oyuncunun oynayabileceği hiçbir yasal hamle yoksa buna <b>pat</b> denir. Pat durumunda oyun berabere biter."},
       {b:"Mat ile pat farkı", m:"İkisinde de oyuncunun hamlesi kalmaz. Matta şah çekilir ve oyunu kaybeder. Patta şah çekilmez ve oyun berabere biter."},
       {b:"Dikkat!", m:"Üstün durumdaysan pat yapmamaya dikkat et. Rakibin şahını sıkıştırırken ona kaçacak hiç kare bırakmayıp şah da çekmezsen pat olur ve kazandığın oyun berabere biter."}
     ],
     ipucu:"MAT: şah çekili, çare yok, kazandın. PAT: şah çekili değil, hamle yok, berabere!",
     kartlar:[["Şah çekili, kurtuluş yok","Mat"],["Şah çekili değil, hamle yok","Pat"],["Mat sonucu","Mat eden kazanır"],["Pat sonucu","Berabere"],["Matta şah","Çekilmiştir"],["Patta şah","Çekilmemiştir"]],
     sorular:[
       {s:"Şah çekilmiş ve kurtulmanın yolu yoksa buna ne denir?", c:["Mat","Pat","Rok","Terfi"], a:"Kurtuluşu olmayan şah çekmeye mat denir."},
       {s:"Mat olunca oyun nasıl biter?", c:["Mat eden kazanır","Berabere biter","Mat olan kazanır","Oyun devam eder"], a:"Mat eden oyuncu oyunu kazanır."},
       {s:"Şah çekilmemiş ama oynanacak yasal hamle yoksa ne olur?", c:["Pat olur, oyun berabere biter","Mat olur","Oyun devam eder","Beyaz kazanır"], a:"Bu durum pattır ve oyun berabere biter."},
       {s:"Patta oyunun sonucu nedir?", c:["Berabere","Beyaz kazanır","Siyah kazanır","Oyun yeniden başlar"], a:"Pat berabere sonuçlanır."},
       {s:"Matta şah çekilmiş midir?", c:["Evet","Hayır","Bazen","Yalnız beyazda"], a:"Matta şah çekilmiştir ve kurtuluşu yoktur."},
       {s:"Patta şah çekilmiş midir?", c:["Hayır","Evet","Yalnız siyahta","Yalnız oyun sonunda"], a:"Pat durumunda şah çekilmemiştir."},
       {s:"Rakibin yalnız şahı kaldı. Onu köşeye sıkıştırdın, şahının hiç hamlesi yok ve şah çekilmiyor. Ne olur?", c:["Pat; oyun berabere","Mat; sen kazanırsın","Rakip kazanır","Oyun devam eder"], a:"Şah çekilmediği için bu pattır."},
       {s:"Üstün durumdaki oyuncu pat yapmamak için ne yapmalıdır?", c:["Rakibe en az bir yasal hamle bırakmalıdır","Hemen vezirini vermelidir","Hamleyi tekrar etmelidir","Şahı oyundan çıkarmalıdır"], a:"Rakibe yasal hamle bırakılmazsa pat olur."}
     ]},
    {id:"st2-rok-ozel", ad:"Rok ve Özel Hamleler", e:"🏰",
     anlat:[
       {b:"Rok", m:"Rok, şahın ve kalenin aynı hamlede oynamasıdır. Şah kaleye doğru 2 kare gider. Kale de şahın üzerinden atlayıp yanına geçer. Şah güvene alınır."},
       {b:"Kısa ve uzun rok", m:"Kısa rokta beyaz şah g1'e, kale f1'e gider. Uzun rokta beyaz şah c1'e, kale d1'e gider.", o:"Kısa rok: Şe1-g1, Kh1-f1"},
       {b:"Rok kuralları", m:"Şah ve kale daha önce hiç oynamamış olmalı. Aralarında taş olmamalı. Şah çekiliyken rok yapılamaz. Şahın geçtiği ve gittiği karelere saldırı olmamalı."},
       {b:"Piyon terfisi", m:"Piyon karşı tarafın son sırasına ulaşırsa vezir, kale, fil ya da at olabilir. Çoğu zaman vezir seçilir. Şah ya da piyon olunamaz."},
       {b:"Geçerken alma", m:"Rakibin piyonu ilk hamlede 2 kare ilerleyip senin piyonunun yanına gelirse, bir kare ilerlemiş gibi çapraz alabilirsin. Bu hak yalnız hemen sonraki hamlede kullanılır."}
     ],
     ipucu:"Rok: Şah 2 kare gider, kale üstünden atlar. Terfi: son sıraya ulaşan piyon vezir olur!",
     kartlar:[["Rokta hareket eden taşlar","Şah ve kale"],["Rokta şah kaç kare gider?","2 kare"],["Beyaz kısa rok","Şah g1, kale f1"],["Beyaz uzun rok","Şah c1, kale d1"],["Piyon son sıraya varınca","Terfi eder"],["Piyon olamayacağı taş","Şah"],["Geçerken alma","Yalnız hemen alınır"]],
     sorular:[
       {s:"Rokta hangi taşlar hareket eder?", c:["Şah ve kale","Şah ve vezir","Vezir ve kale","At ve fil"], a:"Rok şah ve kale ile yapılır."},
       {s:"Rokta şah kaç kare oynar?", c:["2","1","3","4"], a:"Şah kaleye doğru 2 kare gider."},
       {s:"Beyazın kısa rokunda şah hangi kareye gider?", c:["g1","c1","f1","e2"], a:"Kısa rokta beyaz şah g1'e gider."},
       {s:"Beyazın uzun rokunda şah hangi kareye gider?", c:["c1","g1","d1","b1"], a:"Uzun rokta beyaz şah c1'e gider."},
       {s:"Şah çekilmişken rok yapılabilir mi?", c:["Hayır","Evet","Yalnız kısa rok","Yalnız uzun rok"], a:"Şah çekiliyken rok yapılamaz."},
       {s:"Rakibin son sırasına ulaşan piyon ne olur?", c:["Terfi eder","Geri döner","Taş olarak çıkar","Hemen mat verir"], a:"Piyon terfi eder, yeni bir taşa dönüşür."},
       {s:"Piyon hangi taşa dönüşemez?", c:["Şah","Vezir","Kale","At"], a:"Piyon şaha ya da piyona terfi edemez."},
       {s:"Geçerken alma ne zaman yapılabilir?", c:["Rakip piyonun 2 kare ilerleyişinden hemen sonra","Oyunun her anında","Yalnız piyon son sıradayken","Yalnız şah çekilmişken"], a:"Bu hak yalnızca ilerleyişten sonraki ilk hamlede vardır."}
     ]}
  ]}
]});
