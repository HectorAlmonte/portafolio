export interface ProjectDetail {
  slug: string;
  title: string;
  year: string;
  kind: { es: string; en: string };
  tagline: { es: string; en: string };
  featured: boolean;
  github: string;
  demo?: string;
  stack: string[];
  status: { es: string; en: string };
  problem: { es: string; en: string };
  solution: { es: string; en: string };
  impact: { es: string[]; en: string[] };
  stackNotes: { tech: string; reason: { es: string; en: string } }[];
  mockup: string[];
}

export const projects: ProjectDetail[] = [
  {
    slug: 'gre-materiales',
    title: 'gre-materiales',
    year: '2025',
    kind: { es: 'producto propio · PWA', en: 'own product · PWA' },
    tagline: {
      es: 'Sistema PWA para consulta de 2,661 materiales peligrosos (GRE 2024). Búsqueda en tiempo real, escáner OCR, modo offline.',
      en: 'PWA for consulting 2,661 hazardous materials (ERG 2024). Real-time search, OCR scanner, offline mode.',
    },
    featured: true,
    github: 'https://github.com/HectorAlmonte',
    stack: ['Next.js 16', 'TypeScript', 'PostgreSQL', 'PWA', 'Tesseract.js'],
    status: { es: 'En producción', en: 'In production' },
    problem: {
      es: 'Los equipos de respuesta a emergencias en Perú necesitan consultar materiales peligrosos bajo presión — en incendios, derrames, accidentes. La guía GRE 2024 tiene 2,661 materiales. El libro físico tarda 30-60 segundos por consulta. No existía ninguna app offline en español.',
      en: 'Emergency response teams in Peru need to look up hazardous materials under pressure — fires, spills, accidents. The ERG 2024 guide has 2,661 materials. The physical book takes 30-60 seconds per lookup. No offline app in Spanish existed.',
    },
    solution: {
      es: 'Construí una PWA que carga todos los 2,661 materiales en IndexedDB al primer uso. La búsqueda en tiempo real filtra por nombre, número UN y sinónimos en menos de 100ms. Un escáner OCR (Tesseract.js) lee códigos de etiquetas físicas y resuelve el material automáticamente. Funciona 100% sin conexión.',
      en: 'Built a PWA that loads all 2,661 materials into IndexedDB on first use. Real-time search filters by name, UN number, and synonyms in under 100ms. An OCR scanner (Tesseract.js) reads codes from physical labels and resolves the material automatically. Works 100% offline.',
    },
    impact: {
      es: [
        'Búsqueda en < 100ms sobre 2,661 materiales sin conexión a internet',
        'OCR reemplaza 30-60 seg de búsqueda manual por < 3 segundos',
        'Funciona 100% offline — crítico en zonas sin cobertura celular',
      ],
      en: [
        'Search in < 100ms across 2,661 materials with no internet connection',
        'OCR replaces 30-60 sec of manual lookup with < 3 seconds',
        '100% offline — critical in areas without cell coverage',
      ],
    },
    stackNotes: [
      { tech: 'Next.js 16 SSG', reason: { es: 'Pre-renderiza todas las páginas; carga inicial rápida sin JS de cliente', en: 'Pre-renders all pages; fast initial load without client JS' } },
      { tech: 'Tesseract.js', reason: { es: 'OCR completamente client-side — sin servidor, sin latencia, funciona offline', en: 'Fully client-side OCR — no server, no latency, works offline' } },
      { tech: 'IndexedDB + PWA', reason: { es: '2,661 registros cargados localmente al primer uso; búsqueda instantánea sin red', en: '2,661 records loaded locally on first use; instant search without network' } },
      { tech: 'PostgreSQL', reason: { es: 'Fuente de verdad para el modelo SaaS multi-tenant; sincronización diferida', en: 'Source of truth for the multi-tenant SaaS model; deferred sync' } },
    ],
    mockup: [
      '$ ./gre-materiales --search',
      '',
      '  ┌──────────────────────────────────────┐',
      '  │ 🔍  buscar por nombre o número UN    │',
      '  │ > UN 1203_                           │',
      '  ├──────────────────────────────────────┤',
      '  │ UN 1203  Gasolina / Petrol           │',
      '  │          Clase 3 · INFLAMABLE ⚠     │',
      '  │          Guía 128 · Evacuar 100m     │',
      '  ├──────────────────────────────────────┤',
      '  │ [📷 Escanear OCR]   [offline ✓]     │',
      '  └──────────────────────────────────────┘',
      '',
      '  ✓ 2,661 materiales cargados localmente',
    ],
  },
  {
    slug: 'rindex',
    title: 'rindex',
    year: '2024',
    kind: { es: 'SaaS académico', en: 'academic SaaS' },
    tagline: {
      es: 'Plataforma de evaluación académica con 3 roles, exámenes temporizados y análisis de rendimiento.',
      en: 'Academic evaluation platform with 3 roles, timed exams, and performance analytics.',
    },
    featured: true,
    github: 'https://github.com/HectorAlmonte',
    stack: ['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth'],
    status: { es: 'En producción', en: 'In production' },
    problem: {
      es: 'Una institución educativa regional necesitaba reemplazar los exámenes en papel. El proceso completo — crear, distribuir, aplicar, calificar y analizar — tomaba semanas. Los profesores no tenían visibilidad del rendimiento por alumno hasta después de la corrección manual.',
      en: 'A regional educational institution needed to replace paper exams. The full process — create, distribute, administer, grade, and analyze — took weeks. Teachers had no visibility into per-student performance until after manual grading.',
    },
    solution: {
      es: 'Plataforma multi-rol (admin / profesor / alumno) con banco de preguntas, motor de exámenes temporizados con protección anti-trampa, calificación automática y dashboards de rendimiento por grupo y alumno. Autenticación basada en roles con NextAuth y sesiones JWT.',
      en: 'Multi-role platform (admin / teacher / student) with question bank, timed exam engine with anti-cheat protection, automatic grading, and performance dashboards by group and student. Role-based authentication with NextAuth and JWT sessions.',
    },
    impact: {
      es: [
        'Proceso de examen reducido de semanas a minutos',
        '3 roles con permisos granulares — cero conflictos de acceso',
        'Dashboards en tiempo real para profesores sin esperar corrección manual',
      ],
      en: [
        'Exam process reduced from weeks to minutes',
        '3 roles with granular permissions — zero access conflicts',
        'Real-time dashboards for teachers without waiting for manual grading',
      ],
    },
    stackNotes: [
      { tech: 'Prisma', reason: { es: 'ORM type-safe; migraciones controladas; relaciones complejas sin raw SQL', en: 'Type-safe ORM; controlled migrations; complex relationships without raw SQL' } },
      { tech: 'NextAuth', reason: { es: 'Gestión de sesiones con roles integrada; JWT + cookies seguras sin backend extra', en: 'Built-in role-based session management; JWT + secure cookies without extra backend' } },
      { tech: 'PostgreSQL', reason: { es: 'Relaciones complejas usuario → grupo → examen → respuesta; integridad referencial', en: 'Complex user → group → exam → answer relationships; referential integrity' } },
    ],
    mockup: [
      '$ rindex --exam "Física II" --student',
      '',
      '  ┌──────────────────────────────────────┐',
      '  │ Examen: Física II        ⏱  44:32   │',
      '  │ Pregunta 3 de 20                     │',
      '  ├──────────────────────────────────────┤',
      '  │ ¿Cuál es la 2ª ley de Newton?        │',
      '  │                                      │',
      '  │  ● A) F = ma                         │',
      '  │  ○ B) E = mc²                        │',
      '  │  ○ C) PV = nRT                       │',
      '  ├──────────────────────────────────────┤',
      '  │ Progreso: ████████░░░░░  40%        │',
      '  └──────────────────────────────────────┘',
    ],
  },
  {
    slug: 'agrosoft-fleet',
    title: 'agrosoft-fleet',
    year: '2022–2025',
    kind: { es: 'trabajo · sistema interno', en: 'work · internal system' },
    tagline: {
      es: 'Monitoreo en tiempo real de maquinaria agrícola con visualización geoespacial. GPS, alertas, telemetría.',
      en: 'Real-time agricultural machinery monitoring with geospatial visualization. GPS, alerts, telemetry.',
    },
    featured: false,
    github: 'https://github.com/HectorAlmonte',
    stack: ['React', '.NET C#', 'SQL Server', 'Mapbox'],
    status: { es: 'En producción · Agrosoft', en: 'In production · Agrosoft' },
    problem: {
      es: 'Los dueños de haciendas en el sur de Perú no podían saber en tiempo real dónde estaban sus tractores y cosechadoras, cuánto combustible consumían ni cuándo se detenían por fallas. Los reportes eran manuales, semanales, y siempre llegaban tarde.',
      en: 'Farm owners in southern Peru couldn\'t know in real time where their tractors and harvesters were, how much fuel they consumed, or when they stopped due to breakdowns. Reports were manual, weekly, and always arrived late.',
    },
    solution: {
      es: 'Sistema de monitoreo en tiempo real con Mapbox: mapa interactivo con rutas históricas, posición actual, zonas de trabajo y alertas automáticas. Backend en .NET C# procesando telemetría GPS de la flota. Reportes personalizados por hacienda, maquinaria y período.',
      en: 'Real-time monitoring system with Mapbox: interactive map with historical routes, current position, work zones, and automatic alerts. .NET C# backend processing GPS telemetry from the fleet. Custom reports by farm, machinery, and period.',
    },
    impact: {
      es: [
        'Visibilidad en tiempo real de flota completa — de 0% a 100%',
        'Alertas automáticas de detención y consumo anómalo de combustible',
        'Reportes para 50+ propietarios — de semanal a tiempo real',
      ],
      en: [
        'Real-time visibility of full fleet — from 0% to 100%',
        'Automatic alerts for stops and abnormal fuel consumption',
        'Reports for 50+ farm owners — from weekly to real-time',
      ],
    },
    stackNotes: [
      { tech: '.NET C# / ASP.NET', reason: { es: 'Procesamiento de telemetría GPS a alta frecuencia; rendimiento crítico bajo carga', en: 'High-frequency GPS telemetry processing; performance-critical under load' } },
      { tech: 'SQL Server', reason: { es: 'Grandes volúmenes de datos GPS históricos; queries analíticas complejas por rango de fechas', en: 'Large volumes of historical GPS data; complex date-range analytical queries' } },
      { tech: 'Mapbox GL JS', reason: { es: 'Layers personalizadas para rutas históricas, zonas de trabajo y posición en tiempo real', en: 'Custom layers for historical routes, work zones, and real-time position' } },
    ],
    mockup: [
      '$ agrosoft fleet --live --hacienda="La Portada"',
      '',
      '  MAP: Ilo, Moquegua · zoom 14',
      '',
      '  [TRACTOR-01] ● lat:-17.638 lon:-71.337',
      '    velocidad: 12 km/h  combustible: 68%',
      '    zona: Sector Norte  estado: activo',
      '',
      '  [TRACTOR-02] ⚠ DETENIDO 14 min',
      '    última posición: lat:-17.641 lon:-71.334',
      '    → alerta enviada al supervisor',
      '',
      '  [COSECHADORA-01] ● en ruta · ETA 22min',
    ],
  },
  {
    slug: 'industrial-safety',
    title: 'industrial-safety',
    year: '2025',
    kind: { es: 'trabajo · Global Plus', en: 'work · Global Plus' },
    tagline: {
      es: 'Sistema de gestión de riesgos para almacenaje de materiales peligrosos. Protocolos, control operativo, multi-rol.',
      en: 'Risk management system for hazardous materials storage. Protocols, operational control, multi-role.',
    },
    featured: false,
    github: 'https://github.com/HectorAlmonte',
    stack: ['Next.js', 'PostgreSQL', 'Docker', 'PWA'],
    status: { es: 'En producción · Global Plus', en: 'In production · Global Plus' },
    problem: {
      es: 'Una empresa de almacenaje de materiales peligrosos en Ilo gestionaba todos sus protocolos de seguridad en papel. Certificaciones de empleados, planes de emergencia, inspecciones y registros de incidentes eran difíciles de auditar y fáciles de perder en las operaciones diarias.',
      en: 'A hazardous materials storage company in Ilo managed all their safety protocols on paper. Employee certifications, emergency plans, inspections, and incident records were hard to audit and easy to lose in daily operations.',
    },
    solution: {
      es: 'Sistema multi-rol (supervisor / operador / auditor) con biblioteca de protocolos, flujo de inspecciones digitales, registro de incidentes con fotos, control de certificaciones y PWA con modo offline para zonas del almacén sin cobertura WiFi.',
      en: 'Multi-role system (supervisor / operator / auditor) with protocol library, digital inspection flow, incident logging with photos, certification tracking, and PWA with offline mode for warehouse zones without WiFi coverage.',
    },
    impact: {
      es: [
        'Protocolos de emergencia accesibles offline en toda el área de almacén',
        'Auditorías de cumplimiento de días a minutos — todo trazable por rol y timestamp',
        'Cero documentación perdida desde el deploy',
      ],
      en: [
        'Emergency protocols accessible offline across the entire warehouse area',
        'Compliance audits from days to minutes — everything traceable by role and timestamp',
        'Zero lost documentation since deploy',
      ],
    },
    stackNotes: [
      { tech: 'Next.js + PWA', reason: { es: 'App instalable en tablets del almacén; funciona sin WiFi interno', en: 'Installable on warehouse tablets; works without internal WiFi' } },
      { tech: 'PostgreSQL', reason: { es: 'Trazabilidad completa: incidentes, roles, timestamps, fotos — nada se borra', en: 'Full traceability: incidents, roles, timestamps, photos — nothing deleted' } },
      { tech: 'Docker', reason: { es: 'Deploy reproducible en servidor on-premise de la empresa; cero dependencia de cloud', en: 'Reproducible deploy on company\'s on-premise server; zero cloud dependency' } },
    ],
    mockup: [
      '$ safety --module=inspections --role=supervisor',
      '',
      '  ┌──────────────────────────────────────┐',
      '  │ Inspección Diaria · Almacén A        │',
      '  │ 2025-05-13  08:34  · Hector A.       │',
      '  ├──────────────────────────────────────┤',
      '  │ ✓ Extintores verificados  (3/3)      │',
      '  │ ✓ Señalización visible    (ok)       │',
      '  │ ⚠ Ventilación zona 4     → revisar  │',
      '  │ ✓ EPP disponible          (ok)       │',
      '  ├──────────────────────────────────────┤',
      '  │ [Firmar y enviar]  [offline ✓]       │',
      '  └──────────────────────────────────────┘',
    ],
  },
  {
    slug: 'bj-architect',
    title: 'bj-architect',
    year: '2024',
    kind: { es: 'herramienta personal', en: 'personal tool' },
    tagline: {
      es: 'Asistente de estrategia para Blackjack en tiempo real. Motor de decisión óptima con historial de sesión.',
      en: 'Real-time Blackjack strategy assistant. Optimal decision engine with session history.',
    },
    featured: false,
    github: 'https://github.com/HectorAlmonte',
    stack: ['Next.js 16', 'TypeScript', 'SQLite', 'Drizzle ORM'],
    status: { es: 'En uso activo', en: 'Actively used' },
    problem: {
      es: 'Aprender la estrategia básica del Blackjack requiere memorizar tablas de decisión complejas (hit/stand/double/split) para cada combinación de mano y carta visible del dealer. Sin práctica guiada, la curva de aprendizaje es lenta y costosa.',
      en: 'Learning Blackjack basic strategy requires memorizing complex decision tables (hit/stand/double/split) for each hand combination and dealer visible card. Without guided practice, the learning curve is slow and expensive.',
    },
    solution: {
      es: 'Asistente que muestra la jugada óptima en tiempo real para cualquier combinación posible. Motor de decisión basado en las tablas de estrategia básica estándar. Historial de sesión persistente para analizar qué decisiones se tomaron vs. cuál era la óptima.',
      en: 'Assistant that shows the optimal play in real time for any possible combination. Decision engine based on standard basic strategy tables. Persistent session history to analyze which decisions were made vs. what was optimal.',
    },
    impact: {
      es: [
        'Decisión óptima en < 50ms para cualquier combinación de cartas',
        'Historial de sesión persistente con análisis de errores por tipo de mano',
        'Reducción de error de estrategia del ~30% al ~5% en sesiones de práctica',
      ],
      en: [
        'Optimal decision in < 50ms for any card combination',
        'Persistent session history with error analysis by hand type',
        'Strategy error reduction from ~30% to ~5% in practice sessions',
      ],
    },
    stackNotes: [
      { tech: 'SQLite + Drizzle ORM', reason: { es: 'Herramienta personal de un solo usuario — SQLite es perfecto; Drizzle da type-safety sin overhead', en: 'Single-user personal tool — SQLite is perfect; Drizzle gives type-safety without overhead' } },
      { tech: 'Next.js 16', reason: { es: 'App interactiva con estado reactivo; no necesita API externa ni auth', en: 'Interactive app with reactive state; no external API or auth needed' } },
    ],
    mockup: [
      '$ bj-architect --hand="A,7" --dealer="6"',
      '',
      '  Tu mano: A + 7 = soft 18',
      '  Dealer muestra: 6',
      '',
      '  ┌────────────────────────────────┐',
      '  │  DECISIÓN ÓPTIMA              │',
      '  │                               │',
      '  │  ▸ DOBLAR                     │',
      '  │    (double down)              │',
      '  │                               │',
      '  │  EV: +0.18  vs Stand: +0.12  │',
      '  └────────────────────────────────┘',
      '',
      '  sesión actual: 23 manos · 91% correcto',
    ],
  },
  {
    slug: 'portfolio',
    title: 'portfolio',
    year: '2024',
    kind: { es: 'proyecto personal', en: 'personal project' },
    tagline: {
      es: 'Este portafolio. Astro 5, TailwindCSS, tema Terminal Evolved, soporte bilingüe ES/EN.',
      en: 'This portfolio. Astro 5, TailwindCSS, Terminal Evolved theme, ES/EN bilingual support.',
    },
    featured: false,
    github: 'https://github.com/HectorAlmonte/portafolio',
    demo: 'https://portafolio-eight-self-36.vercel.app',
    stack: ['Astro 5', 'TailwindCSS', 'TypeScript', 'EmailJS'],
    status: { es: 'En producción · Este sitio', en: 'In production · This site' },
    problem: {
      es: 'Necesitaba un portfolio que reflejara mi forma de pensar como desarrollador — estructurado, directo, con personalidad — sin caer en los templates genéricos de "tarjetas y gradientes" que inundan los portfolios de frontend.',
      en: 'I needed a portfolio that reflected how I think as a developer — structured, direct, with personality — without falling into the generic "cards and gradients" templates that flood frontend portfolios.',
    },
    solution: {
      es: 'Diseño Terminal Evolved: tipografía monoespaciada, paleta oscura con acento #a6f55b, REPL interactivo funcional con comandos reales y easter eggs, animaciones de conteo y scroll, soporte bilingüe ES/EN completo con ViewTransitions de Astro.',
      en: 'Terminal Evolved design: monospace typography, dark palette with #a6f55b accent, functional interactive REPL with real commands and easter eggs, count-up and scroll animations, full ES/EN bilingual support with Astro ViewTransitions.',
    },
    impact: {
      es: [
        'REPL interactivo con 10+ comandos reales y easter eggs (prueba: sudo hire-me)',
        'Bilingüe ES/EN con rutas separadas y transiciones entre páginas',
        'Build estático — 12 páginas generadas, cero JS de framework en el cliente',
      ],
      en: [
        'Interactive REPL with 10+ real commands and easter eggs (try: sudo hire-me)',
        'ES/EN bilingual with separate routes and page transitions',
        'Static build — 12 generated pages, zero framework JS on the client',
      ],
    },
    stackNotes: [
      { tech: 'Astro 5', reason: { es: 'Islands architecture — JS solo donde hay interactividad; SSG para todo lo demás; build rapidísimo', en: 'Islands architecture — JS only where there\'s interactivity; SSG for everything else; very fast build' } },
      { tech: 'TailwindCSS + CSS vars', reason: { es: 'Utilidades para layout; variables CSS para el tema Terminal — fácil de cambiar sin tocar componentes', en: 'Utilities for layout; CSS variables for Terminal theme — easy to change without touching components' } },
      { tech: 'EmailJS', reason: { es: 'Formulario de contacto funcional sin backend ni servidor propio — cero infraestructura extra', en: 'Working contact form without backend or own server — zero extra infrastructure' } },
    ],
    mockup: [
      '$ whoami',
      'Hector Almonte · Full Stack Developer',
      'Ilo, Perú · GMT-05:00',
      '',
      '$ help',
      '  whoami     quién soy',
      '  about      sobre mí',
      '  projects   proyectos destacados',
      '  stack      tecnologías que uso',
      '  contact    cómo escribirme',
      '  cv         descargar mi CV',
      '',
      '$ sudo hire-me',
      '[sudo] password for hector: ••••••••',
      'Permission granted. → opening contact.sh ...',
    ],
  },
];
