/* Oyunlar: konu seçimi, Dinle/Oku testleri, Konuş, Hafıza kartları, Tekrar */
'use strict';

const MODE_INFO = {
  listen: { tr: 'Dinle ve Bul', icon: '🎧', say: 'Listen and find!', trSay: 'Dinle ve doğru resmi bul!' },
  read: { tr: 'Oku ve Bul', icon: '📖', say: 'Read and find!', trSay: 'Oku ve doğru cevabı bul!' },
  speak: { tr: 'Dinle ve Söyle', icon: '🎤', say: 'Listen and say!', trSay: 'Önce dinle, sonra sen söyle!' },
  memory: { tr: 'Hafıza Kartları', icon: '🃏', say: 'Find the pairs!', trSay: 'Aynı kartları bul!' },
};

/* ================================================= KONU SEÇ */
Screens.pick = (mode, ctx) => {
  const info = MODE_INFO[mode];
  const go = (topic) => App.go(mode === 'memory' ? 'memory' : mode === 'speak' ? 'speak' : 'quiz', { mode, topic });
  const seen = Store.seenIds().length;
  const mixed = h('button', { class: 'place mixed', style: { '--c': '#FFB547' }, onclick: () => go('mixed') },
    h('div', { class: 'place-icon' }, ei('🔀')),
    h('div', { class: 'place-tr' }, 'Karışık'),
    h('div', { class: 'place-en' }, seen >= 6 ? `Öğrendiğin ${seen} kelime` : 'Mixed'));
  const groups = GROUPS.map(g => h('section', { class: 'group' },
    h('h2', { class: 'group-title' }, ei(g.icon), g.tr),
    h('div', { class: 'places' }, TOPICS.filter(t => t.group === g.id).map(t => {
      const p = Store.topicProgress(t);
      return h('button', { class: 'place', style: { '--c': t.color }, onclick: () => go(t.id) },
        h('div', { class: 'place-icon' }, ei(t.icon)),
        h('div', { class: 'place-tr' }, t.tr),
        h('div', { class: 'place-en' }, t.en),
        h('div', { class: 'bar' }, h('i', { style: { width: (p.learned / p.total * 100) + '%' } })));
    }))));
  setTimeout(() => {
    if (!ctx.alive()) return;
    if (Store.s.settings.trNarration) Native.speak(info.trSay + ' Bir konu seç.', { lang: 'tr' });
    else Native.speak(info.say);
  }, 300);
  return h('div', { class: 'screen town' }, topbar(info.tr, { icon: info.icon }),
    h('div', { class: 'scroll' }, h('div', { class: 'places top' }, mixed), groups));
};

/* ================================================= SORU ÜRETİCİ */
function buildQuestions(mode, pool, n = 8) {
  const ranked = shuffle(pool).sort((a, b) => ((Store.s.words[a] || {}).box || 0) - ((Store.s.words[b] || {}).box || 0));
  const chosen = shuffle(ranked.slice(0, Math.min(n, ranked.length)));
  const speakOn = Store.s.settings.modules.speak !== false && Native.speechAvailable();
  return chosen.map(id => {
    let type;
    const r = Math.random();
    if (mode === 'listen') type = r < 0.7 || !Store.isSeen(id) ? 'hearWord' : 'hearSent';
    else if (mode === 'read') type = r < 0.4 ? 'readWord' : r < 0.75 ? 'pickWord' : 'readSent';
    else type = speakOn && r < 0.25 ? 'speak' : pick(['hearWord', 'readWord', 'pickWord']);
    const avoid = (type === 'hearSent' || type === 'readSent') ? V[id].ex : '';
    let ds = distractors(id, pool, 2, avoid);
    if (ds.length < 2) ds = ds.concat(distractors(id, Object.keys(V).filter(k => !ds.includes(k)), 2 - ds.length, avoid));
    return { id, type, options: shuffle([id, ...ds]) };
  });
}

/* ================================================= DİNLE / OKU / TEKRAR testi */
Screens.quiz = (arg, ctx) => {
  const { mode, topic } = arg;
  const pool = arg.ids || poolFor(topic);
  const t = topicById(topic);
  const titles = { listen: 'Dinle ve Bul', read: 'Oku ve Bul', review: 'Tekrar Zamanı' };
  const icons = { listen: '🎧', read: '📖', review: '🔁' };
  if (mode !== 'review') Store.setLast({ screen: 'quiz', arg: { mode, topic }, title: `${titles[mode]} · ${t ? t.tr : 'Karışık'}`, icon: icons[mode] });
  const qs = buildQuestions(mode, pool, arg.n || 8);
  const dots = progressDots(qs.length);
  const body = h('div', { class: 'quiz-body' });
  const screen = h('div', { class: 'screen quiz' }, topbar(titles[mode] + (t ? ' · ' + t.tr : ''), { icon: icons[mode], right: dots }), body);
  let qi = 0, stars = 0;

  function show() {
    if (!ctx.alive()) return;
    if (qi >= qs.length) {
      body.replaceChildren(endScreen({ stars, max: qs.length, title: titles[mode], again: () => App.replace('quiz', arg) }));
      return;
    }
    dots.cur(qi);
    const q = qs[qi];
    const w = V[q.id];
    let tries = 0, done = false;

    if (q.type === 'speak') {
      body.replaceChildren(speakCard(q.id, ctx, (res) => {
        dots.set(qi, res.ok ? 'ok' : 'meh');
        Store.grade(q.id, res.ok);
        if (res.stars) { stars += res.ok ? 1 : 0; if (res.ok) award(1, body); }
        qi++; setTimeout(show, 700);
      }));
      return;
    }

    let prompt;
    const sayIt = (slow) => {
      if (q.type === 'hearSent') return sentEl ? sentEl.play({ slow }) : Native.speak(w.ex, { slow });
      return Native.speak(w.en, { slow });
    };
    let sentEl = null;
    if (q.type === 'hearWord' || q.type === 'hearSent') {
      prompt = h('div', { class: 'prompt' },
        h('button', { class: 'speaker big', onclick: () => { Sfx.tap(); sayIt(); } }, ei('🔊')),
        h('button', { class: 'speaker', onclick: () => { Sfx.tap(); sayIt(true); } }, ei('🐢')),
        h('div', { class: 'prompt-q' }, q.type === 'hearWord' ? 'Dinle ve resmi bul!' : 'Cümleyi dinle, resmi bul!'));
    } else if (q.type === 'readWord') {
      prompt = h('div', { class: 'prompt' }, h('div', { class: 'read-word' }, w.en), h('div', { class: 'prompt-q' }, 'Oku ve resmi bul!'));
    } else if (q.type === 'readSent') {
      sentEl = sentenceEl(w.ex, { cls: 'read-sent' });
      prompt = h('div', { class: 'prompt col' }, sentEl, h('div', { class: 'prompt-q' }, 'Cümleyi oku, resmi bul!'));
    } else { // pickWord
      prompt = h('div', { class: 'prompt' }, h('div', { class: 'pick-vis' }, visOf(q.id)), h('div', { class: 'prompt-q' }, 'Bu ne? Doğru kelimeyi seç!'));
    }
    if (q.type === 'hearSent') sentEl = sentenceEl(w.ex);

    const opts = h('div', { class: 'options' + (q.type === 'pickWord' ? ' words' : '') }, q.options.map(oid => {
      const b = h('button', { class: 'opt', onclick: () => choose(oid, b) },
        q.type === 'pickWord' ? h('span', { class: 'opt-word' }, V[oid].en) : visOf(oid));
      b._id = oid;
      return b;
    }));

    function choose(oid, b) {
      if (done) return;
      if (oid === q.id) {
        done = true;
        Sfx.correct();
        b.classList.add('right');
        dots.set(qi, tries === 0 ? 'ok' : 'meh');
        Store.grade(q.id, tries === 0);
        if (tries === 0) { stars++; award(1, b); }
        const after = h('div', { class: 'reveal' }, h('b', null, w.en), Store.s.settings.showTr ? h('span', null, ' · ' + w.tr) : null);
        prompt.appendChild(after);
        (q.type === 'readSent' && sentEl ? sentEl.play() : Native.speak(tries === 0 ? `${pick(PRAISE)} ${w.en}!` : w.en))
          .then(() => sleep(500)).then(() => { qi++; show(); });
      } else {
        tries++;
        Sfx.wrong();
        Native.vibrate(40);
        b.classList.remove('shake'); void b.offsetWidth; b.classList.add('shake', 'wrong');
        if (q.type !== 'pickWord') Native.speak(`This is ${/^[aeiou]/i.test(V[oid].en) ? 'an' : 'a'} ${V[oid].en}.`);
        else Native.speak(pick(TRY_AGAIN));
        if (tries >= 2) [...opts.children].forEach(c => c._id === q.id && c.classList.add('hint'));
      }
    }

    body.replaceChildren(h('div', { class: 'q ' + q.type }, prompt, opts));
    if (q.type === 'hearWord' || q.type === 'hearSent') setTimeout(() => ctx.alive() && sayIt(), 350);
  }
  show();
  return screen;
};

/* ================================================= KONUŞMA paneli
 * Hoşgörülü: 3 deneme, her denemede model ses tekrar edilir; ses tanıma yoksa
 * "Söyledim" ile kendi kendine değerlendirme. */
function speakPanel(target, ctx, onDone) {
  let attempts = 0, busy = false, finished = false;
  const status = h('div', { class: 'mic-status' }, 'Mikrofona dokun ve söyle!');
  const heard = h('div', { class: 'heard' });
  const starsEl = h('div', { class: 'mic-stars' });
  const avail = Native.speechAvailable();
  const btn = h('button', { class: 'mic-btn' + (avail ? '' : ' self'), 'aria-label': 'Konuş' }, h('i', { class: 'ring r1' }), h('i', { class: 'ring r2' }), ei(avail ? '🎤' : '👍', 'mic-emo'));
  const el = h('div', { class: 'speak-panel' }, btn, status, heard, starsEl);

  const showStars = (n) => {
    starsEl.replaceChildren(...[0, 1, 2].map(i => ei('⭐', i < n ? 'on' : 'off')));
  };
  const finish = (res) => {
    if (finished) return;
    finished = true;
    setTimeout(() => ctx.alive() && onDone(res), 1600);
  };

  if (!avail) {
    status.textContent = 'Yüksek sesle söyle, sonra 👍 düğmesine bas!';
    btn.addEventListener('click', () => {
      if (finished) return;
      Sfx.correct(); showStars(2);
      Native.speak(pick(PRAISE));
      finish({ ok: true, stars: 2, self: true });
    });
    return el;
  }

  btn.addEventListener('click', async () => {
    if (busy || finished) return;
    busy = true;
    const perm = await Native.requestMic();
    if (!perm) { status.textContent = 'Mikrofon izni gerekiyor 🎤 (Ayarlar → Veli)'; busy = false; return; }
    Sfx.mic();
    btn.classList.add('listening');
    status.textContent = 'Dinliyorum... 👂 Şimdi söyle!';
    heard.textContent = '';
    const r = await Native.listen({
      hint: target,
      onLevel: v => btn.style.setProperty('--lvl', v.toFixed(2)),
      onPartial: t => { heard.textContent = '“' + t + '”'; },
    });
    btn.classList.remove('listening');
    btn.style.setProperty('--lvl', 0);
    busy = false;
    if (!ctx.alive() || finished) return;
    const hyps = [...(r.texts || []), ...(r.partials || [])];
    if (!hyps.length) {
      attempts++;
      if (r.error === 'permission') { status.textContent = 'Mikrofon izni gerekiyor 🎤'; attempts--; return; }
      if (r.error === 'network') status.textContent = 'İnternet bağlantısı gerekebilir 📶 Tekrar dene!';
      else status.textContent = 'Seni duyamadım 🙉 Tableti yaklaştır ve biraz yüksek sesle söyle!';
      if (attempts >= 3) {
        status.textContent = 'Güzel deneme! 👏 Bir dahakine birlikte deneriz.';
        showStars(1);
        Native.speak(target).then(() => finish({ ok: false, stars: 1 }));
      }
      return;
    }
    const ev = Speech.evaluate(target, hyps);
    attempts++;
    Store.speechResult(ev.ok);
    heard.textContent = '“' + ev.heard + '”';
    if (ev.ok) {
      Sfx.correct();
      showStars(ev.stars);
      btn.classList.add('good');
      status.textContent = ev.stars === 3 ? 'Mükemmel! 🌟' : 'Çok güzel! 👏';
      Native.speak(pick(PRAISE));
      finish({ ok: true, stars: ev.stars });
    } else if (attempts >= 3) {
      showStars(1);
      status.textContent = 'Güzel deneme! 👏 Dinle: ';
      Native.speak(target).then(() => finish({ ok: false, stars: 1 }));
    } else {
      Sfx.wrong();
      status.textContent = attempts === 1 ? 'Neredeyse! 👂 Bir daha dinle ve söyle.' : 'Yavaşça dinle ve tekrar dene 🐢';
      Native.speak(target, { slow: attempts > 1 });
    }
  });
  return el;
}

/** Görsel + kelime + model ses + konuşma paneli */
function speakCard(id, ctx, onDone) {
  const w = V[id];
  const panel = speakPanel(w.en, ctx, onDone);
  const card = h('div', { class: 'speak-card' },
    h('div', { class: 'speak-vis' }, visOf(id)),
    h('div', { class: 'speak-word' }, w.en,
      h('button', { class: 'round-btn', onclick: () => Native.speak(w.en) }, ei('🔊')),
      h('button', { class: 'round-btn', onclick: () => Native.speak(w.en, { slow: true }) }, ei('🐢'))),
    Store.s.settings.showTr ? h('div', { class: 'muted' }, w.tr) : null,
    panel);
  setTimeout(() => ctx.alive() && Native.speak(w.en), 350);
  return card;
}

function speakModal(id) {
  const token = App._token;
  let m;
  const ctx = { alive: () => App._token === token && document.body.contains(m.el) };
  m = modal(speakCard(id, ctx, (res) => {
    if (res.ok) { award(1, m.el); Store.grade(id, true); }
    m.close();
  }), [], { cls: 'wide' });
}

/* ================================================= KONUŞ ekranı */
Screens.speak = (arg, ctx) => {
  const t = topicById(arg.topic);
  Store.setLast({ screen: 'speak', arg, title: `Konuş · ${t ? t.tr : 'Karışık'}`, icon: '🎤' });
  const pool = poolFor(arg.topic);
  const ids = shuffle(pool).sort((a, b) => ((Store.s.words[a] || {}).box || 0) - ((Store.s.words[b] || {}).box || 0)).slice(0, 6);
  const order = shuffle(ids);
  const dots = progressDots(order.length);
  const body = h('div', { class: 'quiz-body' });
  let i = 0, stars = 0;
  const next = () => {
    if (!ctx.alive()) return;
    if (i >= order.length) {
      body.replaceChildren(endScreen({ stars, max: order.length * 3, title: 'Dinle ve Söyle', again: () => App.replace('speak', arg) }));
      return;
    }
    dots.cur(i);
    const id = order[i];
    body.replaceChildren(speakCard(id, ctx, (res) => {
      dots.set(i, res.ok ? 'ok' : 'meh');
      Store.grade(id, res.ok);
      stars += res.stars;
      if (res.stars) award(res.stars, body);
      i++;
      next();
    }));
  };
  if (!Native.speechAvailable()) toast('Bu cihazda ses tanıma yok: söyle ve 👍 düğmesine bas.', 4000);
  next();
  return h('div', { class: 'screen quiz' }, topbar('Dinle ve Söyle' + (t ? ' · ' + t.tr : ''), { icon: '🎤', right: dots }), body);
};

/* ================================================= HAFIZA KARTLARI */
Screens.memory = (arg, ctx) => {
  const t = topicById(arg.topic);
  Store.setLast({ screen: 'memory', arg, title: `Hafıza · ${t ? t.tr : 'Karışık'}`, icon: '🃏' });
  const body = h('div', { class: 'memory-body' });
  const screen = h('div', { class: 'screen memory' }, topbar('Hafıza Kartları' + (t ? ' · ' + t.tr : ''), { icon: '🃏' }), body);
  let pairs = arg.pairs || 6, mode = arg.mmode || 'pic';

  function setup() {
    const sizeBtns = [[4, 'Kolay', '🙂'], [6, 'Orta', '🤔'], [8, 'Zor', '💪']].map(([n, l, e]) =>
      h('button', { class: 'choice' + (n === pairs ? ' sel' : ''), onclick: (ev) => { Sfx.tap(); pairs = n; sel(ev.currentTarget); } }, ei(e), h('b', null, l), h('small', null, n + ' çift')));
    const modeBtns = [['pic', 'Resim + Resim', '🖼️'], ['word', 'Resim + Kelime', '🔤']].map(([m, l, e]) =>
      h('button', { class: 'choice' + (m === mode ? ' sel' : ''), onclick: (ev) => { Sfx.tap(); mode = m; sel(ev.currentTarget); } }, ei(e === '🖼️' ? '🖼️' : '📖'), h('b', null, l)));
    function sel(b) { [...b.parentNode.children].forEach(c => c.classList.toggle('sel', c === b)); }
    body.replaceChildren(h('div', { class: 'mem-setup card' },
      bubu('Find the pairs!', { cls: 'small' }),
      h('h3', null, 'Ne kadar zor olsun?'), h('div', { class: 'choices' }, sizeBtns),
      h('h3', null, 'Kartlar'), h('div', { class: 'choices' }, modeBtns),
      h('button', { class: 'btn big green', onclick: () => { Sfx.tap(); play(); } }, 'Başla!', ei('🎉'))));
  }

  function play() {
    const pool = poolFor(arg.topic);
    const byImg = new Set();
    const ids = shuffle(pool).filter(id => { const im = V[id].img; if (byImg.has(im)) return false; byImg.add(im); return true; }).slice(0, pairs);
    const deck = shuffle(ids.flatMap(id => [{ id, face: 'pic' }, { id, face: mode === 'word' ? 'word' : 'pic' }]));
    let open = [], matched = 0, moves = 0, lock = false;
    const movesEl = h('b', null, '0');
    const grid = h('div', { class: 'mem-grid' });
    deck.forEach(c => {
      const front = h('div', { class: 'face front' }, c.face === 'pic' ? visOf(c.id) : h('span', { class: 'mem-word' }, V[c.id].en));
      const back = h('div', { class: 'face back' }, ei('🦉', 'mem-back'));
      const el = h('button', { class: 'mcard', onclick: () => flip(c, el) }, h('div', { class: 'mcard-in' }, back, front));
      c.el = el;
      grid.appendChild(el);
    });
    function flip(c, el) {
      if (lock || el.classList.contains('up') || el.classList.contains('done')) return;
      Sfx.flip();
      el.classList.add('up');
      Native.speak(V[c.id].en);
      open.push(c);
      if (open.length < 2) return;
      moves++; movesEl.textContent = moves;
      const [a, b] = open;
      open = [];
      if (a.id === b.id) {
        matched++;
        setTimeout(() => {
          Sfx.correct();
          a.el.classList.add('done'); b.el.classList.add('done');
          Store.grade(a.id, true);
          if (matched === ids.length) setTimeout(win, 700);
        }, 350);
      } else {
        lock = true;
        setTimeout(() => { a.el.classList.remove('up'); b.el.classList.remove('up'); lock = false; }, 1100);
      }
    }
    function win() {
      if (!ctx.alive()) return;
      const r = moves / ids.length;
      const s = r <= 1.5 ? 3 : r <= 2.2 ? 2 : 1;
      award(s, grid);
      body.replaceChildren(endScreen({ stars: s, max: 3, title: `${moves} hamlede bitirdin!`, again: () => play() }));
    }
    body.replaceChildren(h('div', { class: 'mem-info' }, h('span', { class: 'pill' }, ei('👆'), 'Hamle: ', movesEl)), grid);
    layoutGrid(grid, deck.length);
    const ro = () => layoutGrid(grid, deck.length);
    window.addEventListener('resize', ro);
    ctx.onLeave(() => window.removeEventListener('resize', ro));
  }
  setup();
  return screen;
};

/** Kartları ekrana en büyük boyutta sığdırır */
function layoutGrid(grid, n) {
  requestAnimationFrame(() => {
    const W = grid.clientWidth || innerWidth * 0.9;
    const H = grid.clientHeight || innerHeight * 0.7;
    let best = { size: 0, cols: 4 };
    for (let cols = 2; cols <= n; cols++) {
      const rows = Math.ceil(n / cols);
      const size = Math.min((W - (cols - 1) * 12) / cols, (H - (rows - 1) * 12) / rows / 1.0);
      if (size > best.size) best = { size, cols };
    }
    grid.style.gridTemplateColumns = `repeat(${best.cols}, ${Math.floor(best.size)}px)`;
    grid.style.setProperty('--card', Math.floor(best.size) + 'px');
  });
}

/* ================================================= TEKRAR (aralıklı tekrar) */
Screens.review = (arg, ctx) => {
  const due = Store.dueIds();
  const seen = Store.seenIds();
  if (seen.length < 4) {
    return h('div', { class: 'screen quiz' }, topbar('Tekrar Zamanı', { icon: '🔁' }),
      h('div', { class: 'empty center' }, bubu('Önce kasabayı keşfet!'), h('p', null, 'Tekrar edilecek kelimeler, sen yeni kelimeler öğrendikçe burada birikir.'),
        h('button', { class: 'btn big green', onclick: () => App.replace('town') }, ei('🏘️'), 'Keşfet')));
  }
  let ids = due.slice();
  if (ids.length < 6) ids = [...new Set(ids.concat(Store.weakIds(6), shuffle(seen)))].slice(0, Math.max(6, ids.length));
  ids = ids.slice(0, 10);
  const go = () => App.replace('quiz', { mode: 'review', ids, n: ids.length });
  const intro = h('div', { class: 'screen quiz' }, topbar('Tekrar Zamanı', { icon: '🔁' }),
    h('div', { class: 'empty center' },
      bubu(due.length ? `${due.length} kelime seni bekliyor!` : 'Hadi biraz tekrar yapalım!'),
      h('div', { class: 'review-peek' }, ids.slice(0, 6).map(id => h('div', { class: 'peek' }, visOf(id)))),
      h('p', { class: 'muted' }, 'Hatırlıyor musun? Unutmamak için tekrar etmek çok önemli!'),
      h('button', { class: 'btn big green', onclick: () => { Sfx.tap(); go(); } }, 'Başla!', ei('🎯'))));
  setTimeout(() => ctx.alive() && Store.s.settings.trNarration && Native.speak('Hatırlıyor musun? Hadi tekrar edelim!', { lang: 'tr' }), 300);
  return intro;
};
