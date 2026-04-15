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
      { clave: "AEF-0901", nombre: "Cálculo Diferencial", creditos: 5 },
      { clave: "AEF-1031", nombre: "Fundamentos de Programación", creditos: 5 },
      { clave: "AEF-1051", nombre: "Matemáticas Discretas", creditos: 5 },
      { clave: "AEF-1011", nombre: "Taller de Ética", creditos: 4 },
      { clave: "AEF-1021", nombre: "Comunicación Oral y Escrita", creditos: 4 },
    ],
  },
  {
    semestre: 2,
    materias: [
      { clave: "AEF-0902", nombre: "Cálculo Integral", creditos: 5 },
      { clave: "AEF-1032", nombre: "Programación Orientada a Objetos", creditos: 5 },
      { clave: "AEF-1042", nombre: "Álgebra Lineal", creditos: 5 },
      { clave: "AEF-1022", nombre: "Desarrollo Sustentable", creditos: 4 },
      { clave: "AEF-1052", nombre: "Contabilidad y Costos", creditos: 4 },
    ],
  },
  {
    semestre: 3,
    materias: [
      { clave: "ISC-1031", nombre: "Estructura de Datos", creditos: 5 },
      { clave: "ISC-1041", nombre: "Sistemas Operativos", creditos: 5 },
      { clave: "AEF-0903", nombre: "Cálculo Vectorial", creditos: 5 },
      { clave: "ISC-1011", nombre: "Arquitectura de Computadoras", creditos: 5 },
      { clave: "AEF-1061", nombre: "Probabilidad y Estadística", creditos: 5 },
    ],
  },
  {
    semestre: 4,
    materias: [
      { clave: "ISC-1032", nombre: "Bases de Datos", creditos: 5 },
      { clave: "ISC-1042", nombre: "Redes de Computadoras", creditos: 5 },
      { clave: "ISC-1012", nombre: "Programación Web", creditos: 5 },
      { clave: "AEF-1071", nombre: "Investigación de Operaciones", creditos: 5 },
      { clave: "ISC-1021", nombre: "Ingeniería de Software", creditos: 5 },
    ],
  },
  {
    semestre: 5,
    materias: [
      { clave: "ISC-1033", nombre: "Administración de BD Avanzada", creditos: 5 },
      { clave: "ISC-1043", nombre: "Seguridad Informática", creditos: 5 },
      { clave: "ISC-1013", nombre: "Desarrollo de Aplicaciones Móviles", creditos: 5 },
      { clave: "ISC-1022", nombre: "Análisis y Diseño de Sistemas", creditos: 5 },
      { clave: "ISC-1051", nombre: "Inteligencia Artificial", creditos: 5 },
    ],
  },
  {
    semestre: 6,
    materias: [
      { clave: "ISC-1034", nombre: "Machine Learning", creditos: 5 },
      { clave: "ISC-1044", nombre: "Cómputo en la Nube", creditos: 5 },
      { clave: "ISC-1014", nombre: "Tópicos de Programación", creditos: 5 },
      { clave: "ISC-1023", nombre: "Gestión de Proyectos TI", creditos: 5 },
      { clave: "ISC-1052", nombre: "Lenguajes y Autómatas", creditos: 5 },
    ],
  },
  {
    semestre: 7,
    materias: [
      { clave: "ISC-1035", nombre: "Residencia Profesional I", creditos: 10 },
      { clave: "ISC-1045", nombre: "Sistemas Embebidos", creditos: 5 },
      { clave: "ISC-1015", nombre: "DevOps y CI/CD", creditos: 5 },
      { clave: "ISC-1024", nombre: "Blockchain y Criptografía", creditos: 5 },
    ],
  },
  {
    semestre: 8,
    materias: [
      { clave: "ISC-1036", nombre: "Residencia Profesional II", creditos: 10 },
      { clave: "ISC-1046", nombre: "IoT e Industria 4.0", creditos: 5 },
      { clave: "ISC-1016", nombre: "Emprendimiento Tecnológico", creditos: 5 },
      { clave: "ISC-1025", nombre: "Proyecto Integrador", creditos: 5 },
    ],
  },
  {
    semestre: 9,
    materias: [
      { clave: "ISC-1037", nombre: "Titulación", creditos: 20 },
      { clave: "ISC-1047", nombre: "Inglés Técnico Avanzado", creditos: 5 },
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
    titulo: "Chatbot con NLP básico",
    area: "Inteligencia Artificial",
    dificultad: "Intermedio",
    duracion: "2 semanas",
    descripcion: "Construye un chatbot que responda preguntas frecuentes usando procesamiento de lenguaje natural.",
    tecnologias: ["Python", "NLTK", "Flask"],
    color: "violet",
    icono: "🤖",
    completados: 234,
  },
  {
    id: 2,
    titulo: "Dashboard fullstack en tiempo real",
    area: "Desarrollo Web",
    dificultad: "Avanzado",
    duracion: "3 semanas",
    descripcion: "Dashboard con gráficas en vivo, autenticación y base de datos en la nube.",
    tecnologias: ["Next.js", "Supabase", "Recharts"],
    color: "blue",
    icono: "🌐",
    completados: 187,
  },
  {
    id: 3,
    titulo: "Pipeline de análisis de datos",
    area: "Ciencia de Datos",
    dificultad: "Intermedio",
    duracion: "2 semanas",
    descripcion: "Ingesta, limpieza, análisis y visualización de un dataset público con Python.",
    tecnologias: ["Python", "Pandas", "Matplotlib"],
    color: "cyan",
    icono: "📊",
    completados: 312,
  },
  {
    id: 4,
    titulo: "App móvil de control de gastos",
    area: "Desarrollo Móvil",
    dificultad: "Básico",
    duracion: "1 semana",
    descripcion: "Aplicación iOS/Android con almacenamiento local y notificaciones push.",
    tecnologias: ["React Native", "Expo", "AsyncStorage"],
    color: "green",
    icono: "📱",
    completados: 421,
  },
  {
    id: 5,
    titulo: "Infraestructura como código en AWS",
    area: "Cloud & DevOps",
    dificultad: "Avanzado",
    duracion: "4 semanas",
    descripcion: "Despliega una aplicación escalable usando Terraform, Docker y GitHub Actions.",
    tecnologias: ["AWS", "Terraform", "Docker"],
    color: "orange",
    icono: "☁️",
    completados: 98,
  },
  {
    id: 6,
    titulo: "Auditoría de seguridad web",
    area: "Ciberseguridad",
    dificultad: "Intermedio",
    duracion: "2 semanas",
    descripcion: "Identifica vulnerabilidades OWASP Top 10 en una aplicación de práctica.",
    tecnologias: ["Kali Linux", "Burp Suite", "OWASP ZAP"],
    color: "red",
    icono: "🔐",
    completados: 156,
  },
  {
    id: 7,
    titulo: "Juego 2D en Unity",
    area: "Videojuegos",
    dificultad: "Intermedio",
    duracion: "3 semanas",
    descripcion: "Desarrolla un juego de plataformas completo con físicas, colisiones y pantallas.",
    tecnologias: ["Unity", "C#", "Aseprite"],
    color: "pink",
    icono: "🎮",
    completados: 203,
  },
  {
    id: 8,
    titulo: "Sistema IoT con Raspberry Pi",
    area: "IoT & Embebidos",
    dificultad: "Avanzado",
    duracion: "3 semanas",
    descripcion: "Automatiza un cuarto con sensores, actuadores y panel de control web.",
    tecnologias: ["Raspberry Pi", "Python", "MQTT"],
    color: "teal",
    icono: "🔧",
    completados: 74,
  },
];

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

// ─── PROCESO DE ADMISIÓN ─────────────────────────────────────────────────────
export const pasoAdmision = [
  {
    paso: 1,
    titulo: "Registro en línea",
    descripcion: "Llena el formulario de preinscripción en el portal institucional.",
    fecha: "Abr — May 2026",
    icono: "📝",
  },
  {
    paso: 2,
    titulo: "Examen de admisión (EXANI-II)",
    descripcion: "Evaluación CENEVAL con áreas de matemáticas, pensamiento analítico y lenguaje.",
    fecha: "Jun 2026",
    icono: "📋",
  },
  {
    paso: 3,
    titulo: "Publicación de resultados",
    descripcion: "Consulta tu resultado en el portal. Se notifica por correo electrónico.",
    fecha: "Jul 2026",
    icono: "📣",
  },
  {
    paso: 4,
    titulo: "Documentación y pago",
    descripcion: "Entrega de documentos originales y pago de inscripción semestral.",
    fecha: "Jul — Ago 2026",
    icono: "📁",
  },
  {
    paso: 5,
    titulo: "Inducción y bienvenida",
    descripcion: "Semana de inducción: campus, plataformas, servicios escolares y mentores.",
    fecha: "Ago 2026",
    icono: "🎓",
  },
];

// ─── MISIÓN, VISIÓN, OBJETIVOS, ATRIBUTOS ──────────────────────────────────
export const misionVision = {
  mision:
    "La academia de sistemas y computación tiene como misión formar de manera integral, diversificada y con calidad, profesionistas comprometidos con el conocimiento y la investigación de la ingeniería en Sistemas Computacionales, competitivos y capaces de ejercer el liderazgo con sentido propositivo para contribuir responsablemente en la integración de una sociedad de bienestar, con impacto regional, nacional e internacional.",
  vision:
    "La academia de sistemas y computación será reconocida por su compromiso con la responsabilidad social, su calidad académica, liderazgo y competitividad de sus egresados, por el desarrollo integral de su planta docente y administrativa; además, de su importante participación en la investigación e innovación científica que contribuya fortaleciendo la carrera de Ingeniería en Sistemas Computacionales. Así mismo, ser distinguida a nivel regional, nacional e internacional por la certificación de los procesos y acreditación de su programa educativo.",
  objetivos:
    "El egresado(a) construye, configura, evalúa y selecciona entornos de servicios computacionales, capaces de generar nueva tecnología y de encontrar e implantar soluciones eficientes de cómputo en las organizaciones para contribuir al desarrollo nacional e internacional. El egresado(a) crea sus propias empresas estableciéndose como profesionales en la práctica de la Ingeniería en Sistemas Computacionales promoviendo el desarrollo tecnológico, demostrando liderazgo y respeto a los valores del ser humano y la naturaleza. El egresado(a) desarrolla actividades de capacitación, educación continua,  posgrado e investigación y desarrollo tecnológico; para participar en propuestas de mejora para el desarrollo de su entorno.",
  atributos:
    "Analizar, diseñar, desarrollar e implementar soluciones computacionales a problemas de diversos contextos, integrando diferentes tecnologías, plataformas o dispositivos, Diseñar, desarrollar y aplicar modelos computacionales para solucionar problemas, mediante la selección y uso de herramientas de ingeniería, Diseñar, implementar y administrar bases de datos optimizando los recursos disponibles, conforme a las normas de gestión y seguridad de la información, Diseñar, configurar y administrar redes de computadoras para crear soluciones de conectividad en la organización aplicando las normas y estándares, Comunicar sus ideas de manera efectiva a diferentes audiencias, Asumir las responsabilidades éticas en el desarrollo de su profesión en situaciones relevantes analizando el impacto económico, técnico, social y ambiental, Reconocer la importancia del aprendizaje continuo para permanecer actualizado en la ingeniería para aplicar e integrar conocimientos de manera adecuada, Coordinar y participar en equipos multidisciplinarios para la aplicación de soluciones innovadoras en diferentes contextos.",
};

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
    { label: "Reimpresión de cartilla nacional de salud", url: "https://serviciosdigitales.imss.gob.mx/gestionAsegurados-web-externo/cartilla" },
  ],
  escolares: [
    { label: "Solicitud de credenciales", url: "#" },
    { label: "Descarga de formatos de inscripción", url: "http://www.tehuacan.tecnm.mx/wp-content/uploads/2023/03/DOCUMENTOS_DE_INSCRIPCIN.pdf" },
    { label: "Lineamientos", url: "#" },
    { label: "Examen médico nuevo ingreso", url: "http://sm.ittehuacan.edu.mx:84/sistema/login/" },
  ],
  contactos: [
    { label: "Trámites, documentación y cuentas del SII", correo: "controlescolar2@tehuacan.tecnm.mx" },
    { label: "Becas, seguro médico y titulación", correo: "estudiantiles@tehuacan.tecnm.mx" },
  ],
};

// ─── INFORMACIÓN IMPORTANTE (GRID) ─────────────────────────────────────────
export const infoImportante = [
  { titulo: "Organigrama ISC", icono: "🏛️" },
  { titulo: "Retícula ISIE-TIC-2023-01", icono: "📋" },
  { titulo: "Convenios y Asociaciones", icono: "🤝" },
  { titulo: "Calendario Escolar", icono: "📅" },
  { titulo: "Participación Docente", icono: "👨‍🏫" },
  { titulo: "Cuerpos Académicos", icono: "🎓" },
  { titulo: "Ubicación del Edificio", icono: "📍" },
  { titulo: "Proceso de Titulación", icono: "📜" },
];
