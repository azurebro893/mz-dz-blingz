const cacheName = 'mzdz-v1';
const assets = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './assets/home.png',
  './assets/debra.png'
];

// Install service worker
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// Fetch items from cache
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});
