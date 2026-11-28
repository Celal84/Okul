/* Homework — gömülü oyunlara eklenen köprü: ana sayfaya dönüş düğmesi + geri tuşu */
(function () {
  var app = document.currentScript.getAttribute('data-app'), HUB = '../../index.html';
  window.__hwBack = function () {
    try {
      if (app === 'roket') { if (typeof goBack === 'function') { goBack(); return ''; } }
      else if (app === 'matematik') return (typeof back === 'function' && back()) || '';
      else if (app === 'carpim') { if (typeof home === 'function') { home(); return ''; } }
      else if (app === 'bubu') { if (typeof App !== 'undefined' && App.onBack) { App.onBack(); return ''; } }
      else return (typeof goBack === 'function' && goBack()) ? '' : 'exit';
    } catch (e) { /* ana sayfaya dön */ }
    return 'exit';
  };
  function kur() {
    var b = document.createElement('button'), P = 'hw.geri', pos = null, t0 = 0, sx = 0, sy = 0, moved = false;
    try { pos = JSON.parse(localStorage.getItem(P) || 'null'); } catch (e) { /* yok */ }
    b.textContent = '\u2190 Geri'; b.setAttribute('aria-label', 'Homework ana sayfa');
    b.style.cssText = 'position:fixed;z-index:2147483647;height:38px;padding:0 14px 0 10px;border-radius:0 19px 19px 0;border:0;font:700 15px system-ui,sans-serif;color:#fff;background:rgba(30,35,55,.82);box-shadow:0 2px 8px rgba(0,0,0,.3);touch-action:none;cursor:pointer;white-space:nowrap;';
    function yer(x, y) {
      x = Math.max(0, Math.min(innerWidth - 80, x)); y = Math.max(4, Math.min(innerHeight - 44, y));
      b.style.left = x + 'px'; b.style.top = y + 'px'; b.style.borderRadius = x ? '19px' : '0 19px 19px 0'; pos = [x, y];
    }
    if (pos) yer(pos[0], pos[1]); else yer(0, Math.round(innerHeight * 0.44));
    b.addEventListener('pointerdown', function (e) { t0 = Date.now(); sx = e.clientX; sy = e.clientY; moved = false; try { b.setPointerCapture(e.pointerId); } catch (x) { /* yok */ } e.stopPropagation(); });
    b.addEventListener('pointermove', function (e) { if (!t0) return; if (Math.abs(e.clientX - sx) + Math.abs(e.clientY - sy) > 10) moved = true; if (moved) yer(e.clientX - 30, e.clientY - 19); });
    b.addEventListener('pointerup', function (e) {
      e.stopPropagation(); if (!t0) return; t0 = 0;
      if (moved) { try { localStorage.setItem(P, JSON.stringify(pos)); } catch (x) { /* yok */ } return; }
      location.href = HUB;
    });
    b.addEventListener('click', function (e) { e.stopPropagation(); e.preventDefault(); });
    addEventListener('resize', function () { if (pos) yer(pos[0], pos[1]); });
    document.body.appendChild(b);
  }
  // oyunda geçen süreyi veli ekranı için kaydet
  setInterval(function () {
    if (document.hidden) return;
    try {
      var S = JSON.parse(localStorage.getItem('homework.v1') || 'null'); if (!S) return;
      var d = new Date(), g = d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
      S.log = S.log || {}; var l = S.log[g] || (S.log[g] = { n: 0, d: 0 }); l.oy = (l.oy || 0) + 30;
      localStorage.setItem('homework.v1', JSON.stringify(S));
    } catch (e) { /* yok */ }
  }, 30000);
  if (document.body) kur(); else addEventListener('DOMContentLoaded', kur);
})();
