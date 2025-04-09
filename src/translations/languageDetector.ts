import { LanguageDetectorAsyncModule } from "i18next";

import { languageDevice } from "./languageDevice";

export const languageDetector: LanguageDetectorAsyncModule = {
  type: "languageDetector",
  async: true,
  init: () => { },
  detect: function (
    callback: (lang: string | readonly string[] | undefined) => void,
  ) {
    const language = "pt_BR"; // deverá ser inserida função que busca idioma no 'storage';

    if (language) {
      callback(language);
    } else {
      callback(languageDevice);
    }
  },
  cacheUserLanguage: async function () {
    // deverá ser inserida função que defini idioma no 'storage';
  },
};
