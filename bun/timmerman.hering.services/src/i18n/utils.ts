// src/i18n/utils.ts
import en from "./en.json";
import nl from "./nl.json";

export const languages = {
  en: "English",
  nl: "Nederlands",
};

export const defaultLang = "nl";
export const showDefaultLang = true;

const dictionaries = { en, nl };

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in dictionaries) return lang as keyof typeof dictionaries;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof dictionaries) {
  return function t(key: string) {
    return (
      key.split(".").reduce((obj, k) => obj && obj[k], dictionaries[lang]) ||
      key
    );
  };
}
export function useTranslatedPath(lang: keyof typeof dictionaries) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}
