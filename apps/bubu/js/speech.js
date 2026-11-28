/* Telaffuz değerlendirme — çocuklar için hoşgörülü eşleştirme.
 * Mükemmel telaffuz beklenmez: tanıyıcının tüm alternatifleri, ara sonuçları,
 * yazım benzerliği ve sesçil (fonetik) benzerlik birlikte değerlendirilir. */
'use strict';

const Speech = (() => {
  const NUM = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  const CONTR = { "i'm": 'i am', "don't": 'do not', "can't": 'can not', 'cannot': 'can not', "it's": 'it is',
    "let's": 'let us', "you're": 'you are', "what's": 'what is', "that's": 'that is', "i've": 'i have', "doesn't": 'does not' };
  const FILLER = new Set(['a', 'an', 'the', 'is', 'am', 'are', 'to', 'of', 'it', 'and', 'do', 'please']);
  // tanıyıcıların sık karıştırdığı/çocukların sık söylediği eşdeğerler
  const ALIAS = {
    tv: ['tv', 'tee vee', 'television', 'teevee', 'tivi'], sofa: ['sofa', 'couch'], mom: ['mom', 'mum', 'mommy'],
    'teddy bear': ['teddy bear', 'teddy', 'teddybear'], 't-shirt': ['t-shirt', 'tshirt', 'tee shirt', 't shirt'],
    'ice cream': ['ice cream', 'icecream', 'ice-cream'], bicycle: ['bicycle', 'bike'], motorbike: ['motorbike', 'motorcycle', 'motor bike'],
    plane: ['plane', 'airplane', 'aeroplane'], trousers: ['trousers', 'pants'], rabbit: ['rabbit', 'bunny'],
    'school bag': ['school bag', 'schoolbag', 'bag', 'backpack'], 'shopping cart': ['shopping cart', 'cart', 'trolley'],
    'toilet paper': ['toilet paper', 'tissue'], sandcastle: ['sandcastle', 'sand castle', 'castle'], 'fire truck': ['fire truck', 'fire engine', 'firetruck'],
    'police car': ['police car', 'police'],
    'teachers desk': ['teachers desk', 'teacher desk', 'teachers table', 'teacher table'],
    bin: ['bin', 'trash can', 'trash', 'rubbish bin', 'dustbin', 'garbage can', 'wastebasket'],
    'pencil case': ['pencil case', 'pencilcase', 'pencil box'], sharpener: ['sharpener', 'pencil sharpener'],
    bookshelf: ['bookshelf', 'book shelf', 'bookshelves', 'bookcase', 'book case'],
    'ataturk corner': ['ataturk corner', 'ataturk', 'ataturks corner', 'atatürk corner'],
    locker: ['locker', 'lockers', 'cupboard'],
    'basketball hoop': ['basketball hoop', 'hoop', 'basket', 'basketball basket'], 'skipping rope': ['skipping rope', 'jump rope', 'jumping rope', 'rope'],
    'school gate': ['school gate', 'gate'], 'school bus': ['school bus', 'bus', 'school van'], seesaw: ['seesaw', 'see saw', 'teeter totter'],
    goal: ['goal', 'goal post', 'goalpost'], flagpole: ['flagpole', 'flag pole', 'flag'], canteen: ['canteen', 'cafeteria', 'kiosk'], 'traffic light': ['traffic light', 'traffic lights'], hippo: ['hippo', 'hippopotamus'],
  };

  function normalize(s) {
    s = (s || '').toLocaleLowerCase('en').replace(/[’`´]/g, "'")
      .replace(/[üû]/g, 'u').replace(/[öô]/g, 'o').replace(/ç/g, 'c').replace(/ş/g, 's').replace(/ğ/g, 'g').replace(/ı/g, 'i').replace(/[âà]/g, 'a').replace(/[éè]/g, 'e');
    s = s.replace(/\b[a-z]+'[a-z]+\b/g, m => CONTR[m] || m.replace("'", ''));
    s = s.replace(/\d+/g, m => NUM[+m] || m);
    s = s.replace(/[^a-z' \-]/g, ' ').replace(/[-']/g, ' ');
    return s.replace(/\s+/g, ' ').trim();
  }
  const tokens = s => normalize(s).split(' ').filter(Boolean);

  function lev(a, b) {
    if (a === b) return 0;
    const m = a.length, n = b.length;
    if (!m) return n;
    if (!n) return m;
    let prev = Array.from({ length: n + 1 }, (_, i) => i);
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      }
      prev = cur;
    }
    return prev[n];
  }
  const ratio = (a, b) => (!a && !b) ? 1 : 1 - lev(a, b) / Math.max(a.length, b.length);

  /** Basit sesçil anahtar: Türk çocuklarının sık yaptığı kaymaları (th→t, w→v, sh→s...) tolere eder */
  function phon(w) {
    let s = w.toLowerCase().replace(/[^a-z]/g, '');
    s = s.replace(/^kn/, 'n').replace(/^wr/, 'r').replace(/mb$/, 'm')
      .replace(/ph/g, 'f').replace(/th/g, 't').replace(/sh|ch|tch/g, 's').replace(/ck/g, 'k')
      .replace(/dg/g, 'j').replace(/g([eiy])/g, 'j$1').replace(/c([eiy])/g, 's$1').replace(/c/g, 'k')
      .replace(/q/g, 'k').replace(/x/g, 'ks').replace(/z/g, 's').replace(/w/g, 'v').replace(/gh/g, '')
      .replace(/([^aeiou])h/g, '$1').replace(/y$/, 'i');
    s = s.replace(/e$/, '');
    s = s.replace(/[aeiouy]+/g, 'a');
    s = s.replace(/(.)\1+/g, '$1');
    return s || w;
  }
  const stem = w => w.replace(/(ies)$/, 'y').replace(/(es|s)$/, '');

  function wordSim(a, b) {
    if (a === b || stem(a) === stem(b)) return 1;
    return Math.max(ratio(a, b), ratio(phon(a), phon(b)) * 0.92);
  }

  function variants(target) {
    const n = normalize(target);
    const al = ALIAS[n] || ALIAS[target.toLowerCase()];
    return al ? al.map(normalize) : [n];
  }

  /** Kelime / kısa ifade puanı (0..1) */
  function phraseScore(target, hyp) {
    const ht = tokens(hyp);
    if (!ht.length) return 0;
    let best = 0;
    for (const v of variants(target)) {
      const vt = v.split(' ');
      const joined = vt.join('');
      // hipotez içinde aynı uzunlukta her pencereyi dene
      for (let len = Math.max(1, vt.length - 1); len <= vt.length + 1; len++) {
        for (let i = 0; i + len <= ht.length; i++) {
          const win = ht.slice(i, i + len);
          const sc = len === 1 && vt.length === 1 ? wordSim(vt[0], win[0]) : wordSim(joined, win.join(''));
          if (sc > best) best = sc;
        }
      }
      // tek kelime hedef: hipotez tümüyle tek kelime gibi söylenmişse
      best = Math.max(best, wordSim(joined, ht.join('')) * 0.95);
    }
    return best;
  }

  /** Cümle puanı: içerik kelimelerinin ne kadarı (yaklaşık) duyuldu */
  function sentenceScore(target, hyp) {
    const tt = tokens(target);
    const ht = tokens(hyp);
    if (!ht.length) return 0;
    let content = tt.filter(t => !FILLER.has(t));
    if (!content.length) content = tt;
    let credit = 0;
    for (const t of content) {
      let best = 0;
      for (const h of ht) best = Math.max(best, wordSim(t, h));
      credit += best >= 0.8 ? 1 : best >= 0.6 ? 0.6 : best >= 0.45 ? 0.3 : 0;
    }
    return credit / content.length;
  }

  const THRESH = { easy: 0.5, medium: 0.66, hard: 0.8 };

  return {
    normalize, phon,
    /** hyps: tanıyıcıdan gelen tüm metinler; dönen: {score, ok, stars, heard} */
    evaluate(target, hyps) {
      const list = [...new Set((hyps || []).filter(Boolean))];
      const isSentence = tokens(target).length > 3;
      let score = 0, heard = list[0] || '';
      for (const h of list) {
        const sc = isSentence ? sentenceScore(target, h) : phraseScore(target, h);
        if (sc > score) { score = sc; heard = h; }
      }
      const th = THRESH[Store.s.settings.speechLevel] || 0.5;
      const ok = score >= th;
      const stars = score >= 0.88 ? 3 : ok ? 2 : (list.length ? 1 : 0);
      return { score, ok, stars, heard };
    },
  };
})();
