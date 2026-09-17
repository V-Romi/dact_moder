/* DAClimaTECH — Catálogo completo de Calefacción
   JS aislado, calcado de catalogo-aerotermia.js. Dos diferencias grandes
   respecto a AC/Aerotermia:
   1) Ninguno de estos 6 productos tiene precio propio de DAClimaTECH
      todavía (no hay Excel armado). Los campos price/priceApprox de
      cada producto son un APROXIMADO DE MERCADO sacado de otros
      distribuidores (Pronto Distribuidora, Full Calor, ClimaGas,
      MercadoLibre), sacado de otros distribuidores — NO es el
      costo/margen real de DAClimaTECH. A pedido de Ro, ese precio
      NO se muestra en la card ni en el modal: en ambos se ve
      simplemente "Consultar precio". Los campos price/priceApprox
      quedan en los datos por si sirven de referencia interna, pero
      ya no se leen para renderizar nada.
      ⚠️ Cuando esté el precio real de DAClimaTECH, actualizar
      priceBlockCard() y el bloque de precio del modal para mostrarlo
      (ver TODO en cada producto, con la fuente de cada estimado).
   2) El set de filtros es distinto al de AC/Aerotermia (Marca / Tipo /
      Color) porque acá conviven productos muy heterogéneos (placa de
      piso radiante, radiadores por elemento y toalleros) que no
      comparten "capacidad" ni "tecnología" de forma comparable. No hay
      ordenar-por-precio (se sacó del <select> junto con el precio
      visible, ver punto 1).

   Specs técnicas sacadas de las fichas oficiales de Datos Técnicos que
   compartió Ro para cada producto (placa Novafix, radiadores Nereus
   500/350, toallero Nereus 80). */

const WA_NUMBER = "5493534089909";
const wa = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

/* ---------------------------------------------------------
   DATOS DE PRODUCTO — TODO: reemplazar price por el precio real de
   DAClimaTECH (costo + margen) cuando esté armado el Excel; sacar
   priceApprox. Cada producto trae la fuente del precio aproximado
   en su comentario.
   --------------------------------------------------------- */
const EQ_PRODUCTS = [

  {
    id: "novafix-placa-suelo-radiante",
    gallery: [
      { src: "img/calefaccion/novafix-placa-beneficios.webp", alt: "Beneficios de la Placa de Aislación y Fijación para suelo radiante" },
      { src: "img/calefaccion/novafix-placa-instalada.webp", alt: "Placa de suelo radiante Novafix instalada, con cañería PERT" },
      { src: "img/calefaccion/novafix-placa-dimensiones.webp", alt: "Placa de suelo radiante Novafix, 730 x 1150 mm" },
      { src: "img/calefaccion/novafix-placa-detalle-teton.webp", alt: "Detalle de tetón y cañería PERT de la placa Novafix" },
      { src: "img/calefaccion/novafix-placa-ventajas.webp", alt: "Ventajas de la Placa de Aislación y Fijación Novafix" },
      { src: "img/calefaccion/novafix-placa-esquema-instalacion.webp", alt: "Esquema de instalación de suelo radiante con placa Novafix" },
      { src: "img/calefaccion/novafix-placa-datos-tecnicos.webp", alt: "Datos técnicos Placa de suelo radiante Novafix" },
    ],
    brand: "Nova Clima",
    line: "Suelo Radiante",
    name: "Placa Suelo Radiante \"Novafix\"",
    model: "Novafix",
    capacityLabel: "Densidad 20-25 kg/m³",
    price: 20000, // ⚠️ APROXIMADO DE MERCADO (no es precio DAClimaTECH) — ref: "Placa EPS c/tetones Isofloor Estisol" ~$20.000, MercadoLibre
    priceApprox: true,
    isNew: true,
    features: ["Reemplaza Telgopor + malla sima", "Fijación de cañería sin puentes térmicos", "Instalación hasta 3 veces más rápida"],
    type: "Piso radiante",
    color: null,
    description: "Placa de poliestireno expandido (EPS) de alta densidad para instalaciones de suelo radiante. Sus tetones circulares, separados en intervalos regulares, arman una grilla simétrica que ordena la colocación de la cañería PERT sin necesidad de malla sima, acelerando la instalación, evitando puentes térmicos y logrando una excelente aislación (bajo coeficiente de conductividad térmica).",
    specs: {
      "Material": "Poliestireno expandido (EPS)",
      "Densidad": "20 kg/m³ y 25 kg/m³",
      "Medidas": "730 × 1150 × 47 mm (placa)",
      "Diámetro de tetones": "Ø 53 mm",
      "Separación entre tetones": "70 mm de eje a eje",
      "Altura de tetones": "23 mm",
      "Peso aproximado": "535 g por placa"
    },
    installInfo: "La instalación de este producto debe estar a cargo de un instalador, para garantizar su correcto funcionamiento y no perder la garantía del fabricante. En DAClimaTECH te cotizamos la instalación según tu proyecto — consultanos por WhatsApp.",
  },
  {
    id: "nereus-radiador-500-elemento",
    gallery: [
      { src: "img/calefaccion/nereus-500-caracteristicas.webp", alt: "Características Radiador Nereus 500" },
      { src: "img/calefaccion/nereus-radiador-4secciones.webp", alt: "Radiador Bimetálico Nereus, 4 secciones armadas" },
      { src: "img/calefaccion/nereus-radiador-elemento.webp", alt: "Radiador Bimetálico Nereus, elemento individual" },
      { src: "img/calefaccion/nereus-500-datos-tecnicos.webp", alt: "Datos técnicos Radiador Nereus 500" },
    ],
    brand: "Nova Clima",
    line: "Radiadores Bimetálicos",
    name: "Radiador Bimetálico Nereus 500",
    model: "Nereus 500",
    capacityLabel: "Por elemento — armado de 2 a 12 secciones",
    price: 23000, // ⚠️ APROXIMADO DE MERCADO (no es precio DAClimaTECH) — por elemento, ref: Full Calor $21.802,50 / $24.225 por elemento
    priceApprox: true,
    isNew: false,
    features: ["56% acero + 44% aluminio", "E-coating anticorrosión", "Garantía 10 años", "Armado de 2 a 12 secciones"],
    type: "Radiador",
    color: "Blanco",
    description: "Radiador bimetálico (56% acero + 44% aluminio) de diseño italiano, pintado por electroforesis (E-coating) para mayor protección anticorrosiva. Se vende y arma por elemento, de 2 a 12 secciones según la potencia que necesite el ambiente — consultanos la cantidad de secciones recomendada para tu espacio.",
    specs: {
      "Composición": "56% acero + 44% aluminio",
      "Distancia entre ejes": "500 mm",
      "Dimensiones por elemento": "560 × 78 × 80 mm",
      "Potencia térmica nominal": "143 W por elemento (ΔT=70°C)",
      "Presión de trabajo": "2,0 MPa",
      "Conexión": "Niple de acero inoxidable 1/2\" rosca macho",
      "Certificaciones": "ISO 9001, ISO 14001, CE, GOST",
      "Garantía": "10 años",
      "Armado": "De 2 a 12 secciones — precio por elemento"
    },
    installInfo: "La instalación de este producto debe estar a cargo de un instalador, para garantizar su correcto funcionamiento y no perder la garantía del fabricante. En DAClimaTECH te cotizamos la instalación según tu proyecto — consultanos por WhatsApp.",
  },
  {
    id: "nereus-radiador-350-12sec",
    gallery: [
      { src: "img/calefaccion/nereus-350-caracteristicas.webp", alt: "Características Radiador Nereus 350" },
      { src: "img/calefaccion/nereus-350-datos-tecnicos.webp", alt: "Datos técnicos Radiador Nereus 350" },
    ],

    brand: "Nova Clima",
    line: "Radiadores Bimetálicos",
    name: "Radiador Bimetálico Nereus 350 (12 secciones)",
    model: "Nereus 350",
    capacityLabel: "12 secciones —≈1.416 W",
    price: 234000, // ⚠️ APROXIMADO DE MERCADO (no es precio DAClimaTECH) — estimado: ~$19.500/elemento (proporcional al Nereus 500) x 12 secciones. Ojo: un distribuidor (Pronto Distribuidora) lista un "Nereus 350" armado a $538.374–$672.968, muy por encima de este estimado — posible otra cantidad de secciones o dato inconsistente, revisar antes de publicar
    priceApprox: true,
    isNew: false,
    features: ["56% acero + 44% aluminio", "E-coating anticorrosión", "Garantía 10 años", "Armado de fábrica, 12 secciones"],
    type: "Radiador",
    color: "Blanco",
    description: "Radiador bimetálico (56% acero + 44% aluminio) armado de fábrica en 12 secciones, de diseño italiano y pintado por electroforesis (E-coating) para mayor protección anticorrosiva. Ideal para ambientes que necesitan mayor potencia sin combinar elementos sueltos.",
    specs: {
      "Composición": "56% acero + 44% aluminio",
      "Distancia entre ejes": "350 mm",
      "Dimensiones por elemento": "406 × 78 × 80 mm",
      "Potencia térmica nominal": "118 W por elemento (ΔT=70°C) — ≈1.416 W total (12 secciones)",
      "Peso por elemento": "0,85 kg",
      "Contenido de agua": "0,17 L por elemento",
      "Presión de trabajo / prueba": "2,0 MPa / 3,0 MPa",
      "Certificaciones": "ISO 9001, ISO 14001, CE, GOST",
      "Garantía": "10 años"
    },
    installInfo: "La instalación de este producto debe estar a cargo de un instalador, para garantizar su correcto funcionamiento y no perder la garantía del fabricante. En DAClimaTECH te cotizamos la instalación según tu proyecto — consultanos por WhatsApp.",
  },
  {
    id: "nereus-toallero-80-blanco",
    gallery: [
      { src: "img/calefaccion/nereus-toallero-80-caracteristicas.webp", alt: "Características Toallero Nereus 80" },
      { src: "img/calefaccion/nereus-toallero-80-blanco.webp", alt: "Toallero Curvo Nereus 80 Blanco, 800x500mm" },
      { src: "img/calefaccion/nereus-toallero-80-datos-tecnicos.webp", alt: "Datos técnicos Toallero Nereus 80" },
    ],
    brand: "Nova Clima",
    line: "Toalleros",
    name: "Toallero Curvo Nereus 80",
    model: "Nereus 80 Blanco",
    capacityLabel: "800 × 500 mm",
    price: 113680, // ⚠️ APROXIMADO DE MERCADO (no es precio DAClimaTECH) — ref: Pronto Distribuidora, "Toallero Curvo Nereus 80 NovaClima Blanco 800x500mm" $113.679,80
    priceApprox: true,
    isNew: true,
    features: ["Conexión a calefacción central", "Diseño curvo", "Color blanco"],
    type: "Toallero",
    color: "Blanco",
    description: "Toallero radiador curvo para baño, conectado al sistema de calefacción central por agua. Mantiene el ambiente cálido y las toallas secas. Incluye soporte, tapones y grifo de purga.",
    specs: {
      "Dimensiones": "800 × 500 × 13 mm",
      "Distancia entre conexiones": "450 mm",
      "Material": "Acero",
      "Color": "Blanco",
      "Conexión": "1/2\"",
      "Incluye": "Soporte, tapones y grifo de purga",
      "Peso": "4,63 kg"
    },
    installInfo: "Este producto lo podés instalar vos mismo siguiendo el manual del fabricante. Pedinos el manual por WhatsApp y, si preferís, también te podemos recomendar instaladores de confianza en tu zona.",
  },
  {
    id: "nereus-toallero-80-negro",
    gallery: [
      { src: "img/calefaccion/nereus-toallero-80-caracteristicas.webp", alt: "Características Toallero Nereus 80" },
      { src: "img/calefaccion/nereus-toallero-80-negro.webp", alt: "Toallero Curvo Nereus 80 Negro, 800x500mm" },
      { src: "img/calefaccion/nereus-toallero-80-datos-tecnicos.webp", alt: "Datos técnicos Toallero Nereus 80" },
    ],
    brand: "Nova Clima",
    line: "Toalleros",
    name: "Toallero Curvo Nereus 80",
    model: "Nereus 80 Negro",
    capacityLabel: "800 × 500 mm",
    price: 113680, // ⚠️ APROXIMADO DE MERCADO (no es precio DAClimaTECH) — mismo valor de referencia que el blanco (no se encontró listado propio en negro), a confirmar
    priceApprox: true,
    isNew: true,
    features: ["Conexión a calefacción central", "Diseño curvo", "Color negro"],
    type: "Toallero",
    color: "Negro",
    description: "Toallero radiador curvo para baño, conectado al sistema de calefacción central por agua. Mantiene el ambiente cálido y las toallas secas. Incluye soporte, tapones y grifo de purga.",
    specs: {
      "Dimensiones": "800 × 500 × 13 mm",
      "Distancia entre conexiones": "450 mm",
      "Material": "Acero",
      "Color": "Negro",
      "Conexión": "1/2\"",
      "Incluye": "Soporte, tapones y grifo de purga",
      "Peso": "4,63 kg"
    },
    installInfo: "Este producto lo podés instalar vos mismo siguiendo el manual del fabricante. Pedinos el manual por WhatsApp y, si preferís, también te podemos recomendar instaladores de confianza en tu zona.",
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
  return `${p.name} ${p.brand.toUpperCase()} — ${p.capacityLabel}`.replace(/\s+/g, " ").trim();
}

/* ---------------------------------------------------------
   PRECIO APROXIMADO DE MERCADO — sin costo/margen propio de
   DAClimaTECH todavía; se muestra un solo precio de referencia
   (sin tachado/% OFF/cuotas) con la leyenda de "aproximado".
   --------------------------------------------------------- */
function formatPrice(n) {
  return `$${n.toLocaleString("es-AR")}`;
}

/* ---------------------------------------------------------
   FILTROS — set propio para calefacción (Marca / Tipo / Color),
   sin capacidad ni precio porque los productos son demasiado
   heterogéneos entre sí y todavía no hay precios reales.
   --------------------------------------------------------- */
const FILTER_DEFS = [
  { key: "brand", label: "Marca", options: ["Nova Clima", "Giacomini"] },
  { key: "type", label: "Tipo", options: ["Piso radiante", "Accesorio piso radiante", "Radiador", "Toallero"] },
  { key: "color", label: "Color", options: ["Blanco", "Negro"] },
];

const filterState = { brand: "", type: "", color: "" };

function matchesColor(value, color) {
  if (color == null) return false; // productos sin color propio (placa): no matchean ningún filtro de color
  return color === value;
}

function countForOption(key, value) {
  return EQ_PRODUCTS.filter(p => {
    if (key !== "brand" && filterState.brand && p.brand !== filterState.brand) return false;
    if (key !== "type" && filterState.type && p.type !== filterState.type) return false;
    if (key !== "color" && filterState.color && !matchesColor(filterState.color, p.color)) return false;

    if (key === "brand") return p.brand === value;
    if (key === "type") return p.type === value;
    if (key === "color") return matchesColor(value, p.color);
    return true;
  }).length;
}

function getFilteredProducts() {
  return EQ_PRODUCTS.filter(p => {
    if (filterState.brand && p.brand !== filterState.brand) return false;
    if (filterState.type && p.type !== filterState.type) return false;
    if (filterState.color && !matchesColor(filterState.color, p.color)) return false;
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
  el.innerHTML = `<strong>${n}</strong> producto${n === 1 ? "" : "s"} de calefacción`;
}

/* ---------------------------------------------------------
   SIDEBAR: construcción y estado (idéntico a AC/Aerotermia)
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
   SIDEBAR MOBILE: panel deslizable (idéntico a AC/Aerotermia)
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
   RENDER DE CARDS — sin precio: se muestra "Consultar precio"
   (a pedido de Ro, hasta tener precio propio de DAClimaTECH)
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
        <p class="eq-capacity">${p.capacityLabel} · ${p.model}</p>

        <div class="eq-features">
          ${p.features.map(f => `<span class="eq-feature-dot">${f}</span>`).join("")}
        </div>

        ${priceBlockCard(p)}

        <div class="eq-install">
          <span>✓</span>
          <div><strong>Instalación disponible según proyecto</strong></div>
        </div>

        <button class="eq-product-btn" type="button" data-product="${p.id}">
          Ver producto <span>→</span>
        </button>
      </div>
    </article>
  `;
}

function renderProducts(products) {
  if (!products.length) {
    productGrid.innerHTML = `
      <div class="eq-empty-state" role="status">
        <p>No encontramos productos con esos filtros. Probá ajustar la búsqueda o
        <a href="${wa("Hola DAClimaTECH, no encontré el producto de calefacción que buscaba en la web, ¿me ayudan?")}" target="_blank" rel="noopener">consultanos por WhatsApp</a>.</p>
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
   MODAL / FICHA DE PRODUCTO — sin precio: se muestra "Consultar
   precio" (a pedido de Ro, hasta tener precio propio de DAClimaTECH)
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

  // Sin precio propio todavía: se muestra "Consultar precio" (ver modalPrice en el HTML).

  document.getElementById("modalDescription").textContent = p.description;

  document.getElementById("modalFeatures").innerHTML =
    p.features.map(f => `<li>${f}</li>`).join("");

  document.getElementById("modalSpecs").innerHTML =
    Object.entries(p.specs).map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");

  document.getElementById("modalInstallInfo").textContent = p.installInfo;

  // Único clip de entrega: retirar en tienda (se sacaron envío a domicilio
  // e instalación a pedido de Ro).
  document.getElementById("modalPickup").href =
    wa(`Hola DAClimaTECH, quiero consultar precio y disponibilidad en tienda de ${p.brand} ${p.name} para retirar personalmente.`);

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
   Ningún producto de esta página tiene precio propio
   confirmado (la tarjeta siempre muestra "Consultar precio";
   el campo "price" interno es solo una referencia aproximada
   de mercado, no el precio de DAClimaTECH). Por eso no se
   publica ningún Product/Offer acá: no queremos que Google
   muestre un precio que no coincide con lo que ve el usuario.
   Cuando carguemos precios reales, sacar este early-return y
   usar el mismo criterio que catalogo-insumos.js.
   --------------------------------------------------------- */
function injectProductJsonLd() {
  const pricedProducts = EQ_PRODUCTS.filter(p => p.price != null && !p.priceApprox);
  if (!pricedProducts.length) return;

  const itemListElement = pricedProducts.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: `${p.brand} ${p.name}`,
      brand: { "@type": "Brand", name: p.brand },
      description: p.description,
      image: `https://daclimatech.com/${productImages(p)[0].src}`,
      url: "https://daclimatech.com/catalogo-calefaccion.html",
      offers: {
        "@type": "Offer",
        price: p.price,
        priceCurrency: "ARS",
        availability: "https://schema.org/InStock",
        url: "https://daclimatech.com/catalogo-calefaccion.html"
      }
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