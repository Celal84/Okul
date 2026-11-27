HW.add({ders:"satranc", sinif:1, uniteler:[
  {ad:"Satranca Başlangıç", konular:[
    {id:"st1-tahta", ad:"Satranç Tahtası", e:"♟️",
     anlat:[
       {b:"64 kare", m:"Satranç tahtasında 64 kare vardır. Kareler açık ve koyu renklidir. Açık ve koyu kareler sırayla dizilir. Tahtada 8 sıra ve 8 hat vardır."},
       {b:"Yatay, dikey, çapraz", m:"Soldan sağa giden karelere <b>yatay sıra</b> denir. Aşağıdan yukarı giden karelere <b>dikey hat</b> denir. Köşeden köşeye eğik giden karelere <b>çapraz</b> denir."},
       {b:"Kare adları", m:"Dikey hatlar a'dan h'ye harflerle adlanır. Yatay sıralar 1'den 8'e sayılarla adlanır. Karenin adı hat harfi ve sıra sayısıdır.", o:"e4: e hattı, 4. sıra"},
       {b:"Tahta nasıl durur?", m:"Tahta öyle konur ki her oyuncunun sağ alt köşesi açık renkli kare olur. Beyaz taşlar sana yakın durur."}
     ],
     ipucu:"Sağ alt köşe açık renkli olmalı: 'Sağda beyaz yanar!'",
     kartlar:[["Tahtadaki kare sayısı","64"],["Soldan sağa giden kareler","Yatay sıra"],["Aşağıdan yukarı giden kareler","Dikey hat"],["Köşeden köşeye eğik kareler","Çapraz"],["Dikey hatların adları","a, b, c ... h"],["Yatay sıraların adları","1, 2, 3 ... 8"],["Sağ alt köşe kare rengi","Açık renkli"]],
     sorular:[
       {s:"Satranç tahtasında kaç kare vardır?", c:["64","32","100"], a:"Tahtada 8 x 8 = 64 kare vardır."},
       {s:"Soldan sağa giden karelere ne denir?", c:["Yatay sıra","Dikey hat","Çapraz"], a:"Soldan sağa giden kareler yatay sıradır."},
       {s:"Aşağıdan yukarı giden karelere ne denir?", c:["Dikey hat","Yatay sıra","Çapraz"], a:"Aşağıdan yukarı giden kareler dikey hattır."},
       {s:"Köşeden köşeye eğik giden karelere ne denir?", c:["Çapraz","Yatay sıra","Dikey hat"], a:"Eğik giden kareler çaprazdır."},
       {s:"Hangisi bir kare adıdır?", c:["e4","ee","44"], a:"Kare adı bir harf ve bir sayıdan oluşur."},
       {s:"Tahtayı doğru koyunca sağ alt köşedeki kare hangi renktedir?", c:["Açık renkli","Koyu renkli","Kırmızı"], a:"Her oyuncunun sağ alt köşesi açık renkli olmalıdır."},
       {s:"Tahtada kaç yatay sıra vardır?", c:["8","6","10"], a:"Tahtada 8 yatay sıra vardır."},
       {s:"e4 karesi hangi harfli dikey hattadır?", c:["e hattı","4 hattı","h hattı"], a:"e4 karesi e hattındadır."}
     ]},
    {id:"st1-dizilis", ad:"Taşların Dizilişi", e:"♜",
     anlat:[
       {b:"Taşlar", m:"Her oyuncunun 16 taşı vardır: 8 piyon, 2 kale, 2 at, 2 fil, 1 vezir ve 1 şah. Bir oyuncu beyaz, diğeri siyah oynar. İlk hamleyi beyaz yapar."},
       {b:"Piyonlar", m:"Piyonlar ikinci sırada dizilir. Beyazın piyonları 2. sıradadır. Siyahın piyonları 7. sıradadır."},
       {b:"Arka sıra", m:"Köşelere kaleler konur. Kalelerin yanına atlar gelir. Atların yanına filler konur. Ortada vezir ve şah durur."},
       {b:"Vezir ve şah", m:"Vezir kendi renginin karesine konur. Beyaz vezir d1'de, siyah vezir d8'dedir. Şahlar yanlarındaki e karesindedir.", o:"Beyaz şah e1'dedir."}
     ],
     ipucu:"Köşeden içe: Kale, At, Fil, sonra Vezir ve Şah. 'Vezir kendi rengini sever!'",
     kartlar:[["Bir oyuncunun taş sayısı","16"],["Piyon sayısı","8"],["Köşelerde duran taş","Kale"],["Kalenin yanındaki taş","At"],["Beyaz vezir karesi","d1"],["Beyaz şah karesi","e1"],["Siyah vezir karesi","d8"]],
     sorular:[
       {s:"Her oyuncunun kaç taşı vardır?", c:["16","8","32"], a:"Her oyuncunun 8 piyon ve 8 diğer taşı vardır, toplam 16."},
       {s:"Beyaz piyonlar hangi sırada başlar?", c:["2. sıra","1. sıra","4. sıra"], a:"Beyaz piyonlar 2. sırada başlar."},
       {s:"Tahtanın köşelerinde hangi taş durur?", c:["Kale","Fil","At"], a:"Kaleler köşelerde yer alır."},
       {s:"Bir oyuncunun kaç piyonu vardır?", c:["8","6","16"], a:"Her oyuncunun 8 piyonu vardır."},
       {s:"Kalenin yanında hangi taş durur?", c:["At","Vezir","Şah"], a:"Kalelerin yanında atlar durur."},
       {s:"Beyaz vezir hangi karede başlar?", c:["d1","e1","a1"], a:"Beyaz vezir d1'de başlar."},
       {s:"Beyaz şah hangi karede başlar?", c:["e1","d1","f1"], a:"Beyaz şah e1'de başlar."},
       {s:"Siyah vezir hangi karede başlar?", c:["d8","e8","d7"], a:"Siyah vezir kendi renginin karesinde, d8'de başlar."}
     ]},
    {id:"st1-piyon-kale-fil", ad:"Piyon, Kale ve Fil", e:"♝",
     anlat:[
       {b:"Piyon", m:"Piyon ileri gider, geri dönmez. Her hamlede 1 kare ilerler. İlk hamlesinde istersen 2 kare de ilerleyebilir. Piyon önündeki taşı alamaz."},
       {b:"Piyon nasıl alır?", m:"Piyon çapraz ileri giderek taş alır. Yani yürürken düz, alırken çapraz gider."},
       {b:"Kale", m:"Kale yatay ve dikey gider. İstediği kadar kare gidebilir. Başka taşın üstünden atlayamaz."},
       {b:"Fil", m:"Fil çapraz gider. İstediği kadar kare gidebilir. Fil hep kendi renkli karelerinde kalır. Açık kareli fil, koyu kareye geçemez."}
     ],
     ipucu:"Kale dümdüz, fil çapraz. Piyon düz yürür, çapraz yer!",
     kartlar:[["Piyon nereye gider?","İleri"],["Piyon taşı nasıl alır?","Çapraz ileri"],["Piyon ilk hamlede en çok","2 kare"],["Kale nasıl gider?","Yatay ve dikey"],["Fil nasıl gider?","Çapraz"],["Açık kareli fil","Hep açık karede kalır"]],
     sorular:[
       {s:"Piyon hangi yöne yürür?", c:["İleri","Geri","Yana"], a:"Piyon yalnız ileri yürür."},
       {s:"Kale nasıl hareket eder?", c:["Yatay ve dikey","Çapraz","L şeklinde"], a:"Kale yatay ve dikey gider."},
       {s:"Fil nasıl hareket eder?", c:["Çapraz","Dümdüz ileri","L şeklinde"], a:"Fil çapraz gider."},
       {s:"Piyon rakip taşı nasıl alır?", c:["Çapraz ileri giderek","Düz ileri giderek","Geri giderek"], a:"Piyon çapraz ileri giderek taş alır."},
       {s:"Piyon ilk hamlesinde en çok kaç kare ilerleyebilir?", c:["2","3","1"], a:"İlk hamlede piyon 1 ya da 2 kare ilerleyebilir."},
       {s:"Açık kareli fil hangi kareye geçemez?", c:["Koyu kareye","Açık kareye","Çapraz kareye"], a:"Fil kendi renginde kalır."},
       {s:"Boş tahtada kale a1'den a8'e gidebilir mi?", c:["Evet, dikey gider","Hayır, yalnız yatay gider","Hayır, yalnız çapraz gider"], a:"a1'den a8'e dikey gidilir, kale gidebilir."},
       {s:"Boş tahtada fil c1'den h6'ya gidebilir mi?", c:["Evet, çapraz gider","Hayır, dikey gider","Hayır, yatay gider"], a:"c1-d2-e3-f4-g5-h6 bir çaprazdır."}
     ]},
    {id:"st1-vezir-sah-at", ad:"Vezir, Şah ve At", e:"♞",
     anlat:[
       {b:"Vezir", m:"Vezir en güçlü taştır. Kale gibi yatay ve dikey, fil gibi çapraz gider. İstediği kadar kare gidebilir."},
       {b:"Şah", m:"Şah en önemli taştır. Her yöne bir kare gider. Şah yenilirse oyun biter."},
       {b:"At", m:"At L şeklinde gider: 2 kare düz, 1 kare yana. At diğer taşların üstünden atlayabilir. Bunu yalnız at yapar."},
       {b:"At örneği", m:"e4'teki at f6'ya gidebilir. Önce 2 kare ileri, sonra 1 kare sağa.", o:"e4 - e5 - e6 - f6"}
     ],
     ipucu:"At harf L çizer ve herkesin üstünden atlar. Vezir = kale + fil!",
     kartlar:[["En güçlü taş","Vezir"],["En önemli taş","Şah"],["Vezirin gidişi","Kale + fil gibi"],["Şahın gidişi","Her yöne 1 kare"],["Atın gidişi","L şeklinde"],["Atlayabilen taş","At"]],
     sorular:[
       {s:"En güçlü taş hangisidir?", c:["Vezir","Piyon","Şah"], a:"Vezir en güçlü taştır."},
       {s:"Şah nasıl gider?", c:["Her yöne bir kare","Yalnız ileri","L şeklinde"], a:"Şah her yöne yalnız bir kare gider."},
       {s:"At nasıl hareket eder?", c:["L şeklinde","Çapraz","Yatay"], a:"At L şeklinde gider."},
       {s:"Diğer taşların üstünden hangi taş atlayabilir?", c:["At","Kale","Fil"], a:"Yalnız at diğer taşların üstünden atlar."},
       {s:"Vezir nasıl hareket eder?", c:["Yatay, dikey ve çapraz","Yalnız çapraz","Yalnız dikey"], a:"Vezir kale ve fil gibi gider."},
       {s:"Hangi taş yenilirse oyun biter?", c:["Şah","Vezir","At"], a:"Şahın yenilmesiyle oyun biter."},
       {s:"Boş tahtada e4'teki at hangi kareye gidebilir?", c:["f6","f5","e6"], a:"e4'ten f6'ya 2 kare ileri, 1 kare sağa gidilir."},
       {s:"d4'teki şah bir hamlede hangi kareye gidebilir?", c:["d5","d6","f6"], a:"Şah yalnız bir kare gider; d5 bitişiktir."}
     ]}
  ]}
]});
