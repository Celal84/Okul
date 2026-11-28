/* Ortak arayüz yardımcıları */
'use strict';

function h(tag, attrs, ...kids) {
  const el = document.createElement(tag);
  if (attrs) {
    for (const k in attrs) {
      const v = attrs[k];
      if (v == null || v === false) continue;
      if (k === 'class') el.className = v;
      else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
      else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
      else if (k === 'html') el.innerHTML = v;
      else el.setAttribute(k, v === true ? '' : v);
    }
  }
  for (const c of kids.flat(Infinity)) {
    if (c == null || c === false) continue;
    el.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
  }
  return el;
}

/** 3D emoji görseli */
function ei(e, cls) {
  const f = IMG[e];
  if (!f) return h('span', { class: 'emo-txt ' + (cls || '') }, e);
  return h('img', { class: 'emo ' + (cls || ''), src: 'img/e/' + f + '.webp', alt: '', draggable: 'false' });
}

/** Görsel tanımından eleman üretir (emoji, svg, renk, sayı) */
function vis(img, cls) {
  cls = cls || '';
  if (img.startsWith('svg:')) {
    return h('img', { class: 'emo svg ' + cls, src: 'img/svg/' + img.slice(4) + '.svg', alt: '', draggable: 'false' });
  }
  if (img.startsWith('color:')) {
    const c = img.slice(6);
    const stroke = c.toUpperCase() === '#FFFFFF' ? '#cfd6de' : 'rgba(0,0,0,.12)';
    const el = h('div', { class: 'emo blob ' + cls });
    el.innerHTML = `<svg viewBox="0 0 120 120"><defs><radialGradient id="g${c.slice(1)}" cx=".35" cy=".3"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/></radialGradient></defs><path d="M62 8c18 2 22 16 34 20s20 16 16 32-14 18-12 32-10 22-26 20-20-10-34-8-26-6-28-22 8-18 4-32S18 18 32 12s16 6 30-4z" fill="${c}" stroke="${stroke}" stroke-width="3"/><path d="M62 8c18 2 22 16 34 20s20 16 16 32-14 18-12 32-10 22-26 20-20-10-34-8-26-6-28-22 8-18 4-32S18 18 32 12s16 6 30-4z" fill="url(#g${c.slice(1)})"/><circle cx="104" cy="104" r="7" fill="${c}" stroke="${stroke}" stroke-width="2"/><circle cx="14" cy="98" r="5" fill="${c}" stroke="${stroke}" stroke-width="2"/></svg>`;
    return el;
  }
  if (img.startsWith('num:')) {
    const [, n, e] = img.split(':');
    const grid = h('div', { class: 'num-items n' + n });
    for (let i = 0; i < +n; i++) grid.appendChild(ei(e));
    return h('div', { class: 'emo numcard ' + cls }, h('div', { class: 'num-digit' }, n), grid);
  }
  return ei(img, cls);
}
const visOf = (id, cls) => vis(V[id].img, cls);

const rnd = n => Math.floor(Math.random() * n);
const pick = a => a[rnd(a.length)];
function shuffle(a) {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = rnd(i + 1); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
const sleep = ms => new Promise(r => setTimeout(r, ms));

/* ------------------------------------------------ Karaoke cümle */
/** Cümleyi kelime kelime işaretlenebilir hale getirir; speak() ile vurgular */
function sentenceEl(text, opts = {}) {
  const el = h('div', { class: 'sentence ' + (opts.cls || '') });
  const spans = [];
  let pos = 0;
  const clean = text.replace(/\*/g, '');
  clean.split(/(\s+)/).forEach(part => {
    if (!part) return;
    if (/^\s+$/.test(part)) { el.appendChild(document.createTextNode(' ')); pos += part.length; return; }
    const sp = h('span', { class: 'w' }, part);
    sp._s = pos; sp._e = pos + part.length;
    pos += part.length;
    if (opts.tapWords) {
      sp.addEventListener('click', (ev) => {
        ev.stopPropagation();
        Native.speak(part.replace(/[^\w’'-]/g, ''));
        sp.classList.remove('hit'); void sp.offsetWidth; sp.classList.add('hit');
      });
    }
    spans.push(sp);
    el.appendChild(sp);
  });
  el.play = async (o = {}) => {
    let gotRange = false;
    let timer = null;
    let stopped = false;
    const mark = (s) => spans.forEach(sp => sp.classList.toggle('on', s >= sp._s && s < sp._e));
    const p = Native.speak(clean, {
      slow: o.slow,
      onStart: (dur) => {
        if (dur && spans.length) {
          // gerçek ses kaydı: kelimeleri harf sayısına göre süreye dağıt
          const w = spans.map(sp => sp.textContent.length + 1.5);
          const sum = w.reduce((a, b) => a + b, 0);
          let t = 0;
          spans.forEach((sp, k) => {
            const at = t / sum * dur * 1000 * 0.97;
            setTimeout(() => { if (!stopped) mark(sp._s); }, at);
            t += w[k];
          });
          return;
        }
        // aralık olayı gelmezse tahmini zamanlama ile vurgula
        let i = 0;
        const per = (o.slow ? 620 : 380);
        timer = setInterval(() => {
          if (gotRange) { clearInterval(timer); return; }
          if (i < spans.length) mark(spans[i++]._s); else clearInterval(timer);
        }, per);
        if (spans[0]) mark(0);
      },
      onRange: (s) => { gotRange = true; mark(s); },
    });
    await p;
    stopped = true;
    clearInterval(timer);
    spans.forEach(sp => sp.classList.remove('on'));
  };
  return el;
}

/* ------------------------------------------------ Efektler */
function confetti(n = 70) {
  const box = h('div', { class: 'confetti' });
  const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#FF8AD8', '#9B72F2', '#FF9F43'];
  for (let i = 0; i < n; i++) {
    const p = h('i', {
      style: {
        left: Math.random() * 100 + '%',
        background: pick(colors),
        animationDelay: Math.random() * 0.4 + 's',
        animationDuration: 1.6 + Math.random() * 1.4 + 's',
        transform: `rotate(${rnd(360)}deg)`,
        width: 8 + rnd(8) + 'px',
        height: 10 + rnd(10) + 'px',
        borderRadius: Math.random() > .5 ? '50%' : '3px',
      },
    });
    box.appendChild(p);
  }
  document.body.appendChild(box);
  setTimeout(() => box.remove(), 3400);
}

/** Bir elemandan üst bardaki yıldız sayacına uçan yıldız */
function flyStar(fromEl, count = 1) {
  const target = document.querySelector('.topbar .stars') || document.querySelector('.home .stat.stars');
  const r = fromEl ? fromEl.getBoundingClientRect() : { left: innerWidth / 2, top: innerHeight / 2, width: 0, height: 0 };
  const tr = target ? target.getBoundingClientRect() : { left: innerWidth - 80, top: 20, width: 40, height: 40 };
  for (let i = 0; i < Math.min(count, 5); i++) {
    const s = ei('⭐', 'flystar');
    s.style.left = r.left + r.width / 2 - 24 + 'px';
    s.style.top = r.top + r.height / 2 - 24 + 'px';
    document.body.appendChild(s);
    setTimeout(() => {
      s.style.transform = `translate(${tr.left + tr.width / 2 - (r.left + r.width / 2)}px, ${tr.top + tr.height / 2 - (r.top + r.height / 2)}px) scale(.5)`;
      s.style.opacity = '0.3';
    }, 30 + i * 120);
    setTimeout(() => s.remove(), 1000 + i * 120);
  }
  setTimeout(() => { if (target) { target.classList.remove('bump'); void target.offsetWidth; target.classList.add('bump'); } updateStarCounters(); }, 800);
}
function updateStarCounters() {
  document.querySelectorAll('[data-stars]').forEach(el => { el.textContent = Store.s.stars; });
}

/** Yıldız ver: sayaç, ses, uçan yıldız, gerekirse çıkartma ödülü */
function award(n, fromEl) {
  if (n <= 0) return;
  const newSticker = Store.addStars(n);
  Sfx.star();
  flyStar(fromEl, n);
  if (newSticker) App.pendingSticker = true;
}

function toast(msg, ms = 2200) {
  const t = h('div', { class: 'toast' }, msg);
  document.body.appendChild(t);
  setTimeout(() => t.classList.add('show'), 10);
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, ms);
}

/** Basit modal. buttons: [{label, cls, onclick}] */
function modal(content, buttons = [], opts = {}) {
  const box = h('div', { class: 'modal-card ' + (opts.cls || '') }, content,
    buttons.length ? h('div', { class: 'modal-btns' }, buttons.map(b =>
      h('button', { class: 'btn ' + (b.cls || ''), onclick: () => { Sfx.tap(); if (b.keep !== true) close(); b.onclick && b.onclick(); } }, b.label))) : null);
  const bg = h('div', { class: 'modal', onclick: (e) => { if (e.target === bg && opts.dismiss !== false) close(); } }, box);
  function close() { bg.classList.add('out'); setTimeout(() => bg.remove(), 250); opts.onclose && opts.onclose(); }
  document.body.appendChild(bg);
  App.modalOpen = close;
  return { close, el: box };
}

/** Bubu maskotu + konuşma balonu */
function bubu(text, opts = {}) {
  const bubble = text ? h('div', { class: 'bubble' }, text) : null;
  const img = ei('🦉', 'bubu-img');
  const el = h('div', { class: 'bubu ' + (opts.cls || ''), onclick: opts.onclick }, img, bubble);
  el.say = (t) => { if (bubble) bubble.textContent = t; el.classList.remove('talk'); void el.offsetWidth; el.classList.add('talk'); };
  return el;
}

/** Üst bar: geri, başlık, yıldız */
function topbar(title, opts = {}) {
  return h('div', { class: 'topbar' },
    h('button', { class: 'icon-btn back', 'aria-label': 'Geri', onclick: () => { Sfx.tap(); App.back(); } }, h('span', { class: 'arrow' }, '‹')),
    h('div', { class: 'tb-title' }, opts.icon ? ei(opts.icon, 'tb-icon') : null, h('span', null, title)),
    opts.right || null,
    h('div', { class: 'pill stars' }, ei('⭐'), h('b', { 'data-stars': '' }, Store.s.stars)),
  );
}

function progressDots(n) {
  const el = h('div', { class: 'dots' });
  for (let i = 0; i < n; i++) el.appendChild(h('i'));
  el.set = (i, state) => { const d = el.children[i]; if (d) d.className = state || ''; };
  el.cur = (i) => { [...el.children].forEach((d, j) => d.classList.toggle('cur', j === i)); };
  return el;
}

/** Tur sonu ekranı */
function endScreen({ stars, max, title, again, extra, ok }) {
  Sfx.win();
  confetti();
  const ratio = max ? stars / max : 1;
  const medal = ratio >= 0.85 ? '🥇' : ratio >= 0.5 ? '🥈' : '🥉';
  const msg = ratio >= 0.85 ? pick(['Fantastic!', 'Perfect!', 'Amazing!']) : ratio >= 0.5 ? pick(['Great job!', 'Well done!']) : pick(['Good try!', 'Keep going!']);
  Native.speak(msg);
  const el = h('div', { class: 'endscreen' },
    ei(medal, 'end-medal'),
    h('h2', null, msg),
    h('p', { class: 'muted' }, title || ''),
    h('div', { class: 'end-stars' }, ei('⭐'), h('b', null, '+' + stars)),
    extra || null,
    h('div', { class: 'row-btns' },
      again ? h('button', { class: 'btn big green', onclick: () => { Sfx.tap(); again(); } }, ei('🔁'), 'Tekrar') : null,
      h('button', { class: 'btn big', onclick: () => { Sfx.tap(); (ok || (() => App.back()))(); } }, ei('👍'), 'Tamam'),
    ),
  );
  setTimeout(() => App.showStickerIfAny(), 1600);
  return el;
}

/** Bir konudaki kelimeler için çeldirici seçer (aynı görseli/kelimeyi tekrar etmez) */
function distractors(answerId, pool, n, avoidText) {
  const a = V[answerId];
  const used = new Set([a.img, a.en]);
  const avoid = (avoidText || '').toLowerCase();
  const out = [];
  for (const id of shuffle(pool)) {
    const w = V[id];
    if (!w || id === answerId || used.has(w.img) || used.has(w.en)) continue;
    if (avoid && new RegExp('\\b' + w.en.toLowerCase() + '(s|es)?\\b').test(avoid)) continue;
    used.add(w.img); used.add(w.en);
    out.push(id);
    if (out.length >= n) break;
  }
  return out;
}

/** Tüm kelimelerden konuya göre havuz */
function poolFor(topicId) {
  if (topicId === 'mixed') {
    const seen = Store.seenIds();
    return seen.length >= 6 ? seen : topicWordIds(TOPICS[0]).concat(topicWordIds(TOPICS[1]));
  }
  if (topicId === 'review') return Store.dueIds();
  const t = TOPICS.find(x => x.id === topicId);
  return t ? topicWordIds(t) : [];
}
function topicById(id) { return TOPICS.find(t => t.id === id); }
