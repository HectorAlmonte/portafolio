# Capturas de proyectos

Una carpeta por proyecto, con el mismo nombre que su `slug` en `src/data/projects.ts`:

```
src/assets/projects/
├── gre-materiales/
│   ├── 01-busqueda.png         ← la primera de escritorio es la portada
│   ├── 02-detalle-material.png
│   └── 03-escaner-ocr-mobile.png  ← "mobile" en el nombre = marco de teléfono
├── industrial-safety/
├── rindex/
└── ...
```

- Se muestran en orden de nombre: usa prefijos `01-`, `02-`…
- El texto después del número se usa como pie de foto y texto alternativo: `02-detalle-material` → "detalle material".
- Escritorio: 1440×900 (o 2880×1800 para pantallas retina). Móvil: 390×844.
- PNG, JPG o WebP. Astro las optimiza solo; no hace falta comprimirlas antes.
- Usa datos de prueba: nada de nombres de clientes, empleados ni datos reales.
