/* DAClimaTECH — Equipamiento
   JS aislado de navigation.js */

const WA_NUMBER = "5493534089909";
const wa = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

/* ---------------------------------------------------------
   DATOS DE PRODUCTO
   NOTA: "price" es un valor numérico de referencia interno,
   usado solo para habilitar el ordenamiento por precio.
   El precio visible sigue siendo "$XXX.XXX" (placeholder)
   hasta que carguemos la lista real de precios
   (ver DAClimaTECH_Precios_Nave.xlsx). No se expone en el
   JSON-LD para no publicar un precio que no coincide con
   lo que ve el usuario en pantalla.
   --------------------------------------------------------- */
const EQ_PRODUCTS = [
  {
    id: "midea-09",
    gallery: [
      { src: "img/equipamiento/midea-marketing-r32.webp", alt: "Midea Inverter — refrigerante R-32 Eco Friendly y eficiencia A++" },
      { src: "img/equipamiento/midea-indoor.webp", alt: "Midea Inverter — unidad interior" },
      { src: "img/equipamiento/midea-outdoor.webp", alt: "Midea Inverter — unidad exterior" },
      { src: "img/equipamiento/midea-remote.webp", alt: "Midea Inverter — control remoto" },
      { src: "img/equipamiento/midea-combo.webp", alt: "Midea Inverter — equipo completo (interior, exterior y control)" },
    ],
    brand: "Midea",
    line: "Split Inverter R-32",
    name: "Midea Inverter",
    model: "MSNIC-09H-GN81F",
    capacity: 2356,
    capacityLabel: "2356 frigorías",
    price: 822804, // Precio efectivo (40% OFF sobre lista) — fuente: Excel de precios reales
    priceOriginal: 1371339, // Precio de lista (tachado en la UI)
    installments: 6,
    installmentValue: 201130,
    badge: "Más vendido",
    badgeType: "vendido",
    isNew: false,
    image: "img/equipamiento/midea-indoor.webp",
    comboImage: "img/equipamiento/midea-combo.webp",
    outdoorImage: "img/equipamiento/midea-outdoor.webp",
    remoteImage: "img/equipamiento/midea-remote.webp",
    features: ["Inverter", "Frío / Calor", "R32"],
    technology: "Inverter",
    type: "Split",
    refrigerant: "R32",
    warranty: "Según condiciones de garantía del fabricante",
    description: "Split inverter con refrigerante R32, función Gear, Follow Me, autolimpieza y Gold Cover.",
    specs: {
      "Capacidad": "2356 frigorías",
      "Refrigerante": "R32",
      "Alimentación": "220 V (50 Hz)",
      "Eficiencia refrigeración": "A++",
      "Eficiencia calefacción": "A",
      "Dimensiones interior": "729 × 200 × 292 mm"
    },
    installInfo: "Instalación disponible en toda la zona de cobertura de DAClimaTECH, a cargo de técnicos propios. El costo de instalación se cotiza según distancia, tipo de soporte y metros de cañería necesarios.",
  },
  {
    id: "surrey-09",
    gallery: [
      { src: "img/equipamiento/surrey-outdoor.webp", alt: "Surrey Inverter Smart — unidad exterior" },
      { src: "img/equipamiento/surrey-indoor.webp", alt: "Surrey Inverter Smart — unidad interior" },
      { src: "img/equipamiento/surrey-marketing-r32.webp", alt: "Surrey Inverter Smart — refrigerante R-32 ecológico, eficiencia A++ y Smart Control" },
      { src: "img/equipamiento/surrey-remote.webp", alt: "Surrey Inverter Smart — control remoto" },
      { src: "img/equipamiento/surrey-combo.webp", alt: "Surrey Inverter Smart — equipo completo (interior, exterior y control)" },
    ],
    brand: "Surrey",
    line: "Inverter Smart R-32",
    name: "Surrey Inverter Smart",
    model: "553PIQ09N81F",
    capacity: 2305,
    capacityLabel: "2305 frigorías",
    price: 871176, // Precio efectivo (40% OFF sobre lista) — fuente: Excel de precios reales
    priceOriginal: 1451960, // Precio de lista (tachado en la UI)
    installments: 6,
    installmentValue: 212954,
    badge: "Recomendado",
    badgeType: "recomendado",
    isNew: false,
    image: "img/equipamiento/surrey-indoor.webp",
    comboImage: "img/equipamiento/surrey-combo.webp",
    extraImages: [{ src: "img/equipamiento/surrey-indoor-open.webp", alt: "Surrey Inverter Smart — unidad interior (rejilla abierta)" }],
    outdoorImage: "img/equipamiento/surrey-outdoor.webp",
    remoteImage: "img/equipamiento/surrey-remote.webp",
    features: ["Inverter", "Frío / Calor", "WiFi"],
    technology: "Inverter + WiFi",
    type: "Split",
    refrigerant: "R32",
    warranty: "Según condiciones de garantía del fabricante",
    description: "Equipo split inverter con Smart Control, función Follow Me y compatibilidad con Google Home y Alexa.",
    specs: {
      "Capacidad": "2305 frigorías",
      "Refrigerante": "R32",
      "Alimentación": "220 V (50 Hz)",
      "Eficiencia refrigeración": "A++",
      "Eficiencia calefacción": "A",
      "Control": "Surrey Smart"
    },
    installInfo: "Instalación disponible en toda la zona de cobertura de DAClimaTECH, a cargo de técnicos propios. El costo de instalación se cotiza según distancia, tipo de soporte y metros de cañería necesarios.",
  },
  {
    id: "carrier-09",
    gallery: [
      { src: "img/equipamiento/carrier-marketing-r32-smart.webp", alt: "XPower Inverter — refrigerante R-32, Smart Ready, Alexa y Google Home" },
      { src: "img/equipamiento/carrier-indoor.webp", alt: "XPower Inverter — unidad interior" },
      { src: "img/equipamiento/carrier-outdoor.webp", alt: "XPower Inverter — unidad exterior" },
      { src: "img/equipamiento/carrier-remote.webp", alt: "XPower Inverter — control remoto" },
      { src: "img/equipamiento/carrier-indoor-outdoor.webp", alt: "XPower Inverter — unidad interior y exterior juntas" },
    ],
    brand: "Carrier",
    line: "Xpower Inverter Smart R-32",
    name: "XPower Inverter",
    model: "53HVP09N81F",
    capacity: 2305,
    capacityLabel: "2305 frigorías",
    price: 895886, // Precio efectivo (40% OFF sobre lista) — fuente: Excel de precios reales
    priceOriginal: 1493144, // Precio de lista (tachado en la UI)
    installments: 9,
    installmentValue: 145996,
    badge: "Destacado",
    badgeType: "destacado",
    isNew: true,
    image: "img/equipamiento/carrier-indoor.webp",
    outdoorImage: "img/equipamiento/carrier-outdoor.webp",
    remoteImage: "img/equipamiento/carrier-remote.webp",
    features: ["Inverter", "Frío / Calor", "WiFi"],
    technology: "Inverter + WiFi",
    type: "Split",
    refrigerant: "R32",
    warranty: "3 años directa de fábrica",
    description: "Split XPower Inverter con Smart Ready, conexión Wi-Fi, comandos por voz, función Gear y filtro Silver Ion.",
    specs: {
      "Capacidad": "2305 frigorías",
      "Refrigerante": "R32",
      "Alimentación": "220 V (50 Hz)",
      "Eficiencia refrigeración": "A++",
      "Eficiencia calefacción": "A",
      "Garantía": "3 años directa de fábrica"
    },
    installInfo: "Instalación disponible en toda la zona de cobertura de DAClimaTECH, a cargo de técnicos propios. El costo de instalación se cotiza según distancia, tipo de soporte y metros de cañería necesarios.",
  },
  {
    id: "midea-12",
    gallery: [
      { src: "img/equipamiento/midea-combo.webp", alt: "Midea Inverter — equipo completo (interior, exterior y control)" },
      { src: "img/equipamiento/midea-marketing-smarthome.webp", alt: "Midea Inverter — SmartHome, compatible con Alexa y Google Home" },
      { src: "img/equipamiento/midea-indoor.webp", alt: "Midea Inverter — unidad interior" },
      { src: "img/equipamiento/midea-outdoor.webp", alt: "Midea Inverter — unidad exterior" },
      { src: "img/equipamiento/midea-remote.webp", alt: "Midea Inverter — control remoto" },
    ],
    brand: "Midea",
    line: "Split Inverter R-32",
    name: "Midea Inverter",
    model: "MSNIC-12H-KN81F",
    capacity: 3096,
    capacityLabel: "3096 frigorías",
    price: 868554, // Precio efectivo (40% OFF sobre lista) — fuente: Excel de precios reales
    priceOriginal: 1447590, // Precio de lista (tachado en la UI)
    installments: 6,
    installmentValue: 212313,
    isNew: false,
    image: "img/equipamiento/midea-indoor.webp",
    comboImage: "img/equipamiento/midea-combo.webp",
    outdoorImage: "img/equipamiento/midea-outdoor.webp",
    remoteImage: "img/equipamiento/midea-remote.webp",
    features: ["Inverter", "Frío / Calor", "R32"],
    technology: "Inverter",
    type: "Split",
    refrigerant: "R32",
    warranty: "Según condiciones de garantía del fabricante",
    description: "Split inverter con refrigerante R32, función Gear, Follow Me, autolimpieza y Gold Cover.",
    specs: {
      "Capacidad": "3096 frigorías",
      "Refrigerante": "R32",
      "Alimentación": "220 V (50 Hz)",
      "Eficiencia refrigeración": "A++",
      "Eficiencia calefacción": "A",
      "Dimensiones interior": "802 × 200 × 295 mm"
    },
    installInfo: "Instalación disponible en toda la zona de cobertura de DAClimaTECH, a cargo de técnicos propios. El costo de instalación se cotiza según distancia, tipo de soporte y metros de cañería necesarios.",
  }
];

// Galería del modal: fotos reales por producto (unidad interior,
// [imágenes extra opcionales], unidad exterior, control remoto,
// foto combo opcional al final como "vista completa del kit").
function productImages(p) {
  // Si el producto define una galería explícita (orden custom, con fotos
  // de marketing intercaladas), la usamos tal cual — así cada variante de
  // capacidad de una misma marca no muestra siempre la misma foto primero.
  if (Array.isArray(p.gallery) && p.gallery.length) return p.gallery;

  const images = [
    { src: p.image, alt: `${p.brand} ${p.name} — unidad interior` }
  ];
  if (Array.isArray(p.extraImages)) images.push(...p.extraImages);
  images.push({ src: p.outdoorImage, alt: `${p.brand} ${p.name} — unidad exterior` });
  images.push({ src: p.remoteImage, alt: `${p.brand} ${p.name} — control remoto` });
  if (p.comboImage) images.push({ src: p.comboImage, alt: `${p.brand} ${p.name} — equipo completo (interior, exterior y control)` });
  return images;
}

/* ---------------------------------------------------------
   TÍTULO SEO — idéntico criterio que catalogo-aire-acondicionado.js
   (mismo dato p.line, misma fórmula) para que el título de cada
   equipo sea igual en el hub y en el catálogo completo.
   --------------------------------------------------------- */
function seoTitle(p) {
  let linePhrase = (p.line || "").replace(/\s*R-?32$/i, "").trim();
  // Evita duplicar palabras del "tipo" (ej. "Split") si ya aparecen dentro
  // de la línea del producto, en cualquier posición (no solo al principio).
  p.type.split(" ").forEach(word => {
    linePhrase = linePhrase.replace(new RegExp(`\\b${word}\\b`, "i"), "");
  });
  linePhrase = linePhrase.replace(/\s+/g, " ").trim();
  return `Aire Acondicionado ${p.type} ${linePhrase} ${p.brand.toUpperCase()} ${p.model} Frío Calor ${p.capacity} Kcal/h. ${p.refrigerant}`.replace(/\s+/g, " ").trim();
}

/* ---------------------------------------------------------
   PRECIO — precios reales tomados de
   Catalogo_web_aire_acondicionado_MASTER_v2.xlsx (hoja "Precios").
   Mismo criterio que catalogo-aire-acondicionado.js.
   --------------------------------------------------------- */
function getPricing(p) {
  const discountPct = Math.round((1 - p.price / p.priceOriginal) * 100);
  return { original: p.priceOriginal, final: p.price, discountPct, installments: p.installments, installmentValue: p.installmentValue };
}

/* ---------------------------------------------------------
   FILTROS (compartidos entre botones de escritorio y panel mobile)
   --------------------------------------------------------- */
const FILTER_DEFS = [
  { key: "brand", label: "Marca", allLabel: "Todas", options: ["Surrey", "Carrier", "Midea"] },
  { key: "capacity", label: "Capacidad", allLabel: "Todas", options: ["Hasta 3000", "3000–5000", "Más de 5000"] },
  { key: "technology", label: "Tecnología", allLabel: "Todas", options: ["On/Off", "Inverter", "Inverter + WiFi", "Smart"] },
  { key: "type", label: "Tipo", allLabel: "Todos", options: ["Split", "Multisplit", "Portátil"] },
  { key: "price", label: "Precio", allLabel: "Todos", options: ["Hasta $950.000", "$950.000–$1.450.000", "Más de $1.450.000"] }
];

const filterState = { brand: "", capacity: "", technology: "", type: "", price: "" };

function matchesCapacity(value, capacity) {
  if (value === "Hasta 3000") return capacity <= 3000;
  if (value === "3000–5000") return capacity > 3000 && capacity <= 5000;
  if (value === "Más de 5000") return capacity > 5000;
  return true;
}
function matchesPrice(value, price) {
  if (value === "Hasta $950.000") return price <= 950000;
  if (value === "$950.000–$1.450.000") return price > 950000 && price <= 1450000;
  if (value === "Más de $1.450.000") return price > 1450000;
  return true;
}
// "Smart" y "Inverter + WiFi" describen el mismo grupo de equipos
// (control por app / voz / Wi-Fi) — muchos clientes buscan por "Smart"
// sin saber que en la ficha técnica figura como "Inverter + WiFi".
// Se muestran como dos opciones distintas en el filtro, pero ambas
// devuelven el mismo resultado.
function matchesTechnology(value, technology) {
  if (value === "Smart") return technology === "Inverter + WiFi" || technology === "Smart";
  return technology === value;
}

function getFilteredProducts() {
  return EQ_PRODUCTS.filter(p => {
    if (filterState.brand && p.brand !== filterState.brand) return false;
    if (filterState.technology && !matchesTechnology(filterState.technology, p.technology)) return false;
    if (filterState.type && p.type !== filterState.type) return false;
    if (filterState.capacity && !matchesCapacity(filterState.capacity, p.capacity)) return false;
    if (filterState.price && !matchesPrice(filterState.price, p.price)) return false;
    return true;
  });
}

function getSortedProducts(list) {
  const sorted = [...list];
  const sortValue = document.getElementById("sortProducts").value;
  if (sortValue === "price-low") sorted.sort((a, b) => a.price - b.price);
  if (sortValue === "price-high") sorted.sort((a, b) => b.price - a.price);
  if (sortValue === "new") sorted.sort((a, b) => Number(b.isNew) - Number(a.isNew));
  return sorted;
}

function applyFiltersAndSort() {
  const list = getSortedProducts(getFilteredProducts());
  renderProducts(list);
  syncFilterUI();
}

function syncFilterUI() {
  // Botones de escritorio: resaltar los que tienen selección activa
  FILTER_DEFS.forEach(def => {
    const btn = document.querySelector(`.eq-filter[data-filter="${def.key}"]`);
    if (!btn) return;
    const value = filterState[def.key];
    btn.classList.toggle("is-active", Boolean(value));
    btn.innerHTML = `${value ? `${def.label}: ${value}` : def.label} <span>⌄</span>`;

    const dropdown = document.querySelector(`[data-filter-dropdown="${def.key}"]`);
    if (dropdown) {
      dropdown.querySelectorAll(".eq-filter-option").forEach(opt => {
        opt.classList.toggle("is-selected", opt.dataset.value === value);
      });
    }
  });

  // Panel mobile: mantener los <select> sincronizados con el mismo estado
  document.querySelectorAll("[data-panel-filter]").forEach(select => {
    const key = select.dataset.panelFilter;
    if (key in filterState) select.value = filterState[key];
  });
}

function buildFilterDropdowns() {
  FILTER_DEFS.forEach(def => {
    const dropdown = document.querySelector(`[data-filter-dropdown="${def.key}"]`);
    if (!dropdown) return;
    const allOption = `<button type="button" class="eq-filter-option" data-value="" role="option">${def.allLabel}</button>`;
    const options = def.options.map(opt =>
      `<button type="button" class="eq-filter-option" data-value="${opt}" role="option">${opt}</button>`
    ).join("");
    dropdown.innerHTML = allOption + options;
  });
}

function closeAllFilterDropdowns() {
  document.querySelectorAll(".eq-filter-dropdown.is-open").forEach(d => d.classList.remove("is-open"));
  document.querySelectorAll('.eq-filter[aria-expanded="true"]').forEach(b => b.setAttribute("aria-expanded", "false"));
}

function initDesktopFilters() {
  buildFilterDropdowns();

  document.querySelectorAll(".eq-filter-group").forEach(group => {
    const key = group.dataset.filterGroup;
    const btn = group.querySelector(".eq-filter");
    const dropdown = group.querySelector(".eq-filter-dropdown");

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const willOpen = !dropdown.classList.contains("is-open");
      closeAllFilterDropdowns();
      if (willOpen) {
        dropdown.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });

    dropdown.addEventListener("click", (e) => {
      const option = e.target.closest(".eq-filter-option");
      if (!option) return;
      filterState[key] = option.dataset.value;
      closeAllFilterDropdowns();
      applyFiltersAndSort();
    });
  });

  document.addEventListener("click", closeAllFilterDropdowns);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAllFilterDropdowns();
  });
}

function initMobileFilterPanel() {
  const filterPanel = document.getElementById("filterPanel");

  document.getElementById("filterOpen").addEventListener("click", () => {
    filterPanel.classList.add("is-open");
    filterPanel.setAttribute("aria-hidden", "false");
  });
  document.getElementById("filterClose").addEventListener("click", () => {
    filterPanel.classList.remove("is-open");
    filterPanel.setAttribute("aria-hidden", "true");
  });

  document.querySelectorAll("[data-panel-filter]").forEach(select => {
    select.addEventListener("change", () => {
      const key = select.dataset.panelFilter;
      filterState[key] = select.value;
      applyFiltersAndSort();
    });
  });

  const clearBtn = document.getElementById("filterPanelClear");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      Object.keys(filterState).forEach(key => (filterState[key] = ""));
      applyFiltersAndSort();
    });
  }
}

/* ---------------------------------------------------------
   RENDER DE CARDS
   --------------------------------------------------------- */
const productGrid = document.getElementById("productGrid");
const modal = document.getElementById("productModal");

function formatPrice(n) {
  return `$${n.toLocaleString("es-AR")}`;
}

function productCard(p) {
  // Etiquetas "Recomendado / Destacado / Más vendido" quitadas a pedido
  // (el dato badge/badgeType queda en EQ_PRODUCTS por si se reusa después).
  const images = productImages(p);
  const pricing = getPricing(p);
  const arrows = images.length > 1 ? `
        <button class="eq-product-arrow eq-product-arrow--prev" type="button" data-arrow="prev" aria-label="Foto anterior">‹</button>
        <button class="eq-product-arrow eq-product-arrow--next" type="button" data-arrow="next" aria-label="Foto siguiente">›</button>
        <div class="eq-product-dots">${images.map((_, i) => `<span class="eq-product-dot${i === 0 ? " is-active" : ""}"></span>`).join("")}</div>
  ` : "";
  return `
    <article class="eq-product" data-product="${p.id}" data-brand="${p.brand}" data-capacity="${p.capacity}" data-technology="${p.technology}" data-type="${p.type}">
      <div class="eq-product-media" data-image-index="0">
        <img src="${images[0].src}" alt="${images[0].alt}" loading="lazy" decoding="async" width="600" height="450">
        ${arrows}
      </div>
      <div class="eq-product-body">
        <span class="eq-brand">${p.brand}</span>
        <h3>${seoTitle(p)}</h3>
        <p class="eq-capacity">${p.capacityLabel}</p>

        <div class="eq-features">
          ${p.features.map(f => `<span class="eq-feature-dot">${f}</span>`).join("")}
        </div>

        <div class="eq-product-price">
          <span>Equipo desde:</span>
          <span class="eq-price-original">${formatPrice(pricing.original)}</span>
          <div class="eq-price-row">
            <strong>${formatPrice(pricing.final)}</strong>
            <span class="eq-price-off">${pricing.discountPct}% OFF</span>
          </div>
          <span class="eq-price-installments">${pricing.installments} cuotas de ${formatPrice(pricing.installmentValue)}</span>
        </div>

        <div class="eq-install">
          <span>✓</span>
          <div><strong>Instalación disponible</strong></div>
        </div>

        <button class="eq-product-btn" type="button" data-product="${p.id}">
          Ver equipo <span>→</span>
        </button>
      </div>
    </article>
  `;
}

function renderProducts(products) {
  if (!products.length) {
    productGrid.innerHTML = `
      <div class="eq-empty-state" role="status">
        <p>No encontramos equipos con esos filtros. Probá ajustar la búsqueda o
        <a href="${wa("Hola DAClimaTECH, no encontré el equipo que buscaba en la web, ¿me ayudan?")}" target="_blank" rel="noopener">consultanos por WhatsApp</a>.</p>
      </div>`;
    return;
  }
  productGrid.innerHTML = products.map(productCard).join("");
}

// Avanza/retrocede la imagen mostrada en la card del catálogo sin
// abrir el modal (usado por flechas y por click directo en la foto).
function stepCardImage(media, direction) {
  const article = media.closest(".eq-product");
  const p = EQ_PRODUCTS.find(x => x.id === article.dataset.product);
  const images = productImages(p);
  if (images.length < 2) return;
  let idx = parseInt(media.dataset.imageIndex || "0", 10);
  idx = direction === "prev" ? (idx - 1 + images.length) % images.length : (idx + 1) % images.length;
  media.dataset.imageIndex = idx;
  const img = media.querySelector("img");
  img.src = images[idx].src;
  img.alt = images[idx].alt;
  media.querySelectorAll(".eq-product-dot").forEach((dot, i) => dot.classList.toggle("is-active", i === idx));
}

/* ---------------------------------------------------------
   MODAL / FICHA DE PRODUCTO
   --------------------------------------------------------- */
function renderModalGallery(p) {
  const images = productImages(p);
  const mainImg = document.getElementById("modalImage");
  const thumbsWrap = document.getElementById("modalThumbs");
  const prevBtn = document.getElementById("modalPrev");
  const nextBtn = document.getElementById("modalNext");
  let current = 0;

  function showModalImage(idx) {
    current = (idx + images.length) % images.length;
    mainImg.src = images[current].src;
    mainImg.alt = images[current].alt;
    thumbsWrap.querySelectorAll(".eq-modal-thumb").forEach((t, i) => {
      t.classList.toggle("is-active", i === current);
      t.setAttribute("aria-selected", String(i === current));
    });
  }

  thumbsWrap.innerHTML = images.map((img, i) => `
    <button type="button" class="eq-modal-thumb${i === 0 ? " is-active" : ""}" data-thumb-index="${i}" role="tab" aria-selected="${i === 0}" aria-label="${img.alt}">
      <img src="${img.src}" alt="" loading="lazy">
    </button>
  `).join("");

  thumbsWrap.querySelectorAll(".eq-modal-thumb").forEach(thumb => {
    thumb.addEventListener("click", () => showModalImage(Number(thumb.dataset.thumbIndex)));
  });

  const hasMultiple = images.length > 1;
  prevBtn.hidden = !hasMultiple;
  nextBtn.hidden = !hasMultiple;
  prevBtn.onclick = () => showModalImage(current - 1);
  nextBtn.onclick = () => showModalImage(current + 1);
  // Click directo en la foto grande: avanza a la siguiente.
  mainImg.onclick = () => { if (hasMultiple) showModalImage(current + 1); };

  showModalImage(0);
}

function switchModalTab(tabKey) {
  document.querySelectorAll(".eq-modal-tab").forEach(tab => {
    const isActive = tab.dataset.tab === tabKey;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
  });
  document.querySelectorAll(".eq-modal-panel").forEach(panel => {
    const isActive = panel.id === `panel-${tabKey}`;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });
}

function initModalTabs() {
  document.querySelectorAll(".eq-modal-tab").forEach(tab => {
    tab.addEventListener("click", () => switchModalTab(tab.dataset.tab));
  });
}

function openProduct(id) {
  const p = EQ_PRODUCTS.find(x => x.id === id);
  if (!p) return;

  renderModalGallery(p);

  document.getElementById("modalBrand").textContent = p.brand;
  document.getElementById("modalTitle").textContent = p.name;
  document.getElementById("modalCapacity").textContent = `${p.capacityLabel} · ${p.model}`;
  // Etiqueta quitada también del modal.
  document.getElementById("modalBadge").innerHTML = "";

  const pricing = getPricing(p);
  document.getElementById("modalPriceOriginal").textContent = formatPrice(pricing.original);
  document.getElementById("modalPrice").textContent = formatPrice(pricing.final);
  document.getElementById("modalPriceOff").textContent = `${pricing.discountPct}% OFF`;
  document.getElementById("modalInstallments").textContent = `${pricing.installments} cuotas de ${formatPrice(pricing.installmentValue)}`;

  document.getElementById("modalDescription").textContent = p.description;

  document.getElementById("modalFeatures").innerHTML =
    p.features.map(f => `<li>${f}</li>`).join("");

  document.getElementById("modalSpecs").innerHTML =
    Object.entries(p.specs).map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");

  document.getElementById("modalInstallInfo").textContent = p.installInfo;

  document.getElementById("modalDelivery").href =
    wa(`Hola DAClimaTECH, quiero coordinar el envío a domicilio de ${p.brand} ${p.name} (${p.model}). ¿Me pasan tiempos y costo de envío?`);
  document.getElementById("modalPickup").href =
    wa(`Hola DAClimaTECH, quiero consultar disponibilidad en tienda de ${p.brand} ${p.name} (${p.model}) para retirar personalmente.`);
  document.getElementById("modalInstall").href =
    wa(`Hola DAClimaTECH, quiero coordinar la instalación básica de ${p.brand} ${p.name} (${p.model}). ¿Me ayudan a coordinar el día?`);

  switchModalTab("caracteristicas");

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("eq-modal-open");
  document.getElementById("productModal").querySelector(".eq-modal-close").focus();
}

function closeProduct() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("eq-modal-open");
}

productGrid.addEventListener("click", e => {
  const arrow = e.target.closest("[data-arrow]");
  if (arrow) {
    e.preventDefault();
    e.stopPropagation();
    stepCardImage(arrow.closest(".eq-product-media"), arrow.dataset.arrow);
    return;
  }

  const cardImg = e.target.closest(".eq-product-media img");
  if (cardImg) {
    e.preventDefault();
    e.stopPropagation();
    stepCardImage(cardImg.closest(".eq-product-media"), "next");
    return;
  }

  const button = e.target.closest("[data-product]");
  if (button) openProduct(button.dataset.product);
});

modal.addEventListener("click", e => {
  if (e.target.matches("[data-close-modal]")) closeProduct();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) closeProduct();
});

document.getElementById("sortProducts").addEventListener("change", applyFiltersAndSort);

/* "Ver más equipos" ahora es un <a href="catalogo-aire-acondicionado.html">
   real (ver equipamiento.html) — ya no necesita listener ni alert(). */

/* ---------------------------------------------------------
   SEO: JSON-LD (con offers — el precio ya es real, coincide
   con el que se muestra en la tarjeta y el modal)
   --------------------------------------------------------- */

/* Política de devolución real de DAClimaTECH: 48hs para reclamo,
   flete de devolución a cargo del cliente. Devoluciones fuera de
   ese plazo se rigen por la garantía del fabricante (no es parte
   de este campo). */
const MERCHANT_RETURN_POLICY = {
  "@type": "MerchantReturnPolicy",
  applicableCountry: "AR",
  returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
  merchantReturnDays: 2,
  returnFees: "https://schema.org/ReturnShippingFees"
};

/* Envío: tarifa desde $50.000 (varía según zona/producto, se cotiza
   en cada caso). Tiempo: 1-5 días hábiles con stock, hasta 15 días
   si hay que pedirlo al proveedor — mapeado como handlingTime ya
   que ambos casos dependen de disponibilidad, no de tránsito. */
const SHIPPING_DETAILS = {
  "@type": "OfferShippingDetails",
  shippingRate: {
    "@type": "MonetaryAmount",
    value: "50000",
    currency: "ARS"
  },
  shippingDestination: {
    "@type": "DefinedRegion",
    addressCountry: "AR"
  },
  deliveryTime: {
    "@type": "ShippingDeliveryTime",
    handlingTime: {
      "@type": "QuantitativeValue",
      minValue: 1,
      maxValue: 15
    }
  }
};

function injectProductJsonLd() {
  const pricedProducts = EQ_PRODUCTS.filter(p => p.price != null);

  const itemListElement = pricedProducts.map((p, i) => {
    const pricing = getPricing(p);
    return {
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: `${p.brand} ${p.name}`,
        sku: p.model,
        brand: { "@type": "Brand", name: p.brand },
        description: p.description,
        image: `https://daclimatech.com/${p.image}`,
        url: "https://daclimatech.com/equipamiento.html",
        offers: {
          "@type": "Offer",
          price: pricing.final,
          priceCurrency: "ARS",
          availability: "https://schema.org/InStock",
          url: "https://daclimatech.com/equipamiento.html",
          hasMerchantReturnPolicy: MERCHANT_RETURN_POLICY,
          shippingDetails: SHIPPING_DETAILS
        }
      }
    };
  });

  if (!itemListElement.length) return;

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement
  });
  document.head.appendChild(script);
}

/* ---------------------------------------------------------
   INIT
   --------------------------------------------------------- */
initDesktopFilters();
initMobileFilterPanel();
initModalTabs();
injectProductJsonLd();
applyFiltersAndSort();