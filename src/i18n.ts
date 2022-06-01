import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { Translations } from "./translations/translations";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    supportedLngs: ["en", "pl"],
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      lookupQuerystring: "lang",
      lookupLocalStorage: "language",
      caches: []
    },
    resources: {
      en: { translation: Translations.translationEnglish },
      pl: { translation: Translations.translationPolish }
    }
  });

export default i18n;