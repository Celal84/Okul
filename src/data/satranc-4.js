HW.add({ders:"satranc", sinif:4, uniteler:[
  {ad:"İleri Satranç", konular:[
    {id:"st4-taktik2", ad:"Taktikler 2: Şiş, Açarak Şah, Çifte Şah", e:"🗡️",
     anlat:[
       {b:"Şiş", m:"Şişte değerli bir taşa saldırılır. O taş kaçınca arkasındaki daha az değerli taş alınır. Kale, fil ve vezir şiş yapabilir. Açmazın tersidir: açmazda arkadaki taş daha değerlidir."},
       {b:"Açarak şah", m:"Bir taşı yerinden oynatınca arkasındaki başka bir taşın şah çekmesi açılır. Oynayan taş aynı anda başka bir tehdit de yapabilir. Bu yüzden çok güçlüdür."},
       {b:"Çifte şah", m:"İki taşla aynı anda şah çekmektir. Biri hamle yapan taş, biri açılan taştır. Çifte şahta araya taş koyma ya da alma işe yaramaz; yalnız şah kaçarak kurtulur."},
       {b:"Dikkat noktası", m:"Taktik görmek için önce tehdit eden, korunmayan taşları ara. Zorlayıcı hamleleri (şah, alma, tehdit) sırayla düşün."}
     ],
     ipucu:"Şiş: öndeki değerli, arkadaki sonra gider! Çifte şah: yalnız şah kaçar!",
     kartlar:[["Önce değerli taşa, sonra arkadakine","Şiş"],["Şişte arkadaki taş","Daha az değerli"],["Açmazda arkadaki taş","Daha değerli"],["Taşı oynatıp arkadakiyle şah","Açarak şah"],["İki taşla aynı anda şah","Çifte şah"],["Çifte şahtan kurtuluş","Yalnız şah kaçar"]],
     sorular:[
       {s:"Değerli bir taşa saldırıp, o kaçınca arkasındaki taşı almak hangi taktiktir?", c:["Şiş","Açmaz","Çatal","Rok"], a:"Bu taktiğe şiş denir."},
       {s:"Şiş ile açmaz arasındaki fark nedir?", c:["Şişte öndeki taş daha değerlidir","Şişte arkadaki taş şahtır","İkisi aynıdır","Açmazda taş alınır"], a:"Şişte öndeki taş daha değerlidir, açmazda ise arkadaki."},
       {s:"Hangi taş şiş yapabilir?", c:["Fil","At","Şah","Piyon"], a:"Uzun menzilli taşlar (kale, fil, vezir) şiş yapar."},
       {s:"Bir taşı yerinden oynatınca arkasındaki taşın şah çekmesi açılıyorsa bu taktiğe ne denir?", c:["Açarak şah","Çifte şah","Şiş","Pat"], a:"Bu taktik açarak şahtır."},
       {s:"İki taşın aynı anda şah çekmesine ne denir?", c:["Çifte şah","Mat","Pat","Açmaz"], a:"İki taşla birden şah çekmek çifte şahtır."},
       {s:"Çifte şah çekilince şahtan nasıl kurtulunabilir?", c:["Yalnız şahı kaçırarak","Araya taş koyarak","Bir saldıran taşı alarak","Rok yaparak"], a:"İki farklı saldırı olduğundan şah kaçmak zorundadır."},
       {s:"Beyaz kale a1'den a4'teki siyah şaha şah çekiyor. Siyah vezir a8'de, a hattında başka taş yok, siyahın başka taşı yok. Şah hattı terk edince beyaz ne yapar?", c:["Kaleyle a8'deki vezir alınır","Mat edilir","Kale geri çekilir","Oyun berabere olur"], a:"Şah kaçınca kale a hattında vezire saldırır ve alır: şiş."},
       {s:"Beyaz kale e1'de, beyaz at e4'te, siyah şah e8'de. E hattının geri kalanı boş. At bir hamle yaparsa kale şah çeker. Bu ne taktiğidir?", c:["Açarak şah","Şiş","Mutlak açmaz","Çatal"], a:"At hattı açar ve kale şah çeker: açarak şah."}
     ]},
    {id:"st4-oyun-sonu", ad:"Oyun Sonu: Şah, Piyon ve Opozisyon", e:"🏁",
     anlat:[
       {b:"Oyun sonunda şah", m:"Tahtada az taş kalınca şah tehlikeden uzaktır, bu yüzden aktif bir taş olur. Şahı merkeze getirmek ve piyonları desteklemek önemlidir."},
       {b:"Geçer piyon", m:"Önünde ve yanındaki hatlarda rakip piyon olmayan piyona geçer piyon denir. Terfiye yaklaşırsa çok güçlüdür; oyun sonu bu piyonu yürütmek için oynanır."},
       {b:"Opozisyon", m:"İki şah arada tek kare bırakıp aynı hatta karşılıklı durursa opozisyon vardır. Hamle sırası kimde değilse opozisyonu o almış sayılır; sırası gelen şah yol vermek zorundadır."},
       {b:"Şah piyonun önünde", m:"Piyonlu oyun sonunda şahın piyonun önünde olması çoğunlukla kazandırır. Şah önce yol açar, sonra piyon terfiye yürür."}
     ],
     ipucu:"Oyun sonunda şah savaşçıdır! Geçer piyonu şahla destekle, opozisyonu kap!",
     kartlar:[["Oyun sonunda şah","Aktif savaşır"],["Rakip piyonu olmayan piyon","Geçer piyon"],["Şahlar arada tek kare, aynı hat","Opozisyon"],["Opozisyonu alan","Sırası olmayan"],["Piyonu götürürken şah","Piyonun önünde"],["Oyun sonunda hedef","Piyonu terfiye ulaştırmak"]],
     sorular:[
       {s:"Oyun sonunda şah genellikle nasıl kullanılır?", c:["Aktif bir taş gibi merkeze çıkar","Köşede saklanır","Oynamaz","Hep kenarda kalır"], a:"Az taş kalınca şah tehlikede olmadığı için savaşa katılır."},
       {s:"Önünde ve yan hatlarında rakip piyonu olmayan piyona ne denir?", c:["Geçer piyon","İkili piyon","Kenar piyonu","Terfi piyonu"], a:"Bu piyon terfiye engelsiz ilerleyebilir."},
       {s:"İki şah arada bir kare bırakıp aynı hatta karşılıklı duruyorsa ne denir?", c:["Opozisyon","Rok","Çatal","Pat"], a:"Bu durum opozisyondur."},
       {s:"Beyaz şah e4'te, siyah şah e6'da, sıra siyahta. Opozisyonu kim almıştır?", c:["Beyaz","Siyah","İkisi de","İkisi de değil"], a:"Sırası olmayan taraf opozisyona sahiptir."},
       {s:"Piyon ve şah oyun sonunda şahın nerede olması piyonu terfiye götürmek için iyidir?", c:["Piyonun önünde","Piyonun arkasında köşede","Tahtanın başka ucunda","Piyonla aynı karede"], a:"Şah piyonun önünden yol açar."},
       {s:"Oyun sonunda geçer piyon neden değerlidir?", c:["Terfiye giderek vezir olabilir","Şah çekmez","Hiç alınamaz","Rok yapar"], a:"Terfiye ulaşan piyon güçlü bir taşa dönüşebilir."},
       {s:"Opozisyonu olmayan, sırası gelen şahın durumu nedir?", c:["Yol vermek zorunda kalabilir","Mat olur","Piyon alır","Terfi eder"], a:"Sırası gelen şah geri çekilip yolu açmak zorunda kalır."},
       {s:"Rakibin yalnız şahı var; hiç yasal hamlesi yok ama şah çekilmiyor. Bu oyun sonunda ne olur?", c:["Pat, berabere","Mat","Beyaz kazanır","Siyah kazanır"], a:"Şah çekilmeden hamle kalmazsa pat olur."}
     ]},
    {id:"st4-strateji", ad:"Strateji: Zayıf-Güçlü Kareler, Açık Hat", e:"🧠",
     anlat:[
       {b:"Zayıf kareler", m:"Kendi piyonlarının artık koruyamadığı kareler zayıf karedir. Rakip taşı oraya yerleşirse seni sıkıştırır. Piyon oynarken geride bıraktığın kareler zayıflayabilir."},
       {b:"Güçlü kareler", m:"Kendi piyonuyla korunan ve rakip piyonla saldırılamayan kare güçlü karedir. Buraya yerleşen at çok etkili olur. Buna karakol da denir."},
       {b:"Açık hat", m:"Üzerinde hiç piyon bulunmayan dikey hat açık hattır. Kaleler açık hatlarda çok güçlüdür. Yalnız bir tarafın piyonu olan hatta yarı açık hat denir."},
       {b:"Piyon yapısı", m:"Aynı hatta iki piyon olursa ikili piyon, hiç komşu piyonu olmayan piyon ise yalnız piyondur. Bunlar çoğunlukla zayıflıktır. Sağlam piyon zinciri gücü artırır."}
     ],
     ipucu:"Kale açık hattı sever, at güçlü kareyi sever. Piyonun koruyamadığı kare zayıf!",
     kartlar:[["Piyonun koruyamadığı kare","Zayıf kare"],["Piyonla korunan kare","Güçlü kare"],["Üzerinde piyon olmayan hat","Açık hat"],["Açık hatta en iyi taş","Kale"],["Aynı hatta iki piyon","İkili piyon"],["Güçlü kareye yerleşen at","Karakol"]],
     sorular:[
       {s:"Hiç piyon bulunmayan dikey hatta ne denir?", c:["Açık hat","Yarı açık hat","Kapalı hat","Çapraz"], a:"Hiç piyon olmayan hat açık hattır."},
       {s:"Hangi taş açık hatlarda genellikle en etkilidir?", c:["Kale","At","Şah","Piyon"], a:"Kale yatay ve dikey gittiği için açık hatlarda güçlüdür."},
       {s:"Kendi piyonlarının koruyamadığı karelere ne denir?", c:["Zayıf kare","Güçlü kare","Merkez","Çatal"], a:"Piyonla korunmayan kare zayıf kare olabilir."},
       {s:"Piyonla korunan ve rakip piyonla saldırılamayan kare için hangisi doğrudur?", c:["Güçlü karedir","Zayıf karedir","Kenar karesidir","Pat karesidir"], a:"Bu kare, taş için güvenli bir karakoldur."},
       {s:"Aynı hatta iki piyona ne denir?", c:["İkili piyon","Geçer piyon","Terfi piyonu","Yalnız piyon"], a:"İkili piyon çoğunlukla zayıflıktır."},
       {s:"Bir hatta yalnız rakip piyonu varsa bu hatta ne denir?", c:["Yarı açık hat","Açık hat","Kapalı hat","Çapraz hat"], a:"Bir tarafın piyonu varsa hat yarı açıktır."},
       {s:"d hattında piyon kalmadı. Kaleni oraya koyarsan ne kazanırsın?", c:["Rakip kampa baskı ve etkin hareket","Pat","Mat","Piyon terfisi"], a:"Açık hatta kale etkinleşir ve içeri girer."},
       {s:"Güçlü bir karede duran attan ne beklenir?", c:["Rakibi rahatsız edip kolay atılamaması","Hemen terfi etmesi","Şah çekmeden kaçması","Hiç oynamaması"], a:"Piyonla atılamayan at rakibe sürekli sorun çıkarır."}
     ]},
    {id:"st4-kultur-kurallar", ad:"Satranç Kültürü ve Turnuva Kuralları", e:"🏆",
     anlat:[
       {b:"Dokunulan taş", m:"Turnuvada dokunduğun taşı oynamak zorundasın (oynanabiliyorsa). Rakibin taşına dokunursan onu almak zorundasın. Taşı düzeltmek istersen önce 'pardon' demelisin."},
       {b:"Satranç saati", m:"Turnuvalarda iki saat vardır. Hamle yapınca kendi saatini durdurur, rakibin saatini çalıştırırsın. Süresi biten oyuncu, rakibinin mat için yeterli taşı varsa kaybeder."},
       {b:"Berabere türleri", m:"Oyun beş yolla berabere biter: anlaşma, pat, aynı konumun üç kez tekrarı, 50 hamlede alış veya piyon hamlesi olmaması ve yetersiz taş (örneğin şaha karşı şah)."},
       {b:"Kültür", m:"Satranç, kökeni eski Hindistan'daki çaturanga oyununa dayanan bir oyun olarak kabul edilir. Dünya Satranç Günü her yıl 20 Temmuz'da kutlanır. Oyuncular birbirine saygı gösterir, el sıkışır."}
     ],
     ipucu:"Dokundun mu, oynarsın! Düzeltirken önce 'pardon' de. 3 tekrar, pat, anlaşma = berabere.",
     kartlar:[["Dokunulan taş kuralı","Dokunan taşı oynarsın"],["Taşı düzeltmeden önce","Pardon denir"],["Saatin işlevi","Düşünme süresini ölçer"],["Süresi biten oyuncu","Genelde kaybeder"],["Aynı konum üç kez","Berabere"],["Şaha karşı yalnız şah","Yetersiz taş: berabere"],["Dünya Satranç Günü","20 Temmuz"]],
     sorular:[
       {s:"Turnuvada dokunduğun taşa ne yapmak zorundasın?", c:["Oynamak","Geri bırakmak","Rakibe vermek","Silmek"], a:"Dokunan taş oynanabiliyorsa onunla hamle yapılmalıdır."},
       {s:"Bir taşı düzeltmek istersen ne söylemelisin?", c:["Pardon","Mat","Pat","Rok"], a:"Taşa dokunmadan önce 'pardon' denir."},
       {s:"Satranç saatine ne zaman basılır?", c:["Hamle yaptıktan sonra","Hamleden önce","Her dakikada bir","Oyun bitince"], a:"Hamleyi yapınca kendi saatini durdurup rakibinki çalıştırılır."},
       {s:"Süresi biten oyuncu için hangisi doğrudur?", c:["Rakibin yeterli taşı varsa kaybeder","Hemen berabere","Mat olur","Oyun yeniden başlar"], a:"Süresi bitince oyunu kaybeder, rakibin mat gücü yoksa beraberdir."},
       {s:"Aynı konum üç kez tekrar ederse sonuç ne olur?", c:["Berabere bitebilir","Beyaz kazanır","Siyah kazanır","Oyun yeniden başlar"], a:"Üç kez tekrar beraberlik sebebidir."},
       {s:"Tahtada yalnız iki şah kalırsa sonuç ne olur?", c:["Berabere","Beyaz kazanır","Siyah kazanır","Mat olur"], a:"Şahlar tek başına mat yapamaz, bu yetersiz taş durumudur."},
       {s:"Satranç hangi eski oyundan gelişmiş kabul edilir?", c:["Çaturanga","Tavla","Dama","Mangala"], a:"Satrancın kökeninin Hindistan'daki çaturangaya dayandığı kabul edilir."},
       {s:"Dünya Satranç Günü hangi tarihte kutlanır?", c:["20 Temmuz","23 Nisan","29 Ekim","19 Mayıs"], a:"Dünya Satranç Günü 20 Temmuz'dur."}
     ]}
  ]}
]});
