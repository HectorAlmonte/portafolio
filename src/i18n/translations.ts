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
      bio: 'Construyo aplicaciones web modernas de alto rendimiento,\ndesde la UI hasta la API. Apasionado por el código limpio\ny las buenas experiencias de usuario.',
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
      bio1: 'Soy un desarrollador Full Stack apasionado por construir productos digitales que combinan buena arquitectura con gran experiencia de usuario.',
      bio2: 'Me enfoco en escribir código limpio, escalable y bien documentado. Disfruto tanto del lado del servidor como del cliente, y me gusta automatizar todo lo que pueda con CI/CD y contenedores.',
      statusLabel: '// estado actual',
      status: [
        'Disponible para freelance',
        'Buscando oportunidades full-time',
        'Aprendiendo Rust y sistemas distribuidos',
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
      defaultDesc: 'Portafolio de Full Stack Developer',
      about: 'Sobre mí — Hector, Full Stack Developer',
      projects: 'Proyectos — Hector Full Stack Developer',
      contact: 'Contacto — Hector Full Stack Developer',
    },
    featuredProjects: [
      {
        title: 'project-alpha',
        description: 'Aplicación full stack con autenticación, API REST y dashboard en tiempo real.',
      },
      {
        title: 'project-beta',
        description: 'E-commerce con carrito, pagos y panel de administración.',
      },
    ],
    projectData: [
      {
        title: 'project-alpha',
        description: 'Aplicación full stack con autenticación JWT, API REST y dashboard en tiempo real con WebSockets.',
      },
      {
        title: 'project-beta',
        description: 'E-commerce completo con carrito persistente, pagos con Stripe y panel de administración.',
      },
      {
        title: 'project-gamma',
        description: 'CLI tool para automatizar tareas de desarrollo: scaffolding, deploy y generación de docs.',
      },
      {
        title: 'project-delta',
        description: 'API de microservicios con mensajería asíncrona, rate limiting y observabilidad.',
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
      bio: "I build high-performance modern web applications,\nfrom UI to API. Passionate about clean code\nand great user experiences.",
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
      bio1: "I'm a Full Stack developer passionate about building digital products that combine great architecture with exceptional user experience.",
      bio2: 'I focus on writing clean, scalable, and well-documented code. I enjoy both server-side and client-side development, and I love automating everything possible with CI/CD and containers.',
      statusLabel: '// current status',
      status: [
        'Available for freelance',
        'Looking for full-time opportunities',
        'Learning Rust and distributed systems',
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
      defaultDesc: 'Full Stack Developer Portfolio',
      about: 'About me — Hector, Full Stack Developer',
      projects: 'Projects — Hector Full Stack Developer',
      contact: 'Contact — Hector Full Stack Developer',
    },
    featuredProjects: [
      {
        title: 'project-alpha',
        description: 'Full stack app with authentication, REST API, and real-time dashboard.',
      },
      {
        title: 'project-beta',
        description: 'E-commerce with cart, Stripe payments, and admin panel.',
      },
    ],
    projectData: [
      {
        title: 'project-alpha',
        description: 'Full stack app with JWT authentication, REST API, and real-time dashboard with WebSockets.',
      },
      {
        title: 'project-beta',
        description: 'Full e-commerce with persistent cart, Stripe payments, and admin dashboard.',
      },
      {
        title: 'project-gamma',
        description: 'CLI tool to automate development tasks: scaffolding, deployment, and doc generation.',
      },
      {
        title: 'project-delta',
        description: 'Microservices API with async messaging, rate limiting, and observability.',
      },
    ],
  },
} as const;
