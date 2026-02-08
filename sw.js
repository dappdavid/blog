const CACHE_NAME = 'dappdavid-blog-cache-v1';

// Install event - skip waiting to activate immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activate event - claim clients to control open pages
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Fetch event - Network first for navigation requests
self.addEventListener('fetch', (event) => {
  // Check if it's a navigation request (HTML page)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request, { cache: 'no-cache' }) // Force network validation
        .catch(() => {
          return caches.match(event.request);
        })
    );
  }
  // For other requests, use default browser behavior (HTTP cache)
});
