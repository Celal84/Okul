/* Cümle kalıpları: animasyonlu anlatım + alıştırma */
'use strict';

Screens.lessons = () => {
  const list = LESSONS.map((l, i) => {
    const st = Store.s.lessons[l.id];
    const best = st ? st.best : 0;
    return h('button', { class: 'lesson-card', style: { '--c': l.color, animationDelay: i * 0.04 + 's' }, onclick: () => App.go('lesson', l.id) },
      h('div', { class: 'lc-icon' }, ei(l.icon)),
      h('div', { class: 'lc-body' }, h('b', null, l.en), h('small', null, l.tr)),
      h('div', { class: 'lc-stars' }, [0, 1, 2].map(k => ei('⭐', k < best ? 'on' : 'off'))));
  });
  return h('div', { class: 'screen town' }, topbar('Cümle Kalıpları', { icon: '💬' }),
    h('div', { class: 'scroll' }, h('div', { class: 'lesson-list' }, list)));
};

function lessonStage(slide, small) {
  const st = h('div', { class: 'lstage' + (small ? ' small' : '') });
  slide.a.forEach(([img, x, y, wd, anim, delay], k) => {
    const el = h('div', {
      class: 'actor a-' + (anim || 'pop'),
      style: { left: (x - wd / 2) + '%', bottom: (100 - y) + '%', width: wd + '%', animationDelay: (delay || 0) + 's', zIndex: k + 1 },
    }, vis(img));
    if (anim === 'sleep') el.appendChild(h('span', { class: 'zzz' }, 'z z z'));
    st.appendChild(el);
  });
  return st;
}
const keyOf = (s) => (s.en.match(/\*([^*]+)\*/) || [])[1];
const plain = (s) => s.replace(/\*/g, '');

Screens.lesson = (id, ctx) => {
  const L = LESSONS.find(l => l.id === id);
  Store.setLast({ screen: 'lesson', arg: id, title: L.en, icon: L.icon });
  const body = h('div', { class: 'lesson-body' });
  const dots = progressDots(L.slides.length);
  const screen = h('div', { class: 'screen lesson', style: { '--c': L.color } }, topbar(L.en, { icon: L.icon, right: dots }), body);
  let idx = -1;
  let stars = 0, maxStars = 0;

  /* ---------- 1) Anlatım ---------- */
  function intro() {
    const text = L.intro.replace(/\[([^\]]+)\]/g, '“$1”');
    const b = bubu(text, { cls: 'big' });
    const nextBtn = h('button', { class: 'btn big green pulse', onclick: () => { Sfx.tap(); Native.stopSpeak(); idx = 0; slide(); } }, 'Başla', h('span', { class: 'arrow' }, '▶'));
    body.replaceChildren(h('div', { class: 'lesson-intro' }, b, h('h2', null, L.tr), nextBtn));
    if (Store.s.settings.trNarration) {
      setTimeout(() => ctx.alive() && Native.speakMixed(L.intro, { cancelled: () => !ctx.alive() || idx >= 0 }), 400);
    }
  }

  function slide() {
    if (!ctx.alive()) return;
    const s = L.slides[idx];
    dots.cur(idx);
    for (let k = 0; k < idx; k++) dots.set(k, 'ok');
    const sent = sentenceEl(plain(s.en), { cls: 'lesson-sent', tapWords: true });
    const next = h('button', { class: 'nav-btn next', onclick: () => { Sfx.tap(); go(1); } }, '▶');
    const prev = h('button', { class: 'nav-btn prev', disabled: idx === 0, onclick: () => { Sfx.tap(); go(-1); } }, '◀');
    body.replaceChildren(
      lessonStage(s),
      h('div', { class: 'lesson-text' },
        sent,
        Store.s.settings.showTr ? h('div', { class: 'lesson-tr' }, s.tr) : null),
      h('div', { class: 'lesson-nav' },
        prev,
        h('button', { class: 'round-btn lg', onclick: () => { Sfx.tap(); play(); } }, ei('🔊')),
        h('button', { class: 'round-btn lg', onclick: () => { Sfx.tap(); play(true); } }, ei('🐢')),
        next));
    const play = async (slow) => {
      next.classList.remove('pulse');
      await sent.play({ slow });
      if (ctx.alive()) next.classList.add('pulse');
    };
    setTimeout(() => ctx.alive() && play(), 700);
  }

  function go(d) {
    Native.stopSpeak();
    idx += d;
    if (idx < 0) idx = 0;
    if (idx >= L.slides.length) { practice(); return; }
    slide();
  }

  /* ---------- 2) Alıştırma ---------- */
  function practice() {
    const tasks = [];
    const keyed = L.slides.filter(s => keyOf(s));
    const keys = [...new Set(keyed.map(keyOf))];
    shuffle(keyed).slice(0, 4).forEach(s => tasks.push({ type: 'cloze', s }));
    const short = shuffle(L.slides.filter(s => plain(s.en).split(' ').length <= 6 && plain(s.en).split(' ').length >= 2));
    short.slice(0, 2).forEach(s => tasks.push({ type: 'build', s }));
    if (Store.s.settings.modules.speak !== false) short.slice(0, 1).forEach(s => tasks.push({ type: 'speak', s }));
    const pd = progressDots(tasks.length);
    screen.querySelector('.topbar .dots').replaceWith(pd);
    let ti = 0;

    const intro = h('div', { class: 'lesson-intro' }, bubu('Şimdi sıra sende!', { cls: 'big' }), h('h2', null, 'Alıştırma zamanı'),
      h('button', { class: 'btn big green pulse', onclick: () => { Sfx.tap(); nextTask(); } }, 'Hadi!', ei('💪')));
    body.replaceChildren(intro);
    Native.speak('Your turn!');

    function nextTask() {
      if (!ctx.alive()) return;
      if (ti >= tasks.length) { finish(); return; }
      pd.cur(ti);
      const t = tasks[ti];
      const done = (ok) => { pd.set(ti, ok ? 'ok' : 'meh'); maxStars++; if (ok) { stars++; award(1, body); } ti++; setTimeout(nextTask, 1300); };
      if (t.type === 'cloze') cloze(t.s, keys, done);
      else if (t.type === 'build') build(t.s, done);
      else speakTask(t.s, done);
    }
  }

  function cloze(s, keys, done) {
    const key = keyOf(s);
    const opts = shuffle([key, ...shuffle(keys.filter(k => k.toLowerCase() !== key.toLowerCase())).slice(0, 2)]);
    const [before, after] = s.en.split('*' + key + '*');
    const blank = h('span', { class: 'blank' }, '?');
    let tries = 0, fin = false;
    const optEls = opts.map(o => {
      const b = h('button', { class: 'opt-word-btn', onclick: () => {
        if (fin) return;
        if (o === key) {
          fin = true; Sfx.correct(); b.classList.add('right');
          blank.textContent = key; blank.classList.add('filled');
          Native.speak(plain(s.en)).then(() => done(tries === 0));
        } else {
          tries++; Sfx.wrong(); b.classList.remove('shake'); void b.offsetWidth; b.classList.add('shake', 'wrong');
          if (tries >= 2) optEls.forEach(x => x.textContent === key && x.classList.add('hint'));
        }
      } }, o);
      return b;
    });
    body.replaceChildren(lessonStage(s, true),
      h('div', { class: 'task-q' }, ei('🧩'), 'Boşluğa ne gelmeli?'),
      h('div', { class: 'cloze' }, before.replace(/\*/g, ''), blank, after.replace(/\*/g, '')),
      h('div', { class: 'opt-words' }, optEls));
  }

  function build(s, done) {
    const words = plain(s.en).replace(/[.!?]+$/, '').split(' ');
    const punct = (plain(s.en).match(/[.!?]+$/) || [''])[0];
    const line = h('div', { class: 'build-line' });
    let pos = 0, mistakes = 0;
    const tiles = shuffle(words.map((w, i) => ({ w, i })));
    const pool = h('div', { class: 'tiles-pool' });
    tiles.forEach(t => {
      const b = h('button', { class: 'wtile', onclick: () => {
        if (b.disabled) return;
        if (words[pos].toLowerCase() === t.w.toLowerCase()) {
          Sfx.pop(); Native.speak(t.w.replace(/[^\w’'-]/g, ''));
          b.disabled = true; b.classList.add('used');
          line.appendChild(h('span', { class: 'placed' }, words[pos]));
          pos++;
          pool.querySelectorAll('.hint').forEach(x => x.classList.remove('hint'));
          if (pos === words.length) {
            line.appendChild(document.createTextNode(punct));
            Sfx.correct(); line.classList.add('right');
            Native.speak(plain(s.en)).then(() => done(mistakes < 2));
          }
        } else {
          mistakes++; Sfx.wrong();
          b.classList.remove('shake'); void b.offsetWidth; b.classList.add('shake');
          if (mistakes >= 2) [...pool.children].find(x => !x.disabled && x.textContent.toLowerCase() === words[pos].toLowerCase())?.classList.add('hint');
        }
      } }, t.w);
      pool.appendChild(b);
    });
    body.replaceChildren(lessonStage(s, true),
      h('div', { class: 'task-q' }, ei('🧩'), 'Kelimeleri sırayla diz!',
        h('button', { class: 'round-btn', onclick: () => Native.speak(plain(s.en)) }, ei('🔊'))),
      line, pool);
    setTimeout(() => ctx.alive() && Native.speak(plain(s.en)), 400);
  }

  function speakTask(s, done) {
    const text = plain(s.en);
    const sent = sentenceEl(text, { cls: 'lesson-sent' });
    const panel = speakPanel(text, ctx, (res) => done(res.ok));
    body.replaceChildren(lessonStage(s, true),
      h('div', { class: 'task-q' }, ei('🎤'), 'Dinle ve cümleyi söyle!'),
      h('div', { class: 'lesson-text' }, sent, h('button', { class: 'round-btn', onclick: () => sent.play() }, ei('🔊'))),
      panel);
    setTimeout(() => ctx.alive() && sent.play(), 400);
  }

  function finish() {
    const ratio = maxStars ? stars / maxStars : 1;
    const best = ratio >= 0.85 ? 3 : ratio >= 0.5 ? 2 : 1;
    Store.lessonDone(L.id, best);
    award(2, body); // dersi bitirme ödülü
    body.replaceChildren(endScreen({ stars: stars + 2, max: maxStars + 2, title: L.en, again: () => App.replace('lesson', L.id) }));
  }

  intro();
  return screen;
};
