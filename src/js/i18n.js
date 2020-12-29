import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources: {
        en: {
            translation: {
                "en": "ENGLISH",
                "sp": "SPANISH",
                "jp": "JAPANESE",
                "brand": "DIEGO",
                "about": "ABOUT",
                "projects": "PROJECTS",
                "contact": "CONTACT",
                "carrier": "SOFTWARE ENGINEER",
                "cv": "RESUME",
                "cv-pdf": "./assets/docs/BTDF_CV_ENG_2.pdf",
                "salutate": 'Hi, I am',
                "full-name": "Diego Fernando Trenado",
                "goal":"I transform ideas into real things",
                "contact": 'CONTACT',
                "about-title": "About",
                "about-me": `I am a Software Engineer with experience in Frontend, Backend, Mobile and Desktop development. I have professional experience developing web apps.
                I like to connect and create interfaces between real and digital world. I develop functional and appealing systems and UI.`,
                "tech-stack": "MY TECH STACK",
                "contact-me": "CONTACT",
                "email": "Email",
                "name": "Name",
                "message": "Message",
                "send": "SEND",
                "reset": "RESET",
                "developed": "Developed by",

                "recent-projects": "RECENT PROJECTS",

                "name-project-1": "Automotive Parts Detection",
                "tech-project-1": "Python, Tensorflow, Google Maps API",
                "description-project-1": "Image classification model to detect automotive parts and locate near by shops on Google Maps for replacement. Implemented with a tkinter GUI.",
                "img-project-1": "/assets/images/projects/apd.png",
                "github-project-1": "https://github.com/SakugaCoder/Automotive-parts-detection",

                "name-project-2": "Wireless controller glove for business presentations",
                "tech-project-2": "Python, Pyserial, pyAutoGUI, Arudino, 433 Mhz Module",
                "description-project-2": "Wearable made with arduino which sends commands via 433 MHz modules for remote PC control with the PyAutoGUI library",
                "img-project-2": "/assets/images/projects/gc.png",
                "github-project-2": "https://github.com/SakugaCoder/GloveController",

                "name-project-3": "Buy list system made with React JS, Flask and MongoDB",
                "tech-project-3": "React JS, React Router, Fetch, Bootstrap, MongoDB, Python, Flask",
                "description-project-3": "Buy list system created using React JS with CRUD operations made on a Flask app with MongoDB",
                "img-project-3": "/assets/images/projects/tbapp.jpg",
                "github-project-3": "https://github.com/SakugaCoder/ThingsToBuy-ReactJS"
            }
        },
        es:{
            translation:{
                "en": "INGLES",
                "sp": "ESPAÑOL",
                "jp": "JAPONES",
                "brand": "DIEGO",
                "about": "ACERCA",
                "projects": "PROYECTOS",
                "contact": "CONTACTO",
                "carrier": "INGENIERO DE SOFTWARE",
                "cv": "DESCARGAR CV",
                "cv-pdf": "./assets/docs/BTDF_CV_2.pdf",
                "salutate": 'Hola, Yo soy',
                "full-name": 'Diego Fernando Trenado',
                "goal": 'Transformo ideas en productos tangibles',
                "contact": 'CONTACTO',
                "about-title": "Acerca de mi",
                "about-me": `Soy un ingeniero de software con experiencia en desarrollo frontend, backend, móvil y de escritorio. Tengo experiencia profesional creando aplicaciones web.
                 Me gusta conectar y crear interfaces entre el mundo real y lo digital. Desarrollo sistemas/interfaces funcionales y atractivos.`,
                "tech-stack": "TECNOLOGíAS QUE USO",
                "contact-me": "CONTACTO",
                "email": "Correo",
                "name": "Nombre",
                "message": "Mensaje",
                "send": "ENVIAR",
                "reset": "REINICIAR",
                "developed": "Desarrollado",

                "recent-projects": "PROYECTOS RECIENTES",

                "name-project-1": "Detección de partes automotrices",
                "tech-project-1": "Python, Tensorflow, Google Maps API",
                "description-project-1": "Modelo de clasificación de imagenes para detección de partes automotrices y localización de tiendas cercanas para su remplazo. Implementado en una interfaz gráfica con Tkiner",
                "img-project-1": "/assets/images/projects/apd.png",
                "github-project-1": "https://github.com/SakugaCoder/Automotive-parts-detection",

                "name-project-2": "Guante controlador inalámbrico para presentaciones empresariales",
                "tech-project-2": "Python, Pyserial, pyAutoGUI, Arudino, 433 Mhz Module",
                "description-project-2": "Wearable hecho con Arduino que envia commandos a travez de un modulo de 433 MHz para control remoto de una PC por medio de la libreria PyAutoGUI",
                "img-project-2": "/assets/images/projects/gc.png",
                "github-project-2": "https://github.com/SakugaCoder/GloveController",

                "name-project-3": "Sistema para lista de compras hecho con React JS, Flask y MongoDB",
                "tech-project-3": "React JS, React Router, Fetch, Bootstrap, MongoDB, Python, Flask",
                "description-project-3": "Sistema para lista de compras creado usando React JS con operaciones CRUD ejecutadas en una aplicación Flask con MongoDB",
                "img-project-3": "/assets/images/projects/tbapp.jpg",
                "github-project-3": "https://github.com/SakugaCoder/ThingsToBuy-ReactJS"
          }
        },
        jp:{
            translation:{
                "en": "英語",
                "sp": "スペイン語",
                "jp": "日本人",
                "brand": "ディエゴ",
                "about": "約",
                "projects": "プロジェクト",
                "contact": "連絡先",
                "carrier": "ソフトウェアエンジニア",
                "cv": "履歴書",
                "cv-pdf": "./assets/docs/BTDF_CV_ENG_2.pdf",
                "salutate": 'こんにちは、私は',
                "full-name": 'ディエゴフェルナンドトレナド',
                "goal": "アイデアを本物に変える",
                "contact": '連絡先',
                "about-title": "私について",
                "about-me": "私は、フロントエンド、バックエンド、モービル、デスクトップ開発の経験を持つソフトウェアエンジニアです。 ウェブアプリの作成に関する専門的な経験があります。 現実世界とデジタルのインターフェースを接続して作成するのが好きです。 機能的で魅力的なシステムを開発しています",
                "tech-stack": "マイテックスタック",
                "contact-me": "連絡先",
                "email": "Eメール",
                "name": "名前",
                "message": "メッセージ",
                "send": "送る",
                "reset": "リセット",
                "developed" : "によって開発されました",

                "recent-projects": "最近のプロジェクト",

                "name-project-1": "自動車部品検出",
                "tech-project-1": "Python, Tensorflow, Google Maps API",
                "description-project-1": "自動車部品を検出し、Googleマップでショップの近くに配置して交換するための画像分類モデル。 tkinter GUIで実装されています。",
                "img-project-1": "/assets/images/projects/apd.png",
                "github-project-1": "https://github.com/SakugaCoder/Automotive-parts-detection",

                "name-project-2": "ビジネスプレゼンテーション用のワイヤレスコントローラーグローブ",
                "tech-project-2": "Python, Pyserial, pyAutoGUI, Arudino, 433 Mhz Module",
                "description-project-2": "PyAutoGUIライブラリを使用したリモートPC制御用の433 MHzモジュールを介してコマンドを送信するarduinoで作られたウェアラブル",
                "img-project-2": "/assets/images/projects/gc.png",
                "github-project-2": "https://github.com/SakugaCoder/GloveController",

                "name-project-3": "React JS、Flask、MongoDBで作られた購入リストシステム",
                "tech-project-3": "React JS, React Router, Fetch, Bootstrap, MongoDB, Python, Flask",
                "description-project-3": "MongoDBのFlaskアプリで行われたCRUD操作でReact JSを使用して作成された購入リストシステム",
                "img-project-3": "/assets/images/projects/tbapp.jpg",
                "github-project-3": "https://github.com/SakugaCoder/ThingsToBuy-ReactJS"
            
            }
        }
    },
    //lng: "en",
    fallbackLng: "en",
    whitelist: ["en", "es", "jp"],
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;