/* Keşfet: kasaba haritası, sahneler (mutfak, okul...) ve kart konuları */
'use strict';

/* ================================================= KASABA */
Screens.town = () => {
  const groups = GROUPS.map(g => {
    const cards = TOPICS.filter(t => t.group === g.id).map(t => {
      const p = Store.topicProgress(t);
      const done = p.learned === p.total;
      return h('button', { class: 'place', style: { '--c': t.color }, onclick: () => App.go(t.type === 'scene' ? 'scene' : 'cards', t.id) },
        h('div', { class: 'place-icon' }, ei(t.icon)),
        h('div', { class: 'place-tr' }, t.tr),
        h('div', { class: 'place-en' }, t.en),
        h('div', { class: 'bar' }, h('i', { style: { width: (p.seen / p.total * 100) + '%' } })),
        done ? h('span', { class: 'place-done' }, ei('🏆')) : null,
      );
    });
    return h('section', { class: 'group' },
      h('h2', { class: 'group-title' }, ei(g.icon), g.tr),
      h('div', { class: 'places' }, cards));
  });
  return h('div', { class: 'screen town' }, topbar('Kasabam', { icon: '🗺️' }), h('div', { class: 'scroll' }, groups));
};

/* ================================================= SAHNE ARKA PLANLARI */
const IDLE = {
  cloud: 'drift', bird: 'flutter', butterfly: 'flutter', kite: 'sway', balloon: 'floaty', fish: 'swimy',
  boat: 'bobby', ship: 'bobby', dolphin: 'jumpy', duck: 'bobby', sea: 'bobby', sun: 'spinslow', plane: 'drift',
  helicopter: 'floaty', swing: 'swingy', parrot: 'flutter', monkey: 'sway', octopus: 'bobby', crab: 'sidestep',
  chick: 'peck', chicken: 'peck', clock: 'tick',
};

function sceneDecor(bg) {
  const d = (cls, style) => h('div', { class: 'dc ' + cls, style });
  switch (bg) {
    case 'kitchen': return [d('wall tiles'), d('floor checker'), d('shelf', { left: '70%', width: '25%', top: '33%' })];
    case 'bedroom': return [d('wall dots'), d('floor wood'), d('rug', { left: '52%', width: '34%', bottom: '2%' })];
    case 'bathroom': return [d('wall bluetiles'), d('floor checker blue')];
    case 'living': return [d('wall warm'), d('floor wood'), d('rug red', { left: '18%', width: '46%', bottom: '1%' }), d('cabinet', { left: '68%', width: '20%', bottom: '5%', height: '19%' })];
    case 'classroom': return [d('wall school'), d('floor wood light')];
    case 'schoolyard': return [d('sky'), d('hill h1'), d('hill h2'), d('grass'), d('yard'), d('courtline')];
    case 'market': return [d('wall market'), d('shelf big', { top: '32%' }), d('shelf big', { top: '59%' }), d('floor checker')];
    case 'park': return [d('sky'), d('hill h1'), d('hill h2'), d('grass'), d('path')];
    case 'farm': return [d('sky'), d('hill h1'), d('grass'), h('img', { class: 'dc barn', src: 'img/svg/barn.svg' }), d('fence')];
    case 'zoo': return [d('sky warm'), d('grass savanna'), d('pond'), d('ztree')];
    case 'street': return [d('sky'), d('city'), d('sidewalk'), d('road'), d('roadline')];
    case 'beach': return [d('sky'), d('sea'), d('waves'), d('sand')];
    default: return [d('sky')];
  }
}

/* ================================================= BİLGİ KARTI */
function infoCard() {
  // Sahnenin üstüne binmez: yatayda sağda, dikeyde altta sabit duran panel
  const el = h('aside', { class: 'info noitem' });
  let curId = null;
  el.reset = () => {
    curId = null;
    el.classList.add('noitem');
    el.replaceChildren(h('div', { class: 'info-empty' }, ei('🦉', 'info-owl'), h('b', null, 'Eşyalara dokun!'), h('small', null, 'Tap an item!')));
  };
  el.show = async (id, ctx) => {
    curId = id;
    const w = V[id];
    const sent = sentenceEl(w.ex, { tapWords: true });
    const showTr = Store.s.settings.showTr;
    el.replaceChildren(
      h('div', { class: 'info-vis' }, visOf(id)),
      h('div', { class: 'info-body' },
        h('div', { class: 'info-word' },
          h('b', null, w.en),
          h('button', { class: 'round-btn', 'aria-label': 'Dinle', onclick: (e) => { e.stopPropagation(); Native.speak(w.en); } }, ei('🔊')),
          h('button', { class: 'round-btn', 'aria-label': 'Yavaş', onclick: (e) => { e.stopPropagation(); Native.speak(w.en, { slow: true }); } }, ei('🐢')),
        ),
        showTr ? h('div', { class: 'info-tr' }, w.tr) : null,
        h('div', { class: 'info-sent' }, sent, h('button', { class: 'round-btn sm', onclick: (e) => { e.stopPropagation(); sent.play(); } }, ei('🔊'))),
        showTr ? h('div', { class: 'info-sent-tr muted' }, w.exTr) : null,
      ),
      Store.s.settings.modules.speak !== false ? h('button', { class: 'mic-mini', onclick: (e) => {
        e.stopPropagation();
        speakModal(id);
      } }, ei('🎤'), h('small', null, 'Söyle')) : null,
    );
    el.classList.remove('noitem');
    await Native.speak(w.en);
    if (curId !== id || (ctx && !ctx.alive())) return;
    await sleep(250);
    if (curId !== id || (ctx && !ctx.alive())) return;
    await sent.play();
  };
  el.reset();
  return el;
}

/* ================================================= BUL BAKALIM oyunu */
function findGame(t, nodes, ctx, host) {
  const ids = shuffle(Object.keys(nodes)).slice(0, Math.min(6, Object.keys(nodes).length));
  let i = 0, tries = 0, stars = 0, busy = false;
  const dots = progressDots(ids.length);
  const word = h('b');
  const bar = h('div', { class: 'findbar' },
    ei('🔍', 'fb-icon'),
    h('div', { class: 'fb-q' }, h('small', null, 'Bul bakalım!'), h('div', null, 'Where is the ', word, '?')),
    h('button', { class: 'round-btn', onclick: () => say() }, ei('🔊')),
    dots);
  const say = () => Native.speak(`Where is the ${V[ids[i]].en}?`);
  host.appendChild(bar);

  function next() {
    tries = 0; busy = false;
    Object.values(nodes).flat().forEach(n => n.classList.remove('hint', 'good'));
    if (i >= ids.length) { finish(); return; }
    dots.cur(i);
    word.textContent = V[ids[i]].en;
    say();
  }
  function finish() {
    bar.remove();
    App.game = null;
    const m = modal(endScreen({ stars, max: ids.length, title: t.tr + ' · Bul Bakalım', ok: () => m.close(), again: () => { m.close(); App.game = findGame(t, nodes, ctx, host); } }), [], { cls: 'wide' });
  }
  function tap(id, node) {
    if (busy) return;
    const target = ids[i];
    if (id === target) {
      busy = true;
      Sfx.correct();
      node.classList.add('good');
      dots.set(i, tries === 0 ? 'ok' : 'meh');
      if (tries === 0) { stars++; award(1, node); }
      Store.grade(target, tries === 0);
      Native.speak(pick(PRAISE));
      i++;
      setTimeout(() => ctx.alive() && next(), 1400);
    } else {
      tries++;
      Sfx.wrong();
      node.classList.remove('shake'); void node.offsetWidth; node.classList.add('shake');
      if (tries === 1) Store.grade(target, false);
      Native.speak(`This is ${/^[aeiou]/i.test(V[id].en) ? 'an' : 'a'} ${V[id].en}.`);
      if (tries >= 2) nodes[target].forEach(n => n.classList.add('hint'));
    }
  }
  next();
  return { tap, stop: () => bar.remove() };
}

/* ================================================= SAHNE */
Screens.scene = (id, ctx) => {
  const t = topicById(id);
  Store.setLast({ screen: 'scene', arg: id, title: t.tr, icon: t.icon });
  const stage = h('div', { class: 'stage bg-' + t.bg }, sceneDecor(t.bg));
  const nodes = {};
  const info = infoCard();
  const count = h('b');
  const ids = topicWordIds(t);
  const updCount = () => { count.textContent = `${ids.filter(x => Store.isSeen(x)).length}/${ids.length}`; };
  updCount();
  App.game = null;

  const active = new Set(ids);
  t.items.forEach(([wid, x, y, wd, over], k) => {
    if (!active.has(wid)) {
      // seçilmemiş eşya: masa/kitaplık gibi destekler süs olarak kalır, diğerleri gizlenir
      if ((t.supports || []).includes(wid)) {
        stage.appendChild(h('div', { class: 'dc deco', style: { left: (x - wd / 2) + '%', bottom: (100 - y) + '%', width: wd + '%', zIndex: 10 + k } }, visOf(wid)));
      }
      return;
    }
    const img = over ? vis(over) : visOf(wid);
    const b = h('button', {
      class: 'obj' + (Store.isSeen(wid) ? '' : ' new') + (IDLE[wid] ? ' idle-' + IDLE[wid] : ''),
      style: { left: `calc(${x - wd / 2}% - 1.2vmin)`, bottom: `calc(${100 - y}% - 1.2vmin)`, width: wd + '%', zIndex: 10 + k, animationDelay: (k * 0.06) + 's' },
      onclick: (e) => {
        e.stopPropagation();
        if (App.game) { App.game.tap(wid, b); return; }
        Sfx.pop();
        b.classList.remove('tapped'); void b.offsetWidth; b.classList.add('tapped');
        const first = !Store.isSeen(wid);
        Store.markSeen(wid);
        (nodes[wid] || []).forEach(n => n.classList.remove('new'));
        updCount();
        floatLabel(stage, b, V[wid].en);
        info.show(wid, ctx);
        if (first && ids.every(x => Store.isSeen(x))) {
          setTimeout(() => {
            if (!ctx.alive()) return;
            confetti(); Sfx.win(); award(3, stage);
            toast('Hepsini buldun! Şimdi "Bul Bakalım" oyna! 🔍', 3500);
          }, 2600);
        }
      },
    }, img);
    (nodes[wid] = nodes[wid] || []).push(b);
    stage.appendChild(b);
  });

  const findBtn = h('button', { class: 'pill-btn', onclick: () => {
    Sfx.tap();
    info.reset();
    if (App.game) { App.game.stop(); App.game = null; findBtn.classList.remove('on'); return; }
    findBtn.classList.add('on');
    App.game = findGame(t, nodes, ctx, wrap);
  } }, ei('🔍'), 'Bul Bakalım');

  ctx.onLeave(() => { App.game = null; });
  const wrap = h('div', { class: 'stage-wrap' }, stage);
  const hint = h('div', { class: 'scene-hint' }, ei('👆'), 'Eşyalara dokun!');
  wrap.appendChild(hint);
  setTimeout(() => hint.remove(), 4000);
  if (Store.s.settings.trNarration && ids.every(x => !Store.isSeen(x))) {
    setTimeout(() => ctx.alive() && Native.speak(`${t.tr}! Eşyalara dokun ve İngilizcelerini öğren.`, { lang: 'tr' }), 500);
  } else setTimeout(() => ctx.alive() && Native.speak(`Welcome to the ${t.en.toLowerCase()}!`), 400);

  return h('div', { class: 'screen scene' },
    topbar(t.tr, { icon: t.icon, right: h('div', { class: 'tb-right' }, h('div', { class: 'pill' }, ei('✅'), count), findBtn, quickPlay(t.id)) }),
    h('div', { class: 'split' }, wrap, info));
};

function floatLabel(stage, node, text) {
  const r = node.getBoundingClientRect(), sr = stage.getBoundingClientRect();
  const l = h('div', { class: 'float-label' }, text);
  l.style.left = (r.left - sr.left + r.width / 2) + 'px';
  l.style.top = Math.max(4, r.top - sr.top - 10) + 'px';
  stage.appendChild(l);
  setTimeout(() => l.remove(), 1800);
}

/** Konu ekranından doğrudan oyunlara kısayol */
function quickPlay(topicId) {
  const S = Store.s.settings.modules;
  const opts = [
    S.listen !== false && ['🎧', 'Dinle', () => App.go('quiz', { mode: 'listen', topic: topicId })],
    S.memory !== false && ['🃏', 'Hafıza', () => App.go('memory', { topic: topicId })],
    S.speak !== false && ['🎤', 'Konuş', () => App.go('speak', { topic: topicId })],
  ].filter(Boolean);
  return h('div', { class: 'quick' }, opts.map(([e, l, f]) => h('button', { class: 'round-btn', title: l, onclick: f }, ei(e))));
}

/* ================================================= KART KONULARI (renkler, sayılar...) */
Screens.cards = (id, ctx) => {
  const t = topicById(id);
  Store.setLast({ screen: 'cards', arg: id, title: t.tr, icon: t.icon });
  const nodes = {};
  const info = infoCard();
  const ids = topicWordIds(t);
  const count = h('b');
  const updCount = () => { count.textContent = `${ids.filter(x => Store.isSeen(x)).length}/${ids.length}`; };
  updCount();
  App.game = null;
  const grid = h('div', { class: 'cardgrid n' + ids.length }, ids.map((wid, k) => {
    const c = h('button', { class: 'wcard' + (Store.isSeen(wid) ? '' : ' new'), style: { animationDelay: k * 0.05 + 's' }, onclick: () => {
      if (App.game) { App.game.tap(wid, c); return; }
      Sfx.pop();
      c.classList.remove('tapped'); void c.offsetWidth; c.classList.add('tapped');
      const first = !Store.isSeen(wid);
      Store.markSeen(wid);
      c.classList.remove('new');
      updCount();
      info.show(wid, ctx);
      if (first && ids.every(x => Store.isSeen(x))) setTimeout(() => { if (ctx.alive()) { confetti(); Sfx.win(); award(3, grid); } }, 2600);
    } }, h('div', { class: 'wcard-vis' }, visOf(wid)), h('div', { class: 'wcard-en' }, V[wid].en));
    nodes[wid] = [c];
    return c;
  }));
  const wrap = h('div', { class: 'cards-wrap' }, grid);
  const findBtn = h('button', { class: 'pill-btn', onclick: () => {
    Sfx.tap();
    info.reset();
    if (App.game) { App.game.stop(); App.game = null; findBtn.classList.remove('on'); grid.classList.remove('hide-words'); return; }
    findBtn.classList.add('on');
    grid.classList.add('hide-words');
    App.game = findGame(t, nodes, ctx, wrap);
  } }, ei('🔍'), 'Bul Bakalım');
  ctx.onLeave(() => { App.game = null; });
  setTimeout(() => ctx.alive() && Native.speak(t.en + '!'), 400);
  return h('div', { class: 'screen cards' },
    topbar(t.tr, { icon: t.icon, right: h('div', { class: 'tb-right' }, h('div', { class: 'pill' }, ei('✅'), count), findBtn, quickPlay(t.id)) }),
    h('div', { class: 'split' }, wrap, info));
};
