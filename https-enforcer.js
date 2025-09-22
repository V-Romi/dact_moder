// https-enforcer.js - Sistema de aplicación HTTPS para DAClimaTECH
// Versión: 1.0

(function() {
    'use strict';

    // Configuración del enforcement HTTPS
    const HTTPS_CONFIG = {
        enabled: true,
        forceRedirect: false,
        showWarnings: false,
        excludeLocalhost: true,
        allowedInsecureHosts: ['localhost', '127.0.0.1', '192.168.', '10.0.', '172.16.'],
        strictMode: false, // Bloquea contenido mixto agresivamente
        upgradeInsecureRequests: true
    };

    // Verificar si estamos en un entorno que necesita HTTPS
    function needsHTTPS() {
        const protocol = window.location.protocol;
        const hostname = window.location.hostname;
        
        // Si ya estamos en HTTPS, no hacer nada
        if (protocol === 'https:') {
            return false;
        }

        // Excluir localhost si está configurado
        if (HTTPS_CONFIG.excludeLocalhost) {
            for (let host of HTTPS_CONFIG.allowedInsecureHosts) {
                if (hostname.includes(host)) {
                    return false;
                }
            }
        }

        return HTTPS_CONFIG.enabled;
    }

    // Redirigir a HTTPS inmediatamente
    function enforceHTTPS() {
        if (!needsHTTPS()) return;

        if (HTTPS_CONFIG.forceRedirect) {
            const httpsUrl = window.location.href.replace(/^http:/, 'https:');
            
            console.log('[HTTPS Enforcer] Redirecting to HTTPS:', httpsUrl);
            
            // Redirección inmediata para SEO y seguridad
            if (window.location.replace) {
                window.location.replace(httpsUrl);
            } else {
                window.location.href = httpsUrl;
            }
        }
    }

    // Verificar y corregir recursos inseguros
    function upgradeInsecureResources() {
        if (window.location.protocol !== 'https:') return;

        // Actualizar imágenes HTTP a HTTPS
        const images = document.querySelectorAll('img[src^="http://"]');
        images.forEach(img => {
            const httpsUrl = img.src.replace(/^http:/, 'https:');
            img.src = httpsUrl;
            console.log('[HTTPS Enforcer] Upgraded image to HTTPS:', httpsUrl);
        });

        // Actualizar enlaces HTTP a HTTPS (solo dominio propio)
        const links = document.querySelectorAll('a[href^="http://"]');
        links.forEach(link => {
            const url = new URL(link.href);
            if (url.hostname === window.location.hostname) {
                const httpsUrl = link.href.replace(/^http:/, 'https:');
                link.href = httpsUrl;
                console.log('[HTTPS Enforcer] Upgraded link to HTTPS:', httpsUrl);
            }
        });

        // Verificar scripts y estilos externos
        checkExternalResources();
    }

    // Verificar recursos externos para problemas de contenido mixto
    function checkExternalResources() {
        const externalResources = document.querySelectorAll(
            'script[src^="http://"], link[href^="http://"], iframe[src^="http://"]'
        );

        externalResources.forEach(resource => {
            const url = resource.src || resource.href;
            console.warn('[HTTPS Enforcer] Insecure external resource detected:', url);
            
            if (HTTPS_CONFIG.showWarnings) {
                showSecurityWarning(`Recurso inseguro detectado: ${url}`);
            }
        });
    }

    // Interceptar requests AJAX para forzar HTTPS
    function interceptAjaxRequests() {
        if (window.location.protocol !== 'https:') return;

        // Interceptar XMLHttpRequest
        const originalXHROpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function(method, url, ...args) {
            if (typeof url === 'string' && url.startsWith('http://')) {
                const httpsUrl = url.replace(/^http:/, 'https:');
                console.log('[HTTPS Enforcer] Upgraded AJAX request to HTTPS:', httpsUrl);
                url = httpsUrl;
            }
            return originalXHROpen.call(this, method, url, ...args);
        };

        // Interceptar fetch API
        if (window.fetch) {
            const originalFetch = window.fetch;
            window.fetch = function(resource, options) {
                if (typeof resource === 'string' && resource.startsWith('http://')) {
                    resource = resource.replace(/^http:/, 'https:');
                    console.log('[HTTPS Enforcer] Upgraded fetch request to HTTPS:', resource);
                }
                return originalFetch.call(this, resource, options);
            };
        }
    }

    // Verificar estado de seguridad de la conexión
    function checkSecurityState() {
        if (window.location.protocol !== 'https:') {
            if (HTTPS_CONFIG.showWarnings) {
                showSecurityWarning('Esta página no está utilizando una conexión segura (HTTPS)');
            }
            return false;
        }

        // Verificar si hay contenido mixto
        checkMixedContent();
        return true;
    }

    // Detectar contenido mixto
    function checkMixedContent() {
        const insecureResources = document.querySelectorAll(
            '[src^="http://"], [href^="http://"]'
        );

        if (insecureResources.length > 0) {
            console.warn('[HTTPS Enforcer] Mixed content detected:', insecureResources.length, 'resources');
            
            if (HTTPS_CONFIG.strictMode) {
                Array.from(insecureResources).forEach(resource => {
                    const url = resource.src || resource.href;
                    if (url && url.startsWith('http://')) {
                        console.warn('[HTTPS Enforcer] Blocking insecure resource:', url);
                        resource.remove();
                    }
                });
            }
        }
    }

    // Mostrar advertencia de seguridad
    function showSecurityWarning(message) {
        // Evitar crear múltiples advertencias
        if (document.getElementById('https-warning')) return;

        const warning = document.createElement('div');
        warning.id = 'https-warning';
        warning.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                background: #ff6b6b;
                color: white;
                padding: 10px;
                text-align: center;
                font-family: 'Inter', Arial, sans-serif;
                font-size: 14px;
                z-index: 10000;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            ">
                <span>🔓 ${message}</span>
                <button onclick="this.parentElement.parentElement.remove()" style="
                    background: none;
                    border: none;
                    color: white;
                    font-size: 18px;
                    margin-left: 15px;
                    cursor: pointer;
                ">×</button>
            </div>
        `;

        document.body.appendChild(warning);

        // Auto-remover después de 10 segundos
        setTimeout(() => {
            if (warning.parentNode) {
                warning.parentNode.removeChild(warning);
            }
        }, 10000);
    }

    // Configurar Service Worker para HTTPS
    function configureServiceWorkerHTTPS() {
        if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
            // Verificar que el Service Worker también esté siendo servido por HTTPS
            navigator.serviceWorker.getRegistrations().then(registrations => {
                registrations.forEach(registration => {
                    if (registration.scope.startsWith('http://')) {
                        console.warn('[HTTPS Enforcer] Service Worker registered with HTTP scope:', registration.scope);
                        registration.unregister();
                    }
                });
            });
        }
    }

    // Implementar Strict Transport Security via JavaScript (respaldo)
    function implementHSTS() {
        if (window.location.protocol === 'https:') {
            // Crear meta tag para HSTS si no existe
            if (!document.querySelector('meta[http-equiv="Strict-Transport-Security"]')) {
                const hsts = document.createElement('meta');
                hsts.setAttribute('http-equiv', 'Strict-Transport-Security');
                hsts.setAttribute('content', 'max-age=31536000; includeSubDomains; preload');
                document.head.appendChild(hsts);
                console.log('[HTTPS Enforcer] HSTS meta tag added');
            }
        }
    }

    // Verificar certificado SSL (información básica)
    function checkSSLInfo() {
        if (window.location.protocol === 'https:') {
            // Intentar obtener información del certificado
            if (navigator.serviceWorker && navigator.serviceWorker.controller) {
                // El Service Worker puede ayudar a verificar la validez del certificado
                console.log('[HTTPS Enforcer] HTTPS connection verified');
            }

            // Verificar si hay advertencias de certificado
            if (document.referrer && document.referrer.startsWith('http://')) {
                console.log('[HTTPS Enforcer] User upgraded from HTTP to HTTPS');
            }
        }
    }

    // Actualizar formularios para usar HTTPS
    function secureForms() {
        const forms = document.querySelectorAll('form[action^="http://"]');
        forms.forEach(form => {
            const action = form.getAttribute('action');
            if (action && action.startsWith('http://')) {
                const httpsAction = action.replace(/^http:/, 'https:');
                form.setAttribute('action', httpsAction);
                console.log('[HTTPS Enforcer] Upgraded form action to HTTPS:', httpsAction);
            }
        });
    }

    // Monitorear cambios en el DOM para nuevos recursos inseguros
    function monitorDOMChanges() {
        if (!('MutationObserver' in window)) return;

        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1) { // Element node
                        // Verificar el nuevo elemento
                        if (node.src && node.src.startsWith('http://')) {
                            const httpsUrl = node.src.replace(/^http:/, 'https:');
                            node.src = httpsUrl;
                            console.log('[HTTPS Enforcer] Auto-upgraded new resource to HTTPS:', httpsUrl);
                        }

                        // Verificar elementos hijos
                        const insecureChildren = node.querySelectorAll && 
                                               node.querySelectorAll('[src^="http://"], [href^="http://"]');
                        if (insecureChildren) {
                            Array.from(insecureChildren).forEach(child => {
                                const url = child.src || child.href;
                                if (url && url.startsWith('http://')) {
                                    const httpsUrl = url.replace(/^http:/, 'https:');
                                    if (child.src) child.src = httpsUrl;
                                    if (child.href) child.href = httpsUrl;
                                    console.log('[HTTPS Enforcer] Auto-upgraded child resource to HTTPS:', httpsUrl);
                                }
                            });
                        }
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Función principal de inicialización
    function initHTTPSEnforcement() {
        console.log('[HTTPS Enforcer] Initializing HTTPS enforcement...');

        // 1. Redirigir a HTTPS inmediatamente si es necesario
        // enforceHTTPS(); //

        // 2. Si estamos en HTTPS, configurar el resto
        if (window.location.protocol === 'https:') {
            upgradeInsecureResources();
            interceptAjaxRequests();
            checkSecurityState();
            configureServiceWorkerHTTPS();
            implementHSTS();
            checkSSLInfo();
            secureForms();
            monitorDOMChanges();
        }

        console.log('[HTTPS Enforcer] HTTPS enforcement initialized successfully');
    }

    // API pública para interactuar con el enforcer
    window.DAClimaTechHTTPS = {
        config: HTTPS_CONFIG,
        isSecure: () => window.location.protocol === 'https:',
        forceHTTPS: () => enforceHTTPS(),
        checkSecurity: () => checkSecurityState(),
        upgradeResources: () => upgradeInsecureResources(),
        
        // Configuración dinámica
        setConfig: (newConfig) => {
            Object.assign(HTTPS_CONFIG, newConfig);
            console.log('[HTTPS Enforcer] Configuration updated:', HTTPS_CONFIG);
        },
        
        // Información de estado
        getStatus: () => ({
            protocol: window.location.protocol,
            isSecure: window.location.protocol === 'https:',
            hasInsecureResources: document.querySelectorAll('[src^="http://"], [href^="http://"]').length > 0,
            config: HTTPS_CONFIG
        })
    };

    // Ejecutar enforcement inmediatamente (crítico para redirecciones)
    if (document.readyState === 'loading') {
        // Si aún se está cargando, aplicar enforcement inmediatamente
        // enforceHTTPS(); //
        document.addEventListener('DOMContentLoaded', () => setTimeout(initHTTPSEnforcement, 50));
    } else {
        // Si ya está cargado, inicializar todo inmediatamente
        setTimeout(initHTTPSEnforcement, 50);  // Con delay
    }

    // También ejecutar en window.load como respaldo
    window.addEventListener('load', () => {
        if (window.location.protocol === 'https:') {
            upgradeInsecureResources();
            // checkSecurityState(); // comentado para mejor performance
        }
    });

    console.log('[HTTPS Enforcer] Script loaded successfully');

})();