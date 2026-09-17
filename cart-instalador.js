/* ============================================================
   DAClimaTECH — Carrito de pedido para catálogos instalador
   ------------------------------------------------------------
   Módulo COMPARTIDO: el mismo archivo sirve para los 4 catálogos
   instalador (aire acondicionado, aerotermia, comercial, insumos)
   sin modificarlo — cada catálogo ya define, antes de este script:
     - EQ_PRODUCTS   (array de productos DE ESE catálogo)
     - getPricing(p) (devuelve {hasPrice, final, original, discountPct})
     - formatPrice(n)
     - wa(text)      (arma el link de WhatsApp)
   Y agrega, en la página, ANTES de cargar este archivo:
     <script>const CART_CATALOG_ID = "aire-acondicionado";</script>
   Opcional: const INSTALADOR_EMPRESA = "..."; para firmar el mensaje.

   ------------------------------------------------------------
   CARRITO ÚNICO (no uno por catálogo): el pedido vive en UNA sola
   clave de localStorage, compartida por los 4 catálogos — agregar
   un producto en Aerotermia y después otro en Insumos los junta en
   el mismo pedido. Cada línea se guarda con clave compuesta
   "<catalogo>::<id>" para no pisar productos de distinto catálogo
   que compartan id.

   PRECIO: cada línea guarda un "snapshot" del precio al momento de
   agregarla (para poder mostrar algo cuando se ve el carrito desde
   OTRO catálogo, cuyo EQ_PRODUCTS no está cargado acá). Pero si la
   línea pertenece al catálogo que se está mirando en este momento
   (CART_CATALOG_ID), se recalcula el precio en vivo contra
   getPricing() — así siempre se ve el precio más actual disponible
   en la página donde estás. Ese precio recalculado también se
   guarda como nuevo snapshot, para que la próxima vez que se abra
   el carrito desde otro catálogo muestre el dato más fresco posible.

   Todo el estado vive en localStorage (nada de red / fetch), y el
   render es delegado (un solo listener por tipo de evento) para no
   pesarle a páginas con 60+ productos.
   ============================================================ */
(function () {
  "use strict";

  if (typeof EQ_PRODUCTS === "undefined" || typeof getPricing !== "function") {
    console.warn("cart-instalador.js: cargá este script DESPUÉS del JS de catálogo (EQ_PRODUCTS/getPricing no están definidos).");
    return;
  }

  const CATALOG_ID = (typeof CART_CATALOG_ID !== "undefined" && CART_CATALOG_ID) ? CART_CATALOG_ID : "default";
  const STORAGE_KEY = "dac_cart_v2"; // v2: carrito único global (antes: uno por catálogo, dac_cart_v1_<catalogo>)
  const EMPRESA = (typeof INSTALADOR_EMPRESA !== "undefined" && INSTALADOR_EMPRESA) ? INSTALADOR_EMPRESA : "";
  // El pedido del carrito siempre va al WhatsApp exclusivo de instaladores
  // (WA_INSTALLER_NUMBER, definido en cada catalogo-*-instalador.js), nunca
  // al número general del sitio (WA_NUMBER) que usan los otros botones.
  const CART_WA_NUMBER = (typeof WA_INSTALLER_NUMBER !== "undefined" && WA_INSTALLER_NUMBER)
    ? WA_INSTALLER_NUMBER
    : WA_NUMBER;
  const cartWa = (text) => `https://wa.me/${CART_WA_NUMBER}?text=${encodeURIComponent(text)}`;

  // Nombres legibles por catálogo, para agrupar el mensaje de WhatsApp
  // y mostrar de dónde es cada línea cuando el pedido es mixto.
  const CATALOG_LABELS = {
    "aire-acondicionado": "Aire Acondicionado",
    "aerotermia": "Aerotermia",
    "comercial": "Comercial / Profesional",
    "insumos": "Insumos y Accesorios",
  };
  const catalogLabel = (id) => CATALOG_LABELS[id] || id;

  /* ---------------------------------------------------------
     ESTADO — un solo objeto para TODO el sitio:
       { "<catalogId>::<productId>": { catalogId, id, brand, name,
         model, qty, unitPriceSnapshot } }
     --------------------------------------------------------- */
  function cartKey(catalogId, id) { return `${catalogId}::${id}`; }

  function loadCart() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : {};
      return (parsed && typeof parsed === "object") ? parsed : {};
    } catch (e) {
      return {};
    }
  }
  function saveCart() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); }
    catch (e) { /* localStorage lleno/deshabilitado: seguimos solo en memoria */ }
  }

  let cart = loadCart();

  function findProduct(id) {
    return EQ_PRODUCTS.find(p => p.id === id);
  }

  // Agrega `qty` unidades de un producto DE ESTE catálogo (el único
  // caso posible: el botón "Agregar al pedido" solo existe en cards/
  // modal de productos que ya están cargados en EQ_PRODUCTS de la
  // página actual).
  function addToCart(id, qty) {
    const p = findProduct(id);
    if (!p) return;
    const pricing = getPricing(p);
    const key = cartKey(CATALOG_ID, id);
    const prevQty = cart[key] ? cart[key].qty : 0;
    cart[key] = {
      catalogId: CATALOG_ID,
      id,
      brand: p.brand,
      name: p.name,
      model: p.model,
      qty: prevQty + qty,
      unitPriceSnapshot: pricing.hasPrice ? pricing.final : null,
    };
    saveCart();
    renderAll();
  }

  function setQtyByKey(key, qty) {
    qty = Math.max(0, Math.floor(Number(qty) || 0));
    if (!cart[key]) return;
    if (qty === 0) delete cart[key];
    else cart[key].qty = qty;
    saveCart();
    renderAll();
  }
  function stepByKey(key, delta) {
    if (!cart[key]) return;
    setQtyByKey(key, cart[key].qty + delta);
  }
  function clearCart() {
    cart = {};
    saveCart();
    renderAll();
  }

  // Devuelve las líneas del carrito CON el precio más actual posible:
  // si la línea es del catálogo que se está mirando ahora, se
  // recalcula en vivo contra getPricing() (y se refresca el snapshot
  // guardado); si es de otro catálogo, se usa el último snapshot
  // conocido.
  function cartLines() {
    let touched = false;
    const lines = Object.keys(cart).map(key => {
      const line = cart[key];
      let unitPrice = line.unitPriceSnapshot;
      if (line.catalogId === CATALOG_ID) {
        const p = findProduct(line.id);
        if (p) {
          const pricing = getPricing(p);
          unitPrice = pricing.hasPrice ? pricing.final : null;
          if (unitPrice !== line.unitPriceSnapshot) {
            line.unitPriceSnapshot = unitPrice;
            touched = true;
          }
        }
      }
      return {
        key, catalogId: line.catalogId, id: line.id,
        brand: line.brand, name: line.name, model: line.model, qty: line.qty,
        unitPrice, subtotal: unitPrice != null ? unitPrice * line.qty : null,
      };
    });
    if (touched) saveCart(); // guardamos el precio refrescado, sin re-renderizar (evita loop)
    return lines;
  }

  function cartCount() {
    return Object.values(cart).reduce((a, l) => a + l.qty, 0);
  }
  function cartTotal() {
    return cartLines().reduce((sum, l) => sum + (l.subtotal || 0), 0);
  }
  function cartHasUnpriced() {
    return cartLines().some(l => l.unitPrice == null);
  }

  /* ---------------------------------------------------------
     MENSAJE DE WHATSAPP — agrupado por catálogo cuando el pedido
     mezcla más de uno, para que sea fácil de leer del otro lado.
     --------------------------------------------------------- */
  function buildOrderMessage() {
    const lines = cartLines();
    const empresaTxt = EMPRESA ? ` — ${EMPRESA}` : "";
    let msg = `Hola DAClimaTECH! Soy instalador${empresaTxt}. Quiero hacer este pedido:\n\n`;

    const catalogIds = [...new Set(lines.map(l => l.catalogId))];
    const multiCatalog = catalogIds.length > 1;
    let n = 1;
    catalogIds.forEach(catId => {
      if (multiCatalog) msg += `— ${catalogLabel(catId).toUpperCase()} —\n`;
      lines.filter(l => l.catalogId === catId).forEach(l => {
        const precioTxt = l.unitPrice != null
          ? `${formatPrice(l.unitPrice)} c/u — Subtotal: ${formatPrice(l.subtotal)}`
          : "a cotizar";
        msg += `${n}. ${l.brand} ${l.name} — SKU ${l.model}\n   Cantidad: ${l.qty} — ${precioTxt}\n\n`;
        n++;
      });
    });

    if (lines.length) {
      const totalLabel = cartHasUnpriced() ? "TOTAL parcial (sin ítems a cotizar)" : "TOTAL";
      msg += `${totalLabel}: ${formatPrice(cartTotal())}\n\n`;
    }
    msg += "¿Me confirman disponibilidad y coordinamos?";
    return msg;
  }

  /* ---------------------------------------------------------
     UI: barra flotante + panel lateral
     --------------------------------------------------------- */
  let drawer, backdrop;

  function buildRootUI() {
    let root = document.getElementById("cartRoot");
    if (!root) {
      root = document.createElement("div");
      root.id = "cartRoot";
      document.body.appendChild(root);
    }
    root.innerHTML = `
      <button type="button" class="dac-cart-bar" id="dacCartBar" aria-label="Ver pedido">
        <i class="ti ti-shopping-cart" aria-hidden="true"></i>
        <span class="dac-cart-bar-count" id="dacCartCount">0</span>
        <span class="dac-cart-bar-label">Mi pedido</span>
        <span class="dac-cart-bar-total" id="dacCartBarTotal"></span>
      </button>
      <div class="dac-cart-backdrop" id="dacCartBackdrop"></div>
      <aside class="dac-cart-drawer" id="dacCartDrawer" aria-hidden="true" aria-label="Tu pedido">
        <div class="dac-cart-head">
          <strong>Tu pedido</strong>
          <button type="button" class="dac-cart-close" id="dacCartClose" aria-label="Cerrar">×</button>
        </div>
        <div class="dac-cart-lines" id="dacCartLines"></div>
        <div class="dac-cart-foot">
          <div class="dac-cart-total-row">
            <span>Total</span>
            <strong id="dacCartTotal">$0</strong>
          </div>
          <p class="dac-cart-note" id="dacCartNote" hidden>Algunos ítems son "a cotizar" y no suman al total — se detallan igual en el mensaje.</p>
          <button type="button" class="eq-secondary-btn" id="dacCartClear">Vaciar pedido</button>
          <a class="eq-primary-btn" id="dacCartSend" href="#" target="_blank" rel="noopener">
            Enviar pedido por WhatsApp <span>↗</span>
          </a>
        </div>
      </aside>
    `;

    drawer = document.getElementById("dacCartDrawer");
    backdrop = document.getElementById("dacCartBackdrop");

    document.getElementById("dacCartBar").addEventListener("click", openDrawer);
    document.getElementById("dacCartClose").addEventListener("click", closeDrawer);
    backdrop.addEventListener("click", closeDrawer);
    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && drawer.classList.contains("is-open")) closeDrawer();
    });
    document.getElementById("dacCartClear").addEventListener("click", () => {
      if (cartCount() && confirm("¿Vaciar todo el pedido?")) clearCart();
    });
    // Un único listener fijo (no uno nuevo por render): si el carrito
    // está vacío al momento del click, cancela la navegación.
    document.getElementById("dacCartSend").addEventListener("click", e => {
      if (!cartLines().length) e.preventDefault();
    });

    document.getElementById("dacCartLines").addEventListener("click", e => {
      const stepBtn = e.target.closest("[data-cart-step]");
      if (stepBtn) { stepByKey(stepBtn.dataset.key, Number(stepBtn.dataset.cartStep)); return; }
      const removeBtn = e.target.closest("[data-cart-remove]");
      if (removeBtn) setQtyByKey(removeBtn.dataset.key, 0);
    });
    document.getElementById("dacCartLines").addEventListener("change", e => {
      const input = e.target.closest("[data-cart-input]");
      if (input) setQtyByKey(input.dataset.key, input.value);
    });
  }

  function openDrawer() {
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    backdrop.classList.add("is-open");
    document.body.classList.add("dac-cart-open");
  }
  function closeDrawer() {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    backdrop.classList.remove("is-open");
    document.body.classList.remove("dac-cart-open");
  }

  function renderBar() {
    const count = cartCount();
    const bar = document.getElementById("dacCartBar");
    document.getElementById("dacCartCount").textContent = count;
    document.getElementById("dacCartBarTotal").textContent = cartTotal() > 0 ? formatPrice(cartTotal()) : "";
    bar.classList.toggle("is-empty", count === 0);
  }

  function renderDrawer() {
    const lines = cartLines();
    const wrap = document.getElementById("dacCartLines");
    const multiCatalog = new Set(lines.map(l => l.catalogId)).size > 1;
    if (!lines.length) {
      wrap.innerHTML = `<p class="dac-cart-empty">Todavía no agregaste equipos. Elegí la cantidad en cada producto y tocá "Agregar al pedido".</p>`;
    } else {
      wrap.innerHTML = lines.map(l => `
        <div class="dac-cart-line">
          <button type="button" class="dac-cart-line-remove" data-cart-remove data-key="${l.key}" aria-label="Quitar del pedido">×</button>
          <div class="dac-cart-line-info">
            ${multiCatalog ? `<span class="dac-cart-line-catalog">${catalogLabel(l.catalogId)}</span>` : ""}
            <strong>${l.brand} ${l.name}</strong>
            <span class="dac-cart-sku">SKU ${l.model}</span>
            <span class="dac-cart-line-price">${l.unitPrice != null ? formatPrice(l.unitPrice) + " c/u" : "A cotizar"}</span>
          </div>
          <div class="dac-cart-line-qty">
            <button type="button" data-cart-step="-1" data-key="${l.key}" aria-label="Restar uno">−</button>
            <input type="number" min="0" value="${l.qty}" data-cart-input data-key="${l.key}" aria-label="Cantidad">
            <button type="button" data-cart-step="1" data-key="${l.key}" aria-label="Sumar uno">+</button>
          </div>
          <div class="dac-cart-line-subtotal">${l.subtotal != null ? formatPrice(l.subtotal) : ""}</div>
        </div>
      `).join("");
    }
    document.getElementById("dacCartTotal").textContent = formatPrice(cartTotal());
    document.getElementById("dacCartNote").hidden = !cartHasUnpriced();
    const sendBtn = document.getElementById("dacCartSend");
    sendBtn.href = cartWa(buildOrderMessage());
    sendBtn.classList.toggle("is-disabled", !lines.length);
  }

  /* ---------------------------------------------------------
     Controles de cantidad + "Agregar al pedido" en cards y modal.
     Un único listener en capturing, en document: intercepta el
     click ANTES de que llegue al listener de la card (que abre el
     modal de producto al detectar [data-product] en el ancestro),
     así el widget de carrito nunca dispara la apertura del modal.
     --------------------------------------------------------- */
  function renderProductControls() {
    document.querySelectorAll("[data-cart-add]").forEach(btn => {
      const id = btn.dataset.cartAdd;
      if (!id) return;
      const line = cart[cartKey(CATALOG_ID, id)];
      const inCart = line ? line.qty : 0;
      btn.textContent = inCart ? `En el pedido (${inCart}) · Agregar más` : "Agregar al pedido";
      btn.classList.toggle("is-in-cart", Boolean(inCart));
    });
  }

  function handleCartWidgetClick(e) {
    const widget = e.target.closest("[data-cart-widget]");
    if (!widget) return;
    e.stopPropagation(); // nunca dejamos que esto abra el modal de producto

    const addBtn = e.target.closest("[data-cart-add]");
    if (addBtn) {
      e.preventDefault();
      const id = addBtn.dataset.cartAdd;
      const input = widget.querySelector("[data-cart-qty-input]");
      const qty = input ? Math.max(1, parseInt(input.value, 10) || 1) : 1;
      addToCart(id, qty);
      return;
    }
    const stepBtn = e.target.closest("[data-cart-widget-step]");
    if (stepBtn) {
      e.preventDefault();
      const input = widget.querySelector("[data-cart-qty-input]");
      const next = Math.max(1, (parseInt(input.value, 10) || 1) + Number(stepBtn.dataset.cartWidgetStep));
      input.value = next;
    }
  }

  function renderAll() {
    renderBar();
    renderDrawer();
    renderProductControls();
  }
  // Expuesto para que cada catálogo pueda llamarlo tras re-renderizar
  // su grilla de productos (los botones "Agregar al pedido" son nuevos
  // nodos del DOM cada vez que se filtra/ordena).
  window.dacCartRefresh = renderProductControls;

  function init() {
    buildRootUI();
    document.addEventListener("click", handleCartWidgetClick, true);
    renderAll();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
