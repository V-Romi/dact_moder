// cookie-loader.js - Sistema optimizado de carga de cookies
// Versión: 2.0 - Optimizada para performance y UX

class CookieBannerLoader {
    constructor() {
        this.loaded = false;
        this.sessionKey = 'daclimatech_cookie_banner_loaded';
        this.consentKey = 'daclimatech_cookie_consent';
        this.initLoader();
    }

    async initLoader() {
        // No cargar si ya hay consentimiento guardado
        if (this.hasExistingConsent()) {
            console.log('🍪 Cookie consent already exists, skipping banner');
            return;
        }

        // No cargar si ya se cargó en esta sesión
        if (sessionStorage.getItem(this.sessionKey)) {
            console.log('🍪 Cookie banner already loaded this session');
            return;
        }
        
        try {
            console.log('🔄 Loading cookie banner...');
            const response = await fetch('cookie-banner.html', {
                method: 'GET',
                cache: 'force-cache' // Usar caché del navegador
            });
            
            if (response.ok) {
                const html = await response.text();
                document.body.insertAdjacentHTML('beforeend', html);
                console.log('✅ Cookie banner loaded successfully');
                sessionStorage.setItem(this.sessionKey, 'true');
                this.enhanceBannerFunctionality();
            } else {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
        } catch (error) {
            console.warn('⚠️ Failed to load cookie banner, using fallback:', error.message);
            this.loadFallbackBanner();
        }
    }

    hasExistingConsent() {
        const consent = localStorage.getItem(this.consentKey);
        return consent && consent !== 'null' && consent !== 'undefined';
    }

    enhanceBannerFunctionality() {
        // Mejorar el banner cargado con funcionalidades adicionales
        const banner = document.getElementById('cookieBanner');
        if (banner) {
            // Añadir cierre con escape
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && banner.style.display !== 'none') {
                    this.closeBanner(banner);
                }
            });

            // Añadir auto-close después de 30 segundos (opcional)
            setTimeout(() => {
                if (banner && banner.style.display !== 'none') {
                    console.log('🕐 Auto-closing cookie banner after 30s');
                    this.closeBanner(banner);
                }
            }, 30000);
        }
    }

    closeBanner(banner) {
        if (banner) {
            banner.style.transform = 'translateY(100%)';
            setTimeout(() => {
                banner.style.display = 'none';
            }, 300);
        }
    }

    loadFallbackBanner() {
        // Evitar duplicados
        if (document.querySelector('.cookie-banner-fallback')) {
            return;
        }

        const banner = this.createFallbackBanner();
        document.body.appendChild(banner);
        console.log('🍪 Fallback cookie banner loaded');
        
        // Marcar como cargado
        sessionStorage.setItem(this.sessionKey, 'true');
    }

    createFallbackBanner() {
        const banner = document.createElement('div');
        banner.className = 'cookie-banner-fallback';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-labelledby', 'cookie-fallback-title');
        banner.setAttribute('aria-describedby', 'cookie-fallback-desc');
        
        banner.innerHTML = `
            <div class="cookie-fallback-content">
                <div class="cookie-fallback-text">
                    <h3 id="cookie-fallback-title" style="margin: 0 0 0.5rem 0; font-size: 1.1rem; font-weight: 600;">
                        🍪 Gestión de Cookies
                    </h3>
                    <p id="cookie-fallback-desc" style="margin: 0 0 1rem 0; font-size: 0.9rem; opacity: 0.9;">
                        Utilizamos cookies para mejorar su experiencia de navegación. 
                        <a href="politica-de-cookies.html" target="_blank" style="color: #4CAF50; text-decoration: underline; font-weight: 600;">
                            Más información
                        </a>
                    </p>
                </div>
                <div class="cookie-fallback-actions">
                    <button onclick="this.handleReject()" class="cookie-btn-reject" aria-label="Rechazar cookies no esenciales">
                        Rechazar
                    </button>
                    <button onclick="this.handleAccept()" class="cookie-btn-accept" aria-label="Aceptar todas las cookies">
                        Aceptar
                    </button>
                </div>
            </div>
        `;
        
        // Estilos inline optimizados y elegantes
        banner.style.cssText = `
            position: fixed; 
            bottom: 0; 
            left: 0; 
            right: 0; 
            z-index: 10000;
            background: linear-gradient(135deg, #005C98 0%, #00A4E4 100%);
            color: white; 
            padding: 1.5rem 2rem; 
            box-shadow: 0 -4px 20px rgba(0,0,0,0.15);
            transform: translateY(100%); 
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-top: 1px solid rgba(255,255,255,0.1);
        `;

        // Estilos para el contenido
        const content = banner.querySelector('.cookie-fallback-content');
        content.style.cssText = `
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
            flex-wrap: wrap;
        `;

        // Estilos para los botones
        const buttons = banner.querySelectorAll('button');
        const actionsDiv = banner.querySelector('.cookie-fallback-actions');
        
        actionsDiv.style.cssText = `
            display: flex;
            gap: 1rem;
            align-items: center;
            flex-wrap: wrap;
        `;

        buttons.forEach((button, index) => {
            const baseStyles = `
                padding: 0.7rem 1.5rem;
                border: none;
                border-radius: 50px;
                font-weight: 600;
                font-size: 0.9rem;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                text-transform: uppercase;
                letter-spacing: 0.3px;
                min-width: 100px;
            `;
            
            if (button.classList.contains('cookie-btn-reject')) {
                button.style.cssText = baseStyles + `
                    background: linear-gradient(135deg, #ef4444, #dc2626);
                    color: white;
                    box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
                `;
            } else {
                button.style.cssText = baseStyles + `
                    background: linear-gradient(135deg, #4CAF50, #45a049);
                    color: white;
                    box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
                `;
            }
        });

        // Añadir handlers a los botones
        banner.querySelector('.cookie-btn-reject').onclick = () => {
            this.handleConsent(false);
            this.removeBanner(banner);
        };

        banner.querySelector('.cookie-btn-accept').onclick = () => {
            this.handleConsent(true);
            this.removeBanner(banner);
        };

        // Mostrar con animación después de un breve delay
        setTimeout(() => {
            banner.style.transform = 'translateY(0)';
        }, 100);

        // Responsive para móviles
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        const handleMobile = (e) => {
            if (e.matches) {
                content.style.flexDirection = 'column';
                content.style.textAlign = 'center';
                content.style.gap = '1.5rem';
                actionsDiv.style.width = '100%';
                actionsDiv.style.justifyContent = 'center';
            } else {
                content.style.flexDirection = 'row';
                content.style.textAlign = 'left';
                content.style.gap = '2rem';
                actionsDiv.style.width = 'auto';
                actionsDiv.style.justifyContent = 'flex-end';
            }
        };
        
        handleMobile(mediaQuery);
        mediaQuery.addListener(handleMobile);
        
        return banner;
    }

    handleConsent(accepted) {
        const consentData = {
            technical: true,
            analytical: accepted,
            functional: accepted,
            consentGiven: true,
            timestamp: new Date().toISOString()
        };
        
        localStorage.setItem(this.consentKey, JSON.stringify(consentData));
        
        // Disparar evento personalizado
        const event = new CustomEvent('cookieConsentUpdated', {
            detail: consentData
        });
        document.dispatchEvent(event);
        
        console.log(`🍪 Cookie consent: ${accepted ? 'accepted' : 'rejected'}`);
    }

    removeBanner(banner) {
        banner.style.transform = 'translateY(100%)';
        setTimeout(() => {
            if (banner && banner.parentNode) {
                banner.parentNode.removeChild(banner);
            }
        }, 400);
    }

    // Método estático para cargar de forma inteligente
    static init() {
        // Evitar múltiples inicializaciones
        if (window.DAClimaTechCookieLoader) {
            return;
        }

        const loader = new CookieBannerLoader();
        window.DAClimaTechCookieLoader = loader;
        
        // Estrategia de carga inteligente
        const events = ['click', 'scroll', 'touchstart', 'keydown'];
        let interactionOccurred = false;
        
        const loadOnInteraction = () => {
            if (interactionOccurred) return;
            interactionOccurred = true;
            
            events.forEach(event => 
                document.removeEventListener(event, loadOnInteraction)
            );
            
            loader.initLoader();
        };
        
        // Escuchar eventos de interacción
        events.forEach(event => 
            document.addEventListener(event, loadOnInteraction, { 
                once: true, 
                passive: true 
            })
        );
        
        // Fallback: cargar después de 3 segundos si no hay interacción
        setTimeout(() => {
            if (!interactionOccurred) {
                loadOnInteraction();
            }
        }, 3000);

        console.log('🍪 Cookie banner loader initialized');
    }

    // API pública para desarrolladores
    static getConsentStatus() {
        const consent = localStorage.getItem('daclimatech_cookie_consent');
        return consent ? JSON.parse(consent) : null;
    }

    static hasConsent(type = 'analytical') {
        const consent = this.getConsentStatus();
        return consent ? consent[type] || false : false;
    }

    static resetConsent() {
        localStorage.removeItem('daclimatech_cookie_consent');
        sessionStorage.removeItem('daclimatech_cookie_banner_loaded');
        console.log('🍪 Cookie consent reset');
    }
}

// Auto-inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', CookieBannerLoader.init);
} else {
    CookieBannerLoader.init();
}

// Exportar para uso global
window.CookieBannerLoader = CookieBannerLoader;