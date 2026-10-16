import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hectoralmonte.com',
  integrations: [
    tailwind(),
    sitemap({
      filter: page => page !== 'https://hectoralmonte.com/',
      // match the canonical URLs: no trailing slash except the language homes
      serialize: item => {
        const clean = url => (/\/(es|en)\/$/.test(url) ? url : url.replace(/\/$/, ''));
        item.url = clean(item.url);
        item.links = item.links?.map(l => ({ ...l, url: clean(l.url) }));
        return item;
      },
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-PE', en: 'en-US' },
      },
    }),
  ],
});
