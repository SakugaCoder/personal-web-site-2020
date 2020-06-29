import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
        en: {
            translation: {
                "brand": "DIEGO",
                "about": "ABOUT",
                "projects": "PROJECTS",
                "contact": "CONTACT",
                "carrier": "SOFTWARE ENGINEER",
                "cv": "Download Resume",
                "about-title": "About"
            }
        },
        es:{
            translation:{
                "brand": "DIEGO",
                "about": "ACERCA",
                "projects": "PROYECTOS",
                "contact": "CONTACTO",
                "carrier": "INGENIERO DE SOFTWARE",
                "cv": "Descargar CV",
                "about-title": "Acerca de mi"
          }
        },
        jp:{
            translation:{
                "brand": "ディエゴ",
                "about": "約",
                "projects": "プロジェクト",
                "contact": "連絡先",
                "carrier": "ソフトウェアエンジニア",
                "cv": "ダウンロード履歴書",
                "about-title": "私について"
            }
        }
    },
    lng: "en",
    fallbackLng: "en",
    whitelist: ["en", "es", "jp"],
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;