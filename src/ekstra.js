/* Homework v1.2 — görevler, ödüller, müfredat takibi, veli ekranı, ayarlar, ses ve müzik */
const VARS = { jeton: 0, rozet: {}, gorev: {}, dlog: {}, muzik: false, mv: 2, sv: 2, okuHiz: 2, tit: true, anim: true, hat: { on: false, h: 18 }, tema: 'mor', temalar: ['mor'], avlar: [], limit: 0, yazi: 1, kusursuz: 0, ogr: 0, haftaTam: 0, svGor: 1 };
function varsayilan() { for (const k in VARS) if (S[k] === undefined) S[k] = JSON.parse(JSON.stringify(VARS[k])); if (S.ses === false) { S.sv = 0; S.ses = true; } }
varsayilan();
const HIZ = [0, 0.8, 1, 1.2];
const DUZEY = [[0, 'Kapalı'], [1, 'Kısık'], [2, 'Orta'], [3, 'Yüksek']];
const UNVAN = ['Çaylak', 'Meraklı', 'Kâşif', 'Çalışkan', 'Usta', 'Bilgin', 'Şampiyon', 'Efsane'];
const seviye = () => Math.floor(S.xp / 200) + 1;
const unvan = () => UNVAN[Math.min(UNVAN.length - 1, seviye() - 1)];
const bugun = () => S.log[gun()] || (S.log[gun()] = { n: 0, d: 0 });
const gunD = g => new Date(g + 'T12:00');
const haftaBasi = () => { const x = new Date(); x.setDate(x.getDate() - ((x.getDay() + 6) % 7)); return gun(x); };
const haftaGunleri = () => Array.from({ length: 7 }, (_, i) => { const x = gunD(haftaBasi()); x.setDate(x.getDate() + i); return gun(x); });
const topla = gunler => gunler.reduce((t, g) => { const l = S.log[g]; if (!l) return t; if (l.n || l.a || l.t || l.k || l.e) t.gun++; t.n += l.n || 0; t.d += l.d || 0; t.y += l.y || 0; t.t += l.t || 0; t.sn += l.sn || 0; t.oy += l.oy || 0; Object.keys(l.ders || {}).forEach(x => t.ders[x] = 1); return t; }, { gun: 0, n: 0, d: 0, y: 0, t: 0, sn: 0, oy: 0, ders: {} });
const seriSimdi = () => S.sonGun === gun() || S.sonGun === gunEkle(-1) ? S.seri : 0;
const yildizli = () => Object.keys(S.konu).filter(id => KONU[id] && yildizSay(id) > 0);
const dk = sn => Math.round((sn || 0) / 60);

/* ---------- ses, müzik, titreşim ---------- */
const SVOL = [0, 0.06, 0.14, 0.26], MVOL = [0, 0.015, 0.03, 0.055];
function ton(frekanslar, tur, sure, vol) {
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    if (actx.state === 'suspended') actx.resume();
    const t = actx.currentTime;
    frekanslar.forEach((f, i) => {
      const o = actx.createOscillator(), g = actx.createGain(), b = t + i * sure * 0.6;
      o.type = tur; o.frequency.value = f; o.connect(g); g.connect(actx.destination);
      g.gain.setValueAtTime(0.0001, b); g.gain.exponentialRampToValueAtTime(vol, b + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, b + sure);
      o.start(b); o.stop(b + sure + 0.02);
    });
  } catch (e) { /* ses yok */ }
}
function bip(ok) { if (S.sv) ton(ok ? [660, 880] : [220, 180], ok ? 'sine' : 'triangle', 0.18, SVOL[S.sv]); }
function fanfar() { if (S.sv) ton([523, 659, 784, 1047], 'sine', 0.22, SVOL[S.sv]); }
function titre(ms) { try { if (!S.tit) return; if (window.AndroidBridge && AndroidBridge.vibrate) AndroidBridge.vibrate(ms); else if (navigator.vibrate) navigator.vibrate(ms); } catch (e) { /* yok */ } }
const EZGI = [523, 659, 784, 659, 587, 698, 880, 698, 523, 659, 784, 1047, 880, 784, 659, 587];
let muzikT = null, muzikI = 0;
function muzikAyar() {
  clearInterval(muzikT); muzikT = null;
  if (!S.muzik || !S.mv || document.hidden) return;
  muzikT = setInterval(() => { const f = EZGI[muzikI++ % EZGI.length]; ton([f / 2], 'triangle', 0.5, MVOL[S.mv]); if (muzikI % 4 === 1) ton([f / 4], 'sine', 0.9, MVOL[S.mv]); }, 420);
}
document.addEventListener('visibilitychange', muzikAyar);
document.addEventListener('click', function ilk() { document.removeEventListener('click', ilk); muzikAyar(); });
function hatirlatAyar() { try { if (window.AndroidBridge && AndroidBridge.setReminder) AndroidBridge.setReminder(!!S.hat.on, S.hat.h, 0, 'Homework seni bekliyor! 🎒', 'Bugünkü görevlerini tamamlamaya ne dersin?'); } catch (e) { /* yok */ } }

/* ---------- tema ve kutlama ---------- */
const TEMA = { mor: ['Mor', '#4f46e5', '#7c3aed'], deniz: ['Deniz', '#0284c7', '#0d9488'], orman: ['Orman', '#15803d', '#65a30d'], gunes: ['Güneş', '#ea580c', '#e11d48'], seker: ['Şeker', '#db2777', '#9333ea'], gece: ['Gece', '#334155', '#0f172a'] };
const AV_EK = ['🐲', '🦖', '🦸', '🧙', '🤖', '👑', '🦋', '🐧', '🦈', '🦜', '🐉', '⚽'];
function temaUygula() {
  const t = TEMA[S.tema] || TEMA.mor, k = document.documentElement.style;
  k.setProperty('--pri', t[1]); k.setProperty('--g1', t[1]); k.setProperty('--g2', t[2]); k.setProperty('--pri2', 'color-mix(in srgb,' + t[1] + ' 11%,#fff)');
  $('#app').style.zoom = S.yazi === 2 ? 1.12 : 1;
}
function konfeti() {
  if (!S.anim) return;
  const k = document.createElement('div'); k.className = 'konfeti';
  k.innerHTML = Array.from({ length: 36 }, (_, i) => `<i style="left:${R(0, 100)}%;background:${pick(['#f59e0b', '#ef4444', '#22c55e', '#3b82f6', '#a855f7', '#ec4899'])};animation-delay:${R(0, 400)}ms;animation-duration:${R(1100, 1900)}ms;transform:rotate(${R(0, 360)}deg)"></i>`).join('');
  document.body.appendChild(k); setTimeout(() => k.remove(), 2600);
}
let kutlaSira = [], kutlaT = null;
function kutla(m) { kutlaSira.push(m); clearTimeout(kutlaT); kutlaT = setTimeout(kutlaGoster, 60); }
function kutlaGoster() {
  const t = $('#toast'), m = kutlaSira.splice(0); if (!m.length) return;
  t.innerHTML = m.slice(-4).map(esc).join('<br>'); t.classList.add('on', 'odul'); fanfar(); konfeti();
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on', 'odul'), 2200 + m.length * 500);
}

/* ---------- görevler ---------- */
const GUNLUK = [
  { id: 'soru', e: '✏️', ad: () => S.hedef + ' soru çöz', v: l => [l.n || 0, S.hedef] },
  { id: 'ogren', e: '📖', ad: () => '1 konu anlatımı bitir', v: l => [l.a || 0, 1] },
  { id: 'test', e: '✅', ad: () => '1 test bitir', v: l => [l.t || 0, 1] },
  { id: 'dogru', e: '🎯', ad: () => '15 doğru cevap ver', v: l => [l.d || 0, 15] },
  { id: 'esle', e: '🧩', ad: () => '1 eşleştirme oyunu bitir', v: l => [l.e || 0, 1] },
  { id: 'kart', e: '🃏', ad: () => '1 kart destesi bitir', v: l => [l.k || 0, 1] },
  { id: 'iki', e: '📚', ad: () => '2 farklı ders çalış', v: l => [Object.keys(l.ders || {}).length, 2] },
];
const HAFTALIK = [
  { id: 'gun', e: '📅', ad: '5 gün çalış', v: h => [h.gun, 5] },
  { id: 'soru', e: '✏️', ad: '100 soru çöz', v: h => [h.n, 100] },
  { id: 'yildiz', e: '⭐', ad: '3 yeni konuda yıldız kazan', v: h => [h.y, 3] },
  { id: 'ders', e: '📚', ad: '4 farklı ders çalış', v: h => [Object.keys(h.ders).length, 4] },
];
function gunlukSec() {
  const s = [...gun()].reduce((t, c) => (t * 31 + c.charCodeAt(0)) >>> 0, 7), i = 1 + s % 6; let j = 1 + (s >> 3) % 5; if (j >= i) j++;
  return [GUNLUK[0], GUNLUK[i], GUNLUK[j]];
}
const gDurum = () => gunlukSec().map(g => { const [a, b] = g.v(bugun()); return { ...g, ad: g.ad(), a: Math.min(a, b), b, ok: a >= b }; });
const hDurum = () => { const h = topla(haftaGunleri()); return HAFTALIK.map(g => { const [a, b] = g.v(h); return { ...g, a: Math.min(a, b), b, ok: a >= b }; }); };
function gorevKontrol() {
  const g = S.gorev;
  if (g.gd !== gun()) { g.gd = gun(); g.g = {}; }
  if (g.hd !== haftaBasi()) { g.hd = haftaBasi(); g.h = {}; }
  const gd = gDurum(), hd = hDurum();
  gd.forEach(x => { if (x.ok && !g.g[x.id]) { g.g[x.id] = 1; S.jeton += 20; kutla(`Görev tamam: ${x.ad}  +20 🪙`); } });
  if (gd.every(x => x.ok) && !g.g.hepsi) { g.g.hepsi = 1; S.jeton += 50; kutla('🎁 Günün tüm görevleri bitti!  +50 🪙'); }
  hd.forEach(x => { if (x.ok && !g.h[x.id]) { g.h[x.id] = 1; S.jeton += 100; kutla(`Haftalık görev tamam: ${x.ad}  +100 🪙`); } });
  if (hd.every(x => x.ok) && !g.h.hepsi) { g.h.hepsi = 1; S.jeton += 200; S.haftaTam++; kutla('🏆 Haftanın tüm görevleri bitti!  +200 🪙'); }
  if (seviye() > S.svGor) { S.svGor = seviye(); S.jeton += 50; kutla(`Seviye ${seviye()}: ${unvan()}!  +50 🪙`); }
  ROZET.forEach(r => { if (!S.rozet[r.id] && r.ok()) { S.rozet[r.id] = gun(); S.jeton += 30; kutla(`Yeni rozet: ${r.e} ${r.ad}  +30 🪙`); } });
}
function olay(tur, ders, v) {
  const l = bugun(); if (ders) (l.ders || (l.ders = {}))[ders] = 1;
  if (tur === 't') { l.t = (l.t || 0) + 1; S.jeton += v.y >= 90 ? 15 : v.y >= 70 ? 10 : v.y >= 50 ? 5 : 0; if (v.y === 100) S.kusursuz++; if (v.yeni) l.y = (l.y || 0) + 1; if (v.y >= 70) konfeti(); }
  else { l[tur] = (l[tur] || 0) + 1; S.jeton += 5; }
  seriGuncelle(); gorevKontrol(); save();
}

/* ---------- rozetler ---------- */
const topSoru = () => Object.values(S.log).reduce((t, l) => t + (l.n || 0), 0);
const ucYildiz = () => Object.keys(S.konu).filter(id => KONU[id] && yildizSay(id) === 3).length;
const dersBitti = () => dersler(S.sinif).some(d => konular(S.sinif, d).every(k => yildizSay(k.id) > 0));
const ROZET = [
  { id: 'ilk', e: '🌱', ad: 'İlk Adım', ac: 'İlk testini bitir', ok: () => Object.values(S.log).some(l => l.t) },
  { id: 's50', e: '✏️', ad: 'Soru Avcısı', ac: '50 soru çöz', ok: () => topSoru() >= 50 },
  { id: 's250', e: '📝', ad: 'Soru Ustası', ac: '250 soru çöz', ok: () => topSoru() >= 250 },
  { id: 's1000', e: '🚀', ad: 'Soru Roketi', ac: '1000 soru çöz', ok: () => topSoru() >= 1000 },
  { id: 'seri3', e: '🔥', ad: 'Isınıyor', ac: '3 gün üst üste çalış', ok: () => seriSimdi() >= 3 },
  { id: 'seri7', e: '🌟', ad: 'Bir Hafta', ac: '7 gün üst üste çalış', ok: () => seriSimdi() >= 7 },
  { id: 'seri30', e: '☄️', ad: 'Durdurulamaz', ac: '30 gün üst üste çalış', ok: () => seriSimdi() >= 30 },
  { id: 'k5', e: '⭐', ad: 'Yıldız Toplayıcı', ac: '5 konuda yıldız kazan', ok: () => yildizli().length >= 5 },
  { id: 'k20', e: '🌠', ad: 'Yıldız Yağmuru', ac: '20 konuda yıldız kazan', ok: () => yildizli().length >= 20 },
  { id: 'k50', e: '🌌', ad: 'Gökyüzü', ac: '50 konuda yıldız kazan', ok: () => yildizli().length >= 50 },
  { id: 'uc5', e: '💎', ad: 'Pırlanta', ac: '5 konuda 3 yıldız al', ok: () => ucYildiz() >= 5 },
  { id: 'tam', e: '🎯', ad: 'Tam İsabet', ac: 'Bir testi hatasız bitir', ok: () => S.kusursuz >= 1 },
  { id: 'tam10', e: '🏹', ad: 'Keskin Nişancı', ac: '10 testi hatasız bitir', ok: () => S.kusursuz >= 10 },
  { id: 'kasif', e: '🧭', ad: 'Kâşif', ac: '5 farklı ders çalış', ok: () => Object.keys(S.dlog).length >= 5 },
  { id: 'hafiza', e: '🧠', ad: 'Hafıza Ustası', ac: 'Tekrarla 10 soruyu kalıcı öğren', ok: () => S.ogr >= 10 },
  { id: 'hafta', e: '🏆', ad: 'Haftanın Yıldızı', ac: 'Bir haftanın tüm görevlerini bitir', ok: () => S.haftaTam >= 1 },
  { id: 'ders', e: '🎓', ad: 'Ders Bitirici', ac: 'Bir dersin tüm konularında yıldız kazan', ok: dersBitti },
  { id: 'sv5', e: '👑', ad: 'Usta', ac: '5. seviyeye ulaş', ok: () => seviye() >= 5 },
];

/* ---------- müfredat takvimi ---------- */
function okulOran() {
  const t = new Date(), y = t.getMonth() >= 8 ? t.getFullYear() : t.getFullYear() - 1, a = new Date(y, 8, 8), b = new Date(y + 1, 5, 19);
  return Math.max(0, Math.min(1, (t - a) / (b - a)));
}
function mufredat(d) {
  const ks = konular(S.sinif, d), bekl = Math.min(ks.length, Math.floor(okulOran() * ks.length)), biten = ks.filter(k => yildizSay(k.id) > 0).length;
  return { ks, bekl, biten, fark: biten - bekl, okul: ks[Math.min(ks.length - 1, bekl)], sira: ks.find(k => yildizSay(k.id) === 0) };
}

/* ---------- ana sayfa ---------- */
const SOZ = ['Bugün yeni bir şey öğrenmeye hazır mısın?', 'Her gün biraz, her gün daha iyi!', 'Görevlerini bitir, sandığı aç!', 'Birlikte harika işler çıkaracağız!', 'Hadi yıldızları toplayalım!'];
const gorevSatir = x => `<div class="gv ${x.ok ? 'ok' : ''}"><i>${x.ok ? '✓' : x.e}</i><span class="sp"><b>${x.ad}</b><div class="bar"><i style="width:${x.a / x.b * 100}%"></i></div></span><em>${x.a}/${x.b}</em></div>`;
function evim() {
  gorevKontrol(); save();
  const gd = gDurum(), n = bekleyen().length + tekrarKonu().length;
  const son = KONU[S.son] && KONU[S.son].sinif === S.sinif ? KONU[S.son] : null;
  return `<div class="top"><button class="av zipla" data-go="#/odul">${S.av}</button><div class="sp"><h1>Merhaba ${esc(S.ad)}!</h1><div class="mut sm">${S.sinif}. sınıf · Seviye ${seviye()} ${unvan()}</div></div><button class="ib" data-go="#/ayar" aria-label="Ayarlar">⚙️</button></div>
  <div class="chips"><button class="chip" data-go="#/karne">🔥 ${seriSimdi()} gün</button><button class="chip" data-go="#/odul">🪙 ${S.jeton}</button><button class="chip" data-go="#/odul">🏅 ${Object.keys(S.rozet).length}/${ROZET.length}</button></div>
  <div class="balon"><span>${S.av}</span><p>${pick(SOZ)}</p></div>
  <button class="hero gorevler" data-go="#/gorev"><div class="row"><h2 class="sp">🎁 Bugünkü Görevler</h2><b>${gd.filter(x => x.ok).length}/3</b></div>${gd.map(gorevSatir).join('')}<div class="sm" style="opacity:.9;margin-top:8px">Haftalık görevleri gör ›</div></button>
  ${n ? `<button class="card cta" data-go="#/tekrar"><span class="em">🔁</span><span class="sp"><b>Tekrar zamanı</b><span class="mut sm">Unutmamak için ${n} tekrar seni bekliyor</span></span><span class="badge">${n}</span></button>` : ''}
  ${son ? `<button class="card cta" style="--c:${DERS[son.ders].r}" data-go="#/k/${son.id}"><span class="em">${son.e}</span><span class="sp"><b>Kaldığın yerden devam et</b><span class="mut sm">${DERS[son.ders].ad} · ${esc(son.ad)}</span></span><span>›</span></button>` : ''}
  <p class="lead">Hangi dersi çalışalım?</p>
  <div class="grid">${dersler(S.sinif).map((d, i) => { const m = mufredat(d); return `<button class="tile gir" style="--c:${DERS[d].r};animation-delay:${i * 45}ms" data-go="#/d/${d}"><span class="em">${DERS[d].e}</span><b>${DERS[d].ad}</b><span class="sm">${m.biten}/${m.ks.length} konu${oyunlar(d).length ? ' · 🎮' : ''}</span><div class="bar"><i style="width:${m.biten / m.ks.length * 100}%"></i></div></button>`; }).join('')}</div>
  <div class="alt"><button data-go="#/odul"><span>🏆</span>Ödüllerim</button><button data-go="#/karne"><span>📊</span>Karnem</button><button data-go="#/veli"><span>👨‍👩‍👧</span>Veli</button></div>`;
}

/* ---------- ders sayfası: müfredat yolu ---------- */
function dersSayfa(d) {
  const D = DERS[d], ps = paketler(S.sinif, d), apps = oyunlar(d);
  if (!ps.length) return baslik(D.ad) + `<div class="card">Bu ders ${S.sinif}. sınıfta yok.</div>`;
  const m = mufredat(d); let no = 0;
  return `<div style="--c:${D.r}">${baslik(D.e + ' ' + D.ad)}${adim(1)}
  <div class="card yol"><div class="row"><b class="sp">Müfredat yolun</b><b>${m.biten}/${m.ks.length} konu</b></div><div class="bar"><i style="width:${m.biten / m.ks.length * 100}%"></i><u style="left:${m.bekl / m.ks.length * 100}%"></u></div>
  <div class="mut sm">📍 Okulda şu sıralar: <b>${esc(m.okul.ad)}</b></div>${m.sira ? `<button class="btn sm" style="background:${D.r};margin-top:10px;width:100%" data-go="#/k/${m.sira.id}">Sıradaki konu: ${esc(m.sira.ad)} →</button>` : '<div class="sm" style="margin-top:6px">🎓 Bu dersin tüm konularını tamamladın!</div>'}</div>
  ${apps.length ? `<div class="games">${apps.map(a => `<button class="game" data-act="app" data-v="${a.id}"><span class="em">${a.e}</span><b>${a.ad}</b><span class="mut sm">${a.ac}</span></button>`).join('')}</div>` : ''}
  ${ps.map(p => p.uniteler.map(u => `<div class="sec">${esc(u.ad)}</div>${u.konular.map(k => { no++; const y = yildizSay(k.id), sira = m.sira && m.sira.id === k.id; return `<button class="li ${sira ? 'sira' : ''} ${y ? 'bitti' : ''}" data-go="#/k/${k.id}"><span class="em">${y ? '✓' : k.e}</span><span class="sp"><b>${no}. ${esc(k.ad)}</b>${sira ? '<span class="etk">Sıradaki</span>' : ''}${m.okul.id === k.id ? '<span class="etk okul">📍 Okulda bu sıralar</span>' : ''}</span>${y ? yildiz(y) : '<span class="mut">›</span>'}</button>`; }).join('')}`).join('')).join('')}
  <button class="btn ghost" style="margin-top:16px" data-act="deneme" data-v="${d}">🎯 Tüm konulardan deneme sınavı</button></div>`;
}

/* ---------- görevler ve ödüller ---------- */
function gorevSayfa() {
  gorevKontrol(); save();
  const gd = gDurum(), hd = hDurum();
  return `${baslik('🎁 Görevler')}
  <div class="sec">Bugün · her görev 20 🪙, hepsi +50 🪙</div><div class="card gvk">${gd.map(gorevSatir).join('')}</div>
  <div class="sec">Bu hafta · her görev 100 🪙, hepsi +200 🪙</div><div class="card gvk">${hd.map(gorevSatir).join('')}</div>
  <p class="mut sm" style="text-align:center;margin-top:14px">Günlük görevler her gün, haftalık görevler her pazartesi yenilenir.</p>`;
}
function odulSayfa() {
  const sv = seviye(), ic = S.xp % 200;
  const al = (tur, v, fiyat, sahip, ic2) => `<button class="${sahip ? 'var' : ''} ${(tur === 'av' ? S.av : S.tema) === v ? 'on' : ''}" data-act="al" data-v="${tur}:${v}:${fiyat}">${ic2}<small>${sahip ? ((tur === 'av' ? S.av : S.tema) === v ? 'Seçili' : 'Kullan') : fiyat + ' 🪙'}</small></button>`;
  return `${baslik('🏆 Ödüllerim')}
  <div class="hero"><div class="row"><span style="font-size:44px">${S.av}</span><div class="sp"><h2>Seviye ${sv} · ${unvan()}</h2><div class="sm" style="opacity:.9">Sonraki seviyeye ${200 - ic} puan</div></div><b style="font-size:20px">🪙 ${S.jeton}</b></div><div class="bar"><i style="width:${ic / 2}%"></i></div></div>
  <div class="sec">Rozetlerim · ${Object.keys(S.rozet).length}/${ROZET.length}</div>
  <div class="rozetler">${ROZET.map(r => `<div class="${S.rozet[r.id] ? 'var' : ''}"><span>${S.rozet[r.id] ? r.e : '🔒'}</span><b>${r.ad}</b><small>${r.ac}</small></div>`).join('')}</div>
  <div class="sec">Karakter dükkânı</div><div class="dukkan">${AV_EK.map(a => al('av', a, 100, S.avlar.includes(a), `<span>${a}</span>`)).join('')}</div>
  <div class="sec">Tema dükkânı</div><div class="dukkan tema">${Object.keys(TEMA).map(t => al('tema', t, 150, S.temalar.includes(t), `<span style="background:linear-gradient(135deg,${TEMA[t][1]},${TEMA[t][2]})"></span><b>${TEMA[t][0]}</b>`)).join('')}</div>
  <p class="mut sm" style="text-align:center;margin-top:14px">Jeton kazanmak için görevleri tamamla, testlerde yıldız topla, rozet kazan.</p>`;
}
ACT.al = v => {
  const [tur, ne, fiyat] = v.split(':'), liste = tur === 'av' ? S.avlar : S.temalar;
  if (!liste.includes(ne)) { if (S.jeton < +fiyat) return toast(`Bunun için ${fiyat - S.jeton} jeton daha lazım`); S.jeton -= +fiyat; liste.push(ne); konfeti(); fanfar(); }
  if (tur === 'av') S.av = ne; else S.tema = ne;
  save(); temaUygula(); ciz();
};

/* ---------- ayarlar ---------- */
const secim = (act, cur, list) => `<div class="pick">${list.map(([v, t]) => `<button data-act="${act}" data-v="${v}" class="${String(cur) === String(v) ? 'on' : ''}">${t}</button>`).join('')}</div>`;
const ACIK = [[1, 'Açık'], [0, 'Kapalı']];
function ayarSayfa() {
  const avlar = AVATAR.concat(S.avlar), android = !!window.AndroidBridge;
  return `${baslik('⚙️ Ayarlar')}
  <div class="sec">Profil</div><div class="card"><label class="f" style="margin-top:0">Ad</label><div class="row"><input type="text" id="aad" maxlength="20" value="${esc(S.ad)}"><button class="btn sm" data-act="adKaydet">Kaydet</button></div>
  <label class="f">Sınıf</label>${secim('aSinif', S.sinif, [1, 2, 3, 4].map(n => [n, n + '. sınıf']))}
  <label class="f">Karakter</label><div class="pick av">${avlar.map(a => `<button data-act="aAv" data-v="${a}" class="${a === S.av ? 'on' : ''}">${a}</button>`).join('')}</div></div>
  <div class="sec">Ses</div><div class="card"><label class="f" style="margin-top:0">Uyarı ve efekt sesleri</label>${secim('aSv', S.sv, DUZEY)}
  <label class="f">Arka plan müziği</label>${secim('aMuzik', S.muzik ? 1 : 0, ACIK)}
  <label class="f">Müzik ses düzeyi</label>${secim('aMv', S.mv, DUZEY.slice(1))}
  <label class="f">Soruları ve konuları sesli oku</label>${secim('aOku', S.oku ? 1 : 0, ACIK)}
  <label class="f">Okuma hızı</label>${secim('aHiz', S.okuHiz, [[1, 'Yavaş'], [2, 'Normal'], [3, 'Hızlı']])}
  <div class="two"><button class="btn alt" data-act="sesDene">🔔 Efekti dene</button><button class="btn alt" data-act="okuDene">🔊 Okumayı dene</button></div></div>
  <div class="sec">Görünüm ve his</div><div class="card"><label class="f" style="margin-top:0">Yazı boyutu</label>${secim('aYazi', S.yazi, [[1, 'Normal'], [2, 'Büyük']])}
  <label class="f">Konfeti ve animasyonlar</label>${secim('aAnim', S.anim ? 1 : 0, ACIK)}
  <label class="f">Yanlış cevapta titreşim</label>${secim('aTit', S.tit ? 1 : 0, ACIK)}
  <label class="f">Tema</label>${secim('aTema', S.tema, S.temalar.map(t => [t, TEMA[t][0]]))}<p class="mut sm" style="margin-top:8px">Yeni tema ve karakterleri Ödüllerim sayfasından jetonla alabilirsin.</p></div>
  <div class="sec">Hatırlatma</div><div class="card">${android ? `<label class="f" style="margin-top:0">Günlük çalışma bildirimi</label>${secim('aHat', S.hat.on ? 1 : 0, ACIK)}<label class="f">Bildirim saati</label>${secim('aHatS', S.hat.h, [16, 17, 18, 19, 20].map(h => [h, h + ':00']))}` : '<p class="mut sm">Günlük hatırlatma bildirimi yalnızca Android uygulamasında çalışır.</p>'}</div>
  <button class="btn ghost" style="margin-top:16px" data-go="#/veli">👨‍👩‍👧 Veli ekranı (hedef, süre sınırı, yedek)</button>
  <p class="mut sm" style="text-align:center;margin-top:18px">Homework v${HW.VER} · ${Object.keys(KONU).length} konu · ${Object.values(KONU).reduce((t, k) => t + k.sorular.length, 0)} soru</p>`;
}
const ayar = (k, f, sonra) => v => { S[k] = f(v); save(); if (sonra) sonra(); ciz(); };
const acik = v => v === '1';
ACT.aSinif = ayar('sinif', Number); ACT.aAv = ayar('av', String); ACT.aHedef = ayar('hedef', Number); ACT.aOku = ayar('oku', acik);
ACT.aSv = ayar('sv', Number, () => bip(true)); ACT.aMuzik = ayar('muzik', acik, muzikAyar); ACT.aMv = ayar('mv', Number, muzikAyar); ACT.aHiz = ayar('okuHiz', Number);
ACT.aYazi = ayar('yazi', Number, temaUygula); ACT.aAnim = ayar('anim', acik); ACT.aTit = ayar('tit', acik, () => titre(60)); ACT.aTema = ayar('tema', String, temaUygula); ACT.aLimit = ayar('limit', Number);
ACT.aHat = v => { S.hat.on = acik(v); save(); hatirlatAyar(); ciz(); };
ACT.aHatS = v => { S.hat.h = +v; save(); hatirlatAyar(); ciz(); };
ACT.sesDene = () => { if (!S.sv) return toast('Efekt sesleri kapalı'); fanfar(); };
ACT.okuDene = () => soyle('Merhaba ' + S.ad + '! Sesim böyle duyuluyor.', false);

/* ---------- süre takibi ve mola ---------- */
let molaGec = '', sayac = 0;
setInterval(() => { if (document.hidden || !S.ad) return; const l = bugun(); l.sn = (l.sn || 0) + 15; if (++sayac % 4 === 0) save(); }, 15000);
const molaVar = () => S.limit > 0 && molaGec !== gun() && ((bugun().sn || 0) + (bugun().oy || 0)) >= S.limit * 60;
const molaSayfa = () => `<div class="card res" style="margin-top:40px"><div class="big">🌙</div><h2>Bugünlük bu kadar!</h2><p class="mut">Bugün ${dk((bugun().sn || 0) + (bugun().oy || 0))} dakika çalıştın. Harika iş çıkardın, şimdi dinlenme zamanı. Yarın görüşürüz!</p><button class="btn ghost" style="margin-top:18px" data-go="#/veli">Veli: devam etmeye izin ver</button></div>`;

/* ---------- veli ekranı ---------- */
let veliAcik = false, veliSoru = null;
function veliSayfa() {
  if (!veliAcik) {
    veliSoru = veliSoru || [R(6, 9), R(6, 9)];
    return `${baslik('👨‍👩‍👧 Veli Ekranı')}<div class="card"><p>Bu bölüm veliler içindir. Devam etmek için işlemin sonucunu yazın:</p><p style="font-size:26px;font-weight:800;text-align:center;margin:14px 0">${veliSoru[0]} × ${veliSoru[1]} = ?</p><div class="row"><input type="text" id="vcevap" inputmode="numeric" maxlength="3" placeholder="Sonuç"><button class="btn sm" data-act="veliGir">Gir</button></div></div>`;
  }
  const h = topla(haftaGunleri()), b = topla([gun()]), son14 = Array.from({ length: 14 }, (_, i) => gunEkle(i - 13)), t14 = son14.map(g => { const l = S.log[g] || {}; return dk((l.sn || 0) + (l.oy || 0)); }), mx = Math.max(30, ...t14);
  const yuzde = (d, n) => n ? '%' + Math.round(d / n * 100) : '–';
  const dl = dersler(S.sinif).map(d => ({ d, m: mufredat(d), x: S.dlog[d] || { n: 0, d: 0 } }));
  const zayif = Object.keys(S.konu).filter(id => KONU[id] && KONU[id].sinif === S.sinif && S.konu[id].t != null && S.konu[id].t < 70).sort((a, c) => S.konu[a].t - S.konu[c].t).slice(0, 6);
  const srsKonu = {}; Object.keys(S.srs).forEach(q => { const id = q.split('#')[0]; if (KONU[id]) srsKonu[id] = (srsKonu[id] || 0) + 1; });
  const cokYanlis = Object.keys(srsKonu).sort((a, c) => srsKonu[c] - srsKonu[a]).slice(0, 5);
  return `${baslik('👨‍👩‍👧 Veli Ekranı')}
  <div class="card"><b>${esc(S.ad)} · ${S.sinif}. sınıf</b><div class="kv"><div><b>${dk(b.sn + b.oy)} dk</b><span class="mut sm">bugün</span></div><div><b>${dk(h.sn + h.oy)} dk</b><span class="mut sm">bu hafta</span></div><div><b>${h.gun}/7</b><span class="mut sm">çalışılan gün</span></div></div>
  <div class="kv" style="margin-bottom:0"><div><b>${h.n}</b><span class="mut sm">haftalık soru</span></div><div><b>${yuzde(h.d, h.n)}</b><span class="mut sm">haftalık başarı</span></div><div><b>🔥 ${seriSimdi()}</b><span class="mut sm">gün seri</span></div></div></div>
  <div class="sec">Uyarılar ve öneriler</div>${oneriler(h, dl).map(o => `<div class="oneri ${o[0]}"><span>${{ uyari: '⚠️', oneri: '💡', iyi: '✅' }[o[0]]}</span><p>${o[1]}</p></div>`).join('')}
  <div class="sec">Son 14 gün · günlük süre (dk)</div><div class="card"><div class="days">${son14.map((g, i) => `<div>${t14[i] || ''}<i style="height:${t14[i] / mx * 80}%"></i>${gunD(g).getDate()}</div>`).join('')}</div><div class="mut sm" style="margin-top:8px">Bu haftaki sürenin ${dk(h.oy)} dakikası oyunlarda geçti.</div></div>
  <div class="sec">Dersler · ilerleme, başarı, müfredat</div><div class="card tablo"><div class="tr th"><span>Ders</span><span>Konu</span><span>Başarı</span><span>Müfredat</span></div>${dl.map(({ d, m, x }) => `<div class="tr"><span>${DERS[d].e} ${DERS[d].ad}</span><span>${m.biten}/${m.ks.length}</span><span class="${x.n >= 10 && x.d / x.n < 0.6 ? 'kotu' : ''}">${yuzde(x.d, x.n)}</span><span class="${m.fark <= -3 ? 'kotu' : m.fark >= 0 ? 'iyi' : ''}">${m.fark > 0 ? '+' + m.fark : m.fark}</span></div>`).join('')}<p class="mut sm" style="margin-top:8px">Müfredat sütunu, okul takvimine göre beklenen konu sayısıyla farkı gösterir (eksi: geride, artı: önde). Takvim yaklaşık hesaplanır; okulunuzun hızı farklı olabilir.</p></div>
  <div class="sec">Desteklenmesi gereken konular</div><div class="card">${zayif.length || cokYanlis.length ? zayif.map(id => `<div class="prow"><span style="width:auto;flex:1">${DERS[KONU[id].ders].e} ${esc(KONU[id].ad)}</span><em style="width:auto">test %${S.konu[id].t}</em></div>`).join('') + cokYanlis.filter(id => !zayif.includes(id)).map(id => `<div class="prow"><span style="width:auto;flex:1">${DERS[KONU[id].ders].e} ${esc(KONU[id].ad)}</span><em style="width:auto">${srsKonu[id]} yanlış</em></div>`).join('') : '<p class="mut sm">Şu an belirgin bir zayıf konu görünmüyor.</p>'}</div>
  <div class="sec">Veli ayarları</div><div class="card"><label class="f" style="margin-top:0">Günlük soru hedefi</label>${secim('aHedef', S.hedef, [[10, '10'], [20, '20'], [30, '30'], [50, '50']])}
  <label class="f">Günlük süre sınırı</label>${secim('aLimit', S.limit, [[0, 'Yok'], [30, '30 dk'], [45, '45 dk'], [60, '60 dk'], [90, '90 dk']])}
  ${molaVar() ? '<button class="btn" style="margin-top:14px" data-act="molaGec">Bugün için süre sınırını kaldır</button>' : ''}
  <label class="f">Yedekleme</label><div class="two" style="margin-top:0"><button class="btn alt" data-act="yedek">Yedeği kopyala</button><button class="btn alt" data-act="yukle">Yedek yükle</button></div>
  <button class="btn ghost" style="margin-top:10px;color:var(--no)" data-act="sifirla">Tüm ilerlemeyi sıfırla</button></div>
  <button class="link" data-act="veliCik">Veli ekranını kilitle</button>`;
}
function oneriler(h, dl) {
  const o = [], ara = S.sonGun ? gunFark(S.sonGun) : 99, n = bekleyen().length, ort = dk(topla(Array.from({ length: 7 }, (_, i) => gunEkle(-i))).sn / 7);
  if (!S.sonGun) o.push(['oneri', 'Henüz çalışma kaydı yok. İlk gün birlikte bir konu seçip "Öğren" adımını beraber yapmanız alışkanlık kazanmasını kolaylaştırır.']);
  else if (ara >= 3) o.push(['uyari', `${ara} gündür çalışma yok. Günde 15-20 dakikalık kısa ve düzenli çalışma, haftada bir uzun çalışmadan daha etkilidir. Ayarlar'dan günlük hatırlatma açabilirsiniz.`]);
  if (seriSimdi() >= 5) o.push(['iyi', `${seriSimdi()} gündür aralıksız çalışıyor. Bu düzeni takdir etmeniz motivasyonunu artırır.`]);
  if (h.n >= 20 && h.d / h.n < 0.6) o.push(['uyari', `Bu haftaki başarı %${Math.round(h.d / h.n * 100)}. Sorular zor geliyor olabilir; teste geçmeden önce "Öğren" ve "Hatırla" adımlarını birlikte yapmayı deneyin.`]);
  if (h.n >= 30 && h.d / h.n >= 0.85) o.push(['iyi', `Bu haftaki başarı %${Math.round(h.d / h.n * 100)}. Konuları iyi kavramış görünüyor.`]);
  dl.filter(x => x.x.n >= 15 && x.x.d / x.x.n < 0.6).forEach(x => o.push(['uyari', `${DERS[x.d].ad} dersinde başarı %${Math.round(x.x.d / x.x.n * 100)}. Bu dersin konu anlatımlarını birlikte gözden geçirmeniz yararlı olur.`]));
  const geri = dl.filter(x => x.m.fark <= -3).sort((a, c) => a.m.fark - c.m.fark).slice(0, 3);
  if (geri.length) o.push(['oneri', 'Okul takvimine göre geride kalan dersler: ' + geri.map(x => `${DERS[x.d].ad} (${-x.m.fark} konu; okulda şu sıralar "${esc(x.m.okul.ad)}")`).join(', ') + '. Her gün bu derslerden bir konu çalışılması arayı kapatır.']);
  const hic = dl.filter(x => !x.x.n && ['turkce', 'matematik', 'hayat', 'fen', 'sosyal', 'ingilizce'].includes(x.d)).map(x => DERS[x.d].ad);
  if (hic.length && S.sonGun) o.push(['oneri', `Henüz hiç çalışılmayan ana dersler: ${hic.join(', ')}.`]);
  if (n >= 20) o.push(['oneri', `${n} tekrar sorusu birikmiş. Yeni konuya geçmeden önce "Tekrar zamanı" kartından birikmiş tekrarların bitirilmesi kalıcı öğrenmeyi sağlar.`]);
  if (ort > 90) o.push(['uyari', `Son 7 günde günlük ortalama ${ort} dakika ekran başında. İlkokul çağı için süre sınırı koymayı düşünebilirsiniz (aşağıda).`]);
  if (h.oy > h.sn * 2 && h.oy > 1800) o.push(['oneri', 'Bu hafta oyunlarda geçen süre ders çalışma süresinin iki katından fazla. Önce günlük görevlerin bitirilmesini kural hâline getirebilirsiniz.']);
  if (S.gorev.h && S.gorev.h.hepsi) o.push(['iyi', 'Bu haftanın tüm görevlerini tamamladı.']);
  if (!o.length) o.push(['iyi', 'Şu an dikkat gerektiren bir durum görünmüyor. Düzenli çalışma sürüyor.']);
  return o;
}
ACT.veliGir = () => { if (+$('#vcevap').value === veliSoru[0] * veliSoru[1]) { veliAcik = true; ciz(); } else { veliSoru = null; toast('Sonuç yanlış'); ciz(); } };
ACT.veliCik = () => { veliAcik = false; veliSoru = null; git('#/'); };
ACT.molaGec = () => { molaGec = gun(); toast('Bugün için süre sınırı kaldırıldı'); ciz(); };

temaUygula();
