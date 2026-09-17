/* DAClimaTECH — Catálogo completo de Aire Acondicionado
   JS aislado. Copia los datos y la lógica de producto/modal de
   equipamiento.js (misma fuente de verdad hasta que ambas páginas
   consuman un JSON/endpoint común) y reemplaza únicamente la UI de
   filtros por el formato sidebar. */

const WA_NUMBER = "5493534089909";
const wa = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

/* ---------------------------------------------------------
   DATOS DE PRODUCTO
   NOTA: idéntico a equipamiento.js — "price" es un valor de
   referencia interno para ordenar, no se muestra tal cual.
   --------------------------------------------------------- */
const EQ_PRODUCTS = [

  {
    id: "surrey-09",
    gallery: [
      { src: "img/equipamiento/surrey-piq-09-marketing.webp", alt: "Surrey Inverter Smart — refrigerante R-32, Smart Control y control por voz" },
      { src: "img/equipamiento/surrey-indoor.webp", alt: "Surrey Inverter Smart — unidad interior" },
      { src: "img/equipamiento/surrey-marketing-r32.webp", alt: "Surrey Inverter Smart — refrigerante R-32 ecológico, eficiencia A++ y Smart Control" },
      { src: "img/equipamiento/surrey-outdoor.webp", alt: "Surrey Inverter Smart — unidad exterior" },
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
      { src: "img/equipamiento/carrier-hvp-09-marketing.webp", alt: "Carrier XPower Inverter — refrigerante R-32, garantía 3 años, control por app y por voz" },
      { src: "img/equipamiento/carrier-indoor.webp", alt: "XPower Inverter — unidad interior" },
      { src: "img/equipamiento/carrier-marketing-r32-smart.webp", alt: "XPower Inverter — refrigerante R-32, Smart Ready, Alexa y Google Home" },
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
    id: "midea-09",
    gallery: [
      { src: "img/equipamiento/midea-indoor.webp", alt: "Midea Inverter — unidad interior" },
      { src: "img/equipamiento/midea-marketing-r32.webp", alt: "Midea Inverter — refrigerante R-32 Eco Friendly y eficiencia A++" },
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
    id: "surrey-12",
    gallery: [
      { src: "img/equipamiento/surrey-piq-12-marketing.webp", alt: "Surrey Inverter Smart — refrigerante R-32, Smart Control y control por voz" },
      { src: "img/equipamiento/surrey-marketing-ahorro.webp", alt: "Surrey Inverter Smart — tecnología Inverter, hasta 35% de ahorro energético" },
      { src: "img/equipamiento/surrey-indoor.webp", alt: "Surrey Inverter Smart — unidad interior" },
      { src: "img/equipamiento/surrey-outdoor.webp", alt: "Surrey Inverter Smart — unidad exterior" },
      { src: "img/equipamiento/surrey-remote.webp", alt: "Surrey Inverter Smart — control remoto" },
      { src: "img/equipamiento/surrey-combo.webp", alt: "Surrey Inverter Smart — equipo completo (interior, exterior y control)" },
    ],
    brand: "Surrey",
    line: "Inverter Smart R-32",
    name: "Surrey Inverter Smart",
    model: "553PIQ12N81F",
    capacity: 3105,
    capacityLabel: "3105 frigorías",
    price: 912250, // Precio efectivo (40% OFF sobre lista) — fuente: Excel de precios reales
    priceOriginal: 1520417, // Precio de lista (tachado en la UI)
    installments: 6,
    installmentValue: 222995,
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
      "Capacidad": "3105 frigorías",
      "Refrigerante": "R32",
      "Alimentación": "220 V (50 Hz)",
      "Eficiencia refrigeración": "A++",
      "Eficiencia calefacción": "A",
      "Control": "Surrey Smart"
    },
    installInfo: "Instalación disponible en toda la zona de cobertura de DAClimaTECH, a cargo de técnicos propios. El costo de instalación se cotiza según distancia, tipo de soporte y metros de cañería necesarios.",
  },
  {
    id: "carrier-12",
    gallery: [
      { src: "img/equipamiento/carrier-hvp-12-marketing.webp", alt: "Carrier XPower Inverter — refrigerante R-32, garantía 3 años, control por app y por voz" },
      { src: "img/equipamiento/carrier-marketing-r32-eficiencia.webp", alt: "XPower Inverter — refrigerante R-32, eficiencia A++ y Smart Ready" },
      { src: "img/equipamiento/carrier-indoor.webp", alt: "XPower Inverter — unidad interior" },
      { src: "img/equipamiento/carrier-outdoor.webp", alt: "XPower Inverter — unidad exterior" },
      { src: "img/equipamiento/carrier-remote.webp", alt: "XPower Inverter — control remoto" },
      { src: "img/equipamiento/carrier-indoor-outdoor.webp", alt: "XPower Inverter — unidad interior y exterior juntas" },
    ],
    brand: "Carrier",
    line: "Xpower Inverter Smart R-32",
    name: "XPower Inverter",
    model: "53HVP12N81F",
    capacity: 3105,
    capacityLabel: "3105 frigorías",
    price: 938193, // Precio efectivo (40% OFF sobre lista) — fuente: Excel de precios reales
    priceOriginal: 1563655, // Precio de lista (tachado en la UI)
    installments: 6,
    installmentValue: 229336,
    isNew: false,
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
      "Capacidad": "3105 frigorías",
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
      { src: "img/equipamiento/midea-marketing-smarthome.webp", alt: "Midea Inverter — SmartHome, compatible con Alexa y Google Home" },
      { src: "img/equipamiento/midea-indoor.webp", alt: "Midea Inverter — unidad interior" },
      { src: "img/equipamiento/midea-outdoor.webp", alt: "Midea Inverter — unidad exterior" },
      { src: "img/equipamiento/midea-remote.webp", alt: "Midea Inverter — control remoto" },
      { src: "img/equipamiento/midea-combo.webp", alt: "Midea Inverter — equipo completo (interior, exterior y control)" },
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
  },
  {
    id: "midea-breezeless-12",
    gallery: [
      { src: "img/equipamiento/midea-breezeless-marketing-r32.webp", alt: "Midea Breezeless E — refrigerante R-32, Twinflap, Alexa y Google Home" },
      { src: "img/equipamiento/midea-breezeless-r32-smarthome.webp", alt: "Midea Breezeless E — R-32 Eco Friendly, SmartHome, Alexa y Google Home" },
      { src: "img/equipamiento/midea-breezeless-indoor.webp", alt: "Midea Breezeless E — unidad interior" },
      { src: "img/equipamiento/midea-breezeless-indoor-open.webp", alt: "Midea Breezeless E — unidad interior con flap abierto" },
      { src: "img/equipamiento/midea-breezeless-marketing-twinflap.webp", alt: "Midea Breezeless E — tecnología Twinflap, 5013 mini agujeros" },
      { src: "img/equipamiento/midea-breezeless-outdoor.webp", alt: "Midea Breezeless E — unidad exterior" },
      { src: "img/equipamiento/midea-breezeless-remote.webp", alt: "Midea Breezeless E — control remoto" },
      { src: "img/equipamiento/midea-breezeless-combo.webp", alt: "Midea Breezeless E — unidad exterior y control remoto" },
    ],
    brand: "Midea",
    line: "Breezeless E Split Inverter",
    name: "Midea Breezeless E",
    model: "MSCBIC-12H-N80F",
    capacity: 3139,
    capacityLabel: "3139 frigorías",
    price: 912250, // Precio efectivo (40% OFF sobre lista) — fuente: Excel de precios reales
    priceOriginal: 1520417, // Precio de lista (tachado en la UI)
    installments: 6,
    installmentValue: 222995,
    isNew: false,
    image: "img/equipamiento/midea-breezeless-indoor.webp",
    comboImage: "img/equipamiento/midea-breezeless-combo.webp",
    outdoorImage: "img/equipamiento/midea-breezeless-outdoor.webp",
    remoteImage: "img/equipamiento/midea-breezeless-remote.webp",
    features: ["Inverter", "Frío / Calor", "R32"],
    technology: "Inverter + WiFi",
    type: "Split",
    refrigerant: "R32",
    warranty: "Según condiciones de garantía del fabricante",
    description: "Split inverter Breezeless con tecnología Twinflap (5013 mini orificios) que dispersa el aire sin golpe de viento directo, SmartHome y comandos de voz.",
    specs: {
      "Capacidad": "3139 frigorías",
      "Refrigerante": "R32",
      "Alimentación": "220 V (50 Hz)",
      "Eficiencia refrigeración": "A++",
      "Eficiencia calefacción": "A",
      "Dimensiones interior": "812 × 199 × 299 mm"
    },
    installInfo: "Instalación disponible en toda la zona de cobertura de DAClimaTECH, a cargo de técnicos propios. El costo de instalación se cotiza según distancia, tipo de soporte y metros de cañería necesarios.",
  },
  {
    id: "surrey-18",
    gallery: [
      { src: "img/equipamiento/surrey-piq-18-marketing.webp", alt: "Surrey Inverter Smart — refrigerante R-32, Smart Control y control por voz" },
      { src: "img/equipamiento/surrey-outdoor.webp", alt: "Surrey Inverter Smart — unidad exterior" },
      { src: "img/equipamiento/surrey-marketing-r32.webp", alt: "Surrey Inverter Smart — refrigerante R-32 ecológico, eficiencia A++ y Smart Control" },
      { src: "img/equipamiento/surrey-indoor.webp", alt: "Surrey Inverter Smart — unidad interior" },
      { src: "img/equipamiento/surrey-remote.webp", alt: "Surrey Inverter Smart — control remoto" },
      { src: "img/equipamiento/surrey-combo.webp", alt: "Surrey Inverter Smart — equipo completo (interior, exterior y control)" },
    ],
    brand: "Surrey",
    line: "Inverter Smart R-32",
    name: "Surrey Inverter Smart",
    model: "553PIQ18N81F",
    capacity: 5005,
    capacityLabel: "5005 frigorías",
    price: 1383860, // Precio efectivo (40% OFF sobre lista) — fuente: Excel de precios reales
    priceOriginal: 2306434, // Precio de lista (tachado en la UI)
    installments: 6,
    installmentValue: 338277,
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
      "Capacidad": "5005 frigorías",
      "Refrigerante": "R32",
      "Alimentación": "220 V (50 Hz)",
      "Eficiencia refrigeración": "A++",
      "Eficiencia calefacción": "A",
      "Control": "Surrey Smart"
    },
    installInfo: "Instalación disponible en toda la zona de cobertura de DAClimaTECH, a cargo de técnicos propios. El costo de instalación se cotiza según distancia, tipo de soporte y metros de cañería necesarios.",
  },
  {
    id: "carrier-18",
    gallery: [
      { src: "img/equipamiento/carrier-hvp-18-marketing.webp", alt: "Carrier XPower Inverter — refrigerante R-32, garantía 3 años, control por app y por voz" },
      { src: "img/equipamiento/carrier-outdoor.webp", alt: "XPower Inverter — unidad exterior" },
      { src: "img/equipamiento/carrier-marketing-r32-smart.webp", alt: "XPower Inverter — refrigerante R-32, Smart Ready, Alexa y Google Home" },
      { src: "img/equipamiento/carrier-indoor.webp", alt: "XPower Inverter — unidad interior" },
      { src: "img/equipamiento/carrier-remote.webp", alt: "XPower Inverter — control remoto" },
      { src: "img/equipamiento/carrier-indoor-outdoor.webp", alt: "XPower Inverter — unidad interior y exterior juntas" },
    ],
    brand: "Carrier",
    line: "Xpower Inverter Smart R-32",
    name: "XPower Inverter",
    model: "53HVP18N81F",
    capacity: 5005,
    capacityLabel: "5005 frigorías",
    price: 1423126, // Precio efectivo (40% OFF sobre lista) — fuente: Excel de precios reales
    priceOriginal: 2371877, // Precio de lista (tachado en la UI)
    installments: 6,
    installmentValue: 347875,
    isNew: false,
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
      "Capacidad": "5005 frigorías",
      "Refrigerante": "R32",
      "Alimentación": "220 V (50 Hz)",
      "Eficiencia refrigeración": "A++",
      "Eficiencia calefacción": "A",
      "Garantía": "3 años directa de fábrica"
    },
    installInfo: "Instalación disponible en toda la zona de cobertura de DAClimaTECH, a cargo de técnicos propios. El costo de instalación se cotiza según distancia, tipo de soporte y metros de cañería necesarios.",
  },
  {
    id: "midea-18",
    gallery: [
      { src: "img/equipamiento/midea-angle.webp", alt: "Midea Inverter — vista en ángulo" },
      { src: "img/equipamiento/midea-marketing-r32.webp", alt: "Midea Inverter — refrigerante R-32 Eco Friendly y eficiencia A++" },
      { src: "img/equipamiento/midea-outdoor.webp", alt: "Midea Inverter — unidad exterior" },
      { src: "img/equipamiento/midea-remote.webp", alt: "Midea Inverter — control remoto" },
      { src: "img/equipamiento/midea-combo.webp", alt: "Midea Inverter — equipo completo (interior, exterior y control)" },
    ],
    brand: "Midea",
    line: "Split Inverter R-32",
    name: "Midea Inverter",
    model: "MSNIC-18H-GN81F",
    capacity: 4601,
    capacityLabel: "4601 frigorías",
    price: 1303442, // Precio efectivo (40% OFF sobre lista) — fuente: Excel de precios reales
    priceOriginal: 2172403, // Precio de lista (tachado en la UI)
    installments: 6,
    installmentValue: 318619,
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
      "Capacidad": "4601 frigorías",
      "Refrigerante": "R32",
      "Alimentación": "220 V (50 Hz)",
      "Eficiencia refrigeración": "A++",
      "Eficiencia calefacción": "A",
      "Dimensiones interior": "971 × 228 × 321 mm"
    },
    installInfo: "Instalación disponible en toda la zona de cobertura de DAClimaTECH, a cargo de técnicos propios. El costo de instalación se cotiza según distancia, tipo de soporte y metros de cañería necesarios.",
  },
  {
    id: "midea-breezeless-18",
    gallery: [
      { src: "img/equipamiento/midea-breezeless-indoor-open.webp", alt: "Midea Breezeless E — unidad interior con flap abierto" },
      { src: "img/equipamiento/midea-breezeless-marketing-r32.webp", alt: "Midea Breezeless E — refrigerante R-32, Twinflap, Alexa y Google Home" },
      { src: "img/equipamiento/midea-breezeless-r32-smarthome.webp", alt: "Midea Breezeless E — R-32 Eco Friendly, SmartHome, Alexa y Google Home" },
      { src: "img/equipamiento/midea-breezeless-outdoor.webp", alt: "Midea Breezeless E — unidad exterior" },
      { src: "img/equipamiento/midea-breezeless-indoor.webp", alt: "Midea Breezeless E — unidad interior" },
      { src: "img/equipamiento/midea-breezeless-marketing-twinflap.webp", alt: "Midea Breezeless E — tecnología Twinflap, 5013 mini agujeros" },
      { src: "img/equipamiento/midea-breezeless-remote.webp", alt: "Midea Breezeless E — control remoto" },
      { src: "img/equipamiento/midea-breezeless-combo.webp", alt: "Midea Breezeless E — unidad exterior y control remoto" },
    ],
    brand: "Midea",
    line: "Breezeless E Split Inverter",
    name: "Midea Breezeless E",
    model: "MSCBIC-18H-N80M",
    capacity: 4859,
    capacityLabel: "4859 frigorías",
    price: 1383860, // Precio efectivo (40% OFF sobre lista) — fuente: Excel de precios reales
    priceOriginal: 2306434, // Precio de lista (tachado en la UI)
    installments: 6,
    installmentValue: 338277,
    isNew: false,
    image: "img/equipamiento/midea-breezeless-indoor.webp",
    comboImage: "img/equipamiento/midea-breezeless-combo.webp",
    outdoorImage: "img/equipamiento/midea-breezeless-outdoor.webp",
    remoteImage: "img/equipamiento/midea-breezeless-remote.webp",
    features: ["Inverter", "Frío / Calor", "R32"],
    technology: "Inverter + WiFi",
    type: "Split",
    refrigerant: "R32",
    warranty: "Según condiciones de garantía del fabricante",
    description: "Split inverter Breezeless con tecnología Twinflap (5013 mini orificios) que dispersa el aire sin golpe de viento directo, SmartHome y comandos de voz.",
    specs: {
      "Capacidad": "4859 frigorías",
      "Refrigerante": "R32",
      "Alimentación": "220 V (50 Hz)",
      "Eficiencia refrigeración": "A++",
      "Eficiencia calefacción": "A",
      "Dimensiones interior": "968 × 225 × 320 mm"
    },
    installInfo: "Instalación disponible en toda la zona de cobertura de DAClimaTECH, a cargo de técnicos propios. El costo de instalación se cotiza según distancia, tipo de soporte y metros de cañería necesarios.",
  },
  {
    id: "surrey-22",
    gallery: [
      { src: "img/equipamiento/surrey-piq-22-marketing.webp", alt: "Surrey Inverter Smart — refrigerante R-32, Smart Control y control por voz" },
      { src: "img/equipamiento/surrey-indoor-open.webp", alt: "Surrey Inverter Smart — unidad interior (rejilla abierta)" },
      { src: "img/equipamiento/surrey-marketing-ahorro.webp", alt: "Surrey Inverter Smart — tecnología Inverter, hasta 35% de ahorro energético" },
      { src: "img/equipamiento/surrey-outdoor.webp", alt: "Surrey Inverter Smart — unidad exterior" },
      { src: "img/equipamiento/surrey-remote.webp", alt: "Surrey Inverter Smart — control remoto" },
      { src: "img/equipamiento/surrey-combo.webp", alt: "Surrey Inverter Smart — equipo completo (interior, exterior y control)" },
    ],
    brand: "Surrey",
    line: "Inverter Smart R-32",
    name: "Surrey Inverter Smart",
    model: "553PIQ22N81F",
    capacity: 5900,
    capacityLabel: "5900 frigorías",
    price: 1762993, // Precio efectivo (40% OFF sobre lista) — fuente: Excel de precios reales
    priceOriginal: 2938322, // Precio de lista (tachado en la UI)
    installments: 6,
    installmentValue: 430954,
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
      "Capacidad": "5900 frigorías",
      "Refrigerante": "R32",
      "Alimentación": "220 V (50 Hz)",
      "Eficiencia refrigeración": "A++",
      "Eficiencia calefacción": "A",
      "Control": "Surrey Smart"
    },
    installInfo: "Instalación disponible en toda la zona de cobertura de DAClimaTECH, a cargo de técnicos propios. El costo de instalación se cotiza según distancia, tipo de soporte y metros de cañería necesarios.",
  },
  {
    id: "carrier-22",
    gallery: [
      { src: "img/equipamiento/carrier-hvp-22-marketing.webp", alt: "Carrier XPower Inverter — refrigerante R-32, garantía 3 años, control por app y por voz" },
      { src: "img/equipamiento/carrier-indoor-outdoor.webp", alt: "XPower Inverter — unidad interior y exterior juntas" },
      { src: "img/equipamiento/carrier-marketing-r32-eficiencia.webp", alt: "XPower Inverter — refrigerante R-32, eficiencia A++ y Smart Ready" },
      { src: "img/equipamiento/carrier-indoor.webp", alt: "XPower Inverter — unidad interior" },
      { src: "img/equipamiento/carrier-outdoor.webp", alt: "XPower Inverter — unidad exterior" },
      { src: "img/equipamiento/carrier-remote.webp", alt: "XPower Inverter — control remoto" },
    ],
    brand: "Carrier",
    line: "Xpower Inverter Smart R-32",
    name: "XPower Inverter",
    model: "53HVP22N81F",
    capacity: 5900,
    capacityLabel: "5900 frigorías",
    price: 1812508, // Precio efectivo (40% OFF sobre lista) — fuente: Excel de precios reales
    priceOriginal: 3020846, // Precio de lista (tachado en la UI)
    installments: 9,
    installmentValue: 295372,
    isNew: false,
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
      "Capacidad": "5900 frigorías",
      "Refrigerante": "R32",
      "Alimentación": "220 V (50 Hz)",
      "Eficiencia refrigeración": "A++",
      "Eficiencia calefacción": "A",
      "Garantía": "3 años directa de fábrica"
    },
    installInfo: "Instalación disponible en toda la zona de cobertura de DAClimaTECH, a cargo de técnicos propios. El costo de instalación se cotiza según distancia, tipo de soporte y metros de cañería necesarios.",
  },
  {
    id: "midea-22",
    gallery: [
      { src: "img/equipamiento/midea-outdoor.webp", alt: "Midea Inverter — unidad exterior" },
      { src: "img/equipamiento/midea-angle.webp", alt: "Midea Inverter — vista en ángulo" },
      { src: "img/equipamiento/midea-marketing-smarthome.webp", alt: "Midea Inverter — SmartHome, compatible con Alexa y Google Home" },
      { src: "img/equipamiento/midea-indoor.webp", alt: "Midea Inverter — unidad interior" },
      { src: "img/equipamiento/midea-remote.webp", alt: "Midea Inverter — control remoto" },
    ],
    brand: "Midea",
    line: "Split Inverter R-32",
    name: "Midea Inverter",
    model: "MSNIC-22H-GN81F",
    capacity: 5590,
    capacityLabel: "5590 frigorías",
    price: 1667480, // Precio efectivo (40% OFF sobre lista) — fuente: Excel de precios reales
    priceOriginal: 2779133, // Precio de lista (tachado en la UI)
    installments: 6,
    installmentValue: 407606,
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
      "Capacidad": "5590 frigorías",
      "Refrigerante": "R32",
      "Alimentación": "220 V (50 Hz)",
      "Eficiencia refrigeración": "A++",
      "Eficiencia calefacción": "A",
      "Dimensiones interior": "1082 × 234 × 337 mm"
    },
    installInfo: "Instalación disponible en toda la zona de cobertura de DAClimaTECH, a cargo de técnicos propios. El costo de instalación se cotiza según distancia, tipo de soporte y metros de cañería necesarios.",
  },
  {
    id: "midea-smart-30",
    // Fotos dedicadas a este equipo (7525 kcal/h).
    gallery: [
      { src: "img/equipamiento/midea-7525.webp", alt: "Midea Smart Inverter — SmartHome, compatible con Alexa y Google Home" },
      { src: "img/equipamiento/midea-7525s.webp", alt: "Midea Smart Inverter — vista en ángulo" },
      { src: "img/equipamiento/midea-7525-dimensiones.webp", alt: "Midea Smart Inverter — medidas de la unidad interior (1259 × 283 × 362 mm)" },
      { src: "img/equipamiento/midea-7525-combo.webp", alt: "Midea Smart Inverter — equipo completo (interior, exterior y control)" },
    ],
    brand: "Midea",
    line: "Split Inverter Smart 8.750 W",
    name: "Midea Smart Inverter",
    model: "MSAGIC-30H-N10M",
    capacity: 7525,
    capacityLabel: "7525 frigorías",
    price: 2052939, // Precio efectivo (40% OFF sobre lista) — fuente: Excel de precios reales
    priceOriginal: 3421565, // Precio de lista (tachado en la UI)
    installments: 6,
    installmentValue: 501830,
    isNew: false,
    image: "img/equipamiento/midea-7525s.webp",
    comboImage: "img/equipamiento/midea-7525-combo.webp",
    outdoorImage: "img/equipamiento/midea-7525-combo.webp",
    remoteImage: "img/equipamiento/midea-7525-combo.webp",
    features: ["Inverter", "Frío / Calor", "R410A"],
    technology: "Inverter + WiFi",
    type: "Split",
    refrigerant: "R410A",
    warranty: "Según condiciones de garantía del fabricante",
    description: "Split inverter de alta capacidad con SmartHome, comandos de voz compatibles con Alexa y Google Home, y hasta 35% de reducción del consumo de energía.",
    specs: {
      "Capacidad": "7525 frigorías",
      "Refrigerante": "R410A",
      "Alimentación": "220 V (50 Hz)",
      "Eficiencia refrigeración": "A++",
      "Eficiencia calefacción": "A",
      "Dimensiones interior": "1259 × 283 × 362 mm"
    },
    installInfo: "Instalación disponible en toda la zona de cobertura de DAClimaTECH, a cargo de técnicos propios. El costo de instalación se cotiza según distancia, tipo de soporte y metros de cañería necesarios.",
  },
  {
    id: "surrey-onoff-09",
    gallery: [
      { src: "img/equipamiento/surrey-onoff-09-marketing.webp", alt: "Surrey On/Off — refrigerante R-32, Follow Me y Modo Sleep" },
    ],
    brand: "Surrey",
    line: "On/Off R-32",
    name: "Surrey On/Off",
    model: "553NFQ09GN81F",
    capacity: 2503,
    capacityLabel: "2503 frigorías",
    price: 760897,
    priceOriginal: 1268161,
    installments: 6,
    installmentValue: 185997,
    isNew: true,
    image: "img/equipamiento/surrey-onoff-09-marketing.webp",
    features: ["On/Off", "Frío / Calor", "Follow Me"],
    technology: "On/Off",
    type: "Split",
    refrigerant: "R32",
    warranty: "Según condiciones de garantía del fabricante",
    description: "Equipo split On/Off frío/calor con refrigerante ecológico R-32, función Follow Me y Modo Sleep.",
    specs: {
      "Capacidad": "2503 frigorías",
      "Refrigerante": "R32",
      "Alimentación": "220 V (50 Hz)",
      "Eficiencia refrigeración": "A+",
      "Eficiencia calefacción": "A"
    },
    installInfo: "Instalación disponible en toda la zona de cobertura de DAClimaTECH, a cargo de técnicos propios. El costo de instalación se cotiza según distancia, tipo de soporte y metros de cañería necesarios.",
  },
  {
    id: "surrey-onoff-12",
    gallery: [
      { src: "img/equipamiento/surrey-onoff-12-marketing.webp", alt: "Surrey On/Off — refrigerante R-32, Follow Me y Modo Sleep" },
    ],
    brand: "Surrey",
    line: "On/Off R-32",
    name: "Surrey On/Off",
    model: "553NFQ12GN81F",
    capacity: 3105,
    capacityLabel: "3105 frigorías",
    price: 800211,
    priceOriginal: 1333685,
    installments: 6,
    installmentValue: 195607,
    isNew: true,
    image: "img/equipamiento/surrey-onoff-12-marketing.webp",
    features: ["On/Off", "Frío / Calor", "Follow Me"],
    technology: "On/Off",
    type: "Split",
    refrigerant: "R32",
    warranty: "Según condiciones de garantía del fabricante",
    description: "Equipo split On/Off frío/calor con refrigerante ecológico R-32, función Follow Me y Modo Sleep.",
    specs: {
      "Capacidad": "3105 frigorías",
      "Refrigerante": "R32",
      "Alimentación": "220 V (50 Hz)",
      "Eficiencia refrigeración": "A",
      "Eficiencia calefacción": "A"
    },
    installInfo: "Instalación disponible en toda la zona de cobertura de DAClimaTECH, a cargo de técnicos propios. El costo de instalación se cotiza según distancia, tipo de soporte y metros de cañería necesarios.",
  },
  {
    id: "surrey-onoff-18",
    gallery: [
      { src: "img/equipamiento/surrey-onoff-18-marketing.webp", alt: "Surrey On/Off — refrigerante R-32, Follow Me y Modo Sleep" },
    ],
    brand: "Surrey",
    line: "On/Off R-32",
    name: "Surrey On/Off",
    model: "553NFQ18GN81F",
    capacity: 4601,
    capacityLabel: "4601 frigorías",
    price: 1202727,
    priceOriginal: 2004545,
    installments: 6,
    installmentValue: 294000,
    isNew: true,
    image: "img/equipamiento/surrey-onoff-18-marketing.webp",
    features: ["On/Off", "Frío / Calor", "Follow Me"],
    technology: "On/Off",
    type: "Split",
    refrigerant: "R32",
    warranty: "Según condiciones de garantía del fabricante",
    description: "Equipo split On/Off frío/calor con refrigerante ecológico R-32, función Follow Me y Modo Sleep.",
    specs: {
      "Capacidad": "4601 frigorías",
      "Refrigerante": "R32",
      "Alimentación": "220 V (50 Hz)",
      "Eficiencia refrigeración": "A",
      "Eficiencia calefacción": "B"
    },
    installInfo: "Instalación disponible en toda la zona de cobertura de DAClimaTECH, a cargo de técnicos propios. El costo de instalación se cotiza según distancia, tipo de soporte y metros de cañería necesarios.",
  },
  {
    id: "surrey-onoff-22",
    gallery: [
      { src: "img/equipamiento/surrey-onoff-22-marketing.webp", alt: "Surrey On/Off — refrigerante R-32, Follow Me y Modo Sleep" },
    ],
    brand: "Surrey",
    line: "On/Off R-32",
    name: "Surrey On/Off",
    model: "553NFQ22GN81F",
    capacity: 5822,
    capacityLabel: "5822 frigorías",
    price: 1538379,
    priceOriginal: 2563965,
    installments: 6,
    installmentValue: 376048,
    isNew: true,
    image: "img/equipamiento/surrey-onoff-22-marketing.webp",
    features: ["On/Off", "Frío / Calor", "Follow Me"],
    technology: "On/Off",
    type: "Split",
    refrigerant: "R32",
    warranty: "Según condiciones de garantía del fabricante",
    description: "Equipo split On/Off frío/calor con refrigerante ecológico R-32, función Follow Me y Modo Sleep.",
    specs: {
      "Capacidad": "5822 frigorías",
      "Refrigerante": "R32",
      "Alimentación": "220 V (50 Hz)",
      "Eficiencia refrigeración": "A",
      "Eficiencia calefacción": "A"
    },
    installInfo: "Instalación disponible en toda la zona de cobertura de DAClimaTECH, a cargo de técnicos propios. El costo de instalación se cotiza según distancia, tipo de soporte y metros de cañería necesarios.",
  },
  {
    id: "midea-consola-12",
    gallery: [
      { src: "img/equipamiento/midea-consola-12-marketing.webp", alt: "Midea Consola Residencial — Inverter, Smart Home y refrigerante R-32" },
      { src: "img/equipamiento/midea-consola-remote.webp", alt: "Midea Consola Residencial — panel de control y control remoto" },
    ],
    brand: "Midea",
    line: "Consola Residencial Inverter Smart R-32",
    name: "Midea Consola Residencial",
    model: "MFCIC-12H-N80M",
    capacity: 3277,
    capacityLabel: "3277 frigorías",
    price: 1174772,
    priceOriginal: 1957954,
    installments: 6,
    installmentValue: 287167,
    isNew: true,
    image: "img/equipamiento/midea-consola-12-marketing.webp",
    features: ["Inverter", "Frío / Calor", "WiFi"],
    technology: "Inverter + WiFi",
    type: "Consola",
    refrigerant: "R32",
    warranty: "Según condiciones de garantía del fabricante",
    description: "Consola residencial split Inverter Smart, de piso o techo, con SmartHome, refrigerante ecológico R-32 y alta eficiencia A++.",
    specs: {
      "Capacidad": "3277 frigorías",
      "Refrigerante": "R32",
      "Alimentación": "220 V (50 Hz)",
      "Eficiencia refrigeración": "A++",
      "Eficiencia calefacción": "A"
    },
    installInfo: "Instalación disponible en toda la zona de cobertura de DAClimaTECH, a cargo de técnicos propios. El costo de instalación se cotiza según distancia, tipo de soporte y metros de cañería necesarios.",
  },
  {
    id: "midea-consola-18",
    gallery: [
      { src: "img/equipamiento/midea-consola-18-marketing.webp", alt: "Midea Consola Residencial — Inverter, Smart Home y refrigerante R-32" },
      { src: "img/equipamiento/midea-consola-remote.webp", alt: "Midea Consola Residencial — panel de control y control remoto" },
    ],
    brand: "Midea",
    line: "Consola Residencial Inverter Smart R-32",
    name: "Midea Consola Residencial",
    model: "MFCIC-18H-N80M",
    capacity: 4326,
    capacityLabel: "4326 frigorías",
    price: 1494069,
    priceOriginal: 2490115,
    installments: 6,
    installmentValue: 365217,
    isNew: true,
    image: "img/equipamiento/midea-consola-18-marketing.webp",
    features: ["Inverter", "Frío / Calor", "WiFi"],
    technology: "Inverter + WiFi",
    type: "Consola",
    refrigerant: "R32",
    warranty: "Según condiciones de garantía del fabricante",
    description: "Consola residencial split Inverter Smart, de piso o techo, con SmartHome, refrigerante ecológico R-32 y alta eficiencia A++.",
    specs: {
      "Capacidad": "4326 frigorías",
      "Refrigerante": "R32",
      "Alimentación": "220 V (50 Hz)",
      "Eficiencia refrigeración": "A++",
      "Eficiencia calefacción": "A"
    },
    installInfo: "Instalación disponible en toda la zona de cobertura de DAClimaTECH, a cargo de técnicos propios. El costo de instalación se cotiza según distancia, tipo de soporte y metros de cañería necesarios.",
  },
  {
    id: "midea-ecomaster-09",
    gallery: [
      { src: "img/equipamiento/midea-ecomaster-09-marketing.webp", alt: "Midea AI EcoMaster — Inteligencia artificial, control de humedad y monitor de consumo" },
      { src: "img/equipamiento/midea-ecomaster-front.webp", alt: "Midea AI EcoMaster — unidad interior, vista frontal" },
      { src: "img/equipamiento/midea-ecomaster-angle.webp", alt: "Midea AI EcoMaster — vista en ángulo con detalle del chip AI" },
      { src: "img/equipamiento/midea-ecomaster-outdoor.webp", alt: "Midea AI EcoMaster — unidad exterior" },
    ],
    brand: "Midea",
    line: "Inverter AI EcoMaster Smart",
    name: "Midea AI EcoMaster",
    model: "PR-MSZIC-09H-N81F",
    capacity: 2305,
    capacityLabel: "2305 frigorías",
    price: 869322,
    priceOriginal: 1448870,
    installments: 6,
    installmentValue: 212501,
    isNew: true,
    image: "img/equipamiento/midea-ecomaster-09-marketing.webp",
    features: ["Inverter", "Frío / Calor", "AI EcoMaster"],
    technology: "Inverter + WiFi",
    type: "Split",
    refrigerant: "R32",
    warranty: "Según condiciones de garantía del fabricante",
    description: "Split Inverter Smart con inteligencia artificial AI EcoMaster, control de humedad, monitor de consumo y compatibilidad con Alexa y Google Home.",
    specs: {
      "Capacidad": "2305 frigorías",
      "Refrigerante": "R32",
      "Alimentación": "220 V (50 Hz)"
    },
    installInfo: "Instalación disponible en toda la zona de cobertura de DAClimaTECH, a cargo de técnicos propios. El costo de instalación se cotiza según distancia, tipo de soporte y metros de cañería necesarios.",
  },
  {
    id: "midea-ecomaster-12",
    gallery: [
      { src: "img/equipamiento/midea-ecomaster-12-marketing.webp", alt: "Midea AI EcoMaster — Inteligencia artificial, control de humedad y monitor de consumo" },
      { src: "img/equipamiento/midea-ecomaster-front.webp", alt: "Midea AI EcoMaster — unidad interior, vista frontal" },
      { src: "img/equipamiento/midea-ecomaster-angle.webp", alt: "Midea AI EcoMaster — vista en ángulo con detalle del chip AI" },
      { src: "img/equipamiento/midea-ecomaster-outdoor.webp", alt: "Midea AI EcoMaster — unidad exterior" },
    ],
    brand: "Midea",
    line: "Inverter AI EcoMaster Smart",
    name: "Midea AI EcoMaster",
    model: "PR-MSZIC-12H-N81F",
    capacity: 3105,
    capacityLabel: "3105 frigorías",
    price: 917818,
    priceOriginal: 1529696,
    installments: 6,
    installmentValue: 224355,
    isNew: true,
    image: "img/equipamiento/midea-ecomaster-12-marketing.webp",
    features: ["Inverter", "Frío / Calor", "AI EcoMaster"],
    technology: "Inverter + WiFi",
    type: "Split",
    refrigerant: "R32",
    warranty: "Según condiciones de garantía del fabricante",
    description: "Split Inverter Smart con inteligencia artificial AI EcoMaster, control de humedad, monitor de consumo y compatibilidad con Alexa y Google Home.",
    specs: {
      "Capacidad": "3105 frigorías",
      "Refrigerante": "R32",
      "Alimentación": "220 V (50 Hz)"
    },
    installInfo: "Instalación disponible en toda la zona de cobertura de DAClimaTECH, a cargo de técnicos propios. El costo de instalación se cotiza según distancia, tipo de soporte y metros de cañería necesarios.",
  },
  {
    id: "midea-ecomaster-18",
    gallery: [
      { src: "img/equipamiento/midea-ecomaster-18-marketing.webp", alt: "Midea AI EcoMaster — Inteligencia artificial, control de humedad y monitor de consumo" },
      { src: "img/equipamiento/midea-ecomaster-front.webp", alt: "Midea AI EcoMaster — unidad interior, vista frontal" },
      { src: "img/equipamiento/midea-ecomaster-angle.webp", alt: "Midea AI EcoMaster — vista en ángulo con detalle del chip AI" },
      { src: "img/equipamiento/midea-ecomaster-outdoor.webp", alt: "Midea AI EcoMaster — unidad exterior" },
    ],
    brand: "Midea",
    line: "Inverter AI EcoMaster Smart",
    name: "Midea AI EcoMaster",
    model: "PR-MSZIC-18H-N81F",
    capacity: 5005,
    capacityLabel: "5005 frigorías",
    price: 1377148,
    priceOriginal: 2295247,
    installments: 6,
    installmentValue: 336636,
    isNew: true,
    image: "img/equipamiento/midea-ecomaster-18-marketing.webp",
    features: ["Inverter", "Frío / Calor", "AI EcoMaster"],
    technology: "Inverter + WiFi",
    type: "Split",
    refrigerant: "R32",
    warranty: "Según condiciones de garantía del fabricante",
    description: "Split Inverter Smart con inteligencia artificial AI EcoMaster, control de humedad, monitor de consumo y compatibilidad con Alexa y Google Home.",
    specs: {
      "Capacidad": "5005 frigorías",
      "Refrigerante": "R32",
      "Alimentación": "220 V (50 Hz)"
    },
    installInfo: "Instalación disponible en toda la zona de cobertura de DAClimaTECH, a cargo de técnicos propios. El costo de instalación se cotiza según distancia, tipo de soporte y metros de cañería necesarios.",
  },
  {
    id: "midea-ecomaster-22",
    gallery: [
      { src: "img/equipamiento/midea-ecomaster-22-marketing.webp", alt: "Midea AI EcoMaster — Inteligencia artificial, control de humedad y monitor de consumo" },
      { src: "img/equipamiento/midea-ecomaster-front.webp", alt: "Midea AI EcoMaster — unidad interior, vista frontal" },
      { src: "img/equipamiento/midea-ecomaster-angle.webp", alt: "Midea AI EcoMaster — vista en ángulo con detalle del chip AI" },
      { src: "img/equipamiento/midea-ecomaster-outdoor.webp", alt: "Midea AI EcoMaster — unidad exterior" },
    ],
    brand: "Midea",
    line: "Inverter AI EcoMaster Smart",
    name: "Midea AI EcoMaster",
    model: "PR-MSZIC-22H-N81F",
    capacity: 5900,
    capacityLabel: "5900 frigorías",
    price: 1760779,
    priceOriginal: 2934631,
    installments: 6,
    installmentValue: 430413,
    isNew: true,
    image: "img/equipamiento/midea-ecomaster-22-marketing.webp",
    features: ["Inverter", "Frío / Calor", "AI EcoMaster"],
    technology: "Inverter + WiFi",
    type: "Split",
    refrigerant: "R32",
    warranty: "Según condiciones de garantía del fabricante",
    description: "Split Inverter Smart con inteligencia artificial AI EcoMaster, control de humedad, monitor de consumo y compatibilidad con Alexa y Google Home.",
    specs: {
      "Capacidad": "5900 frigorías",
      "Refrigerante": "R32",
      "Alimentación": "220 V (50 Hz)"
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
   TÍTULO SEO — se genera combinando datos reales del Excel
   (tipo + línea de producto + marca + modelo + frío/calor +
   capacidad + refrigerante), tipo "Aire Acondicionado Split
   Inverter Smart CARRIER 53HVP09N81F Frío Calor 2305 Kcal/h.
   R32". Reutiliza p.line (línea del Excel) sacándole el "R-32"
   final (el refrigerante ya se muestra aparte, al final) y el
   nombre de p.type si viene duplicado al principio de la línea.
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
   Cada producto trae priceOriginal (precio de lista, va tachado),
   price (precio efectivo, 40% OFF sobre lista, es el precio
   principal) e installments/installmentValue (6 o 9 cuotas según
   estaba resaltado en verde en el Excel; sin resaltar se usó 6).
   --------------------------------------------------------- */
function getPricing(p) {
  const discountPct = Math.round((1 - p.price / p.priceOriginal) * 100);
  return { original: p.priceOriginal, final: p.price, discountPct, installments: p.installments, installmentValue: p.installmentValue };
}

/* ---------------------------------------------------------
   FILTROS — misma definición de datos que equipamiento.js,
   UI adaptada a sidebar (opciones siempre visibles, sin dropdown).
   --------------------------------------------------------- */
const FILTER_DEFS = [
  { key: "brand", label: "Marca", options: ["Surrey", "Carrier", "Midea"] },
  { key: "capacity", label: "Capacidad", options: ["Hasta 3000", "3000–5000", "Más de 5000"] },
  { key: "technology", label: "Tecnología", options: ["On/Off", "Inverter", "Inverter + WiFi", "Smart"] },
  { key: "type", label: "Tipo", options: ["Split", "Multisplit", "Consola", "Portátil"] },
  { key: "price", label: "Precio", options: ["Hasta $950.000", "$950.000–$1.450.000", "Más de $1.450.000"] }
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
// Se muestran como dos opciones distintas en el sidebar, pero ambas
// devuelven el mismo resultado.
function matchesTechnology(value, technology) {
  if (value === "Smart") return technology === "Inverter + WiFi" || technology === "Smart";
  return technology === value;
}

// Cuenta cuántos productos del set actual (sin aplicar el propio
// filtro que se está contando) matchean cada opción, para mostrar
// el numerito al lado de cada checkbox del sidebar, como en ML.
function countForOption(key, value) {
  return EQ_PRODUCTS.filter(p => {
    if (key !== "brand" && filterState.brand && p.brand !== filterState.brand) return false;
    if (key !== "technology" && filterState.technology && !matchesTechnology(filterState.technology, p.technology)) return false;
    if (key !== "type" && filterState.type && p.type !== filterState.type) return false;
    if (key !== "capacity" && filterState.capacity && !matchesCapacity(filterState.capacity, p.capacity)) return false;
    if (key !== "price" && filterState.price && !matchesPrice(filterState.price, p.price)) return false;

    if (key === "brand") return p.brand === value;
    if (key === "technology") return matchesTechnology(value, p.technology);
    if (key === "type") return p.type === value;
    if (key === "capacity") return matchesCapacity(value, p.capacity);
    if (key === "price") return matchesPrice(value, p.price);
    return true;
  }).length;
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
  el.innerHTML = `<strong>${n}</strong> equipo${n === 1 ? "" : "s"} de aire acondicionado`;
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
  // Toggle: click de nuevo sobre la opción ya seleccionada la limpia.
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
   RENDER DE CARDS (idéntico a equipamiento.js)
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
   MODAL / FICHA DE PRODUCTO (idéntico a equipamiento.js)
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
        url: "https://daclimatech.com/catalogo-aire-acondicionado.html",
        offers: {
          "@type": "Offer",
          price: pricing.final,
          priceCurrency: "ARS",
          availability: "https://schema.org/InStock",
          url: "https://daclimatech.com/catalogo-aire-acondicionado.html",
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
initSidebarFilters();
initMobileSidebar();
initModalTabs();
injectProductJsonLd();
applyFiltersAndSort();