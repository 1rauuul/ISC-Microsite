// ─── EGRESADOS / CASOS DE ÉXITO ────────────────────────────────────────────
export const egresados = [
  {
    id: 1,
    nombre: "Sofía Ramírez",
    generacion: "2019",
    empresa: "Google México",
    puesto: "Software Engineer III",
    area: "Backend",
    foto: "https://placehold.co/120x120/2563eb/ffffff?text=SR",
    testimonio:
      "La carrera me dio la base técnica y el pensamiento lógico que Google busca en sus ingenieros. El proyecto integrador fue clave.",
    linkedin: "#",
  },
  {
    id: 2,
    nombre: "Carlos Mendoza",
    generacion: "2018",
    empresa: "Clip",
    puesto: "Lead Data Scientist",
    area: "Datos",
    foto: "https://placehold.co/120x120/7c3aed/ffffff?text=CM",
    testimonio:
      "Aprendí a ver los datos como el recurso más valioso. Hoy dirijo un equipo de 8 personas en análisis predictivo.",
    linkedin: "#",
  },
  {
    id: 3,
    nombre: "Valentina Cruz",
    generacion: "2020",
    empresa: "Startup propia",
    puesto: "CTO & Co-founder",
    area: "Emprendimiento",
    foto: "https://placehold.co/120x120/06b6d4/ffffff?text=VC",
    testimonio:
      "Monté mi startup de fintech al tercer año de egresada. Los conocimientos de redes y seguridad fueron fundamentales.",
    linkedin: "#",
  },
  {
    id: 4,
    nombre: "Miguel Ángel Torres",
    generacion: "2017",
    empresa: "IBM",
    puesto: "Cloud Architect",
    area: "Cloud",
    foto: "https://placehold.co/120x120/0f172a/ffffff?text=MT",
    testimonio:
      "Trabajar en arquitecturas cloud a escala global es posible gracias a la formación sólida en sistemas distribuidos.",
    linkedin: "#",
  },
  {
    id: 5,
    nombre: "Daniela Flores",
    generacion: "2021",
    empresa: "Netflix LATAM",
    puesto: "Frontend Engineer",
    area: "Frontend",
    foto: "https://placehold.co/120x120/ec4899/ffffff?text=DF",
    testimonio:
      "La carrera me enseñó a pensar en sistemas completos, no solo en interfaces. Eso me diferencia en el equipo.",
    linkedin: "#",
  },
  {
    id: 6,
    nombre: "Rodrigo Sánchez",
    generacion: "2016",
    empresa: "Microsoft",
    puesto: "Principal Engineer",
    area: "IA",
    foto: "https://placehold.co/120x120/16a34a/ffffff?text=RS",
    testimonio:
      "Integré IA en productos usados por millones. El campus fue donde programé mi primer modelo de ML.",
    linkedin: "#",
  },
];

// ─── MATERIAS POR SEMESTRE (RETÍCULA) ──────────────────────────────────────
export const reticula = [
  {
    semestre: 1,
    materias: [
      { clave: "SCD-1008", nombre: "Fundamentos de Programación", creditos: 5 },
      { clave: "ACA-0907", nombre: "Taller de Ética", creditos: 4 },
      { clave: "ACF-0901", nombre: "Cálculo Diferencial", creditos: 5 },
      { clave: "AEC-1058", nombre: "Química", creditos: 5 },
      { clave: "ACC-0906", nombre: "Fundamentos de investigación", creditos: 4 },
      { clave: "SCH-1024", nombre: "Taller de administración", creditos: 4 },
    ],
  },
  {
    semestre: 2,
    materias: [
      { clave: "AEF-1032", nombre: "Programación Orientada a Objetos", creditos: 5 },
      { clave: "AEF-1033", nombre: "Matemáticas Discretas", creditos: 5 },
      { clave: "AEF-0902", nombre: "Cálculo Integral", creditos: 5 },
      { clave: "AEF-1042", nombre: "Probabilidad y Estadística", creditos: 5 },
      { clave: "AEF-1022", nombre: "Desarrollo Sustentable", creditos: 5 },
      { clave: "AEF-1052", nombre: "Contabilidad Financiera", creditos: 4 },
    ],
  },
  {
    semestre: 3,
    materias: [
      { clave: "ISC-1031", nombre: "Estructura de Datos", creditos: 5 },
      { clave: "ISC-1041", nombre: "Tópicos Avanzados de Programación", creditos: 5 },
      { clave: "AEF-0903", nombre: "Cálculo Vectorial", creditos: 5 },
      { clave: "AEF-0904", nombre: "Álgebra Lineal", creditos: 5 },
      { clave: "ISC-1011", nombre: "Física General", creditos: 5 },
      { clave: "AEF-1061", nombre: "Cultura Empresarial", creditos: 4 },
    ],
  },
  {
    semestre: 4,
    materias: [
      { clave: "ISC-1032", nombre: "Fundamentos de Bases de Datos", creditos: 5 },
      { clave: "ISC-1042", nombre: "Fundamentos de Ingeniería de Software", creditos: 4 },
      { clave: "ISC-1012", nombre: "Ecuaciones Diferenciales", creditos: 5 },
      { clave: "AEF-1071", nombre: "Métodos Numéricos", creditos: 4 },
      { clave: "ISC-1021", nombre: "Principios Eléctricos y Aplicaciones Digitales", creditos: 5 },
      { clave: "AEF-1072", nombre: "Investigación de Operaciones", creditos: 4 },
    ],
  },
  {
    semestre: 5,
    materias: [
      { clave: "ISC-1033", nombre: "Taller de Bases de Datos", creditos: 4 },
      { clave: "ISC-1043", nombre: "Ingeniería de Software", creditos: 5 },
      { clave: "ISC-1013", nombre: "Lenguajes y Autómatas I", creditos: 5 },
      { clave: "ISC-1022", nombre: "Simulación", creditos: 5 },
      { clave: "ISC-1051", nombre: "Arquitectura de Computadoras", creditos: 5 },
      { clave: "ISC-1053", nombre: "Fundamentos de Telecomunicaciones", creditos: 4 },
      { clave: "ISC-1054", nombre: "Graficación", creditos: 4 },
    ],
  },
  {
    semestre: 6,
    materias: [
      { clave: "ISC-1034", nombre: "Administración de Bases de Datos", creditos: 5 },
      { clave: "ISC-1044", nombre: "Gestion de Proyectos de Software", creditos: 6 },
      { clave: "ISC-1014", nombre: "Lenguajes y Autómatas II", creditos: 5 },
      { clave: "ISC-1023", nombre: "Sistemas Operativos", creditos: 4 },
      { clave: "ISC-1052", nombre: "Lenguajes de interfaz", creditos: 4 },
      { clave: "ISC-1055", nombre: "Redes de Computadoras", creditos: 5 },
      { clave: "ISC-1056", nombre: "Habilidades Blandas para Ingenieros", creditos: 5 },
    ],
  },
  {
    semestre: 7,
    materias: [
      { clave: "ISC-1035", nombre: "Ciencias de Datos", creditos: 5 },
      { clave: "ISC-1057", nombre: "Programación Web", creditos: 5 },
      { clave: "ISC-1058", nombre: "Programación Logica y Funcional", creditos: 4 },
      { clave: "ISC-1059", nombre: "Taller de Sistemas Operativos", creditos: 4 },
      { clave: "ISC-1045", nombre: "Sistemas Programables", creditos: 4 },
      { clave: "ISC-1015", nombre: "Conmutación y Enrutamiento de Redes de Datos", creditos: 5 },
      { clave: "ISC-1024", nombre: "Taller de Investigación", creditos: 4 },
    ],
  },
  {
    semestre: 8,
    materias: [
      { clave: "ISC-1036", nombre: "IoT", creditos: 5 },
      { clave: "ISC-1046", nombre: "Computo en la Nube", creditos: 5 },
      { clave: "ISC-1016", nombre: "Inteligencia Artificial", creditos: 4 },
      { clave: "ISC-1025", nombre: "Administración de Redes", creditos: 4 },
      { clave: "ISC-1026", nombre: "Ciberseguridad", creditos: 5 },
      { clave: "ISC-1027", nombre: "Taller de Investigación II", creditos: 4 },
    ],
  },
  {
    semestre: 9,
    materias: [
      { clave: "ISC-1037", nombre: "Residencia Profesional", creditos: 10 },
      { clave: "ISC-1047", nombre: "Servicio Social", creditos: 10 },
    ],
  },
];

// ─── EVENTOS ────────────────────────────────────────────────────────────────
export const eventos = [
  {
    id: 1,
    titulo: "Hackathon IA 2026",
    tipo: "Competencia",
    fecha: "2026-05-10",
    hora: "09:00",
    lugar: "Auditorio Principal",
    descripcion: "48 horas para construir soluciones con Inteligencia Artificial. Premios en efectivo y mentoría.",
    imagen: "https://placehold.co/400x200/2563eb/ffffff?text=Hackathon+IA",
    cupo: 120,
    inscrito: false,
    tags: ["IA", "Competencia", "Premio"],
  },
  {
    id: 2,
    titulo: "Día de Puertas Abiertas",
    tipo: "Informativo",
    fecha: "2026-04-25",
    hora: "10:00",
    lugar: "Campus Principal",
    descripcion: "Conoce las instalaciones, habla con docentes y estudiantes actuales. Ideal para aspirantes.",
    imagen: "https://placehold.co/400x200/7c3aed/ffffff?text=Puertas+Abiertas",
    cupo: 200,
    inscrito: false,
    tags: ["Orientación", "Campus", "Gratuito"],
  },
  {
    id: 3,
    titulo: "Workshop: Desarrollo con React + Next.js",
    tipo: "Taller",
    fecha: "2026-04-18",
    hora: "15:00",
    lugar: "Laboratorio 3 — Cómputo",
    descripcion: "Construye tu primera aplicación web fullstack en un día. Trae laptop.",
    imagen: "https://placehold.co/400x200/06b6d4/0f172a?text=React+Workshop",
    cupo: 30,
    inscrito: false,
    tags: ["Web", "Taller", "React"],
  },
  {
    id: 4,
    titulo: "Feria de Empleo TI 2026",
    tipo: "Feria",
    fecha: "2026-06-03",
    hora: "11:00",
    lugar: "Gimnasio Universitario",
    descripcion: "Más de 40 empresas tecnológicas buscan talento ISC. Lleva tu CV.",
    imagen: "https://placehold.co/400x200/0f172a/ffffff?text=Feria+Empleo",
    cupo: 500,
    inscrito: false,
    tags: ["Empleo", "Reclutamiento", "Empresas"],
  },
  {
    id: 5,
    titulo: "Charla: Mujeres en Tecnología",
    tipo: "Conferencia",
    fecha: "2026-05-28",
    hora: "17:00",
    lugar: "Sala de Videoconferencias",
    descripcion: "Ingenieras líderes comparten su trayectoria y consejos para romper barreras en tech.",
    imagen: "https://placehold.co/400x200/ec4899/ffffff?text=Mujeres+en+Tech",
    cupo: 80,
    inscrito: false,
    tags: ["Inclusión", "Inspiración", "Gratis"],
  },
  {
    id: 6,
    titulo: "Certificación AWS Cloud Practitioner",
    tipo: "Certificación",
    fecha: "2026-07-12",
    hora: "08:00",
    lugar: "Centro de Certificaciones",
    descripcion: "Prepárate y certifícate en Amazon Web Services con descuento para estudiantes.",
    imagen: "https://placehold.co/400x200/f59e0b/ffffff?text=AWS+Cert",
    cupo: 25,
    inscrito: false,
    tags: ["Cloud", "AWS", "Certificación"],
  },
];

// ─── RETOS POR ÁREA ─────────────────────────────────────────────────────────
export const retos = [
  {
    id: 1,
    titulo: "Piensa como una computadora",
    area: "Lógica",
    dificultad: "Básico",
    duracion: "20 min",
    descripcion: "Sigue una serie de instrucciones paso a paso y predice qué resultado produce. Sin código — pura lógica de secuencia y condiciones.",
    tecnologias: ["Papel y lápiz", "Pseudocódigo"],
    color: "blue",
    icono: "🧠",
    completados: 0,
  },
  {
    id: 2,
    titulo: "Descifra el mensaje secreto",
    area: "Criptografía básica",
    dificultad: "Básico",
    duracion: "30 min",
    descripcion: "Usa el cifrado César: cada letra se desplaza 3 posiciones en el alfabeto. ¿Puedes leer el mensaje oculto y cifrar el tuyo propio?",
    tecnologias: ["Tabla de letras", "Papel y lápiz"],
    color: "violet",
    icono: "🔐",
    completados: 1523,
  },
  {
    id: 3,
    titulo: "Adivina el número en 7 intentos",
    area: "Algoritmos",
    dificultad: "Básico",
    duracion: "25 min",
    descripcion: "La computadora elige un número del 1 al 100. Diseña la estrategia óptima para adivinarlo siempre en 7 intentos o menos. Pista: búsqueda binaria.",
    tecnologias: ["Lógica", "Papel y lápiz"],
    color: "green",
    icono: "🎯",
    completados: 2105,
  },
  {
    id: 4,
    titulo: "Encuentra el bug",
    area: "Depuración",
    dificultad: "Básico",
    duracion: "20 min",
    descripcion: "Lee este pseudocódigo que calcula el promedio de tres calificaciones. Hay un error lógico — ¿puedes encontrarlo antes de ejecutarlo?",
    tecnologias: ["Pseudocódigo", "Lógica"],
    color: "orange",
    icono: "🐛",
    completados: 1378,
  },
  {
    id: 5,
    titulo: "Compuertas lógicas en tu vida",
    area: "Lógica booleana",
    dificultad: "Básico",
    duracion: "30 min",
    descripcion: "AND, OR, NOT: las tres operaciones que gobiernan toda la computación. Resuelve situaciones cotidianas con tablas de verdad y comprueba tus respuestas.",
    tecnologias: ["Tabla de verdad", "Papel y lápiz"],
    color: "teal",
    icono: "⚡",
    completados: 987,
  },
  {
    id: 6,
    titulo: "Tu primer algoritmo escrito",
    area: "Pensamiento computacional",
    dificultad: "Básico",
    duracion: "15 min",
    descripcion: "Escribe en lenguaje natural los pasos EXACTOS para preparar un sándwich. Descubre por qué las computadoras necesitan instrucciones tan precisas.",
    tecnologias: ["Papel y lápiz", "Creatividad"],
    color: "pink",
    icono: "📋",
    completados: 2460,
  },
  {
    id: 7,
    titulo: "Ordena sin computadora",
    area: "Algoritmos",
    dificultad: "Básico",
    duracion: "25 min",
    descripcion: "Aprende el algoritmo de burbuja ordenando una lista de nombres a mano. Cuenta cuántos pasos necesitas y compara con otros métodos.",
    tecnologias: ["Tarjetas o papel", "Lógica"],
    color: "cyan",
    icono: "🔄",
    completados: 1192,
  },
  {
    id: 8,
    titulo: "Hola, Mundo — tu primera línea de código",
    area: "Introducción a Python",
    dificultad: "Básico",
    duracion: "15 min",
    descripcion: "Escribe tu primera línea de código real en Python desde el navegador, sin instalar nada. Un solo comando que imprime un mensaje en pantalla.",
    tecnologias: ["Python", "Navegador web"],
    color: "red",
    icono: "💻",
    completados: 3210,
  },
  {
    id: 9,
    titulo: "Binario al habla",
    area: "Sistemas numéricos",
    dificultad: "Básico",
    duracion: "20 min",
    descripcion: "Activa y desactiva 8 bits como si fueras una computadora. Convierte números decimales a binario y viceversa, y descubre por qué toda la información se guarda como unos y ceros.",
    tecnologias: ["Sistemas numéricos", "Lógica"],
    color: "blue",
    icono: "🔢",
    completados: 0,
  },
  {
    id: 10,
    titulo: "¿Qué tipo de dato soy?",
    area: "Fundamentos de programación",
    dificultad: "Básico",
    duracion: "10 min",
    descripcion: "Se te muestra un valor y debes identificar su tipo de dato: String, Int, Float, Boolean y más. 10 rondas contra el reloj para poner a prueba tus bases.",
    tecnologias: ["Tipos de datos", "Lógica"],
    color: "pink",
    icono: "📦",
    completados: 0,
  },
];

export type Reto = (typeof retos)[number];

// ─── PREGUNTAS DEL TEST VOCACIONAL ──────────────────────────────────────────
export const preguntasTest = [
  {
    id: 1,
    pregunta: "¿Qué actividad disfrutas más en tu tiempo libre?",
    opciones: [
      { texto: "Resolver puzzles o acertijos lógicos", area: "sistemas" },
      { texto: "Crear contenido digital (videos, diseños, música)", area: "multimedia" },
      { texto: "Programar o automatizar tareas repetitivas", area: "dev" },
      { texto: "Analizar datos y encontrar patrones", area: "datos" },
    ],
  },
  {
    id: 2,
    pregunta: "Cuando enfrentas un problema complejo, ¿cómo lo abordas?",
    opciones: [
      { texto: "Lo divido en partes pequeñas y ataco cada una", area: "sistemas" },
      { texto: "Busco información y aprendo lo necesario primero", area: "datos" },
      { texto: "Prototipo rápido y ajusto sobre la marcha", area: "dev" },
      { texto: "Colaboro con otros para encontrar la mejor solución", area: "gestión" },
    ],
  },
  {
    id: 3,
    pregunta: "¿En qué área te imaginas trabajando en 5 años?",
    opciones: [
      { texto: "Empresa tecnológica multinacional (Google, Microsoft, etc.)", area: "dev" },
      { texto: "Mi propia startup tecnológica", area: "gestión" },
      { texto: "Investigación o academia en IA / Ciencias", area: "datos" },
      { texto: "Ciberseguridad o defensa digital", area: "sistemas" },
    ],
  },
  {
    id: 4,
    pregunta: "¿Cuál de estas herramientas te llama más la atención?",
    opciones: [
      { texto: "Python para análisis de datos", area: "datos" },
      { texto: "JavaScript / React para interfaces", area: "dev" },
      { texto: "Linux y servidores", area: "sistemas" },
      { texto: "Arduino o Raspberry Pi", area: "iot" },
    ],
  },
  {
    id: 5,
    pregunta: "¿Qué tipo de proyectos te gustaría liderar?",
    opciones: [
      { texto: "Aplicaciones web o móviles que usen millones de personas", area: "dev" },
      { texto: "Sistemas de IA que tomen decisiones autónomas", area: "datos" },
      { texto: "Infraestructura crítica que nunca falla", area: "sistemas" },
      { texto: "Productos digitales innovadores desde cero", area: "gestión" },
    ],
  },
];

// ─── ESTADÍSTICAS DE LA CARRERA ─────────────────────────────────────────────
export const estadisticasCarrera = [
  { valor: "97%", etiqueta: "Empleabilidad al egreso" },
  { valor: "8°", etiqueta: "Posición en ranking nacional ISC" },
  { valor: "1,200+", etiqueta: "Egresados activos en industria" },
  { valor: "35+", etiqueta: "Empresas aliadas para prácticas" },
  { valor: "100%", etiqueta: "Laboratorios equipados con tecnología reciente" },
];



// ─── ÁREAS DE RECORRIDO VIRTUAL ──────────────────────────────────────────────
export const areasRecorrido = [
  {
    id: 1,
    nombre: "Laboratorio de Cómputo",
    descripcion: "120 equipos de alto rendimiento con sofware especializado.",
    imagen: "https://placehold.co/600x400/2563eb/ffffff?text=Lab+Cómputo",
    hotspots: [
      { x: 30, y: 40, label: "Estaciones de trabajo" },
      { x: 70, y: 60, label: "Servidores dedicados" },
    ],
  },
  {
    id: 2,
    nombre: "Laboratorio de Redes",
    descripcion: "Infraestructura real de Cisco y Juniper para prácticas.",
    imagen: "https://placehold.co/600x400/7c3aed/ffffff?text=Lab+Redes",
    hotspots: [
      { x: 50, y: 30, label: "Rack de switches Cisco" },
      { x: 25, y: 65, label: "Panel de parcheo" },
    ],
  },
  {
    id: 3,
    nombre: "Fab Lab / Maker Space",
    descripcion: "Impresoras 3D, cortadoras láser y kits de electrónica.",
    imagen: "https://placehold.co/600x400/06b6d4/0f172a?text=Fab+Lab",
    hotspots: [
      { x: 40, y: 50, label: "Impresoras 3D" },
      { x: 75, y: 35, label: "Kits Arduino/RPi" },
    ],
  },
  {
    id: 4,
    nombre: "Sala de Proyectos Ágiles",
    descripcion: "Espacio colaborativo para equipos Scrum con pantallas compartidas.",
    imagen: "https://placehold.co/600x400/0f172a/ffffff?text=Sala+Ágil",
    hotspots: [
      { x: 55, y: 45, label: "Pizarras digitales" },
      { x: 20, y: 70, label: "Zona de retrospectivas" },
    ],
  },
];

// ─── PROCESO DE ADMISIÓN (resumen en home; detalle en /admision) ────────────
export const pasoAdmision = [
  {
    paso: 1,
    titulo: "Registro en línea",
    descripcion: "Captura tu solicitud en el SII del TecNM campus Tehuacán.",
    fecha: "9 feb — 24 may 2026",
    icono: "📝",
  },
  {
    paso: 2,
    titulo: "Pago de ficha en línea",
    descripcion: "Pago de derechos por $1,000.00 en el mismo periodo de registro.",
    fecha: "9 feb — 24 may 2026",
    icono: "💳",
  },
  {
    paso: 3,
    titulo: "Evaluación diagnóstica en línea",
    descripcion:
      "EVALUATEC enviará por correo la información el día de la evaluación. Examen: 29 de mayo, 13:00 h.",
    fecha: "29 may 2026",
    icono: "📋",
  },
  {
    paso: 4,
    titulo: "Resultados de la evaluación",
    descripcion: "Publicación en el portal institucional del TecNM Tehuacán.",
    fecha: "23 jun 2026",
    icono: "📣",
  },
  {
    paso: 5,
    titulo: "Curso propedéutico (asistencia obligatoria)",
    descripcion:
      "Del 10 al 21 de agosto, 9:00 a 13:00 h. Pago en línea de $1,000.00 el 1° de julio.",
    fecha: "Pago 1 jul · Curso 10—21 ago 2026",
    icono: "📚",
  },
  {
    paso: 6,
    titulo: "Pago de inscripción en línea",
    descripcion: "Inscripción por $2,300.00. Solo aspirantes con bachillerato concluido y constancia.",
    fecha: "3 ago 2026",
    icono: "🎓",
  },
];

/** Proceso en línea — admisión agosto–diciembre 2026 (Instituto Tecnológico de Tehuacán). */
export const procesoAdmisionLineaAgostoDic2026 = {
  titulo: "Proceso en línea de admisión \n Agosto – Diciembre 2026",
  subtitulo: "Instituto Tecnológico de Tehuacán — Tecnológico Nacional de México",
  notaImportante:
    "Al momento de la inscripción solo se aceptarán a los aspirantes que hayan concluido satisfactoriamente el bachillerato, sin adeudo de materias, presentando un documento comprobatorio por parte de su bachillerato.",
  pasos: [
    {
      paso: 1,
      titulo: "Registro en línea",
      fechas: "Del 9 de febrero al 24 de mayo de 2026",
      lineas: [] as string[],
      enlaces: [{ href: "https://sii.tehuacan.tecnm.mx/login", label: "sii.tehuacan.tecnm.mx/login" }],
    },
    {
      paso: 2,
      titulo: "Pago de ficha en línea",
      fechas: "Del 9 de febrero al 24 de mayo de 2026",
      lineas: [] as string[],
      costo: "$1,000.00",
    },
    {
      paso: 3,
      titulo: "Evaluación diagnóstica en línea",
      fechas: "29 de mayo de 2026, 13:00 horas",
      lineas: [
        "EVALUATEC enviará por correo electrónico, el día de la evaluación, la información necesaria para realizar la evaluación diagnóstica en línea.",
      ],
    },
    {
      paso: 4,
      titulo: "Resultados de la evaluación diagnóstica",
      fechas: "23 de junio de 2026",
      lineas: ["Consulta los resultados en el portal del instituto."],
      enlaces: [{ href: "https://www.tehuacan.tecnm.mx/", label: "www.tehuacan.tecnm.mx" }],
    },
    {
      paso: 5,
      titulo: "Pago en línea del curso propedéutico (asistencia obligatoria)",
      fechas: "Curso: del 10 al 21 de agosto de 2026 · Horario: 09:00 a 13:00 horas",
      lineas: ["Pago del curso propedéutico: 1° de julio de 2026."],
      costo: "$1,000.00",
    },
    {
      paso: 6,
      titulo: "Pago en línea de inscripción",
      fechas: "3 de agosto de 2026",
      lineas: [] as string[],
      costo: "$2,300.00",
    },
  ],
};

// ─── MISIÓN, VISIÓN, OBJETIVOS, ATRIBUTOS ──────────────────────────────────
export const misionVision = {
  mision:
    "La academia de sistemas y computación tiene como misión formar de manera integral, diversificada y con calidad, profesionistas comprometidos con el conocimiento y la investigación de la ingeniería en Sistemas Computacionales, competitivos y capaces de ejercer el liderazgo con sentido propositivo para contribuir responsablemente en la integración de una sociedad de bienestar, con impacto regional, nacional e internacional.",
  vision:
    "La academia de sistemas y computación será reconocida por su compromiso con la responsabilidad social, su calidad académica, liderazgo y competitividad de sus egresados, por el desarrollo integral de su planta docente y administrativa; además, de su importante participación en la investigación e innovación científica que contribuya fortaleciendo la carrera de Ingeniería en Sistemas Computacionales. Así mismo, ser distinguida a nivel regional, nacional e internacional por la certificación de los procesos y acreditación de su programa educativo.",
  objetivos: [
    "El egresado(a) construye, configura, evalúa y selecciona entornos de servicios computacionales, capaces de generar nueva tecnología y de encontrar e implantar soluciones eficientes de cómputo en las organizaciones para contribuir al desarrollo nacional e internacional.",
    "El egresado(a) crea sus propias empresas estableciéndose como profesionales en la práctica de la Ingeniería en Sistemas Computacionales promoviendo el desarrollo tecnológico, demostrando liderazgo y respeto a los valores del ser humano y la naturaleza.",
    "El egresado(a) desarrolla actividades de capacitación, educación continua, posgrado e investigación y desarrollo tecnológico; para participar en propuestas de mejora para el desarrollo de su entorno.",
  ],
  atributos: [
    "Analizar, diseñar, desarrollar e implementar soluciones computacionales a problemas de diversos contextos, integrando diferentes tecnologías, plataformas o dispositivos.",
    "Diseñar, desarrollar y aplicar modelos computacionales para solucionar problemas, mediante la selección y uso de herramientas de ingeniería.",
    "Diseñar, implementar y administrar bases de datos optimizando los recursos disponibles, conforme a las normas de gestión y seguridad de la información.",
    "Diseñar, configurar y administrar redes de computadoras para crear soluciones de conectividad en la organización aplicando las normas y estándares.",
    "Comunicar sus ideas de manera efectiva a diferentes audiencias.",
    "Asumir las responsabilidades éticas en el desarrollo de su profesión en situaciones relevantes analizando el impacto económico, técnico, social y ambiental.",
    "Reconocer la importancia del aprendizaje continuo para permanecer actualizado en la ingeniería para aplicar e integrar conocimientos de manera adecuada.",
    "Coordinar y participar en equipos multidisciplinarios para la aplicación de soluciones innovadoras en diferentes contextos.",
  ],
} as const;

// ─── DOCENTES DEL ÁREA ─────────────────────────────────────────────────────
export const docentes = [
  { nombre: "M.I.A. Araoz Baltazar Ángel", grado: "M.I.A." },
  { nombre: "Ing. Cansino Galvez Fernando", grado: "Ing." },
  { nombre: "L.I. Cruz García Patricia", grado: "L.I." },
  { nombre: "Ing. Delgado Saldaña Adrián", grado: "Ing." },
  { nombre: "Dra. García Ortega Irene", grado: "Dra." },
  { nombre: "Ing. González Rojas Gerardo Román", grado: "Ing." },
  { nombre: "M.C. Hernández Cortés Elsa", grado: "M.C." },
  { nombre: "M.D.S. López Fortíz Olga", grado: "M.D.S." },
  { nombre: "Ing. Martínez Orea Wendy Adriana", grado: "Ing." },
  { nombre: "M.C. Olguín Gil Liliana Elena", grado: "M.C." },
  { nombre: "M.T.I. Orduña Ramírez María Estela", grado: "M.T.I." },
  { nombre: "Dr. Rodríguez Ramírez Felipe", grado: "Dr." },
  { nombre: "M.E. Vásquez Gamboa Saira Antonieta", grado: "M.E." },
  { nombre: "Ing. Vázquez Aguilar Antonio", grado: "Ing." },
  { nombre: "M.C. Vázquez Guzmán Francisco", grado: "M.C." },
  { nombre: "M.T.I. Vázquez Zayas Eduardo", grado: "M.T.I." },
  { nombre: "L.D. Corona Ruiz Belkys", grado: "L.D." },
  { nombre: "C. Ramírez Luna Eddie Esaú", grado: "C." },
];

// ─── SERVICIOS ESCOLARES ───────────────────────────────────────────────────
export const serviciosEscolares = {
  salud: [
    { label: "Consulta del número de seguro social del IMSS", url: "https://serviciosdigitales.imss.gob.mx/gestionAsegurados-web-externo/asignacionNSS" },
    { label: "Constancia de vigencia de derechos del IMSS", url: "https://serviciosdigitales.imss.gob.mx/gestionAsegurados-web-externo/vigencia" },
    { label: "Asignación de clínica del IMSS", url: "https://serviciosdigitales.imss.gob.mx/portal-ciudadano-web-externo/derechohabientes/tramite/registro" },
    // { label: "Reimpresión de cartilla nacional de salud", url: "https://serviciosdigitales.imss.gob.mx/gestionAsegurados-web-externo/cartilla" },
  ],
  escolares: [
    { label: "Solicitud de credenciales", url: "#" },
    { label: "Descarga de formatos de inscripción", url: "https://www.tehuacan.tecnm.mx/wp-content.old/uploads/2025/06/DOCUMENTOS-2025-inscripcion.zip" },
    { label: "Lineamientos", url: "https://www.tehuacan.tecnm.mx/index.php/lineamientos-2015/" },
    // { label: "Examen médico nuevo ingreso", url: "http://sm.ittehuacan.edu.mx:84/sistema/login/" },
  ],
  contactos: [
    { label: "Trámites, documentación y cuentas del SII", correo: "controlescolar2@tehuacan.tecnm.mx" },
    { label: "Becas, seguro médico y titulación", correo: "estudiantiles@tehuacan.tecnm.mx" },
  ],
};

// ─── INFORMACIÓN IMPORTANTE (GRID) ─────────────────────────────────────────
export const infoImportante = [
  {
    titulo: "Organigrama ISC",
    icono: "🏛️",
    href: "https://www.tehuacan.tecnm.mx/isc/wp-content/uploads/2023/06/ORGANIGRAMA-SISTEMAS.pdf",
  },
  {
    titulo: "Retícula ISIE-TIC-2023-01",
    icono: "📋",
    href: "/reticula",
  },
  {
    titulo: "Convenios y Asociaciones",
    icono: "🤝",
    href: "https://www.tehuacan.tecnm.mx/isc/?page_id=225/",
  },
  // {
  //   titulo: "Calendario Escolar",
  //   icono: "📅",
  //   href: "http://www.tehuacan.tecnm.mx/",
  // },
  // {
  //   titulo: "Participación Docente",
  //   icono: "👨‍🏫",
  //   href: "http://www.ittehuacan.edu.mx/",
  // },
  // {
  //   titulo: "Cuerpos Académicos",
  //   icono: "🎓",
  //   href: "http://www.ittehuacan.edu.mx/",
  // },
  // {
  //   titulo: "Ubicación del Edificio",
  //   icono: "📍",
  //   href: "https://maps.google.com/?q=Instituto+Tecnológico+de+Tehuacán",
  // },
  // {
  //   titulo: "Proceso de Titulación",
  //   icono: "📜",
  //   href: "http://www.tehuacan.tecnm.mx/",
  // },
];
