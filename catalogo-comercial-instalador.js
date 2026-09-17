/* DAClimaTECH — Catálogo completo de Comercial / Profesional
   JS aislado, calcado del resto de catálogos (mismo patrón de sidebar /
   modal / grid). 62 productos: multisplit (unidad interior split pared,
   unidad interior ductado y unidad exterior), piso techo, baja silueta,
   cassette, sistema para conductos, conjunto de frío, rooftop y sistema
   VRF V8/Atom T (condensadoras, evaporadoras y accesorios) — Midea,
   Carrier y Surrey.

   VRF (17 productos, todos Midea): a pedido de Ro, agrupado por LÍNEA
   de producto en vez de por capacidad individual (el PDF traía más de
   130 modelos distintos contando cada capacidad por separado, quedaba
   inmanejable como 130 tarjetas sueltas). Cada tarjeta de condensadora
   o evaporadora representa una línea completa (ej. "Evaporadora VRF
   Cassette 4 Vías") y en specs.["Modelos y capacidades disponibles"]
   lista cada modelo individual con su capacidad (kW/HP), peso y
   dimensiones — nada se perdió, solo se compactó la
   presentación. 4 condensadoras (V8 Master Modular, V8 EasyFit Series,
   V8 Mini Trifásica, Atom T Monofásica — la primera no estaba en el
   pedido original, Ro la sumó después al ver las fotos que la
   correspondían), 11 evaporadoras (Hi Wall, Cassette 4/2/1 Vías +
   4 Vías Compacto, Ducto Baja/Media/Alta Presión, Consola Piso Techo,
   Vertical Floor Standing en sus 3 variantes) y 2 accesorios (el All In
   One Hydraulic Module; los 7 paneles decorativos de cassette se
   quitaron porque el PDF no traía foto de ninguno — Ro prefirió sacar
   esas tarjetas antes que dejarlas sin imagen). Specs (capacidad, peso,
   dimensiones, refrigerante) sacadas tal cual del
   "LP_Dealers_Midea_03-2026.pdf" que compartió Ro — no se inventó
   ningún dato. price: null en los 17, con priceNote: "Cotizar por
   proyecto" en vez de "Consultar precio" (ver más abajo cómo el
   render de precio usa p.priceNote cuando existe). La mayoría ya
   tiene foto real de Midea que fue mandando Ro; consultar cada bloque
   para ver cuáles siguen con gallery: [].
   type: "VRF — Condensadora" / "VRF — Evaporadora" / "VRF — Accesorios"
   (sumados al filtro de Tipo). No se creó tarjeta para "Atom T +
   Evaporadoras V8 + All In One Hydraulic Module": es un diagrama de
   sistema en el PDF, no un SKU — queda representado por sus 3
   componentes reales, cada uno con su propia tarjeta. Sin precio en
   ningún lado (ni en el bloque de precio ni en las specs): a pedido de
   Ro, el PDF traía precios de lista del fabricante en USD pero no son
   el precio final DAClimaTECH, así que se sacaron completamente —
   price: null, priceNote: "Cotizar por proyecto", y ninguna spec
   menciona precio ni en dólares ni en pesos.

   Precios: reales, sacados de Catalogo_web_aire_acondicionado_MASTER_v2.xlsx,
   hoja "Precios" (lista / efectivo 40% OFF / 6 cuotas — mismo criterio que
   el resto del sitio). Excepción: las 4 unidades interiores ductado
   Midea (MDA6MI-09/12/18/24HIW-01M) no tienen precio cargado en el Excel
   — quedan con price: null y la card/modal muestran "Consultar precio"
   en vez del bloque de precio con cuotas.

   Specs técnicas: para 19 de los 47 productos originales hay ficha
   completa en la hoja PRODUCTOS_WEB o MULTISPLIT_COMPONENTES del mismo
   Excel (dimensiones, peso, conectividad, garantía) y se cargaron tal
   cual. Para el resto — sobre todo las versiones ON/OFF de piso techo,
   baja silueta y cassette, más los sistemas para conductos, conjuntos de
   frío y rooftop — el Excel solo trae capacidad/tecnología/refrigerante
   en la descripción del precio; no inventé dimensiones ni pesos que no
   estaban ahí, quedan marcados como "Ficha técnica detallada: a
   confirmar con el fabricante". Las 4 unidades ductado nuevas sí tienen
   ficha completa, sacada de la hoja MULTISPLIT_COMPONENTES / el folleto
   "Folleto Multisplit HW + Ductado v6.pdf" que compartió Ro.

   Fotos: para los 11 productos Midea Multisplit Inverter Smart (4 unidad
   interior split pared, 4 unidad interior ductado, 3 unidad exterior)
   se usan fotos reales de marketing oficiales de Midea que compartió Ro
   — genéricas por tipo (misma foto para las 4 capacidades de cada
   tipología, ya que el folleto no trae foto diferenciada por modelo).
   Para el resto de los 40 productos, Ro pidió buscar imágenes de
   referencia en Google mientras manda las propias; no las embebí en el
   sitio (fotos de fabricante/terceros con derechos de autor, no
   corresponde subirlas a una web comercial ni yo tengo forma de
   descargarlas al entorno de archivos). Quedan los nombres de archivo
   de siempre en img/comercial/ para que subas las tuyas. */

const WA_NUMBER = "5493535690667";
const WA_INSTALLER_NUMBER = "5493534089909"; // Número exclusivo de instaladores — usado por el carrito de pedido
const wa = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

/* ---------------------------------------------------------
   DATOS DE PRODUCTO — generados desde el Excel (ver nota arriba)
   --------------------------------------------------------- */
const EQ_PRODUCTS = [
  {
    id: "midea-msagmi-09hiw-01m",
    gallery: [
      { src: "img/comercial/msagmi-split-pared-generico.webp", alt: "Midea Multisplit Inverter Smart — Unidad Interior Split Pared" },
    ],
    brand: "Midea",
    line: "Multisplit — Unidad Interior",
    name: "Midea Inverter Smart — Unidad Interior Multisplit",
    model: "MSAGMI-09HIW-01M",
    capacityLabel: "2270 kcal/h",
    capacityTR: null,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: false,
    features: ["Inverter", "SmartHome / Wi-Fi App"],
    technology: "Inverter",
    type: "Multisplit — Unidad Interior",
    refrigerant: "",
    description: "Unidad interior tipo split de pared para sistema multisplit. Se combina con una unidad exterior multisplit (de 2 a 5 unidades interiores según el modelo de exterior) para climatizar varios ambientes con una sola condensadora.",
    specs: {
      "Capacidad": "2270 kcal/h",
      "Tecnología": "Inverter",
      "Capacidad frío/calor": "2270 / 2640 kcal/h",
      "Tensión": "220 V",
      "Dimensiones": "726 x 210 x 291 mm",
      "Peso neto/bruto": "8,0 / 10,5 kg",
      "Cañerías": "1/4\" - 3/8\""
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "midea-msagmi-12hiw-01m",
    gallery: [
      { src: "img/comercial/msagmi-split-pared-generico.webp", alt: "Midea Multisplit Inverter Smart — Unidad Interior Split Pared" },
    ],
    brand: "Midea",
    line: "Multisplit — Unidad Interior",
    name: "Midea Inverter Smart — Unidad Interior Multisplit",
    model: "MSAGMI-12HIW-01M",
    capacityLabel: "3027 kcal/h",
    capacityTR: null,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: false,
    features: ["Inverter", "SmartHome / Wi-Fi App"],
    technology: "Inverter",
    type: "Multisplit — Unidad Interior",
    refrigerant: "",
    description: "Unidad interior tipo split de pared para sistema multisplit. Se combina con una unidad exterior multisplit (de 2 a 5 unidades interiores según el modelo de exterior) para climatizar varios ambientes con una sola condensadora.",
    specs: {
      "Capacidad": "3027 kcal/h",
      "Tecnología": "Inverter",
      "Capacidad frío/calor": "3027 / 3520 kcal/h",
      "Tensión": "220 V",
      "Dimensiones": "835 x 208 x 295 mm",
      "Peso neto/bruto": "8,7 / 11,5 kg",
      "Cañerías": "1/4\" - 3/8\""
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "midea-msagmi-18hiw-01m",
    gallery: [
      { src: "img/comercial/msagmi-split-pared-generico.webp", alt: "Midea Multisplit Inverter Smart — Unidad Interior Split Pared" },
    ],
    brand: "Midea",
    line: "Multisplit — Unidad Interior",
    name: "Midea Inverter Smart — Unidad Interior Multisplit",
    model: "MSAGMI-18HIW-01M",
    capacityLabel: "4541 kcal/h",
    capacityTR: null,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: false,
    features: ["Inverter", "SmartHome / Wi-Fi App"],
    technology: "Inverter",
    type: "Multisplit — Unidad Interior",
    refrigerant: "",
    description: "Unidad interior tipo split de pared para sistema multisplit. Se combina con una unidad exterior multisplit (de 2 a 5 unidades interiores según el modelo de exterior) para climatizar varios ambientes con una sola condensadora.",
    specs: {
      "Capacidad": "4541 kcal/h",
      "Tecnología": "Inverter",
      "Capacidad frío/calor": "4541 / 5280 kcal/h",
      "Tensión": "220 V",
      "Dimensiones": "969 x 241 x 320 mm",
      "Peso neto/bruto": "11,2 / 14,6 kg",
      "Cañerías": "1/4\" - 1/2\""
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "midea-msagmi-24hiw-01m",
    gallery: [
      { src: "img/comercial/msagmi-split-pared-generico.webp", alt: "Midea Multisplit Inverter Smart — Unidad Interior Split Pared" },
    ],
    brand: "Midea",
    line: "Multisplit — Unidad Interior",
    name: "Midea Inverter Smart — Unidad Interior Multisplit",
    model: "MSAGMI-24HIW-01M",
    capacityLabel: "5547 kcal/h",
    capacityTR: null,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: false,
    features: ["Inverter", "SmartHome / Wi-Fi App"],
    technology: "Inverter",
    type: "Multisplit — Unidad Interior",
    refrigerant: "",
    description: "Unidad interior tipo split de pared para sistema multisplit. Se combina con una unidad exterior multisplit (de 2 a 5 unidades interiores según el modelo de exterior) para climatizar varios ambientes con una sola condensadora.",
    specs: {
      "Capacidad": "5547 kcal/h",
      "Tecnología": "Inverter",
      "Capacidad frío/calor": "5547 / 6450 kcal/h",
      "Tensión": "220 V",
      "Dimensiones": "1083 x 244 x 336 mm",
      "Peso neto/bruto": "13,6 / 17,3 kg",
      "Cañerías": "3/8\" - 5/8\""
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "midea-mda6mi-09hiw-01m",
    gallery: [
      { src: "img/comercial/mda6mi-ductado-generico.webp", alt: "Midea Multisplit Inverter Smart — Unidad Interior Ductado" },
    ],
    brand: "Midea",
    line: "Multisplit — Unidad Interior Ductado",
    name: "Midea Inverter Smart — Unidad Interior Ductado Multisplit",
    model: "MDA6MI-09HIW-01M",
    capacityLabel: "2270 kcal/h",
    capacityTR: null,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: true,
    features: ["Inverter", "Incluye control remoto y control alámbrico LCD"],
    technology: "Inverter",
    type: "Multisplit — Unidad Interior",
    refrigerant: "",
    description: "Unidad interior tipo ductado (conductos) para sistema multisplit. Se combina con una unidad exterior multisplit (de 2 a 5 unidades interiores según el modelo de exterior) para climatizar varios ambientes con una sola condensadora, con salida de aire distribuida por conductos.",
    specs: {
      "Capacidad": "2270 kcal/h",
      "Tecnología": "Inverter",
      "Capacidad frío/calor": "2270 / 2640 kcal/h",
      "Tensión": "220 V",
      "Dimensiones": "700 x 506 x 200 mm",
      "Peso neto/bruto": "17,8 / 25 kg",
      "Cañerías": "1/4\" - 3/8\""
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "midea-mda6mi-12hiw-01m",
    gallery: [
      { src: "img/comercial/mda6mi-ductado-generico.webp", alt: "Midea Multisplit Inverter Smart — Unidad Interior Ductado" },
    ],
    brand: "Midea",
    line: "Multisplit — Unidad Interior Ductado",
    name: "Midea Inverter Smart — Unidad Interior Ductado Multisplit",
    model: "MDA6MI-12HIW-01M",
    capacityLabel: "3027 kcal/h",
    capacityTR: null,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: true,
    features: ["Inverter", "Incluye control remoto y control alámbrico LCD"],
    technology: "Inverter",
    type: "Multisplit — Unidad Interior",
    refrigerant: "",
    description: "Unidad interior tipo ductado (conductos) para sistema multisplit. Se combina con una unidad exterior multisplit (de 2 a 5 unidades interiores según el modelo de exterior) para climatizar varios ambientes con una sola condensadora, con salida de aire distribuida por conductos.",
    specs: {
      "Capacidad": "3027 kcal/h",
      "Tecnología": "Inverter",
      "Capacidad frío/calor": "3027 / 3520 kcal/h",
      "Tensión": "220 V",
      "Dimensiones": "700 x 506 x 200 mm",
      "Peso neto/bruto": "17,8 / 25 kg",
      "Cañerías": "1/4\" - 3/8\""
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "midea-mda6mi-18hiw-01m",
    gallery: [
      { src: "img/comercial/mda6mi-ductado-generico.webp", alt: "Midea Multisplit Inverter Smart — Unidad Interior Ductado" },
    ],
    brand: "Midea",
    line: "Multisplit — Unidad Interior Ductado",
    name: "Midea Inverter Smart — Unidad Interior Ductado Multisplit",
    model: "MDA6MI-18HIW-01M",
    capacityLabel: "4541 kcal/h",
    capacityTR: null,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: true,
    features: ["Inverter", "Incluye control remoto y control alámbrico LCD"],
    technology: "Inverter",
    type: "Multisplit — Unidad Interior",
    refrigerant: "",
    description: "Unidad interior tipo ductado (conductos) para sistema multisplit. Se combina con una unidad exterior multisplit (de 2 a 5 unidades interiores según el modelo de exterior) para climatizar varios ambientes con una sola condensadora, con salida de aire distribuida por conductos.",
    specs: {
      "Capacidad": "4541 kcal/h",
      "Tecnología": "Inverter",
      "Capacidad frío/calor": "4541 / 5280 kcal/h",
      "Tensión": "220 V",
      "Dimensiones": "880 x 674 x 210 mm",
      "Peso neto/bruto": "24,4 / 29,6 kg",
      "Cañerías": "1/4\" - 1/2\""
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "midea-mda6mi-24hiw-01m",
    gallery: [
      { src: "img/comercial/mda6mi-ductado-generico.webp", alt: "Midea Multisplit Inverter Smart — Unidad Interior Ductado" },
    ],
    brand: "Midea",
    line: "Multisplit — Unidad Interior Ductado",
    name: "Midea Inverter Smart — Unidad Interior Ductado Multisplit",
    model: "MDA6MI-24HIW-01M",
    capacityLabel: "6046 kcal/h",
    capacityTR: null,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: true,
    features: ["Inverter", "Incluye control remoto y control alámbrico LCD"],
    technology: "Inverter",
    type: "Multisplit — Unidad Interior",
    refrigerant: "",
    description: "Unidad interior tipo ductado (conductos) para sistema multisplit. Se combina con una unidad exterior multisplit (de 2 a 5 unidades interiores según el modelo de exterior) para climatizar varios ambientes con una sola condensadora, con salida de aire distribuida por conductos.",
    specs: {
      "Capacidad": "6046 kcal/h",
      "Tecnología": "Inverter",
      "Capacidad frío/calor": "6046 / 7030 kcal/h",
      "Tensión": "220 V",
      "Dimensiones": "1100 x 774 x 249 mm",
      "Peso neto/bruto": "32,3 / 39,1 kg",
      "Cañerías": "3/8\" - 5/8\""
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "midea-msag3o-27hi-01m",
    gallery: [
      { src: "img/comercial/midea-multisplit-inverter-smart-familia.webp", alt: "Midea Multisplit Inverter Smart — Unidad Exterior y sistema completo" },
    ],
    brand: "Midea",
    line: "Multisplit — Unidad Exterior",
    name: "Midea Inverter Smart — Unidad Exterior Multisplit",
    model: "MSAG3O-27HI-01M",
    capacityLabel: "6803 kcal/h",
    capacityTR: null,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: false,
    features: ["Inverter", "No indicado en tabla del folleto", "SmartHome / Wi-Fi App"],
    technology: "Inverter",
    type: "Multisplit — Unidad Exterior",
    refrigerant: "No indicado en tabla del folleto",
    description: "Unidad exterior para sistema multisplit, combinable con 2 a 5 unidades interiores split pared o ductado según el modelo, con control por app, comandos de voz y compatibilidad SmartHome. Multisplit Inverter Smart; combina de 2 a 5 unidades interiores según unidad exterior; Turbo; Follow Me; Gold Cover; SmartHome; comandos de voz; Wi-Fi/app.",
    specs: {
      "Capacidad": "6803 kcal/h",
      "Tecnología": "Inverter",
      "Refrigerante": "No indicado en tabla del folleto",
      "Capacidad frío/calor": "6803 kcal/h frío / 7910 kcal/h calor",
      "Tensión": "220 V~",
      "Dimensiones": "890 x 342 x 673 mm",
      "Peso neto/bruto": "47,7 / 51,3 kg",
      "Cañerías": "3x 1/4\" - 3x 3/8\""
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "midea-msag4o-36hi-01m",
    gallery: [
      { src: "img/comercial/midea-multisplit-inverter-smart-familia.webp", alt: "Midea Multisplit Inverter Smart — Unidad Exterior y sistema completo" },
    ],
    brand: "Midea",
    line: "Multisplit — Unidad Exterior",
    name: "Midea Inverter Smart — Unidad Exterior Multisplit",
    model: "MSAG4O-36HI-01M",
    capacityLabel: "9073 kcal/h",
    capacityTR: null,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: false,
    features: ["Inverter", "No indicado en tabla del folleto", "SmartHome / Wi-Fi App"],
    technology: "Inverter",
    type: "Multisplit — Unidad Exterior",
    refrigerant: "No indicado en tabla del folleto",
    description: "Unidad exterior para sistema multisplit, combinable con 2 a 5 unidades interiores split pared o ductado según el modelo, con control por app, comandos de voz y compatibilidad SmartHome. Multisplit Inverter Smart; combina de 2 a 5 unidades interiores según unidad exterior; Turbo; Follow Me; Gold Cover; SmartHome; comandos de voz; Wi-Fi/app.",
    specs: {
      "Capacidad": "9073 kcal/h",
      "Tecnología": "Inverter",
      "Refrigerante": "No indicado en tabla del folleto",
      "Capacidad frío/calor": "9073 kcal/h frío / 10550 kcal/h calor",
      "Tensión": "220 V~",
      "Dimensiones": "946 x 410 x 810 mm",
      "Peso neto/bruto": "70 / 75 kg",
      "Cañerías": "4x 1/4\" - 3x 3/8\" + 1x 1/2\""
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "midea-msag5o-42hi-01m",
    gallery: [
      { src: "img/comercial/midea-multisplit-inverter-smart-familia.webp", alt: "Midea Multisplit Inverter Smart — Unidad Exterior y sistema completo" },
    ],
    brand: "Midea",
    line: "Multisplit — Unidad Exterior",
    name: "Midea Inverter Smart — Unidad Exterior Multisplit",
    model: "MSAG5O-42HI-01M",
    capacityLabel: "10578 kcal/h",
    capacityTR: null,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: false,
    features: ["Inverter", "No indicado en tabla del folleto", "SmartHome / Wi-Fi App"],
    technology: "Inverter",
    type: "Multisplit — Unidad Exterior",
    refrigerant: "No indicado en tabla del folleto",
    description: "Unidad exterior para sistema multisplit, combinable con 2 a 5 unidades interiores split pared o ductado según el modelo, con control por app, comandos de voz y compatibilidad SmartHome. Multisplit Inverter Smart; combina de 2 a 5 unidades interiores según unidad exterior; Turbo; Follow Me; Gold Cover; SmartHome; comandos de voz; Wi-Fi/app.",
    specs: {
      "Capacidad": "10578 kcal/h",
      "Tecnología": "Inverter",
      "Refrigerante": "No indicado en tabla del folleto",
      "Capacidad frío/calor": "10587 kcal/h frío / 12310 kcal/h calor",
      "Tensión": "220 V~",
      "Dimensiones": "946 x 410 x 810 mm",
      "Peso neto/bruto": "76 / 81 kg",
      "Cañerías": "5x 1/4\" - 4x 3/8\" + 1x 1/2\""
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "carrier-53kmq036hp-901a",
    gallery: [
      { src: "img/comercial/carrier-piso-techo-onoff-exterior-simple.webp", alt: "Carrier Piso Techo ON/OFF, unidad exterior" },
      { src: "img/comercial/carrier-piso-techo-onoff-interior.webp", alt: "Carrier Piso Techo ON/OFF, unidad interior" },
      { src: "img/comercial/carrier-piso-techo-onoff-familia.webp", alt: "Carrier Piso Techo ON/OFF, sistema completo" },
    ],
    brand: "Carrier",
    line: "Piso Techo",
    name: "Carrier Piso Techo ON/OFF",
    model: "53KMQ036HP-901A",
    capacityLabel: "3 TR",
    capacityTR: 3.0,
    price: 2619047, // Efectivo (Excel de precios reales)
    priceOriginal: 4365078.5,
    installments: 6,
    installmentValue: 640211.51,
    isNew: false,
    features: ["ON/OFF", "R410A"],
    technology: "ON/OFF",
    type: "Piso Techo",
    refrigerant: "R410A",
    description: "Equipo de instalación en piso o techo (consola horizontal), ideal para locales comerciales, oficinas y salones amplios donde se necesita distribuir el aire a media altura sin ocupar espacio de pared.",
    specs: {
      "Capacidad": "3 TR",
      "Tecnología": "ON/OFF",
      "Refrigerante": "R410A",
      "Ficha técnica detallada": "A confirmar con el fabricante"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "carrier-53lmq057hp-901a",
    gallery: [
      { src: "img/comercial/carrier-piso-techo-onoff-interior.webp", alt: "Carrier Piso Techo ON/OFF, unidad interior" },
      { src: "img/comercial/carrier-piso-techo-onoff-familia.webp", alt: "Carrier Piso Techo ON/OFF, sistema completo" },
      { src: "img/comercial/carrier-piso-techo-onoff-exterior-simple.webp", alt: "Carrier Piso Techo ON/OFF, unidad exterior" },
    ],
    brand: "Carrier",
    line: "Piso Techo",
    name: "Carrier Piso Techo ON/OFF",
    model: "53LMQ057HP-901A",
    capacityLabel: "5 TR",
    capacityTR: 5.0,
    price: 3434502, // Efectivo (Excel de precios reales)
    priceOriginal: 5724170.67,
    installments: 6,
    installmentValue: 839545.03,
    isNew: false,
    features: ["ON/OFF", "R410A"],
    technology: "ON/OFF",
    type: "Piso Techo",
    refrigerant: "R410A",
    description: "Equipo de instalación en piso o techo (consola horizontal), ideal para locales comerciales, oficinas y salones amplios donde se necesita distribuir el aire a media altura sin ocupar espacio de pared.",
    specs: {
      "Capacidad": "5 TR",
      "Tecnología": "ON/OFF",
      "Refrigerante": "R410A",
      "Ficha técnica detallada": "A confirmar con el fabricante"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "carrier-53lmq072hp-901a",
    gallery: [
      { src: "img/comercial/carrier-piso-techo-onoff-familia.webp", alt: "Carrier Piso Techo ON/OFF, sistema completo" },
      { src: "img/comercial/carrier-piso-techo-onoff-exterior-doble.webp", alt: "Carrier Piso Techo ON/OFF, unidad exterior doble ventilador" },
      { src: "img/comercial/carrier-piso-techo-onoff-interior.webp", alt: "Carrier Piso Techo ON/OFF, unidad interior" },
    ],
    brand: "Carrier",
    line: "Piso Techo",
    name: "Carrier Piso Techo ON/OFF",
    model: "53LMQ072HP-901A",
    capacityLabel: "6 TR",
    capacityTR: 6.0,
    price: 3540486, // Efectivo (Excel de precios reales)
    priceOriginal: 5900810.5,
    installments: 6,
    installmentValue: 865452.21,
    isNew: false,
    features: ["ON/OFF", "R410A"],
    technology: "ON/OFF",
    type: "Piso Techo",
    refrigerant: "R410A",
    description: "Equipo de instalación en piso o techo (consola horizontal), ideal para locales comerciales, oficinas y salones amplios donde se necesita distribuir el aire a media altura sin ocupar espacio de pared.",
    specs: {
      "Capacidad": "6 TR",
      "Tecnología": "ON/OFF",
      "Refrigerante": "R410A",
      "Ficha técnica detallada": "A confirmar con el fabricante"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "carrier-53vbq036hp-702a",
    gallery: [
      { src: "img/comercial/carrier-piso-techo-elite-inverter-r32.webp", alt: "Carrier Piso Techo Elite Inverter R-32" },
      { src: "img/comercial/carrier-piso-techo-xpower-inverter.webp", alt: "Carrier Piso Techo Xpower Inverter, unidad interior y exteriores" },
      { src: "img/comercial/carrier-piso-techo-inverter-familia.webp", alt: "Carrier Piso Techo Inverter, tecnología Xpower Inverter" },
      { src: "img/comercial/carrier-piso-techo-inverter-caracteristicas.webp", alt: "Características Carrier Piso Techo Inverter" },
    ],
    brand: "Carrier",
    line: "Piso Techo",
    name: "Carrier Piso Techo Inverter",
    model: "53VBQ036HP-702A",
    capacityLabel: "3 TR",
    capacityTR: 3.0,
    price: 3273113, // Efectivo (Excel de precios reales)
    priceOriginal: 5455187.67,
    installments: 6,
    installmentValue: 800094.19,
    isNew: false,
    features: ["Inverter", "R32", "3 años", "Control remoto LCD"],
    technology: "Inverter",
    type: "Piso Techo",
    refrigerant: "R32",
    description: "Equipo de instalación en piso o techo (consola horizontal), ideal para locales comerciales, oficinas y salones amplios donde se necesita distribuir el aire a media altura sin ocupar espacio de pared. Tecnología Inverter; carga de refrigerante de operación incluida; control remoto multifunción con display LCD; instalación en piso o techo; condensadora de descarga horizontal; presostatos de alta y baja presión; detector de secuencia y falta de fase.",
    specs: {
      "Capacidad": "3 TR",
      "Tecnología": "Inverter",
      "Refrigerante": "R32",
      "Tensión": "220-1-50",
      "Dimensiones unidad interior": "235 x 1285 x 675 mm",
      "Dimensiones unidad exterior": "810 x 946 x 410 mm",
      "Peso unidad interior": "32.0 kg",
      "Peso unidad exterior": "54.5 kg",
      "Control": "Control remoto",
      "Garantía": "Consultar con DAClimaTECH"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "carrier-53vbq057hp-902a",
    gallery: [
      { src: "img/comercial/carrier-piso-techo-xpower-inverter.webp", alt: "Carrier Piso Techo Xpower Inverter, unidad interior y exteriores" },
      { src: "img/comercial/carrier-piso-techo-inverter-familia.webp", alt: "Carrier Piso Techo Inverter, tecnología Xpower Inverter" },
      { src: "img/comercial/carrier-piso-techo-elite-inverter-r32.webp", alt: "Carrier Piso Techo Elite Inverter R-32" },
      { src: "img/comercial/carrier-piso-techo-inverter-caracteristicas.webp", alt: "Características Carrier Piso Techo Inverter" },
    ],
    brand: "Carrier",
    line: "Piso Techo",
    name: "Carrier Piso Techo Inverter",
    model: "53VBQ057HP-902A",
    capacityLabel: "5 TR",
    capacityTR: 5.0,
    price: 4039599, // Efectivo (Excel de precios reales)
    priceOriginal: 6732665.33,
    installments: 6,
    installmentValue: 987457.58,
    isNew: false,
    features: ["Inverter", "R32", "3 años", "Control remoto LCD"],
    technology: "Inverter",
    type: "Piso Techo",
    refrigerant: "R32",
    description: "Equipo de instalación en piso o techo (consola horizontal), ideal para locales comerciales, oficinas y salones amplios donde se necesita distribuir el aire a media altura sin ocupar espacio de pared. Tecnología Inverter; carga de refrigerante de operación incluida; control remoto multifunción con display LCD; instalación en piso o techo; condensadora de descarga horizontal; presostatos de alta y baja presión; detector de secuencia y falta de fase.",
    specs: {
      "Capacidad": "5 TR",
      "Tecnología": "Inverter",
      "Refrigerante": "R32",
      "Tensión": "380-3-50",
      "Dimensiones unidad interior": "235 x 1650 x 675 mm",
      "Dimensiones unidad exterior": "810 x 946 x 410 mm",
      "Peso unidad interior": "42.0 kg",
      "Peso unidad exterior": "76.1 kg",
      "Control": "Control remoto",
      "Garantía": "Consultar con DAClimaTECH"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "carrier-53vbq072hp-902a",
    gallery: [
      { src: "img/comercial/carrier-piso-techo-inverter-familia.webp", alt: "Carrier Piso Techo Inverter, tecnología Xpower Inverter" },
      { src: "img/comercial/carrier-piso-techo-elite-inverter-r32.webp", alt: "Carrier Piso Techo Elite Inverter R-32" },
      { src: "img/comercial/carrier-piso-techo-xpower-inverter.webp", alt: "Carrier Piso Techo Xpower Inverter, unidad interior y exteriores" },
      { src: "img/comercial/carrier-piso-techo-inverter-6tr-caracteristicas.webp", alt: "Características Carrier Piso Techo Inverter 6TR" },
    ],
    brand: "Carrier",
    line: "Piso Techo",
    name: "Carrier Piso Techo Inverter",
    model: "53VBQ072HP-902A",
    capacityLabel: "6 TR",
    capacityTR: 6.0,
    price: 4118685, // Efectivo (Excel de precios reales)
    priceOriginal: 6864474.67,
    installments: 6,
    installmentValue: 1006789.62,
    isNew: false,
    features: ["Inverter", "R32", "3 años", "Control remoto LCD"],
    technology: "Inverter",
    type: "Piso Techo",
    refrigerant: "R32",
    description: "Equipo de instalación en piso o techo (consola horizontal), ideal para locales comerciales, oficinas y salones amplios donde se necesita distribuir el aire a media altura sin ocupar espacio de pared. Tecnología Inverter; carga de refrigerante de operación incluida; control remoto multifunción con display LCD; instalación en piso o techo; condensadora de descarga horizontal; presostatos de alta y baja presión; detector de secuencia y falta de fase.",
    specs: {
      "Capacidad": "6 TR",
      "Tecnología": "Inverter",
      "Refrigerante": "R32",
      "Tensión": "380-3-50",
      "Dimensiones unidad interior": "235 x 1650 x 675 mm",
      "Dimensiones unidad exterior": "975 x 980 x 375 mm",
      "Peso unidad interior": "42.0 kg",
      "Peso unidad exterior": "85.6 kg",
      "Control": "Control remoto",
      "Garantía": "Consultar con DAClimaTECH"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "surrey-661ezq036hp-asa",
    gallery: [
      { src: "img/comercial/surrey-piso-techo-onoff-familia.webp", alt: "Surrey Piso Techo ON/OFF, unidad interior y exterior" },
    ],
    brand: "Surrey",
    line: "Piso Techo",
    name: "Surrey Piso Techo ON/OFF",
    model: "661EZQ036HP-ASA",
    capacityLabel: "3 TR",
    capacityTR: 3.0,
    price: 2546399, // Efectivo (Excel de precios reales)
    priceOriginal: 4243997.83,
    installments: 6,
    installmentValue: 622453.02,
    isNew: false,
    features: ["ON/OFF", "R410A"],
    technology: "ON/OFF",
    type: "Piso Techo",
    refrigerant: "R410A",
    description: "Equipo de instalación en piso o techo (consola horizontal), ideal para locales comerciales, oficinas y salones amplios donde se necesita distribuir el aire a media altura sin ocupar espacio de pared.",
    specs: {
      "Capacidad": "3 TR",
      "Tecnología": "ON/OFF",
      "Refrigerante": "R410A",
      "Tensión": "380V",
      "Ficha técnica detallada": "A confirmar con el fabricante"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "surrey-617fzq057hp-asa",
    gallery: [
      { src: "img/comercial/surrey-piso-techo-onoff-familia.webp", alt: "Surrey Piso Techo ON/OFF, unidad interior y exterior" },
    ],
    brand: "Surrey",
    line: "Piso Techo",
    name: "Surrey Piso Techo ON/OFF",
    model: "617FZQ057HP-ASA",
    capacityLabel: "5 TR",
    capacityTR: 5.0,
    price: 3340014, // Efectivo (Excel de precios reales)
    priceOriginal: 5566689.17,
    installments: 6,
    installmentValue: 816447.74,
    isNew: false,
    features: ["ON/OFF", "R410A"],
    technology: "ON/OFF",
    type: "Piso Techo",
    refrigerant: "R410A",
    description: "Equipo de instalación en piso o techo (consola horizontal), ideal para locales comerciales, oficinas y salones amplios donde se necesita distribuir el aire a media altura sin ocupar espacio de pared.",
    specs: {
      "Capacidad": "5 TR",
      "Tecnología": "ON/OFF",
      "Refrigerante": "R410A",
      "Ficha técnica detallada": "A confirmar con el fabricante"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "surrey-617fzq072hp-asa",
    gallery: [
      { src: "img/comercial/surrey-piso-techo-onoff-familia.webp", alt: "Surrey Piso Techo ON/OFF, unidad interior y exterior" },
    ],
    brand: "Surrey",
    line: "Piso Techo",
    name: "Surrey Piso Techo ON/OFF",
    model: "617FZQ072HP-ASA",
    capacityLabel: "6 TR",
    capacityTR: 6.0,
    price: 3440250, // Efectivo (Excel de precios reales)
    priceOriginal: 5733749.83,
    installments: 6,
    installmentValue: 840949.98,
    isNew: false,
    features: ["ON/OFF", "R410A"],
    technology: "ON/OFF",
    type: "Piso Techo",
    refrigerant: "R410A",
    description: "Equipo de instalación en piso o techo (consola horizontal), ideal para locales comerciales, oficinas y salones amplios donde se necesita distribuir el aire a media altura sin ocupar espacio de pared.",
    specs: {
      "Capacidad": "6 TR",
      "Tecnología": "ON/OFF",
      "Refrigerante": "R410A",
      "Ficha técnica detallada": "A confirmar con el fabricante"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "surrey-615isq036hp-asb",
    gallery: [
      { src: "img/comercial/surrey-piso-techo-inverter-badges.webp", alt: "Surrey Piso Techo Inverter, ahorro energético 35% y refrigerante R-32" },
      { src: "img/comercial/surrey-piso-techo-inverter-familia.webp", alt: "Surrey Piso Techo Inverter, unidad interior y exteriores" },
    ],
    brand: "Surrey",
    line: "Piso Techo",
    name: "Surrey Piso Techo Inverter",
    model: "615ISQ036HP-ASB",
    capacityLabel: "3 TR",
    capacityTR: 3.0,
    price: 3181612, // Efectivo (Excel de precios reales)
    priceOriginal: 5302687.33,
    installments: 6,
    installmentValue: 777727.48,
    isNew: false,
    features: ["Inverter", "R32", "Control remoto LCD"],
    technology: "Inverter",
    type: "Piso Techo",
    refrigerant: "R32",
    description: "Equipo de instalación en piso o techo (consola horizontal), ideal para locales comerciales, oficinas y salones amplios donde se necesita distribuir el aire a media altura sin ocupar espacio de pared. Refrigerante R32; diseño moderno; control remoto multifunción con display LCD; instalación en piso o techo; condensadora de descarga horizontal; presostatos de alta y baja presión; detector de secuencia y falta de fase; carga de refrigerante de operación incluida.",
    specs: {
      "Capacidad": "3 TR",
      "Tecnología": "Inverter",
      "Refrigerante": "R32",
      "Tensión": "220-1-50",
      "Dimensiones unidad interior": "235 x 1285 x 675 mm",
      "Dimensiones unidad exterior": "810 x 946 x 410 mm",
      "Peso unidad interior": "32.0 kg",
      "Peso unidad exterior": "54.5 kg",
      "Control": "Control remoto"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "surrey-615izq057hp-asb",
    gallery: [
      { src: "img/comercial/surrey-piso-techo-inverter-familia.webp", alt: "Surrey Piso Techo Inverter, unidad interior y exteriores" },
      { src: "img/comercial/surrey-piso-techo-inverter-badges.webp", alt: "Surrey Piso Techo Inverter, ahorro energético 35% y refrigerante R-32" },
    ],
    brand: "Surrey",
    line: "Piso Techo",
    name: "Surrey Piso Techo Inverter",
    model: "615IZQ057HP-ASB",
    capacityLabel: "5 TR",
    capacityTR: 5.0,
    price: 3925339, // Efectivo (Excel de precios reales)
    priceOriginal: 6542231.5,
    installments: 6,
    installmentValue: 959527.29,
    isNew: false,
    features: ["Inverter", "R32", "Control remoto LCD"],
    technology: "Inverter",
    type: "Piso Techo",
    refrigerant: "R32",
    description: "Equipo de instalación en piso o techo (consola horizontal), ideal para locales comerciales, oficinas y salones amplios donde se necesita distribuir el aire a media altura sin ocupar espacio de pared. Refrigerante R32; diseño moderno; control remoto multifunción con display LCD; instalación en piso o techo; condensadora de descarga horizontal; presostatos de alta y baja presión; detector de secuencia y falta de fase; carga de refrigerante de operación incluida.",
    specs: {
      "Capacidad": "5 TR",
      "Tecnología": "Inverter",
      "Refrigerante": "R32",
      "Tensión": "380-3-50",
      "Dimensiones unidad interior": "235 x 1650 x 675 mm",
      "Dimensiones unidad exterior": "810 x 946 x 410 mm",
      "Peso unidad interior": "42.0 kg",
      "Peso unidad exterior": "76.1 kg",
      "Control": "Control remoto"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "surrey-615izq072hp-asb",
    gallery: [
      { src: "img/comercial/surrey-piso-techo-inverter-badges.webp", alt: "Surrey Piso Techo Inverter, ahorro energético 35% y refrigerante R-32" },
      { src: "img/comercial/surrey-piso-techo-inverter-familia.webp", alt: "Surrey Piso Techo Inverter, unidad interior y exteriores" },
    ],
    brand: "Surrey",
    line: "Piso Techo",
    name: "Surrey Piso Techo Inverter",
    model: "615IZQ072HP-ASB",
    capacityLabel: "6 TR",
    capacityTR: 6.0,
    price: 4002126, // Efectivo (Excel de precios reales)
    priceOriginal: 6670209.17,
    installments: 6,
    installmentValue: 978297.34,
    isNew: false,
    features: ["Inverter", "R32", "Control remoto LCD"],
    technology: "Inverter",
    type: "Piso Techo",
    refrigerant: "R32",
    description: "Equipo de instalación en piso o techo (consola horizontal), ideal para locales comerciales, oficinas y salones amplios donde se necesita distribuir el aire a media altura sin ocupar espacio de pared. Refrigerante R32; diseño moderno; control remoto multifunción con display LCD; instalación en piso o techo; condensadora de descarga horizontal; presostatos de alta y baja presión; detector de secuencia y falta de fase; carga de refrigerante de operación incluida.",
    specs: {
      "Capacidad": "6 TR",
      "Tecnología": "Inverter",
      "Refrigerante": "R32",
      "Tensión": "380-3-50",
      "Dimensiones unidad interior": "235 x 1650 x 675 mm",
      "Dimensiones unidad exterior": "975 x 980 x 375 mm",
      "Peso unidad interior": "42.0 kg",
      "Peso unidad exterior": "85.6 kg",
      "Control": "Control remoto"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "midea-mptvc-r057hn8-1a",
    gallery: [
      { src: "img/comercial/midea-piso-techo-inverter-familia-eco.webp", alt: "Midea Piso Techo Inverter, sistema completo R-32 Eco Friendly" },
      { src: "img/comercial/midea-piso-techo-inverter-linea.webp", alt: "Midea Piso Techo Inverter, unidad interior y exteriores" },
      { src: "img/comercial/midea-piso-techo-inverter-interior-eco.webp", alt: "Midea Piso Techo Inverter, unidad interior R-32 Eco Friendly" },
    ],
    brand: "Midea",
    line: "Piso Techo",
    name: "Midea Piso Techo Inverter",
    model: "MPTVC-R057HN8-1A",
    capacityLabel: "5 TR",
    capacityTR: 5.0,
    price: 3701416, // Efectivo (Excel de precios reales)
    priceOriginal: 6169027.17,
    installments: 6,
    installmentValue: 904790.65,
    isNew: false,
    features: ["Inverter", "R32", "Control remoto LCD"],
    technology: "Inverter",
    type: "Piso Techo",
    refrigerant: "R32",
    description: "Equipo de instalación en piso o techo (consola horizontal), ideal para locales comerciales, oficinas y salones amplios donde se necesita distribuir el aire a media altura sin ocupar espacio de pared. Inverter; refrigerante R-32; presostatos de alta y baja presión; detector de secuencia y falta de fase; detector de pérdida de refrigerante; control remoto multifunción con display LCD; auto restart; Turbo; Follow Me; Gold Cover; auto defrosting.",
    specs: {
      "Capacidad": "5 TR",
      "Tecnología": "Inverter",
      "Refrigerante": "R32",
      "Tensión": "220-1-50",
      "Dimensiones unidad interior": "1650 x 675 x 235 mm",
      "Dimensiones unidad exterior": "946 x 410 x 810 mm",
      "Peso unidad interior": "40.0 kg",
      "Peso unidad exterior": "76.1 kg",
      "Control": "Control remoto"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "midea-mptvc-r072hn8-1a",
    gallery: [
      { src: "img/comercial/midea-piso-techo-inverter-linea.webp", alt: "Midea Piso Techo Inverter, unidad interior y exteriores" },
      { src: "img/comercial/midea-piso-techo-inverter-interior-eco.webp", alt: "Midea Piso Techo Inverter, unidad interior R-32 Eco Friendly" },
      { src: "img/comercial/midea-piso-techo-inverter-familia-eco.webp", alt: "Midea Piso Techo Inverter, sistema completo R-32 Eco Friendly" },
    ],
    brand: "Midea",
    line: "Piso Techo",
    name: "Midea Piso Techo Inverter",
    model: "MPTVC-R072HN8-1A",
    capacityLabel: "6 TR",
    capacityTR: 6.0,
    price: 3936604, // Efectivo (Excel de precios reales)
    priceOriginal: 6561006.67,
    installments: 6,
    installmentValue: 962280.98,
    isNew: false,
    features: ["Inverter", "R32", "Control remoto LCD"],
    technology: "Inverter",
    type: "Piso Techo",
    refrigerant: "R32",
    description: "Equipo de instalación en piso o techo (consola horizontal), ideal para locales comerciales, oficinas y salones amplios donde se necesita distribuir el aire a media altura sin ocupar espacio de pared. Inverter; refrigerante R-32; presostatos de alta y baja presión; detector de secuencia y falta de fase; detector de pérdida de refrigerante; control remoto multifunción con display LCD; auto restart; Turbo; Follow Me; Gold Cover; auto defrosting.",
    specs: {
      "Capacidad": "6 TR",
      "Tecnología": "Inverter",
      "Refrigerante": "R32",
      "Tensión": "380-3-50",
      "Dimensiones unidad interior": "1650 x 675 x 235 mm",
      "Dimensiones unidad exterior": "980 x 975 x 375 mm",
      "Peso unidad interior": "40.0 kg",
      "Peso unidad exterior": "85.6 kg",
      "Control": "Control remoto"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "carrier-53rqhv036a-701c",
    gallery: [
      { src: "img/comercial/carrier-baja-silueta-inverter-interior-frontal.webp", alt: "Carrier Baja Silueta Inverter, unidad interior" },
      { src: "img/comercial/carrier-baja-silueta-inverter-exterior.webp", alt: "Carrier Baja Silueta Inverter, unidad exterior" },
      { src: "img/comercial/carrier-baja-silueta-inverter-control.webp", alt: "Carrier Baja Silueta Inverter, control alámbrico" },
    ],
    brand: "Carrier",
    line: "Baja Silueta",
    name: "Carrier Baja Silueta Inverter",
    model: "53RQHV036A--701C",
    capacityLabel: "3 TR",
    capacityTR: 3.0,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: false,
    features: ["Inverter", "R32"],
    technology: "Inverter",
    type: "Baja Silueta",
    refrigerant: "R32",
    description: "Sistema separado de baja silueta, pensado para instalarse embutido en cielorraso con un perfil bajo, distribuyendo el aire por conductos cortos en locales comerciales y oficinas.",
    specs: {
      "Capacidad": "3 TR",
      "Tecnología": "Inverter",
      "Refrigerante": "R32",
      "Tensión": "220V",
      "Ficha técnica detallada": "A confirmar con el fabricante"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "carrier-53rqhv057a-901b",
    gallery: [
      { src: "img/comercial/carrier-baja-silueta-inverter-exterior.webp", alt: "Carrier Baja Silueta Inverter, unidad exterior" },
      { src: "img/comercial/carrier-baja-silueta-inverter-familia-xpower-eco.webp", alt: "Carrier Baja Silueta Inverter Xpower, sistema completo R-32 Eco Friendly" },
      { src: "img/comercial/carrier-baja-silueta-inverter-interior-angular.webp", alt: "Carrier Baja Silueta Inverter, unidad interior" },
    ],
    brand: "Carrier",
    line: "Baja Silueta",
    name: "Carrier Baja Silueta Inverter",
    model: "53RQHV057A--901B",
    capacityLabel: "5 TR",
    capacityTR: 5.0,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: false,
    features: ["Inverter", "R32", "3 años", "Bajo nivel de ruido"],
    technology: "Inverter",
    type: "Baja Silueta",
    refrigerant: "R32",
    description: "Sistema separado de baja silueta, pensado para instalarse embutido en cielorraso con un perfil bajo, distribuyendo el aire por conductos cortos en locales comerciales y oficinas. Tecnología Inverter; refrigerante R32; control alámbrico; filtro lavable; bajo nivel de ruido; condensadora de descarga horizontal; carga de refrigerante para instalaciones de hasta 5 m de cañería.",
    specs: {
      "Capacidad": "5 TR",
      "Tecnología": "Inverter",
      "Refrigerante": "R32",
      "Tensión": "380-3-50",
      "Dimensiones unidad interior": "300 x 1200 x 874 mm",
      "Dimensiones unidad exterior": "810 x 946 x 410 mm",
      "Peso unidad interior": "47.6 kg",
      "Peso unidad exterior": "76.1 kg",
      "Control": "Control alámbrico",
      "Garantía": "Consultar con DAClimaTECH"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "carrier-53rqhv057a-901c",
    gallery: [
      { src: "img/comercial/carrier-baja-silueta-inverter-familia-r32.webp", alt: "Carrier Baja Silueta Inverter, sistema completo refrigerante R-32" },
      { src: "img/comercial/carrier-baja-silueta-inverter-interior-frontal.webp", alt: "Carrier Baja Silueta Inverter, unidad interior" },
      { src: "img/comercial/carrier-baja-silueta-inverter-control.webp", alt: "Carrier Baja Silueta Inverter, control alámbrico" },
    ],
    brand: "Carrier",
    line: "Baja Silueta",
    name: "Carrier Baja Silueta Inverter",
    model: "53RQHV057A--901C",
    capacityLabel: "5 TR",
    capacityTR: 5.0,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: false,
    features: ["Inverter", "R32", "3 años", "Bajo nivel de ruido"],
    technology: "Inverter",
    type: "Baja Silueta",
    refrigerant: "R32",
    description: "Sistema separado de baja silueta, pensado para instalarse embutido en cielorraso con un perfil bajo, distribuyendo el aire por conductos cortos en locales comerciales y oficinas. Tecnología Inverter; refrigerante R32; control alámbrico; filtro lavable; bajo nivel de ruido; condensadora de descarga horizontal; carga de refrigerante para instalaciones de hasta 5 m de cañería.",
    specs: {
      "Capacidad": "5 TR",
      "Tecnología": "Inverter",
      "Refrigerante": "R32",
      "Tensión": "380-3-50",
      "Dimensiones unidad interior": "300 x 1200 x 874 mm",
      "Dimensiones unidad exterior": "810 x 946 x 410 mm",
      "Peso unidad interior": "47.6 kg",
      "Peso unidad exterior": "76.1 kg",
      "Control": "Control alámbrico",
      "Garantía": "Consultar con DAClimaTECH"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "carrier-53rqhv072a-901c",
    gallery: [
      { src: "img/comercial/carrier-baja-silueta-inverter-interior-frontal.webp", alt: "Carrier Baja Silueta Inverter, unidad interior" },
      { src: "img/comercial/carrier-baja-silueta-inverter-familia-r32.webp", alt: "Carrier Baja Silueta Inverter, sistema completo refrigerante R-32" },
      { src: "img/comercial/carrier-baja-silueta-inverter-control.webp", alt: "Carrier Baja Silueta Inverter, control alámbrico" },
    ],
    brand: "Carrier",
    line: "Baja Silueta",
    name: "Carrier Baja Silueta Inverter",
    model: "53RQHV072A--901C",
    capacityLabel: "6 TR",
    capacityTR: 6.0,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: false,
    features: ["Inverter", "R32"],
    technology: "Inverter",
    type: "Baja Silueta",
    refrigerant: "R32",
    description: "Sistema separado de baja silueta, pensado para instalarse embutido en cielorraso con un perfil bajo, distribuyendo el aire por conductos cortos en locales comerciales y oficinas.",
    specs: {
      "Capacidad": "6 TR",
      "Tecnología": "Inverter",
      "Refrigerante": "R32",
      "Tensión": "380V",
      "Ficha técnica detallada": "A confirmar con el fabricante"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "surrey-648fb3-isq036ac",
    gallery: [
      { src: "img/comercial/surrey-baja-silueta-inverter-familia-r32.webp", alt: "Surrey Baja Silueta Inverter, sistema completo refrigerante R-32" },
      { src: "img/comercial/surrey-baja-silueta-inverter-exterior.webp", alt: "Surrey Baja Silueta Inverter, unidad exterior" },
      { src: "img/comercial/surrey-baja-silueta-inverter-control.webp", alt: "Surrey Baja Silueta Inverter, control alámbrico" },
    ],
    brand: "Surrey",
    line: "Baja Silueta",
    name: "Surrey Baja Silueta Inverter",
    model: "648FB3-ISQ036AC",
    capacityLabel: "3 TR",
    capacityTR: 3.0,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: false,
    features: ["Inverter", "R32", "Bajo nivel de ruido"],
    technology: "Inverter",
    type: "Baja Silueta",
    refrigerant: "R32",
    description: "Sistema separado de baja silueta, pensado para instalarse embutido en cielorraso con un perfil bajo, distribuyendo el aire por conductos cortos en locales comerciales y oficinas. Refrigerante R32; control alámbrico; filtro lavable; bajo nivel de ruido; condensadora de descarga horizontal; carga de refrigerante para instalaciones de hasta 5 m de cañería.",
    specs: {
      "Capacidad": "3 TR",
      "Tecnología": "Inverter",
      "Refrigerante": "R32",
      "Tensión": "220-1-50",
      "Dimensiones unidad interior": "249 x 1360 x 774 mm",
      "Dimensiones unidad exterior": "810 x 946 x 410 mm",
      "Peso unidad interior": "40.5 kg",
      "Peso unidad exterior": "54.5 kg",
      "Control": "Control alámbrico"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "surrey-648fb3-izq057ac",
    gallery: [
      { src: "img/comercial/surrey-baja-silueta-inverter-exterior.webp", alt: "Surrey Baja Silueta Inverter, unidad exterior" },
      { src: "img/comercial/surrey-baja-silueta-inverter-familia-xpower-eco.webp", alt: "Surrey Baja Silueta Inverter, sistema completo R-32 Eco Friendly" },
      { src: "img/comercial/surrey-baja-silueta-inverter-familia-r32.webp", alt: "Surrey Baja Silueta Inverter, sistema completo refrigerante R-32" },
    ],
    brand: "Surrey",
    line: "Baja Silueta",
    name: "Surrey Baja Silueta Inverter",
    model: "648FB3-IZQ057AC",
    capacityLabel: "5 TR",
    capacityTR: 5.0,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: false,
    features: ["Inverter", "R32", "Bajo nivel de ruido"],
    technology: "Inverter",
    type: "Baja Silueta",
    refrigerant: "R32",
    description: "Sistema separado de baja silueta, pensado para instalarse embutido en cielorraso con un perfil bajo, distribuyendo el aire por conductos cortos en locales comerciales y oficinas. Refrigerante R32; control alámbrico; filtro lavable; bajo nivel de ruido; condensadora de descarga horizontal; carga de refrigerante para instalaciones de hasta 5 m de cañería.",
    specs: {
      "Capacidad": "5 TR",
      "Tecnología": "Inverter",
      "Refrigerante": "R32",
      "Tensión": "380-3-50",
      "Dimensiones unidad interior": "300 x 1200 x 874 mm",
      "Dimensiones unidad exterior": "810 x 946 x 410 mm",
      "Peso unidad interior": "47.6 kg",
      "Peso unidad exterior": "76.1 kg",
      "Control": "Control alámbrico"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "surrey-648fb3-izq072ab",
    gallery: [
      { src: "img/comercial/surrey-baja-silueta-inverter-interior-frontal.webp", alt: "Surrey Baja Silueta Inverter, unidad interior" },
      { src: "img/comercial/surrey-baja-silueta-inverter-interior-angular.webp", alt: "Surrey Baja Silueta Inverter, unidad interior" },
    ],
    brand: "Surrey",
    line: "Baja Silueta",
    name: "Surrey Baja Silueta Inverter",
    model: "648FB3-IZQ072AB",
    capacityLabel: "6 TR",
    capacityTR: 6.0,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: false,
    features: ["Inverter", "R32", "Bajo nivel de ruido"],
    technology: "Inverter",
    type: "Baja Silueta",
    refrigerant: "R32",
    description: "Sistema separado de baja silueta, pensado para instalarse embutido en cielorraso con un perfil bajo, distribuyendo el aire por conductos cortos en locales comerciales y oficinas. Refrigerante R32; control alámbrico; filtro lavable; bajo nivel de ruido; condensadora de descarga horizontal; carga de refrigerante para instalaciones de hasta 5 m de cañería.",
    specs: {
      "Capacidad": "6 TR",
      "Tecnología": "Inverter",
      "Refrigerante": "R32",
      "Tensión": "380-3-50",
      "Dimensiones unidad interior": "300 x 1200 x 874 mm",
      "Dimensiones unidad exterior": "975 x 980 x 375 mm",
      "Peso unidad interior": "47.6 kg",
      "Peso unidad exterior": "85.6 kg",
      "Control": "Control alámbrico"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "surrey-648fb3-izq072ac",
    gallery: [
      { src: "img/comercial/surrey-baja-silueta-inverter-control.webp", alt: "Surrey Baja Silueta Inverter, control alámbrico" },
      { src: "img/comercial/surrey-baja-silueta-inverter-exterior.webp", alt: "Surrey Baja Silueta Inverter, unidad exterior" },
      { src: "img/comercial/surrey-baja-silueta-inverter-familia-r32.webp", alt: "Surrey Baja Silueta Inverter, sistema completo refrigerante R-32" },
    ],
    brand: "Surrey",
    line: "Baja Silueta",
    name: "Surrey Baja Silueta Inverter",
    model: "648FB3-IZQ072AC",
    capacityLabel: "6 TR",
    capacityTR: 6.0,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: false,
    features: ["Inverter", "R32", "Bajo nivel de ruido"],
    technology: "Inverter",
    type: "Baja Silueta",
    refrigerant: "R32",
    description: "Sistema separado de baja silueta, pensado para instalarse embutido en cielorraso con un perfil bajo, distribuyendo el aire por conductos cortos en locales comerciales y oficinas. Refrigerante R32; control alámbrico; filtro lavable; bajo nivel de ruido; condensadora de descarga horizontal; carga de refrigerante para instalaciones de hasta 5 m de cañería.",
    specs: {
      "Capacidad": "6 TR",
      "Tecnología": "Inverter",
      "Refrigerante": "R32",
      "Tensión": "380-3-50",
      "Dimensiones unidad interior": "300 x 1200 x 874 mm",
      "Dimensiones unidad exterior": "975 x 980 x 375 mm",
      "Peso unidad interior": "47.6 kg",
      "Peso unidad exterior": "85.6 kg",
      "Control": "Control alámbrico"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "carrier-53ccq057hp-901a",
    gallery: [
      { src: "img/comercial/carrier-cassette-onoff-frontal.webp", alt: "Carrier Cassette ON/OFF, unidad interior" },
    ],
    brand: "Carrier",
    line: "Cassette",
    name: "Carrier Cassette ON/OFF",
    model: "53CCQ057HP-901A",
    capacityLabel: "5 TR",
    capacityTR: 5.0,
    price: 3900050, // Efectivo (Excel de precios reales)
    priceOriginal: 6500083.17,
    installments: 6,
    installmentValue: 953345.53,
    isNew: false,
    features: ["ON/OFF"],
    technology: "ON/OFF",
    type: "Cassette",
    refrigerant: "",
    description: "Equipo cassette de 4 vías para instalación empotrada en cielorraso, con distribución de aire en 360° ideal para locales comerciales y oficinas de planta abierta.",
    specs: {
      "Capacidad": "5 TR",
      "Tecnología": "ON/OFF",
      "Ficha técnica detallada": "A confirmar con el fabricante"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "surrey-689szq057hp-asa",
    gallery: [
      { src: "img/comercial/surrey-cassette-onoff-frontal.webp", alt: "Surrey Cassette ON/OFF, unidad interior" },
      { src: "img/comercial/surrey-cassette-onoff-angular.webp", alt: "Surrey Cassette ON/OFF, unidad interior vista angular" },
      { src: "img/comercial/surrey-cassette-onoff-exterior.webp", alt: "Surrey Cassette ON/OFF, unidad exterior" },
    ],
    brand: "Surrey",
    line: "Cassette",
    name: "Surrey Cassette ON/OFF",
    model: "689SZQ057HP-ASA",
    capacityLabel: "5 TR",
    capacityTR: 5.0,
    price: 3786249, // Efectivo (Excel de precios reales)
    priceOriginal: 6310415.67,
    installments: 6,
    installmentValue: 925527.63,
    isNew: false,
    features: ["ON/OFF"],
    technology: "ON/OFF",
    type: "Cassette",
    refrigerant: "",
    description: "Equipo cassette de 4 vías para instalación empotrada en cielorraso, con distribución de aire en 360° ideal para locales comerciales y oficinas de planta abierta.",
    specs: {
      "Capacidad": "5 TR",
      "Tecnología": "ON/OFF",
      "Ficha técnica detallada": "A confirmar con el fabricante"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "midea-mcavc-r057hn8-1a",
    gallery: [
      { src: "img/comercial/midea-cassette-inverter-familia-r32.webp", alt: "Midea Cassette Inverter, sistema completo R-32 Eco Friendly" },
    ],
    brand: "Midea",
    line: "Cassette",
    name: "Midea Cassette Inverter",
    model: "MCAVC-R057HN8-1A",
    capacityLabel: "5 TR",
    capacityTR: 5.0,
    price: 4618028, // Efectivo (Excel de precios reales)
    priceOriginal: 7696712.67,
    installments: 6,
    installmentValue: 1128851.19,
    isNew: false,
    features: ["Inverter", "R32", "Control remoto LCD"],
    technology: "Inverter",
    type: "Cassette",
    refrigerant: "R32",
    description: "Equipo cassette de 4 vías para instalación empotrada en cielorraso, con distribución de aire en 360° ideal para locales comerciales y oficinas de planta abierta. Inverter; refrigerante R-32; presostatos de alta y baja presión; detector de secuencia y falta de fase; detector de pérdida de refrigerante; control remoto multifunción con display LCD; auto restart; Turbo; Follow Me; Gold Cover; auto defrosting.",
    specs: {
      "Capacidad": "5 TR",
      "Tecnología": "Inverter",
      "Refrigerante": "R32",
      "Tensión": "220-1-50",
      "Dimensiones unidad interior": "245 x 830 x 830 mm",
      "Dimensiones unidad exterior": "810 x 946 x 410 mm",
      "Peso unidad interior": "28.8 kg",
      "Peso unidad exterior": "76.1 kg",
      "Control": "Control remoto"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "midea-mcavc-r072hn8-1a",
    gallery: [
      { src: "img/comercial/midea-cassette-inverter-familia-r32.webp", alt: "Midea Cassette Inverter, sistema completo R-32 Eco Friendly" },
    ],
    brand: "Midea",
    line: "Cassette",
    name: "Midea Cassette Inverter",
    model: "MCAVC-R072HN8-1A",
    capacityLabel: "6 TR",
    capacityTR: 6.0,
    price: 5167718, // Efectivo (Excel de precios reales)
    priceOriginal: 8612864.17,
    installments: 6,
    installmentValue: 1263220.08,
    isNew: false,
    features: ["Inverter", "R32", "Control remoto LCD"],
    technology: "Inverter",
    type: "Cassette",
    refrigerant: "R32",
    description: "Equipo cassette de 4 vías para instalación empotrada en cielorraso, con distribución de aire en 360° ideal para locales comerciales y oficinas de planta abierta. Inverter; refrigerante R-32; presostatos de alta y baja presión; detector de secuencia y falta de fase; detector de pérdida de refrigerante; control remoto multifunción con display LCD; auto restart; Turbo; Follow Me; Gold Cover; auto defrosting.",
    specs: {
      "Capacidad": "6 TR",
      "Tecnología": "Inverter",
      "Refrigerante": "R32",
      "Tensión": "380-3-50",
      "Dimensiones unidad interior": "287 x 830 x 830 mm",
      "Dimensiones unidad exterior": "975 x 980 x 375 mm",
      "Peso unidad interior": "30.7 kg",
      "Peso unidad exterior": "85.6 kg",
      "Control": "Control remoto"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "carrier-53tqvc057-901",
    gallery: [
      { src: "img/comercial/carrier-conductos-onoff-sistema.webp", alt: "Carrier Sistema para Conductos ON/OFF, unidad interior y exterior" },
    ],
    brand: "Carrier",
    line: "Sistema para Conductos",
    name: "Carrier Sistema para Conductos ON/OFF",
    model: "53TQVC057--901",
    capacityLabel: "5 TR",
    capacityTR: 5.0,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: false,
    features: ["ON/OFF", "R410A"],
    technology: "ON/OFF",
    type: "Sistema para Conductos",
    refrigerant: "R410A",
    description: "Sistema separado para instalación oculta con red de conductos, pensado para climatizar varios ambientes o grandes superficies desde una sola unidad, con rejillas de distribución discretas.",
    specs: {
      "Capacidad": "5 TR",
      "Tecnología": "ON/OFF",
      "Refrigerante": "R410A",
      "Ficha técnica detallada": "A confirmar con el fabricante"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "carrier-53tqvc072-901",
    gallery: [
      { src: "img/comercial/carrier-conductos-onoff-sistema.webp", alt: "Carrier Sistema para Conductos ON/OFF, unidad interior y exterior" },
    ],
    brand: "Carrier",
    line: "Sistema para Conductos",
    name: "Carrier Sistema para Conductos ON/OFF",
    model: "53TQVC072--901",
    capacityLabel: "6 TR",
    capacityTR: 6.0,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: false,
    features: ["ON/OFF", "R410A"],
    technology: "ON/OFF",
    type: "Sistema para Conductos",
    refrigerant: "R410A",
    description: "Sistema separado para instalación oculta con red de conductos, pensado para climatizar varios ambientes o grandes superficies desde una sola unidad, con rejillas de distribución discretas.",
    specs: {
      "Capacidad": "6 TR",
      "Tecnología": "ON/OFF",
      "Refrigerante": "R410A",
      "Ficha técnica detallada": "A confirmar con el fabricante"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "surrey-641ft6evzq057-sa",
    gallery: [
      { src: "img/comercial/surrey-conductos-onoff-sistema.webp", alt: "Surrey Sistema para Conductos ON/OFF, unidad interior y exterior" },
    ],
    brand: "Surrey",
    line: "Sistema para Conductos",
    name: "Surrey Sistema para Conductos ON/OFF",
    model: "641FT6EVZQ057-SA",
    capacityLabel: "5 TR",
    capacityTR: 5.0,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: false,
    features: ["ON/OFF", "R410A"],
    technology: "ON/OFF",
    type: "Sistema para Conductos",
    refrigerant: "R410A",
    description: "Sistema separado para instalación oculta con red de conductos, pensado para climatizar varios ambientes o grandes superficies desde una sola unidad, con rejillas de distribución discretas.",
    specs: {
      "Capacidad": "5 TR",
      "Tecnología": "ON/OFF",
      "Refrigerante": "R410A",
      "Ficha técnica detallada": "A confirmar con el fabricante"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "surrey-641ft6evzq072-sa",
    gallery: [
      { src: "img/comercial/surrey-conductos-onoff-sistema.webp", alt: "Surrey Sistema para Conductos ON/OFF, unidad interior y exterior" },
    ],
    brand: "Surrey",
    line: "Sistema para Conductos",
    name: "Surrey Sistema para Conductos ON/OFF",
    model: "641FT6EVZQ072-SA",
    capacityLabel: "6 TR",
    capacityTR: 6.0,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: false,
    features: ["ON/OFF", "R410A"],
    technology: "ON/OFF",
    type: "Sistema para Conductos",
    refrigerant: "R410A",
    description: "Sistema separado para instalación oculta con red de conductos, pensado para climatizar varios ambientes o grandes superficies desde una sola unidad, con rejillas de distribución discretas.",
    specs: {
      "Capacidad": "6 TR",
      "Tecnología": "ON/OFF",
      "Refrigerante": "R410A",
      "Ficha técnica detallada": "A confirmar con el fabricante"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "midea-mcffc-r057h-01a",
    gallery: [
      { src: "img/comercial/midea-conjunto-de-frio-sistema.webp", alt: "Midea Conjunto de Frío, unidad interior y exterior" },
    ],
    brand: "Midea",
    line: "Conjunto de Frío",
    name: "Midea Conjunto de Frío",
    model: "MCFFC-R057H-01A",
    capacityLabel: "5 TR",
    capacityTR: 5.0,
    price: 6011681, // Efectivo (Excel de precios reales)
    priceOriginal: 10019469.0,
    installments: 6,
    installmentValue: 1469522.12,
    isNew: false,
    features: ["R410A"],
    technology: "",
    type: "Conjunto de Frío",
    refrigerant: "R410A",
    description: "Conjunto exclusivamente de refrigeración (sin función calor), pensado para aplicaciones comerciales o industriales que solo necesitan enfriar el ambiente.",
    specs: {
      "Capacidad": "5 TR",
      "Refrigerante": "R410A",
      "Ficha técnica detallada": "A confirmar con el fabricante"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "midea-mcffc-r072h-01a",
    gallery: [
      { src: "img/comercial/midea-conjunto-de-frio-sistema.webp", alt: "Midea Conjunto de Frío, unidad interior y exterior" },
    ],
    brand: "Midea",
    line: "Conjunto de Frío",
    name: "Midea Conjunto de Frío",
    model: "MCFFC-R072H-01A",
    capacityLabel: "6 TR",
    capacityTR: 6.0,
    price: 6695864, // Efectivo (Excel de precios reales)
    priceOriginal: 11159773.0,
    installments: 6,
    installmentValue: 1636766.71,
    isNew: false,
    features: ["R410A"],
    technology: "",
    type: "Conjunto de Frío",
    refrigerant: "R410A",
    description: "Conjunto exclusivamente de refrigeración (sin función calor), pensado para aplicaciones comerciales o industriales que solo necesitan enfriar el ambiente.",
    specs: {
      "Capacidad": "6 TR",
      "Refrigerante": "R410A",
      "Ficha técnica detallada": "A confirmar con el fabricante"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "midea-mcmh-r060n1-aca",
    gallery: [
      { src: "img/comercial/midea-rooftop-onoff.webp", alt: "Midea Rooftop ON/OFF" },
    ],
    brand: "Midea",
    line: "Rooftop",
    name: "Midea Rooftop ON/OFF",
    model: "MCMH-R060N1--ACA",
    capacityLabel: "5 TR",
    capacityTR: 5.0,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: false,
    features: ["ON/OFF", "R410A"],
    technology: "ON/OFF",
    type: "Rooftop",
    refrigerant: "R410A",
    description: "Unidad autocontenida para montaje sobre techo (rooftop), que integra todo el ciclo frigorífico en un solo gabinete para climatizar grandes superficies comerciales o industriales.",
    specs: {
      "Capacidad": "5 TR",
      "Tecnología": "ON/OFF",
      "Refrigerante": "R410A",
      "Ficha técnica detallada": "A confirmar con el fabricante"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "midea-mrc-090hwdn1-r-a",
    gallery: [
      { src: "img/comercial/midea-rooftop-inverter.webp", alt: "Midea Rooftop Inverter" },
    ],
    brand: "Midea",
    line: "Rooftop",
    name: "Midea Rooftop Inverter",
    model: "MRC-090HWDN1-R-A",
    capacityLabel: "7.5 TR",
    capacityTR: 7.5,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: false,
    features: ["Inverter", "R410A"],
    technology: "Inverter",
    type: "Rooftop",
    refrigerant: "R410A",
    description: "Unidad autocontenida para montaje sobre techo (rooftop), que integra todo el ciclo frigorífico en un solo gabinete para climatizar grandes superficies comerciales o industriales.",
    specs: {
      "Capacidad": "7.5 TR",
      "Tecnología": "Inverter",
      "Refrigerante": "R410A",
      "Ficha técnica detallada": "A confirmar con el fabricante"
    },
    installInfo: "Instalación de equipos comerciales a cargo de técnicos certificados DAClimaTECH. El costo se cotiza según el proyecto, la distancia de cañería/conductos y el tipo de obra.",
  },
  {
    id: "midea-condensadora-v8-easyfit-series",
    gallery: [
      { src: "img/comercial/midea-v8-easyfit-condensadora.webp", alt: "Condensadora Midea V8 EasyFit Series, 8 a 24 HP" },
    ],
    brand: "Midea",
    line: "Condensadora V8 EasyFit Series",
    name: "Midea Condensadora V8 EasyFit Series",
    model: "9 modelos (MVi-252WV2GN1-B a MVi-670WV2GN1-A)",
    capacityLabel: "25,2 a 67 kW (8 a 24 HP)",
    capacityTR: null,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: true,
    features: ["Inverter", "VRF"],
    technology: "Inverter",
    type: "VRF — Condensadora",
    refrigerant: "",
    description: "Línea Midea Condensadora V8 EasyFit Series, 9 capacidades de 25,2 a 67 kW (8 a 24 HP). No modulares — cada unidad no se combina con otras condensadoras para formar sistemas de mayor capacidad. Incluye tecnología V8 Supersense, Hyperlink y Doctor M 2.0. La propuesta más competitiva para pequeños sistemas.",
    specs: {
      "Tecnología": "Inverter",
      "Rango de capacidad": "25,2 a 67 kW (8 a 24 HP)",
      "Modelos y capacidades disponibles": "<li><strong>MVi-252WV2GN1-B</strong> — 25,2 kW (8 HP) — 182 kg — 1130×1760×580 mm</li><li><strong>MVi-280WV2GN1-B</strong> — 28 kW (10 HP) — 182 kg — 1130×1760×580 mm</li><li><strong>MVi-335WV2GN1-B</strong> — 33,5 kW (12 HP) — 185 kg — 1130×1760×580 mm</li><li><strong>MVi-400WV2GN1-A</strong> — 40 kW (14 HP) — 185 kg — 1130×1760×580 mm</li><li><strong>MVi-450WV2GN1-A</strong> — 45 kW (16 HP) — 192 kg — 1130×1760×580 mm</li><li><strong>MVi-500WV2GN1-A</strong> — 50 kW (18 HP) — 213 kg — 1250×1760×580 mm</li><li><strong>MVi-560WV2GN1-A</strong> — 56 kW (20 HP) — 223 kg — 1250×1760×580 mm</li><li><strong>MVi-615WV2GN1-A</strong> — 61,5 kW (22 HP) — 233 kg — 1250×1760×580 mm</li><li><strong>MVi-670WV2GN1-A</strong> — 67 kW (24 HP) — 238 kg — 1250×1760×580 mm</li>"
    },
    installInfo: "Instalación de sistemas VRF a cargo de técnicos certificados DAClimaTECH, con diseño de proyecto, cálculo de cañerías y puesta en marcha. Se cotiza según el proyecto.",
  },
  {
    id: "midea-condensadora-v8-mini-trifasica",
    gallery: [
      { src: "img/comercial/midea-v8-mini-trifasica-condensadora.webp", alt: "Condensadora Midea V8 Mini Trifásica" },
    ],
    brand: "Midea",
    line: "Condensadora V8 Mini Trifásica",
    name: "Midea Condensadora V8 Mini Trifásica",
    model: "3 modelos (MV8M-120WV2GN1 a MV8M-160WV2GN1)",
    capacityLabel: "12 a 16 kW (4 a 6 HP)",
    capacityTR: null,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: true,
    features: ["Inverter", "VRF"],
    technology: "Inverter",
    type: "VRF — Condensadora",
    refrigerant: "",
    description: "Línea Midea Condensadora V8 Mini Trifásica, 3 capacidades de 12 a 16 kW (4 a 6 HP). No modulares — cada unidad no se combina con otras condensadoras para formar sistemas de mayor capacidad. Incluye tecnología V8 Supersense, Hyperlink y Doctor M 2.0. Compatible con la línea de derivadores y colectores flare, instalación libre de soldaduras. La mayor capacidad de líneas largas del mercado para la categoría Mini VRF.",
    specs: {
      "Tecnología": "Inverter",
      "Rango de capacidad": "12 a 16 kW (4 a 6 HP)",
      "Modelos y capacidades disponibles": "<li><strong>MV8M-120WV2GN1</strong> — 12 kW (4 HP) — 109 kg — 1073×864×523 mm</li><li><strong>MV8M-140WV2GN1</strong> — 14 kW (5 HP) — 109 kg — 1073×864×523 mm</li><li><strong>MV8M-160WV2GN1</strong> — 16 kW (6 HP) — 109 kg — 1073×864×523 mm</li>"
    },
    installInfo: "Instalación de sistemas VRF a cargo de técnicos certificados DAClimaTECH, con diseño de proyecto, cálculo de cañerías y puesta en marcha. Se cotiza según el proyecto.",
  },
  {
    id: "midea-condensadora-atom-t-monofasica",
    gallery: [
      { src: "img/comercial/midea-atom-t-condensadora.webp", alt: "Condensadora Midea Atom T Monofásica" },
    ],
    brand: "Midea",
    line: "Condensadora Atom T Monofásica",
    name: "Midea Condensadora Atom T Monofásica",
    model: "3 modelos (MDV-V120WHN8-AT a MDV-V160WHN8-AT)",
    capacityLabel: "12 a 16 kW (4 a 6 HP)",
    capacityTR: null,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: true,
    features: ["Inverter", "VRF", "R32"],
    technology: "Inverter",
    type: "VRF — Condensadora",
    refrigerant: "R32",
    description: "Línea Midea Condensadora Atom T Monofásica, 3 capacidades de 12 a 16 kW (4 a 6 HP). No modulares — cada unidad no se combina con otras condensadoras para formar sistemas de mayor capacidad. Sólo disponible para suministro monofásico (220V). Refrigerante R32 de bajo GWP. Compatible con la línea de derivadores y colectores con conexiones flare.",
    specs: {
      "Tecnología": "Inverter",
      "Rango de capacidad": "12 a 16 kW (4 a 6 HP)",
      "Refrigerante": "R32",
      "Modelos y capacidades disponibles": "<li><strong>MDV-V120WHN8-AT</strong> — 12 kW (4 HP) — 62,5 kg — 950×840×440 mm</li><li><strong>MDV-V140WHN8-AT</strong> — 14 kW (5 HP) — 77,5 kg — 950×840×440 mm</li><li><strong>MDV-V160WHN8-AT</strong> — 16 kW (6 HP) — 77,5 kg — 950×840×440 mm</li>"
    },
    installInfo: "Instalación de sistemas VRF a cargo de técnicos certificados DAClimaTECH, con diseño de proyecto, cálculo de cañerías y puesta en marcha. Se cotiza según el proyecto.",
  },
  {
    id: "midea-evaporadora-v8-tipo-muro-hi-wall",
    gallery: [
      { src: "img/comercial/midea-evaporadora-hi-wall.webp", alt: "Evaporadora VRF Midea Tipo Muro Hi Wall, control remoto y bomba de drenaje inverter" },
    ],
    brand: "Midea",
    line: "Evaporadora VRF Tipo Muro Hi Wall",
    name: "Midea Evaporadora VRF Tipo Muro Hi Wall",
    model: "8 modelos (MIH15GHN18 a MIH80GHN18)",
    capacityLabel: "1,5 a 8 kW (0,5 a 3 HP)",
    capacityTR: null,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: true,
    features: ["Inverter", "VRF", "Bomba de drenaje DC Inverter"],
    technology: "Inverter",
    type: "VRF — Evaporadora",
    refrigerant: "R410 / R32",
    description: "Línea Midea Evaporadora VRF Tipo Muro Hi Wall, 8 capacidades de 1,5 a 8 kW (0,5 a 3 HP). Ventilador DC Inverter de 7 velocidades, control remoto RM12F con tecnología Follow-Me incluido. Modo Super Low Noise 25dB(A). Bomba de drenaje DC Inverter, 1200mm columna de agua incluida.",
    specs: {
      "Rango de capacidad": "1,5 a 8 kW (0,5 a 3 HP)",
      "Refrigerante": "R410 / R32",
      "Compatibilidad": "Condensadoras V8 Master Modular, V8 Master Individual, V8 EasyFit, V8 Mini y Atom T",
      "Modelos y capacidades disponibles": "<li><strong>MIH15GHN18</strong> — 1,5 kW (0,5 HP) — 9 kg — 750×295×265 mm</li><li><strong>MIH22GHN18</strong> — 2,2 kW (0,8 HP) — 9 kg — 750×295×265 mm</li><li><strong>MIH28GHN18</strong> — 2,8 kW (1,0 HP) — 10 kg — 750×295×265 mm</li><li><strong>MIH36GHN18</strong> — 3,6 kW (1,3 HP) — 10 kg — 750×295×265 mm</li><li><strong>MIH45GHN18</strong> — 4,5 kW (1,6 HP) — 11,5 kg — 950×295×265 mm</li><li><strong>MIH56GHN18</strong> — 5,6 kW (2,0 HP) — 11,5 kg — 950×295×265 mm</li><li><strong>MIH71GHN18</strong> — 7,1 kW (2,5 HP) — 15 kg — 1200×295×265 mm</li><li><strong>MIH80GHN18</strong> — 8 kW (3 HP) — 15 kg — 1200×295×265 mm</li>"
    },
    installInfo: "Instalación de sistemas VRF a cargo de técnicos certificados DAClimaTECH, con diseño de proyecto, cálculo de cañerías y puesta en marcha. Se cotiza según el proyecto.",
  },
  {
    id: "midea-evaporadora-v8-cassette-4-vias",
    gallery: [
      { src: "img/comercial/midea-evaporadora-cassette-4-vias.webp", alt: "Evaporadora VRF Midea Cassette 4 Vías, control remoto y bomba de drenaje inverter" },
    ],
    brand: "Midea",
    line: "Evaporadora VRF Cassette 4 Vías",
    name: "Midea Evaporadora VRF Cassette 4 Vías",
    model: "12 modelos (MIH28Q4HN18 a MIH180Q4HN18)",
    capacityLabel: "2,8 a 18 kW (1 a 6,4 HP)",
    capacityTR: null,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: true,
    features: ["Inverter", "VRF", "Bomba de drenaje DC Inverter"],
    technology: "Inverter",
    type: "VRF — Evaporadora",
    refrigerant: "R410 / R32",
    description: "Línea Midea Evaporadora VRF Cassette 4 Vías, 12 capacidades de 2,8 a 18 kW (1 a 6,4 HP). Ventilador DC Inverter de 7 velocidades, control remoto RM12F con tecnología Follow-Me incluido. Requiere panel decorativo (T-MBQ4-01F o T-MBQ4-02E1, según capacidad) vendido por separado. Flujo de Aire 360° con control individual de louvers.",
    specs: {
      "Rango de capacidad": "2,8 a 18 kW (1 a 6,4 HP)",
      "Refrigerante": "R410 / R32",
      "Compatibilidad": "Condensadoras V8 Master Modular, V8 Master Individual, V8 EasyFit, V8 Mini, V6R y Atom T",
      "Modelos y capacidades disponibles": "<li><strong>MIH28Q4HN18</strong> — 2,8 kW (1 HP) — 18 kg — 840×204×840 mm</li><li><strong>MIH36Q4HN18</strong> — 3,6 kW (1,3 HP) — 18 kg — 840×204×840 mm</li><li><strong>MIH45Q4HN18</strong> — 4,5 kW (1,6 HP) — 18 kg — 840×204×840 mm</li><li><strong>MIH56Q4HN18</strong> — 5,6 kW (2 HP) — 19,5 kg — 840×204×840 mm</li><li><strong>MIH71Q4HN18</strong> — 7,1 kW (2,5 HP) — 19,5 kg — 840×204×840 mm</li><li><strong>MIH80Q4HN18</strong> — 8 kW (2,9 HP) — 19,5 kg — 840×204×840 mm</li><li><strong>MIH90Q4HN18</strong> — 9 kW (3,2 HP) — 21,5 kg — 840×246×840 mm</li><li><strong>MIH100Q4HN18</strong> — 10 kW (3,6 HP) — 21,5 kg — 840×246×840 mm</li><li><strong>MIH112Q4HN18</strong> — 11,2 kW (4,0 HP) — 24 kg — 840×288×840 mm</li><li><strong>MIH140Q4HN18</strong> — 14 kW (5,0 HP) — 24 kg — 840×288×840 mm</li><li><strong>MIH160Q4HN18</strong> — 16 kW (5,7 HP) — 32,6 kg — 950×300×950 mm</li><li><strong>MIH180Q4HN18</strong> — 18 kW (6,4 HP) — 32,7 kg — 950×300×950 mm</li>"
    },
    installInfo: "Instalación de sistemas VRF a cargo de técnicos certificados DAClimaTECH, con diseño de proyecto, cálculo de cañerías y puesta en marcha. Se cotiza según el proyecto.",
  },
  {
    id: "midea-evaporadora-v8-ducto-baja-presion-arc",
    gallery: [
      { src: "img/comercial/midea-evaporadora-ducto-baja-presion-arc.webp", alt: "Evaporadora VRF Midea de Ducto de Baja Presión ARC, control remoto y bomba de drenaje inverter" },
    ],
    brand: "Midea",
    line: "Evaporadora VRF de Ducto de Baja Presión ARC",
    name: "Midea Evaporadora VRF de Ducto de Baja Presión ARC",
    model: "10 modelos (MIH15T3HN18 a MIH112T3HN18)",
    capacityLabel: "1,5 a 11,2 kW (0,5 a 4,0 HP)",
    capacityTR: null,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: true,
    features: ["Inverter", "VRF", "Bomba de drenaje DC Inverter"],
    technology: "Inverter",
    type: "VRF — Evaporadora",
    refrigerant: "R410 / R32",
    description: "Línea Midea Evaporadora VRF de Ducto de Baja Presión ARC, 10 capacidades de 1,5 a 11,2 kW (0,5 a 4,0 HP). Ventilador DC Inverter de 7 velocidades, control remoto RM12F con tecnología Follow-Me incluido. Modo Super Low Noise 22dB(A). Presión disponible 50Pa (1,5~7,1kW) y 80Pa (8~11,2kW). Tecnología de presión auto-adaptativa.",
    specs: {
      "Rango de capacidad": "1,5 a 11,2 kW (0,5 a 4,0 HP)",
      "Refrigerante": "R410 / R32",
      "Compatibilidad": "Condensadoras V8 Master Modular, V8 Master Individual, V8 EasyFit, V8 Mini, V6R y Atom T",
      "Modelos y capacidades disponibles": "<li><strong>MIH15T3HN18</strong> — 1,5 kW (0,5 HP) — 11,5 kg — 550×199×450 mm</li><li><strong>MIH22T3HN18</strong> — 2,2 kW (0,8 HP) — 11,5 kg — 550×199×450 mm</li><li><strong>MIH28T3HN18</strong> — 2,8 kW (1,0 HP) — 11,5 kg — 550×199×450 mm</li><li><strong>MIH36T3HN18</strong> — 3,6 kW (1,3 HP) — 13 kg — 700×199×450 mm</li><li><strong>MIH45T3HN18</strong> — 4,5 kW (1,6 HP) — 16,5 kg — 900×199×450 mm</li><li><strong>MIH56T3HN18</strong> — 5,6 kW (2,0 HP) — 16,5 kg — 900×199×450 mm</li><li><strong>MIH71T3HN18</strong> — 7,1 kW (2,5 HP) — 20 kg — 1100×199×450 mm</li><li><strong>MIH80T3HN18</strong> — 8 kW (2,9 HP) — 28 kg — 1600×199×450 mm</li><li><strong>MIH90T3HN18</strong> — 9 kW (3,2 HP) — 28 kg — 1600×199×450 mm</li><li><strong>MIH112T3HN18</strong> — 11,2 kW (4,0 HP) — 28 kg — 1600×199×450 mm</li>"
    },
    installInfo: "Instalación de sistemas VRF a cargo de técnicos certificados DAClimaTECH, con diseño de proyecto, cálculo de cañerías y puesta en marcha. Se cotiza según el proyecto.",
  },
  {
    id: "midea-evaporadora-v8-ducto-media-presion",
    gallery: [
      { src: "img/comercial/midea-evaporadora-ducto-media-presion.webp", alt: "Evaporadora VRF Midea de Ducto de Media Presión, control remoto y bomba de drenaje inverter" },
    ],
    brand: "Midea",
    line: "Evaporadora VRF de Ducto de Media Presión",
    name: "Midea Evaporadora VRF de Ducto de Media Presión",
    model: "12 modelos (MIH15T2HN18 a MIH160T2HN18)",
    capacityLabel: "1,5 a 16,0 kW (0,5 a 5,7 HP)",
    capacityTR: null,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: true,
    features: ["Inverter", "VRF", "Bomba de drenaje DC Inverter"],
    technology: "Inverter",
    type: "VRF — Evaporadora",
    refrigerant: "R410 / R32",
    description: "Línea Midea Evaporadora VRF de Ducto de Media Presión, 12 capacidades de 1,5 a 16,0 kW (0,5 a 5,7 HP). Ventilador DC Inverter de 7 velocidades, control remoto RM12F con tecnología Follow-Me incluido. Bajo perfil de 245mm de alto, ideal para espacios reducidos. Presión disponible 160 Pa. Modo Super Low Noise 22dB(A). Filtros HEPA disponibles como accesorio opcional.",
    specs: {
      "Rango de capacidad": "1,5 a 16,0 kW (0,5 a 5,7 HP)",
      "Refrigerante": "R410 / R32",
      "Compatibilidad": "Condensadoras V8 Master Modular, V8 Master Individual, V8 EasyFit, V8 Mini, V6R y Atom T",
      "Modelos y capacidades disponibles": "<li><strong>MIH15T2HN18</strong> — 1,5 kW (0,5 HP) — 18,5 kg — 600×245×750 mm</li><li><strong>MIH22T2HN18</strong> — 2,2 kW (0,8 HP) — 18,5 kg — 600×245×750 mm</li><li><strong>MIH28T2HN18</strong> — 2,8 kW (1,0 HP) — 18,5 kg — 600×245×750 mm</li><li><strong>MIH36T2HN18</strong> — 3,6 kW (1,3 HP) — 18,5 kg — 600×245×750 mm</li><li><strong>MIH45T2HN18</strong> — 4,5 kW (1,6 HP) — 19,5 kg — 600×245×750 mm</li><li><strong>MIH56T2HN18</strong> — 5,6 kW (2,0 HP) — 24 kg — 800×245×750 mm</li><li><strong>MIH71T2HN18</strong> — 7,1 kW (2,5 HP) — 25 kg — 800×245×750 mm</li><li><strong>MIH80T2HN18</strong> — 8,0 kW (2,9 HP) — 30 kg — 1050×245×750 mm</li><li><strong>MIH90T2HN18</strong> — 9,0 kW (3,2 HP) — 31 kg — 1050×245×750 mm</li><li><strong>MIH112T2HN18</strong> — 11,2 kW (4,0 HP) — 37 kg — 1400×245×750 mm</li><li><strong>MIH140T2HN18</strong> — 14,0 kW (5,0 HP) — 39 kg — 1400×245×750 mm</li><li><strong>MIH160T2HN18</strong> — 16,0 kW (5,7 HP) — 39 kg — 1400×245×750 mm</li>"
    },
    installInfo: "Instalación de sistemas VRF a cargo de técnicos certificados DAClimaTECH, con diseño de proyecto, cálculo de cañerías y puesta en marcha. Se cotiza según el proyecto.",
  },
  {
    id: "midea-evaporadora-v8-ducto-alta-presion",
    gallery: [
      { src: "img/comercial/midea-evaporadora-ducto-alta-presion.webp", alt: "Evaporadora VRF Midea de Ducto de Alta Presión, control remoto y bomba de drenaje inverter" },
    ],
    brand: "Midea",
    line: "Evaporadora VRF de Ducto de Alta Presión",
    name: "Midea Evaporadora VRF de Ducto de Alta Presión",
    model: "16 modelos (MIH56T1HN18 a MIH560T1HN18)",
    capacityLabel: "5,6 a 56 kW (2,0 a 20,0 HP)",
    capacityTR: null,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: true,
    features: ["Inverter", "VRF", "Bomba de drenaje DC Inverter"],
    technology: "Inverter",
    type: "VRF — Evaporadora",
    refrigerant: "R410 / R32",
    description: "Línea Midea Evaporadora VRF de Ducto de Alta Presión, 16 capacidades de 5,6 a 56 kW (2,0 a 20,0 HP). Ventilador DC Inverter de 7 velocidades, control remoto RM12F con tecnología Follow-Me incluido. Presión disponible 160 Pa. Bajo perfil de 300mm de alto en unidades de 5,6~16kW. Filtros F7, H13 HEPA disponibles como accesorio opcional.",
    specs: {
      "Rango de capacidad": "5,6 a 56 kW (2,0 a 20,0 HP)",
      "Refrigerante": "R410 / R32",
      "Compatibilidad": "Condensadoras V8 Master Modular, V8 Master Individual, V8 EasyFit, V8 Mini, V6R y Atom T",
      "Modelos y capacidades disponibles": "<li><strong>MIH56T1HN18</strong> — 5,6 kW (2,0 HP) — 35 kg — 1050×299×750 mm</li><li><strong>MIH71T1HN18</strong> — 7,1 kW (2,5 HP) — 35 kg — 1050×299×750 mm</li><li><strong>MIH80T1HN18</strong> — 8 kW (2,9 HP) — 35 kg — 1050×299×750 mm</li><li><strong>MIH90T1HN18</strong> — 9 kW (3,2 HP) — 35 kg — 1050×299×750 mm</li><li><strong>MIH112T1HN18</strong> — 11,2 kW (4,0 HP) — 44,5 kg — 1400×299×750 mm</li><li><strong>MIH125T1HN18</strong> — 12,5 kW (4,5 HP) — 46,5 kg — 1400×299×750 mm</li><li><strong>MIH140T1HN18</strong> — 14 kW (5,0 HP) — 46,5 kg — 1400×299×750 mm</li><li><strong>MIH160T1HN18</strong> — 16 kW (5,7 HP) — 46,5 kg — 1400×299×750 mm</li><li><strong>MIH200T1HN18</strong> — 20 kW (7,1 HP) — 125 kg — 1300×580×900 mm</li><li><strong>MIH224T1HN18</strong> — 22,4 kW (8,0 HP) — 125 kg — 1300×580×900 mm</li><li><strong>MIH252T1HN18</strong> — 25,2 kW (9,0 HP) — 125 kg — 1300×580×900 mm</li><li><strong>MIH280T1HN18</strong> — 28 kW (10,0 HP) — 125 kg — 1300×580×900 mm</li><li><strong>MIH335T1HN18</strong> — 33,5 kW (12,0 HP) — 128 kg — 1300×580×900 mm</li><li><strong>MIH400T1HN18</strong> — 40 kW (14,3 HP) — 166 kg — 1850×580×900 mm</li><li><strong>MIH450T1HN18</strong> — 45 kW (16,1 HP) — 166 kg — 1850×580×900 mm</li><li><strong>MIH560T1HN18</strong> — 56 kW (20,0 HP) — 170 kg — 1850×580×900 mm</li>"
    },
    installInfo: "Instalación de sistemas VRF a cargo de técnicos certificados DAClimaTECH, con diseño de proyecto, cálculo de cañerías y puesta en marcha. Se cotiza según el proyecto.",
  },
  {
    id: "midea-evaporadora-v8-cassette-4-vias-compacto",
    gallery: [
      { src: "img/comercial/midea-evaporadora-cassette-4-vias-compacto.webp", alt: "Evaporadora VRF Midea Cassette 4 Vías Compacto, control remoto y bomba de drenaje inverter" },
    ],
    brand: "Midea",
    line: "Evaporadora VRF Cassette 4 Vías Compacto",
    name: "Midea Evaporadora VRF Cassette 4 Vías Compacto",
    model: "7 modelos (MIH15Q4CHN18 a MIH63Q4CHN18)",
    capacityLabel: "1,5 a 6,3 kW (0,5 a 2,3 HP)",
    capacityTR: null,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: true,
    features: ["Inverter", "VRF", "Bomba de drenaje DC Inverter"],
    technology: "Inverter",
    type: "VRF — Evaporadora",
    refrigerant: "R410 / R32",
    description: "Línea Midea Evaporadora VRF Cassette 4 Vías Compacto, 7 capacidades de 1,5 a 6,3 kW (0,5 a 2,3 HP). Ventilador DC Inverter de 7 velocidades, control remoto RM12F con tecnología Follow-Me incluido. Requiere panel decorativo T-MBQ4-03F vendido por separado. Flujo de Aire 360° con control individual de louvers.",
    specs: {
      "Rango de capacidad": "1,5 a 6,3 kW (0,5 a 2,3 HP)",
      "Refrigerante": "R410 / R32",
      "Compatibilidad": "Condensadoras V8 Master Modular, V8 Master Individual, V8 EasyFit, V8 Mini, V6R y Atom T",
      "Modelos y capacidades disponibles": "<li><strong>MIH15Q4CHN18</strong> — 1,5 kW (0,5 HP) — 13 kg — 575×235×638 mm</li><li><strong>MIH22Q4CHN18</strong> — 2,2 kW (0,8 HP) — 13 kg — 575×235×638 mm</li><li><strong>MIH28Q4CHN18</strong> — 2,8 kW (1,0 HP) — 13 kg — 575×235×638 mm</li><li><strong>MIH36Q4CHN18</strong> — 3,6 kW (1,3 HP) — 14 kg — 575×235×638 mm</li><li><strong>MIH45Q4CHN18</strong> — 4,5 kW (1,6 HP) — 14 kg — 575×235×638 mm</li><li><strong>MIH56Q4CHN18</strong> — 5,6 kW (2,0 HP) — 15 kg — 575×235×638 mm</li><li><strong>MIH63Q4CHN18</strong> — 6,3 kW (2,3 HP) — 15 kg — 575×235×638 mm</li>"
    },
    installInfo: "Instalación de sistemas VRF a cargo de técnicos certificados DAClimaTECH, con diseño de proyecto, cálculo de cañerías y puesta en marcha. Se cotiza según el proyecto.",
  },
  {
    id: "midea-evaporadora-v8-cassette-1-via-slim",
    gallery: [
      { src: "img/comercial/midea-evaporadora-cassette-1-via-slim.webp", alt: "Evaporadora VRF Midea Cassette 1 Vía Slim, control remoto y bomba de drenaje inverter" },
    ],
    brand: "Midea",
    line: "Evaporadora VRF Cassette 1 Vía Slim",
    name: "Midea Evaporadora VRF Cassette 1 Vía Slim",
    model: "7 modelos (MIH18Q1HN18-A a MIH71Q1HN18-A)",
    capacityLabel: "1,8 a 7,1 kW (0,6 a 2,5 HP)",
    capacityTR: null,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: true,
    features: ["Inverter", "VRF", "Bomba de drenaje DC Inverter"],
    technology: "Inverter",
    type: "VRF — Evaporadora",
    refrigerant: "R410 / R32",
    description: "Línea Midea Evaporadora VRF Cassette 1 Vía Slim, 7 capacidades de 1,8 a 7,1 kW (0,6 a 2,5 HP). Ventilador DC Inverter de 7 velocidades, control remoto RM12F con tecnología Follow-Me incluido. Diseño ultra-slim de 130mm. Modo Super Low Noise 23dB(A). Requiere panel decorativo (T-MBQ1-01G, T-MBQ1-02G o T-MBQ1-03G, según capacidad) vendido por separado.",
    specs: {
      "Rango de capacidad": "1,8 a 7,1 kW (0,6 a 2,5 HP)",
      "Refrigerante": "R410 / R32",
      "Compatibilidad": "Condensadoras V8 Master Modular, V8 Master Individual, V8 EasyFit, V8 Mini, V6R y Atom T",
      "Modelos y capacidades disponibles": "<li><strong>MIH18Q1HN18-A</strong> — 1,8 kW (0,6 HP) — 9,6 kg — 700×178×425 mm</li><li><strong>MIH22Q1HN18-A</strong> — 2,2 kW (0,8 HP) — 9,6 kg — 700×178×425 mm</li><li><strong>MIH28Q1HN18-A</strong> — 2,8 kW (1,0 HP) — 11,2 kg — 900×178×425 mm</li><li><strong>MIH36Q1HN18-A</strong> — 3,6 kW (1,3 HP) — 12,2 kg — 900×178×425 mm</li><li><strong>MIH45Q1HN18-A</strong> — 4,5 kW (1,6 HP) — 14,3 kg — 1200×178×425 mm</li><li><strong>MIH56Q1HN18-A</strong> — 5,6 kW (2,0 HP) — 15,5 kg — 1200×178×425 mm</li><li><strong>MIH71Q1HN18-A</strong> — 7,1 kW (2,5 HP) — 15,5 kg — 1200×178×425 mm</li>"
    },
    installInfo: "Instalación de sistemas VRF a cargo de técnicos certificados DAClimaTECH, con diseño de proyecto, cálculo de cañerías y puesta en marcha. Se cotiza según el proyecto.",
  },
  {
    id: "midea-evaporadora-v8-cassette-2-vias",
    gallery: [
      { src: "img/comercial/midea-evaporadora-cassette-2-vias.webp", alt: "Evaporadora VRF Midea Cassette 2 Vías, control remoto y bomba de drenaje inverter" },
    ],
    brand: "Midea",
    line: "Evaporadora VRF Cassette 2 Vías",
    name: "Midea Evaporadora VRF Cassette 2 Vías",
    model: "6 modelos (MIH22Q2HN18 a MIH71Q2HN18)",
    capacityLabel: "2,2 a 7,1 kW (0,8 a 2,5 HP)",
    capacityTR: null,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: true,
    features: ["Inverter", "VRF", "Bomba de drenaje DC Inverter"],
    technology: "Inverter",
    type: "VRF — Evaporadora",
    refrigerant: "R410 / R32",
    description: "Línea Midea Evaporadora VRF Cassette 2 Vías, 6 capacidades de 2,2 a 7,1 kW (0,8 a 2,5 HP). Ventilador DC Inverter de 7 velocidades, control remoto RM12F con tecnología Follow-Me incluido. Requiere panel decorativo T-MBQ2-01A vendido por separado.",
    specs: {
      "Rango de capacidad": "2,2 a 7,1 kW (0,8 a 2,5 HP)",
      "Refrigerante": "R410 / R32",
      "Compatibilidad": "Condensadoras V8 Master Modular, V8 Master Individual, V8 EasyFit, V8 Mini, V6R y Atom T",
      "Modelos y capacidades disponibles": "<li><strong>MIH22Q2HN18</strong> — 2,2 kW (0,8 HP) — 29,7 kg — 1172×299×591 mm</li><li><strong>MIH28Q2HN18</strong> — 2,8 kW (1,0 HP) — 29,7 kg — 1172×299×591 mm</li><li><strong>MIH36Q2HN18</strong> — 3,6 kW (1,3 HP) — 29,7 kg — 1172×299×591 mm</li><li><strong>MIH45Q2HN18</strong> — 4,5 kW (1,6 HP) — 31,6 kg — 1172×299×591 mm</li><li><strong>MIH56Q2HN18</strong> — 5,6 kW (2,0 HP) — 31,6 kg — 1172×299×591 mm</li><li><strong>MIH71Q2HN18</strong> — 7,1 kW (2,5 HP) — 31,6 kg — 1172×299×591 mm</li>"
    },
    installInfo: "Instalación de sistemas VRF a cargo de técnicos certificados DAClimaTECH, con diseño de proyecto, cálculo de cañerías y puesta en marcha. Se cotiza según el proyecto.",
  },
  {
    id: "midea-evaporadora-v8-consola-piso-techo",
    gallery: [
      { src: "img/comercial/midea-evaporadora-consola-piso-techo.webp", alt: "Evaporadora VRF Midea Consola Piso Techo, control remoto" },
    ],
    brand: "Midea",
    line: "Evaporadora VRF Consola Piso Techo",
    name: "Midea Evaporadora VRF Consola Piso Techo",
    model: "10 modelos (MIH36DLHN18 a MIH140DLHN18)",
    capacityLabel: "3,6 a 14 kW (1,3 a 5,0 HP)",
    capacityTR: null,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: true,
    features: ["Inverter", "VRF", "Bomba de drenaje DC Inverter"],
    technology: "Inverter",
    type: "VRF — Evaporadora",
    refrigerant: "R410 / R32",
    description: "Línea Midea Evaporadora VRF Consola Piso Techo, 10 capacidades de 3,6 a 14 kW (1,3 a 5,0 HP). Ventilador DC Inverter de 7 velocidades, control remoto RM12F con tecnología Follow-Me incluido. No incluye bomba de drenaje.",
    specs: {
      "Rango de capacidad": "3,6 a 14 kW (1,3 a 5,0 HP)",
      "Refrigerante": "R410 / R32",
      "Compatibilidad": "Condensadoras V8 Master Modular, V8 Master Individual, V8 EasyFit, V8 Mini, V6R y Atom T",
      "Modelos y capacidades disponibles": "<li><strong>MIH36DLHN18</strong> — 3,6 kW (1,3 HP) — 24,7 kg — 1069×674×234 mm</li><li><strong>MIH45DLHN18</strong> — 4,5 kW (1,6 HP) — 24,7 kg — 1069×674×234 mm</li><li><strong>MIH56DLHN18</strong> — 5,6 kW (2,0 HP) — 24,7 kg — 1069×674×234 mm</li><li><strong>MIH71DLHN18</strong> — 7,1 kW (2,5 HP) — 29,8 kg — 1284×674×234 mm</li><li><strong>MIH80DLHN18</strong> — 8 kW (2,9 HP) — 29,8 kg — 1284×674×234 mm</li><li><strong>MIH90DLHN18</strong> — 9 kW (3,2 HP) — 29,8 kg — 1284×674×234 mm</li><li><strong>MIH100DLHN18</strong> — 10 kW (3,6 HP) — 36,4 kg — 1649×674×234 mm</li><li><strong>MIH112DLHN18</strong> — 11,2 kW (4,0 HP) — 36,4 kg — 1649×674×234 mm</li><li><strong>MIH125DLHN18</strong> — 12,5 kW (4,5 HP) — 36,4 kg — 1649×674×234 mm</li><li><strong>MIH140DLHN18</strong> — 14 kW (5,0 HP) — 36,4 kg — 1649×674×234 mm</li>"
    },
    installInfo: "Instalación de sistemas VRF a cargo de técnicos certificados DAClimaTECH, con diseño de proyecto, cálculo de cañerías y puesta en marcha. Se cotiza según el proyecto.",
  },
  {
    id: "midea-evaporadora-v8-vertical-floor-standing-sin-gabinete",
    gallery: [
      { src: "img/comercial/midea-evaporadora-vertical-floor-standing-variantes.webp", alt: "Evaporadora VRF Midea Vertical Floor Standing — variante sin gabinete (concealed)" },
    ],
    brand: "Midea",
    line: "Evaporadora VRF Vertical Floor Standing (Sin Gabinete)",
    name: "Midea Evaporadora VRF Vertical Floor Standing (Sin Gabinete)",
    model: "7 modelos (MIH22F3HN18 a MIH80F3HN18)",
    capacityLabel: "2,2 a 8 kW (0,8 a 3 HP)",
    capacityTR: null,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: true,
    features: ["Inverter", "VRF", "Bomba de drenaje DC Inverter"],
    technology: "Inverter",
    type: "VRF — Evaporadora",
    refrigerant: "R410 / R32",
    description: "Línea Midea Evaporadora VRF Vertical Floor Standing (Sin Gabinete), 7 capacidades de 2,2 a 8 kW (0,8 a 3 HP). Ventilador DC Inverter de 7 velocidades, control remoto RM12F con tecnología Follow-Me incluido. Variante sin gabinete (concealed), para empotrar. Bomba de drenaje DC Inverter con 1200mm de columna de agua incluida.",
    specs: {
      "Rango de capacidad": "2,2 a 8 kW (0,8 a 3 HP)",
      "Refrigerante": "R410 / R32",
      "Compatibilidad": "Condensadoras V8 Master Modular, V8 Master Individual, V8 EasyFit, V8 Mini, Atom T y V6R",
      "Modelos y capacidades disponibles": "<li><strong>MIH22F3HN18</strong> — 2,2 kW (0,8 HP) — 16,3 kg — 915×470×200 mm</li><li><strong>MIH28F3HN18</strong> — 2,8 kW (1 HP) — 16,3 kg — 915×470×200 mm</li><li><strong>MIH36F3HN18</strong> — 3,6 kW (1,3 HP) — 16,9 kg — 915×470×200 mm</li><li><strong>MIH45F3HN18</strong> — 4,5 kW (1,6 HP) — 20 kg — 1133×470×200 mm</li><li><strong>MIH56F3HN18</strong> — 5,6 kW (2 HP) — 24,3 kg — 1253×566×200 mm</li><li><strong>MIH71F3HN18</strong> — 7,1 kW (2,5 HP) — 26,1 kg — 1253×566×200 mm</li><li><strong>MIH80F3HN18</strong> — 8 kW (3 HP) — 26,1 kg — 1253×566×200 mm</li>"
    },
    installInfo: "Instalación de sistemas VRF a cargo de técnicos certificados DAClimaTECH, con diseño de proyecto, cálculo de cañerías y puesta en marcha. Se cotiza según el proyecto.",
  },
  {
    id: "midea-evaporadora-v8-vertical-floor-standing-retorno-frontal",
    gallery: [
      { src: "img/comercial/midea-evaporadora-vertical-floor-standing-variantes.webp", alt: "Evaporadora VRF Midea Vertical Floor Standing — variante con gabinete, retorno frontal" },
    ],
    brand: "Midea",
    line: "Evaporadora VRF Vertical Floor Standing (Gabinete, Retorno Frontal)",
    name: "Midea Evaporadora VRF Vertical Floor Standing (Gabinete, Retorno Frontal)",
    model: "7 modelos (MIH22F4HN18 a MIH80F4HN18)",
    capacityLabel: "2,2 a 8 kW (0,8 a 3 HP)",
    capacityTR: null,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: true,
    features: ["Inverter", "VRF", "Bomba de drenaje DC Inverter"],
    technology: "Inverter",
    type: "VRF — Evaporadora",
    refrigerant: "R410 / R32",
    description: "Línea Midea Evaporadora VRF Vertical Floor Standing (Gabinete, Retorno Frontal), 7 capacidades de 2,2 a 8 kW (0,8 a 3 HP). Ventilador DC Inverter de 7 velocidades, control remoto RM12F con tecnología Follow-Me incluido. Variante con gabinete, retorno frontal. Bomba de drenaje DC Inverter con 1200mm de columna de agua incluida.",
    specs: {
      "Rango de capacidad": "2,2 a 8 kW (0,8 a 3 HP)",
      "Refrigerante": "R410 / R32",
      "Compatibilidad": "Condensadoras V8 Master Modular, V8 Master Individual, V8 EasyFit, V8 Mini, Atom T y V6R",
      "Modelos y capacidades disponibles": "<li><strong>MIH22F4HN18</strong> — 2,2 kW (0,8 HP) — 21,1 kg — 1020×495×200 mm</li><li><strong>MIH28F4HN18</strong> — 2,8 kW (1 HP) — 21,1 kg — 1020×495×200 mm</li><li><strong>MIH36F4HN18</strong> — 3,6 kW (1,3 HP) — 21,9 kg — 1020×495×200 mm</li><li><strong>MIH45F4HN18</strong> — 4,5 kW (1,6 HP) — 26,3 kg — 1240×495×200 mm</li><li><strong>MIH56F4HN18</strong> — 5,6 kW (2 HP) — 32,1 kg — 1360×591×200 mm</li><li><strong>MIH71F4HN18</strong> — 7,1 kW (2,5 HP) — 33,3 kg — 1360×591×200 mm</li><li><strong>MIH80F4HN18</strong> — 8 kW (3 HP) — 33,3 kg — 1360×591×200 mm</li>"
    },
    installInfo: "Instalación de sistemas VRF a cargo de técnicos certificados DAClimaTECH, con diseño de proyecto, cálculo de cañerías y puesta en marcha. Se cotiza según el proyecto.",
  },
  {
    id: "midea-evaporadora-v8-vertical-floor-standing-retorno-inferior",
    gallery: [
      { src: "img/comercial/midea-evaporadora-vertical-floor-standing-variantes.webp", alt: "Evaporadora VRF Midea Vertical Floor Standing — variante con gabinete, retorno inferior" },
    ],
    brand: "Midea",
    line: "Evaporadora VRF Vertical Floor Standing (Gabinete, Retorno Inferior)",
    name: "Midea Evaporadora VRF Vertical Floor Standing (Gabinete, Retorno Inferior)",
    model: "7 modelos (MIH22F5HN18 a MIH80F5HN18)",
    capacityLabel: "2,2 a 8 kW (0,8 a 3 HP)",
    capacityTR: null,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: true,
    features: ["Inverter", "VRF", "Bomba de drenaje DC Inverter"],
    technology: "Inverter",
    type: "VRF — Evaporadora",
    refrigerant: "R410 / R32",
    description: "Línea Midea Evaporadora VRF Vertical Floor Standing (Gabinete, Retorno Inferior), 7 capacidades de 2,2 a 8 kW (0,8 a 3 HP). Ventilador DC Inverter de 7 velocidades, control remoto RM12F con tecnología Follow-Me incluido. Variante con gabinete, retorno inferior. Bomba de drenaje DC Inverter con 1200mm de columna de agua incluida.",
    specs: {
      "Rango de capacidad": "2,2 a 8 kW (0,8 a 3 HP)",
      "Refrigerante": "R410 / R32",
      "Compatibilidad": "Condensadoras V8 Master Modular, V8 Master Individual, V8 EasyFit, V8 Mini, Atom T y V6R",
      "Modelos y capacidades disponibles": "<li><strong>MIH22F5HN18</strong> — 2,2 kW (0,8 HP) — 21,1 kg — 1020×495×200 mm</li><li><strong>MIH28F5HN18</strong> — 2,8 kW (1 HP) — 21,1 kg — 1020×495×200 mm</li><li><strong>MIH36F5HN18</strong> — 3,6 kW (1,3 HP) — 21,9 kg — 1020×495×200 mm</li><li><strong>MIH45F5HN18</strong> — 4,5 kW (1,6 HP) — 26,3 kg — 1240×495×200 mm</li><li><strong>MIH56F5HN18</strong> — 5,6 kW (2 HP) — 32,1 kg — 1360×591×200 mm</li><li><strong>MIH71F5HN18</strong> — 7,1 kW (2,5 HP) — 33,3 kg — 1360×591×200 mm</li><li><strong>MIH80F5HN18</strong> — 8 kW (3 HP) — 33,3 kg — 1360×591×200 mm</li>"
    },
    installInfo: "Instalación de sistemas VRF a cargo de técnicos certificados DAClimaTECH, con diseño de proyecto, cálculo de cañerías y puesta en marcha. Se cotiza según el proyecto.",
  },
  {
    id: "midea-smkt-d160-240cgn8-at",
    gallery: [
      { src: "img/comercial/midea-all-in-one-hydraulic-module.webp", alt: "Midea All In One Hydraulic Module" },
    ],
    brand: "Midea",
    line: "VRF — Accesorios",
    name: "Midea All In One Hydraulic Module",
    model: "SMKT-D160/240CGN8-At",
    capacityLabel: "Accesorio VRF",
    capacityTR: null,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: true,
    features: ["VRF", "Accesorio"],
    technology: "",
    type: "VRF — Accesorios",
    refrigerant: "",
    description: "Módulo para generación de agua caliente para aplicaciones de heating, piso radiante o radiadores, así como generación y acumulación de agua caliente sanitaria. 240 litros de capacidad. Potencia de calefacción (A7W55) de 7,7kW, 12,1kW y 13kW cuando se utiliza con condensadoras Atom T de 10kW, 14kW y 16kW respectivamente. Sólo compatible con Atom T.",
    specs: {
      
    },
    installInfo: "Instalación de sistemas VRF a cargo de técnicos certificados DAClimaTECH, con diseño de proyecto, cálculo de cañerías y puesta en marcha. Se cotiza según el proyecto.",
  },
  {
    id: "midea-condensadora-v8-master-modular",
    gallery: [
      { src: "img/comercial/midea-v8-sistemas-vrf-hero.webp", alt: "Midea V8, sistemas VRF con tecnología ShieldBox, HyperLink y SuperSense" },
      { src: "img/comercial/midea-v8-master-modular-tamanos.webp", alt: "Condensadora Midea V8 Master Modular, 3 tamaños: 8-18 HP, 20-24 HP y 26-40 HP" },
      { src: "img/comercial/midea-v8-doctor-m-bluetooth.webp", alt: "Midea V8, puesta en marcha y diagnóstico Doctor M 2.0 vía Bluetooth" },
    ],
    brand: "Midea",
    line: "Condensadora V8 Master Modular",
    name: "Midea Condensadora V8 Master Modular",
    model: "17 modelos (MV8-252WV2GN1-MA a MV8-1120WV2GN1-MA)",
    capacityLabel: "25,2 a 112 kW (8 a 40 HP)",
    capacityTR: null,
    price: null,
    priceNote: "Cotizar por proyecto",
    isNew: true,
    features: ["Inverter", "VRF"],
    technology: "Inverter",
    type: "VRF — Condensadora",
    refrigerant: "",
    description: "Línea Midea Condensadora V8 Master Modular, 17 capacidades de 25,2 a 112 kW (8 a 40 HP). No modulares — cada unidad no se combina con otras condensadoras para formar sistemas de mayor capacidad. 17 capacidades de condensadoras de 8 a 40 HP permiten configurar sistemas modulares desde 16 HP hasta 140 HP: las de 8~24 HP se combinan hasta 4 módulos, las de 26~40 HP hasta 3 módulos. Gran capacidad para líneas largas de refrigerante. Incluye tecnología ShieldBox (gabinete IP55 sellado), HyperLink (topología de cableado arbitraria, hasta 2000m sin cable apantallado) y SuperSense (sensor de refrigerante en todos los lados). Puesta en marcha, diagnóstico y servicio Doctor M 2.0 con comunicación Bluetooth vía app HVAC Assistant.",
    specs: {
      "Tecnología": "Inverter",
      "Rango de capacidad": "25,2 a 112 kW (8 a 40 HP)",
      "Modelos y capacidades disponibles": "<li><strong>MV8-252WV2GN1-MA</strong> — 25,2 kW (8 HP) — 195 kg — 940×1760×825 mm</li><li><strong>MV8-280WV2GN1-MA</strong> — 28 kW (10 HP) — 195 kg — 940×1760×825 mm</li><li><strong>MV8-335WV2GN1-MA</strong> — 33,5 kW (12 HP) — 195 kg — 940×1760×825 mm</li><li><strong>MV8-400WV2GN1-MA</strong> — 40 kW (14 HP) — 218 kg — 940×1760×825 mm</li><li><strong>MV8-450WV2GN1-MA</strong> — 45 kW (16 HP) — 218 kg — 940×1760×825 mm</li><li><strong>MV8-500WV2GN1-MA</strong> — 50 kW (18 HP) — 218 kg — 940×1760×825 mm</li><li><strong>MV8-560WV2GN1-MA</strong> — 56 kW (20 HP) — 277 kg — 1340×1760×825 mm</li><li><strong>MV8-615WV2GN1-MA</strong> — 61,5 kW (22 HP) — 277 kg — 1340×1760×825 mm</li><li><strong>MV8-670WV2GN1-MA</strong> — 67 kW (24 HP) — 297 kg — 1340×1760×825 mm</li><li><strong>MV8-730WV2GN1-MA</strong> — 73 kW (26 HP) — 380 kg — 1880×1760×825 mm</li><li><strong>MV8-785WV2GN1-MA</strong> — 78,5 kW (28 HP) — 380 kg — 1880×1760×825 mm</li><li><strong>MV8-850WV2GN1-MA</strong> — 85 kW (30 HP) — 419 kg — 1880×1760×825 mm</li><li><strong>MV8-900WV2GN1-MA</strong> — 90 kW (32 HP) — 419 kg — 1880×1760×825 mm</li><li><strong>MV8-950WV2GN1-MA</strong> — 95 kW (34 HP) — 420 kg — 1880×1760×825 mm</li><li><strong>MV8-1010WV2GN1-MA</strong> — 101 kW (36 HP) — 420 kg — 1880×1760×825 mm</li><li><strong>MV8-1060WV2GN1-MA</strong> — 106 kW (38 HP) — 440 kg — 1880×1760×825 mm</li><li><strong>MV8-1120WV2GN1-MA</strong> — 112 kW (40 HP) — 440 kg — 1880×1760×825 mm</li>"
    },
    installInfo: "Instalación de sistemas VRF a cargo de técnicos certificados DAClimaTECH, con diseño de proyecto, cálculo de cañerías y puesta en marcha. Se cotiza según el proyecto.",
  },
];

// Galería del modal: cada producto trae su propia galería explícita.
function productImages(p) {
  if (Array.isArray(p.gallery) && p.gallery.length) return p.gallery;
  return [{ src: p.image || "", alt: `${p.brand} ${p.name}` }];
}

/* ---------------------------------------------------------
   TÍTULO SEO
   --------------------------------------------------------- */
function seoTitle(p) {
  return `${p.brand} ${p.type} ${p.model} — ${p.capacityLabel}${p.technology ? " " + p.technology : ""}`.replace(/\s+/g, " ").trim();
}

/* ---------------------------------------------------------
   PRECIO — precios reales del Excel (lista / efectivo 40% OFF / cuotas),
   mismo criterio que el resto del sitio.
   --------------------------------------------------------- */
function getPricing(p) {
  const efectivo = (typeof INSTALADOR_PRICES !== "undefined") ? INSTALADOR_PRICES[p.id] : undefined;
  if (efectivo == null || p.priceOriginal == null) return { hasPrice: false };
  const discountPct = Math.round((1 - efectivo / p.priceOriginal) * 100);
  return { hasPrice: true, original: p.priceOriginal, final: efectivo, discountPct };
}

function formatPrice(n) {
  return `$${n.toLocaleString("es-AR")}`;
}

/* ---------------------------------------------------------
   FILTROS
   --------------------------------------------------------- */
const FILTER_DEFS = [
  { key: "brand", label: "Marca", options: ["Midea", "Carrier", "Surrey"] },
  { key: "type", label: "Tipo", options: ["Piso Techo", "Baja Silueta", "Cassette", "Sistema para Conductos", "Conjunto de Frío", "Rooftop", "Multisplit — Unidad Interior", "Multisplit — Unidad Exterior", "VRF — Condensadora", "VRF — Evaporadora", "VRF — Accesorios"] },
  { key: "technology", label: "Tecnología", options: ["Inverter", "ON/OFF"] },
  { key: "capacity", label: "Capacidad", options: ["Hasta 3 TR", "5 a 6 TR", "Más de 6 TR"] },
  { key: "price", label: "Precio", options: ["Hasta $1.000.000", "$1.000.000–$5.000.000", "Más de $5.000.000"] }
];

const filterState = { brand: "", type: "", technology: "", capacity: "", price: "" };

function matchesCapacity(value, tr) {
  if (tr == null) return false; // multisplit UI/UE: capacidad en kcal/h, no en TR — no matchean este filtro
  if (value === "Hasta 3 TR") return tr <= 3;
  if (value === "5 a 6 TR") return tr > 3 && tr <= 6;
  if (value === "Más de 6 TR") return tr > 6;
  return true;
}
function matchesPrice(value, price) {
  if (price == null) return false; // sin precio propio (consultar): no matchea ningún filtro de precio
  if (value === "Hasta $1.000.000") return price <= 1000000;
  if (value === "$1.000.000–$5.000.000") return price > 1000000 && price <= 5000000;
  if (value === "Más de $5.000.000") return price > 5000000;
  return true;
}

function countForOption(key, value) {
  return EQ_PRODUCTS.filter(p => {
    if (key !== "brand" && filterState.brand && p.brand !== filterState.brand) return false;
    if (key !== "type" && filterState.type && p.type !== filterState.type) return false;
    if (key !== "technology" && filterState.technology && p.technology !== filterState.technology) return false;
    if (key !== "capacity" && filterState.capacity && !matchesCapacity(filterState.capacity, p.capacityTR)) return false;
    if (key !== "price" && filterState.price && !matchesPrice(filterState.price, p.price)) return false;

    if (key === "brand") return p.brand === value;
    if (key === "type") return p.type === value;
    if (key === "technology") return p.technology === value;
    if (key === "capacity") return matchesCapacity(value, p.capacityTR);
    if (key === "price") return matchesPrice(value, p.price);
    return true;
  }).length;
}

function getFilteredProducts() {
  return EQ_PRODUCTS.filter(p => {
    if (filterState.brand && p.brand !== filterState.brand) return false;
    if (filterState.type && p.type !== filterState.type) return false;
    if (filterState.technology && p.technology !== filterState.technology) return false;
    if (filterState.capacity && !matchesCapacity(filterState.capacity, p.capacityTR)) return false;
    if (filterState.price && !matchesPrice(filterState.price, p.price)) return false;
    return true;
  });
}

function getSortedProducts(list) {
  const sorted = [...list];
  const sortValue = document.getElementById("sortProducts").value;
  // productos sin precio propio (price: null, "Consultar precio") van al final en ambos sentidos
  if (sortValue === "price-low") sorted.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
  if (sortValue === "price-high") sorted.sort((a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity));
  return sorted;
}

const FILTER_LABELS = FILTER_DEFS.reduce((acc, def) => (acc[def.key] = def.label, acc), {});

function applyFiltersAndSort() {
  const list = getSortedProducts(getFilteredProducts());
  renderProducts(list);
  renderSidebarOptions();
  renderActiveChips();
  renderResultsCount(list.length);
  if (window.dacCartRefresh) window.dacCartRefresh();
}

function renderResultsCount(n) {
  const el = document.getElementById("resultsCount");
  el.innerHTML = `<strong>${n}</strong> equipo${n === 1 ? "" : "s"} comercial${n === 1 ? "" : "es"}`;
}

/* ---------------------------------------------------------
   SIDEBAR: construcción y estado
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
   SIDEBAR MOBILE: panel deslizable
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

function productCard(p) {
  const images = productImages(p);
  const pricing = getPricing(p);
  const arrows = images.length > 1 ? `
        <button class="eq-product-arrow eq-product-arrow--prev" type="button" data-arrow="prev" aria-label="Foto anterior">‹</button>
        <button class="eq-product-arrow eq-product-arrow--next" type="button" data-arrow="next" aria-label="Foto siguiente">›</button>
        <div class="eq-product-dots">${images.map((_, i) => `<span class="eq-product-dot${i === 0 ? " is-active" : ""}"></span>`).join("")}</div>
  ` : "";
  return `
    <article class="eq-product" data-product="${p.id}" data-brand="${p.brand}" data-type="${p.type}" data-technology="${p.technology}">
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
          ${pricing.hasPrice ? `
          <span>Precio instalador:</span>
          <span class="eq-price-original">${formatPrice(pricing.original)}</span>
          <div class="eq-price-row">
            <strong>${formatPrice(pricing.final)}</strong>
            <span class="eq-price-off">${pricing.discountPct}% OFF</span>
          </div>
          <span class="eq-price-installments">Sin cuotas (consultar)</span>
          ` : `
          <div class="eq-price-row">
            <strong>${p.priceNote || "Consultar precio"}</strong>
          </div>
          `}
        </div>

        <div class="eq-install">
          <span>✓</span>
          <div><strong>${pricing.hasPrice ? "Instalación disponible" : "Se comercializa junto con la instalación · a cotizar por proyecto"}</strong></div>
        </div>

        <div class="dac-cart-widget" data-cart-widget>
          <div class="dac-cart-widget-qty">
            <button type="button" data-cart-widget-step="-1" aria-label="Restar">−</button>
            <input type="number" min="1" value="1" data-cart-qty-input aria-label="Cantidad a agregar">
            <button type="button" data-cart-widget-step="1" aria-label="Sumar">+</button>
          </div>
          <button type="button" class="dac-cart-add-btn" data-cart-add="${p.id}">Agregar al pedido</button>
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
        <a href="${wa("Hola DAClimaTECH, no encontré el equipo comercial que buscaba en la web, ¿me ayudan?")}" target="_blank" rel="noopener">consultanos por WhatsApp</a>.</p>
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

  const pricing = getPricing(p);
  const modalPricedBlock = document.getElementById("modalPricedBlock");
  const modalDeliveryOptions = document.getElementById("modalDeliveryOptions");
  const modalQuoteOptions = document.getElementById("modalQuoteOptions");
  const modalPriceNote = document.getElementById("modalPriceNote");
  if (pricing.hasPrice) {
    modalPricedBlock.style.display = "";
    modalDeliveryOptions.style.display = "";
    modalQuoteOptions.style.display = "none";
    modalPriceNote.style.display = "";
    document.getElementById("modalPriceOriginal").textContent = formatPrice(pricing.original);
    document.getElementById("modalPrice").textContent = formatPrice(pricing.final);
    document.getElementById("modalPriceOff").textContent = `${pricing.discountPct}% OFF`;
    document.getElementById("modalInstallments").textContent = "Sin cuotas (consultar)";
    document.getElementById("modalDelivery").href =
      wa(`Hola DAClimaTECH, quiero coordinar el envío a domicilio de ${p.brand} ${p.name} (${p.model}). ¿Me pasan tiempos y costo de envío?`);
    document.getElementById("modalPickup").href =
      wa(`Hola DAClimaTECH, quiero consultar disponibilidad en tienda de ${p.brand} ${p.name} (${p.model}) para retirar personalmente.`);
    document.getElementById("modalInstall").href =
      wa(`Hola DAClimaTECH, quiero cotizar la instalación de ${p.brand} ${p.name} (${p.model}) según mi obra.`);
  } else {
    // Producto sin precio ("Cotizar por proyecto"): mismo bloque de 2 clips
    // que catalogo-ventilacion.html, en vez del precio + 3 clips de envío/retiro/instalación.
    modalPricedBlock.style.display = "none";
    modalDeliveryOptions.style.display = "none";
    modalQuoteOptions.style.display = "";
    document.getElementById("modalQuoteCTA").href =
      wa(`Hola DAClimaTECH, quiero cotizar ${p.brand} ${p.name} (${p.model}) para mi proyecto. ¿Me pasan precio?`);
    document.getElementById("modalQuoteInstall").href =
      wa(`Hola DAClimaTECH, quiero coordinar la instalación de ${p.brand} ${p.name} (${p.model}).`);
  }

  const modalCartAdd = document.getElementById("modalCartAdd");
  if (modalCartAdd) {
    modalCartAdd.dataset.cartAdd = p.id;
    const modalCartQty = document.getElementById("modalCartQty");
    if (modalCartQty) modalCartQty.value = 1;
    if (window.dacCartRefresh) window.dacCartRefresh();
  }

  document.getElementById("modalDescription").textContent = p.description;

  document.getElementById("modalFeatures").innerHTML =
    p.features.map(f => `<li>${f}</li>`).join("");

  document.getElementById("modalSpecs").innerHTML =
    Object.entries(p.specs).map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");

  document.getElementById("modalInstallInfo").textContent = p.installInfo;


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