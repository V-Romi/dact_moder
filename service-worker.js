// service-worker.js - Service Worker para DAClimaTECH
// Versión: 1.0

const CACHE_NAME = 'daclimatech-v1.0.0';
const CACHE_STATIC = 'daclimatech-static-v1.0.0';
const CACHE_DYNAMIC = 'daclimatech-dynamic-v1.0.0';

// Archivos estáticos críticos para cachear
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/non-critical.css',
  '/navigation.js',
  '/cookie-loader.js',
  '/aerotermia.html',
  '/aire-acondicionado.html',
  '/asesoria-y-venta.html',
  '/calefaccion.html',
  '/electricidad.html',
  '/frio-comercial.html',
  '/maquinaria-de-hosteleria.html',
  '/ventilacion-extraccion.html',
  '/soporte-tecnico.html',
  '/descubre-mas.html',
  // Imágenes críticas
  '/img/daclimatech-portada-640w.webp',
  '/img/daclimatech-portada-640w.jpg',
  '/img/daclimatech-portada-320w.webp',
  '/img/daclimatech-portada-320w.jpg',
  '/img/favicon-daclimatech.png',
  // Google Fonts (se cachean automáticamente cuando se cargan)
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
];

// Rutas que no deben cachearse
const SKIP_CACHE = [
  '/admin/',
  '/private/',
  'chrome-extension://',
  '.pdf',
  'analytics',
  'gtag',
  'googletagmanager'
];

// INSTALL - Instalar y cachear recursos estáticos
self.addEventListener('install', event => {
  console.log('[SW] Installing Service Worker...');
  
  event.waitUntil(
    caches.open(CACHE_STATIC)
      .then(cache => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('[SW] Static assets cached successfully');
        return self.skipWaiting(); // Activar inmediatamente
      })
      .catch(error => {
        console.error('[SW] Error caching static assets:', error);
      })
  );
});

// ACTIVATE - Limpiar cachés antiguos
self.addEventListener('activate', event => {
  console.log('[SW] Activating Service Worker...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_STATIC && cacheName !== CACHE_DYNAMIC) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Service Worker activated');
        return self.clients.claim(); // Controlar inmediatamente todas las páginas
      })
  );
});

// FETCH - Estrategia de caché
self.addEventListener('fetch', event => {
  const requestURL = new URL(event.request.url);
  
  // Saltar caché para ciertas rutas
  if (SKIP_CACHE.some(skip => event.request.url.includes(skip))) {
    return fetch(event.request);
  }

  // Estrategia diferente según el tipo de recurso
  if (event.request.destination === 'document') {
    // HTML: Network First con fallback
    event.respondWith(networkFirstStrategy(event.request));
  } else if (event.request.destination === 'image') {
    // Imágenes: Cache First
    event.respondWith(cacheFirstStrategy(event.request));
  } else if (event.request.url.includes('fonts.googleapis.com') || 
             event.request.url.includes('fonts.gstatic.com')) {
    // Google Fonts: Cache First con larga duración
    event.respondWith(cacheFirstStrategy(event.request, CACHE_STATIC));
  } else {
    // CSS, JS, otros: Cache First con fallback a network
    event.respondWith(cacheFirstStrategy(event.request));
  }
});

// Estrategia Cache First - Primero caché, luego red
async function cacheFirstStrategy(request, cacheName = CACHE_DYNAMIC) {
  try {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      console.log('[SW] Serving from cache:', request.url);
      return cachedResponse;
    }
    
    console.log('[SW] Fetching from network:', request.url);
    const networkResponse = await fetch(request);
    
    // Cachear solo respuestas exitosas
    if (networkResponse.ok && request.method === 'GET') {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('[SW] Cache First failed:', error);
    
    // Fallback para páginas HTML
    if (request.destination === 'document') {
      const cache = await caches.open(CACHE_STATIC);
      return cache.match('/index.html');
    }
    
    throw error;
  }
}

// Estrategia Network First - Primero red, luego caché
async function networkFirstStrategy(request) {
  try {
    console.log('[SW] Network First for:', request.url);
    const networkResponse = await fetch(request);
    
    // Cachear respuestas exitosas
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_DYNAMIC);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', request.url);
    
    const cache = await caches.open(CACHE_DYNAMIC);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Fallback para documentos HTML
    if (request.destination === 'document') {
      const staticCache = await caches.open(CACHE_STATIC);
      const fallback = await staticCache.match('/index.html');
      if (fallback) return fallback;
    }
    
    throw error;
  }
}

// Listener para mensajes desde el cliente (para actualizaciones)
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('[SW] Skipping waiting...');
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_CACHE_INFO') {
    caches.keys().then(cacheNames => {
      event.ports[0].postMessage({
        caches: cacheNames,
        version: CACHE_NAME
      });
    });
  }
});

// Sync en segundo plano (para cuando vuelva la conexión)
self.addEventListener('sync', event => {
  console.log('[SW] Background sync triggered:', event.tag);
  
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm());
  }
});

// Función para sincronizar formularios de contacto offline
async function syncContactForm() {
  try {
    // Aquí podrías implementar lógica para enviar formularios pendientes
    console.log('[SW] Syncing contact forms...');
    
    // Ejemplo: recuperar datos del IndexedDB y enviarlos
    // const pendingForms = await getStoredForms();
    // await Promise.all(pendingForms.map(form => submitForm(form)));
    
  } catch (error) {
    console.error('[SW] Error syncing contact forms:', error);
  }
}

// Notificaciones push (preparado para futuro)
self.addEventListener('push', event => {
  console.log('[SW] Push received');
  
  const options = {
    body: event.data ? event.data.text() : 'Nueva actualización disponible',
    icon: '/img/favicon-daclimatech.png',
    badge: '/img/favicon-daclimatech.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Ver más',
        icon: '/img/favicon-daclimatech.png'
      },
      {
        action: 'close',
        title: 'Cerrar',
        icon: '/img/favicon-daclimatech.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('DAClimaTECH', options)
  );
});

// Manejo de clicks en notificaciones
self.addEventListener('notificationclick', event => {
  console.log('[SW] Notification click received.');
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('https://daclimatech.com')
    );
  }
});

console.log('[SW] Service Worker script loaded successfully');