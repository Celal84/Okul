'use strict';
/* Homework — ana uygulama (tek sayfa, internetsiz) */
const DERS = {
  turkce: { ad: 'Türkçe', e: '📖', r: '#e11d48' }, matematik: { ad: 'Matematik', e: '🔢', r: '#2563eb' },
  hayat: { ad: 'Hayat Bilgisi', e: '🌱', r: '#16a34a' }, fen: { ad: 'Fen Bilimleri', e: '🔬', r: '#0891b2' },
  sosyal: { ad: 'Sosyal Bilgiler', e: '🌍', r: '#b45309' }, ingilizce: { ad: 'İngilizce', e: '🇬🇧', r: '#7c3aed' },
  din: { ad: 'Din Kültürü', e: '🕌', r: '#0d9488' }, insan: { ad: 'İnsan Hakları', e: '🤝', r: '#db2777' },
  trafik: { ad: 'Trafik Güvenliği', e: '🚦', r: '#dc2626' }, muzik: { ad: 'Müzik', e: '🎵', r: '#9333ea' },
  gorsel: { ad: 'Görsel Sanatlar', e: '🎨', r: '#ea580c' }, satranc: { ad: 'Satranç', e: '♟️', r: '#475569' },
  kodlama: { ad: 'Kodlama', e: '💻', r: '#4f46e5' },
};
const APPS = [
  { id: 'roket', ad: 'Hızlı Okuma Roketi', e: '🚀', d: ['turkce'], ac: 'Akıcı ve hızlı okuma' },
  { id: 'bilmece', ad: 'Bilmece Deyim Atasözü', e: '🧩', d: ['turkce'], ac: 'Bilmece, deyim, atasözü, tekerleme' },
  { id: 'matematik', ad: 'Matematik Adaları', e: '🏝️', d: ['matematik'], ac: '2-3-4. sınıf matematik oyunları' },
  { id: 'carpim', ad: 'Midilli Çarpım Macerası', e: '🦄', d: ['matematik'], ac: 'Çarpım tablosu' },
  { id: 'bubu', ad: 'Bubu English', e: '🦉', d: ['ingilizce'], ac: 'Dinle, oku, konuş' },
  { id: 'atlas', ad: 'Dünya ve Türkiye Atlası', e: '🗺️', d: ['hayat', 'sosyal'], ac: 'Ülkeler, iller, bayraklar' },
];
const AVATAR = ['🦊', '🐼', '🦁', '🐯', '🐨', '🐸', '🦄', '🐙', '🦉', '🐬', '🚀', '⭐'];
const ARALIK = [0, 1, 2, 4, 7, 14]; // akıllı tekrar kutuları (gün)
const KONU_ARALIK = [1, 3, 7, 14, 30];

/* ---------- yardımcılar ---------- */
const $ = s => document.querySelector(s);
const R = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const pick = a => a[R(0, a.length - 1)];
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = R(0, i);[a[i], a[j]] = [a[j], a[i]]; } return a; };
const gun = (d = new Date()) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
const gunEkle = n => { const d = new Date(); d.setDate(d.getDate() + n); return gun(d); };
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const zengin = s => esc(s).replace(/&lt;(\/?)b>/g, '<$1b>');
const yildiz = n => '<span class="stars">' + '★'.repeat(n) + '<s>' + '★'.repeat(3 - n) + '</s></span>';

/* ---------- kayıt ---------- */
const KEY = 'homework.v1';
let S = { ad: '', sinif: 0, av: '🦊', xp: 0, hedef: 20, seri: 0, sonGun: '', ses: true, oku: true, konu: {}, srs: {}, log: {}, son: '' };
try { Object.assign(S, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { /* ilk açılış */ }
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* dolu */ } };
const kayit = id => S.konu[id] || (S.konu[id] = {});
function islem(dogru) {
  const g = gun(), l = S.log[g] || (S.log[g] = { n: 0, d: 0 });
  l.n++; if (dogru) { l.d++; S.xp += 10; }
  if (S.sonGun !== g) { S.seri = S.sonGun === gunEkle(-1) ? S.seri + 1 : 1; S.sonGun = g; }
}

/* ---------- içerik dizini ---------- */
const KONU = {}; // id -> konu (+ders, sinif)
const paketler = (sinif, ders) => HW.packs.filter(p => p.sinif === sinif && (!ders || p.ders === ders));
HW.packs.forEach(p => p.uniteler.forEach(u => u.konular.forEach(k => { k.ders = p.ders; k.sinif = p.sinif; KONU[k.id] = k; })));
const konular = (sinif, ders) => paketler(sinif, ders).flatMap(p => p.uniteler.flatMap(u => u.konular));
const dersler = sinif => Object.keys(DERS).filter(d => paketler(sinif, d).length);
const yildizSay = id => { const t = (S.konu[id] || {}).t || 0; return t >= 90 ? 3 : t >= 70 ? 2 : t >= 50 ? 1 : 0; };
const konuYuzde = id => { const k = S.konu[id] || {}; return (k.a ? 25 : 0) + (k.k ? 15 : 0) + (k.e ? 10 : 0) + Math.round(yildizSay(id) / 3 * 50); };
const dersYuzde = (sinif, ders) => { const ks = konular(sinif, ders); return ks.length ? Math.round(ks.reduce((t, k) => t + konuYuzde(k.id), 0) / ks.length) : 0; };
const soruAl = (k, i) => ({ ...k.sorular[i], qid: k.id + '#' + i, ders: k.ders });
const bekleyen = () => Object.keys(S.srs).filter(q => S.srs[q].t <= gun() && KONU[q.split('#')[0]] && KONU[q.split('#')[0]].sorular[+q.split('#')[1]]);
const tekrarKonu = () => Object.keys(S.konu).filter(id => { const k = S.konu[id]; return KONU[id] && KONU[id].sinif === S.sinif && k.son && k.t != null && gunFark(k.son) >= KONU_ARALIK[Math.min(k.tk || 0, 4)]; });
const gunFark = g => Math.round((new Date(gun()) - new Date(g)) / 864e5);

/* ---------- ses ---------- */
let ttsN = 0, actx = null;
const temiz = s => String(s).replace(/<[^>]+>/g, '').replace(/[\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu, ' ').replace(/_{2,}/g, ' boşluk ').replace(/\s+/g, ' ').trim();
const ingMi = (s, ders) => ders === 'ingilizce' && !/[çğıöşüÇĞİÖŞÜ]/.test(s);
function soyle(metin, en) {
  const t = temiz(metin); if (!t) return;
  try {
    if (en && window.AndroidBridge) return AndroidBridge.speak(t, 'hw' + (++ttsN), 'en-US', 0.85, 1.0);
    if (window.Android && Android.speak) return Android.speak(t);
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(t); u.lang = en ? 'en-US' : 'tr-TR'; u.rate = en ? 0.85 : 0.95;
      const v = speechSynthesis.getVoices().find(x => x.lang.replace('_', '-').startsWith(en ? 'en' : 'tr')); if (v) u.voice = v;
      speechSynthesis.speak(u);
    }
  } catch (e) { /* ses yok */ }
}
function sus() { try { if (window.Android && Android.stop) Android.stop(); else if ('speechSynthesis' in window) speechSynthesis.cancel(); } catch (e) { /* yok */ } }
function bip(ok) {
  if (!S.ses) return;
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const t = actx.currentTime;
    (ok ? [660, 880] : [220, 180]).forEach((f, i) => {
      const o = actx.createOscillator(), g = actx.createGain();
      o.type = ok ? 'sine' : 'triangle'; o.frequency.value = f; o.connect(g); g.connect(actx.destination);
      g.gain.setValueAtTime(0.0001, t + i * 0.11); g.gain.exponentialRampToValueAtTime(0.18, t + i * 0.11 + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.11 + 0.18);
      o.start(t + i * 0.11); o.stop(t + i * 0.11 + 0.2);
    });
  } catch (e) { /* ses yok */ }
}
let toastT;
function toast(m) { const t = $('#toast'); t.textContent = m; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 2200); }

/* ---------- matematik soru üreticileri ---------- */
function sayiSec(d, yay) {
  const out = [d], s = new Set(out); let g = 0;
  while (out.length < 4 && g++ < 60) { const v = d + R(1, Math.max(3, yay || 3)) * (Math.random() < 0.5 ? -1 : 1); if (v >= 0 && !s.has(v)) { s.add(v); out.push(v); } }
  for (let k = 1; out.length < 4; k++) if (!s.has(d + k)) { s.add(d + k); out.push(d + k); }
  return out.map(String);
}
const yay = m => m > 100 ? 20 : m > 20 ? 10 : 3;
const RITMIK = { 2: "2'şer", 3: "3'er", 4: "4'er", 5: "5'er", 6: "6'şar", 7: "7'şer", 8: "8'er", 9: "9'ar", 10: "10'ar", 100: "100'er" };
const KESIR_EK = { 2: "1/2'si", 3: "1/3'ü", 4: "1/4'ü", 5: "1/5'i", 6: "1/6'sı", 8: "1/8'i", 10: "1/10'u" };
const BAS = ['birler', 'onlar', 'yüzler', 'binler', 'on binler', 'yüz binler'];
const GEN = {
  say(m) { const n = R(1, Math.min(m, 20)), e = pick(['🍎', '⭐', '🐟', '🎈', '🌸', '🚗']); return { s: e.repeat(n) + '\nKaç tane var?', c: sayiSec(n, 3), a: `Tek tek sayınca ${n} eder.` }; },
  topla(m) { const a = R(1, m - 1), b = R(1, m - a); return { s: `${a} + ${b} = ?`, c: sayiSec(a + b, yay(m)), a: `${a} + ${b} = ${a + b}` }; },
  cikar(m) { const a = R(2, m), b = R(1, a); return { s: `${a} − ${b} = ?`, c: sayiSec(a - b, yay(m)), a: `${a} − ${b} = ${a - b}` }; },
  carp(m) { const a = R(2, Math.max(2, m)), b = R(1, 10); return { s: `${a} × ${b} = ?`, c: sayiSec(a * b, 10), a: `${a} × ${b} = ${a * b}` }; },
  bol(m) { const b = R(2, Math.max(2, m)), q = R(1, 10); return { s: `${b * q} ÷ ${b} = ?`, c: sayiSec(q, 3), a: `${b} × ${q} = ${b * q} olduğundan ${b * q} ÷ ${b} = ${q}` }; },
  karsilastir(m) { const a = R(1, m); let b = R(1, m); if (b === a) b = a === m ? a - 1 : a + 1; const x = Math.max(a, b), y = Math.min(a, b); return { s: 'Hangi sayı daha büyüktür?', c: [String(x), String(y)], a: `${x} > ${y}` }; },
  oruntu(m) { const ad = R(1, Math.max(2, Math.min(10, Math.floor(m / 10)))), b = R(1, Math.max(1, Math.floor(m / 2))), d = [0, 1, 2, 3].map(i => b + i * ad); return { s: `${d.join(', ')}, ?\nÖrüntüde sıradaki sayı kaçtır?`, c: sayiSec(b + 4 * ad, ad + 2), a: `Sayılar her adımda ${ad} artıyor: ${d[3]} + ${ad} = ${b + 4 * ad}` }; },
  eksik(m) { const c = R(3, m), a = R(1, c - 1); return { s: `${a} + ▢ = ${c}\nKutuya hangi sayı gelmeli?`, c: sayiSec(c - a, yay(m)), a: `${c} − ${a} = ${c - a}` }; },
  basamak(m) { const n = R(10, Math.max(11, m)), s = String(n), i = R(0, s.length - 1), d = +s[s.length - 1 - i]; const c = [d], st = new Set(c); while (c.length < 4) { const v = R(0, 9); if (!st.has(v)) { st.add(v); c.push(v); } } return { s: `${n} sayısında ${BAS[i]} basamağındaki rakam kaçtır?`, c: c.map(String), a: `${n} sayısının ${BAS[i]} basamağında ${d} vardır.` }; },
  yuvarla(m) { const y = m > 100 && Math.random() < 0.5 ? 100 : 10, n = R(y + 1, Math.max(y * 2, m)), d = Math.round(n / y) * y; const c = [d, d + y, Math.max(0, d - y), d + 2 * y]; return { s: `${n} sayısı en yakın ${y === 10 ? 'onluğa' : 'yüzlüğe'} yuvarlanırsa kaç olur?`, c: [...new Set(c)].map(String), a: `${n}, ${Math.floor(n / y) * y} ile ${Math.floor(n / y) * y + y} arasındadır; ${d} sayısına daha yakındır (yarı ve üstü yukarı yuvarlanır).` }; },
  ritmik(ad) { ad = RITMIK[ad] ? ad : 2; const k = R(1, 9); return { s: `${RITMIK[ad]} ritmik sayarken ${k * ad} sayısından sonra hangi sayı gelir?`, c: sayiSec(k * ad + ad, ad + 1), a: `${k * ad} + ${ad} = ${k * ad + ad}` }; },
  kesir(m) { const p = pick([2, 3, 4, 5, 6, 8, 10].filter(x => x <= Math.max(2, m || 10))), q = R(1, 9); return { s: `${p * q} cevizin ${KESIR_EK[p]} kaç cevizdir?`, c: sayiSec(q, 3), a: `${p * q} ÷ ${p} = ${q}` }; },
  saat(m) { const h = R(1, 12), y = Math.random() < 0.5, f = (x, b) => x + (b ? ':30' : ':00'); const c = [f(h, y), f(h % 12 + 1, y), f(h, !y), f((h + 5) % 12 + 1, y)]; return { s: `Akrep ${y ? h + ' ile ' + (h % 12 + 1) + ' arasını' : h + ' sayısını'}, yelkovan ${y ? 6 : 12} sayısını gösteriyor. Saat kaçtır?`, c, a: y ? `Yelkovan 6'dayken saat buçuktur: ${h} buçuk.` : `Yelkovan 12'deyken saat tamdır: saat ${h}.` }; },
  para(m) { const a = R(1, Math.min(200, Math.max(4, m)) - 1), v = [5, 10, 20, 50, 100, 200].find(x => x > a) || 200; return { s: `${a} TL'lik bir oyuncak için kasaya ${v} TL verdin. Kaç TL para üstü alırsın?`, c: sayiSec(v - a, yay(v)), a: `${v} − ${a} = ${v - a} TL` }; },
  cevre(m) { const a = R(1, Math.max(2, m) - 1), b = R(a + 1, Math.max(3, m)); return { s: `Kısa kenarı ${a} cm, uzun kenarı ${b} cm olan dikdörtgenin çevresi kaç cm'dir?`, c: sayiSec(2 * (a + b), 6), a: `Çevre = 2 × (${a} + ${b}) = ${2 * (a + b)} cm` }; },
  alan(m) { const a = R(1, Math.max(2, m) - 1), b = R(a + 1, Math.max(3, m)); return { s: `Kısa kenarı ${a} cm, uzun kenarı ${b} cm olan dikdörtgenin alanı kaç santimetrekaredir?`, c: sayiSec(a * b, 8), a: `Alan = ${a} × ${b} = ${a * b} cm²` }; },
};
const uret = (k, n) => Array.from({ length: n }, () => ({ ...GEN[k.uret[0]](k.uret[1] || 20), ders: k.ders }));

/* ---------- yönlendirme ---------- */
let rota = [], O = null; // O: etkin oturum (test/kart/eşleştir/anlatım)
const git = h => { if (location.hash === h) ciz(); else location.hash = h; };
const ust = () => {
  const [a, b, c] = rota;
  if (!a) return null;
  if (a === 'k') return c ? '#/k/' + b : '#/d/' + KONU[b].ders;
  if (a === 'q') return O && O.geri ? O.geri : '#/';
  return '#/';
};
window.__hwBack = () => { const u = ust(); if (!u) return 'exit'; sus(); git(u); return ''; };
window.addEventListener('hashchange', ciz);
document.addEventListener('click', e => {
  const b = e.target.closest('[data-go],[data-act]'); if (!b) return;
  if (b.dataset.go) return git(b.dataset.go);
  const f = ACT[b.dataset.act]; if (f) f(b.dataset.v, b);
});
const ACT = {};

function ciz() {
  rota = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  const [a, b, c] = rota;
  if (!S.sinif || !S.ad) return hosgeldin();
  let html, full = false;
  if (!a) html = evim();
  else if (a === 'd' && DERS[b]) html = dersSayfa(b);
  else if (a === 'k' && KONU[b]) { full = true; if (c === 'anlat') html = anlatBasla(b); else if (c === 'kart') html = kartBasla(b); else if (c === 'esle') html = esleBasla(b); else if (c === 'test') html = testBasla(konuTest(b)); else if (c === 'alis') html = testBasla(alisTest(b)); else html = konuSayfa(b); }
  else if (a === 'q' && O) { full = true; html = O.ciz(); }
  else if (a === 'tekrar') html = tekrarSayfa();
  else if (a === 'oyun') html = oyunSayfa();
  else if (a === 'karne') html = karneSayfa();
  else if (a === 'ayar') html = ayarSayfa();
  else return git('#/');
  document.body.classList.toggle('full', full);
  $('#app').innerHTML = html;
  sekmeler(a || '');
  window.scrollTo(0, 0);
}
function sekmeler(a) {
  const n = bekleyen().length;
  $('#tabs').innerHTML = [['', '🏠', 'Ana Sayfa'], ['tekrar', '🔁', 'Tekrar'], ['oyun', '🎮', 'Oyunlar'], ['karne', '📊', 'Karne'], ['ayar', '⚙️', 'Ayarlar']]
    .map(([r, e, t]) => `<button class="${(a === r || (r === '' && a === 'd')) ? 'on' : ''}" data-go="#/${r}"><span class="em">${e}</span>${t}${r === 'tekrar' && n ? `<span class="badge">${n}</span>` : ''}</button>`).join('');
}
const baslik = (t, geri, sag) => `<div class="top">${geri ? `<button class="ib" data-go="${geri}" aria-label="Geri">←</button>` : ''}<h1>${t}</h1>${sag || ''}</div>`;

/* ---------- karşılama ---------- */
let F = {};
function hosgeldin() {
  F = { ad: S.ad, sinif: S.sinif, av: S.av };
  document.body.classList.add('full');
  $('#app').innerHTML = `<div style="text-align:center;margin:26px 0 8px"><div style="font-size:64px">🎒</div><h1 style="font-size:30px;font-weight:800">Homework</h1><p class="mut">Tüm derslerin tek uygulamada</p></div>
  <div class="card"><label class="f" style="margin-top:0">Adın ne?</label><input type="text" id="fad" maxlength="20" placeholder="Adını yaz" value="${esc(S.ad)}">
  <label class="f">Kaçıncı sınıftasın?</label><div class="pick" id="fsinif">${[1, 2, 3, 4].map(n => `<button data-act="fsinif" data-v="${n}">${n}. sınıf</button>`).join('')}</div>
  <label class="f">Karakterini seç</label><div class="pick av" id="fav">${AVATAR.map(a => `<button data-act="fav" data-v="${a}" class="${a === S.av ? 'on' : ''}">${a}</button>`).join('')}</div>
  <button class="btn" style="margin-top:22px" data-act="fbasla">Başla</button></div>`;
}
const sec = (kap, b) => { document.querySelectorAll(kap + ' button').forEach(x => x.classList.toggle('on', x === b)); };
ACT.fsinif = (v, b) => { F.sinif = +v; sec('#fsinif', b); };
ACT.fav = (v, b) => { F.av = v; sec('#fav', b); };
ACT.fbasla = () => {
  const ad = $('#fad').value.trim();
  if (!ad) return toast('Önce adını yaz');
  if (!F.sinif) return toast('Sınıfını seç');
  S.ad = ad; S.sinif = F.sinif; S.av = F.av || '🦊'; S.oku = S.sinif === 1; save(); git('#/');
};

/* ---------- ana sayfa ---------- */
function evim() {
  const l = S.log[gun()] || { n: 0, d: 0 }, n = bekleyen().length, tk = tekrarKonu(), sv = Math.floor(S.xp / 200) + 1;
  const son = KONU[S.son] && KONU[S.son].sinif === S.sinif ? KONU[S.son] : null;
  const seri = S.sonGun === gun() || S.sonGun === gunEkle(-1) ? S.seri : 0;
  return `<div class="top"><div class="brand" style="flex:1">Homework<small>v${HW.VER}</small></div><button class="chip" data-go="#/ayar">${S.av} ${S.sinif}. sınıf</button></div>
  <div class="hero"><h2>Merhaba ${esc(S.ad)}! 👋</h2><div class="sm" style="opacity:.92">Bugünkü hedef: ${Math.min(l.n, S.hedef)} / ${S.hedef} soru</div>
  <div class="bar"><i style="width:${Math.min(100, l.n / S.hedef * 100)}%"></i></div>
  <div class="stats"><div class="st"><b>🔥 ${seri}</b><span>gün seri</span></div><div class="st"><b>⭐ ${S.xp}</b><span>puan</span></div><div class="st"><b>🏅 ${sv}</b><span>seviye</span></div></div></div>
  ${n || tk.length ? `<button class="card cta" data-go="#/tekrar"><span class="em">🔁</span><span class="sp"><b>Akıllı Tekrar</b><span class="mut sm">${n ? n + ' soru' : ''}${n && tk.length ? ' ve ' : ''}${tk.length ? tk.length + ' konu' : ''} tekrar bekliyor</span></span><span class="badge">${n + tk.length}</span></button>` : ''}
  ${son ? `<button class="card cta" data-go="#/k/${son.id}"><span class="em">${son.e}</span><span class="sp"><b>Kaldığın yerden devam et</b><span class="mut sm">${DERS[son.ders].ad} · ${esc(son.ad)}</span></span><span>›</span></button>` : ''}
  <button class="card cta" data-act="karma"><span class="em">🎯</span><span class="sp"><b>Günün Karma Testi</b><span class="mut sm">Tüm derslerden 10 soru</span></span><span>›</span></button>
  <div class="sec">Derslerim</div><div class="grid">${dersler(S.sinif).map(d => { const y = dersYuzde(S.sinif, d); return `<button class="tile" style="--c:${DERS[d].r}" data-go="#/d/${d}"><span class="em">${DERS[d].e}</span><b>${DERS[d].ad}</b><span class="mut sm">${konular(S.sinif, d).length} konu · %${y}</span><div class="bar"><i style="width:${y}%"></i></div></button>`; }).join('')}</div>
  <div class="sec">Oyunlarım</div><div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(240px,1fr))">${APPS.map(appKart).join('')}</div>`;
}
const appKart = a => `<button class="tile app" data-act="app" data-v="${a.id}"><span class="em">${a.e}</span><span><b>${a.ad}</b><br><span class="mut sm">${a.ac}</span></span></button>`;
ACT.app = id => { save(); location.href = 'apps/' + id + '/index.html'; };
ACT.karma = () => { const hv = konular(S.sinif).flatMap(k => k.sorular.map((_, i) => soruAl(k, i))); testAc({ ad: 'Günün Karma Testi', sorular: shuffle(hv).slice(0, 10), geri: '#/' }); };

/* ---------- ders ve konu ---------- */
function dersSayfa(d) {
  const D = DERS[d], ps = paketler(S.sinif, d), apps = APPS.filter(a => a.d.includes(d));
  if (!ps.length) return baslik(D.ad, '#/') + `<div class="card">Bu ders ${S.sinif}. sınıfta yok.</div>`;
  return `<div style="--c:${D.r}">${baslik(D.e + ' ' + D.ad, '#/')}
  <div class="card"><div class="row"><b class="sp">${S.sinif}. sınıf ilerlemen</b><b>%${dersYuzde(S.sinif, d)}</b></div><div class="bar" style="margin-top:8px"><i style="width:${dersYuzde(S.sinif, d)}%"></i></div>
  <div class="two"><button class="btn sm sp" style="background:${D.r}" data-act="deneme" data-v="${d}">🎯 Ders Denemesi (15 soru)</button></div></div>
  ${apps.length ? `<div class="sec">Bu dersin oyunları</div><div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(240px,1fr))">${apps.map(appKart).join('')}</div>` : ''}
  ${ps.map(p => p.uniteler.map(u => `<div class="sec">${esc(u.ad)}</div>${u.konular.map(k => `<button class="li" data-go="#/k/${k.id}"><span class="em">${k.e}</span><span class="sp"><b>${esc(k.ad)}</b><span class="mut sm">%${konuYuzde(k.id)} tamamlandı</span></span>${yildiz(yildizSay(k.id))}</button>`).join('')}`).join('')).join('')}</div>`;
}
ACT.deneme = d => { const hv = konular(S.sinif, d).flatMap(k => k.sorular.map((_, i) => soruAl(k, i))); testAc({ ad: DERS[d].ad + ' Denemesi', sorular: shuffle(hv).slice(0, 15), geri: '#/d/' + d }); };
function konuSayfa(id) {
  const k = KONU[id], r = S.konu[id] || {}, D = DERS[k.ders];
  S.son = id; save();
  const m = (h, e, t, alt, ok) => `<button class="mode" data-go="#/k/${id}/${h}"><span class="em">${e}</span><b>${t}</b><span class="mut sm">${alt}</span>${ok ? '<span class="tick">✓</span>' : ''}</button>`;
  return `<div style="--c:${D.r}">${baslik(esc(k.ad), '#/d/' + k.ders)}
  <div class="card" style="text-align:center;margin-bottom:14px"><div style="font-size:54px;line-height:1.1">${k.e}</div><b style="display:block;font-size:18px;margin:4px 0 2px">${esc(k.ad)}</b><div class="mut sm">${D.ad} · ${k.sinif}. sınıf</div><div style="margin:6px 0;font-size:24px">${yildiz(yildizSay(id))}</div>
  <div class="bar"><i style="width:${konuYuzde(id)}%"></i></div>${r.t != null ? `<div class="mut sm" style="margin-top:6px">En iyi test sonucun: %${r.t}</div>` : ''}</div>
  <div class="modes">${m('anlat', '📖', 'Konu Anlatımı', k.anlat.length + ' adım', r.a)}${m('kart', '🃏', 'Bilgi Kartları', k.kartlar.length + ' kart', r.k)}${m('esle', '🧩', 'Eşleştir', 'Hafıza oyunu', r.e)}${m('test', '✅', 'Test', k.sorular.length + ' soru', r.t >= 50)}${k.uret && GEN[k.uret[0]] ? m('alis', '♾️', 'Sınırsız Alıştırma', 'Her seferinde yeni', 0) : ''}</div></div>`;
}

/* ---------- konu anlatımı ---------- */
function anlatBasla(id) { O = { tur: 'anlat', id, i: 0 }; return anlatCiz(); }
function anlatCiz() {
  const k = KONU[O.id], n = k.anlat.length, son = O.i === n, a = k.anlat[O.i], D = DERS[k.ders];
  const metin = son ? 'Hafıza ipucu. ' + k.ipucu : a.b + '. ' + a.m + (a.o ? ' Örnek: ' + a.o : '');
  O.metin = metin;
  if (S.oku) setTimeout(() => soyle(metin, false), 250);
  return `<div style="--c:${D.r}">${baslik(esc(k.ad), '#/k/' + O.id, `<button class="ib" data-act="oku">🔊</button>`)}
  <div class="card lesson pop">${son ? `<h2>💡 Hafıza İpucu</h2><div class="tip">${zengin(k.ipucu)}</div><p class="mut" style="font-size:15px">Harika! Konuyu bitirdin. Şimdi kartlarla pekiştir, sonra testi çöz.</p>` : `<div class="mut sm">${O.i + 1} / ${n}</div><h2>${zengin(a.b)}</h2><p>${zengin(a.m)}</p>${a.o ? `<div class="ex"><b>Örnek:</b> ${zengin(a.o)}</div>` : ''}`}</div>
  <div class="dots">${Array.from({ length: n + 1 }, (_, i) => `<i class="${i === O.i ? 'on' : ''}"></i>`).join('')}</div>
  <div class="two">${O.i ? '<button class="btn ghost" data-act="anlatGeri">← Geri</button>' : ''}${son ? `<button class="btn" style="background:${D.r}" data-go="#/k/${O.id}/kart">Kartlara geç →</button>` : `<button class="btn" style="background:${D.r}" data-act="anlatIleri">Devam →</button>`}</div></div>`;
}
ACT.oku = () => O && O.metin && soyle(O.metin, O.en);
ACT.anlatGeri = () => { O.i--; sus(); $('#app').innerHTML = anlatCiz(); };
ACT.anlatIleri = () => {
  O.i++; sus();
  if (O.i === KONU[O.id].anlat.length) { const r = kayit(O.id); if (!r.a) { r.a = 1; S.xp += 20; } r.son = r.son || gun(); save(); }
  $('#app').innerHTML = anlatCiz(); window.scrollTo(0, 0);
};

/* ---------- bilgi kartları ---------- */
function kartBasla(id) { const k = KONU[id]; O = { tur: 'kart', id, sira: shuffle(k.kartlar.map((_, i) => i)), bilinen: 0, on: false }; return kartCiz(); }
function kartCiz() {
  const k = KONU[O.id], D = DERS[k.ders];
  if (!O.sira.length) {
    const r = kayit(O.id); if (!r.k) { r.k = 1; S.xp += 20; } save();
    return `<div style="--c:${D.r}">${baslik('Bilgi Kartları', '#/k/' + O.id)}<div class="card res pop"><div class="big">🃏</div><h2>Tüm kartları öğrendin!</h2><p class="mut">Şimdi eşleştirme oyununda hızını dene.</p>
    <div class="two"><button class="btn ghost" data-go="#/k/${O.id}">Konuya dön</button><button class="btn" style="background:${D.r}" data-go="#/k/${O.id}/esle">Eşleştir →</button></div></div></div>`;
  }
  const c = k.kartlar[O.sira[0]];
  O.metin = c[0]; O.en = ingMi(c[0], k.ders);
  return `<div style="--c:${D.r}">${baslik('Bilgi Kartları', '#/k/' + O.id, `<button class="ib" data-act="oku">🔊</button>`)}
  <div class="row"><div class="bar sp"><i style="width:${O.bilinen / k.kartlar.length * 100}%"></i></div><span class="mut sm">${O.bilinen}/${k.kartlar.length}</span></div>
  <button class="flip ${O.on ? 'on' : ''}" data-act="cevir" style="display:block;width:100%"><div class="in"><div class="face">${zengin(c[0])}</div><div class="face b">${zengin(c[1])}</div></div></button>
  <p class="mut sm" style="text-align:center">${O.on ? 'Bildin mi?' : 'Cevabı görmek için karta dokun'}</p>
  <div class="two" style="visibility:${O.on ? 'visible' : 'hidden'}"><button class="btn ghost" data-act="kartHayir">🔁 Tekrar sor</button><button class="btn" style="background:var(--ok)" data-act="kartEvet">✓ Bildim</button></div></div>`;
}
ACT.cevir = (_, b) => { O.on = !O.on; b.classList.toggle('on', O.on); if (O.on) $('#app').innerHTML = kartCiz(); };
ACT.kartEvet = () => { O.sira.shift(); O.bilinen++; O.on = false; $('#app').innerHTML = kartCiz(); };
ACT.kartHayir = () => { O.sira.push(O.sira.shift()); O.on = false; $('#app').innerHTML = kartCiz(); };

/* ---------- eşleştirme ---------- */
function esleBasla(id) {
  const k = KONU[id], sec = shuffle(k.kartlar.map((_, i) => i)).slice(0, 6);
  O = { tur: 'esle', id, sol: shuffle(sec), sag: shuffle(sec), tamam: [], s: null, hata: 0, t0: Date.now() };
  return esleCiz();
}
function esleCiz() {
  const k = KONU[O.id], D = DERS[k.ders];
  if (O.tamam.length === O.sol.length) {
    const sn = Math.round((Date.now() - O.t0) / 1000), r = kayit(O.id); if (!r.e) { r.e = 1; S.xp += 20; } save();
    return `<div style="--c:${D.r}">${baslik('Eşleştir', '#/k/' + O.id)}<div class="card res pop"><div class="big">🧩</div><h2>Hepsini eşleştirdin!</h2><div class="kv"><div><b>${sn} sn</b><span class="mut sm">süre</span></div><div><b>${O.hata}</b><span class="mut sm">hata</span></div></div>
    <div class="two"><button class="btn ghost" data-go="#/k/${O.id}/esle" data-act="yeniden">Tekrar oyna</button><button class="btn" style="background:${D.r}" data-go="#/k/${O.id}/test">Teste geç →</button></div></div></div>`;
  }
  const h = (i, yan) => `<button class="mt ${O.tamam.includes(i) ? 'done' : ''} ${O.s && O.s[0] === yan && O.s[1] === i ? 'sel' : ''}" data-act="esle" data-v="${yan}${i}">${zengin(k.kartlar[i][yan === 'L' ? 0 : 1])}</button>`;
  return `<div style="--c:${D.r}">${baslik('Eşleştir', '#/k/' + O.id)}<p class="mut sm" style="margin-bottom:10px">Soldaki kartı sağdaki eşiyle eşleştir.</p>
  <div class="match"><div>${O.sol.map(i => h(i, 'L')).join('<div style="height:10px"></div>')}</div><div>${O.sag.map(i => h(i, 'R')).join('<div style="height:10px"></div>')}</div></div></div>`;
}
ACT.esle = (v, b) => {
  const yan = v[0], i = +v.slice(1);
  if (!O.s || O.s[0] === yan) { O.s = [yan, i]; $('#app').innerHTML = esleCiz(); return; }
  if (O.s[1] === i) { O.tamam.push(i); O.s = null; bip(true); $('#app').innerHTML = esleCiz(); }
  else { O.hata++; O.s = null; bip(false); b.classList.add('bad'); setTimeout(() => { if (O && O.tur === 'esle') $('#app').innerHTML = esleCiz(); }, 380); }
};

/* ---------- test motoru ---------- */
const konuTest = id => { const k = KONU[id]; return { ad: k.ad, konu: id, sorular: shuffle(k.sorular.map((_, i) => soruAl(k, i))).slice(0, 10), geri: '#/k/' + id }; };
const alisTest = id => { const k = KONU[id]; return { ad: 'Alıştırma', sorular: uret(k, 10), geri: '#/k/' + id, tekrarla: '#/k/' + id + '/alis' }; };
function testAc(t) { testBasla(t); O.ciz = soruCiz; if (location.hash === '#/q') ciz(); else location.hash = '#/q'; }
function testBasla(t) {
  O = { tur: 'test', ...t, i: 0, dogru: 0, yanlis: [], sec: null, ciz: soruCiz };
  O.sorular = t.sorular.map(q => { const c = shuffle(q.c.map(String)); return { ...q, c, d: c.indexOf(String(q.c[0])) }; });
  if (!O.sorular.length) return baslik(esc(t.ad), t.geri) + '<div class="card res"><div class="big">🎉</div><h2>Bekleyen soru yok</h2></div>';
  return soruCiz();
}
function soruCiz() {
  if (O.i >= O.sorular.length) return sonucCiz();
  const q = O.sorular[O.i], r = DERS[q.ders] ? DERS[q.ders].r : 'var(--pri)', cevap = O.sec != null;
  O.metin = q.s; O.en = ingMi(q.s, q.ders);
  if (!cevap && S.oku && !O.en) setTimeout(() => soyle(q.s, false), 250);
  return `<div style="--c:${r}"><div class="qhead"><button class="ib" data-go="${O.geri}" aria-label="Kapat">✕</button><div class="bar"><i style="width:${O.i / O.sorular.length * 100}%"></i></div><span class="mut sm">${O.i + 1}/${O.sorular.length}</span><button class="ib" data-act="oku">🔊</button></div>
  ${q.ders && !O.konu ? `<div class="mut sm" style="margin-bottom:6px">${DERS[q.ders].e} ${DERS[q.ders].ad}</div>` : ''}<div class="q">${zengin(q.s)}</div>
  ${q.c.map((x, i) => `<button class="opt ${cevap ? (i === q.d ? 'ok' : i === O.sec ? 'no' : '') : ''}" ${cevap ? 'disabled' : ''} data-act="cevap" data-v="${i}"><span class="k">${cevap && i === q.d ? '✓' : cevap && i === O.sec ? '✕' : 'ABCD'[i]}</span><span>${zengin(x)}</span></button>`).join('')}
  ${cevap ? `<div class="exp ${O.sec === q.d ? 'ok' : 'no'} pop"><b>${O.sec === q.d ? pick(['Harika! 🎉', 'Doğru! ⭐', 'Süpersin! 👏', 'Aferin! 💪']) : 'Doğru cevap: ' + zengin(q.c[q.d])}</b>${zengin(q.a)}</div><button class="btn" data-act="sonraki">${O.i + 1 === O.sorular.length ? 'Sonucu gör' : 'Devam →'}</button>` : ''}</div>`;
}
ACT.cevap = v => {
  if (O.sec != null) return;
  const q = O.sorular[O.i], ok = +v === q.d; O.sec = +v; sus(); bip(ok); islem(ok);
  if (ok) O.dogru++; else O.yanlis.push(q);
  if (q.qid) {
    const s = S.srs[q.qid];
    if (!ok) S.srs[q.qid] = { b: 1, t: gunEkle(1) };
    else if (s && s.t <= gun()) { if (s.b >= 5) delete S.srs[q.qid]; else S.srs[q.qid] = { b: s.b + 1, t: gunEkle(ARALIK[s.b + 1]) }; }
  }
  save(); $('#app').innerHTML = soruCiz();
  const e = document.querySelector('.exp'); if (e && e.scrollIntoView) e.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
};
ACT.sonraki = () => { O.i++; O.sec = null; $('#app').innerHTML = soruCiz(); window.scrollTo(0, 0); };
function sonucCiz() {
  const n = O.sorular.length, y = Math.round(O.dogru / n * 100), st = y >= 90 ? 3 : y >= 70 ? 2 : y >= 50 ? 1 : 0;
  if (O.konu && !O.bitti) { const r = kayit(O.konu); r.t = Math.max(r.t || 0, y); r.tk = r.son && r.son !== gun() ? Math.min((r.tk || 0) + 1, 4) : (r.tk || 0); r.son = gun(); r.n = (r.n || 0) + 1; }
  if (!O.bitti) { S.xp += st * 10; O.bitti = 1; save(); }
  sekmeler('');
  return `<div class="card res pop"><div class="big">${y >= 90 ? '🏆' : y >= 70 ? '🎉' : y >= 50 ? '👍' : '💪'}</div><h2>${y >= 90 ? 'Mükemmel!' : y >= 70 ? 'Çok iyi!' : y >= 50 ? 'İyi gidiyorsun!' : 'Biraz daha çalışalım'}</h2><div>${yildiz(st)}</div>
  <div class="kv"><div><b style="color:var(--ok)">${O.dogru}</b><span class="mut sm">doğru</span></div><div><b style="color:var(--no)">${n - O.dogru}</b><span class="mut sm">yanlış</span></div><div><b>%${y}</b><span class="mut sm">başarı</span></div></div>
  ${O.yanlis.length ? `<p class="mut sm">Yanlış yaptığın ${O.yanlis.length} soru Akıllı Tekrar'a eklendi; yarın yeniden sorulacak.</p>` : ''}
  <div class="two"><button class="btn ghost" data-go="${O.geri}">Bitir</button>${O.yanlis.length ? '<button class="btn" data-act="yanlislar">Yanlışları tekrar çöz</button>' : (O.konu || O.tekrarla) ? `<button class="btn" data-act="yeniden" data-go="${O.tekrarla || '#/k/' + O.konu + '/test'}">Yeniden çöz</button>` : ''}</div></div>`;
}
ACT.yanlislar = () => testAc({ ad: 'Yanlışlarım', sorular: O.yanlis.map(q => ({ ...q, c: [q.c[q.d], ...q.c.filter((_, i) => i !== q.d)] })), geri: O.geri });
ACT.yeniden = () => ciz();

/* ---------- akıllı tekrar ---------- */
function tekrarSayfa() {
  const b = bekleyen(), hepsi = Object.keys(S.srs).length, tk = tekrarKonu();
  return `${baslik('🔁 Akıllı Tekrar')}
  <div class="card"><div class="row"><div class="sp"><b style="font-size:18px">${b.length} soru bugün tekrar bekliyor</b><div class="mut sm">Yanlış yaptığın sorular 1, 2, 4, 7 ve 14 gün arayla yeniden sorulur. Beş kez doğru bilince kalıcı öğrenilmiş sayılır.</div></div></div>
  <div class="two"><button class="btn" data-act="tekrarBasla" ${b.length ? '' : 'disabled'}>Tekrara başla</button></div>
  ${hepsi ? `<button class="btn alt" style="margin-top:10px" data-act="tumYanlis">Tüm yanlışlarım (${hepsi})</button>` : ''}</div>
  <div class="sec">Tekrar zamanı gelen konular</div>
  ${tk.length ? tk.map(id => { const k = KONU[id]; return `<button class="li" style="--c:${DERS[k.ders].r}" data-act="konuTekrar" data-v="${id}"><span class="em">${k.e}</span><span class="sp"><b>${esc(k.ad)}</b><span class="mut sm">${DERS[k.ders].ad} · ${gunFark(S.konu[id].son)} gün önce çalışıldı</span></span><span>›</span></button>`; }).join('') : '<div class="card mut">Şimdilik tekrar gereken konu yok. Yeni konular çalıştıkça burada 1, 3, 7, 14 ve 30 gün sonra hatırlatılır.</div>'}`;
}
const srsSoru = q => { const [id, i] = q.split('#'); return soruAl(KONU[id], +i); };
ACT.tekrarBasla = () => testAc({ ad: 'Akıllı Tekrar', sorular: shuffle(bekleyen()).slice(0, 15).map(srsSoru), geri: '#/tekrar' });
ACT.tumYanlis = () => testAc({ ad: 'Yanlışlarım', sorular: shuffle(Object.keys(S.srs).filter(q => KONU[q.split('#')[0]] && KONU[q.split('#')[0]].sorular[+q.split('#')[1]])).slice(0, 15).map(srsSoru), geri: '#/tekrar' });
ACT.konuTekrar = id => { const k = KONU[id]; testAc({ ad: k.ad, konu: id, sorular: shuffle(k.sorular.map((_, i) => soruAl(k, i))).slice(0, 5), geri: '#/tekrar' }); };

/* ---------- oyunlar, karne, ayarlar ---------- */
const oyunSayfa = () => `${baslik('🎮 Oyunlarım')}<p class="mut" style="margin-bottom:12px">Daha önce ayrı ayrı kullandığın altı uygulamanın tamamı burada. Oyundan çıkmak için köşedeki 🎒 düğmesine dokun.</p><div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(240px,1fr))">${APPS.map(appKart).join('')}</div>`;
function karneSayfa() {
  const gunler = Array.from({ length: 7 }, (_, i) => gunEkle(i - 6)), mx = Math.max(S.hedef, ...gunler.map(g => (S.log[g] || {}).n || 0));
  const top = Object.values(S.log).reduce((t, l) => ({ n: t.n + l.n, d: t.d + l.d }), { n: 0, d: 0 });
  const biten = konular(S.sinif).filter(k => yildizSay(k.id) > 0).length, hepsi = konular(S.sinif).length;
  return `${baslik('📊 Karne')}
  <div class="card"><div class="kv" style="margin:0"><div><b>${top.n}</b><span class="mut sm">çözülen soru</span></div><div><b>%${top.n ? Math.round(top.d / top.n * 100) : 0}</b><span class="mut sm">başarı</span></div><div><b>${biten}/${hepsi}</b><span class="mut sm">konu</span></div></div></div>
  <div class="sec">Son 7 gün</div><div class="card"><div class="days">${gunler.map(g => { const n = (S.log[g] || {}).n || 0; return `<div>${n || ''}<i style="height:${n / mx * 82}%;${n >= S.hedef ? 'background:var(--ok)' : ''}"></i>${['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'][new Date(g).getDay()]}</div>`; }).join('')}</div><div class="mut sm" style="margin-top:8px">Yeşil sütun: günlük ${S.hedef} soru hedefi tamamlandı.</div></div>
  <div class="sec">${S.sinif}. sınıf dersleri</div><div class="card">${dersler(S.sinif).map(d => { const y = dersYuzde(S.sinif, d); return `<div class="prow" style="--c:${DERS[d].r}"><span>${DERS[d].e} ${DERS[d].ad}</span><div class="bar"><i style="width:${y}%"></i></div><em>%${y}</em></div>`; }).join('')}</div>`;
}
function ayarSayfa() {
  const p = (act, cur, list) => `<div class="pick">${list.map(([v, t]) => `<button data-act="${act}" data-v="${v}" class="${String(cur) === String(v) ? 'on' : ''}">${t}</button>`).join('')}</div>`;
  return `${baslik('⚙️ Ayarlar')}
  <div class="card"><label class="f" style="margin-top:0">Ad</label><div class="row"><input type="text" id="aad" maxlength="20" value="${esc(S.ad)}"><button class="btn sm" data-act="adKaydet">Kaydet</button></div>
  <label class="f">Sınıf</label>${p('aSinif', S.sinif, [1, 2, 3, 4].map(n => [n, n + '. sınıf']))}
  <label class="f">Karakter</label><div class="pick av">${AVATAR.map(a => `<button data-act="aAv" data-v="${a}" class="${a === S.av ? 'on' : ''}">${a}</button>`).join('')}</div>
  <label class="f">Günlük soru hedefi</label>${p('aHedef', S.hedef, [[10, '10'], [20, '20'], [30, '30'], [50, '50']])}
  <label class="f">Soruları ve konuları sesli oku</label>${p('aOku', S.oku ? 1 : 0, [[1, 'Açık'], [0, 'Kapalı']])}
  <label class="f">Ses efektleri</label>${p('aSes', S.ses ? 1 : 0, [[1, 'Açık'], [0, 'Kapalı']])}</div>
  <div class="sec">Veli</div><div class="card"><p class="mut sm" style="margin-bottom:10px">İlerleme yalnızca bu cihazda saklanır. Yedek almak için dışa aktarabilirsiniz.</p>
  <div class="two" style="margin-top:0"><button class="btn alt" data-act="yedek">Yedeği kopyala</button><button class="btn alt" data-act="yukle">Yedek yükle</button></div>
  <button class="btn ghost" style="margin-top:10px;color:var(--no)" data-act="sifirla">Tüm ilerlemeyi sıfırla</button></div>
  <p class="mut sm" style="text-align:center;margin-top:18px">Homework v${HW.VER} · ${HW.packs.length} ders paketi · ${Object.keys(KONU).length} konu · ${Object.values(KONU).reduce((t, k) => t + k.sorular.length, 0)} soru</p>`;
}
const ayar = (k, f) => v => { S[k] = f(v); save(); ciz(); };
ACT.aSinif = ayar('sinif', Number); ACT.aAv = ayar('av', String); ACT.aHedef = ayar('hedef', Number); ACT.aOku = ayar('oku', v => v === '1'); ACT.aSes = ayar('ses', v => v === '1');
ACT.adKaydet = () => { const a = $('#aad').value.trim(); if (a) { S.ad = a; save(); toast('Kaydedildi'); } };
ACT.yedek = () => { const t = JSON.stringify(S); (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(() => toast('Yedek panoya kopyalandı'), () => prompt('Yedeği kopyalayın:', t)); };
ACT.yukle = () => { const t = prompt('Yedek metnini yapıştırın:'); if (!t) return; try { const o = JSON.parse(t); if (!o || typeof o !== 'object' || !o.sinif) throw 0; S = Object.assign({ konu: {}, srs: {}, log: {} }, o); save(); toast('Yedek yüklendi'); ciz(); } catch (e) { toast('Yedek okunamadı'); } };
ACT.sifirla = () => { if (confirm('Tüm ilerleme silinsin mi? Bu işlem geri alınamaz.')) { localStorage.removeItem(KEY); location.hash = ''; location.reload(); } };

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(() => { });
ciz();
