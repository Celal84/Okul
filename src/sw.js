/* Homework — çevrimdışı önbellek (web/iPhone) */
const C = 'homework-__VER__';
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(C).then(c => c.addAll(['./', 'index.html', 'hw-home.js', 'manifest.webmanifest', 'icon-192.png']))); });
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  const ag = () => fetch(r).then(x => { if (x.ok) { const k = x.clone(); caches.open(C).then(c => c.put(r, k)); } return x; });
  if (r.mode === 'navigate') e.respondWith(ag().catch(() => caches.match(r, { ignoreSearch: true }).then(x => x || caches.match('index.html'))));
  else e.respondWith(caches.match(r).then(x => x || ag()));
});
