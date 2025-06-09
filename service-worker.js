const CACHE_NAME = 'eat-casually-cache-v1';
const urlsToCache = [
  'index.html',
  'styles.css',
  'Images/log.png',
  'video/sushi.mp4'
  // Add other pages like recipes.html, favorites.html, etc.
];

// Install service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch from cache or network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
