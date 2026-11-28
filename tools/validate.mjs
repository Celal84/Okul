// İçerik dosyalarını denetler: node tools/validate.mjs [dosya...]  (boşsa src/data/*.js)
import fs from 'node:fs'; import path from 'node:path'; import vm from 'node:vm';
const DERS = ['turkce','matematik','hayat','fen','sosyal','ingilizce','din','insan','trafik','muzik','gorsel','satranc','kodlama'];
const URET = ['say','topla','cikar','carp','bol','karsilastir','oruntu','eksik','basamak','yuvarla','ritmik','kesir','saat','para','cevre','alan'];
let files = process.argv.slice(2);
if (!files.length) files = fs.readdirSync('src/data').filter(f => f.endsWith('.js')).map(f => path.join('src/data', f));
const ids = new Map(); let err = 0, nK = 0, nS = 0;
const E = (f, m) => { err++; console.log(`HATA ${f}: ${m}`); };
const str = (v, max) => typeof v === 'string' && v.trim().length > 0 && v.length <= max;
for (const f of files) {
  const packs = [];
  try { vm.runInNewContext(fs.readFileSync(f, 'utf8'), { HW: { add: p => packs.push(p) } }, { filename: f }); }
  catch (e) { E(f, 'JS hatası: ' + e.message); continue; }
  if (!packs.length) E(f, 'HW.add çağrısı yok');
  for (const p of packs) {
    if (!DERS.includes(p.ders)) E(f, 'geçersiz ders ' + p.ders);
    if (![1, 2, 3, 4].includes(p.sinif)) E(f, 'geçersiz sinif');
    if (!Array.isArray(p.uniteler) || !p.uniteler.length) { E(f, 'uniteler boş'); continue; }
    for (const u of p.uniteler) {
      if (!str(u.ad, 60)) E(f, 'ünite adı');
      for (const k of u.konular || []) {
        nK++; const w = `${f} [${k.id}]`;
        if (!/^[a-z0-9-]+$/.test(k.id || '')) E(w, 'id biçimi');
        if (ids.has(k.id)) E(w, 'id tekrar: ' + ids.get(k.id)); ids.set(k.id, f);
        if (!str(k.ad, 50)) E(w, 'konu adı (≤50)');
        if (!str(k.e, 8)) E(w, 'e (emoji) yok');
        if (!Array.isArray(k.anlat) || k.anlat.length < 3 || k.anlat.length > 6) E(w, 'anlat 3-6 kart olmalı');
        for (const a of k.anlat || []) { if (!str(a.b, 50)) E(w, 'anlat.b'); if (!str(a.m, 300)) E(w, 'anlat.m (≤300): ' + (a.m || '').length); if (a.o != null && !str(a.o, 200)) E(w, 'anlat.o (≤200)'); }
        if (!str(k.ipucu, 200)) E(w, 'ipucu (≤200)');
        if (!Array.isArray(k.kartlar) || k.kartlar.length < 6) E(w, 'en az 6 kart');
        const on = new Set();
        for (const c of k.kartlar || []) { if (!Array.isArray(c) || c.length !== 2 || !str(c[0], 60) || !str(c[1], 60)) E(w, 'kart biçimi/uzunluk (≤60): ' + JSON.stringify(c)); else { if (on.has(c[0])) E(w, 'kart ön yüz tekrar: ' + c[0]); on.add(c[0]); } }
        if (new Set((k.kartlar || []).map(c => c[1])).size !== (k.kartlar || []).length) E(w, 'kart arka yüzleri benzersiz olmalı');
        if (!Array.isArray(k.sorular) || k.sorular.length < 8) E(w, 'en az 8 soru');
        for (const q of k.sorular || []) {
          nS++;
          if (!str(q.s, 260)) E(w, 'soru metni (≤260)');
          if (!Array.isArray(q.c) || q.c.length < 2 || q.c.length > 4) { E(w, 'seçenek sayısı 2-4: ' + q.s); continue; }
          if (q.c.some(x => !str(String(x), 70))) E(w, 'seçenek uzunluğu (≤70): ' + q.s);
          if (new Set(q.c.map(x => String(x).trim().toLocaleLowerCase('tr'))).size !== q.c.length) E(w, 'aynı seçenek: ' + q.s);
          if (q.c.some(x => /hepsi|hiçbiri|yukarıdaki/i.test(String(x)))) E(w, 'hepsi/hiçbiri yasak: ' + q.s);
          if (!str(q.a, 220)) E(w, 'açıklama a (≤220): ' + q.s);
        }
        if (k.uret != null && !(Array.isArray(k.uret) && URET.includes(k.uret[0]))) E(w, 'uret geçersiz');
      }
    }
  }
}
console.log(`${files.length} dosya, ${nK} konu, ${nS} soru, ${err} hata`);
process.exit(err ? 1 : 0);
