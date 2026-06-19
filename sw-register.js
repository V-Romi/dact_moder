// sw-register.js - Desregistrar Service Worker
// El caché HTTP del servidor maneja la performance correctamente

(function() {
    'use strict';
    
    if ('serviceWorker' in navigator) {
        // Desregistrar todos los SW existentes
        navigator.serviceWorker.getRegistrations().then(function(registrations) {
            registrations.forEach(function(registration) {
                registration.unregister();
                console.log('[SW] Service Worker desregistrado');
            });
        });
        
        // Limpiar todos los cachés del SW
        if ('caches' in window) {
            caches.keys().then(function(keys) {
                keys.forEach(function(key) {
                    caches.delete(key);
                    console.log('[SW] Caché eliminado:', key);
                });
            });
        }
    }
})();