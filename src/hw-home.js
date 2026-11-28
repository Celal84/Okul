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
    var b = document.createElement('button'), P = 'hw.btn', pos = null, t0 = 0, sx = 0, sy = 0, moved = false;
    try { pos = JSON.parse(localStorage.getItem(P) || 'null'); } catch (e) { /* yok */ }
    b.textContent = '🎒'; b.setAttribute('aria-label', 'Homework ana sayfa');
    b.style.cssText = 'position:fixed;z-index:2147483647;width:44px;height:44px;border-radius:50%;border:0;padding:0;font-size:22px;line-height:44px;text-align:center;background:rgba(255,255,255,.82);box-shadow:0 2px 8px rgba(0,0,0,.28);opacity:.72;touch-action:none;cursor:pointer;';
    function yer(x, y) {
      x = Math.max(4, Math.min(innerWidth - 48, x)); y = Math.max(4, Math.min(innerHeight - 48, y));
      b.style.left = x + 'px'; b.style.top = y + 'px'; pos = [x, y];
    }
    if (pos) yer(pos[0], pos[1]); else yer(innerWidth - 52, innerHeight - 120);
    b.addEventListener('pointerdown', function (e) { t0 = Date.now(); sx = e.clientX; sy = e.clientY; moved = false; try { b.setPointerCapture(e.pointerId); } catch (x) { /* yok */ } e.stopPropagation(); });
    b.addEventListener('pointermove', function (e) { if (!t0) return; if (Math.abs(e.clientX - sx) + Math.abs(e.clientY - sy) > 10) moved = true; if (moved) yer(e.clientX - 22, e.clientY - 22); });
    b.addEventListener('pointerup', function (e) {
      e.stopPropagation(); if (!t0) return; t0 = 0;
      if (moved) { try { localStorage.setItem(P, JSON.stringify(pos)); } catch (x) { /* yok */ } return; }
      location.href = HUB;
    });
    b.addEventListener('click', function (e) { e.stopPropagation(); e.preventDefault(); });
    addEventListener('resize', function () { if (pos) yer(pos[0], pos[1]); });
    document.body.appendChild(b);
  }
  if (document.body) kur(); else addEventListener('DOMContentLoaded', kur);
})();
