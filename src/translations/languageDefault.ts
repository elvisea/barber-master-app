import { languageDevice } from "./languageDevice";

export const languageDefault = (): string => {
  switch (languageDevice) {
    case "en_US":
    case "pt_BR":
    case "es_ES":
      return languageDevice;
    default:
      return "en_US";
  }
};
