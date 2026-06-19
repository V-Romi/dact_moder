// service-worker.js - Service Worker para DAClimaTECH
// Versión: 1.3.0 - Optimizado para PageSpeed

const CACHE_NAME = 'daclimatech-v1.3.0';

// Solo cachear recursos esenciales
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/img/favicon-daclimatech.png',
  '/img/daclimatech-portada-480w.webp'
];

// Rutas que NUNCA deben cachearse
const SKIP_CACHE = [
  'chrome-extension://',
  'analytics',
  'gtag',
  'googletagmanager',
  'google-analytics',
  'pagead',
  'doubleclick',
  'facebook',
  'cloudflare',
  'cdn.jsdelivr.net',
  'maps.gstatic.com',
  'maps.googleapis.com'
];

// INSTALL
self.addEventListener('install', event => {
  console.log('[SW] Installing v1.3.0...');
  // skipWaiting inmediato para que el nuevo SW tome control sin esperar
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .catch(err => console.warn('[SW] Cache failed:', err))
  );
});

// ACTIVATE - Limpiar cachés antiguos y tomar control inmediatamente
self.addEventListener('activate', event => {
  console.log('[SW] Activating v1.3.0...');
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => {
          console.log('[SW] Deleting old cache:', key);
          return caches.delete(key);
        })
      ))
      .then(() => self.clients.claim())
  );
});

// FETCH - Network First para HTML siempre, Cache First para assets estáticos
self.addEventListener('fetch', event => {
  const url = event.request.url;

  // Saltar para analytics, extensiones y mapas
  if (SKIP_CACHE.some(skip => url.includes(skip))) {
    return;
  }

  // Solo manejar GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Para documentos HTML: SIEMPRE Network First, sin fallback a caché
  if (event.request.destination === 'document') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Para assets (CSS, JS, imágenes): Cache First
  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        });
      })
      .catch(() => {
        if (event.request.destination === 'image') {
          return caches.match('/img/favicon-daclimatech.png');
        }
      })
  );
});

// Mensaje para actualizar
self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});

console.log('[SW] Service Worker v1.3.0 loaded');