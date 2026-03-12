const cacheName = 'anfa-v42-cache';
const filesToCache = [
  './',
  './index.html',
  './manifest.json',
  './29158.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});

