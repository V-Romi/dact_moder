/* DAClimaTECH — Catálogo completo de Aerotermia
   JS aislado, calcado de catalogo-aire-acondicionado.js (misma UI de
   sidebar, misma lógica de modal/galería/ordenamiento). Lo único que
   cambia es el dataset de producto, la definición de filtros (acá en
   kW en vez de frigorías) y el título SEO.

   Solo quedan los 3 Midea M Thermal (16kW mono, 16kW tri, 26kW tri) —
   los 3 Atom T (módulo hidráulico + 2 unidades de conducto) se sacaron
   a pedido de Ro. Fotos reales de Midea (línea Heating, diagrama de
   sistema) que pasó Ro, usadas SIN RECORTAR — solo optimizadas a webp,
   tal como pidió — repartidas entre los 3 productos (una cada una) para
   que no se vean como el mismo equipo repetido. */

const WA_NUMBER = "5493535690667";
const wa = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

/* ---------------------------------------------------------
   DATOS DE PRODUCTO
   Fuentes: Catalogo_Midea_Soluciones-Calefaccion.pdf (specs M Thermal)
   y Catalogo_web_aire_acondicionado_MASTER_v2.xlsx, hoja "Precios"
   (precios reales en ARS de los 3 M Thermal: lista / efectivo 40% OFF
   / 6 cuotas — igual que el resto del sitio).
   --------------------------------------------------------- */
const EQ_PRODUCTS = [

  {
    id: "midea-mthermal-16-mono",
    gallery: [
      { src: "img/aerotermia/midea-mthermal-16-mono-outdoor.webp", alt: "Midea M Thermal 16kW — unidad exterior monobloc, ambiente living/cocina" },
      { src: "img/aerotermia/midea-sistema-diagrama.webp", alt: "Midea M Thermal — esquema de instalación: piso radiante, radiador, fan coil y ACS" },
    ],
    brand: "Midea",
    line: "M Thermal Monobloc R-32",
    name: "M Thermal",
    model: "MHC-V16WD2N8-C-AR1",
    capacity: 16,
    capacityLabel: "16 kW",
    phase: "Monofásica 220V",
    phaseType: "Monofásica",
    price: 7883987, // Precio efectivo (40% OFF sobre lista) — fuente: Excel de precios reales
    priceOriginal: 13139978.33, // Precio de lista (tachado en la UI)
    installments: 6,
    installmentValue: 1927196.82,
    isNew: true,
    features: ["Full DC Inverter", "Calefacción + Refrigeración + ACS", "Refrigerante R32", "Monofásica 220V"],
    technology: "Full DC Inverter",
    type: "Monobloc",
    refrigerant: "R32",
    warranty: "Según condiciones de garantía del fabricante",
    description: "Bomba de calor aerotérmica monobloc para calefacción, refrigeración y agua caliente sanitaria en un solo sistema. Compatible con piso radiante, fan coil y radiadores, con COP de hasta 4,50 en calefacción.",
    specs: {
      "Capacidad calefacción": "16 kW (COP 4,50)",
      "Capacidad enfriamiento": "15,4 kW (EER 4,20)",
      "Refrigerante": "R32 (1,8 kg)",
      "Alimentación": "220 V / 1 / 50 Hz",
      "Clase eficiencia (35°C / 55°C)": "A+++ / A++",
      "Rango temp. ambiente calefacción": "-25°C a 35°C",
      "Rango ajuste agua calefacción": "25°C a 65°C",
      "Nivel de sonido": "72 dB",
      "Dimensiones": "865 × 1040 × 410 mm",
      "Peso neto/bruto": "106 / 122 kg"
    },
    installInfo: "Instalación del sistema de aerotermia disponible en toda la zona de cobertura de DAClimaTECH, a cargo de técnicos certificados — no se vende sin instalación. El costo se cotiza según el proyecto (piso radiante, radiadores, fan coil, Agua Caliente Sanitaria) y los metros de cañería/instalación hidráulica necesarios. El costo de los materiales se cotiza aparte.",
  },
  {
    id: "midea-mthermal-16-tri",
    gallery: [
      { src: "img/aerotermia/midea-mthermal-16-tri-outdoor.webp", alt: "Midea M Thermal 16kW — unidad exterior monobloc, ambiente living/cocina" },
      { src: "img/aerotermia/aerotermia-16kw-linea-heating.webp", alt: "Midea M Thermal 16kW — Línea Heating, ambiente de cocina" },
    ],
    brand: "Midea",
    line: "M Thermal Monobloc R-32",
    name: "M Thermal",
    model: "MHC-V16WD2RN8-C-AR1",
    capacity: 16,
    capacityLabel: "16 kW",
    phase: "Trifásica 380V",
    phaseType: "Trifásica",
    price: 7883987,
    priceOriginal: 13139978.33,
    installments: 6,
    installmentValue: 1927196.82,
    isNew: false,
    features: ["Full DC Inverter", "Calefacción + Refrigeración + ACS", "Refrigerante R32", "Trifásica 380V"],
    technology: "Full DC Inverter",
    type: "Monobloc",
    refrigerant: "R32",
    warranty: "Según condiciones de garantía del fabricante",
    description: "Bomba de calor aerotérmica monobloc para calefacción, refrigeración y agua caliente sanitaria en un solo sistema, en versión trifásica. Compatible con piso radiante, fan coil y radiadores, con COP de hasta 4,50 en calefacción.",
    specs: {
      "Capacidad calefacción": "16 kW (COP 4,50)",
      "Capacidad enfriamiento": "15,4 kW (EER 4,20)",
      "Refrigerante": "R32 (1,8 kg)",
      "Alimentación": "380 V / 3 / 50 Hz",
      "Clase eficiencia (35°C / 55°C)": "A+++ / A++",
      "Rango temp. ambiente calefacción": "-25°C a 35°C",
      "Rango ajuste agua calefacción": "25°C a 65°C",
      "Nivel de sonido": "72 dB",
      "Dimensiones": "865 × 1040 × 410 mm",
      "Peso neto/bruto": "120 / 136 kg"
    },
    installInfo: "Instalación del sistema de aerotermia disponible en toda la zona de cobertura de DAClimaTECH, a cargo de técnicos certificados — no se vende sin instalación. El costo se cotiza según el proyecto (piso radiante, radiadores, fan coil, Agua Caliente Sanitaria) y los metros de cañería/instalación hidráulica necesarios. El costo de los materiales se cotiza aparte.",
  },
  {
    id: "midea-mthermal-26",
    gallery: [
      { src: "img/aerotermia/aerotermia-16kw-y-26kw-a.webp", alt: "Línea Heating Midea — comparación de tamaño entre el M Thermal 16kW y el 26kW" },
      { src: "img/aerotermia/aerotermia-16kw-y-26kw-b.webp", alt: "Línea Heating Midea — M Thermal 16kW y 26kW, ambiente living" },
      { src: "img/aerotermia/aerotermia-16kw-y-26kw-c.webp", alt: "Línea Heating Midea — M Thermal 16kW y 26kW, otro ángulo" },
    ],
    brand: "Midea",
    line: "M Thermal Monobloc R-32",
    name: "M Thermal",
    model: "MHC-V26W/D2RN8-AR1",
    capacity: 26,
    capacityLabel: "26 kW",
    phase: "Trifásica 380-415V (única versión disponible)",
    phaseType: "Trifásica",
    price: 11185351, // Precio efectivo (40% OFF sobre lista) — fuente: Excel de precios reales
    priceOriginal: 18642251.67,
    installments: 6,
    installmentValue: 2734196.91,
    isNew: false,
    badge: "Alta capacidad",
    features: ["Full DC Inverter", "Calefacción + Refrigeración + ACS", "Refrigerante R32", "Únicamente trifásica"],
    technology: "Full DC Inverter",
    type: "Monobloc",
    refrigerant: "R32",
    warranty: "Según condiciones de garantía del fabricante",
    description: "Bomba de calor aerotérmica monobloc de alta capacidad para calefacción, refrigeración y agua caliente sanitaria. Ideal para superficies grandes o proyectos que requieren mayor potencia. Disponible únicamente en versión trifásica.",
    specs: {
      "Capacidad calefacción": "26 kW (COP 4,08)",
      "Capacidad enfriamiento": "27 kW (EER 4,30)",
      "Refrigerante": "R32 (5,0 kg)",
      "Alimentación": "380-415 V / 3 / 50 Hz",
      "Clase eficiencia (35°C / 55°C)": "A+++ / A+",
      "Rango temp. ambiente calefacción": "-25°C a 35°C",
      "Rango ajuste agua calefacción": "25°C a 60°C",
      "Nivel de sonido": "75 dB",
      "Dimensiones": "1129 × 1558 × 528 mm",
      "Peso neto/bruto": "177 / 206 kg"
    },
    installInfo: "Instalación del sistema de aerotermia disponible en toda la zona de cobertura de DAClimaTECH, a cargo de técnicos certificados — no se vende sin instalación. El costo se cotiza según el proyecto (piso radiante, radiadores, fan coil, Agua Caliente Sanitaria) y los metros de cañería/instalación hidráulica necesarios. El costo de los materiales se cotiza aparte.",
  }

];

// Galería del modal: cada producto trae su propia galería explícita
// (no hay foto de "interior/exterior/control" genérica como en AC).
function productImages(p) {
  if (Array.isArray(p.gallery) && p.gallery.length) return p.gallery;
  return [{ src: p.image || "", alt: `${p.brand} ${p.name}` }];
}

/* ---------------------------------------------------------
   TÍTULO SEO
   --------------------------------------------------------- */
function seoTitle(p) {
  const phase = p.phase ? ` ${p.phase}` : "";
  return `Aerotermia ${p.type} MIDEA ${p.name} ${p.model} ${p.capacityLabel}${phase}`.replace(/\s+/g, " ").trim();
}

/* ---------------------------------------------------------
   FILTROS — con solo 3 M Thermal en el catálogo (todos Midea,
   Monobloc, Full DC Inverter), Marca/Tecnología/Tipo ya no distinguen
   nada entre productos, así que quedaron afuera. Lo que sí separa a
   los 3 es la potencia y si son mono o trifásicos.
   --------------------------------------------------------- */
const FILTER_DEFS = [
  { key: "capacity", label: "Potencia", options: ["16 kW", "26 kW"] },
  { key: "phaseType", label: "Alimentación", options: ["Monofásica", "Trifásica"] }
];

const filterState = { capacity: "", phaseType: "" };

function matchesCapacity(value, capacity) {
  if (capacity == null) return false;
  if (value === "16 kW") return capacity === 16;
  if (value === "26 kW") return capacity === 26;
  return true;
}

// Cuenta cuántos productos del set actual (sin aplicar el propio
// filtro que se está contando) matchean cada opción, para el numerito
// al lado de cada checkbox del sidebar.
function countForOption(key, value) {
  return EQ_PRODUCTS.filter(p => {
    if (key !== "phaseType" && filterState.phaseType && p.phaseType !== filterState.phaseType) return false;
    if (key !== "capacity" && filterState.capacity && !matchesCapacity(filterState.capacity, p.capacity)) return false;

    if (key === "phaseType") return p.phaseType === value;
    if (key === "capacity") return matchesCapacity(value, p.capacity);
    return true;
  }).length;
}

function getFilteredProducts() {
  return EQ_PRODUCTS.filter(p => {
    if (filterState.phaseType && p.phaseType !== filterState.phaseType) return false;
    if (filterState.capacity && !matchesCapacity(filterState.capacity, p.capacity)) return false;
    return true;
  });
}

function getSortedProducts(list) {
  const sorted = [...list];
  const sortValue = document.getElementById("sortProducts").value;
  if (sortValue === "new") sorted.sort((a, b) => Number(b.isNew) - Number(a.isNew));
  return sorted;
}

const FILTER_LABELS = FILTER_DEFS.reduce((acc, def) => (acc[def.key] = def.label, acc), {});

function applyFiltersAndSort() {
  const list = getSortedProducts(getFilteredProducts());
  renderProducts(list);
  renderSidebarOptions();
  renderActiveChips();
  renderResultsCount(list.length);
}

function renderResultsCount(n) {
  const el = document.getElementById("resultsCount");
  el.innerHTML = `<strong>${n}</strong> equipo${n === 1 ? "" : "s"} de aerotermia`;
}

/* ---------------------------------------------------------
   SIDEBAR: construcción y estado (idéntico a AC)
   --------------------------------------------------------- */
function renderSidebarOptions() {
  const wrap = document.getElementById("sidebarGroups");
  wrap.innerHTML = FILTER_DEFS.map(def => {
    const options = def.options.map(opt => {
      const isSelected = filterState[def.key] === opt;
      const count = countForOption(def.key, opt);
      return `
        <button type="button" class="cat-sidebar-option${isSelected ? " is-selected" : ""}"
          data-filter-key="${def.key}" data-filter-value="${opt}"
          role="checkbox" aria-checked="${isSelected}" ${count === 0 && !isSelected ? "disabled" : ""}>
          <span class="cat-sidebar-option-dot">${isSelected ? "✓" : ""}</span>
          <span>${opt}</span>
          <span class="cat-sidebar-count">${count}</span>
        </button>`;
    }).join("");
    return `
      <div class="cat-sidebar-group" data-filter-group="${def.key}">
        <h3>${def.label}</h3>
        <div class="cat-sidebar-options">${options}</div>
      </div>`;
  }).join("");
}

function renderActiveChips() {
  const wrap = document.getElementById("activeChips");
  const active = FILTER_DEFS.filter(def => filterState[def.key]);
  if (!active.length) {
    wrap.hidden = true;
    wrap.innerHTML = "";
    return;
  }
  wrap.hidden = false;
  wrap.innerHTML = active.map(def => `
    <button type="button" class="cat-chip" data-clear-filter="${def.key}">
      ${filterState[def.key]} <span aria-hidden="true">×</span>
    </button>
  `).join("");
}

function setFilter(key, value) {
  filterState[key] = filterState[key] === value ? "" : value;
  applyFiltersAndSort();
}

function clearAllFilters() {
  Object.keys(filterState).forEach(key => (filterState[key] = ""));
  applyFiltersAndSort();
}

function initSidebarFilters() {
  renderSidebarOptions();

  document.getElementById("sidebarGroups").addEventListener("click", e => {
    const btn = e.target.closest("[data-filter-key]");
    if (!btn || btn.disabled) return;
    setFilter(btn.dataset.filterKey, btn.dataset.filterValue);
  });

  document.getElementById("activeChips").addEventListener("click", e => {
    const btn = e.target.closest("[data-clear-filter]");
    if (!btn) return;
    filterState[btn.dataset.clearFilter] = "";
    applyFiltersAndSort();
  });

  document.getElementById("clearFilters").addEventListener("click", clearAllFilters);
}

/* ---------------------------------------------------------
   SIDEBAR MOBILE: panel deslizable (idéntico a AC)
   --------------------------------------------------------- */
function initMobileSidebar() {
  const sidebar = document.getElementById("catSidebar");
  const backdrop = document.getElementById("sidebarBackdrop");

  function openSidebar() {
    sidebar.classList.add("is-open");
    backdrop.classList.add("is-open");
    document.body.classList.add("cat-sidebar-open");
  }
  function closeSidebar() {
    sidebar.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    document.body.classList.remove("cat-sidebar-open");
  }

  document.getElementById("sidebarOpen").addEventListener("click", openSidebar);
  document.getElementById("sidebarClose").addEventListener("click", closeSidebar);
  backdrop.addEventListener("click", closeSidebar);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && sidebar.classList.contains("is-open")) closeSidebar();
  });
}

/* ---------------------------------------------------------
   RENDER DE CARDS (idéntico a AC)
   --------------------------------------------------------- */
const productGrid = document.getElementById("productGrid");
const modal = document.getElementById("productModal");

function productCard(p) {
  const images = productImages(p);
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
          <strong>Cotizar por proyecto</strong>
        </div>

        <div class="eq-install">
          <span>✓</span>
          <div><strong>Se comercializa junto con la instalación · a cotizar por proyecto</strong></div>
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
        <a href="${wa("Hola DAClimaTECH, no encontré el equipo de aerotermia que buscaba en la web, ¿me ayudan?")}" target="_blank" rel="noopener">consultanos por WhatsApp</a>.</p>
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
   MODAL / FICHA DE PRODUCTO (idéntico a AC)
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
  document.getElementById("modalBadge").innerHTML = "";

  document.getElementById("modalDescription").textContent = p.description;

  document.getElementById("modalFeatures").innerHTML =
    p.features.map(f => `<li>${f}</li>`).join("");

  document.getElementById("modalSpecs").innerHTML =
    Object.entries(p.specs).map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");

  document.getElementById("modalInstallInfo").textContent = p.installInfo;

  // Único clip de entrega: instalación por DAClimaTECH, se cotiza por proyecto.
  document.getElementById("modalInstall").href =
    wa(`Hola DAClimaTECH, quiero cotizar ${p.brand} ${p.name} (${p.model}) para mi proyecto. ¿Me pasan precio de instalación?`);

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

/* ---------------------------------------------------------
   SEO: JSON-LD
   --------------------------------------------------------- */
function injectProductJsonLd() {
  const itemListElement = EQ_PRODUCTS.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: `${p.brand} ${p.name}`,
      sku: p.model,
      brand: { "@type": "Brand", name: p.brand },
      description: p.description,
      image: `https://daclimatech.com/${productImages(p)[0].src}`
    }
  }));

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
initSidebarFilters();
initMobileSidebar();
initModalTabs();
injectProductJsonLd();
applyFiltersAndSort();