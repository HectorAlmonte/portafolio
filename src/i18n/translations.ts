export const languages = ['es', 'en'] as const;
export type Lang = (typeof languages)[number];

export const defaultLang: Lang = 'es';

export const translations = {
  es: {
    nav: {
      home: '~',
      about: 'about',
      projects: 'projects',
      contact: 'contact',
    },
    hero: {
      bio: 'Desarrollador Full Stack con 4+ años construyendo\nsistemas web y de escritorio. Actualmente Supervisor\nde Sistemas en Global Plus, Ilo, Perú.',
      viewProjects: 'Ver proyectos →',
      contact: 'Contactar',
    },
    index: {
      featuredCmd: 'ls ~/projects --featured',
      viewAll: 'ver todos →',
    },
    about: {
      title: 'Sobre mí',
      cmd: '$ cat about.md',
      bio1: 'Soy Hector Gabriel Almonte Salazar, Ingeniero de Sistemas y Desarrollador Full Stack con más de 4 años de experiencia construyendo aplicaciones web, APIs y sistemas de escritorio para entornos productivos reales.',
      bio2: 'Me especializo en llevar ideas desde el diseño hasta producción, trabajando tanto en frontend como backend. Disfruto resolver problemas complejos, optimizar procesos y construir software que impacta directamente en las operaciones del negocio.',
      statusLabel: '// estado actual',
      status: [
        'Supervisor de Sistemas en Global Plus',
        'Desarrollando sistema de seguridad industrial',
        'Abierto a nuevas oportunidades remotas',
      ],
      stackCmd: '$ cat stack.json',
    },
    projects: {
      title: 'Proyectos',
      cmd: '$ ls -la ~/projects/',
      count: (n: number) => `${n} proyectos — ordenados por relevancia`,
    },
    contact: {
      title: 'Contacto',
      cmd: '$ ping hector',
      responseTime: 'Tiempo de respuesta promedio: < 24h',
      formLabel: '// enviar mensaje',
      nameLabel: 'nombre',
      namePlaceholder: 'tu_nombre',
      emailLabel: 'email',
      emailPlaceholder: 'tu@email.com',
      messageLabel: 'mensaje',
      messagePlaceholder: 'Hola Hector, me interesa...',
      submit: '$ send message',
      directLabel: '// canales directos',
      availLabel: '// disponibilidad',
      available: 'Disponible para nuevos proyectos',
    },
    footer: {
      contact: 'Contacto',
    },
    meta: {
      defaultDesc: 'Hector Almonte — Desarrollador Full Stack | React, Node.js, Next.js, TypeScript',
      about: 'Sobre mí — Hector Almonte, Desarrollador Full Stack',
      projects: 'Proyectos — Hector Almonte',
      contact: 'Contacto — Hector Almonte',
    },
    featuredProjects: [
      {
        title: 'gre-materiales',
        description: 'Sistema PWA para consulta de 2 661 materiales peligrosos (GRE 2024). Búsqueda en tiempo real, escáner OCR de rombos ADR, modo offline con IndexedDB y panel multi-tenant.',
      },
      {
        title: 'rindex',
        description: 'Plataforma de evaluación académica con roles (Admin, Career Admin, Student), exámenes temporizados, puntaje ponderado por sección y análisis de rendimiento con gráficas.',
      },
    ],
    projectData: [
      {
        title: 'gre-materiales',
        description: 'Sistema PWA para consulta de 2 661 materiales peligrosos (GRE 2024). Búsqueda en tiempo real, escáner OCR de rombos ADR por cámara, distancias de aislamiento, modo offline con IndexedDB y arquitectura multi-tenant.',
      },
      {
        title: 'rindex',
        description: 'Plataforma de evaluación académica con 3 niveles de roles, exámenes temporizados con aleatorización, puntaje ponderado por sección, reportes de rendimiento y gráfica de evolución histórica.',
      },
      {
        title: 'agrosoft-gis',
        description: 'Sistema de gestión agrícola con visualización geoespacial en tiempo real: mapeo GPS de rutas de maquinaria, seguimiento de velocidad y sistema de alertas por orden de trabajo.',
      },
      {
        title: 'sistema-alertas',
        description: 'Sistema de monitoreo y alertas para maquinaria agrícola. Control de ubicación, velocidad y estado operativo en función de órdenes de trabajo asignadas. Backend Node.js + SQL Server.',
      },
      {
        title: 'bj-architect',
        description: 'Asistente de estrategia para Blackjack en tiempo real. Motor de decisión que recomienda la jugada matemáticamente óptima (Pedir, Plantarse, Doblar, Dividir) con historial persistente y seguimiento de sesión.',
      },
    ],
  },
  en: {
    nav: {
      home: '~',
      about: 'about',
      projects: 'projects',
      contact: 'contact',
    },
    hero: {
      bio: 'Full Stack Developer with 4+ years building\nweb and desktop systems. Currently Systems\nSupervisor at Global Plus, Ilo, Peru.',
      viewProjects: 'View projects →',
      contact: 'Contact',
    },
    index: {
      featuredCmd: 'ls ~/projects --featured',
      viewAll: 'view all →',
    },
    about: {
      title: 'About me',
      cmd: '$ cat about.md',
      bio1: "I'm Hector Gabriel Almonte Salazar, a Systems Engineer and Full Stack Developer with 4+ years of experience building web applications, APIs, and desktop systems for real production environments.",
      bio2: 'I specialize in taking ideas from design to production, working across frontend and backend. I enjoy solving complex problems, optimizing processes, and building software that directly impacts business operations.',
      statusLabel: '// current status',
      status: [
        'Systems Supervisor at Global Plus',
        'Building an industrial safety system',
        'Open to new remote opportunities',
      ],
      stackCmd: '$ cat stack.json',
    },
    projects: {
      title: 'Projects',
      cmd: '$ ls -la ~/projects/',
      count: (n: number) => `${n} projects — sorted by relevance`,
    },
    contact: {
      title: 'Contact',
      cmd: '$ ping hector',
      responseTime: 'Average response time: < 24h',
      formLabel: '// send message',
      nameLabel: 'name',
      namePlaceholder: 'your_name',
      emailLabel: 'email',
      emailPlaceholder: 'you@email.com',
      messageLabel: 'message',
      messagePlaceholder: "Hi Hector, I'm interested in...",
      submit: '$ send message',
      directLabel: '// direct channels',
      availLabel: '// availability',
      available: 'Available for new projects',
    },
    footer: {
      contact: 'Contact',
    },
    meta: {
      defaultDesc: 'Hector Almonte — Full Stack Developer | React, Node.js, Next.js, TypeScript',
      about: 'About me — Hector Almonte, Full Stack Developer',
      projects: 'Projects — Hector Almonte',
      contact: 'Contact — Hector Almonte',
    },
    featuredProjects: [
      {
        title: 'gre-materiales',
        description: 'PWA system for consulting 2,661 hazardous materials (ERG 2024). Real-time search, ADR diamond OCR scanner, offline mode with IndexedDB, and multi-tenant panel.',
      },
      {
        title: 'rindex',
        description: 'Academic evaluation platform with role-based access (Admin, Career Admin, Student), timed exams, weighted scoring per section, and performance analytics.',
      },
    ],
    projectData: [
      {
        title: 'gre-materiales',
        description: 'PWA for consulting 2,661 hazardous materials (ERG 2024). Real-time search, camera-based ADR diamond OCR scanner, isolation distances, offline mode with IndexedDB, and multi-tenant architecture.',
      },
      {
        title: 'rindex',
        description: 'Academic evaluation platform with 3-level role system, timed exams with randomization, weighted section scoring, performance reports, and historical score evolution charts.',
      },
      {
        title: 'agrosoft-gis',
        description: 'Agricultural management system with real-time geospatial visualization: GPS route mapping of machinery, speed tracking, and work-order-based alert system.',
      },
      {
        title: 'sistema-alertas',
        description: 'Monitoring and alert system for agricultural machinery. Location, speed, and operational status control based on assigned work orders. Node.js + SQL Server backend.',
      },
      {
        title: 'bj-architect',
        description: 'Real-time Blackjack strategy assistant. Decision engine recommending the mathematically optimal play (Hit, Stand, Double, Split) with persistent hand history and session tracking.',
      },
    ],
  },
} as const;
