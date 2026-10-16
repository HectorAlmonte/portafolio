import { translations, languages, defaultLang, type Lang } from './translations';

export const SITE = 'https://hectoralmonte.com';
export const EMAIL = 'hectoralmoten@gmail.com';
export const GITHUB = 'https://github.com/HectorAlmonte';
export const LINKEDIN = 'https://www.linkedin.com/in/hector-almonte-788a4a212/';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (languages.includes(lang as Lang)) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return translations[lang];
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}

export function getLocalizedPath(currentPath: string, targetLang: Lang): string {
  const parts = currentPath.split('/').filter(Boolean);
  if (languages.includes(parts[0] as Lang)) parts.shift();
  const rest = parts.join('/');
  return rest ? `/${targetLang}/${rest}` : `/${targetLang}/`;
}

export function cvPath(lang: Lang) {
  return lang === 'es' ? '/hector-almonte-cv-es.pdf' : '/hector-almonte-cv-en.pdf';
}

export function navLinks(lang: Lang) {
  const t = translations[lang].nav;
  return [
    { id: '',         href: `/${lang}/`,         label: t.home },
    { id: 'about',    href: `/${lang}/about`,    label: t.about },
    { id: 'projects', href: `/${lang}/projects`, label: t.projects },
    { id: 'contact',  href: `/${lang}/contact`,  label: t.contact },
  ];
}

/** id of the current top-level page, '' for home */
export function currentSection(pathname: string) {
  return pathname.split('/').filter(Boolean)[1] ?? '';
}
