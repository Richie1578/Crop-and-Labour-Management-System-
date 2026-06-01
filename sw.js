const CACHE_NAME = 'farmtrack-v2';
const CORE_ASSETS = [
  './',
  './index.html',
  './assets/css/farmtrack.css',
  './assets/js/farmtrack.js',
  './assets/js/supabase_db.js',
  './manifest.webmanifest',
  './assets/icons/icon-192.svg',
  './assets/icons/icon-512.svg',
  './assets/images/logo-icon.png',
  './assets/images/logo-full.png',
  './assets/images/Fieldbackground.jpg',
  './assets/images/Truck.jpg',
  './assets/images/hero-farm.jpg',
  './assets/images/maize-field.jpg',
  './assets/images/soya-bean.jpg',
  './assets/images/groundnuts.jpg',
  './assets/images/farm-workers.jpg',
  './assets/images/harvest.jpg',
  './assets/images/weather-field.jpg',
  './assets/images/planting.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const shouldNetworkFirst = req.url.endsWith('/assets/js/farmtrack.js') || req.url.endsWith('/index.html');
  if (shouldNetworkFirst) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
          return res;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match('./index.html')))
    );
    return;
  }
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
          return res;
        })
        .catch(() => caches.match('./index.html'));
    })
  );
});
