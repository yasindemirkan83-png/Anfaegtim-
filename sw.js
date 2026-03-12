const cacheName = 'anfa-pwa-v42';
const assets = ['./', './index.html', './manifest.json', './29158.png'];

self.addEventListener('install', e => {
    e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
    e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});

