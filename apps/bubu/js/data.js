/* Bubu English — içerik
 * Görsel türleri:
 *   '🍎'              → 3D emoji görseli (img/e/*.webp)
 *   'svg:fridge'      → özel çizim (img/svg/fridge.svg)
 *   'color:#e53935'   → boya lekesi (renkler)
 *   'num:3:⭐'        → sayı kartı
 */
'use strict';

const V = {}; // kelime sözlüğü
function w(id, en, tr, img, ex, exTr) {
  V[id] = { id, en, tr, img, ex, exTr };
}

/* ------------------------------------------------------------ EVİM */
// Mutfak
w('fridge', 'fridge', 'buzdolabı', 'svg:fridge', 'The milk is in the fridge.', 'Süt buzdolabında.');
w('oven', 'oven', 'fırın', 'svg:oven', 'The oven is hot!', 'Fırın sıcak!');
w('sink', 'sink', 'lavabo', 'svg:sink', 'Wash your hands in the sink.', 'Ellerini lavaboda yıka.');
w('table', 'table', 'masa', 'svg:table', 'The cup is on the table.', 'Fincan masanın üstünde.');
w('chair', 'chair', 'sandalye', '🪑', 'Sit on the chair, please.', 'Lütfen sandalyeye otur.');
w('teapot', 'teapot', 'çaydanlık', '🫖', 'This is a teapot.', 'Bu bir çaydanlık.');
w('cup', 'cup', 'fincan', '☕', 'I have a cup.', 'Bir fincanım var.');
w('pan', 'pan', 'tava', '🍳', 'The egg is in the pan.', 'Yumurta tavada.');
w('bowl', 'bowl', 'kase', '🥣', 'I eat soup in a bowl.', 'Kasede çorba içerim.');
w('plate', 'plate', 'tabak', '🍽️', 'This is a plate.', 'Bu bir tabak.');
w('spoon', 'spoon', 'kaşık', '🥄', 'I have a spoon.', 'Bir kaşığım var.');
w('window', 'window', 'pencere', '🪟', 'Open the window, please.', 'Lütfen pencereyi aç.');
// Yatak odası
w('bed', 'bed', 'yatak', '🛏️', 'I sleep in my bed.', 'Yatağımda uyurum.');
w('wardrobe', 'wardrobe', 'gardırop', 'svg:wardrobe', 'My clothes are in the wardrobe.', 'Kıyafetlerim gardıropta.');
w('lamp', 'lamp', 'lamba', 'svg:lamp', 'Turn on the lamp.', 'Lambayı aç.');
w('clock', 'clock', 'saat', 'svg:clock', 'Look at the clock!', 'Saate bak!');
w('teddy', 'teddy bear', 'oyuncak ayı', '🧸', 'I love my teddy bear.', 'Oyuncak ayımı seviyorum.');
w('ball', 'ball', 'top', '⚽', 'Let’s play with the ball!', 'Hadi topla oynayalım!');
w('book', 'book', 'kitap', '📕', 'I read a book.', 'Kitap okurum.');
w('picture', 'picture', 'resim', '🖼️', 'This is a nice picture.', 'Bu güzel bir resim.');
w('pillow', 'pillow', 'yastık', 'svg:pillow', 'My pillow is soft.', 'Yastığım yumuşak.');
// Banyo
w('bathtub', 'bathtub', 'küvet', '🛁', 'I take a bath in the bathtub.', 'Küvette banyo yaparım.');
w('shower', 'shower', 'duş', '🚿', 'I take a shower.', 'Duş alırım.');
w('toilet', 'toilet', 'tuvalet', '🚽', 'This is the toilet.', 'Burası tuvalet.');
w('mirror', 'mirror', 'ayna', '🪞', 'I look in the mirror.', 'Aynaya bakarım.');
w('toothbrush', 'toothbrush', 'diş fırçası', '🪥', 'I brush my teeth with my toothbrush.', 'Dişlerimi diş fırçamla fırçalarım.');
w('soap', 'soap', 'sabun', '🧼', 'Wash your hands with soap.', 'Ellerini sabunla yıka.');
w('towel', 'towel', 'havlu', 'svg:towel', 'The towel is blue.', 'Havlu mavi.');
w('sponge', 'sponge', 'sünger', '🧽', 'The sponge is yellow.', 'Sünger sarı.');
w('duck', 'duck', 'ördek', '🦆', 'The duck says quack!', 'Ördek vak vak der!');
w('toiletpaper', 'toilet paper', 'tuvalet kağıdı', '🧻', 'This is toilet paper.', 'Bu tuvalet kağıdı.');
// Oturma odası
w('sofa', 'sofa', 'kanepe', '🛋️', 'The cat is on the sofa.', 'Kedi kanepenin üstünde.');
w('tv', 'TV', 'televizyon', '📺', 'I watch TV.', 'Televizyon izlerim.');
w('door', 'door', 'kapı', '🚪', 'Close the door, please.', 'Lütfen kapıyı kapat.');
w('plant', 'plant', 'bitki', '🪴', 'The plant is green.', 'Bitki yeşil.');
w('cat', 'cat', 'kedi', '🐈', 'The cat says meow!', 'Kedi miyav der!');
w('dog', 'dog', 'köpek', '🐕', 'The dog says woof!', 'Köpek hav hav der!');
w('guitar', 'guitar', 'gitar', '🎸', 'I can play the guitar.', 'Gitar çalabilirim.');
w('phone', 'phone', 'telefon', '📱', 'Mom has a phone.', 'Annemin telefonu var.');

/* ------------------------------------------------------------ OKUL */
w('board', 'board', 'tahta', 'svg:board', 'Look at the board.', 'Tahtaya bak.');
w('desk', 'desk', 'sıra', 'svg:desk', 'This is my desk.', 'Bu benim sıram.');
w('teacher', 'teacher', 'öğretmen', '🧑‍🏫', 'My teacher is kind.', 'Öğretmenim çok iyi.');
w('bag', 'school bag', 'okul çantası', '🎒', 'My school bag is red.', 'Okul çantam kırmızı.');
w('notebook', 'notebook', 'defter', '📓', 'Open your notebook.', 'Defterini aç.');
w('pencil', 'pencil', 'kurşun kalem', '✏️', 'I have a pencil.', 'Bir kurşun kalemim var.');
w('pen', 'pen', 'tükenmez kalem', '🖊️', 'This is a blue pen.', 'Bu mavi bir kalem.');
w('eraser', 'eraser', 'silgi', 'svg:eraser', 'Can I have an eraser, please?', 'Bir silgi alabilir miyim, lütfen?');
w('ruler', 'ruler', 'cetvel', '📏', 'The ruler is long.', 'Cetvel uzun.');
w('scissors', 'scissors', 'makas', '✂️', 'Be careful with the scissors!', 'Makasla dikkatli ol!');
w('crayon', 'crayon', 'pastel boya', '🖍️', 'I draw with a crayon.', 'Pastel boyayla resim çizerim.');
w('globe', 'globe', 'dünya küresi', '🌍', 'Look at the globe!', 'Dünya küresine bak!');

// Sınıfım (veli panelinden seçilebilir eşyalar)
w('bookcase', 'bookshelf', 'kitaplık', 'svg:bookcase', 'The books are on the bookshelf.', 'Kitaplar kitaplıkta.');
w('ataturkcorner', 'Atatürk corner', 'Atatürk köşesi', 'svg:ataturkcorner', 'This is our Atatürk corner.', 'Burası bizim Atatürk köşemiz.');
w('locker', 'locker', 'öğrenci dolabı', 'svg:locker', 'My bag is in my locker.', 'Çantam dolabımda.');
w('bin', 'bin', 'çöp kutusu', '🗑️', 'Put the paper in the bin.', 'Kağıdı çöp kutusuna at.');
w('teacherdesk', 'teacher’s desk', 'öğretmen masası', 'svg:teacherdesk', 'The book is on the teacher’s desk.', 'Kitap öğretmen masasının üstünde.');
w('sharpener', 'sharpener', 'kalemtıraş', 'svg:sharpener', 'Can I have a sharpener, please?', 'Bir kalemtıraş alabilir miyim, lütfen?');
w('pencilcase', 'pencil case', 'kalem kutusu', 'svg:pencilcase', 'My pencils are in my pencil case.', 'Kalemlerim kalem kutumda.');
w('glue', 'glue', 'yapıştırıcı', 'svg:glue', 'I need some glue.', 'Biraz yapıştırıcıya ihtiyacım var.');
w('map', 'map', 'harita', '🗺️', 'Look at the map!', 'Haritaya bak!');
w('computer', 'computer', 'bilgisayar', '💻', 'The teacher has a computer.', 'Öğretmenin bir bilgisayarı var.');
w('calendar', 'calendar', 'takvim', '📅', 'Look at the calendar.', 'Takvime bak.');
w('flag', 'flag', 'bayrak', '🇹🇷', 'Our flag is red and white.', 'Bayrağımız kırmızı beyaz.');
w('paper', 'paper', 'kağıt', '📄', 'I have a piece of paper.', 'Bir kağıt parçam var.');
w('student', 'student', 'öğrenci', '🧑‍🎓', 'I am a student.', 'Ben bir öğrenciyim.');
w('bell', 'bell', 'zil', '🔔', 'The bell is ringing!', 'Zil çalıyor!');

// Okul bahçesi (veli panelinden seçilebilir)
w('flagpole', 'flagpole', 'bayrak direği', 'svg:flagpole', 'The flag is on the flagpole.', 'Bayrak, bayrak direğinde.');
w('hoop', 'basketball hoop', 'basket potası', 'svg:hoop', 'Throw the ball into the hoop!', 'Topu potaya at!');
w('basketball', 'basketball', 'basketbol topu', '🏀', 'Let’s play basketball!', 'Hadi basketbol oynayalım!');
w('goal', 'goal', 'kale', 'svg:goal', 'Kick the ball into the goal!', 'Topu kaleye vur!');
w('seesaw', 'seesaw', 'tahterevalli', 'svg:seesaw', 'Up and down on the seesaw!', 'Tahterevallide aşağı yukarı!');
w('rope', 'skipping rope', 'atlama ipi', 'svg:skippingrope', 'I can jump with my skipping rope.', 'Atlama ipimle ip atlayabilirim.');
w('hopscotch', 'hopscotch', 'seksek', 'svg:hopscotch', 'Let’s play hopscotch!', 'Hadi seksek oynayalım!');
w('schoolbus', 'school bus', 'okul servisi', 'svg:schoolbus', 'I go to school by school bus.', 'Okula servisle giderim.');
w('gate', 'school gate', 'okul kapısı', 'svg:gate', 'The school gate is open.', 'Okul kapısı açık.');
w('canteen', 'canteen', 'kantin', 'svg:canteen', 'I buy a sandwich at the canteen.', 'Kantinden sandviç alırım.');

/* ------------------------------------------------------------ PARK */
w('tree', 'tree', 'ağaç', '🌳', 'The tree is big.', 'Ağaç büyük.');
w('flower', 'flower', 'çiçek', '🌷', 'The flower is pink.', 'Çiçek pembe.');
w('bench', 'bench', 'bank', 'svg:bench', 'Sit on the bench.', 'Banka otur.');
w('slide', 'slide', 'kaydırak', '🛝', 'I go down the slide.', 'Kaydıraktan kayarım.');
w('swing', 'swing', 'salıncak', 'svg:swing', 'I like the swing.', 'Salıncağı severim.');
w('kite', 'kite', 'uçurtma', '🪁', 'I can fly a kite.', 'Uçurtma uçurabilirim.');
w('bird', 'bird', 'kuş', '🐦', 'The bird can fly.', 'Kuş uçabilir.');
w('butterfly', 'butterfly', 'kelebek', '🦋', 'The butterfly is beautiful.', 'Kelebek çok güzel.');
w('bicycle', 'bicycle', 'bisiklet', '🚲', 'I ride my bicycle.', 'Bisikletime binerim.');
w('sun', 'sun', 'güneş', '☀️', 'The sun is hot.', 'Güneş sıcak.');
w('cloud', 'cloud', 'bulut', '☁️', 'The cloud is white.', 'Bulut beyaz.');
w('balloon', 'balloon', 'balon', '🎈', 'I have a red balloon.', 'Kırmızı bir balonum var.');
w('icecream', 'ice cream', 'dondurma', '🍦', 'I like ice cream.', 'Dondurma severim.');

/* ------------------------------------------------------------ MARKET */
w('apple', 'apple', 'elma', '🍎', 'The apple is red.', 'Elma kırmızı.');
w('banana', 'banana', 'muz', '🍌', 'The banana is yellow.', 'Muz sarı.');
w('orange', 'orange', 'portakal', '🍊', 'I like oranges.', 'Portakal severim.');
w('grapes', 'grapes', 'üzüm', '🍇', 'The grapes are purple.', 'Üzümler mor.');
w('strawberry', 'strawberry', 'çilek', '🍓', 'I like strawberries.', 'Çilek severim.');
w('watermelon', 'watermelon', 'karpuz', '🍉', 'The watermelon is big.', 'Karpuz büyük.');
w('tomato', 'tomato', 'domates', '🍅', 'The tomato is red.', 'Domates kırmızı.');
w('carrot', 'carrot', 'havuç', '🥕', 'Rabbits like carrots.', 'Tavşanlar havuç sever.');
w('potato', 'potato', 'patates', '🥔', 'This is a potato.', 'Bu bir patates.');
w('bread', 'bread', 'ekmek', '🍞', 'Can I have some bread, please?', 'Biraz ekmek alabilir miyim, lütfen?');
w('cheese', 'cheese', 'peynir', '🧀', 'I eat cheese for breakfast.', 'Kahvaltıda peynir yerim.');
w('egg', 'egg', 'yumurta', '🥚', 'I have an egg.', 'Bir yumurtam var.');
w('milk', 'milk', 'süt', '🥛', 'I drink milk.', 'Süt içerim.');
w('cart', 'shopping cart', 'alışveriş arabası', '🛒', 'The shopping cart is full.', 'Alışveriş arabası dolu.');

/* ------------------------------------------------------------ ÇİFTLİK */
w('cow', 'cow', 'inek', '🐄', 'The cow says moo!', 'İnek möö der!');
w('horse', 'horse', 'at', '🐎', 'The horse can run fast.', 'At hızlı koşabilir.');
w('sheep', 'sheep', 'koyun', '🐑', 'The sheep says baa!', 'Koyun mee der!');
w('goat', 'goat', 'keçi', '🐐', 'This is a goat.', 'Bu bir keçi.');
w('chicken', 'chicken', 'tavuk', '🐔', 'The chicken has an egg.', 'Tavuğun bir yumurtası var.');
w('chick', 'chick', 'civciv', '🐤', 'The chick is small.', 'Civciv küçük.');
w('rabbit', 'rabbit', 'tavşan', '🐇', 'The rabbit can jump.', 'Tavşan zıplayabilir.');
w('tractor', 'tractor', 'traktör', '🚜', 'The farmer has a tractor.', 'Çiftçinin bir traktörü var.');
w('farmer', 'farmer', 'çiftçi', '🧑‍🌾', 'The farmer is happy.', 'Çiftçi mutlu.');
w('turkey', 'turkey', 'hindi', '🦃', 'The turkey says gobble!', 'Hindi glu glu der!');
w('donkey', 'donkey', 'eşek', '🫏', 'The donkey says hee-haw!', 'Eşek aii aii der!');

/* ------------------------------------------------------------ HAYVANAT BAHÇESİ */
w('lion', 'lion', 'aslan', '🦁', 'The lion says roar!', 'Aslan kükrer!');
w('elephant', 'elephant', 'fil', '🐘', 'The elephant is big.', 'Fil büyük.');
w('monkey', 'monkey', 'maymun', '🐒', 'The monkey likes bananas.', 'Maymun muz sever.');
w('giraffe', 'giraffe', 'zürafa', '🦒', 'The giraffe is tall.', 'Zürafa uzun.');
w('zebra', 'zebra', 'zebra', '🦓', 'The zebra is black and white.', 'Zebra siyah beyaz.');
w('tiger', 'tiger', 'kaplan', '🐅', 'The tiger is orange.', 'Kaplan turuncu.');
w('bear', 'bear', 'ayı', '🐻', 'The bear is brown.', 'Ayı kahverengi.');
w('panda', 'panda', 'panda', '🐼', 'The panda eats bamboo.', 'Panda bambu yer.');
w('hippo', 'hippo', 'su aygırı', '🦛', 'The hippo is in the water.', 'Su aygırı suyun içinde.');
w('crocodile', 'crocodile', 'timsah', '🐊', 'The crocodile is green.', 'Timsah yeşil.');
w('penguin', 'penguin', 'penguen', '🐧', 'The penguin can swim.', 'Penguen yüzebilir.');
w('parrot', 'parrot', 'papağan', '🦜', 'The parrot can talk.', 'Papağan konuşabilir.');

/* ------------------------------------------------------------ SOKAK */
w('house', 'house', 'ev', '🏠', 'This is my house.', 'Bu benim evim.');
w('school', 'school', 'okul', '🏫', 'I go to school.', 'Okula giderim.');
w('hospital', 'hospital', 'hastane', '🏥', 'The doctor is in the hospital.', 'Doktor hastanede.');
w('shop', 'shop', 'dükkan', '🏪', 'Let’s go to the shop.', 'Hadi dükkana gidelim.');
w('trafficlight', 'traffic light', 'trafik ışığı', '🚦', 'Red means stop!', 'Kırmızı dur demek!');
w('car', 'car', 'araba', '🚗', 'The car is red.', 'Araba kırmızı.');
w('bus', 'bus', 'otobüs', '🚌', 'I go to school by bus.', 'Okula otobüsle giderim.');
w('taxi', 'taxi', 'taksi', '🚕', 'The taxi is yellow.', 'Taksi sarı.');
w('truck', 'truck', 'kamyon', '🚚', 'The truck is big.', 'Kamyon büyük.');
w('policecar', 'police car', 'polis arabası', '🚓', 'This is a police car.', 'Bu bir polis arabası.');
w('ambulance', 'ambulance', 'ambulans', '🚑', 'The ambulance is fast.', 'Ambulans hızlı.');
w('firetruck', 'fire truck', 'itfaiye aracı', '🚒', 'The fire truck is red.', 'İtfaiye aracı kırmızı.');
w('motorbike', 'motorbike', 'motosiklet', '🏍️', 'The motorbike is fast.', 'Motosiklet hızlı.');
w('plane', 'plane', 'uçak', '✈️', 'The plane is in the sky.', 'Uçak gökyüzünde.');
w('helicopter', 'helicopter', 'helikopter', '🚁', 'I can see a helicopter.', 'Bir helikopter görüyorum.');

/* ------------------------------------------------------------ PLAJ */
w('sea', 'sea', 'deniz', '🌊', 'The sea is blue.', 'Deniz mavi.');
w('boat', 'boat', 'tekne', '⛵', 'The boat is on the sea.', 'Tekne denizde.');
w('ship', 'ship', 'gemi', '🚢', 'The ship is big.', 'Gemi büyük.');
w('dolphin', 'dolphin', 'yunus', '🐬', 'The dolphin can jump.', 'Yunus zıplayabilir.');
w('fish', 'fish', 'balık', '🐟', 'The fish can swim.', 'Balık yüzebilir.');
w('octopus', 'octopus', 'ahtapot', '🐙', 'The octopus has eight legs.', 'Ahtapotun sekiz bacağı var.');
w('umbrella', 'umbrella', 'şemsiye', '☂️', 'Take your umbrella!', 'Şemsiyeni al!');
w('shell', 'shell', 'deniz kabuğu', '🐚', 'I can see a shell.', 'Bir deniz kabuğu görüyorum.');
w('crab', 'crab', 'yengeç', '🦀', 'The crab is red.', 'Yengeç kırmızı.');
w('sunglasses', 'sunglasses', 'güneş gözlüğü', '🕶️', 'I have sunglasses.', 'Güneş gözlüğüm var.');
w('hat', 'hat', 'şapka', '👒', 'Put on your hat.', 'Şapkanı tak.');
w('castle', 'sandcastle', 'kumdan kale', '🏰', 'I make a sandcastle.', 'Kumdan kale yaparım.');

/* ------------------------------------------------------------ BEN VE DÜNYAM */
// Renkler
w('red', 'red', 'kırmızı', 'color:#EF3B3B', 'The apple is red.', 'Elma kırmızı.');
w('blue', 'blue', 'mavi', 'color:#2F7BF5', 'The sea is blue.', 'Deniz mavi.');
w('yellow', 'yellow', 'sarı', 'color:#FFCC1A', 'The sun is yellow.', 'Güneş sarı.');
w('green', 'green', 'yeşil', 'color:#35B84A', 'The tree is green.', 'Ağaç yeşil.');
w('c_orange', 'orange', 'turuncu', 'color:#FF8A1F', 'The carrot is orange.', 'Havuç turuncu.');
w('purple', 'purple', 'mor', 'color:#8E4FE0', 'The grapes are purple.', 'Üzümler mor.');
w('pink', 'pink', 'pembe', 'color:#FF6FB5', 'The flower is pink.', 'Çiçek pembe.');
w('black', 'black', 'siyah', 'color:#2A2A33', 'The cat is black.', 'Kedi siyah.');
w('white', 'white', 'beyaz', 'color:#FFFFFF', 'The cloud is white.', 'Bulut beyaz.');
w('brown', 'brown', 'kahverengi', 'color:#8B5A2B', 'The bear is brown.', 'Ayı kahverengi.');
// Sayılar
w('one', 'one', 'bir', 'num:1:🍎', 'One apple.', 'Bir elma.');
w('two', 'two', 'iki', 'num:2:🐤', 'Two chicks.', 'İki civciv.');
w('three', 'three', 'üç', 'num:3:⭐', 'Three stars.', 'Üç yıldız.');
w('four', 'four', 'dört', 'num:4:🍓', 'Four strawberries.', 'Dört çilek.');
w('five', 'five', 'beş', 'num:5:🎈', 'Five balloons.', 'Beş balon.');
w('six', 'six', 'altı', 'num:6:🐟', 'Six fish.', 'Altı balık.');
w('seven', 'seven', 'yedi', 'num:7:🌸', 'Seven flowers.', 'Yedi çiçek.');
w('eight', 'eight', 'sekiz', 'num:8:🍪', 'Eight cookies.', 'Sekiz kurabiye.');
w('nine', 'nine', 'dokuz', 'num:9:🦋', 'Nine butterflies.', 'Dokuz kelebek.');
w('ten', 'ten', 'on', 'num:10:⚽', 'Ten balls.', 'On top.');
// Vücudum
w('face', 'face', 'yüz', '🙂', 'This is my face.', 'Bu benim yüzüm.');
w('eye', 'eye', 'göz', '👁️', 'I have two eyes.', 'İki gözüm var.');
w('ear', 'ear', 'kulak', '👂', 'I have two ears.', 'İki kulağım var.');
w('nose', 'nose', 'burun', '👃', 'Touch your nose!', 'Burnuna dokun!');
w('mouth', 'mouth', 'ağız', '👄', 'Open your mouth.', 'Ağzını aç.');
w('tooth', 'tooth', 'diş', '🦷', 'Brush your teeth!', 'Dişlerini fırçala!');
w('hand', 'hand', 'el', '✋', 'Clap your hands!', 'Ellerini çırp!');
w('arm', 'arm', 'kol', '💪', 'My arm is strong.', 'Kolum güçlü.');
w('leg', 'leg', 'bacak', '🦵', 'I have two legs.', 'İki bacağım var.');
w('foot', 'foot', 'ayak', '🦶', 'Stamp your feet!', 'Ayaklarını yere vur!');
// Duygular
w('happy', 'happy', 'mutlu', '😄', 'I am happy.', 'Mutluyum.');
w('sad', 'sad', 'üzgün', '😢', 'I am sad.', 'Üzgünüm.');
w('angry', 'angry', 'kızgın', '😠', 'I am angry.', 'Kızgınım.');
w('scared', 'scared', 'korkmuş', '😨', 'I am scared.', 'Korkuyorum.');
w('sleepy', 'sleepy', 'uykulu', '🥱', 'I am sleepy.', 'Uykum var.');
w('hungry', 'hungry', 'aç', '😋', 'I am hungry.', 'Acıktım.');
w('sick', 'sick', 'hasta', '🤒', 'I am sick.', 'Hastayım.');
w('hot', 'hot', 'sıcak', '🥵', 'I am hot.', 'Sıcakladım.');
w('cold', 'cold', 'soğuk', '🥶', 'I am cold.', 'Üşüdüm.');
w('surprised', 'surprised', 'şaşkın', '😮', 'Wow! I am surprised.', 'Vay! Çok şaşırdım.');
// Ailem
w('mother', 'mother', 'anne', '👩', 'This is my mother.', 'Bu benim annem.');
w('father', 'father', 'baba', '👨', 'This is my father.', 'Bu benim babam.');
w('sister', 'sister', 'kız kardeş', '👧', 'This is my sister.', 'Bu benim kız kardeşim.');
w('brother', 'brother', 'erkek kardeş', '👦', 'This is my brother.', 'Bu benim erkek kardeşim.');
w('baby', 'baby', 'bebek', '👶', 'The baby is sleeping.', 'Bebek uyuyor.');
w('grandmother', 'grandmother', 'büyükanne', '👵', 'I love my grandmother.', 'Büyükannemi seviyorum.');
w('grandfather', 'grandfather', 'büyükbaba', '👴', 'I love my grandfather.', 'Büyükbabamı seviyorum.');
w('family', 'family', 'aile', '👨‍👩‍👧‍👦', 'This is my family.', 'Bu benim ailem.');
// Hava durumu
w('sunny', 'sunny', 'güneşli', '🌞', 'It is sunny.', 'Hava güneşli.');
w('rainy', 'rainy', 'yağmurlu', '🌧️', 'It is rainy.', 'Hava yağmurlu.');
w('cloudy', 'cloudy', 'bulutlu', '🌥️', 'It is cloudy.', 'Hava bulutlu.');
w('snowy', 'snowy', 'karlı', '🌨️', 'It is snowy.', 'Hava karlı.');
w('windy', 'windy', 'rüzgarlı', '🌬️', 'It is windy.', 'Hava rüzgarlı.');
w('stormy', 'stormy', 'fırtınalı', '⛈️', 'It is stormy.', 'Hava fırtınalı.');
w('rainbow', 'rainbow', 'gökkuşağı', '🌈', 'Look! A rainbow!', 'Bak! Bir gökkuşağı!');
w('snowman', 'snowman', 'kardan adam', '☃️', 'I make a snowman.', 'Kardan adam yaparım.');
// Kıyafetler
w('tshirt', 'T-shirt', 'tişört', '👕', 'My T-shirt is blue.', 'Tişörtüm mavi.');
w('dress', 'dress', 'elbise', '👗', 'This is a nice dress.', 'Bu güzel bir elbise.');
w('trousers', 'trousers', 'pantolon', '👖', 'Put on your trousers.', 'Pantolonunu giy.');
w('shorts', 'shorts', 'şort', '🩳', 'I wear shorts in summer.', 'Yazın şort giyerim.');
w('coat', 'coat', 'mont', '🧥', 'Put on your coat. It is cold!', 'Montunu giy. Hava soğuk!');
w('shoes', 'shoes', 'ayakkabı', '👟', 'Put on your shoes.', 'Ayakkabılarını giy.');
w('socks', 'socks', 'çorap', '🧦', 'My socks are red.', 'Çoraplarım kırmızı.');
w('gloves', 'gloves', 'eldiven', '🧤', 'I wear gloves in winter.', 'Kışın eldiven giyerim.');
w('scarf', 'scarf', 'atkı', '🧣', 'This is my scarf.', 'Bu benim atkım.');
w('boots', 'boots', 'bot', '🥾', 'I have new boots.', 'Yeni botlarım var.');
w('glasses', 'glasses', 'gözlük', '👓', 'Grandpa has glasses.', 'Dedemin gözlüğü var.');
// Hareketler
w('run', 'run', 'koşmak', '🏃', 'I can run.', 'Koşabilirim.');
w('walk', 'walk', 'yürümek', '🚶', 'I walk to school.', 'Okula yürürüm.');
w('jump', 'jump', 'zıplamak', '🤸', 'I can jump.', 'Zıplayabilirim.');
w('swim', 'swim', 'yüzmek', '🏊', 'I can swim.', 'Yüzebilirim.');
w('dance', 'dance', 'dans etmek', '💃', 'Let’s dance!', 'Hadi dans edelim!');
w('sing', 'sing', 'şarkı söylemek', '🧑‍🎤', 'I like to sing.', 'Şarkı söylemeyi severim.');
w('read', 'read', 'okumak', '📖', 'I can read.', 'Okuyabilirim.');
w('write', 'write', 'yazmak', '✍️', 'I write my name.', 'Adımı yazarım.');
w('draw', 'draw', 'resim çizmek', '🎨', 'I like to draw.', 'Resim çizmeyi severim.');
w('eat', 'eat', 'yemek yemek', '🍴', 'I eat breakfast.', 'Kahvaltı yaparım.');
w('drink', 'drink', 'içmek', '🥤', 'I drink water.', 'Su içerim.');
w('sleep', 'sleep', 'uyumak', '😴', 'I sleep at night.', 'Gece uyurum.');
w('climb', 'climb', 'tırmanmak', '🧗', 'I can climb.', 'Tırmanabilirim.');
w('cook', 'cook', 'yemek pişirmek', '🧑‍🍳', 'Dad can cook.', 'Babam yemek pişirebilir.');
w('clap', 'clap', 'alkışlamak', '👏', 'Clap your hands!', 'Ellerini çırp!');

/* ------------------------------------------------------------ MAHALLELER / KONULAR
 * Sahne nesnesi: [kelimeId, x (orta, %), y (alt kenar, %), genişlik (% sahne), görsel?]
 */
const TOPICS = [
  // ---- Evim
  { id: 'kitchen', group: 'home', tr: 'Mutfak', en: 'Kitchen', icon: '🍳', type: 'scene', bg: 'kitchen', color: '#FFB547',
    items: [
      ['window', 50, 40, 13], ['fridge', 10, 93, 15], ['oven', 27, 92, 14], ['sink', 45, 92, 17],
      ['table', 72, 94, 26], ['chair', 91, 96, 12],
      ['pan', 27, 72.5, 9], ['teapot', 64, 71, 8], ['cup', 72, 71, 6.5], ['spoon', 80, 71, 6],
      ['bowl', 77, 33, 7], ['plate', 88, 33, 7.5],
    ] },
  { id: 'bedroom', group: 'home', tr: 'Yatak Odası', en: 'Bedroom', icon: '🛏️', type: 'scene', bg: 'bedroom', color: '#9B8CFF',
    items: [
      ['window', 50, 40, 13], ['picture', 22, 36, 12], ['clock', 76, 32, 8],
      ['bed', 24, 96, 34], ['wardrobe', 86, 93, 18], ['lamp', 50, 93, 8],
      ['pillow', 14, 70, 9], ['book', 33, 72, 6], ['teddy', 62, 96, 11], ['ball', 72, 97, 7.5],
    ] },
  { id: 'bathroom', group: 'home', tr: 'Banyo', en: 'Bathroom', icon: '🛁', type: 'scene', bg: 'bathroom', color: '#4FC3F7',
    items: [
      ['shower', 13, 42, 10], ['mirror', 55, 42, 11], ['towel', 72, 50, 8], ['toiletpaper', 94, 66, 6],
      ['bathtub', 22, 96, 32], ['sink', 55, 94, 13, 'svg:basin'], ['toilet', 83, 96, 15],
      ['toothbrush', 50, 65, 6.5], ['soap', 59, 64, 5], ['sponge', 33, 76, 6], ['duck', 18, 78, 7],
    ] },
  { id: 'living', group: 'home', tr: 'Oturma Odası', en: 'Living Room', icon: '🛋️', type: 'scene', bg: 'living', color: '#FF8A65',
    items: [
      ['window', 50, 40, 13], ['picture', 28, 38, 12], ['clock', 72, 30, 7],
      ['sofa', 28, 95, 30], ['tv', 78, 76, 17], ['lamp', 52, 94, 7.5], ['door', 93, 95, 14],
      ['plant', 63, 96, 9], ['guitar', 6, 94, 10], ['cat', 20, 74, 8], ['phone', 37, 75, 5], ['dog', 45, 99, 11],
    ] },
  // ---- Mahallem
  { id: 'school', group: 'town', tr: 'Okul', en: 'School', icon: '🏫', type: 'scene', bg: 'classroom', color: '#6BCB77',
    items: [
      ['board', 42, 50, 40], ['clock', 80, 28, 8], ['globe', 93, 44, 8], ['teacher', 79, 88, 14],
      ['desk', 25, 96, 20], ['desk', 56, 96, 20], ['chair', 9, 97, 9], ['bag', 93, 97, 9],
      ['book', 18, 74, 5], ['notebook', 24, 74, 5], ['pencil', 30, 74, 5],
      ['eraser', 50, 73, 4], ['ruler', 56, 74, 5], ['crayon', 62, 74, 5],
      ['scissors', 34.5, 74, 4.5], ['pen', 66.5, 74, 4],
    ] },
  { id: 'classroom', group: 'town', tr: 'Sınıfım', en: 'My Classroom', icon: '🏫', type: 'scene', bg: 'classroom', color: '#5C9DFF',
    selectable: true, selKey: 'classItems', selTab: 'class', // veli panelinden hangi eşyaların öğretileceği seçilir
    // destek: seçilmese bile süs olarak çizilir (üstündeki eşyalar havada kalmasın)
    supports: ['bookcase', 'teacherdesk', 'desk'],
    items: [
      ['window', 7, 42, 10], ['bell', 16, 20, 4.5], ['board', 35, 48, 30], ['map', 56, 40, 9], ['clock', 56, 20, 5.5],
      ['calendar', 65, 42, 6], ['flag', 72, 34, 6.5], ['ataturkcorner', 86, 52, 20], ['locker', 50, 73, 13],
      ['bookcase', 8, 95, 13], ['plant', 8, 61.5, 6], ['door', 95, 95, 10],
      ['teacher', 71, 80, 12], ['teacherdesk', 72, 95, 22],
      ['computer', 64.5, 78.5, 6.5], ['paper', 69.5, 78, 4], ['pen', 73, 78, 3.5], ['scissors', 76.5, 78, 4], ['globe', 80.5, 78, 5],
      ['bin', 88, 98, 6],
      ['student', 24, 82, 10], ['desk', 24, 98, 17], ['desk', 46, 98, 18],
      ['book', 18, 79, 4.2], ['notebook', 22.5, 79, 4.2], ['pencilcase', 27.5, 79, 5], ['pencil', 31.5, 79, 3.5],
      ['eraser', 39.5, 79, 3.5], ['sharpener', 43, 79, 3.5], ['crayon', 46.5, 79, 3.5], ['ruler', 50.5, 79, 4.5], ['glue', 54, 79, 3],
      ['bag', 34.5, 99, 6], ['chair', 59, 99, 7],
    ] },
  { id: 'schoolyard', group: 'town', tr: 'Okul Bahçesi', en: 'School Yard', icon: '🛝', type: 'scene', bg: 'schoolyard', color: '#7ED957',
    selectable: true, selKey: 'yardItems', selTab: 'yard',
    items: [
      ['sun', 91, 20, 8], ['cloud', 64, 18, 10], ['bird', 16, 16, 5],
      ['tree', 6, 64, 13], ['school', 27, 60, 20], ['flagpole', 44, 63, 7], ['canteen', 60, 61, 13], ['gate', 86, 62, 17],
      ['slide', 21, 77, 11], ['hoop', 6, 86, 9], ['swing', 38, 79, 10], ['bench', 53, 79, 12], ['schoolbus', 73, 74, 14], ['bin', 96, 78, 4.5],
      ['hopscotch', 33, 93, 18], ['seesaw', 62, 92, 15], ['goal', 87, 93, 18],
      ['basketball', 14, 90, 4.5], ['ball', 77, 97, 5], ['rope', 47, 97, 6.5], ['bicycle', 19, 99, 9], ['flower', 3, 98, 4],
    ] },
  { id: 'park', group: 'town', tr: 'Park', en: 'Park', icon: '🌳', type: 'scene', bg: 'park', color: '#7ED957',
    items: [
      ['sun', 88, 26, 10], ['cloud', 20, 24, 12], ['kite', 58, 30, 8], ['bird', 38, 30, 6],
      ['tree', 11, 80, 20], ['swing', 31, 82, 15], ['bench', 50, 82, 17], ['slide', 75, 82, 18],
      ['balloon', 44, 52, 5], ['butterfly', 64, 58, 6], ['flower', 25, 96, 6], ['flower', 60, 98, 5],
      ['icecream', 50, 71, 4.5], ['ball', 40, 97, 7], ['bicycle', 89, 97, 13],
    ] },
  { id: 'market', group: 'town', tr: 'Market', en: 'Market', icon: '🛒', type: 'scene', bg: 'market', color: '#FF6B9A',
    items: [
      ['apple', 13, 31, 9], ['banana', 26, 31, 10], ['orange', 39, 31, 9], ['grapes', 52, 31, 9],
      ['strawberry', 65, 31, 9], ['watermelon', 80, 31, 12],
      ['tomato', 13, 58, 9], ['carrot', 26, 58, 9], ['potato', 39, 58, 9], ['bread', 52, 58, 10],
      ['cheese', 65, 58, 9], ['egg', 76, 58, 7], ['milk', 87, 58, 8],
      ['cart', 50, 97, 17],
    ] },
  { id: 'street', group: 'town', tr: 'Sokak', en: 'Street', icon: '🚦', type: 'scene', bg: 'street', color: '#90A4AE',
    items: [
      ['plane', 62, 20, 9], ['helicopter', 24, 22, 8],
      ['house', 10, 63, 14], ['school', 31, 63, 16], ['hospital', 53, 63, 15], ['shop', 74, 63, 14], ['trafficlight', 91, 68, 6],
      ['car', 12, 84, 12], ['bus', 37, 84, 16], ['truck', 63, 84, 14], ['ambulance', 87, 84, 12],
      ['taxi', 18, 99, 12], ['policecar', 44, 99, 12], ['firetruck', 70, 99, 14], ['motorbike', 92, 99, 10],
    ] },
  // ---- Doğa
  { id: 'farm', group: 'nature', tr: 'Çiftlik', en: 'Farm', icon: '🚜', type: 'scene', bg: 'farm', color: '#C49A6C',
    items: [
      ['tractor', 56, 66, 13], ['farmer', 70, 80, 10], ['donkey', 33, 70, 11],
      ['cow', 18, 88, 16], ['horse', 44, 86, 15], ['sheep', 63, 93, 12], ['goat', 84, 93, 11],
      ['chicken', 7, 97, 8], ['chick', 14, 99, 4.5], ['rabbit', 50, 99, 7], ['turkey', 94, 99, 8],
    ] },
  { id: 'zoo', group: 'nature', tr: 'Hayvanat Bahçesi', en: 'Zoo', icon: '🦁', type: 'scene', bg: 'zoo', color: '#FFC94A',
    items: [
      ['parrot', 70, 30, 6], ['monkey', 89, 46, 8],
      ['giraffe', 12, 80, 16], ['elephant', 31, 80, 18], ['lion', 50, 80, 13], ['zebra', 68, 80, 13],
      ['tiger', 18, 99, 14], ['bear', 36, 99, 11], ['panda', 52, 99, 11], ['penguin', 64, 99, 7],
      ['hippo', 78, 98, 12], ['crocodile', 92, 99, 12],
    ] },
  { id: 'beach', group: 'nature', tr: 'Plaj', en: 'Beach', icon: '🏖️', type: 'scene', bg: 'beach', color: '#4DD0E1',
    items: [
      ['sun', 86, 22, 10], ['ship', 74, 50, 12], ['boat', 48, 52, 9], ['dolphin', 30, 58, 9],
      ['sea', 12, 60, 10], ['fish', 61, 61, 6], ['octopus', 92, 63, 7],
      ['umbrella', 18, 92, 16, '⛱️'], ['castle', 90, 97, 10], ['shell', 38, 96, 5.5], ['crab', 52, 97, 8],
      ['sunglasses', 66, 91, 7], ['hat', 77, 93, 8], ['icecream', 30, 90, 5],
    ] },
  // ---- Ben ve Dünyam (kartlar)
  { id: 'colors', group: 'me', tr: 'Renkler', en: 'Colors', icon: '🎨', type: 'cards', color: '#FF7AA2',
    items: ['red', 'blue', 'yellow', 'green', 'c_orange', 'purple', 'pink', 'black', 'white', 'brown'] },
  { id: 'numbers', group: 'me', tr: 'Sayılar', en: 'Numbers', icon: '🔢', type: 'cards', color: '#5C9DFF',
    items: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'] },
  { id: 'body', group: 'me', tr: 'Vücudum', en: 'My Body', icon: '🙂', type: 'cards', color: '#FFB86B',
    items: ['face', 'eye', 'ear', 'nose', 'mouth', 'tooth', 'hand', 'arm', 'leg', 'foot'] },
  { id: 'feelings', group: 'me', tr: 'Duygular', en: 'Feelings', icon: '😄', type: 'cards', color: '#FFD54F',
    items: ['happy', 'sad', 'angry', 'scared', 'sleepy', 'hungry', 'sick', 'hot', 'cold', 'surprised'] },
  { id: 'family', group: 'me', tr: 'Ailem', en: 'My Family', icon: '👨‍👩‍👧‍👦', type: 'cards', color: '#F48FB1',
    items: ['mother', 'father', 'sister', 'brother', 'baby', 'grandmother', 'grandfather', 'family'] },
  { id: 'weather', group: 'me', tr: 'Hava Durumu', en: 'Weather', icon: '🌈', type: 'cards', color: '#81D4FA',
    items: ['sunny', 'rainy', 'cloudy', 'snowy', 'windy', 'stormy', 'rainbow', 'snowman', 'umbrella'] },
  { id: 'clothes', group: 'me', tr: 'Kıyafetler', en: 'Clothes', icon: '👕', type: 'cards', color: '#80CBC4',
    items: ['tshirt', 'dress', 'trousers', 'shorts', 'coat', 'hat', 'shoes', 'socks', 'gloves', 'scarf', 'boots', 'glasses'] },
  { id: 'actions', group: 'me', tr: 'Hareketler', en: 'Actions', icon: '🏃', type: 'cards', color: '#B39DDB',
    items: ['run', 'walk', 'jump', 'swim', 'dance', 'sing', 'read', 'write', 'draw', 'eat', 'drink', 'sleep', 'climb', 'cook', 'clap'] },
];

const GROUPS = [
  { id: 'home', tr: 'Evim', icon: '🏠' },
  { id: 'town', tr: 'Mahallem', icon: '🏘️' },
  { id: 'nature', tr: 'Doğa', icon: '🌳' },
  { id: 'me', tr: 'Ben ve Dünyam', icon: '🌟' },
];

/* ------------------------------------------------------------ CÜMLE KALIPLARI
 * Sahne oyuncusu: [görsel, x, y(alt %), genişlik, animasyon, gecikme(sn)]
 * Cümlede *kelime* → boşluk doldurma için anahtar kelime
 * intro: Bubu'nun Türkçe anlatımı; [köşeli] kısımlar İngilizce okunur
 */
const LESSONS = [
  { id: 'hello', icon: '👋', tr: 'Merhaba!', en: 'Hello!', color: '#FFB547',
    intro: 'Selamlaşmayı öğrenelim! Biriyle karşılaşınca [Hello] deriz.',
    slides: [
      { en: '*Hello*!', tr: 'Merhaba!', a: [['👋', 50, 80, 26, 'wave']] },
      { en: 'Good *morning*!', tr: 'Günaydın!', a: [['🌅', 50, 82, 28, 'rise']] },
      { en: 'My *name* is Bubu.', tr: 'Benim adım Bubu.', a: [['🦉', 50, 85, 26, 'bounce']] },
      { en: 'What is your *name*?', tr: 'Senin adın ne?', a: [['🦉', 30, 85, 20, 'bounce'], ['🧒', 70, 85, 20, 'pop', .4], ['❓', 70, 30, 9, 'pop', .8]] },
      { en: 'Nice to *meet* you!', tr: 'Tanıştığıma memnun oldum!', a: [['🤝', 50, 80, 26, 'pulse']] },
      { en: 'Good *night*!', tr: 'İyi geceler!', a: [['🌙', 35, 60, 18, 'float'], ['😴', 62, 85, 22, 'sleep']] },
      { en: '*Goodbye*!', tr: 'Hoşça kal!', a: [['👋', 50, 80, 26, 'wave']] },
    ] },
  { id: 'howareyou', icon: '😄', tr: 'Nasılsın?', en: 'How are you?', color: '#FFD54F',
    intro: 'Birine nasıl olduğunu sormak için [How are you?] deriz. Duygularımızı da [I am] ile anlatırız.',
    slides: [
      { en: 'How are *you*?', tr: 'Nasılsın?', a: [['🦉', 50, 85, 24, 'bounce'], ['❓', 68, 30, 9, 'pop', .4]] },
      { en: 'I am *fine*, thank you.', tr: 'İyiyim, teşekkür ederim.', a: [['😊', 50, 82, 26, 'pop'], ['👍', 75, 70, 12, 'pop', .5]] },
      { en: 'I am *happy*.', tr: 'Mutluyum.', a: [['😄', 50, 82, 28, 'jump']] },
      { en: 'I am *sad*.', tr: 'Üzgünüm.', a: [['😢', 50, 82, 28, 'shake']] },
      { en: 'I am *hungry*.', tr: 'Acıktım.', a: [['😋', 40, 82, 24, 'pop'], ['🍔', 70, 78, 16, 'bounce', .5]] },
      { en: 'I am *sleepy*.', tr: 'Uykum var.', a: [['🥱', 50, 82, 26, 'sleep']] },
    ] },
  { id: 'thisis', icon: '👉', tr: 'Bu bir ...', en: 'This is a ...', color: '#6BCB77',
    intro: 'Bir şeyi göstermek için [This is a] deriz. Yakındaki şey için [this], uzaktaki için [that] kullanırız.',
    slides: [
      { en: 'This is a *cat*.', tr: 'Bu bir kedi.', a: [['👉', 22, 70, 14, 'point'], ['🐈', 58, 88, 28, 'pop', .3]] },
      { en: 'This is a *ball*.', tr: 'Bu bir top.', a: [['👉', 22, 70, 14, 'point'], ['⚽', 58, 85, 22, 'bounce', .3]] },
      { en: 'This is an *apple*.', tr: 'Bu bir elma.', a: [['👉', 22, 70, 14, 'point'], ['🍎', 58, 85, 22, 'pop', .3]] },
      { en: 'That is a *car*.', tr: 'Şu bir araba.', a: [['👉', 15, 70, 12, 'point'], ['🚗', 80, 60, 10, 'far', .3]] },
      { en: 'What is this? It is a *dog*.', tr: 'Bu ne? Bu bir köpek.', a: [['❓', 30, 40, 12, 'pop'], ['🐕', 60, 88, 26, 'pop', .8]] },
    ] },
  { id: 'ihave', icon: '🎒', tr: 'Benim ... var', en: 'I have ...', color: '#4FC3F7',
    intro: 'Sahip olduğumuz şeyleri [I have] ile söyleriz. [I have a bag] demek, bir çantam var demektir.',
    slides: [
      { en: 'I have a *bag*.', tr: 'Bir çantam var.', a: [['🧒', 35, 88, 24, 'pop'], ['🎒', 65, 85, 18, 'pop', .4]] },
      { en: 'I have a *dog*.', tr: 'Bir köpeğim var.', a: [['🧒', 35, 88, 24, 'pop'], ['🐕', 65, 88, 20, 'walk', .3]] },
      { en: 'I have two *apples*.', tr: 'İki elmam var.', a: [['🍎', 38, 80, 16, 'count', .2], ['🍎', 62, 80, 16, 'count', .8]] },
      { en: 'I have three *balloons*.', tr: 'Üç balonum var.', a: [['🎈', 30, 70, 14, 'count', .2], ['🎈', 50, 65, 14, 'count', .8], ['🎈', 70, 70, 14, 'count', 1.4]] },
      { en: 'I don’t have a *cat*.', tr: 'Kedim yok.', a: [['🐈', 50, 85, 24, 'pop'], ['❌', 50, 75, 26, 'pop', .6]] },
    ] },
  { id: 'ilike', icon: '❤️', tr: 'Severim', en: 'I like ...', color: '#FF6B9A',
    intro: 'Sevdiğimiz şeyleri [I like] ile, sevmediklerimizi [I don\'t like] ile söyleriz.',
    slides: [
      { en: 'I like *strawberries*.', tr: 'Çilek severim.', a: [['🍓', 45, 85, 24, 'pop'], ['❤️', 70, 45, 12, 'heart', .5]] },
      { en: 'I like *ice cream*.', tr: 'Dondurma severim.', a: [['🍦', 45, 88, 24, 'pop'], ['❤️', 70, 45, 12, 'heart', .5]] },
      { en: 'I like *cats*.', tr: 'Kedileri severim.', a: [['🐈', 45, 88, 26, 'pop'], ['❤️', 72, 45, 12, 'heart', .5]] },
      { en: 'I don’t like *carrots*.', tr: 'Havuç sevmem.', a: [['🥕', 45, 85, 24, 'pop'], ['👎', 72, 55, 14, 'shake', .5]] },
      { en: 'Do you like *bananas*? Yes, I do!', tr: 'Muz sever misin? Evet, severim!', a: [['🍌', 40, 85, 22, 'pop'], ['😄', 70, 80, 18, 'jump', .8]] },
    ] },
  { id: 'colors', icon: '🎨', tr: 'Ne renk?', en: 'What color is it?', color: '#FF7AA2',
    intro: 'Bir şeyin rengini sormak için [What color is it?] deriz. Cevap: [It is red.]',
    slides: [
      { en: 'What color is it? It is *red*.', tr: 'Ne renk? Kırmızı.', a: [['🍎', 50, 85, 26, 'pop']] },
      { en: 'The banana is *yellow*.', tr: 'Muz sarı.', a: [['🍌', 50, 85, 26, 'pop']] },
      { en: 'The frog is *green*.', tr: 'Kurbağa yeşil.', a: [['🐸', 50, 88, 26, 'jump']] },
      { en: 'The whale is *blue*.', tr: 'Balina mavi.', a: [['🐳', 50, 85, 30, 'swim']] },
      { en: 'The grapes are *purple*.', tr: 'Üzümler mor.', a: [['🍇', 50, 85, 24, 'pop']] },
    ] },
  { id: 'howmany', icon: '🔢', tr: 'Kaç tane?', en: 'How many?', color: '#5C9DFF',
    intro: 'Saymak için [How many?] diye sorarız. [There are three] demek, üç tane var demektir.',
    slides: [
      { en: 'How many? *One* sun.', tr: 'Kaç tane? Bir güneş.', a: [['☀️', 50, 80, 26, 'count', .2]] },
      { en: '*Two* cats.', tr: 'İki kedi.', a: [['🐈', 35, 88, 22, 'count', .2], ['🐈', 65, 88, 22, 'count', .8]] },
      { en: 'There are *three* fish.', tr: 'Üç balık var.', a: [['🐟', 25, 75, 16, 'count', .2], ['🐟', 50, 70, 16, 'count', .8], ['🐟', 75, 75, 16, 'count', 1.4]] },
      { en: 'There are *four* stars.', tr: 'Dört yıldız var.', a: [['⭐', 20, 60, 13, 'count', .2], ['⭐', 40, 75, 13, 'count', .7], ['⭐', 60, 60, 13, 'count', 1.2], ['⭐', 80, 75, 13, 'count', 1.7]] },
      { en: 'There are *five* balloons.', tr: 'Beş balon var.', a: [['🎈', 15, 70, 11, 'count', .2], ['🎈', 32, 60, 11, 'count', .6], ['🎈', 50, 70, 11, 'count', 1], ['🎈', 68, 60, 11, 'count', 1.4], ['🎈', 85, 70, 11, 'count', 1.8]] },
    ] },
  { id: 'whereis', icon: '📦', tr: 'Nerede?', en: 'Where is it?', color: '#C49A6C',
    intro: 'Bir şeyin yerini sormak için [Where is the cat?] deriz. [in] içinde, [on] üstünde, [under] altında demektir.',
    slides: [
      { en: 'The cat is *in* the box.', tr: 'Kedi kutunun içinde.', a: [['🐈', 50, 66, 16, 'dropin'], ['📦', 50, 92, 22, 'none']] },
      { en: 'The cat is *on* the box.', tr: 'Kedi kutunun üstünde.', a: [['📦', 50, 92, 22, 'none'], ['🐈', 50, 47, 16, 'drop']] },
      { en: 'The ball is *under* the table.', tr: 'Top masanın altında.', a: [['svg:table', 50, 92, 46, 'none'], ['⚽', 50, 92, 12, 'rollin']] },
      { en: 'The dog is *next* to the cat.', tr: 'Köpek kedinin yanında.', a: [['🐈', 38, 90, 20, 'pop'], ['🐕', 64, 90, 22, 'walk', .4]] },
      { en: 'Where is the cat? It is *on* the bed.', tr: 'Kedi nerede? Yatağın üstünde.', a: [['🛏️', 50, 95, 36, 'none'], ['🐈', 56, 58, 14, 'drop', .6]] },
    ] },
  { id: 'ican', icon: '🏃', tr: 'Yapabilirim', en: 'I can ...', color: '#B39DDB',
    intro: 'Yapabildiğimiz şeyleri [I can] ile söyleriz. Yapamadıklarımızı [I can\'t] ile söyleriz.',
    slides: [
      { en: 'I can *run*.', tr: 'Koşabilirim.', a: [['🏃', 50, 88, 22, 'runacross']] },
      { en: 'I can *jump*.', tr: 'Zıplayabilirim.', a: [['🤸', 50, 88, 24, 'jump']] },
      { en: 'I can *swim*.', tr: 'Yüzebilirim.', a: [['🏊', 50, 85, 26, 'swim']] },
      { en: 'Birds can *fly*.', tr: 'Kuşlar uçabilir.', a: [['🐦', 50, 50, 18, 'flyacross']] },
      { en: 'A fish can’t *walk*.', tr: 'Balık yürüyemez.', a: [['🐟', 45, 85, 22, 'swim'], ['❌', 72, 60, 12, 'pop', .6]] },
      { en: 'Can you *dance*? Yes, I can!', tr: 'Dans edebilir misin? Evet, edebilirim!', a: [['💃', 50, 88, 26, 'dance']] },
    ] },
  { id: 'please', icon: '🙏', tr: 'Lütfen & Teşekkürler', en: 'Please & Thank you', color: '#80CBC4',
    intro: 'Kibar olmak çok güzel! Bir şey isterken [please], alınca [thank you] deriz.',
    slides: [
      { en: 'Can I have a *cookie*, please?', tr: 'Bir kurabiye alabilir miyim, lütfen?', a: [['🧒', 30, 88, 22, 'pop'], ['🍪', 68, 80, 16, 'bounce', .4]] },
      { en: 'Here you *are*.', tr: 'Buyurun.', a: [['🤲', 40, 82, 20, 'pop'], ['🍪', 62, 70, 14, 'slide', .3]] },
      { en: 'Thank *you*!', tr: 'Teşekkür ederim!', a: [['😊', 50, 82, 26, 'pop'], ['💖', 72, 40, 12, 'heart', .5]] },
      { en: 'You are *welcome*.', tr: 'Rica ederim.', a: [['🦉', 50, 85, 24, 'bounce']] },
      { en: 'I am *sorry*!', tr: 'Özür dilerim!', a: [['😔', 50, 82, 26, 'pop']] },
    ] },
  { id: 'iwant', icon: '⚽', tr: 'İstiyorum / Hadi!', en: 'I want to ... / Let’s ...', color: '#7ED957',
    intro: 'Bir şey yapmak istediğimizde [I want to] deriz. Arkadaşımızı davet etmek için [Let\'s] deriz.',
    slides: [
      { en: 'I want to *play*.', tr: 'Oynamak istiyorum.', a: [['⚽', 50, 88, 22, 'bounce']] },
      { en: 'I want to *eat*.', tr: 'Yemek yemek istiyorum.', a: [['🍝', 50, 85, 24, 'pop']] },
      { en: 'I want to *sleep*.', tr: 'Uyumak istiyorum.', a: [['😴', 50, 85, 24, 'sleep']] },
      { en: 'Let’s *dance*!', tr: 'Hadi dans edelim!', a: [['💃', 35, 88, 22, 'dance'], ['🕺', 65, 88, 22, 'dance', .2]] },
      { en: 'Let’s go to the *park*!', tr: 'Hadi parka gidelim!', a: [['🌳', 70, 85, 26, 'pop'], ['🏃', 25, 88, 16, 'walk', .3]] },
    ] },
  { id: 'myday', icon: '⏰', tr: 'Benim Günüm', en: 'My Day', color: '#FF8A65',
    intro: 'Bir günümüzü anlatalım! Sabah uyanırız, okula gideriz, akşam uyuruz.',
    slides: [
      { en: 'I wake *up*.', tr: 'Uyanırım.', a: [['⏰', 35, 70, 18, 'shake'], ['🌅', 68, 80, 22, 'rise', .3]] },
      { en: 'I brush my *teeth*.', tr: 'Dişlerimi fırçalarım.', a: [['🪥', 50, 82, 22, 'brush']] },
      { en: 'I eat *breakfast*.', tr: 'Kahvaltı yaparım.', a: [['🥣', 35, 85, 18, 'pop'], ['🥚', 55, 82, 12, 'pop', .3], ['🧀', 72, 82, 12, 'pop', .6]] },
      { en: 'I go to *school*.', tr: 'Okula giderim.', a: [['🏫', 70, 85, 28, 'pop'], ['🎒', 25, 85, 14, 'walk', .3]] },
      { en: 'I *play* with my friends.', tr: 'Arkadaşlarımla oynarım.', a: [['🧒', 30, 88, 18, 'jump'], ['⚽', 50, 88, 12, 'bounce'], ['👧', 70, 88, 18, 'jump', .2]] },
      { en: 'I go to *bed*.', tr: 'Yatağa giderim.', a: [['🛏️', 45, 95, 32, 'none'], ['🌙', 80, 40, 12, 'float'], ['💤', 62, 45, 9, 'float']] },
    ] },
  { id: 'weather', icon: '🌦️', tr: 'Hava Nasıl?', en: 'How is the weather?', color: '#81D4FA',
    intro: 'Havayı sormak için [How is the weather?] deriz. Cevap: [It is sunny.]',
    slides: [
      { en: 'How is the weather? It is *sunny*.', tr: 'Hava nasıl? Güneşli.', a: [['🌞', 50, 75, 28, 'spin']] },
      { en: 'It is *rainy*.', tr: 'Hava yağmurlu.', a: [['🌧️', 50, 70, 28, 'shake']] },
      { en: 'It is *snowy*.', tr: 'Hava karlı.', a: [['🌨️', 40, 65, 24, 'float'], ['☃️', 72, 90, 18, 'pop', .4]] },
      { en: 'It is *windy*.', tr: 'Hava rüzgarlı.', a: [['🌬️', 40, 70, 24, 'pulse'], ['🍃', 72, 60, 10, 'flyacross']] },
      { en: 'Take your *umbrella*!', tr: 'Şemsiyeni al!', a: [['☂️', 50, 82, 26, 'bounce']] },
    ] },
  { id: 'family', icon: '👨‍👩‍👧‍👦', tr: 'Bu Benim Ailem', en: 'This is my family', color: '#F48FB1',
    intro: 'Ailemizi tanıtmak için [This is my] deriz. [This is my mother] demek, bu benim annem demektir.',
    slides: [
      { en: 'This is my *mother*.', tr: 'Bu benim annem.', a: [['👩', 50, 88, 26, 'pop']] },
      { en: 'This is my *father*.', tr: 'Bu benim babam.', a: [['👨', 50, 88, 26, 'pop']] },
      { en: 'This is my *sister*.', tr: 'Bu benim kız kardeşim.', a: [['👧', 50, 88, 24, 'pop']] },
      { en: 'This is my *brother*.', tr: 'Bu benim erkek kardeşim.', a: [['👦', 50, 88, 24, 'pop']] },
      { en: 'I love my *family*.', tr: 'Ailemi seviyorum.', a: [['👨‍👩‍👧‍👦', 45, 88, 30, 'pop'], ['❤️', 75, 40, 12, 'heart', .5]] },
    ] },
  { id: 'inclass', icon: '🏫', tr: 'Sınıfta', en: 'In the classroom', color: '#5C9DFF',
    intro: 'Sınıfta öğretmenimiz bize İngilizce komutlar verir. Mesela [Stand up!] ayağa kalk, [Sit down!] otur demektir.',
    slides: [
      { en: 'May I come *in*?', tr: 'Girebilir miyim?', a: [['svg:gate', 25, 92, 30, 'none'], ['🧒', 70, 90, 20, 'walk', .2]] },
      { en: 'Good morning, *teacher*!', tr: 'Günaydın öğretmenim!', a: [['🧑‍🏫', 35, 90, 26, 'pop'], ['👋', 70, 70, 14, 'wave', .4]] },
      { en: 'Stand *up*!', tr: 'Ayağa kalk!', a: [['🧍', 50, 92, 24, 'jump']] },
      { en: 'Sit *down*!', tr: 'Otur!', a: [['🪑', 50, 92, 22, 'none'], ['🧒', 50, 70, 16, 'drop', .3]] },
      { en: 'Open your *book*.', tr: 'Kitabını aç.', a: [['📖', 50, 85, 26, 'pop']] },
      { en: 'Raise your *hand*.', tr: 'Parmak kaldır.', a: [['🙋', 50, 90, 26, 'bounce']] },
      { en: 'Look at the *board*.', tr: 'Tahtaya bak.', a: [['svg:board', 55, 88, 46, 'pop'], ['👀', 15, 60, 12, 'pulse', .4]] },
      { en: 'Put the paper in the *bin*.', tr: 'Kağıdı çöp kutusuna at.', a: [['📄', 30, 50, 10, 'flyacross'], ['🗑️', 65, 90, 16, 'pop']] },
    ] },
  { id: 'inyard', icon: '🛝', tr: 'Teneffüste', en: 'At break time', color: '#7ED957',
    intro: 'Teneffüs zili çaldı! Bahçede arkadaşlarımızla oyun oynarken şu cümleleri kullanırız.',
    slides: [
      { en: 'The *bell* is ringing!', tr: 'Zil çalıyor!', a: [['🔔', 50, 80, 24, 'shake']] },
      { en: 'Let’s go to the *yard*!', tr: 'Hadi bahçeye gidelim!', a: [['🏫', 70, 88, 26, 'pop'], ['🏃', 20, 90, 16, 'runacross']] },
      { en: 'Let’s play *hopscotch*!', tr: 'Hadi seksek oynayalım!', a: [['svg:hopscotch', 50, 90, 50, 'pop'], ['🧒', 30, 80, 14, 'jump', .4]] },
      { en: 'Can I play *with* you?', tr: 'Seninle oynayabilir miyim?', a: [['🧒', 35, 90, 22, 'pop'], ['👧', 65, 90, 22, 'pop', .3]] },
      { en: 'It is my *turn*!', tr: 'Sıra bende!', a: [['svg:swing', 50, 92, 28, 'none'], ['🙋', 50, 50, 12, 'bounce', .3]] },
      { en: 'Kick the *ball*!', tr: 'Topa vur!', a: [['svg:goal', 70, 92, 40, 'none'], ['⚽', 20, 92, 10, 'rollin', .2]] },
      { en: 'Line *up*, please.', tr: 'Sıraya girin lütfen.', a: [['🧒', 25, 90, 16, 'walk'], ['👧', 45, 90, 16, 'walk', .2], ['👦', 65, 90, 16, 'walk', .4]] },
    ] },
  { id: 'simon', icon: '👆', tr: 'Bubu Diyor ki!', en: 'Simon says', color: '#FFB86B',
    intro: 'Hadi oyun oynayalım! Bubu ne derse onu yap!',
    slides: [
      { en: 'Touch your *nose*!', tr: 'Burnuna dokun!', a: [['👃', 50, 80, 24, 'pulse']] },
      { en: 'Clap your *hands*!', tr: 'Ellerini çırp!', a: [['👏', 50, 80, 24, 'clap']] },
      { en: 'Stamp your *feet*!', tr: 'Ayaklarını yere vur!', a: [['🦶', 50, 82, 22, 'jump']] },
      { en: 'Open your *mouth*!', tr: 'Ağzını aç!', a: [['👄', 50, 75, 22, 'pulse']] },
      { en: 'Close your *eyes*!', tr: 'Gözlerini kapat!', a: [['😌', 50, 82, 24, 'pop']] },
      { en: 'Jump *up*!', tr: 'Yukarı zıpla!', a: [['🤸', 50, 88, 24, 'jump']] },
    ] },
];

/* ------------------------------------------------------------ ÖDÜLLER */
/** Sınıfım için varsayılan seçili eşyalar */
const CLASSROOM_DEFAULT = ['ataturkcorner', 'board', 'teacherdesk', 'locker', 'desk', 'chair', 'bookcase', 'bin', 'window', 'door', 'clock',
  'teacher', 'book', 'notebook', 'pencil', 'eraser', 'ruler', 'bag'];

/** Okul bahçesi için varsayılan seçili eşyalar */
const YARD_DEFAULT = ['school', 'flagpole', 'gate', 'canteen', 'tree', 'bench', 'slide', 'swing', 'seesaw',
  'hoop', 'goal', 'ball', 'hopscotch', 'rope', 'schoolbus', 'flower'];

const STICKERS = ['🦄', '🐉', '🦖', '🚀', '🌈', '🐳', '🦊', '🐙', '🦋', '🐬', '🦁', '🐼',
  '🐨', '🐯', '🦒', '🐘', '🦩', '🦚', '🐢', '🐸', '🐝', '🐞', '🌻', '🍩', '🧁', '🍭', '🎂',
  '🎁', '🏆', '👑', '💎', '🪐', '🌟', '🛸', '🤖', '🧚', '🎠', '🦕', '🐿️', '🦔'];
const STARS_PER_STICKER = 10;

const AVATARS = ['🐱', '🐶', '🐰', '🦊', '🐻', '🐼', '🐯', '🦁', '🐸', '🐵', '🦄', '🐧'];

// Arayüzde kullanılan 3D görseller
const UI_EMOJI = ['🦉', '⭐', '🔥', '⚙️', '🔒', '🏘️', '🎧', '📖', '🎤', '🃏', '💬', '🔁', '🏆',
  '🔊', '🐢', '✅', '🎉', '🏠', '🌳', '🎁', '👋', '😴', '🌙', '🔍', '👍', '💡', '📊', '⏱️',
  '🔔', '🧩', '🛡️', '🌟', '🏘️', '🎯', '🙂', '🎊', '👏', '💪', '🤔', '🔀', '📚', '🗺️', '❓', '🥇', '🥈', '🥉'];

const PRAISE = ['Great job!', 'Super!', 'Well done!', 'Awesome!', 'Fantastic!', 'Excellent!', 'You did it!', 'Perfect!', 'Wonderful!', 'Yay!'];
const PRAISE_TR = ['Harikasın!', 'Süpersin!', 'Aferin sana!', 'Bravo!', 'Çok güzel!'];
const TRY_AGAIN = ['Try again!', 'Almost!', 'Oops! Try again.', 'Good try!'];
const BUBU_HELLO = [
  'Hello! Let’s play!', 'Hi friend! Ready?', 'Good to see you!', 'Let’s learn English!', 'You are a star!',
];
