/* Yönlendirici, ana sayfa, süre takibi */
'use strict';

const Screens = {};

const App = {
  stack: [],
  modalOpen: null,
  pendingSticker: false,
  locked: false,
  _leave: [],
  _token: 0,
  playSeconds: 0,

  init() {
    this.root = document.getElementById('app');
    document.addEventListener('pointerdown', () => Sfx.unlock(), { once: true });
    if (!Store.s.profile.name) this.stack = [{ name: 'welcome' }];
    else this.stack = [{ name: 'home' }];
    this.render();
    setInterval(() => this.tick(), 10000);
    this.applyReminder();
  },

  go(name, arg) { Sfx.tap(); this.stack.push({ name, arg }); this.render(); },
  replace(name, arg) { this.stack[this.stack.length - 1] = { name, arg }; this.render(); },
  home() { this.stack = [{ name: 'home' }]; this.render(); },

  back() {
    if (this.modalOpen && document.querySelector('.modal')) { const c = this.modalOpen; this.modalOpen = null; c(); return; }
    if (this.locked) return;
    if (this.stack.length > 1) { this.stack.pop(); this.render(); return; }
    if (this.stack[0].name === 'home') this.confirmExit();
  },

  confirmExit() {
    modal(h('div', { class: 'center' }, ei('👋', 'modal-emo'), h('h2', null, 'Çıkmak istiyor musun?'), h('p', { class: 'muted' }, 'See you soon!')), [
      { label: 'Hayır, oyna!', cls: 'green' },
      { label: 'Çık', onclick: () => Native.exit() },
    ]);
  },

  render() {
    this._leave.forEach(f => { try { f(); } catch (e) { /* yut */ } });
    this._leave = [];
    this._token++;
    Native.stopSpeak();
    Native.stopListen(true);
    const top = this.stack[this.stack.length - 1];
    const token = this._token;
    const ctx = {
      alive: () => token === this._token,
      onLeave: (f) => this._leave.push(f),
    };
    const fn = Screens[top.name] || Screens.home;
    let el;
    try {
      el = fn(top.arg, ctx);
    } catch (e) {
      console.error(e);
      el = h('div', { class: 'screen center' }, h('p', null, 'Bir sorun oldu: ' + e.message), h('button', { class: 'btn', onclick: () => App.home() }, 'Ana sayfa'));
    }
    el.classList.add('screen-enter');
    this.root.replaceChildren(el);
    this.root.scrollTop = 0;
  },

  onBack() { App.back(); },
  onPause() { Native.stopSpeak(); },
  onResume() { this.checkLimit(); },

  /* -------- Süre takibi, günlük sınır, mola -------- */
  tick() {
    if (document.hidden || this.locked) return;
    Store.addTime(10);
    this.playSeconds += 10;
    this.checkLimit();
    const be = Store.s.settings.breakEvery;
    if (be && this.playSeconds >= be * 60) { this.playSeconds = 0; this.showBreak(); }
  },

  limitReached() {
    const lim = Store.s.settings.dailyLimit;
    if (!lim) return false;
    return Store.todaySeconds() >= (lim + Store.extraToday()) * 60;
  },

  checkLimit() {
    if (this.locked || !this.limitReached()) return;
    this.locked = true;
    Native.stopSpeak();
    Native.stopListen(true);
    const el = h('div', { class: 'lock' },
      h('div', { class: 'lock-card' },
        h('div', { class: 'lock-moon' }, ei('🌙')),
        ei('😴', 'lock-sleep'),
        h('h1', null, 'Bugünlük bu kadar!'),
        h('p', null, 'Bubu da dinlenmeye gitti. Yarın yine oynayalım! 🌟'),
        h('p', { class: 'muted' }, 'See you tomorrow!'),
        h('button', { class: 'btn ghost small', onclick: () => parentGate(() => {
          Store.addExtra(15);
          this.locked = false;
          el.remove();
          toast('+15 dakika eklendi');
        }) }, ei('🔒'), 'Veli: +15 dk'),
      ));
    document.body.appendChild(el);
    Native.speak('Time to rest. See you tomorrow!');
  },

  showBreak() {
    let left = 30;
    const num = h('b', null, left);
    const m = modal(h('div', { class: 'center' }, ei('😴', 'modal-emo'), h('h2', null, 'Mola zamanı!'),
      h('p', null, 'Gözlerini dinlendir, uzaklara bak 👀 ve biraz esne.'), h('div', { class: 'big-count' }, num)), [], { dismiss: false });
    Native.speak('Time for a little break!');
    const t = setInterval(() => {
      left--; num.textContent = left;
      if (left <= 0) { clearInterval(t); m.close(); Sfx.correct(); }
    }, 1000);
  },

  applyReminder() {
    const r = Store.s.settings.reminder;
    const [hh, mm] = (r.time || '18:00').split(':').map(Number);
    const name = Store.s.profile.name || 'Merhaba';
    Native.setReminder(!!r.on, hh, mm, 'Bubu seni bekliyor! 🦉', `${name}, bugün birlikte 10 dakika İngilizce oynayalım mı? 🌟`);
  },

  /* -------- Çıkartma ödülü -------- */
  showStickerIfAny() {
    if (!this.pendingSticker) return;
    this.pendingSticker = false;
    const idx = Store.stickerCount() - 1;
    const st = STICKERS[idx];
    if (!st) return;
    const gift = ei('🎁', 'gift');
    const prize = ei(st, 'prize');
    const box = h('div', { class: 'center sticker-reveal' }, h('h2', null, 'Yeni çıkartma!'), h('div', { class: 'reveal-stage' }, gift, prize), h('p', { class: 'muted' }, 'Hediyeye dokun!'));
    const m = modal(box, [{ label: 'Albüme bak', cls: 'green', onclick: () => App.go('stickers') }, { label: 'Tamam' }]);
    let opened = false;
    const open = () => {
      if (opened) return;
      opened = true;
      Sfx.win();
      gift.classList.add('open');
      prize.classList.add('show');
      confetti(50);
      Native.speak('Wow! A new sticker!');
    };
    gift.addEventListener('click', open);
    setTimeout(open, 2500);
    return m;
  },
};

/* ================================================= KARŞILAMA */
Screens.welcome = () => {
  let avatar = Store.s.profile.avatar || '🐱';
  const input = h('input', { class: 'name-input', placeholder: 'Adın', maxlength: 16, value: Store.s.profile.name || '' });
  const avs = h('div', { class: 'avatars' }, AVATARS.map(a => {
    const b = h('button', { class: 'av' + (a === avatar ? ' sel' : ''), onclick: () => {
      Sfx.pop(); avatar = a;
      avs.querySelectorAll('.av').forEach(x => x.classList.remove('sel')); b.classList.add('sel');
    } }, ei(a));
    return b;
  }));
  const b = bubu('Hello! I am Bubu! 👋', { cls: 'welcome-bubu' });
  setTimeout(() => Native.speakMixed('Hello! I am Bubu!').then(() => Store.s.settings.trNarration && Native.speak('Merhaba! Ben Bubu. Senin adın ne?', { lang: 'tr' })), 500);
  return h('div', { class: 'screen welcome' },
    b,
    h('div', { class: 'card welcome-card' },
      h('h2', null, 'Senin adın ne?'),
      h('p', { class: 'muted' }, 'What is your name?'),
      input,
      h('h3', null, 'Bir arkadaş seç'),
      avs,
      h('button', { class: 'btn big green', onclick: () => {
        const name = input.value.trim();
        if (!name) { input.classList.add('shake'); setTimeout(() => input.classList.remove('shake'), 500); input.focus(); return; }
        Store.s.profile.name = name.charAt(0).toLocaleUpperCase('tr') + name.slice(1);
        Store.s.profile.avatar = avatar;
        Store.saveNow();
        Sfx.win();
        App.home();
      } }, 'Başlayalım!', ei('🎉')),
    ));
};

/* ================================================= ANA SAYFA */
const MODULES = [
  { id: 'explore', screen: 'town', icon: '🏘️', tr: 'Keşfet', en: 'Explore', color: 'c-orange' },
  { id: 'classroom', screen: 'scene', arg: 'classroom', icon: '🏫', tr: 'Sınıfım', en: 'My Classroom', color: 'c-indigo' },
  { id: 'schoolyard', screen: 'scene', arg: 'schoolyard', icon: '🛝', tr: 'Okul Bahçesi', en: 'School Yard', color: 'c-lime' },
  { id: 'listen', screen: 'pick', arg: 'listen', icon: '🎧', tr: 'Dinle', en: 'Listening', color: 'c-blue' },
  { id: 'read', screen: 'pick', arg: 'read', icon: '📖', tr: 'Oku', en: 'Reading', color: 'c-green' },
  { id: 'speak', screen: 'pick', arg: 'speak', icon: '🎤', tr: 'Konuş', en: 'Speaking', color: 'c-pink' },
  { id: 'memory', screen: 'pick', arg: 'memory', icon: '🃏', tr: 'Hafıza', en: 'Memory', color: 'c-purple' },
  { id: 'sentences', screen: 'lessons', icon: '💬', tr: 'Cümleler', en: 'Sentences', color: 'c-teal' },
  { id: 'review', screen: 'review', icon: '🔁', tr: 'Tekrar', en: 'Review', color: 'c-yellow' },
  { id: 'stickers', screen: 'stickers', icon: '🏆', tr: 'Çıkartmalar', en: 'Stickers', color: 'c-red' },
];

Screens.home = (arg, ctx) => {
  const S = Store.s;
  const name = S.profile.name;
  const today = Store.starsToday();
  const goal = Store.DAILY_GOAL;
  const pct = Math.min(1, today / goal);
  const due = Store.dueIds().length;

  const ring = h('div', { class: 'goal' + (pct >= 1 ? ' done' : ''), style: { '--p': pct } },
    h('div', { class: 'goal-in' }, pct >= 1 ? ei('🏆') : ei('⭐'), h('b', null, `${Math.min(today, goal)}/${goal}`)));

  const hello = pick([`Merhaba ${name}! 👋`, `Hi ${name}! Hazır mısın?`, `Hello ${name}! Hadi oynayalım!`]);
  const mascot = bubu(hello, { cls: 'home-bubu', onclick: () => {
    Sfx.pop();
    const line = pick(BUBU_HELLO);
    mascot.say(line);
    Native.speak(line);
  } });

  const tiles = MODULES.filter(m => S.settings.modules[m.id] !== false).map(m =>
    h('button', { class: `tile ${m.color}`, onclick: () => App.go(m.screen, m.arg) },
      ei(m.icon, 'tile-icon'),
      h('div', { class: 'tile-tr' }, m.tr),
      h('div', { class: 'tile-en' }, m.en),
      m.id === 'review' && due ? h('span', { class: 'badge' }, due) : null,
    ));

  let cont = null;
  if (S.last && S.last.screen && Screens[S.last.screen]) {
    cont = h('button', { class: 'continue', onclick: () => App.go(S.last.screen, S.last.arg) },
      ei(S.last.icon || '🎯', 'cont-icon'),
      h('div', null, h('small', null, 'Kaldığın yerden devam et'), h('b', null, S.last.title || '')),
      h('span', { class: 'cont-go' }, '▶'));
  }

  setTimeout(() => { if (ctx.alive()) Native.speak(`Hello ${name}!`); }, 400);

  return h('div', { class: 'screen home' },
    h('div', { class: 'home-top' },
      h('button', { class: 'me', onclick: () => App.go('settings') }, ei(S.profile.avatar, 'me-av'), h('b', null, name)),
      h('div', { class: 'spacer' }),
      h('div', { class: 'stat streak', title: 'Seri' }, ei('🔥'), h('b', null, S.streak.count || 0)),
      h('div', { class: 'stat stars' }, ei('⭐'), h('b', { 'data-stars': '' }, S.stars)),
      h('button', { class: 'icon-btn', 'aria-label': 'Ayarlar', onclick: () => App.go('settings') }, ei('⚙️')),
    ),
    h('div', { class: 'home-hero' }, mascot, h('div', { class: 'hero-right' }, ring, h('small', { class: 'muted' }, 'Günün hedefi'))),
    cont,
    h('div', { class: 'tiles n' + tiles.length }, tiles),
  );
};

window.App = App; // Java tarafı window.App üzerinden çağırır
window.addEventListener('DOMContentLoaded', () => App.init());
