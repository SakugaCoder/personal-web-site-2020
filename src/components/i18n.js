import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import englishTranslation from '../translation/English';
import spanishTranslation from '../translation/Spanish';
import japaneseTranslation from '../translation/Japanese';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources: {
        en: englishTranslation,
        es: spanishTranslation,
        jp: japaneseTranslation
    },
    lng: "en",
    fallbackLng: "en",
    whitelist: ["en", "es", "jp"],
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;