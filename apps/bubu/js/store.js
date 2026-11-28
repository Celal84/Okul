/* İlerleme, ayarlar ve aralıklı tekrar (Leitner kutuları) */
'use strict';

const Store = (() => {
  const KEY = 'bubu.v1';
  const INTERVAL = [0, 1, 2, 4, 7, 14]; // kutu → gün
  const DAILY_GOAL = 15;

  const defaults = () => ({
    profile: { name: '', avatar: '🐱', created: Date.now() },
    settings: {
      sfx: true,
      realVoice: true,           // profesyonel ses kayıtları (yoksa cihaz sesi)
      voiceSpeed: 'normal',      // slow | normal | fast
      accent: 'en-US',           // en-US | en-GB
      trNarration: true,         // Bubu Türkçe anlatsın
      showTr: true,              // Türkçe karşılıkları göster
      speechLevel: 'easy',       // easy | medium | hard
      modules: { explore: true, listen: true, read: true, speak: true, memory: true, sentences: true, review: true, stickers: true },
      dailyLimit: 0,             // dakika, 0 = sınırsız
      breakEvery: 0,             // dakika, 0 = kapalı
      reminder: { on: false, time: '18:00' },
      pin: '',
      classVer: 2,
      yardItems: YARD_DEFAULT.slice(),   // Okul Bahçesi: velinin seçtiği eşyalar
      classItems: CLASSROOM_DEFAULT.slice(), // Sınıfım: velinin seçtiği eşyalar
    },
    stars: 0,
    starsDay: { day: 0, n: 0 },
    streak: { count: 0, last: 0 },
    words: {},       // id → {seen, ok, bad, box, due, last}
    lessons: {},     // id → {done, best}
    time: {},        // gün → saniye
    speech: { tries: 0, ok: 0 },
    stickersSeen: 0,
    last: null,      // {screen, arg, title, icon}
    extraMinutes: { day: 0, n: 0 },
  });

  let s = load();

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return defaults();
      const d = JSON.parse(raw);
      const base = defaults();
      // eksik alanları tamamla (sürüm yükseltmelerinde güvenli)
      const merged = Object.assign(base, d);
      merged.settings = Object.assign(defaults().settings, d.settings || {});
      merged.settings.modules = Object.assign(defaults().settings.modules, (d.settings || {}).modules || {});
      merged.settings.reminder = Object.assign(defaults().settings.reminder, (d.settings || {}).reminder || {});
      merged.profile = Object.assign(defaults().profile, d.profile || {});
      // v1.2: Sınıfım'a eklenen yeni eşyalar mevcut seçimlere de eklenir
      if (((d.settings || {}).classVer || 1) < 2) {
        merged.settings.classItems = [...new Set([...(merged.settings.classItems || []), 'ataturkcorner', 'locker'])];
        merged.settings.classVer = 2;
      }
      return merged;
    } catch (e) {
      return defaults();
    }
  }

  let saveTimer = null;
  function save() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(saveNow, 250);
  }
  function saveNow() {
    try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { /* depolama kapalı */ }
  }

  function day(t) {
    const d = t ? new Date(t) : new Date();
    return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 86400000);
  }
  function dayKey(n) {
    const d = new Date(n * 86400000);
    return d.toISOString().slice(0, 10);
  }

  function word(id) {
    if (!s.words[id]) s.words[id] = { seen: 0, ok: 0, bad: 0, box: 0, due: 0, last: 0 };
    return s.words[id];
  }

  function touchStreak() {
    const today = day();
    if (s.streak.last === today) return;
    s.streak.count = s.streak.last === today - 1 ? s.streak.count + 1 : 1;
    s.streak.last = today;
    Native.markPlayed(dayKey(today));
  }

  return {
    get s() { return s; },
    save, saveNow, day, dayKey, DAILY_GOAL,

    /** Yıldız ekler; yeni çıkartma açıldıysa true döner */
    addStars(n) {
      if (n <= 0) return false;
      const before = Math.floor(s.stars / STARS_PER_STICKER);
      s.stars += n;
      const today = day();
      if (s.starsDay.day !== today) s.starsDay = { day: today, n: 0 };
      s.starsDay.n += n;
      touchStreak();
      save();
      return Math.floor(s.stars / STARS_PER_STICKER) > before && before < STICKERS.length;
    },
    starsToday() { return s.starsDay.day === day() ? s.starsDay.n : 0; },
    stickerCount() { return Math.min(STICKERS.length, Math.floor(s.stars / STARS_PER_STICKER)); },

    markSeen(id) {
      const w = word(id);
      w.seen++;
      if (w.box === 0) { w.box = 1; w.due = day() + 1; }
      w.last = Date.now();
      touchStreak();
      save();
    },
    isSeen(id) { return !!(s.words[id] && s.words[id].seen); },

    /** Alıştırma sonucu: doğruysa kutu yükselir (günde en fazla bir kez) */
    grade(id, correct) {
      const w = word(id);
      const today = day();
      if (correct) {
        w.ok++;
        if (w.gday !== today || w.box < 1) {
          w.box = Math.min(5, Math.max(1, w.box) + 1);
          w.due = today + INTERVAL[w.box];
          w.gday = today;
        }
      } else {
        w.bad++;
        w.box = 1;
        w.due = today;
      }
      w.last = Date.now();
      save();
    },

    learned(id) { return !!(s.words[id] && s.words[id].box >= 3); },
    learnedCount() { return Object.values(s.words).filter(w => w.box >= 3).length; },
    seenIds() { return Object.keys(s.words).filter(k => s.words[k].seen && V[k]); },
    dueIds() {
      const today = day();
      return Object.keys(s.words).filter(k => V[k] && s.words[k].seen && s.words[k].due <= today);
    },
    weakIds(n = 8) {
      return Object.keys(s.words).filter(k => V[k] && s.words[k].bad > 0)
        .sort((a, b) => (s.words[b].bad - s.words[b].ok * 0.5) - (s.words[a].bad - s.words[a].ok * 0.5))
        .slice(0, n);
    },

    topicProgress(t) {
      const ids = topicWordIds(t);
      const seen = ids.filter(id => Store.isSeen(id)).length;
      const learned = ids.filter(id => Store.learned(id)).length;
      return { total: ids.length, seen, learned };
    },

    addTime(sec) {
      const k = dayKey(day());
      s.time[k] = (s.time[k] || 0) + sec;
      save();
    },
    todaySeconds() { return s.time[dayKey(day())] || 0; },
    extraToday() { return s.extraMinutes.day === day() ? s.extraMinutes.n : 0; },
    addExtra(min) {
      const today = day();
      if (s.extraMinutes.day !== today) s.extraMinutes = { day: today, n: 0 };
      s.extraMinutes.n += min;
      save();
    },

    lessonDone(id, stars) {
      const l = s.lessons[id] || { done: 0, best: 0 };
      l.done++;
      l.best = Math.max(l.best, stars);
      s.lessons[id] = l;
      save();
    },

    speechResult(ok) {
      s.speech.tries++;
      if (ok) s.speech.ok++;
      save();
    },

    setLast(last) { s.last = last; save(); },

    reset() {
      const keep = { profile: s.profile, settings: s.settings };
      s = Object.assign(defaults(), keep);
      saveNow();
    },
  };
})();

/** Bir konunun benzersiz kelime kimlikleri */
function topicWordIds(t) {
  let ids = t.type === 'scene' ? t.items.map(i => i[0]) : t.items.slice();
  if (t.selectable) {
    // Sınıfım: yalnızca velinin seçtiği eşyalar öğretilir ve sorulur
    const def = t.selKey === 'yardItems' ? YARD_DEFAULT : CLASSROOM_DEFAULT;
    const sel = new Set(Store.s.settings[t.selKey] || def);
    ids = ids.filter(id => sel.has(id));
  }
  return [...new Set(ids)];
}
