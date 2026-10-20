import type { ImageMetadata } from 'astro';

// Screenshots live in src/assets/projects/<slug>/. Files are shown in name order,
// so prefix them: 01-busqueda.png, 02-escaner.png… A name containing "mobile"
// is framed as a phone; everything else as a browser window.
const files = import.meta.glob<ImageMetadata>(
  '/src/assets/projects/*/*.{png,jpg,jpeg,webp,avif}',
  { eager: true, import: 'default' }
);

export interface Shot {
  src: ImageMetadata;
  /** readable label from the file name: "02-escaner-ocr" -> "escaner ocr" */
  label: string;
  mobile: boolean;
}

export function getShots(slug: string): Shot[] {
  return Object.entries(files)
    .filter(([path]) => path.split('/').at(-2) === slug)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, src]) => {
      const name = path.split('/').at(-1)!.replace(/\.[^.]+$/, '');
      return {
        src,
        label: name.replace(/^\d+[-_ ]*/, '').replace(/[-_]+/g, ' ').replace(/\bmobile\b/i, '').trim(),
        mobile: /mobile/i.test(name),
      };
    });
}
