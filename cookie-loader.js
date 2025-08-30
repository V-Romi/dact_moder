// cookie-loader.js - Sistema de cookies simplificado y funcional
// Versión: 3.0 - Corregida

class CookieBannerLoader {
    constructor() {
        this.consentKey = 'daclimatech_cookie_consent';
        this.bannerShown = false;
        
        // Inicializar inmediatamente
        this.initBanner();
    }

    initBanner() {
        // Verificar si ya existe consentimiento
        if (this.hasExistingConsent()) {
            console.log('🍪 Cookie consent exists, applying settings');
            this.applyCookieSettings();
            return;
        }

        // Mostrar banner después de un breve delay
        setTimeout(() => {
            this.createAndShowBanner();
        }, 1000);
    }

    hasExistingConsent() {
        const consent = localStorage.getItem(this.consentKey);
        return consent && consent !== 'null' && consent !== 'undefined';
    }

    createAndShowBanner() {
        if (this.bannerShown || document.getElementById('cookieBanner')) {
            return;
        }

        const banner = document.createElement('div');
        banner.id = 'cookieBanner';
        banner.className = 'cookie-banner-new';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-labelledby', 'cookie-title');
        banner.innerHTML = this.getBannerHTML();

        document.body.appendChild(banner);
        this.bannerShown = true;

        // Mostrar con animación
        setTimeout(() => {
            banner.classList.add('show');
        }, 100);

        // Auto-hide después de 30 segundos (opcional)
        setTimeout(() => {
            if (banner && banner.style.display !== 'none') {
                this.hideBanner();
            }
        }, 30000);

        console.log('🍪 Cookie banner created and shown');
    }

    getBannerHTML() {
        return `
            <div class="cookie-header">
                <div class="cookie-icon-main">
                    <span>🍪</span> Gestión de Cookies
                </div>
                <div class="cookie-subtitle">
                    Personaliza tu experiencia de navegación
                </div>
                <button onclick="window.cookieBanner.hideBanner()" class="cookie-close-new" aria-label="Cerrar">×</button>
            </div>
            <div class="cookie-body">
                <div class="cookie-text">
                    Utilizamos cookies para mejorar nuestros servicios y mostrarle contenido personalizado.
                </div>
                <div class="cookie-links-new">
                    <a href="politica-de-cookies.html" target="_blank" class="cookie-link-new">Política de Cookies</a>
                    <a href="politica-privacidad.html" target="_blank" class="cookie-link-new">Más información</a>
                </div>
                <div class="cookie-actions-new">
                    <button onclick="window.cookieBanner.rejectCookies()" class="cookie-btn-new cookie-btn-reject-new">
                        Rechazar
                    </button>
                    <button onclick="window.cookieBanner.acceptCookies()" class="cookie-btn-new cookie-btn-accept-new">
                        Aceptar
                    </button>
                </div>
            </div>
        `;
    }

    acceptCookies() {
    const consentData = {
        technical: true,
        analytical: true,
        functional: true,
        consentGiven: true,
        timestamp: new Date().toISOString()
        };
    
        this.saveConsent(consentData);
        this.applyCookieSettings();
        this.hideBanner();
        this.showNotification('✅ Cookies aceptadas correctamente');
        
        // Activar Analytics inmediatamente
        if (typeof gtag !== 'undefined') {
            gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
        }
    }

    rejectCookies() {
        const consentData = {
            technical: true,
            analytical: false,
            functional: false,
            consentGiven: true,
            timestamp: new Date().toISOString()
        };
        
        this.saveConsent(consentData);
        this.applyCookieSettings();
        this.hideBanner();
        this.showNotification('ℹ️ Solo cookies técnicas activadas');
    }

    hideBanner() {
        const banner = document.getElementById('cookieBanner');
        if (banner) {
            banner.classList.remove('show');
            setTimeout(() => {
                banner.remove();
            }, 300);
        }
    }

    saveConsent(consentData) {
        localStorage.setItem(this.consentKey, JSON.stringify(consentData));
        
        // Disparar evento personalizado
        const event = new CustomEvent('cookieConsentUpdated', {
            detail: consentData
        });
        document.dispatchEvent(event);
    }

    applyCookieSettings() {
        const consent = this.getConsentStatus();
        if (!consent) return;

        if (consent.analytical) {
            this.enableAnalytics();
        }

        if (consent.functional) {
            this.enableFunctional();
        }
    }

    enableAnalytics() {
    const consent = this.getConsentStatus();
    if (consent && consent.analytical) {
        // Activar Google Analytics solo si hay consentimiento
        if (typeof gtag !== 'undefined') {
            gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
        }
        console.log('📊 Analytics enabled');
    }
}

    enableFunctional() {
        // Aquí activar cookies funcionales
        console.log('🔧 Functional cookies enabled');
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'cookie-notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4CAF50;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            z-index: 10001;
            font-size: 0.9rem;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;

        document.body.appendChild(notification);
        
        setTimeout(() => notification.style.transform = 'translateX(0)', 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // API pública
    getConsentStatus() {
        const consent = localStorage.getItem(this.consentKey);
        return consent ? JSON.parse(consent) : null;
    }

    hasConsent(type = 'analytical') {
        const consent = this.getConsentStatus();
        return consent ? consent[type] || false : false;
    }

    resetConsent() {
        localStorage.removeItem(this.consentKey);
        location.reload();
    }
}

// CSS integrado para el banner
function addBannerStyles() {
    if (document.getElementById('cookie-banner-styles')) return;

    const style = document.createElement('style');
    style.id = 'cookie-banner-styles';
    style.textContent = `
        .cookie-banner-new {
            position: fixed;
            bottom: 20px;
            right: 20px;
            max-width: 420px;
            background: white;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0, 92, 152, 0.15);
            border: 1px solid rgba(0, 92, 152, 0.1);
            z-index: 10000;
            overflow: hidden;
            transform: translateY(100%);
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .cookie-banner-new.show {
            transform: translateY(0);
        }

        .cookie-header {
            background: linear-gradient(135deg, #005C98 0%, #00A4E4 100%);
            padding: 20px 20px 16px 20px;
            position: relative;
            color: white;
        }

        .cookie-header::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #4CAF50, #45a049);
        }

        .cookie-icon-main {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 1.1rem;
            font-weight: 700;
            margin-bottom: 8px;
        }

        .cookie-subtitle {
            font-size: 0.85rem;
            opacity: 0.9;
            line-height: 1.4;
        }

        .cookie-close-new {
            position: absolute;
            top: 12px;
            right: 12px;
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .cookie-close-new:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: rotate(90deg);
        }

        .cookie-body {
            padding: 24px;
        }

        .cookie-text {
            color: #4a5568;
            font-size: 0.9rem;
            line-height: 1.5;
            margin-bottom: 20px;
        }

        .cookie-links-new {
            display: flex;
            gap: 16px;
            margin-bottom: 24px;
            flex-wrap: wrap;
        }

        .cookie-link-new {
            color: #005C98;
            text-decoration: none;
            font-size: 0.85rem;
            font-weight: 600;
            padding: 4px 8px;
            border-radius: 6px;
            transition: all 0.3s ease;
            border: 1px solid transparent;
        }

        .cookie-link-new:hover {
            background: rgba(0, 92, 152, 0.08);
            border-color: rgba(0, 92, 152, 0.2);
        }

        .cookie-actions-new {
            display: flex;
            gap: 10px;
        }

        .cookie-btn-new {
            flex: 1;
            padding: 12px 16px;
            border: none;
            border-radius: 12px;
            font-weight: 600;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }

        .cookie-btn-reject-new {
            background: #f7fafc;
            color: #4a5568;
            border: 2px solid #e2e8f0;
        }

        .cookie-btn-reject-new:hover {
            background: #edf2f7;
            border-color: #cbd5e0;
            transform: translateY(-1px);
        }

        .cookie-btn-accept-new {
            background: linear-gradient(135deg, #4CAF50, #45a049);
            color: white;
            box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
        }

        .cookie-btn-accept-new:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(76, 175, 80, 0.4);
        }

        .cookie-btn-accept-new::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.6s;
        }

        .cookie-btn-accept-new:hover::before {
            left: 100%;
        }

        /* Focus states for accessibility */
        .cookie-close-new:focus,
        .cookie-btn-new:focus,
        .cookie-link-new:focus {
            outline: 2px solid #4CAF50;
            outline-offset: 2px;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .cookie-banner-new {
                bottom: 0;
                right: 0;
                left: 0;
                max-width: none;
                border-radius: 20px 20px 0 0;
            }

            .cookie-actions-new {
                flex-direction: column;
            }

            .cookie-links-new {
                justify-content: center;
            }

            .cookie-header {
                padding: 16px 16px 12px 16px;
            }

            .cookie-body {
                padding: 20px;
            }
        }

        @media (max-width: 480px) {
            .cookie-icon-main {
                font-size: 1rem;
            }

            .cookie-subtitle {
                font-size: 0.8rem;
            }

            .cookie-text {
                font-size: 0.85rem;
            }

            .cookie-btn-new {
                padding: 14px 16px;
                font-size: 0.9rem;
            }
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
            .cookie-banner-new {
                transition: opacity 0.3s ease;
            }
            
            .cookie-close-new:hover {
                transform: none;
            }
            
            .cookie-btn-new:hover {
                transform: none;
            }
            
            .cookie-btn-accept-new::before {
                display: none;
            }
        }
    `;

    document.head.appendChild(style);
}

// Inicialización automática
document.addEventListener('DOMContentLoaded', function() {
    addBannerStyles();
    
    const cookieBanner = new CookieBannerLoader();
    
    // Exponer globalmente para los botones
    window.cookieBanner = cookieBanner;
    
    // API global para desarrolladores
    window.DAClimaTechCookies = {
        getState: () => cookieBanner.getConsentStatus(),
        hasConsent: (type) => cookieBanner.hasConsent(type),
        reset: () => cookieBanner.resetConsent()
    };
    
    console.log('🍪 Cookie system initialized successfully');
});

// Fallback si DOMContentLoaded ya pasó
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        addBannerStyles();
    });
} else {
    addBannerStyles();
}