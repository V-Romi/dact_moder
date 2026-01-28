// sw-register.js - Registro y gestión del Service Worker para DAClimaTECH
// Versión: 1.0

(function() {
    'use strict';

    // Configuración
    const SW_CONFIG = {
        swPath: '/service-worker.js',
        scope: '/',
        checkInterval: null, // Desactivar verificación automática
        showNotifications: true,
        enableAutoUpdate: true
    };

    // Estado del Service Worker
    let swRegistration = null;
    let isOnline = navigator.onLine;
    let updateAvailable = false;

    // Prevenir verificaciones excesivas con throttling
    let lastUpdateCheck = 0;
    const MIN_UPDATE_INTERVAL = 300000; // 5 minutos mínimo entre verificaciones

    // Inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initServiceWorker);
    } else {
        initServiceWorker();
    }

    // Función principal de inicialización
    async function initServiceWorker() {
        // Verificar soporte para Service Workers
        if (!('serviceWorker' in navigator)) {
            console.warn('[SW Register] Service Workers no soportados en este navegador');
            return;
        }

        try {
            console.log('[SW Register] Iniciando registro del Service Worker...');
            
            // Registrar el Service Worker
            swRegistration = await navigator.serviceWorker.register(SW_CONFIG.swPath, {
                scope: SW_CONFIG.scope
            });

            console.log('[SW Register] Service Worker registrado exitosamente:', swRegistration.scope);

            // Configurar event listeners
            setupServiceWorkerListeners();
            setupNetworkListeners();
            setupUpdateChecking();

            // Mostrar estado inicial
            updateUIBasedOnSWState();

            // Verificar si hay actualizaciones pendientes
            if (swRegistration.waiting) {
                showUpdateNotification();
            }

        } catch (error) {
            console.error('[SW Register] Error registrando Service Worker:', error);
            showOfflineMessage('Error al configurar funcionalidad offline');
        }
    }

    // Configurar listeners del Service Worker
    function setupServiceWorkerListeners() {
        // Service Worker instalándose
        swRegistration.addEventListener('updatefound', () => {
            console.log('[SW Register] Nueva versión del Service Worker encontrada');
            
            const newWorker = swRegistration.installing;
            newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    console.log('[SW Register] Nueva versión instalada, esperando activación');
                    updateAvailable = true;
                    
                    if (SW_CONFIG.showNotifications) {
                        showUpdateNotification();
                    }
                }
            });
        });

        // Escuchar mensajes del Service Worker
        navigator.serviceWorker.addEventListener('message', event => {
            console.log('[SW Register] Mensaje del Service Worker:', event.data);
            
            if (event.data && event.data.type === 'SW_UPDATED') {
                showSuccessMessage('Aplicación actualizada correctamente');
                updateUIBasedOnSWState();
            }
        });

        // Service Worker controlando la página
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            console.log('[SW Register] Nuevo Service Worker tomando control');
            
            if (SW_CONFIG.enableAutoUpdate) {
                window.location.reload();
            } else {
                showSuccessMessage('Nueva versión activada');
            }
        });
    }

    // Configurar listeners de red
    function setupNetworkListeners() {
        window.addEventListener('online', () => {
            console.log('[SW Register] Conexión restaurada');
            isOnline = true;
            showSuccessMessage('Conexión restaurada');
            updateUIBasedOnNetworkState();
            syncPendingActions();
        });

        window.addEventListener('offline', () => {
            console.log('[SW Register] Conexión perdida');
            isOnline = false;
            showOfflineMessage('Sin conexión - Funcionando offline');
            updateUIBasedOnNetworkState();
        });
    }

    // Configurar verificación periódica de actualizaciones CON THROTTLING
    function setupUpdateChecking() {
        // Solo verificar si el intervalo está configurado
        if (!SW_CONFIG.checkInterval || SW_CONFIG.checkInterval === null) {
            console.log('[SW Register] Verificación automática desactivada');
            return;
        }
    
        // Verificar solo cuando la pestaña está visible CON throttling
        setInterval(async () => {
            const now = Date.now();
        
            // Solo verificar si ha pasado el tiempo mínimo Y la pestaña está visible
            if (swRegistration && 
                !document.hidden && 
                (now - lastUpdateCheck) >= MIN_UPDATE_INTERVAL) {
                
                try {
                    console.log('[SW Register] Verificando actualizaciones...');
                    lastUpdateCheck = now;
                    await swRegistration.update();
                } catch (error) {
                    console.error('[SW Register] Error verificando actualizaciones:', error);
                }
            }
        }, SW_CONFIG.checkInterval);
    }

    // Mostrar notificación de actualización
    function showUpdateNotification() {
        const notification = createNotification(
            'Nueva versión disponible',
            '¡Hay una nueva versión de la aplicación disponible!',
            'info',
            [
                {
                    text: 'Actualizar ahora',
                    action: () => activateUpdate(),
                    primary: true
                },
                {
                    text: 'Más tarde',
                    action: () => dismissNotification(),
                    primary: false
                }
            ]
        );

        showNotification(notification);
    }

    // Activar actualización
    async function activateUpdate() {
        if (!swRegistration || !swRegistration.waiting) {
            console.warn('[SW Register] No hay actualización pendiente');
            return;
        }

        try {
            swRegistration.waiting.postMessage({ type: 'SKIP_WAITING' });
            
            showLoadingMessage('Actualizando aplicación...');
            
            // Dar tiempo para que el SW procese el mensaje
            setTimeout(() => {
                window.location.reload();
            }, 1000);

        } catch (error) {
            console.error('[SW Register] Error activando actualización:', error);
            showErrorMessage('Error al actualizar. Recarga la página manualmente.');
        }
    }

    // Sincronizar acciones pendientes cuando vuelva la conexión
    async function syncPendingActions() {
        if ('serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype) {
            try {
                await swRegistration.sync.register('contact-form');
                console.log('[SW Register] Sincronización de fondo programada');
            } catch (error) {
                console.error('[SW Register] Error programando sincronización:', error);
            }
        }
    }

    // Actualizar UI basada en el estado del Service Worker
    function updateUIBasedOnSWState() {
        const body = document.body;
        
        if (navigator.serviceWorker.controller) {
            body.classList.add('sw-active');
            console.log('[SW Register] Service Worker activo - Funcionalidad offline habilitada');
        } else {
            body.classList.remove('sw-active');
        }
    }

    // Actualizar UI basada en el estado de la red
    function updateUIBasedOnNetworkState() {
        const body = document.body;
        
        if (isOnline) {
            body.classList.remove('offline');
            body.classList.add('online');
        } else {
            body.classList.add('offline');
            body.classList.remove('online');
        }
    }

    // Crear notificación personalizada
    function createNotification(title, message, type = 'info', actions = []) {
        return {
            id: 'sw-notification-' + Date.now(),
            title: title,
            message: message,
            type: type,
            actions: actions,
            timestamp: new Date().toLocaleTimeString()
        };
    }

    // Mostrar notificación
    function showNotification(notification) {
        // Remover notificaciones existentes
        removeExistingNotifications();

        const notificationEl = document.createElement('div');
        notificationEl.id = notification.id;
        notificationEl.className = `sw-notification sw-notification--${notification.type}`;
        
        notificationEl.innerHTML = `
            <div class="sw-notification__content">
                <div class="sw-notification__icon">
                    ${getIconForType(notification.type)}
                </div>
                <div class="sw-notification__text">
                    <div class="sw-notification__title">${notification.title}</div>
                    <div class="sw-notification__message">${notification.message}</div>
                </div>
                <button class="sw-notification__close" aria-label="Cerrar notificación">&times;</button>
            </div>
            ${notification.actions.length > 0 ? `
                <div class="sw-notification__actions">
                    ${notification.actions.map(action => `
                        <button class="sw-notification__action ${action.primary ? 'sw-notification__action--primary' : ''}">
                            ${action.text}
                        </button>
                    `).join('')}
                </div>
            ` : ''}
        `;

        // Event listeners para acciones
        const closeBtn = notificationEl.querySelector('.sw-notification__close');
        closeBtn.addEventListener('click', () => removeNotification(notificationEl));

        const actionButtons = notificationEl.querySelectorAll('.sw-notification__action');
        actionButtons.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                notification.actions[index].action();
                removeNotification(notificationEl);
            });
        });

        // Añadir estilos si no existen
        addNotificationStyles();

        // Mostrar notificación
        document.body.appendChild(notificationEl);

        // Auto-remover después de 10 segundos (excepto actualizaciones)
        if (notification.type !== 'info') {
            setTimeout(() => removeNotification(notificationEl), 10000);
        }
    }

    // Obtener icono según el tipo
    function getIconForType(type) {
        const icons = {
            info: 'ℹ️',
            success: '✅',
            warning: '⚠️',
            error: '❌',
            offline: '📱'
        };
        return icons[type] || icons.info;
    }

    // Remover notificaciones existentes
    function removeExistingNotifications() {
        const existing = document.querySelectorAll('.sw-notification');
        existing.forEach(notification => removeNotification(notification));
    }

    // Remover notificación específica
    function removeNotification(element) {
        if (element && element.parentNode) {
            element.classList.add('sw-notification--removing');
            setTimeout(() => {
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
            }, 300);
        }
    }

    // Funciones de conveniencia para diferentes tipos de mensajes
    function showSuccessMessage(message) {
        showNotification(createNotification('Éxito', message, 'success'));
    }

    function showErrorMessage(message) {
        showNotification(createNotification('Error', message, 'error'));
    }

    function showOfflineMessage(message) {
        showNotification(createNotification('Sin conexión', message, 'offline'));
    }

    function showLoadingMessage(message) {
        showNotification(createNotification('Cargando', message, 'info'));
    }

    function dismissNotification() {
        removeExistingNotifications();
    }

    // Añadir estilos para notificaciones
    function addNotificationStyles() {
        if (document.getElementById('sw-notification-styles')) return;

        const styles = document.createElement('style');
        styles.id = 'sw-notification-styles';
        styles.textContent = `
            .sw-notification {
                position: fixed;
                top: 20px;
                right: 20px;
                max-width: 400px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
                border-left: 4px solid #005C98;
                z-index: 10000;
                animation: slideInRight 0.3s ease;
                font-family: 'Inter', sans-serif;
            }

            .sw-notification--success {
                border-left-color: #4CAF50;
            }

            .sw-notification--warning {
                border-left-color: #FF9800;
            }

            .sw-notification--error {
                border-left-color: #F44336;
            }

            .sw-notification--offline {
                border-left-color: #9E9E9E;
            }

            .sw-notification__content {
                display: flex;
                align-items: flex-start;
                padding: 16px;
                gap: 12px;
            }

            .sw-notification__icon {
                font-size: 20px;
                flex-shrink: 0;
                margin-top: 2px;
            }

            .sw-notification__text {
                flex: 1;
            }

            .sw-notification__title {
                font-weight: 600;
                font-size: 14px;
                color: #2d3748;
                margin-bottom: 4px;
            }

            .sw-notification__message {
                font-size: 13px;
                color: #4a5568;
                line-height: 1.4;
            }

            .sw-notification__close {
                background: none;
                border: none;
                font-size: 18px;
                color: #a0aec0;
                cursor: pointer;
                padding: 0;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
            }

            .sw-notification__close:hover {
                color: #2d3748;
            }

            .sw-notification__actions {
                padding: 0 16px 16px;
                display: flex;
                gap: 8px;
                justify-content: flex-end;
            }

            .sw-notification__action {
                padding: 8px 16px;
                border: 1px solid #e2e8f0;
                background: white;
                border-radius: 6px;
                font-size: 13px;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.2s ease;
            }

            .sw-notification__action:hover {
                background: #f7fafc;
            }

            .sw-notification__action--primary {
                background: #005C98;
                color: white;
                border-color: #005C98;
            }

            .sw-notification__action--primary:hover {
                background: #004a7c;
            }

            .sw-notification--removing {
                animation: slideOutRight 0.3s ease forwards;
            }

            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }

            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }

            @media (max-width: 768px) {
                .sw-notification {
                    top: 10px;
                    right: 10px;
                    left: 10px;
                    max-width: none;
                }
            }

            /* Indicadores de estado en la página */
            .offline-indicator {
                position: fixed;
                bottom: 20px;
                left: 20px;
                background: #9E9E9E;
                color: white;
                padding: 8px 16px;
                border-radius: 20px;
                font-size: 12px;
                z-index: 9999;
                display: none;
            }

            body.offline .offline-indicator {
                display: block;
            }

            body.sw-active::after {
                content: "🔒 Funcionalidad offline activa";
                position: fixed;
                bottom: 60px;
                left: 20px;
                background: rgba(76, 175, 80, 0.9);
                color: white;
                padding: 4px 12px;
                border-radius: 12px;
                font-size: 11px;
                z-index: 9998;
                opacity: 0;
                animation: fadeInOut 3s ease;
            }

            @keyframes fadeInOut {
                0%, 100% { opacity: 0; transform: translateY(10px); }
                20%, 80% { opacity: 1; transform: translateY(0); }
            }
        `;

        document.head.appendChild(styles);

        // Añadir indicador offline al body
        const offlineIndicator = document.createElement('div');
        offlineIndicator.className = 'offline-indicator';
        offlineIndicator.textContent = '📱 Modo offline';
        document.body.appendChild(offlineIndicator);
    }

    // API pública para interactuar con el Service Worker
    window.DAClimaTechSW = {
        // Información del estado
        isOnline: () => isOnline,
        isServiceWorkerActive: () => !!navigator.serviceWorker.controller,
        hasUpdateAvailable: () => updateAvailable,

        // Acciones
        checkForUpdates: async () => {
            if (swRegistration) {
                await swRegistration.update();
            }
        },

        activateUpdate: activateUpdate,

        // Obtener información del caché
        getCacheInfo: async () => {
            if (!navigator.serviceWorker.controller) return null;

            return new Promise((resolve) => {
                const messageChannel = new MessageChannel();
                messageChannel.port1.onmessage = (event) => {
                    resolve(event.data);
                };

                navigator.serviceWorker.controller.postMessage(
                    { type: 'GET_CACHE_INFO' },
                    [messageChannel.port2]
                );
            });
        },

        // Limpiar caché (para desarrollo)
        clearCache: async () => {
            if ('caches' in window) {
                const cacheNames = await caches.keys();
                await Promise.all(
                    cacheNames.map(name => caches.delete(name))
                );
                console.log('[SW Register] Caché limpiado');
                return true;
            }
            return false;
        }
    };

    console.log('[SW Register] Script de registro del Service Worker cargado');

})();