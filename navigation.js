// ===========================================
// NAVIGATION.JS - Script universal para todas las páginas
// ===========================================

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // ===========================================
    // LOADING SCREEN
    // ===========================================
    function initLoadingScreen() {
        window.addEventListener('load', function() {
            const loading = document.getElementById('loading');
            if (loading) {
                loading.classList.add('hidden');
            }

            // Lazy loading mejorado para imágenes
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
        });
    }

    // ===========================================
    // MOBILE MENU TOGGLE
    // ===========================================
    function initMobileMenu() {
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');

        if (menuToggle && navMenu) {
            menuToggle.addEventListener('click', function() {
                const isExpanded = navMenu.classList.contains('active');
                navMenu.classList.toggle('active');
                
                // Actualizar aria-expanded
                this.setAttribute('aria-expanded', !isExpanded);
                this.setAttribute('aria-label', !isExpanded ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
            });

            // Cerrar menú al hacer clic fuera
            document.addEventListener('click', function(e) {
                if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                    navMenu.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
                }
            });

            // Cerrar menú al presionar Escape
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
                    menuToggle.focus();
                }
            });
        }
    }

    // ===========================================
    // SMOOTH SCROLLING
    // ===========================================
    function initSmoothScrolling() {
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Solo prevenir default si es un anchor interno
                if (href.startsWith('#') && href.length > 1) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetSection = document.getElementById(targetId);
                    
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                    
                    // Cerrar menú móvil
                    const navMenu = document.getElementById('navMenu');
                    const menuToggle = document.getElementById('menuToggle');
                    if (navMenu && menuToggle) {
                        navMenu.classList.remove('active');
                        menuToggle.setAttribute('aria-expanded', 'false');
                    }
                }
            });
        });
    }

    // ===========================================
    // ACTIVE NAVIGATION HIGHLIGHTING
    // ===========================================
    function initActiveNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section[id]');
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const isIndexPage = currentPage === 'index.html' || currentPage === '' || currentPage === '/';

        // Función para actualizar el estado activo basado en la página actual
        function updateActiveNavByPage() {
            if (!isIndexPage) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    
                    const linkHref = link.getAttribute('href');
                    if (linkHref) {
                        const linkPage = linkHref.split('#')[0] || 'index.html';
                        
                        // Marcar como activo si coincide con la página actual
                        if (linkPage === currentPage) {
                            link.classList.add('active');
                        }
                    }
                });
            }
        }

        // Función mejorada para actualizar el estado activo basado en scroll (solo en index)
        function updateActiveNavByScroll() {
            if (!isIndexPage) return;

            let current = '';
            let currentSectionTop = -1;
            
            // Obtener todas las secciones con sus posiciones
            const sectionData = Array.from(sections).map(section => ({
                id: section.getAttribute('id'),
                top: section.offsetTop - 100, // Offset para activar antes
                bottom: section.offsetTop + section.clientHeight - 100
            }));

            const scrollPosition = window.pageYOffset;

            // Encontrar la sección actual basada en la posición de scroll
            for (let i = sectionData.length - 1; i >= 0; i--) {
                const section = sectionData[i];
                if (scrollPosition >= section.top) {
                    current = section.id;
                    break;
                }
            }

            // Si estamos en la parte superior de la página, activar 'home'
            if (scrollPosition < 100) {
                current = 'home';
            }

            // Actualizar estados activos de los enlaces
            navLinks.forEach(link => {
                link.classList.remove('active');
                
                const linkHref = link.getAttribute('href');
                if (!linkHref) return;

                // Mapear los enlaces a las secciones correspondientes
                let shouldBeActive = false;

                if (linkHref === 'index.html' || linkHref === '#home') {
                    shouldBeActive = current === 'home';
                } else if (linkHref === 'index.html#services' || linkHref === '#services') {
                    shouldBeActive = current === 'services';
                } else if (linkHref === 'index.html#about' || linkHref === '#about') {
                    shouldBeActive = current === 'about';
                } else if (linkHref === 'index.html#contact' || linkHref === '#contact') {
                    shouldBeActive = current === 'contact';
                } else if (linkHref === `#${current}`) {
                    shouldBeActive = true;
                }

                if (shouldBeActive) {
                    link.classList.add('active');
                    
                    // Debug info
                    console.log(`Sección activa: ${current}, Enlace activo: ${linkHref}`);
                }
            });
        }

        // Función para destacar visualmente la sección activa
        function highlightActiveSection(sectionId) {
            // Remover clase activa de todas las secciones
            sections.forEach(section => {
                section.classList.remove('section-active');
            });

            // Agregar clase activa a la sección actual
            const activeSection = document.getElementById(sectionId);
            if (activeSection) {
                activeSection.classList.add('section-active');
            }
        }

        // Inicializar estado activo
        updateActiveNavByPage();

        // Scroll listener solo para la página principal
        if (isIndexPage) {
            let scrollTimeout;
            let isScrolling = false;

            function onScroll() {
                if (!isScrolling) {
                    window.requestAnimationFrame(() => {
                        updateActiveNavByScroll();
                        isScrolling = false;
                    });
                    isScrolling = true;
                }
            }

            window.addEventListener('scroll', onScroll);
            
            // Llamar una vez al cargar para establecer el estado inicial
            setTimeout(updateActiveNavByScroll, 100);
        }

        // Actualizar navegación cuando se hace clic en un enlace interno
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#') && isIndexPage) {
                link.addEventListener('click', function() {
                    // Esperar un poco para que el scroll termine
                    setTimeout(() => {
                        updateActiveNavByScroll();
                    }, 100);
                });
            }
        });
    }

    // ===========================================
    // HEADER BACKGROUND ON SCROLL
    // ===========================================
    function initHeaderScroll() {
        let scrollTimeout;
        window.addEventListener('scroll', function() {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function() {
                const header = document.querySelector('.header');
                if (header) {
                    if (window.scrollY > 50) {
                        header.style.background = 'rgba(255, 255, 255, 0.98)';
                        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.12)';
                    } else {
                        header.style.background = 'rgba(255, 255, 255, 0.95)';
                        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                    }
                }
            }, 10);
        });
    }

    // ===========================================
    // SCROLL ANIMATIONS
    // ===========================================
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observar elementos con animación fade-in
        const fadeInElements = document.querySelectorAll('.fade-in');
        fadeInElements.forEach(element => {
            observer.observe(element);
        });
    }

    // ===========================================
    // SERVICE CARD HOVER EFFECTS
    // ===========================================
    function initServiceCardEffects() {
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // ===========================================
    // CONTACT LINKS TRACKING
    // ===========================================
    function initContactTracking() {
        const contactLinks = document.querySelectorAll('.contact-link');
        contactLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Aquí puedes agregar analytics o tracking
                console.log('Contact method clicked:', this.textContent.trim());
            });
        });
    }

    // ===========================================
    // DROPDOWN MENU FUNCTIONALITY
    // ===========================================
    function initDropdownMenus() {
        const dropdownItems = document.querySelectorAll('.nav-item.dropdown');
        
        dropdownItems.forEach(item => {
            const dropdownMenu = item.querySelector('.dropdown-menu');
            const navLink = item.querySelector('.nav-link');
            
            if (dropdownMenu && navLink) {
                // Mostrar/ocultar con hover en desktop
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

                // Click en móvil
                navLink.addEventListener('click', function(e) {
                    if (window.innerWidth <= 768 && this.getAttribute('href').includes('#')) {
                        e.preventDefault();
                        const isExpanded = dropdownMenu.style.display === 'block';
                        
                        // Cerrar otros dropdowns
                        document.querySelectorAll('.dropdown-menu').forEach(menu => {
                            menu.style.display = 'none';
                        });
                        
                        if (!isExpanded) {
                            dropdownMenu.style.display = 'block';
                            this.setAttribute('aria-expanded', 'true');
                        } else {
                            dropdownMenu.style.display = 'none';
                            this.setAttribute('aria-expanded', 'false');
                        }
                    }
                });

                // Cerrar dropdown al hacer clic en un enlace interno
                const dropdownLinks = dropdownMenu.querySelectorAll('.dropdown-link');
                dropdownLinks.forEach(link => {
                    link.addEventListener('click', function() {
                        // Cerrar menú móvil
                        const navMenu = document.getElementById('navMenu');
                        const menuToggle = document.getElementById('menuToggle');
                        if (navMenu && menuToggle) {
                            navMenu.classList.remove('active');
                            menuToggle.setAttribute('aria-expanded', 'false');
                        }
                        
                        // Cerrar dropdown
                        dropdownMenu.style.display = 'none';
                        navLink.setAttribute('aria-expanded', 'false');
                    });
                });
            }
        });

        // Cerrar dropdowns al redimensionar ventana
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.style.display = '';
                });
            }
        });
    }

    // ===========================================
    // KEYBOARD NAVIGATION SUPPORT
    // ===========================================
    function initKeyboardNavigation() {
        const navLinks = document.querySelectorAll('.nav-link, .dropdown-link');
        
        navLinks.forEach(link => {
            link.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });
    }

    // ===========================================
    // PERFORMANCE OPTIMIZATIONS
    // ===========================================
    function initPerformanceOptimizations() {
        // Preload critical pages
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
            });
        });

        // Optimize scroll events
        let ticking = false;
        function updateOnScroll() {
            // Aquí van las funciones que dependen del scroll
            ticking = false;
        }

        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(updateOnScroll);
                ticking = true;
            }
        });
    }

    // ===========================================
    // ACCESSIBILITY IMPROVEMENTS
    // ===========================================
    function initAccessibilityFeatures() {
        // Skip link functionality
        const skipLink = document.querySelector('.skip-link');
        const mainContent = document.getElementById('main-content');
        
        if (skipLink && mainContent) {
            skipLink.addEventListener('click', function(e) {
                e.preventDefault();
                mainContent.scrollIntoView();
                mainContent.focus();
            });
        }

        // Announce page changes for screen readers
        const currentPage = document.title;
        if (currentPage) {
            // Crear anuncio para lectores de pantalla
            const announcement = document.createElement('div');
            announcement.setAttribute('aria-live', 'polite');
            announcement.setAttribute('aria-atomic', 'true');
            announcement.className = 'sr-only';
            announcement.textContent = `Página cargada: ${currentPage}`;
            document.body.appendChild(announcement);
            
            // Remover después de anunciar
            setTimeout(() => {
                document.body.removeChild(announcement);
            }, 1000);
        }
    }

    // ===========================================
    // ADD DYNAMIC CSS FOR ACTIVE NAVIGATION
    // ===========================================
    function addActiveNavigationStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* Estilos mejorados para navegación activa */
            .nav-link.active {
                background-color: rgba(0, 92, 152, 0.1) !important;
                font-weight: 600 !important;
                color: var(--primary-color) !important;
                border-radius: 6px;
                position: relative;
            }

            .nav-link.active::after {
                content: '';
                position: absolute;
                bottom: -2px;
                left: 50%;
                width: 80%;
                height: 3px;
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                transform: translateX(-50%);
                border-radius: 2px;
                animation: slideIn 0.3s ease;
            }

            @keyframes slideIn {
                from {
                    width: 0%;
                    opacity: 0;
                }
                to {
                    width: 80%;
                    opacity: 1;
                }
            }

            /* Indicador visual para secciones activas */
            .section-active {
                position: relative;
            }

            .section-active::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                width: 4px;
                height: 100%;
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                opacity: 0.3;
                animation: fadeInLeft 0.5s ease;
            }

            /* Estilos responsive para navegación activa */
            @media (max-width: 768px) {
                .nav-link.active {
                    background-color: rgba(0, 92, 152, 0.15) !important;
                    margin: 0.2rem 0;
                }

                .nav-link.active::after {
                    bottom: 0;
                    height: 2px;
                    width: 90%;
                }
            }

            /* Animación suave para cambios de estado */
            .nav-link {
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
            }

            /* Mejora del contraste para accesibilidad */
            @media (prefers-contrast: high) {
                .nav-link.active {
                    background-color: rgba(0, 92, 152, 0.3) !important;
                    border: 2px solid var(--primary-color) !important;
                }
            }
        `;
        document.head.appendChild(style);
    }
    function initializeNavigation() {
        try {
            initLoadingScreen();
            initMobileMenu();
            initSmoothScrolling();
            initActiveNavigation();
            initHeaderScroll();
            initScrollAnimations();
            initServiceCardEffects();
            initContactTracking();
            initDropdownMenus();
            initKeyboardNavigation();
            initPerformanceOptimizations();
            initAccessibilityFeatures();
            
            console.log('✅ Navigation.js initialized successfully');
        } catch (error) {
            console.error('❌ Error initializing navigation:', error);
        }
    }

    // Ejecutar inicialización
    initializeNavigation();
});

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

// Función para mostrar notificaciones (opcional)
function showNotification(message, type = 'info') {
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
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Función para detectar si el usuario prefiere animaciones reducidas
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Función para optimizar imágenes lazy loading
function loadImageProgressively(img) {
    if (img.dataset.src) {
        const imageLoader = new Image();
        imageLoader.onload = function() {
            img.src = this.src;
            img.classList.add('loaded');
        };
        imageLoader.src = img.dataset.src;
    }
}

// Export para uso en otros scripts si es necesario
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showNotification,
        prefersReducedMotion,
        loadImageProgressively
    };
}