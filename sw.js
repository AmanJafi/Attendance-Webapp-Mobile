const CACHE_NAME = 'attendly-v6';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap'
];

// Install Event
self.addEventListener('install', event => {
  self.skipWaiting(); // FORCE new SW to activate immediately
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate Event (Cleanup)
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
  return self.clients.claim(); // Immediately control all open clients
});

// Fetch Event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Network First strategy for HTML to ensure updates? 
      // Or Stale-While-Revalidate? 
      // For now, Cache First is faster, but the SkipWaiting+ClientsClaim will handle the update flow.
      return cachedResponse || fetch(event.request);
    })
  );
});
