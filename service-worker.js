// FlyDA62.com Service Worker
// Version 1.0.0
// Caching strategy for instant repeat visits

const CACHE_VERSION = 'flyda62-v1';
const CACHE_ASSETS = [
    '/',
    '/index.html',
    '/assets/images/n520ra-1.jpg',
    '/assets/images/n520ra-2.jpg',
    '/assets/images/n520ra-3.jpg',
    '/assets/images/n520ra-4.jpg',
    '/assets/images/n520ra-5.jpg',
    '/assets/images/n520ra-6.jpg',
    '/assets/images/n520ra-7.jpg',
    '/assets/images/hero-da62-flight.png'
];

// Install event - cache critical assets
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing...');
    event.waitUntil(
        caches.open(CACHE_VERSION)
            .then(cache => {
                console.log('[Service Worker] Caching assets');
                return cache.addAll(CACHE_ASSETS);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activating...');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_VERSION) {
                        console.log('[Service Worker] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch event - serve from cache, fall back to network
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') return;
    
    // Skip external requests
    if (!event.request.url.startsWith(self.location.origin)) return;
    
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                if (cachedResponse) {
                    console.log('[Service Worker] Serving from cache:', event.request.url);
                    return cachedResponse;
                }
                
                // Not in cache - fetch from network
                return fetch(event.request).then(response => {
                    // Don't cache non-successful responses
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    
                    // Clone the response (can only read once)
                    const responseToCache = response.clone();
                    
                    // Cache for future requests
                    caches.open(CACHE_VERSION).then(cache => {
                        cache.put(event.request, responseToCache);
                    });
                    
                    return response;
                });
            })
            .catch(() => {
                // Offline fallback (optional)
                console.log('[Service Worker] Fetch failed, offline');
            })
    );
});
