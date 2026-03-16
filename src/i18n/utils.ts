import { translations, languages, defaultLang, type Lang } from './translations';

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
