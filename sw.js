/* Service worker — mode hors-ligne complet (Darija Academy v2) */
const CACHE = 'darija-v2';
const ASSETS = [
  './', './index.html', './css/style.css', './manifest.webmanifest',
  './js/app.js', './js/tts.js', './js/store.js', './js/icons.js',
  './data/vocab-a.js', './data/vocab-b.js', './data/vocab-c.js', './data/lexique.js',
  './data/grammar.js', './data/grammar-2.js', './data/grammar-3.js',
  './data/conjugation.js', './data/conjugation-2.js', './data/exercises.js',
  './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png', './icons/logo-256.png', './icons/logo.svg',
  './fonts/baloo-2-latin-400-normal.woff2', './fonts/baloo-2-latin-700-normal.woff2', './fonts/baloo-2-latin-800-normal.woff2',
  './fonts/fredoka-one-latin-400-normal.woff2',
  './fonts/noto-naskh-arabic-arabic-400-normal.woff2', './fonts/noto-naskh-arabic-arabic-500-normal.woff2',
  './fonts/noto-naskh-arabic-arabic-600-normal.woff2', './fonts/noto-naskh-arabic-arabic-700-normal.woff2'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
/* Réseau d'abord pour les fichiers de l'app (mises à jour), cache en secours (hors-ligne). */
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  if (url.origin === location.origin) {
    e.respondWith(
      fetch(e.request).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return res;
      }).catch(() => caches.match(e.request, {ignoreSearch: true}).then(r => r || caches.match('./index.html')))
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(r => r || fetch(e.request).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return res;
      }).catch(() => new Response('', {status: 408})))
    );
  }
});
