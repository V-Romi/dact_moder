// =============================================
// NAVIGATION.JS OPTIMIZADO - VERSIÓN 2.0
// Separado por prioridad de carga
// =============================================

// ===========================================
// PARTE 1: FUNCIONALIDADES CRÍTICAS
// Se ejecutan inmediatamente
// ===========================================

(function() {
    'use strict';
    
    // Cache de elementos DOM para mejor performance
    const DOMCache = {
        loading: null,
        menuToggle: null,
        navMenu: null,
        header: null,
        
        // Lazy loading de elementos
        get(selector, cache = true) {
            const key = selector.replace(/[^a-zA-Z0-9]/g, '');
            if (cache && this[key]) return this[key];
            
            const element = document.getElementById(selector) || document.querySelector(selector);
            if (cache) this[key] = element;
            return element;
        }
    };

    // ========================================
    // LOADING SCREEN - CRÍTICO
    // ========================================
    function initLoadingScreen() {
        const loading = DOMCache.get('loading');
        
        const hideLoading = () => {
            if (loading && !loading.classList.contains('hidden')) {
                loading.classList.add('hidden');
                // Cleanup después de la animación
                setTimeout(() => {
                    if (loading.parentNode) {
                        loading.style.display = 'none';
                    }
                }, 500);
            }
        };

        // Hide loading inmediatamente si ya está cargado
        if (document.readyState === 'complete') {
            hideLoading();
        } else {
            window.addEventListener('load', hideLoading, { once: true });
        }

        // Lazy loading para imágenes
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                            observer.unobserve(img);
                        }
                    }
                });
            });

            // Observar imágenes lazy
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // ========================================
    // NAVEGACIÓN MÓVIL - CRÍTICO
    // ========================================
    function initMobileMenu() {
        const menuToggle = DOMCache.get('menuToggle');
        const navMenu = DOMCache.get('navMenu');
        
        if (!menuToggle || !navMenu) return;

        // Toggle menu con mejor performance
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            const isExpanded = navMenu.classList.contains('active');
            
            // Toggle states
            navMenu.classList.toggle('active');
            this.setAttribute('aria-expanded', !isExpanded);
            this.setAttribute('aria-label', 
                !isExpanded ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'
            );
            
            // Prevenir scroll del body cuando menu está abierto
            document.body.style.overflow = !isExpanded ? 'hidden' : '';
        }, { passive: false });

        // Cerrar menu al hacer click fuera
        document.addEventListener('click', function(e) {
            if (navMenu.classList.contains('active') && 
                !navMenu.contains(e.target) && 
                !menuToggle.contains(e.target)) {
                closeMenu();
            }
        });

        // Cerrar con ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                closeMenu();
                menuToggle.focus();
            }
        });

        function closeMenu() {
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
            document.body.style.overflow = '';
        }

        // Cerrar menu al navegar (mobile)
        navMenu.addEventListener('click', function(e) {
            if (e.target.classList.contains('nav-link')) {
                setTimeout(closeMenu, 100);
            }
        });
    }

    // ========================================
    // SMOOTH SCROLLING - CRÍTICO PARA UX
    // ========================================
    function initSmoothScrolling() {
        // Delegación de eventos para mejor performance
        document.addEventListener('click', function(e) {
            const link = e.target.closest('.nav-link[href^="#"], .cta-button[href^="#"]');
            if (!link) return;
            
            const href = link.getAttribute('href');
            if (href && href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    // Smooth scroll optimizado
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Cerrar menu móvil si está abierto
                    const navMenu = DOMCache.get('navMenu');
                    if (navMenu && navMenu.classList.contains('active')) {
                        setTimeout(() => {
                            navMenu.classList.remove('active');
                            document.body.style.overflow = '';
                        }, 100);
                    }
                }
            }
        });
    }

    // ========================================
    // INICIALIZACIÓN CRÍTICA
    // ========================================
    function initCriticalFeatures() {
        try {
            initLoadingScreen();
            initMobileMenu();
            initSmoothScrolling();
            console.log('✅ Funcionalidades críticas inicializadas');
        } catch (error) {
            console.error('❌ Error en funcionalidades críticas:', error);
        }
    }

    // Ejecutar funcionalidades críticas inmediatamente
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCriticalFeatures);
    } else {
        initCriticalFeatures();
    }

})();

// ===========================================
// PARTE 2: FUNCIONALIDADES NO-CRÍTICAS
// Se cargan después del contenido principal
// ===========================================

window.addEventListener('load', function() {
    'use strict';

    // ========================================
    // NAVEGACIÓN ACTIVA - NO CRÍTICO
    // ========================================
    function initActiveNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section[id]');
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const isIndexPage = currentPage === 'index.html' || currentPage === '' || currentPage === '/';

        // Navegación activa por página
        function updateActiveNavByPage() {
            if (!isIndexPage) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    const linkHref = link.getAttribute('href');
                    if (linkHref) {
                        const linkPage = linkHref.split('#')[0] || 'index.html';
                        if (linkPage === currentPage) {
                            link.classList.add('active');
                        }
                    }
                });
            }
        }

        // Navegación activa por scroll (solo index)
        function updateActiveNavByScroll() {
            if (!isIndexPage) return;

            let current = '';
            const scrollPosition = window.pageYOffset;
            
            // Determinar sección activa
            const sectionData = Array.from(sections).map(section => ({
                id: section.getAttribute('id'),
                top: section.offsetTop - 100,
                bottom: section.offsetTop + section.clientHeight - 100
            }));

            for (let i = sectionData.length - 1; i >= 0; i--) {
                const section = sectionData[i];
                if (scrollPosition >= section.top) {
                    current = section.id;
                    break;
                }
            }

            if (scrollPosition < 100) current = 'home';

            // Actualizar links activos
            navLinks.forEach(link => {
                link.classList.remove('active');
                const linkHref = link.getAttribute('href');
                if (!linkHref) return;

                let shouldBeActive = false;
                if (linkHref === 'index.html' || linkHref === '#home') {
                    shouldBeActive = current === 'home';
                } else if (linkHref.includes('#services')) {
                    shouldBeActive = current === 'services';
                } else if (linkHref.includes('#about')) {
                    shouldBeActive = current === 'about';
                } else if (linkHref.includes('#contact')) {
                    shouldBeActive = current === 'contact';
                } else if (linkHref === `#${current}`) {
                    shouldBeActive = true;
                }

                if (shouldBeActive) {
                    link.classList.add('active');
                }
            });
        }

        updateActiveNavByPage();

        if (isIndexPage && sections.length > 0) {
            // Throttled scroll listener para mejor performance
            let scrollTimeout;
            const throttledScroll = () => {
                if (!scrollTimeout) {
                    scrollTimeout = setTimeout(() => {
                        updateActiveNavByScroll();
                        scrollTimeout = null;
                    }, 100);
                }
            };

            window.addEventListener('scroll', throttledScroll, { passive: true });
            
            // Initial call
            setTimeout(updateActiveNavByScroll, 100);
        }
    }

    // ========================================
    // HEADER SCROLL EFFECTS - NO CRÍTICO
    // ========================================
    function initHeaderScroll() {
        const header = document.querySelector('.header');
        if (!header) return;

        let scrollTimeout;
        const throttledHeaderScroll = () => {
            if (!scrollTimeout) {
                scrollTimeout = setTimeout(() => {
                    const scrollY = window.scrollY;
                    if (scrollY > 50) {
                        header.style.background = 'rgba(255, 255, 255, 0.98)';
                        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.12)';
                    } else {
                        header.style.background = 'rgba(255, 255, 255, 0.95)';
                        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                    }
                    scrollTimeout = null;
                }, 16); // ~60fps
            }
        };

        window.addEventListener('scroll', throttledHeaderScroll, { passive: true });
    }

    // ========================================
    // SCROLL ANIMATIONS - NO CRÍTICO
    // ========================================
    function initScrollAnimations() {
        if (!('IntersectionObserver' in window)) return;

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Unobserve después de la animación para mejor performance
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(element => {
            observer.observe(element);
        });
    }

    // ========================================
    // DROPDOWNS CORREGIDO - NO CRÍTICO
    // ========================================
    function initDropdownMenus() {
        const dropdownItems = document.querySelectorAll('.nav-item.dropdown');

        dropdownItems.forEach(item => {
            const dropdownMenu = item.querySelector('.dropdown-menu');
            const navLink = item.querySelector('.nav-link');
            
            if (!dropdownMenu || !navLink) return;

            // Desktop hover - solo funciona en pantallas grandes
            item.addEventListener('mouseenter', function() {
                if (window.innerWidth > 768) {
                    dropdownMenu.style.opacity = '1';
                    dropdownMenu.style.visibility = 'visible';
                    dropdownMenu.style.transform = 'translateY(0)';
                    navLink.setAttribute('aria-expanded', 'true');
                }
            });

            item.addEventListener('mouseleave', function() {
                if (window.innerWidth > 768) {
                    dropdownMenu.style.opacity = '0';
                    dropdownMenu.style.visibility = 'hidden';
                    dropdownMenu.style.transform = 'translateY(-10px)';
                    navLink.setAttribute('aria-expanded', 'false');
                }
            });

            // Mobile click - CORRECCIÓN PRINCIPAL
            navLink.addEventListener('click', function(e) {
                // Solo prevenir default en móviles Y si el link tiene dropdown
                if (window.innerWidth <= 768 && this.getAttribute('href').includes('#')) {
                    e.preventDefault();
                    e.stopPropagation(); // Evitar que se cierre el menú principal
                    
                    const isExpanded = dropdownMenu.classList.contains('mobile-show');
                    
                    // Cerrar todos los dropdowns primero
                    document.querySelectorAll('.dropdown-menu').forEach(menu => {
                        menu.classList.remove('mobile-show');
                    });
                    
                    // Actualizar aria-expanded para todos los nav-links
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.setAttribute('aria-expanded', 'false');
                    });
                    
                    // Abrir este dropdown si no estaba abierto
                    if (!isExpanded) {
                        dropdownMenu.classList.add('mobile-show');
                        this.setAttribute('aria-expanded', 'true');
                    }
                }
            });

            // Cerrar dropdown al hacer click en un link del submenu
            dropdownMenu.addEventListener('click', function(e) {
                if (e.target.classList.contains('dropdown-link')) {
                    // En móvil, cerrar el dropdown después de un pequeño delay
                    if (window.innerWidth <= 768) {
                        setTimeout(() => {
                            dropdownMenu.classList.remove('mobile-show');
                            navLink.setAttribute('aria-expanded', 'false');
                            
                            // También cerrar el menú principal
                            const navMenu = document.getElementById('navMenu');
                            if (navMenu) {
                                navMenu.classList.remove('active');
                                const menuToggle = document.getElementById('menuToggle');
                                if (menuToggle) {
                                    menuToggle.setAttribute('aria-expanded', 'false');
                                }
                                document.body.style.overflow = '';
                            }
                        }, 100);
                    }
                }
            });
        });

        // Reset dropdowns en resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                // En desktop, limpiar clases móviles
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.classList.remove('mobile-show');
                    menu.style.display = '';
                });
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.setAttribute('aria-expanded', 'false');
                });
            } else {
                // En móvil, limpiar estilos desktop
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.style.opacity = '';
                    menu.style.visibility = '';
                    menu.style.transform = '';
                });
            }
        });

        // Cerrar dropdowns al hacer click fuera (solo móvil)
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                const isClickInsideDropdown = e.target.closest('.nav-item.dropdown');
                if (!isClickInsideDropdown) {
                    document.querySelectorAll('.dropdown-menu').forEach(menu => {
                        menu.classList.remove('mobile-show');
                    });
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.setAttribute('aria-expanded', 'false');
                    });
                }
            }
        });
    }

    // ========================================
    // ANALYTICS EVENTS - NO CRÍTICO
    // ========================================
    function initAnalyticsEvents() {
        // Solo si hay consentimiento de cookies analíticas
        function trackEvent(eventName, category, label) {
            if (typeof gtag !== 'undefined' && 
                window.DAClimaTechCookies && 
                window.DAClimaTechCookies.hasConsent('analytical')) {
                gtag('event', eventName, {
                    'event_category': category,
                    'event_label': label
                });
            }
        }

        // Service cards tracking
        document.addEventListener('click', function(e) {
            const serviceCard = e.target.closest('.service-card');
            if (serviceCard) {
                const serviceTitle = serviceCard.querySelector('.service-title');
                if (serviceTitle) {
                    trackEvent('service_click', 'engagement', serviceTitle.textContent);
                }
            }

            // Contact links tracking
            const contactLink = e.target.closest('.contact-link');
            if (contactLink) {
                trackEvent('contact_click', 'conversion', contactLink.textContent.trim());
            }

            // CTA button tracking
            const ctaButton = e.target.closest('.cta-button');
            if (ctaButton) {
                trackEvent('cta_click', 'conversion', 'Solicita tu Presupuesto Gratis');
            }

            // WhatsApp button tracking
            const whatsappButton = e.target.closest('.whatsapp-float');
            if (whatsappButton) {
                trackEvent('whatsapp_click', 'contact', 'whatsapp_float_button');
            }
        });

        // Scroll depth tracking
        let scrollTracked = false;
        window.addEventListener('scroll', function() {
            if (!scrollTracked) {
                const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
                if (scrollPercent > 90) {
                    trackEvent('scroll_deep', 'engagement', '90_percent');
                    scrollTracked = true;
                }
            }
        }, { passive: true });

        // Time on page tracking
        setTimeout(() => {
            trackEvent('time_on_page', 'engagement', '30_seconds');
        }, 30000);
    }

    // ========================================
    // UTILIDADES ADICIONALES - NO CRÍTICO
    // ========================================
    function initAdditionalFeatures() {
        // Service card hover effects
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Keyboard navigation improvements
        const focusableElements = document.querySelectorAll('.nav-link, .dropdown-link, .contact-link, .cta-button');
        focusableElements.forEach(element => {
            element.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });

        // Prefetch critical pages on hover
        const criticalLinks = document.querySelectorAll('a[href$=".html"]');
        criticalLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                const href = this.getAttribute('href');
                if (href && !document.querySelector(`link[href="${href}"]`)) {
                    const prefetchLink = document.createElement('link');
                    prefetchLink.rel = 'prefetch';
                    prefetchLink.href = href;
                    document.head.appendChild(prefetchLink);
                }
            }, { once: true });
        });
    }

    // ========================================
    // INICIALIZACIÓN NO-CRÍTICA
    // ========================================
    function initNonCriticalFeatures() {
        try {
            initActiveNavigation();
            initHeaderScroll();
            initScrollAnimations();
            initDropdownMenus();
            initAnalyticsEvents();
            initAdditionalFeatures();
            console.log('✅ Funcionalidades no-críticas inicializadas');
        } catch (error) {
            console.error('❌ Error en funcionalidades no-críticas:', error);
        }
    }

    // Ejecutar con delay para no bloquear renderizado
    setTimeout(initNonCriticalFeatures, 100);
});

// ========================================
// UTILIDADES GLOBALES EXPORTADAS
// ========================================
window.DAClimaTechNavigation = {
    showNotification: function(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem;
            background: var(--primary-color);
            color: white;
            border-radius: 8px;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;

        document.body.appendChild(notification);
        
        setTimeout(() => notification.style.transform = 'translateX(0)', 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    },

    prefersReducedMotion: function() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
};

// Performance monitoring
if (typeof performance !== 'undefined' && performance.mark) {
    performance.mark('navigation-js-loaded');
}