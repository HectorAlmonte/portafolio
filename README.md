# Hector Almonte — Portfolio

Portafolio personal de Hector Almonte, Desarrollador Full Stack en Ilo, Perú. Un paisaje ilustrado al atardecer, dibujado por capas en SVG, que se recorre de arriba hacia abajo: cielo, arena, bosque y noche.

🌐 **Live:** [hectoralmonte.com](https://hectoralmonte.com)

---

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Astro 5 (estático) |
| Estilos | CSS propio con tokens + Tailwind (reset y utilidades) |
| Paisaje | SVG por capas generado en build (`src/lib/scene.ts`) |
| Contacto | Web3Forms |
| SEO | Sitemap, hreflang ES/EN, Open Graph (`public/og.png`) |
| i18n | ES / EN (rutas `/es/` y `/en/`) |
| Deploy | Vercel |

## Características

- **Escena con parallax:** cada capa (sol, picos, crestas, bosques) se desplaza a su propia profundidad al hacer scroll; el titular vive entre las capas.
- **Bosques deterministas:** las líneas de árboles se generan en build con semillas fijas, sin imágenes pesadas.
- **Secciones que descienden** por el paisaje, unidas por siluetas (colinas, picos, árboles).
- **Respeta `prefers-reduced-motion`.**
- Menú móvil a pantalla completa, atajos de teclado (`?`), formulario de contacto con validación, CV descargable en ES/EN.

El sistema de diseño está documentado en [DESIGN.md](DESIGN.md) y el contexto de producto en [PRODUCT.md](PRODUCT.md).

## Correr en local

```bash
npm install
npm run dev
```

Disponible en [http://localhost:4321](http://localhost:4321)

## Estructura

```
src/
├── components/
│   ├── Scene.astro       # Paisaje por capas + parallax (hero y franjas)
│   ├── Ridge.astro       # Silueta que une dos secciones
│   ├── Navbar.astro      # Navegación dentro de la escena
│   ├── MobileMenu.astro  # Menú móvil a pantalla completa
│   ├── ProjectRows.astro # Lista de proyectos
│   ├── Timeline.astro    # Trayectoria
│   ├── Footer.astro      # Noche estrellada + llamado a contacto
│   ├── Icon.astro / Mark.astro
├── data/                 # projects.ts, experience.ts
├── i18n/                 # translations.ts, utils.ts (URLs del sitio, links)
├── lib/scene.ts          # Generadores de árboles y colinas
├── layouts/Layout.astro  # SEO, fuentes, atajos, revelado al scroll
├── pages/                # /[lang]/, about, projects, projects/[slug], contact, 404
└── styles/global.css     # Tokens de color, tipografía y movimiento
```
