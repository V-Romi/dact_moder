/* DAClimaTECH — Catálogo completo de Insumos / Accesorios
   JS aislado, calcado del resto de catálogos. Diferencias clave de
   ESTA página únicamente (el resto de los catálogos no cambia):

   1) No hay cuotas — Ro no tiene financiación armada para insumos.
      El precio se muestra solo (columna "Precio Mostrador Con IVA",
      la que marcó en verde en INSUMOS.xlsx, hoja "Calc.Precio") con
      la leyenda "Consultar financiación" en vez de "X cuotas de...".
      Tampoco hay precio de lista tachado / % OFF: el Excel no maneja
      ese concepto para insumos, solo costo → margen → precio mostrador.

   2) El bloque del modal que en el resto del sitio dice "Instalación
      standard / Envío gratis / Desde $150.000 + Materiales" se
      reemplaza acá por "Precio para instaladores + Beneficios" con
      un botón "Solicitar precio" que va a un WhatsApp DISTINTO del
      resto del sitio: +54 9 353 4089909 (no el general
      5493535690667). El precio de instalador en sí (columna "Precio
      Instalador Con IVA" del Excel) NO se muestra en la página —
      por eso es "a consultar" por WhatsApp.

   3) Las tarjetas no muestran el chip "Instalación disponible" que
      sí tiene el resto del catálogo: son insumos/repuestos, no
      equipos que DAClimaTECH instale.

   Precios: reales, sacados de INSUMOS.xlsx, hoja "Calc.Precio",
   columna J "Precio Mostrador Con IVA" (resaltada en verde por Ro). */

const WA_NUMBER = "5493535690667";
const WA_INSTALLER_NUMBER = "5493534089909"; // Solo para el botón "Solicitar precio" de instaladores en esta página
const wa = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
const waInstaller = (text) => `https://wa.me/${WA_INSTALLER_NUMBER}?text=${encodeURIComponent(text)}`;

/* ---------------------------------------------------------
   DATOS DE PRODUCTO — generados desde INSUMOS.xlsx (ver nota arriba)
   --------------------------------------------------------- */
const EQ_PRODUCTS = [
  {
    id: "pm03-1",
    gallery: [
      { src: "img/insumos/pm03-1.webp", alt: "Mensula De Chapa 75 cm" },
    ],
    brand: "Cooltech",
    model: "PM03-1",
    name: "Mensula De Chapa 75 cm",
    unit: "Units",
    type: "Ménsulas y Soportes",
    price: 24553.08, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Ménsula para aire acondicionado.",
    specs: {
      "Código": "PM03-1",
      "Unidad de venta": "Units",
      "Categoría": "Ménsulas y Soportes",
      "Unidad mínima de venta": "1 Par",
      "Medida": "75 cm",
      "Material": "Chapa resistente"
    },
    features: [
      "Ménsula Cooltech de chapa de 75 cm, diseñada para brindar soporte firme y seguro a unidades de aire acondicionado y equipos de refrigeración. Fabricada con materiales resistentes para ofrecer estabilidad y larga durabilidad. Características: Marca: Cooltech",
      "Diseño robusto y durable",
      "Excelente estabilidad y soporte",
      "Resistente a la corrosión y desgaste",
      "Fácil instalación",
      "Ideal para unidades de aire acondicionado y refrigeración",
      "Uso residencial y comercial",
      "Alta resistencia y larga vida útil"
    ],
  },
  {
    id: "z1-49b",
    gallery: [
      { src: "img/insumos/z1-49b.webp", alt: "Cinta PVC Sin Adhesivo Blanca x 20 mts Cooltech" },
    ],
    brand: "Cooltech",
    model: "Z1-49B",
    name: "Cinta PVC Sin Adhesivo Blanca x 20 mts Cooltech",
    unit: "Units",
    type: "Cintas y Terminación",
    price: 2419.69, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Cinta de PVC sin adhesivo, para revestimiento de caños y conductos de refrigeración. Posee excelente flexibilidad y es de fácil corte, auto extinguible y aislante eléctrica en baja tensión. Tiene excelente resistencia a la abrasión y a la exposición a la intemperie.",
    specs: {
      "Código": "Z1-49B",
      "Unidad de venta": "Units",
      "Categoría": "Cintas y Terminación",
      "Unidad mínima de venta": "1 Rollo (20 m)",
      "Marca": "Cooltech",
      "Tipo": "cinta de PVC sin adhesivo",
      "Color": "blanco",
      "Largo": "20 m"
    },
    features: [
      "La Cinta de PVC Cooltech sin Adhesivo Blanca de 20 m está diseñada para envolver, cubrir y proteger cañerías, aislaciones, cables y conductos en instalaciones de aire acondicionado y refrigeración. Ayuda a mantener los componentes agrupados y brinda una terminación limpia y prolija. Al no contar con adhesivo, permite ajustar la tensión durante la colocación y facilita el reposicionamiento. Su material flexible se adapta a diferentes formas y superficies, mientras que el color blanco ofrece un acabado uniforme. Características",
      "Material flexible y resistente",
      "Permite ajustar la tensión durante la instalación",
      "Fácil de colocar y reposicionar",
      "Terminación limpia y uniforme",
      "Apta para envolver cañerías, cables y aislaciones",
      "Ideal para instalaciones de aire acondicionado y refrigeración"
    ],
  },
  {
    id: "co-d06",
    gallery: [
      { src: "img/insumos/aislacion-caucho-diametros.webp", alt: "Aislacion Cooltech 1/4 (6x06)" },
      { src: "img/insumos/aislacion-caucho-con-cobre.webp", alt: "Aislacion Cooltech 1/4 (6x06) en caño de cobre" },
    ],
    brand: "Cooltech",
    model: "CO-D06",
    name: "Aislacion Cooltech 1/4 (6x06)",
    unit: "m",
    type: "Aislación",
    price: 544.5, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "La aislación de caucho elastomérico es una espuma flexible de estructura celular cerrada, diseñada específicamente para el control de la condensación y la pérdida de energía en sistemas de refrigeración, aire acondicionado y calefacción. *El precio indicado es por metro",
    specs: {
      "Código": "CO-D06",
      "Unidad de venta": "m",
      "Categoría": "Aislación",
      "Unidad mínima de venta": "1 Unidad (tramo de 2 metros) — precio facturado por metro",
      "Espesor": "6mm",
      "Especificación": "Largo: 2 metros por tramo"
    },
    features: [
      "Estructura de Celda Cerrada: Actúa como una barrera de vapor integral, eliminando la necesidad de recubrimientos adicionales y protegiendo las tuberías contra la corrosión bajo el aislamiento",
      "Baja Conductividad Térmica: Ofrece un rendimiento superior en el mantenimiento de temperaturas estables, optimizando el consumo energético del equipo",
      "Resistencia a la Humedad: Su composición química impide la absorción de agua, evitando la formación de moho y hongos",
      "Flexibilidad Extrema: Su elasticidad permite una instalación rápida y sencilla, adaptándose fácilmente a codos, válvulas y uniones sin romperse. Color negro"
    ],
  },
  {
    id: "co-d10",
    gallery: [
      { src: "img/insumos/aislacion-caucho-diametros.webp", alt: "Aislacion Cooltech 3/8 (6x10)" },
      { src: "img/insumos/aislacion-caucho-con-cobre.webp", alt: "Aislacion Cooltech 3/8 (6x10) en caño de cobre" },
    ],
    brand: "Cooltech",
    model: "CO-D10",
    name: "Aislacion Cooltech 3/8 (6x10)",
    unit: "m",
    type: "Aislación",
    price: 685.16, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "La aislación de caucho elastomérico es una espuma flexible de estructura celular cerrada, diseñada específicamente para el control de la condensación y la pérdida de energía en sistemas de refrigeración, aire acondicionado y calefacción. *El precio indicado es por metro",
    specs: {
      "Código": "CO-D10",
      "Unidad de venta": "m",
      "Categoría": "Aislación",
      "Unidad mínima de venta": "1 Unidad (tramo de 2 metros) — precio facturado por metro",
      "Espesor": "6mm",
      "Especificación": "Largo: 2 metros por tramo"
    },
    features: [
      "Estructura de Celda Cerrada: Actúa como una barrera de vapor integral, eliminando la necesidad de recubrimientos adicionales y protegiendo las tuberías contra la corrosión bajo el aislamiento",
      "Baja Conductividad Térmica: Ofrece un rendimiento superior en el mantenimiento de temperaturas estables, optimizando el consumo energético del equipo",
      "Resistencia a la Humedad: Su composición química impide la absorción de agua, evitando la formación de moho y hongos",
      "Flexibilidad Extrema: Su elasticidad permite una instalación rápida y sencilla, adaptándose fácilmente a codos, válvulas y uniones sin romperse. Color negro"
    ],
  },
  {
    id: "co-d13",
    gallery: [
      { src: "img/insumos/aislacion-caucho-diametros.webp", alt: "Aislacion Cooltech 1/2 (6x13)" },
      { src: "img/insumos/aislacion-caucho-con-cobre.webp", alt: "Aislacion Cooltech 1/2 (6x13) en caño de cobre" },
    ],
    brand: "Cooltech",
    model: "CO-D13",
    name: "Aislacion Cooltech 1/2 (6x13)",
    unit: "m",
    type: "Aislación",
    price: 849.27, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "La aislación de caucho elastomérico es una espuma flexible de estructura celular cerrada, diseñada específicamente para el control de la condensación y la pérdida de energía en sistemas de refrigeración, aire acondicionado y calefacción. *El precio indicado es por metro",
    specs: {
      "Código": "CO-D13",
      "Unidad de venta": "m",
      "Categoría": "Aislación",
      "Unidad mínima de venta": "1 Unidad (tramo de 2 metros) — precio facturado por metro",
      "Espesor": "6mm",
      "Especificación": "Largo: 2 metros por tramo"
    },
    features: [
      "Estructura de Celda Cerrada: Actúa como una barrera de vapor integral, eliminando la necesidad de recubrimientos adicionales y protegiendo las tuberías contra la corrosión bajo el aislamiento",
      "Baja Conductividad Térmica: Ofrece un rendimiento superior en el mantenimiento de temperaturas estables, optimizando el consumo energético del equipo",
      "Resistencia a la Humedad: Su composición química impide la absorción de agua, evitando la formación de moho y hongos",
      "Flexibilidad Extrema: Su elasticidad permite una instalación rápida y sencilla, adaptándose fácilmente a codos, válvulas y uniones sin romperse. Color negro"
    ],
  },
  {
    id: "ca-bb61-1-5-440",
    gallery: [
      { src: "img/insumos/capacitor-cbb61.webp", alt: "Capacitor Cooltech 1.5 Mf 440V" },
    ],
    brand: "Cooltech",
    model: "CA-BB61-1.5-440",
    name: "Capacitor Cooltech 1.5 Mf 440V",
    unit: "Units",
    type: "Capacitores",
    price: 1318.14, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Sus principales ventajas son la baja disipación. alta resistencia de aislamiento, carácter autorreparable, antichoque de corriente. capacidad de carga y rendimiento de electricidad constante. Se aplica en ventiladores eléctrico, bronceado de escape. bomba eléctrica y máquina de coser eléctrica. generadores de gasolina, entre otras. Es útil para el arranque y funcionamiento del motor.",
    specs: {
      "Código": "CA-BB61-1.5-440",
      "Unidad de venta": "Units",
      "Categoría": "Capacitores",
      "Unidad mínima de venta": "1 Unidad",
      "Marca": "Cooltech"
    },
    features: [
      "Capacitor Cooltech diseñado para optimizar el arranque y funcionamiento de motores eléctricos en equipos de aire acondicionado, refrigeración y sistemas HVAC. Fabricado con materiales de alta calidad para ofrecer estabilidad, eficiencia y larga vida útil",
      "Capacitor para arranque y/o marcha",
      "Mejora el rendimiento del motor",
      "Alta eficiencia eléctrica",
      "Diseño compacto y resistente",
      "Carcasa metálica de alta durabilidad",
      "Protección contra sobrecalentamiento",
      "Compatible con equipos HVAC y refrigeración",
      "Funcionamiento estable y confiable",
      "Fácil instalación y reemplazo",
      "Ideal para compresores, ventiladores y motores eléctricos",
      "Larga vida útil y bajo mantenimiento. Voltaje: 440V"
    ],
  },
  {
    id: "ca-bb61-2-5-440",
    gallery: [
      { src: "img/insumos/capacitor-cbb61.webp", alt: "Capacitor Cooltech 2.5 Mf 440V" },
    ],
    brand: "Cooltech",
    model: "CA-BB61-2.5-440",
    name: "Capacitor Cooltech 2.5 Mf 440V",
    unit: "Units",
    type: "Capacitores",
    price: 1505.69, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Sus principales ventajas son la baja disipación. alta resistencia de aislamiento, carácter autorreparable, antichoque de corriente. capacidad de carga y rendimiento de electricidad constante. Se aplica en ventiladores eléctrico, bronceado de escape. bomba eléctrica y máquina de coser eléctrica. generadores de gasolina, entre otras. Es útil para el arranque y funcionamiento del motor.",
    specs: {
      "Código": "CA-BB61-2.5-440",
      "Unidad de venta": "Units",
      "Categoría": "Capacitores",
      "Unidad mínima de venta": "1 Unidad",
      "Marca": "Cooltech"
    },
    features: [
      "Capacitor Cooltech diseñado para optimizar el arranque y funcionamiento de motores eléctricos en equipos de aire acondicionado, refrigeración y sistemas HVAC. Fabricado con materiales de alta calidad para ofrecer estabilidad, eficiencia y larga vida útil",
      "Capacitor para arranque y/o marcha",
      "Mejora el rendimiento del motor",
      "Alta eficiencia eléctrica",
      "Diseño compacto y resistente",
      "Carcasa metálica de alta durabilidad",
      "Protección contra sobrecalentamiento",
      "Compatible con equipos HVAC y refrigeración",
      "Funcionamiento estable y confiable",
      "Fácil instalación y reemplazo",
      "Ideal para compresores, ventiladores y motores eléctricos",
      "Larga vida útil y bajo mantenimiento. Voltaje: 440V"
    ],
  },
  {
    id: "ca-bb61-4-440",
    gallery: [
      { src: "img/insumos/capacitor-cbb61.webp", alt: "Capacitor Cooltech 4 Mf 440V" },
    ],
    brand: "Cooltech",
    model: "CA-BB61-4-440",
    name: "Capacitor Cooltech 4 Mf 440V",
    unit: "Units",
    type: "Capacitores",
    price: 1688.16, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Sus principales ventajas son la baja disipación. alta resistencia de aislamiento, carácter autorreparable, antichoque de corriente. capacidad de carga y rendimiento de electricidad constante. Se aplica en ventiladores eléctrico, bronceado de escape. bomba eléctrica y máquina de coser eléctrica. generadores de gasolina, entre otras. Es útil para el arranque y funcionamiento del motor.",
    specs: {
      "Código": "CA-BB61-4-440",
      "Unidad de venta": "Units",
      "Categoría": "Capacitores",
      "Unidad mínima de venta": "1 Unidad",
      "Marca": "Cooltech"
    },
    features: [
      "Capacitor Cooltech diseñado para optimizar el arranque y funcionamiento de motores eléctricos en equipos de aire acondicionado, refrigeración y sistemas HVAC. Fabricado con materiales de alta calidad para ofrecer estabilidad, eficiencia y larga vida útil",
      "Capacitor para arranque y/o marcha",
      "Mejora el rendimiento del motor",
      "Alta eficiencia eléctrica",
      "Diseño compacto y resistente",
      "Carcasa metálica de alta durabilidad",
      "Protección contra sobrecalentamiento",
      "Compatible con equipos HVAC y refrigeración",
      "Funcionamiento estable y confiable",
      "Fácil instalación y reemplazo",
      "Ideal para compresores, ventiladores y motores eléctricos",
      "Larga vida útil y bajo mantenimiento. Voltaje: 440V"
    ],
  },
  {
    id: "ca-bb61-3-440",
    gallery: [
      { src: "img/insumos/capacitor-cbb61.webp", alt: "Capacitor Cooltech 3 Mf 440V" },
    ],
    brand: "Cooltech",
    model: "CA-BB61-3-440",
    name: "Capacitor Cooltech 3 Mf 440V",
    unit: "Units",
    type: "Capacitores",
    price: 1505.69, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Sus principales ventajas son la baja disipación. alta resistencia de aislamiento, carácter autorreparable, antichoque de corriente. capacidad de carga y rendimiento de electricidad constante. Se aplica en ventiladores eléctrico, bronceado de escape. bomba eléctrica y máquina de coser eléctrica. generadores de gasolina, entre otras. Es útil para el arranque y funcionamiento del motor.",
    specs: {
      "Código": "CA-BB61-3-440",
      "Unidad de venta": "Units",
      "Categoría": "Capacitores",
      "Unidad mínima de venta": "1 Unidad",
      "Marca": "Cooltech"
    },
    features: [
      "Capacitor Cooltech diseñado para optimizar el arranque y funcionamiento de motores eléctricos en equipos de aire acondicionado, refrigeración y sistemas HVAC. Fabricado con materiales de alta calidad para ofrecer estabilidad, eficiencia y larga vida útil",
      "Capacitor para arranque y/o marcha",
      "Mejora el rendimiento del motor",
      "Alta eficiencia eléctrica",
      "Diseño compacto y resistente",
      "Carcasa metálica de alta durabilidad",
      "Protección contra sobrecalentamiento",
      "Compatible con equipos HVAC y refrigeración",
      "Funcionamiento estable y confiable",
      "Fácil instalación y reemplazo",
      "Ideal para compresores, ventiladores y motores eléctricos",
      "Larga vida útil y bajo mantenimiento. Voltaje: 440V"
    ],
  },
  {
    id: "ca-440-25",
    gallery: [
      { src: "img/insumos/capacitor-cbb60.webp", alt: "Capacitor Cooltech 25 Mf 440V" },
    ],
    brand: "Cooltech",
    model: "CA-440-25",
    name: "Capacitor Cooltech 25 Mf 440V",
    unit: "Units",
    type: "Capacitores",
    price: 4314.18, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Sus principales ventajas son la baja disipación. alta resistencia de aislamiento, carácter autorreparable, antichoque de corriente. capacidad de carga y rendimiento de electricidad constante.Adecuado para motores de CA, bombas de agua, refrigeradores, lavadoras, compresores, entre otras",
    specs: {
      "Código": "CA-440-25",
      "Unidad de venta": "Units",
      "Categoría": "Capacitores",
      "Unidad mínima de venta": "1 Unidad",
      "Marca": "Cooltech"
    },
    features: [
      "Capacitor Cooltech diseñado para optimizar el arranque y funcionamiento de motores eléctricos en equipos de aire acondicionado, refrigeración y sistemas HVAC. Fabricado con materiales de alta calidad para ofrecer estabilidad, eficiencia y larga vida útil",
      "Capacitor para arranque y/o marcha",
      "Mejora el rendimiento del motor",
      "Alta eficiencia eléctrica",
      "Diseño compacto y resistente",
      "Carcasa metálica de alta durabilidad",
      "Protección contra sobrecalentamiento",
      "Compatible con equipos HVAC y refrigeración",
      "Funcionamiento estable y confiable",
      "Fácil instalación y reemplazo",
      "Ideal para compresores, ventiladores y motores eléctricos",
      "Larga vida útil y bajo mantenimiento. Voltaje: 440V"
    ],
  },
  {
    id: "ca-440-30",
    gallery: [
      { src: "img/insumos/capacitor-cbb60.webp", alt: "Capacitor Cooltech 30 Mf 440V" },
    ],
    brand: "Cooltech",
    model: "CA-440-30",
    name: "Capacitor Cooltech 30 Mf 440V",
    unit: "Units",
    type: "Capacitores",
    price: 4876.59, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Sus principales ventajas son la baja disipación. alta resistencia de aislamiento, carácter autorreparable, antichoque de corriente. capacidad de carga y rendimiento de electricidad constante.Adecuado para motores de CA, bombas de agua, refrigeradores, lavadoras, compresores, entre otras",
    specs: {
      "Código": "CA-440-30",
      "Unidad de venta": "Units",
      "Categoría": "Capacitores",
      "Unidad mínima de venta": "1 Unidad",
      "Marca": "Cooltech"
    },
    features: [
      "Capacitor Cooltech diseñado para optimizar el arranque y funcionamiento de motores eléctricos en equipos de aire acondicionado, refrigeración y sistemas HVAC. Fabricado con materiales de alta calidad para ofrecer estabilidad, eficiencia y larga vida útil",
      "Capacitor para arranque y/o marcha",
      "Mejora el rendimiento del motor",
      "Alta eficiencia eléctrica",
      "Diseño compacto y resistente",
      "Carcasa metálica de alta durabilidad",
      "Protección contra sobrecalentamiento",
      "Compatible con equipos HVAC y refrigeración",
      "Funcionamiento estable y confiable",
      "Fácil instalación y reemplazo",
      "Ideal para compresores, ventiladores y motores eléctricos",
      "Larga vida útil y bajo mantenimiento. Voltaje: 440V"
    ],
  },
  {
    id: "ca-440-35",
    gallery: [
      { src: "img/insumos/capacitor-cbb60.webp", alt: "Capacitor Cooltech 35 Mf 440V" },
    ],
    brand: "Cooltech",
    model: "CA-440-35",
    name: "Capacitor Cooltech 35 Mf 440V",
    unit: "Units",
    type: "Capacitores",
    price: 5063.89, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Sus principales ventajas son la baja disipación. alta resistencia de aislamiento, carácter autorreparable, antichoque de corriente. capacidad de carga y rendimiento de electricidad constante.Adecuado para motores de CA, bombas de agua, refrigeradores, lavadoras, compresores, entre otras",
    specs: {
      "Código": "CA-440-35",
      "Unidad de venta": "Units",
      "Categoría": "Capacitores",
      "Unidad mínima de venta": "1 Unidad",
      "Marca": "Cooltech"
    },
    features: [
      "Capacitor Cooltech diseñado para optimizar el arranque y funcionamiento de motores eléctricos en equipos de aire acondicionado, refrigeración y sistemas HVAC. Fabricado con materiales de alta calidad para ofrecer estabilidad, eficiencia y larga vida útil",
      "Capacitor para arranque y/o marcha",
      "Mejora el rendimiento del motor",
      "Alta eficiencia eléctrica",
      "Diseño compacto y resistente",
      "Carcasa metálica de alta durabilidad",
      "Protección contra sobrecalentamiento",
      "Compatible con equipos HVAC y refrigeración",
      "Funcionamiento estable y confiable",
      "Fácil instalación y reemplazo",
      "Ideal para compresores, ventiladores y motores eléctricos",
      "Larga vida útil y bajo mantenimiento. Voltaje: 440V"
    ],
  },
  {
    id: "ca-440-40",
    gallery: [
      { src: "img/insumos/capacitor-cbb60.webp", alt: "Capacitor Cooltech 40 Mf 440V" },
    ],
    brand: "Cooltech",
    model: "CA-440-40",
    name: "Capacitor Cooltech 40 Mf 440V",
    unit: "Units",
    type: "Capacitores",
    price: 5626.88, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Sus principales ventajas son la baja disipación. alta resistencia de aislamiento, carácter autorreparable, antichoque de corriente. capacidad de carga y rendimiento de electricidad constante.Adecuado para motores de CA, bombas de agua, refrigeradores, lavadoras, compresores, entre otras",
    specs: {
      "Código": "CA-440-40",
      "Unidad de venta": "Units",
      "Categoría": "Capacitores",
      "Unidad mínima de venta": "1 Unidad",
      "Marca": "Cooltech"
    },
    features: [
      "Capacitor Cooltech diseñado para optimizar el arranque y funcionamiento de motores eléctricos en equipos de aire acondicionado, refrigeración y sistemas HVAC. Fabricado con materiales de alta calidad para ofrecer estabilidad, eficiencia y larga vida útil",
      "Capacitor para arranque y/o marcha",
      "Mejora el rendimiento del motor",
      "Alta eficiencia eléctrica",
      "Diseño compacto y resistente",
      "Carcasa metálica de alta durabilidad",
      "Protección contra sobrecalentamiento",
      "Compatible con equipos HVAC y refrigeración",
      "Funcionamiento estable y confiable",
      "Fácil instalación y reemplazo",
      "Ideal para compresores, ventiladores y motores eléctricos",
      "Larga vida útil y bajo mantenimiento. Voltaje: 440V"
    ],
  },
  {
    id: "ca-440-50",
    gallery: [
      { src: "img/insumos/capacitor-cbb60.webp", alt: "Capacitor Cooltech 50 Mf 440V" },
    ],
    brand: "Cooltech",
    model: "CA-440-50",
    name: "Capacitor Cooltech 50 Mf 440V",
    unit: "Units",
    type: "Capacitores",
    price: 6752.43, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Sus principales ventajas son la baja disipación. alta resistencia de aislamiento, carácter autorreparable, antichoque de corriente. capacidad de carga y rendimiento de electricidad constante.Adecuado para motores de CA, bombas de agua, refrigeradores, lavadoras, compresores, entre otras",
    specs: {
      "Código": "CA-440-50",
      "Unidad de venta": "Units",
      "Categoría": "Capacitores",
      "Unidad mínima de venta": "1 Unidad",
      "Marca": "Cooltech"
    },
    features: [
      "Capacitor Cooltech diseñado para optimizar el arranque y funcionamiento de motores eléctricos en equipos de aire acondicionado, refrigeración y sistemas HVAC. Fabricado con materiales de alta calidad para ofrecer estabilidad, eficiencia y larga vida útil",
      "Capacitor para arranque y/o marcha",
      "Mejora el rendimiento del motor",
      "Alta eficiencia eléctrica",
      "Diseño compacto y resistente",
      "Carcasa metálica de alta durabilidad",
      "Protección contra sobrecalentamiento",
      "Compatible con equipos HVAC y refrigeración",
      "Funcionamiento estable y confiable",
      "Fácil instalación y reemplazo",
      "Ideal para compresores, ventiladores y motores eléctricos",
      "Larga vida útil y bajo mantenimiento. Voltaje: 440V"
    ],
  },
  {
    id: "ca-440-60",
    gallery: [
      { src: "img/insumos/capacitor-cbb60.webp", alt: "Capacitor Cooltech 60 Mf 440V" },
    ],
    brand: "Cooltech",
    model: "CA-440-60",
    name: "Capacitor Cooltech 60 Mf 440V",
    unit: "Units",
    type: "Capacitores",
    price: 7502.63, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Sus principales ventajas son la baja disipación. alta resistencia de aislamiento, carácter autorreparable, antichoque de corriente. capacidad de carga y rendimiento de electricidad constante.Adecuado para motores de CA, bombas de agua, refrigeradores, lavadoras, compresores, entre otras",
    specs: {
      "Código": "CA-440-60",
      "Unidad de venta": "Units",
      "Categoría": "Capacitores",
      "Unidad mínima de venta": "1 Unidad",
      "Marca": "Cooltech"
    },
    features: [
      "Capacitor Cooltech diseñado para optimizar el arranque y funcionamiento de motores eléctricos en equipos de aire acondicionado, refrigeración y sistemas HVAC. Fabricado con materiales de alta calidad para ofrecer estabilidad, eficiencia y larga vida útil",
      "Capacitor para arranque y/o marcha",
      "Mejora el rendimiento del motor",
      "Alta eficiencia eléctrica",
      "Diseño compacto y resistente",
      "Carcasa metálica de alta durabilidad",
      "Protección contra sobrecalentamiento",
      "Compatible con equipos HVAC y refrigeración",
      "Funcionamiento estable y confiable",
      "Fácil instalación y reemplazo",
      "Ideal para compresores, ventiladores y motores eléctricos",
      "Larga vida útil y bajo mantenimiento. Voltaje: 440V"
    ],
  },
  {
    id: "pms35",
    gallery: [
      { src: "img/insumos/soporte-mensula-grupo.webp", alt: "Soporte Cooltech Para Mensulas 42/52" },
      { src: "img/insumos/soporte-mensula-a.webp", alt: "Soporte Cooltech Para Mensulas 42/52 (kit con tornillo, arandelas y tuercas)" },
      { src: "img/insumos/soporte-mensula-b.webp", alt: "Soporte Cooltech Para Mensulas 42/52 (detalle)" },
    ],
    brand: "Cooltech",
    model: "PMS35",
    name: "Soporte Para Mensulas 42/52",
    unit: "Units",
    type: "Ménsulas y Soportes",
    price: 6433.28, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Estos soportes disminuyen el ruido que pueda realizar la unidad que esté colocada en las ménsulas. Son fáciles de colocar ya que el taco viene con tornillo incorporado y el kit incluye arandelas y tuercas.",
    specs: {
      "Código": "PMS35",
      "Unidad de venta": "Units",
      "Categoría": "Ménsulas y Soportes",
      "Unidad mínima de venta": "1 Unidad"
    },
    features: [
      "Optimiza la instalación y el rendimiento de tus equipos de climatización con el soporte Cooltech para ménsulas de 42/52, diseñado especialmente para minimizar las vibraciones y reducir notablemente el ruido en funcionamiento. Su sistema facilita un montaje rápido y seguro, adaptándose a las necesidades de cualquier instalación profesional",
      "– Reduce eficazmente el ruido y las vibraciones de la unidad exterior",
      "– Fácil instalación gracias al taco con tornillo incorporado",
      "– Kit completo que incluye arandelas y tuercas para un montaje inmediato",
      "– Fabricado con materiales de alta resistencia para mayor durabilidad",
      "– Compatible con ménsulas de 42 y 52"
    ],
  },
  {
    id: "pms45",
    gallery: [
      { src: "img/insumos/soporte-mensula-grupo.webp", alt: "Soporte Cooltech Para Mensulas 60/75" },
      { src: "img/insumos/soporte-mensula-a.webp", alt: "Soporte Cooltech Para Mensulas 60/75 (kit con tornillo, arandelas y tuercas)" },
      { src: "img/insumos/soporte-mensula-b.webp", alt: "Soporte Cooltech Para Mensulas 60/75 (detalle)" },
    ],
    brand: "Cooltech",
    model: "PMS45",
    name: "Soporte Para Mensulas 60/75",
    unit: "Units",
    type: "Ménsulas y Soportes",
    price: 6733.32, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Estos soportes disminuyen el ruido que pueda realizar la unidad que esté colocada en las ménsulas. Son fáciles de colocar ya que el taco viene con tornillo incorporado y el kit incluye arandelas y tuercas.",
    specs: {
      "Código": "PMS45",
      "Unidad de venta": "Units",
      "Categoría": "Ménsulas y Soportes",
      "Unidad mínima de venta": "1 Unidad"
    },
    features: [
      "Los soportes Cooltech para ménsulas de 60/75 son la solución ideal para optimizar instalaciones de aire acondicionado y equipos de climatización, garantizando una fijación firme y un funcionamiento silencioso",
      "– Diseñados específicamente para disminuir de forma notable el ruido y las vibraciones generadas por la unidad exterior",
      "– Instalación rápida y sencilla gracias al taco con tornillo incorporado",
      "– Kit completo que incluye todas las arandelas y tuercas necesarias para su montaje inmediato",
      "– Materiales de alta resistencia preparados para soportar condiciones exigentes a la intemperie"
    ],
  },
  {
    id: "ct-etc-100",
    gallery: [
      { src: "img/insumos/ct-etc-100.webp", alt: "Controlador De Temperatura Cooltech" },
      { src: "img/insumos/ct-etc-100-a.webp", alt: "Controlador De Temperatura Cooltech (con sonda)" },
    ],
    brand: "Cooltech",
    model: "CT-ETC-100",
    name: "Controlador De Temperatura Cooltech",
    unit: "Units",
    type: "Controladores y Termómetros",
    price: 38077.03, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Control de temperatura para solo frio, 1 sonda, con un rango de medicion de -40°C~120°C",
    specs: {
      "Código": "CT-ETC-100",
      "Unidad de venta": "Units",
      "Categoría": "Controladores y Termómetros",
      "Unidad mínima de venta": "1 Unidad",
      "Modelo": "ETC-100",
      "Marca": "Cooltech"
    },
    features: [
      "Controlador de temperatura Cooltech ETC-100 diseñado para controlar automáticamente sistemas de refrigeración y calefacción. Ideal para aplicaciones comerciales e industriales que requieren regulación precisa y operación confiable. Contiene un sensor",
      "Control digital de temperatura",
      "Pantalla LED de fácil visualización",
      "Configuración sencilla y precisa",
      "Compatible con refrigeración y calefacción",
      "Sensor de temperatura incluido",
      "Alta precisión de control",
      "Diseño compacto y resistente",
      "Fácil instalación y operación",
      "Ideal para vitrinas, cámaras frigoríficas y equipos HVAC"
    ],
  },
  {
    id: "ggt-126",
    gallery: [
      { src: "img/insumos/minicortadora-a.webp", alt: "Minicortadora Cooltech 1/8-5/8" },
      { src: "img/insumos/minicortadora-b.webp", alt: "Minicortadora Cooltech 1/8-5/8" },
      { src: "img/insumos/minicortadora-c.webp", alt: "Minicortadora Cooltech 1/8-5/8" },
    ],
    brand: "Cooltech",
    model: "GGT-126",
    name: "Minicortadora Cooltech 1/8-5/8",
    unit: "Units",
    type: "Herramientas",
    price: 5382.84, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Cortadora de Caño de Cobre",
    specs: {
      "Código": "GGT-126",
      "Unidad de venta": "Units",
      "Categoría": "Herramientas",
      "Unidad mínima de venta": "1 Unidad",
      "Marca": "Cooltech",
      "Modelo": "GGT-126"
    },
    features: [
      "Minicortadora profesional Cooltech GGT-126 para corte de caños de cobre, aluminio y materiales blandos utilizados en refrigeración y aire acondicionado. Su diseño compacto permite trabajar cómodamente en espacios reducidos, logrando cortes precisos y limpios sin deformar el tubo. Ideal para técnicos HVAC y trabajos de instalación",
      "Ideal para caños de cobre, aluminio y latón",
      "Diseño mini compacto para lugares de difícil acceso",
      "Corte limpio y preciso",
      "Cuerpo metálico resistente y liviano",
      "Rodillos guía para mejor estabilidad del tubo",
      "Perilla ergonómica de ajuste suave",
      "Cuchilla de acero templado",
      "Fácil de usar y transportar",
      "Uso profesional en refrigeración y aire acondicionado"
    ],
  },
  {
    id: "ggt-410-b",
    gallery: [
      { src: "img/insumos/ggt-410-b.webp", alt: "Manifold Cooltech R410 R22 R134 R404 Cuerpo De Bronce (con mangueras)" },
      { src: "img/insumos/ggt-410-b-sin-mangueras.webp", alt: "Manifold Cooltech R410 R22 R134 R404 Cuerpo De Bronce" },
    ],
    brand: "Cooltech",
    model: "GGT-410-B",
    name: "Manifold Cooltech R410 R22 R134 R404 Cuerpo De Bronce",
    unit: "Units",
    type: "Herramientas",
    price: 60829.93, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Herramienta que cuenta con todos los elementos para realizar mediciones en el sistema de refrigeración y de HVAC",
    specs: {
      "Código": "GGT-410-B",
      "Unidad de venta": "Units",
      "Categoría": "Herramientas",
      "Unidad mínima de venta": "1 Unidad",
      "Contiene": "SET DE 3 MAGUERAS DE 90 CM"
    },
    features: [
      "Manifold Cooltech R410/R22/R134/R404 con cuerpo de bronce diseñado para carga, medición y mantenimiento de sistemas de refrigeración y aire acondicionado. Su construcción robusta brinda mayor durabilidad, precisión y resistencia para trabajos técnicos profesionales",
      "Compatible con refrigerantes R410A, R22, R134a y R404A",
      "Cuerpo de bronce resistente y duradero",
      "Ideal para carga y diagnóstico HVAC",
      "Manómetros de lectura clara y precisa",
      "Válvulas de operación suave y segura",
      "Conexiones confiables de alta resistencia",
      "Diseño profesional para uso técnico",
      "Marca Cooltech"
    ],
  },
  {
    id: "vcta1",
    gallery: [
      { src: "img/insumos/vcta1.webp", alt: "Cinta Aislante Cooltech 10 mts" },
    ],
    brand: "Cooltech",
    model: "VCTA1",
    name: "Cinta Aislante Cooltech 10 mts",
    unit: "Units",
    type: "Cintas y Terminación",
    price: 7896.44, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Cinta aisladora elastomérica con autoadhesivo para condensación. Aísla tramos cortos de tubos y empalmes en áreas obstruidas o de difícil acceso, controla la condensación en sistemas de tuberías de agua y reduce la perdida térmica en tuberías de agua caliente.",
    specs: {
      "Código": "VCTA1",
      "Unidad de venta": "Units",
      "Categoría": "Cintas y Terminación",
      "Unidad mínima de venta": "1 Unidad"
    },
    features: [
      "La cinta aislante Cooltech de 10 metros es una solución elastomérica de alta calidad con autoadhesivo diseñada para un control eficaz de la condensación y el aislamiento térmico. Ideal para profesionales e instalaciones exigentes, permite asegurar un rendimiento óptimo en tramos reducidos o complejos",
      "– Fabricada en material elastomérico flexible de alta densidad",
      "– Autoadhesivo incorporado para una instalación rápida y firme",
      "– Control efectivo de la condensación en sistemas de tuberías de agua fría. – Reducción de la pérdida térmica en tuberías de agua caliente",
      "– Excelente adaptabilidad en áreas obstruidas o de difícil acceso",
      "– Longitud de 10 metros para mayor cobertura y rendimiento por rollo"
    ],
  },
  {
    id: "v-m2",
    gallery: [
      { src: "img/insumos/v-m2.webp", alt: "Bomba de Condensado Value 40 L/h" },
      { src: "img/insumos/v-m2-frente.webp", alt: "Bomba de Condensado Value 40 L/h (frente)" },
      { src: "img/insumos/v-m2-panel.webp", alt: "Bomba de Condensado Value 40 L/h (panel conexiones)" },
      { src: "img/insumos/v-m2-accesorios.webp", alt: "Bomba de Condensado Value 40 L/h (accesorios incluidos)" },
    ],
    brand: "Value",
    model: "V-M2",
    name: "Bomba de Condensado Value 40 L/h",
    unit: "Units",
    type: "Bombas de Condensado",
    price: 113768.64, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Esta bomba de condensado Value es el recurso extra que el aire necesita para funcionar de manera óptima. Ayuda al aire acondicionado a drenar la acumulación de los condensados, elevando y empujando el agua que produce el equipo.",
    specs: {
      "Código": "V-M2",
      "Unidad de venta": "Units",
      "Categoría": "Bombas de Condensado",
      "Unidad mínima de venta": "1 Unidad"
    },
    features: [
      "La bomba de condensado Value 40 L/h M2 es la solución ideal para garantizar un drenaje eficiente y continuo en sistemas de aire acondicionado, evitando desbordes y acumulación de agua",
      "– Caudal máximo de 40 litros por hora para un rendimiento óptimo",
      "– Diseño compacto y de fácil instalación en espacios reducidos",
      "– Funcionamiento silencioso que asegura el confort en el ambiente",
      "– Elevación y propulsión eficaz del agua condensada"
    ],
  },
  {
    id: "st-ecoflowatch",
    gallery: [
      { src: "img/insumos/st-ecoflowatch.webp", alt: "Bomba de Condensado Siccom 45ml - Hasta 40 L/h" },
      { src: "img/insumos/st-ecoflowatch-caja.webp", alt: "Bomba de Condensado Siccom 45ml - Hasta 40 L/h (caja)" },
      { src: "img/insumos/st-ecoflowatch-kit.webp", alt: "Bomba de Condensado Siccom 45ml - Hasta 40 L/h (kit completo)" },
    ],
    brand: "Siccom",
    model: "ST-ECOFLOWATCH",
    name: "Bomba de Condensado Siccom 45ml - Hasta 40 L/h",
    unit: "Units",
    type: "Bombas de Condensado",
    price: 177910.42, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Mini bomba de pistón para la evacuación de condensados de climatizadores hasta 10kW / 36000BTU / 2.8 tons.",
    specs: {
      "Código": "ST-ECOFLOWATCH",
      "Unidad de venta": "Units",
      "Categoría": "Bombas de Condensado",
      "Unidad mínima de venta": "1 Unidad"
    },
    features: [
      "CONTENIDO DEL PAQUETE:",
      "Bomba",
      "Bloque de detección",
      "Adhesivo de velcro para fijar el bloque de detección",
      "Tubo de entrada",
      "3 abrazaderas"
    ],
  },
  {
    id: "ggt-806k",
    gallery: [
      { src: "img/insumos/kit-pestanadora-a.webp", alt: "Kit Pestañadora Broche Cortadora Escariador Cooltech" },
      { src: "img/insumos/kit-pestanadora-b.webp", alt: "Kit Pestañadora Broche Cortadora Escariador Cooltech" },
      { src: "img/insumos/kit-pestanadora-c.webp", alt: "Kit Pestañadora Broche Cortadora Escariador Cooltech" },
      { src: "img/insumos/kit-pestanadora-d.webp", alt: "Kit Pestañadora Broche Cortadora Escariador Cooltech" },
    ],
    brand: "Cooltech",
    model: "GGT-806K",
    name: "Kit Pestañadora Broche Cortadora Escariador Cooltech",
    unit: "Units",
    type: "Herramientas",
    price: 65455.78, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Herramienta de abocardado manual con la que podrás crear conos de cobre precisos y duraderos.",
    specs: {
      "Código": "GGT-806K",
      "Unidad de venta": "Units",
      "Categoría": "Herramientas",
      "Unidad mínima de venta": "1 Unidad",
      "Marca": "Cooltech",
      "Modelo": "GGT-806K"
    },
    features: [
      "Kit profesional Cooltech GGT-806K para trabajos de refrigeración y aire acondicionado, compuesto por pestañadora tipo broche, cortadora de tubos y escariador. Diseñado para realizar instalaciones HVAC de manera práctica y precisa, permitiendo cortar, escariar y abocardar caños de cobre con terminaciones profesionales. Ideal para técnicos instaladores y mantenimiento",
      "Incluye pestañadora tipo broche",
      "Incluye cortadora de tubos",
      "Incluye escariador/saca rebabas",
      "Compatible con caños de cobre y aluminio",
      "Permite realizar pestañas precisas y uniformes",
      "Cortes limpios y seguros en tubos HVAC",
      "Escariado interno para mejor terminación",
      "Herramientas resistentes y de uso profesional",
      "Ideal para instalación, mantenimiento y reparación",
      "Presentación en estuche plástico portátil"
    ],
  },
  {
    id: "bv2lt-2-5n",
    gallery: [
      { src: "img/insumos/bomba-vacio-a.webp", alt: "Bomba de Vacío Doble Etapa 70 Lts/min 2.5CFM(1/3 Hp) Cooltech" },
      { src: "img/insumos/bomba-vacio-b.webp", alt: "Bomba de Vacío Doble Etapa 70 Lts/min 2.5CFM(1/3 Hp) Cooltech" },
    ],
    brand: "Cooltech",
    model: "BV2LT-2.5N",
    name: "Bomba de Vacío Doble Etapa 70 Lts/min 2.5CFM(1/3 Hp) Cooltech",
    unit: "Units",
    type: "Herramientas",
    price: 272596.99, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "La bomba de vacío es un equipo mecánico utilizado para extraer gases o líquidos de un sistema, creando una diferencia de presión que permite la evacuación del contenido, ya sea en relación con la presión atmosférica o un punto de referencia específico.",
    specs: {
      "Código": "BV2LT-2.5N",
      "Unidad de venta": "Units",
      "Categoría": "Herramientas",
      "Unidad mínima de venta": "1 Unidad",
      "Tipo": "bomba de vacío doble etapa",
      "Caudal": "70 L/min",
      "Capacidad": "2.5 CFM",
      "Potencia": "1/3 HP",
      "Alimentación": "220V monofásica / 50Hz"
    },
    features: [
      "La BV2LT-2.5N es una bomba de vacío Cooltech de doble etapa con caudal de 70 litros por minuto (2.5 CFM) y motor de 1/3 HP, diseñada para trabajos profesionales en refrigeración y aire acondicionado. Gracias a su sistema de doble etapa, permite alcanzar un vacío más profundo y eficiente, optimizando la eliminación de humedad y gases no condensables en sistemas HVAC y refrigeración comercial. Su construcción robusta y funcionamiento confiable la hacen ideal para trabajos intensivos y mantenimiento profesional. Características Técnicas:",
      "Sistema de doble etapa para vacío profundo",
      "Alto rendimiento y rápida evacuación",
      "Bajo nivel de vibración y ruido",
      "Visor de nivel de aceite incorporado",
      "Construcción robusta y durable",
      "Motor de alta eficiencia",
      "Protección térmica incorporada",
      "Diseño compacto y portátil",
      "Ideal para refrigerantes tradicionales y nuevos gases",
      "Excelente desempeño en trabajo continuo",
      "Aplicaciones:",
      "Instalación de aire acondicionado",
      "Refrigeración comercial",
      "Sistemas HVAC",
      "Cámaras frigoríficas",
      "Equipos inverter",
      "Mantenimiento y reparación frigorífica",
      "Procesos de vacío y deshidratación de sistemas"
    ],
  },
  {
    id: "sc-ctg",
    gallery: [
      { src: "img/insumos/sc-ctg.webp", alt: "Soplete Cooltech Giratorio" },
    ],
    brand: "Cooltech",
    model: "SC-CTG",
    name: "Soplete Giratorio Cooltech",
    unit: "Units",
    type: "Herramientas",
    price: 42353.97, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Instrumento utilizado para soldadura de tuberias.",
    specs: {
      "Código": "SC-CTG",
      "Unidad de venta": "Units",
      "Categoría": "Herramientas",
      "Unidad mínima de venta": "1 Unidad",
      "Marca": "Cooltech"
    },
    features: [
      "El Soplete Giratorio Cooltech SC-CTG está diseñado para realizar trabajos de calentamiento, soldadura y brasado en instalaciones de refrigeración, aire acondicionado, plomería y mantenimiento. Su cabezal giratorio permite orientar la llama en diferentes posiciones, facilitando el acceso a zonas estrechas o de difícil alcance. Ofrece un uso práctico y controlado para tareas técnicas que requieren una aplicación precisa de calor. Características: Tipo: soplete giratorio",
      "Cabezal orientable para trabajar en distintos ángulos",
      "Diseñado para calentamiento, soldadura y brasado",
      "Facilita el acceso a espacios reducidos",
      "Permite dirigir la llama con mayor precisión",
      "Apto para trabajos sobre tuberías y conexiones",
      "Compatible con cartuchos o fuentes de gas adecuadas",
      "Ideal para refrigeración, aire acondicionado y plomería",
      "Diseño práctico y portátil",
      "Uso profesional y técnico"
    ],
  },
  {
    id: "vrn-r410-14mr",
    gallery: [
      { src: "img/insumos/vrn-r410-14mr.webp", alt: "Extractor Ovulo Cooltech Con Visor 1/4x5/16 R410" },
    ],
    brand: "Cooltech",
    model: "VRN-R410-14MR",
    name: "Extractor Ov Visor 14x516 R410",
    unit: "Units",
    type: "Herramientas",
    price: 101191.32, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "¡Controlá el flujo de refrigerante más rápido! Herramienta para extracción de núcleo de válvula.",
    specs: {
      "Código": "VRN-R410-14MR",
      "Unidad de venta": "Units",
      "Categoría": "Herramientas",
      "Unidad mínima de venta": "1 Unidad",
      "Marca": "Cooltech"
    },
    features: [
      "Extractor óvulo con visor Cooltech para refrigerante R410A, diseñado para facilitar tareas de carga, vacío y diagnóstico en sistemas de aire acondicionado inverter y refrigeración. Incorpora visor de líquido que permite controlar visualmente el paso del refrigerante durante el servicio técnico. Compatible con conexiones 1/4″ x 5/16″. Características: Compatible con refrigerante R410A",
      "Conexión: 1/4″ SAE x 5/16″, Visor integrado para control de flujo de refrigerante, Diseño tipo óvulo compacto y resistente, Ideal para carga, vacío y mantenimiento HVAC, Compatible con equipos inverter, Fabricación metálica de alta durabilidad, Acople seguro y de rápida conexión, Facilita diagnóstico y monitoreo del sistema, Uso profesional en refrigeración y aire acondicionado"
    ],
  },
  {
    id: "v-vrp-u-r22",
    gallery: [
      { src: "img/insumos/juego-mangueras.webp", alt: "Juego De Mangueras Value" },
    ],
    brand: "Value",
    model: "V-VRP-U-R22",
    name: "Juego De Mangueras 60\" 120cm Value",
    unit: "Units",
    type: "Mangueras y Adaptadores",
    price: 55777.66, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Juego de mangueras Value para manifold.",
    specs: {
      "Código": "V-VRP-U-R22",
      "Unidad de venta": "Units",
      "Categoría": "Mangueras y Adaptadores",
      "Unidad mínima de venta": "1 Unidad, Gas: R22"
    },
    features: [
      "El juego de mangueras Value de 60″ (150 cm) está diseñado para ofrecer máxima durabilidad y precisión en trabajos de refrigeración y aire acondicionado. Estas mangueras de alta calidad garantizan una conexión segura y estanca, facilitando las tareas de carga y diagnóstico en sistemas que utilizan refrigerante R22. Longitud: 60 pulgadas (150 cm) para mayor comodidad de trabajo. Compatibilidad: Diseñadas específicamente para refrigerante R22. Construcción robusta: Materiales resistentes a altas presiones y al desgaste constante. Conexiones precisas: Extremos reforzados para evitar fugas y asegurar un flujo constante. Versatilidad: Ideales para uso profesional en mantenimiento de equipos de climatización"
    ],
  },
  {
    id: "v-vrp-u-410-150",
    gallery: [
      { src: "img/insumos/juego-mangueras.webp", alt: "Juego De Mangueras Value" },
    ],
    brand: "Value",
    model: "V-VRP-U-410-150",
    name: "Juego De Mangueras R410 150cm Value",
    unit: "Units",
    type: "Mangueras y Adaptadores",
    price: 68118.17, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Diseñado para refrigerante R410. Ofrece alta resistencia y flexibilidad, con conexiones seguras para trabajos de carga y mantenimiento en sistemas de refrigeración y aire acondicionado. Ideal para uso profesional.",
    specs: {
      "Código": "V-VRP-U-410-150",
      "Unidad de venta": "Units",
      "Categoría": "Mangueras y Adaptadores",
      "Unidad mínima de venta": "1 Unidad"
    },
    features: [
      "El Juego de Mangueras Value VRP-U-R/Y/B-R410 de 150 cm es una herramienta esencial para técnicos de refrigeración y aire acondicionado, garantizando precisión y seguridad en las tareas de carga y mantenimiento de sistemas que utilizan refrigerante R410. Su diseño robusto asegura una larga vida útil incluso en condiciones de uso intensivo. Compatibilidad específica con refrigerante R410.  Longitud de 150 cm para mayor alcance y comodidad operativa. Alta resistencia a la presión y flexibilidad superior. Conexiones seguras que minimizan el riesgo de fugas. Materiales de alta calidad para un rendimiento profesional constante"
    ],
  },
  {
    id: "pm05",
    gallery: [
      { src: "img/insumos/pm05.webp", alt: "Manguera Cristal 5/8 – 50 mts" },
    ],
    brand: "Genérico",
    model: "PM05",
    name: "Manguera Cristal 5/8 – 50 mts",
    unit: "Units",
    type: "Mangueras y Adaptadores",
    price: 66639.06, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Manguera PVC Cristal para desagote",
    specs: {
      "Código": "PM05",
      "Unidad de venta": "Units",
      "Categoría": "Mangueras y Adaptadores",
      "Unidad mínima de venta": "1 Rollo"
    },
    features: [
      "Manguera cristal transparente de alta flexibilidad, fabricada con compuesto de PVC. Apta para utilizar en sistemas de aire de baja presión, de vacío, de instalaciones de conducción de agua. Su transparencia permite visualizar la circulación del fluido. Resistente a la abrasión y a numerosos compuestos químicos"
    ],
  },
  {
    id: "ggt-vb",
    gallery: [
      { src: "img/insumos/valvula-bola-grupo.webp", alt: "Valvula Bola Cooltech 5/16 fm x 5/16 fh Con Retencion" },
    ],
    brand: "Cooltech",
    model: "GGT-VB",
    name: "Valvula Bola Cooltech 5/16 fm x 5/16 fh Con Retencion",
    unit: "Units",
    type: "Válvulas",
    price: 8665.06, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Diseñada para sistemas de refrigeración y aire acondicionado, ofrece cierre seguro, excelente sellado y alta resistencia.",
    specs: {
      "Código": "GGT-VB",
      "Unidad de venta": "Units",
      "Categoría": "Válvulas",
      "Unidad mínima de venta": "1 Unidad"
    },
    features: [
      "Válvula bola Cooltech diseñada para controlar el paso de fluidos en sistemas de refrigeración, aire acondicionado y aplicaciones HVAC. Fabricada con materiales resistentes para ofrecer apertura y cierre seguro, excelente sellado y larga vida útil",
      "Apertura y cierre de paso rápido",
      "Excelente sellado y estanqueidad",
      "Fabricación resistente y durable",
      "Alta resistencia a presión y corrosión",
      "Fácil instalación y operación",
      "Ideal para refrigeración y aire acondicionado",
      "Uso profesional y comercial"
    ],
  },
  {
    id: "ggt-vd",
    gallery: [
      { src: "img/insumos/valvula-bola-grupo.webp", alt: "Valvula Bola Cooltech 5/16 fm x 1/4 fh Con Retencion" },
    ],
    brand: "Cooltech",
    model: "GGT-VD",
    name: "Valvula Bola Cooltech 5/16 fm x 1/4 fh Con Retencion",
    unit: "Units",
    type: "Válvulas",
    price: 8665.06, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Diseñada para sistemas de refrigeración y aire acondicionado, ofrece cierre seguro, excelente sellado y alta resistencia.",
    specs: {
      "Código": "GGT-VD",
      "Unidad de venta": "Units",
      "Categoría": "Válvulas",
      "Unidad mínima de venta": "1 Unidad"
    },
    features: [
      "Válvula bola Cooltech diseñada para controlar el paso de fluidos en sistemas de refrigeración, aire acondicionado y aplicaciones HVAC. Fabricada con materiales resistentes para ofrecer apertura y cierre seguro, excelente sellado y larga vida útil",
      "Apertura y cierre de paso rápido",
      "Excelente sellado y estanqueidad",
      "Fabricación resistente y durable",
      "Alta resistencia a presión y corrosión",
      "Fácil instalación y operación",
      "Ideal para refrigeración y aire acondicionado",
      "Uso profesional y comercial"
    ],
  },
  {
    id: "pm02",
    gallery: [
      { src: "img/insumos/mensula-chapa-simple.webp", alt: "Mensula De Chapa 52 cm" },
      { src: "img/insumos/mensula-chapa-par.webp", alt: "Mensula De Chapa 52 cm (par)" },
    ],
    brand: "Cooltech",
    model: "PM02",
    name: "Mensula De Chapa 52 cm",
    unit: "Units",
    type: "Ménsulas y Soportes",
    price: 16374.09, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Ménsula para aire acondicionado.",
    specs: {
      "Código": "PM02",
      "Unidad de venta": "Units",
      "Categoría": "Ménsulas y Soportes",
      "Unidad mínima de venta": "1 Par",
      "Medida": "52 cm",
      "Material": "Chapa resistente"
    },
    features: [
      "Ménsula Cooltech de chapa de 52 cm, diseñada para brindar soporte firme y seguro a unidades de aire acondicionado y equipos de refrigeración. Fabricada con materiales resistentes para ofrecer estabilidad y larga durabilidad. Características: Marca: Cooltech",
      "Diseño robusto y durable",
      "Excelente estabilidad y soporte",
      "Resistente a la corrosión y desgaste",
      "Fácil instalación",
      "Ideal para unidades de aire acondicionado y refrigeración",
      "Uso residencial y comercial",
      "Alta resistencia y larga vida útil"
    ],
  },
  {
    id: "pm01",
    gallery: [
      { src: "img/insumos/mensula-chapa-simple.webp", alt: "Mensula De Chapa 42 cm" },
      { src: "img/insumos/mensula-chapa-par.webp", alt: "Mensula De Chapa 42 cm (par)" },
    ],
    brand: "Cooltech",
    model: "PM01",
    name: "Mensula De Chapa 42 cm",
    unit: "Units",
    type: "Ménsulas y Soportes",
    price: 13973.6, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Ménsula para aire acondicionado.",
    specs: {
      "Código": "PM01",
      "Unidad de venta": "Units",
      "Categoría": "Ménsulas y Soportes",
      "Unidad mínima de venta": "1 Par",
      "Medida": "42 cm",
      "Material": "Chapa resistente"
    },
    features: [
      "Ménsula Cooltech de chapa de 42 cm, diseñada para brindar soporte firme y seguro a unidades de aire acondicionado y equipos de refrigeración. Fabricada con materiales resistentes para ofrecer estabilidad y larga durabilidad. Características: Marca: Cooltech",
      "Diseño robusto y durable",
      "Excelente estabilidad y soporte",
      "Resistente a la corrosión y desgaste",
      "Fácil instalación",
      "Ideal para unidades de aire acondicionado y refrigeración",
      "Uso residencial y comercial",
      "Alta resistencia y larga vida útil"
    ],
  },
  {
    id: "co-d16",
    gallery: [
      { src: "img/insumos/aislacion-caucho-diametros.webp", alt: "Aislacion Cooltech 5/8 (6x16)" },
      { src: "img/insumos/aislacion-caucho-con-cobre.webp", alt: "Aislacion Cooltech 5/8 (6x16) en caño de cobre" },
    ],
    brand: "Cooltech",
    model: "CO-D16",
    name: "Aislacion Cooltech 5/8 (6x16)",
    unit: "m",
    type: "Aislación",
    price: 989.93, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "La aislación de caucho elastomérico es una espuma flexible de estructura celular cerrada, diseñada específicamente para el control de la condensación y la pérdida de energía en sistemas de refrigeración, aire acondicionado y calefacción. *El precio indicado es por metro",
    specs: {
      "Código": "CO-D16",
      "Unidad de venta": "m",
      "Categoría": "Aislación",
      "Unidad mínima de venta": "1 Unidad (tramo de 2 metros) — precio facturado por metro",
      "Espesor": "6mm",
      "Especificación": "Largo: 2 metros por tramo"
    },
    features: [
      "Estructura de Celda Cerrada: Actúa como una barrera de vapor integral, eliminando la necesidad de recubrimientos adicionales y protegiendo las tuberías contra la corrosión bajo el aislamiento",
      "Baja Conductividad Térmica: Ofrece un rendimiento superior en el mantenimiento de temperaturas estables, optimizando el consumo energético del equipo",
      "Resistencia a la Humedad: Su composición química impide la absorción de agua, evitando la formación de moho y hongos",
      "Flexibilidad Extrema: Su elasticidad permite una instalación rápida y sencilla, adaptándose fácilmente a codos, válvulas y uniones sin romperse. Color negro"
    ],
  },
  {
    id: "wcu14-r15",
    gallery: [
      { src: "img/insumos/rollo-cobre-flexible.webp", alt: "Rollo Cobre Flexible 1/4 15mts" },
    ],
    brand: "Cooltech",
    model: "WCU14-R15",
    name: "Rollo Cobre Flexible 1/4 15mts",
    unit: "Units",
    type: "Cañería de Cobre",
    price: 88825.58, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Tubería de cobre flexible de 1/4″ en rollo de 15 metros, ideal para instalaciones de refrigeración y aire acondicionado. Fácil de manipular, resistente y con excelente conductividad térmica.",
    specs: {
      "Código": "WCU14-R15",
      "Unidad de venta": "Units",
      "Categoría": "Cañería de Cobre",
      "Unidad mínima de venta": "1 Unidad"
    },
    features: [
      "Este rollo de cobre flexible de 1/4″ por 15 metros es la solución ideal para instalaciones profesionales de refrigeración y aire acondicionado. Diseñado para ofrecer máxima durabilidad y rendimiento en cada proyecto. Diámetro: 1/4″ – Espesor de pared: 0,8 mm – Longitud: 15 metros  Excelente conductividad térmica y resistencia a la corrosión Material maleable y fácil de manipular para instalaciones precisas"
    ],
  },
  {
    id: "wcu12-r15",
    gallery: [
      { src: "img/insumos/rollo-cobre-flexible.webp", alt: "Rollo Cobre Flexible 1/2 15mts" },
    ],
    brand: "Cooltech",
    model: "WCU12-R15",
    name: "Rollo Cobre Flexible 1/2 15mts",
    unit: "Units",
    type: "Cañería de Cobre",
    price: 190935.07, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Tubería de cobre flexible de 1/2″ en rollo de 15 metros, ideal para instalaciones de refrigeración y aire acondicionado. Fácil de manipular, resistente y con excelente conductividad térmica.",
    specs: {
      "Código": "WCU12-R15",
      "Unidad de venta": "Units",
      "Categoría": "Cañería de Cobre",
      "Unidad mínima de venta": "1 Unidad"
    },
    features: [
      "El rollo de cobre flexible de 1/2″ x 0.8 mm x 15 metros está diseñado específicamente para instalaciones profesionales de refrigeración, aire acondicionado y conducción de fluidos. Su gran flexibilidad permite una manipulación rápida y precisa en obra, adaptándose con facilidad a los espacios más reducidos sin comprometer la integridad estructural del material. Fabricado en cobre de alta pureza que garantiza una excelente conductividad térmica y máxima resistencia a la corrosión. Espesor de pared de 0.8 mm, optimizado para soportar presiones de trabajo exigentes con total seguridad. Presentación en rollo continuo de 15 metros, ideal para minimizar empalmes y optimizar los tiempos de instalación. Superficie interior perfectamente limpia y seca, evitando la contaminación del circuito frigorífico. Cumple con los estándares de calidad para una larga vida útil en cualquier entorno operativo"
    ],
  },
  {
    id: "wcu38-r15",
    gallery: [
      { src: "img/insumos/rollo-cobre-flexible.webp", alt: "Rollo Cobre Flexible 3/8 15mts" },
    ],
    brand: "Cooltech",
    model: "WCU38-R15",
    name: "Rollo Cobre Flexible 3/8 15mts",
    unit: "Units",
    type: "Cañería de Cobre",
    price: 139804.81, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Tubería de cobre flexible de 3/8″ en rollo de 15 metros, ideal para instalaciones de refrigeración y aire acondicionado. Fácil de manipular, resistente y con excelente conductividad térmica.",
    specs: {
      "Código": "WCU38-R15",
      "Unidad de venta": "Units",
      "Categoría": "Cañería de Cobre",
      "Unidad mínima de venta": "1 Unidad"
    },
    features: [
      "El rollo de cobre flexible de 3/8″ x 0.8 mm x 15 metros es la solución ideal para instalaciones de refrigeración, aire acondicionado y sistemas de climatización. Fabricado con cobre de alta pureza, garantiza una excelente conductividad térmica y máxima durabilidad ante las exigencias del uso profesional. Medidas: 3/8″ de diámetro y 0.8 mm de espesor por 15 metros de longitud. Alta flexibilidad que facilita la manipulación, el curvado y la instalación en espacios reducidos. Material resistente a la corrosión y apto para diversos fluidos refrigerantes. Conforme a normas de calidad para asegurar conexiones seguras y sin pérdidas"
    ],
  },
  {
    id: "wcu58-r15",
    gallery: [
      { src: "img/insumos/rollo-cobre-flexible.webp", alt: "Rollo Cobre Flexible 5/8 15mts" },
    ],
    brand: "Cooltech",
    model: "WCU58-R15",
    name: "Rollo Cobre Flexible 5/8 15mts",
    unit: "Units",
    type: "Cañería de Cobre",
    price: 241640.03, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Tubería de cobre flexible de 1/4″ en rollo de 15 metros, ideal para instalaciones de refrigeración y aire acondicionado. Fácil de manipular, resistente y con excelente conductividad térmica.",
    specs: {
      "Código": "WCU58-R15",
      "Unidad de venta": "Units",
      "Categoría": "Cañería de Cobre",
      "Unidad mínima de venta": "1 Unidad"
    },
    features: [
      "El rollo de cobre flexible de 5/8″ x 0.8 mm y 15 metros es la solución ideal para instalaciones de refrigeración y sistemas de aire acondicionado. Fabricado bajo estrictos estándares de calidad, ofrece una excelente conductividad térmica y alta resistencia a la corrosión y a la presión de trabajo. Medidas: 5/8″ de diámetro x 0.8 mm de espesor x 15 metros de longitud. Material: Cobre flexible de alta pureza que facilita la curvatura y manipulación en espacios reducidos. Aplicación: Ideal para conducción de gases refrigerantes en instalaciones residenciales y comerciales. Durabilidad: Gran resistencia mecánica y óptimo comportamiento ante variaciones térmicas"
    ],
  },
  {
    id: "flm240",
    gallery: [
      { src: "img/insumos/flm240.webp", alt: "Film Protector Cooltech 2.4x20mts" },
    ],
    brand: "Cooltech",
    model: "FLM240",
    name: "Film Protector Cooltech 2.4x20mts",
    unit: "Units",
    type: "Accesorios de Instalación",
    price: 10277.88, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Es un film plástico protector en rollo de 2,4 m × 20 m, diseñado para cubrir y proteger superficies contra polvo, humedad, pintura y rayaduras durante trabajos de instalación, mantenimiento o construcción. Es liviano, flexible y fácil de aplicar, ideal para proteger pisos, muebles o equipos.",
    specs: {
      "Código": "FLM240",
      "Unidad de venta": "Units",
      "Categoría": "Accesorios de Instalación",
      "Unidad mínima de venta": "1 Unidad",
      "Medidas": "2.4 x 20 metros"
    },
    features: [
      "Film Protector Cooltech de 2.4 x 20 mts, diseñado para protección de superficies y equipos durante trabajos de instalación, mantenimiento y pintura. Ideal para cubrir áreas amplias, evitando polvo, suciedad y posibles daños",
      "Protección contra polvo y suciedad",
      "Ideal para cubrir áreas amplias",
      "Material resistente y flexible",
      "Fácil de colocar y retirar",
      "Ayuda a proteger muebles, equipos y superficies",
      "Uso práctico y versátil",
      "Marca Cooltech"
    ],
  },
  {
    id: "pm-cajac",
    gallery: [
      { src: "img/insumos/pm-cajac.webp", alt: "Caja De Pre-instalacion Horizontal/Vertical Cooltech" },
      { src: "img/insumos/pm-cajac-a.webp", alt: "Caja De Pre-instalacion Horizontal/Vertical Cooltech (despiece)" },
    ],
    brand: "Cooltech",
    model: "PM-CAJAC",
    name: "Caja De Pre-instalacion Horizontal/Vertical Cooltech",
    unit: "Units",
    type: "Accesorios de Instalación",
    price: 4332.79, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Caja de preinstalación para aire acondicionado, apta para montaje horizontal o vertical. Facilita la organización de conexiones y cañerías, permitiendo una instalación prolija, segura y preparada para futuras colocaciones.",
    specs: {
      "Código": "PM-CAJAC",
      "Unidad de venta": "Units",
      "Categoría": "Accesorios de Instalación",
      "Unidad mínima de venta": "1 Unidad"
    },
    features: [
      "La caja de preinstalación Cooltech está diseñada para optimizar y simplificar la colocación de sistemas de aire acondicionado, permitiendo una transición prolija y segura desde la etapa de obra. Su estructura versátil es apta para montaje tanto horizontal como vertical, adaptándose a las necesidades de cada espacio",
      "– Apta para montaje horizontal y vertical según los requerimientos de la instalación",
      "– Facilita la organización de cañerías, desagües y conexiones eléctricas",
      "– Proporciona una terminación estética y profesional, ocultando elementos técnicos",
      "– Preparada para futuras instalaciones de equipos de manera limpia y sin roturas",
      "– Construida con materiales resistentes que aseguran durabilidad en paredes y mampostería"
    ],
  },
  {
    id: "cr-1028e",
    gallery: [
      { src: "img/insumos/cr-1028e.webp", alt: "Control Remoto Universal Aire Acondicionado Cooltech 1000 en 1" },
      { src: "img/insumos/cr-1028e-caja.webp", alt: "Control Remoto Universal Aire Acondicionado Cooltech 1000 en 1 (caja - lista de marcas compatibles)" },
    ],
    brand: "Cooltech",
    model: "CR-1028E",
    name: "Control Remoto Universal Aire Acondicionado Cooltech 1000 en 1",
    unit: "Units",
    type: "Controles Remotos",
    price: 6301.92, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Control remoto universal para AC de 1000 códigos.",
    specs: {
      "Código": "CR-1028E",
      "Unidad de venta": "Units",
      "Categoría": "Controles Remotos",
      "Unidad mínima de venta": "1 Unidad"
    },
    features: [
      "Características funcionales",
      "1000 en 1",
      "Funcion de reloj",
      "Refrigeracion/calefaccion inteligente"
    ],
  },
  {
    id: "wh60110",
    gallery: [
      { src: "img/insumos/wh60110.webp", alt: "Boquilla De Terminacion Cooltech" },
      { src: "img/insumos/wh60110-a.webp", alt: "Boquilla De Terminacion Cooltech (modelo alternativo)" },
    ],
    brand: "Cooltech",
    model: "WH60110",
    name: "Boquilla De Terminacion Cooltech",
    unit: "Units",
    type: "Cintas y Terminación",
    price: 1154.04, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Boquilla de terminación diseñada para acabados prolijos en instalaciones de climatización. Permite proteger y ordenar la salida de cañerías o conductos, brindando una terminación estética y segura.",
    specs: {
      "Código": "WH60110",
      "Unidad de venta": "Units",
      "Categoría": "Cintas y Terminación",
      "Unidad mínima de venta": "1 Unidad"
    },
    features: [
      "La boquilla de terminación Cooltech es el accesorio indispensable para lograr acabados profesionales y limpios en cualquier instalación de climatización y aire acondicionado. Su diseño robusto protege los conductos y ofrece una presentación estética impecable en paredes o fachadas",
      "– Diseño optimizado para una protección duradera de cañerías y conductos expuestos",
      "– Terminación estética prolija que realza la calidad visual de la instalación",
      "– Fabricada con materiales de alta resistencia a la intemperie y rayos UV",
      "– Fácil colocación y ajuste seguro en distintos diámetros de salida"
    ],
  },
  {
    id: "w13012",
    gallery: [
      { src: "img/insumos/w13012.webp", alt: "Filtro Cooltech De Cobre Sin Chicote 30 gramos" },
    ],
    brand: "Cooltech",
    model: "W13012",
    name: "Filtro Cooltech De Cobre Sin Chicote 30 gramos",
    unit: "Units",
    type: "Filtros y Repuestos",
    price: 3938.88, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Estos filtros moleculares sin chicote para líneas de líquido protegen los sistemas de refrigeración y de aire acondicionado contra humedad, partículas sólidas y ácidos. Logrando instalaciones mejor protegidas contra partículas abrasivas.",
    specs: {
      "Código": "W13012",
      "Unidad de venta": "Units",
      "Categoría": "Filtros y Repuestos",
      "Unidad mínima de venta": "10 Unidades",
      "Marca": "Cooltech",
      "Tipo": "Filtro de cobre sin chicote",
      "Capacidad": "30 gramos"
    },
    features: [
      "Filtro de cobre Cooltech sin chicote de 30 gramos, diseñado para eliminar humedad e impurezas en sistemas de refrigeración y aire acondicionado. Ayuda a proteger los componentes del sistema y mantener un funcionamiento eficiente y seguro",
      "Ayuda a retener humedad e impurezas",
      "Protege compresores y componentes del sistema",
      "Fabricado en cobre resistente",
      "Alta resistencia a la corrosión",
      "Compatible con sistemas HVAC y refrigeración",
      "Fácil instalación mediante soldadura",
      "Mejora el rendimiento y la vida útil del sistema",
      "Uso residencial, comercial e industrial"
    ],
  },
  {
    id: "crqd-u05pg-plus",
    gallery: [
      { src: "img/insumos/crqd-u05pg-caja.webp", alt: "Plaqueta Cooltech Para Aire Acondicionado CRQD-U05PG+ (caja)" },
      { src: "img/insumos/crqd-u05pg-componentes.webp", alt: "Plaqueta Cooltech Para Aire Acondicionado CRQD-U05PG+ (kit completo)" },
      { src: "img/insumos/crqd-u05pg-diagrama.webp", alt: "Plaqueta Cooltech Para Aire Acondicionado CRQD-U05PG+ (diagrama de conexión)" },
    ],
    brand: "Cooltech",
    model: "CRQD-U05PG+",
    name: "Plaqueta Cooltech Para Aire Acondicionado",
    unit: "Units",
    type: "Plaquetas y Controles",
    price: 33028.74, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Sistema de control para aire acondicionado dividido",
    specs: {
      "Código": "CRQD-U05PG+",
      "Unidad de venta": "Units",
      "Categoría": "Plaquetas y Controles",
      "Unidad mínima de venta": "1 Unidad"
    },
    features: [
      "La plaqueta Cooltech para aire acondicionado es la solución ideal para la renovación y control eficiente de sistemas de climatización divididos. Diseñada con tecnología avanzada, garantiza un funcionamiento estable y seguro para todo tipo de equipos",
      "– Compatible con una amplia gama de aires acondicionados divididos",
      "– Sistema de control electrónico de alta precisión",
      "– Fácil instalación y configuración para técnicos",
      "– Componentes de alta durabilidad y resistencia al uso continuo"
    ],
  },
  {
    id: "crqd-u08pgc",
    gallery: [
      { src: "img/insumos/crqd-u08pgc-componentes.webp", alt: "Plaqueta Cooltech Para Aire Acondicionado CRQD-U08PGC+ (kit completo)" },
      { src: "img/insumos/crqd-u08pgc-caja.webp", alt: "Plaqueta Cooltech Para Aire Acondicionado CRQD-U08PGC+ (caja - características)" },
      { src: "img/insumos/crqd-u08pgc-diagrama.webp", alt: "Plaqueta Cooltech Para Aire Acondicionado CRQD-U08PGC+ (diagrama de conexión)" },
    ],
    brand: "Cooltech",
    model: "CRQD-U08PGC",
    name: "Plaqueta Cooltech Para Aire Acondicionado",
    unit: "Units",
    type: "Plaquetas y Controles",
    price: 38037.77, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Sistema de control para aire acondicionado dividido",
    specs: {
      "Código": "CRQD-U08PGC",
      "Unidad de venta": "Units",
      "Categoría": "Plaquetas y Controles",
      "Unidad mínima de venta": "1 Unidad"
    },
    features: [
      "La plaqueta Cooltech para aire acondicionado es la solución ideal para reemplazar sistemas de control averiados en equipos split, garantizando un funcionamiento estable y eficiente",
      "– Compatibilidad universal con una amplia gama de equipos de aire acondicionado tipo split",
      "– Funciones completas de control de temperatura, velocidad del forzador y modos de operación",
      "– Incluye control remoto ergonómico y receptor de fácil instalación",
      "– Protecciones integradas contra fluctuaciones de tensión y fallas de sensores",
      "– Componentes de alta calidad que aseguran una larga vida útil y durabilidad en servicio continuo"
    ],
  },
  {
    id: "st-flowatchtank",
    gallery: [
      { src: "img/insumos/st-flowatchtank-caja.webp", alt: "Bomba De Condensado Siccom 800 L/h (caja)" },
      { src: "img/insumos/st-flowatchtank-detalle.webp", alt: "Bomba De Condensado Siccom 800 L/h (detalle)" },
    ],
    brand: "Siccom",
    model: "ST-FLOWATCHTANK",
    name: "Bomba De Condensado Siccom 800 L/h",
    unit: "Units",
    type: "Bombas de Condensado",
    price: 174874.61, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Bomba centrífuga de alto rendimiento para la evacuación de condensados. Hasta 60 kW / 200 000BTU.",
    specs: {
      "Código": "ST-FLOWATCHTANK",
      "Unidad de venta": "Units",
      "Categoría": "Bombas de Condensado",
      "Unidad mínima de venta": "1 Unidad"
    },
    features: [
      "CONTENIDO DEL PAQUETE:",
      "Bomba con válvula antirretorno",
      "3 tapones",
      "Adaptador entrada",
      "Adaptador salida 6/9mm",
      "Tornillos y tacos"
    ],
  },
  {
    id: "st-qdpu02e",
    gallery: [
      { src: "img/insumos/st-qdpu02e.webp", alt: "Bomba De Condensado 45Ml Hasta 24L/h Cooltech" },
      { src: "img/insumos/st-qdpu02e-caja.webp", alt: "Bomba De Condensado 45Ml Hasta 24L/h Cooltech (caja)" },
      { src: "img/insumos/st-qdpu02e-kit.webp", alt: "Bomba De Condensado 45Ml Hasta 24L/h Cooltech (kit completo)" },
    ],
    brand: "Cooltech",
    model: "ST-QDPU02E",
    name: "Bomba De Condensado 45Ml Hasta 24L/h Cooltech",
    unit: "Units",
    type: "Bombas de Condensado",
    price: 91302.75, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Mini bomba de pistón para la evacuación de condensados de climatizadores hasta 8kW / 30000BTU",
    specs: {
      "Código": "ST-QDPU02E",
      "Unidad de venta": "Units",
      "Categoría": "Bombas de Condensado",
      "Unidad mínima de venta": "1 Unidad"
    },
    features: [
      "La bomba de condensado Cooltech con diseño de pistón es la solución ideal para la evacuación eficiente y silenciosa de condensados en sistemas de climatización de hasta 8 kW (30,000 BTU/h). Diseñada para garantizar un rendimiento óptimo y una larga vida útil en instalaciones exigentes",
      "– Capacidad de caudal de hasta 24 L/h con un rendimiento constante",
      "– Diseño compacto y de fácil instalación en espacios reducidos",
      "– Funcionamiento silencioso que asegura el confort en el ambiente",
      "– Compatible con una amplia gama de equipos de aire acondicionado y climatizadores"
    ],
  },
  {
    id: "ggt-vc",
    gallery: [
      { src: "img/insumos/valvula-bola-detalle.webp", alt: "Valvula Bola Cooltech 1/4 fm x 5/16 fh Con Retencion" },
      { src: "img/insumos/valvula-bola-grupo.webp", alt: "Valvula Bola Cooltech 1/4 fm x 5/16 fh Con Retencion" },
    ],
    brand: "Cooltech",
    model: "GGT-VC",
    name: "Valvula Bola Cooltech 1/4 Fm x 5/16 Fh Con Retencion",
    unit: "Units",
    type: "Válvulas",
    price: 8665.06, // Precio daclimatech (hoja "Insumos" del Excel master) — precio real
    description: "Diseñada para sistemas de refrigeración y aire acondicionado, ofrece cierre seguro, excelente sellado y alta resistencia.",
    specs: {
      "Código": "GGT-VC",
      "Unidad de venta": "Units",
      "Categoría": "Válvulas",
      "Unidad mínima de venta": "1 Unidad"
    },
    features: [
      "Válvula bola Cooltech diseñada para controlar el paso de fluidos en sistemas de refrigeración, aire acondicionado y aplicaciones HVAC. Fabricada con materiales resistentes para ofrecer apertura y cierre seguro, excelente sellado y larga vida útil",
      "Apertura y cierre de paso rápido",
      "Excelente sellado y estanqueidad",
      "Fabricación resistente y durable",
      "Alta resistencia a presión y corrosión",
      "Fácil instalación y operación",
      "Ideal para refrigeración y aire acondicionado",
      "Uso profesional y comercial"
    ],
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
  return `${p.name} — ${p.brand} ${p.model}`.replace(/\s+/g, " ").trim();
}

function formatPrice(n) {
  return `$${n.toLocaleString("es-AR")}`;
}

/* ---------------------------------------------------------
   FILTROS
   --------------------------------------------------------- */
const FILTER_DEFS = [
  { key: "brand", label: "Marca", options: ["Cooltech", "Value", "Siccom"] },
  { key: "type", label: "Categoría", options: ["Elevación", "Ménsulas y Soportes", "Aislación", "Capacitores", "Controladores y Termómetros", "Forzadores", "Bombas de Condensado", "Cañería de Cobre", "Válvulas", "Turbinas", "Mangueras y Adaptadores", "Cintas y Terminación", "Herramientas", "Accesorios de Instalación", "Controles Remotos", "Filtros y Repuestos", "Plaquetas y Controles"] },
  { key: "price", label: "Precio", options: ["Hasta $10.000", "$10.000–$50.000", "Más de $50.000"] }
];

const filterState = { brand: "", type: "", price: "" };

function matchesPrice(value, price) {
  if (value === "Hasta $10.000") return price <= 10000;
  if (value === "$10.000–$50.000") return price > 10000 && price <= 50000;
  if (value === "Más de $50.000") return price > 50000;
  return true;
}

function countForOption(key, value) {
  return EQ_PRODUCTS.filter(p => {
    if (key !== "brand" && filterState.brand && p.brand !== filterState.brand) return false;
    if (key !== "type" && filterState.type && p.type !== filterState.type) return false;
    if (key !== "price" && filterState.price && !matchesPrice(filterState.price, p.price)) return false;

    if (key === "brand") return p.brand === value;
    if (key === "type") return p.type === value;
    if (key === "price") return matchesPrice(value, p.price);
    return true;
  }).length;
}

function getFilteredProducts() {
  return EQ_PRODUCTS.filter(p => {
    if (filterState.brand && p.brand !== filterState.brand) return false;
    if (filterState.type && p.type !== filterState.type) return false;
    if (filterState.price && !matchesPrice(filterState.price, p.price)) return false;
    return true;
  });
}

function getSortedProducts(list) {
  const sorted = [...list];
  const sortValue = document.getElementById("sortProducts").value;
  if (sortValue === "price-low") sorted.sort((a, b) => a.price - b.price);
  if (sortValue === "price-high") sorted.sort((a, b) => b.price - a.price);
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
  el.innerHTML = `<strong>${n}</strong> insumo${n === 1 ? "" : "s"}`;
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
   RENDER DE CARDS — sin chip "Instalación disponible" (son insumos,
   no equipos que instale DAClimaTECH) y sin cuotas.
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
    <article class="eq-product" data-product="${p.id}" data-brand="${p.brand}" data-type="${p.type}">
      <div class="eq-product-media" data-image-index="0">
        <img src="${images[0].src}" alt="${images[0].alt}" loading="lazy" decoding="async" width="600" height="450">
        ${arrows}
      </div>
      <div class="eq-product-body">
        <span class="eq-brand">${p.brand}</span>
        <h3>${seoTitle(p)}</h3>
        <p class="eq-capacity">${p.model} · ${p.unit}</p>

        <div class="eq-product-price">
          <span>Precio:</span>
          <div class="eq-price-row">
            <strong>${formatPrice(p.price)}</strong>
          </div>
          <span class="eq-price-installments">Consultar financiación</span>
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
        <p>No encontramos insumos con esos filtros. Probá ajustar la búsqueda o
        <a href="${wa("Hola DAClimaTECH, no encontré el insumo que buscaba en la web, ¿me ayudan?")}" target="_blank" rel="noopener">consultanos por WhatsApp</a>.</p>
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
  document.getElementById("modalCapacity").textContent = `${p.model} · ${p.unit}`;
  document.getElementById("modalBadge").innerHTML = "";

  // Precio sin tachado/% OFF/cuotas — insumos no tienen financiación armada.
  document.getElementById("modalPriceOriginal").textContent = "";
  document.getElementById("modalPrice").textContent = formatPrice(p.price);
  document.getElementById("modalPriceOff").textContent = "";
  document.getElementById("modalInstallments").textContent = "Consultar financiación";

  document.getElementById("modalDescription").textContent = p.description;

  document.getElementById("modalFeatures").innerHTML =
    (p.features && p.features.length)
      ? p.features.map((f) => `<li>${f}</li>`).join("")
      : `<li>Código: ${p.model}</li><li>Unidad de venta: ${p.unit}</li><li>Categoría: ${p.type}</li>`;

  document.getElementById("modalSpecs").innerHTML =
    Object.entries(p.specs).map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");

  document.getElementById("modalInstallInfo").textContent =
    "Insumo de venta directa para el público e instaladores. Si sos instalador, pedí tu precio especial y beneficios por WhatsApp con el botón de arriba.";

  document.getElementById("modalPickup").href =
    waInstaller(`Hola DAClimaTECH, quiero consultar disponibilidad en tienda de ${p.name} (${p.model}) para retirar personalmente.`);
  // Botón "Solicitar precio" — WhatsApp de instaladores, distinto al general del sitio.
  document.getElementById("modalInstall").href =
    waInstaller(`Hola, soy instalador y quiero consultar el precio especial y los beneficios para ${p.name} (${p.model}).`);

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