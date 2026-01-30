// service-worker.js - Service Worker para DAClimaTECH
// Versión: 1.1.0 - Optimizado para PageSpeed

const CACHE_NAME = 'daclimatech-v1.1.0';

// Solo cachear recursos esenciales
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/navigation.js',
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
  'cloudflare'
];

// INSTALL
self.addEventListener('install', event => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
      .catch(err => console.warn('[SW] Cache failed:', err))
  );
});

// ACTIVATE - Limpiar cachés antiguos
self.addEventListener('activate', event => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

// FETCH - Estrategia Network First para HTML, Cache First para assets
self.addEventListener('fetch', event => {
  const url = event.request.url;
  
  // Saltar completamente para analytics y extensiones
  if (SKIP_CACHE.some(skip => url.includes(skip))) {
    return;
  }

  // Solo manejar GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Para documentos HTML: Network First
  if (event.request.destination === 'document') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Cachear la respuesta
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
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
        if (cached) {
          return cached;
        }
        return fetch(event.request).then(response => {
          // Solo cachear respuestas válidas
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        });
      })
      .catch(() => {
        // Fallback para imágenes
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

console.log('[SW] Service Worker loaded');