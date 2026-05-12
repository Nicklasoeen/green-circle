export type Lang = 'nb' | 'en';

export const defaultLang: Lang = 'nb';

export function getLangFromPath(pathname: string): Lang {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : defaultLang;
}

export function getHomePath(lang: Lang) {
  return lang === 'en' ? '/en/' : '/';
}

export function getBrochurePath(lang: Lang) {
  return lang === 'en' ? '/en/brochure' : '/brosjyre';
}

export function getAlternatePath(pathname: string, lang: Lang) {
  if (lang === 'en') {
    return pathname.includes('/brochure') ? getBrochurePath('nb') : getHomePath('nb');
  }

  return pathname.includes('/brosjyre') ? getBrochurePath('en') : getHomePath('en');
}
