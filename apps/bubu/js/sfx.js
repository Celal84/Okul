/* Küçük ses efektleri — dosya gerektirmez, WebAudio ile üretilir */
'use strict';

const Sfx = (() => {
  let ctx = null;
  function ac() {
    if (!ctx) {
      const C = window.AudioContext || window.webkitAudioContext;
      if (!C) return null;
      ctx = new C();
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }
  function tone(freq, start, dur, type = 'sine', vol = 0.18, slideTo = 0) {
    const c = ac();
    if (!c) return;
    const t = c.currentTime + start;
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(c.destination);
    o.start(t);
    o.stop(t + dur + 0.05);
  }
  const on = () => Store.s.settings.sfx;
  return {
    unlock() { ac(); },
    tap() { if (on()) tone(660, 0, 0.08, 'triangle', 0.12, 880); },
    pop() { if (on()) tone(420, 0, 0.12, 'sine', 0.2, 900); },
    flip() { if (on()) { tone(300, 0, 0.07, 'triangle', 0.1, 600); } },
    correct() { if (on()) { tone(784, 0, 0.14, 'triangle', 0.18); tone(1046, 0.11, 0.22, 'triangle', 0.18); } },
    wrong() { if (on()) { tone(330, 0, 0.16, 'sine', 0.14, 260); tone(262, 0.14, 0.2, 'sine', 0.12, 220); } },
    star() { if (on()) [1046, 1318, 1568, 2093].forEach((f, i) => tone(f, i * 0.06, 0.18, 'sine', 0.1)); },
    win() {
      if (!on()) return;
      [523, 659, 784, 1046].forEach((f, i) => tone(f, i * 0.12, 0.25, 'triangle', 0.16));
      tone(1318, 0.5, 0.5, 'triangle', 0.16);
    },
    mic() { if (on()) tone(880, 0, 0.09, 'sine', 0.12); },
  };
})();
