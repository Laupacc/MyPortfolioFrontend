import "../styles/globals.css";
import Head from "next/head";
import Background from "../components/Background";
import Resume from "../components/Resume";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { initReactI18next } from "react-i18next";
import i18next from "i18next";

import enTranslations from "../data/enTranslations.json";
import frTranslations from "../data/frTranslations.json";
import Sidebar from "../components/Sidebar";

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      fr: {
        translation: frTranslations,
      },
    },
    lng: "en", // default language
    interpolation: {
      escapeValue: false, // not needed for React as it escapes by default
    },
  });

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Laura Paccanari</title>
        <link rel="icon" href="assets/images/favicon.ico" />
        <meta name="description" content="Laura Paccanari's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
      <Background />
      <Resume />
      <LanguageSwitcher />
      <Sidebar />
    </>
  );
}

export default App;
