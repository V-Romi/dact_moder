/* DAClimaTECH — Catálogo completo de Ventilación
   JS aislado, calcado de catalogo-calefaccion.js. Diferencias clave:
   1) NO se muestra precio en ningún lado de esta página (ni tarjeta
      ni modal) — a pedido de Ro. En su lugar: "Consultar precio" /
      "Cotizar por proyecto", que abre WhatsApp. El campo p.price
      (U$S, del PDF de Sodeca) se conserva en los datos como
      referencia interna aunque no se renderiza.
   2) La instalación es SIEMPRE a cargo de DAClimaTECH y el equipo
      se comercializa junto con la instalación, no por separado —
      se aclara en la tarjeta, el modal y installInfo.
   3) Fuente de datos y specs: PDF "SODECA_CT04_SOLUCIONES_DE_
      VENTILACION_PARA_VIVIENDAS_ES" que pasó Ro. El producto cargado
      es el AIRHOME-300 (doble flujo con recuperador de calor). El
      PDF solo trae medidas exactas (770×210×105mm) para el AIRHOME-150,
      no para el 300 — las dejé como "a confirmar" en vez de inventarlas.
   Mismo patrón de sidebar / modal / grid que el resto de los catálogos. */

const WA_NUMBER = "5493535690667";
const wa = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

/* ---------------------------------------------------------
   DATOS DE PRODUCTO
   --------------------------------------------------------- */
const EQ_PRODUCTS = [

  {
    id: "sodeca-airhome",
    gallery: [
      { src: "img/ventilacion/sodeca-airhome-frente.webp", alt: "Sodeca AIRHOME — vista frontal del recuperador de calor" },
      { src: "img/ventilacion/sodeca-airhome-3-4.webp", alt: "Sodeca AIRHOME — vista de las bocas de conexión" },
      { src: "img/ventilacion/sodeca-airhome-conexion.webp", alt: "Sodeca AIRHOME — detalle de la boca de conexión de conducto" },
    ],
    brand: "Sodeca",
    line: "AIRHOME — Doble Flujo con Recuperador de Calor",
    name: "Sodeca AIRHOME",
    model: "AIRHOME-300",
    capacityLabel: "Serie AIRHOME-300",
    price: 7433, // Precio en USD — incluye equipo + materiales de instalación. Mano de obra de instalación: a confirmar (siempre la hace DAClimaTECH)
    currency: "USD",
    isNew: true,
    features: ["Recuperador de calor 85-90% eficiencia", "Motores EC Technology", "By-pass incorporado", "Filtros F7 extraíbles", "26 dB(A) — muy silencioso", "Certificación Passive House Institute"],
    type: "Doble flujo con recuperador de calor",
    description: "Recuperador de calor para ventilación mecánica controlada (VMC) de doble flujo: extrae el aire viciado de baños y cocina, aportando aire fresco filtrado a dormitorios y living, cruzando ambos flujos en un intercambiador de placas a contraflujo que recupera hasta el 90% de la energía térmica antes de expulsar el aire. Ideal para viviendas pasivas, certificado por el Passive House Institute. Puede instalarse en falso techo o pared, con bocas intercambiables según la posición del equipo.",
    specs: {
      "Sistema": "Doble flujo con recuperación de calor (VMC)",
      "Intercambiador": "Placas a contraflujo, 85-90% de eficiencia térmica, sin fugas entre circuitos",
      "Motores": "EC Technology",
      "Filtros": "F7 extraíbles",
      "Nivel sonoro": "26 dB(A)",
      "Dimensiones": "A confirmar",
      "Instalación": "Falso techo o pared",
      "Certificación": "Passive House Institute — ideal para viviendas pasivas",
      "Control": "Compatible con Modbus RTU; control opcional Smarthome-Aidoo Pro (app, sondas de CO₂, temperatura y humedad)",
      "Modelos de la serie": "AIRHOME-150 / 150E / 150R (reversible) / 200 / 200E / 300 / 300E / 350V"
    },
    installInfo: "La instalación de equipos AIRHOME es siempre a cargo de técnicos certificados DAClimaTECH — no se vende sin instalación. El costo de la mano de obra se cotiza aparte.",
  }

];

function productImages(p) {
  if (Array.isArray(p.gallery) && p.gallery.length) return p.gallery;
  return [{ src: p.image || "", alt: `${p.brand} ${p.name}` }];
}

/* ---------------------------------------------------------
   TÍTULO SEO
   --------------------------------------------------------- */
function seoTitle(p) {
  return `${p.name} ${p.model} — ${p.type}`.replace(/\s+/g, " ").trim();
}

/* ---------------------------------------------------------
   Nota: sin formatPrice — esta página no muestra precio en
   ningún lado (ver comentario de cabecera).
   --------------------------------------------------------- */

/* ---------------------------------------------------------
   FILTROS — set propio para ventilación (Marca / Tipo), simple
   por ahora porque solo hay un producto cargado; se amplía
   cuando sumemos más líneas (simple flujo, extractores, etc.).
   --------------------------------------------------------- */
const FILTER_DEFS = [
  { key: "brand", label: "Marca", options: ["Sodeca"] },
  { key: "type", label: "Tipo", options: ["Doble flujo con recuperador de calor", "Simple flujo", "Extractor", "Accesorio"] },
];

const filterState = { brand: "", type: "" };

function countForOption(key, value) {
  return EQ_PRODUCTS.filter(p => {
    if (key !== "brand" && filterState.brand && p.brand !== filterState.brand) return false;
    if (key !== "type" && filterState.type && p.type !== filterState.type) return false;

    if (key === "brand") return p.brand === value;
    if (key === "type") return p.type === value;
    return true;
  }).length;
}

function getFilteredProducts() {
  return EQ_PRODUCTS.filter(p => {
    if (filterState.brand && p.brand !== filterState.brand) return false;
    if (filterState.type && p.type !== filterState.type) return false;
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
  el.innerHTML = `<strong>${n}</strong> equipo${n === 1 ? "" : "s"} de ventilación`;
}

/* ---------------------------------------------------------
   SIDEBAR: construcción y estado (idéntico al resto de catálogos)
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
   SIDEBAR MOBILE: panel deslizable (idéntico al resto)
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
   RENDER DE CARDS
   --------------------------------------------------------- */
const productGrid = document.getElementById("productGrid");
const modal = document.getElementById("productModal");

function priceBlockCard(p) {
  return `
        <div class="eq-product-price">
          <div class="eq-price-row">
            <strong>Consultar precio</strong>
          </div>
        </div>`;
}

function productCard(p) {
  const images = productImages(p);
  const arrows = images.length > 1 ? `
        <button class="eq-product-arrow eq-product-arrow--prev" type="button" data-arrow="prev" aria-label="Foto anterior">‹</button>
        <button class="eq-product-arrow eq-product-arrow--next" type="button" data-arrow="next" aria-label="Foto siguiente">›</button>
        <div class="eq-product-dots">${images.map((_, i) => `<span class="eq-product-dot${i === 0 ? " is-active" : ""}"></span>`).join("")}</div>
  ` : "";
  return `
    <article class="eq-product" data-product="${p.id}" data-brand="${p.brand}" data-type="${p.type}">
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

        ${priceBlockCard(p)}

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
        <a href="${wa("Hola DAClimaTECH, no encontré el equipo de ventilación que buscaba en la web, ¿me ayudan?")}" target="_blank" rel="noopener">consultanos por WhatsApp</a>.</p>
      </div>`;
    return;
  }
  productGrid.innerHTML = products.map(productCard).join("");
}

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

  // Clip 1: Consultar precio → cotización por proyecto.
  document.getElementById("modalDelivery").href =
    wa(`Hola DAClimaTECH, quiero cotizar ${p.brand} ${p.name} (${p.model}) para mi proyecto. ¿Me pasan precio?`);
  // Clip 2: Instalación del equipo por DAClimaTECH (se vende junto con la instalación).
  document.getElementById("modalPickup").href =
    wa(`Hola DAClimaTECH, quiero coordinar la instalación de ${p.brand} ${p.name} (${p.model}).`);

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