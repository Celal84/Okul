// Matematik sorularında "a işlem b" biçimindeki ifadeleri hesaplayıp ilk (doğru) seçenekle karşılaştırır; üreticileri de sınar.
import fs from 'node:fs'; import vm from 'node:vm';
let bad = 0, n = 0;
for (const f of fs.readdirSync('src/data').filter(f => f.startsWith('matematik'))) {
  const packs = []; vm.runInNewContext(fs.readFileSync('src/data/' + f, 'utf8'), { HW: { add: p => packs.push(p) } });
  for (const p of packs) for (const u of p.uniteler) for (const k of u.konular) for (const q of k.sorular) {
    const m = q.s.replace(/(\d) (\d{3})/g, "$1$2").match(/(\d+)\s*([+\-−x×÷:])\s*(\d+)\s*(?:=\s*\?|işlem\w* sonucu|kaç(?:tır| eder)?\??$)/);
    if (!m || /[+\-−x×÷:]\s*\d+\s*[+\-−x×÷:]/.test(q.s)) continue;
    const a = +m[1], b = +m[3], r = { '+': a + b, '-': a - b, '−': a - b, 'x': a * b, '×': a * b, '÷': a / b, ':': a / b }[m[2]];
    const c = String(q.c[0]).replace(/\./g, '').match(/^\d+$/); if (!c) continue;
    n++; if (+c[0] !== r) { bad++; console.log(`KUŞKULU ${k.id}: ${q.s} -> ${q.c[0]} (hesap ${r})`); }
  }
}
console.log(`${n} işlem sorusu denetlendi, ${bad} kuşkulu`);
// üreticiler
const src = fs.readFileSync('src/app.js', 'utf8'); const i = src.indexOf('/* ---------- matematik soru üreticileri'), j = src.indexOf('const uret =');
const ctx = {}; vm.runInNewContext("const R=(a,b)=>a+Math.floor(Math.random()*(b-a+1));const pick=a=>a[R(0,a.length-1)];" + src.slice(i, j) + ";this.GEN=GEN", ctx);
let g = 0;
for (const [t, f] of Object.entries(ctx.GEN)) for (const m of [5, 10, 20, 100, 1000, 100000]) for (let k = 0; k < 300; k++) {
  const q = f(m);
  if (!q.s || q.c.length < 2 || new Set(q.c).size !== q.c.length || q.c.some(x => x === 'NaN' || x === 'undefined' || +x < 0) || /NaN|undefined/.test(q.s + q.a)) { g++; if (g < 12) console.log('ÜRETİCİ HATASI', t, m, JSON.stringify(q)); }
}
console.log('üretici hatası:', g);
process.exit(bad || g ? 1 : 0);
