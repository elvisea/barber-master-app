import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import english from "./en/english.json";
import espanol from "./es/espanol.json";
import portuguese from "./pt/portuguese.json";

import { languageDefault } from "./languageDefault";
import { languageDetector } from "./languageDetector";

i18next
  .use(initReactI18next)
  .use(languageDetector)

  .init({

    fallbackLng: languageDefault,
    resources: {
      en_US: english,
      pt_BR: portuguese,
      es_ES: espanol,
    },

    // compatibilityJSON: "v3",
    // compatibilityJSON: "v3",

    react: {
      useSuspense: false,
    },
  });

export default i18next;
