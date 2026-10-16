export const languages = ['es', 'en'] as const;
export type Lang = (typeof languages)[number];

export const defaultLang: Lang = 'es';

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    common: {
      cv: 'Descargar CV',
      cvShort: 'CV',
      menu: 'Abrir menú',
      close: 'Cerrar menú',
      langSwitch: 'Read in English',
      skip: 'Saltar al contenido',
      location: 'Ilo, Perú',
    },
    footer: {
      title: ['¿Construimos', 'algo juntos?'],
      text: 'Busco roles full stack remotos y proyectos de sistemas a medida. Respondo en menos de 24 horas.',
      write: 'Escríbeme',
      made: 'Hecho a mano en Ilo, Perú.',
    },
    meta: {
      defaultDesc: 'Hector Almonte, Desarrollador Full Stack en Ilo, Perú. Sistemas industriales en producción: React, Next.js, Node.js, .NET, PostgreSQL.',
      about: 'Sobre Hector Almonte: Ingeniero de Sistemas y Desarrollador Full Stack, Supervisor de Sistemas en Global Plus.',
      projects: 'Proyectos de Hector Almonte: PWAs offline, monitoreo de flotas, seguridad industrial y más.',
      contact: 'Contacta a Hector Almonte para roles full stack remotos o proyectos a medida.',
    },
    shortcuts: {
      title: 'Atajos de teclado',
      home: 'Inicio',
      about: 'Sobre mí',
      projects: 'Proyectos',
      contact: 'Contacto',
      github: 'GitHub',
      toggle: 'Mostrar atajos',
      close: 'Cerrar',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    common: {
      cv: 'Download CV',
      cvShort: 'CV',
      menu: 'Open menu',
      close: 'Close menu',
      langSwitch: 'Leer en español',
      skip: 'Skip to content',
      location: 'Ilo, Peru',
    },
    footer: {
      title: ["Let's build", 'something together'],
      text: 'Open to remote full stack roles and custom systems projects. I reply within 24 hours.',
      write: 'Write to me',
      made: 'Handmade in Ilo, Peru.',
    },
    meta: {
      defaultDesc: 'Hector Almonte, Full Stack Developer in Ilo, Peru. Industrial software in production: React, Next.js, Node.js, .NET, PostgreSQL.',
      about: 'About Hector Almonte: Systems Engineer and Full Stack Developer, Systems Supervisor at Global Plus.',
      projects: 'Projects by Hector Almonte: offline PWAs, fleet monitoring, industrial safety and more.',
      contact: 'Contact Hector Almonte about remote full stack roles or custom projects.',
    },
    shortcuts: {
      title: 'Keyboard shortcuts',
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      github: 'GitHub',
      toggle: 'Show shortcuts',
      close: 'Close',
    },
  },
} as const;
