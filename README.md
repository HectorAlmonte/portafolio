# Hector Almonte — Portfolio

Portafolio personal desarrollado con Astro 5, TailwindCSS y GSAP. Tema terminal/hacker con animaciones, soporte bilingüe ES/EN y formulario de contacto funcional.

🌐 **Live:** [portafolio-eight-self-36.vercel.app](https://portafolio-eight-self-36.vercel.app)

---

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Astro 5 |
| Estilos | TailwindCSS 3 |
| Animaciones | GSAP 3 + ScrollTrigger |
| Contacto | EmailJS |
| i18n | ES / EN (rutas dinámicas) |
| Deploy | Vercel |

---

## Características

- **Matrix rain** en el Hero con canvas animado
- **Typewriter** secuencial en la terminal del Hero
- **Timeline** de experiencia con animaciones GSAP
- **Skill grid** estilo `ls` de terminal
- **Stats** con contadores animados
- **Scroll animations** con Intersection Observer
- **Glitch hover** en tarjetas de proyectos
- **View Transitions** entre páginas (Astro nativo)
- **Navbar móvil** con menú hamburger
- **Formulario de contacto** funcional con EmailJS
- **CV descargable** en PDF
- **Página 404** con terminal animada
- **Open Graph** para redes sociales
- Bilingüe **ES / EN**

---

## Correr en local

```bash
npm install
npm run dev
```

Disponible en [http://localhost:4321](http://localhost:4321)

---

## Deploy

```bash
npm run build   # genera dist/
```

Desplegado automáticamente en Vercel con cada push a `main`.

---

## Estructura

```
src/
├── components/
│   ├── Hero.astro        # Terminal con Matrix rain + typewriter
│   ├── Experience.astro  # Timeline de experiencia
│   ├── Stats.astro       # Contadores animados
│   ├── ProjectCard.astro # Tarjeta con glitch hover
│   ├── Navbar.astro      # Nav responsive con CV download
│   └── Footer.astro
├── pages/
│   ├── index.astro       # Redirect a /es/
│   ├── 404.astro         # Página 404 terminal
│   └── [lang]/           # Rutas ES/EN
│       ├── index.astro
│       ├── about.astro
│       ├── projects.astro
│       └── contact.astro
├── i18n/
│   ├── translations.ts   # Textos ES/EN
│   └── utils.ts
├── layouts/
│   └── Layout.astro      # Layout base con OG + ViewTransitions
└── styles/
    └── global.css
```

---

Hecho con Astro + TailwindCSS + GSAP
