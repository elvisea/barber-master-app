import { NativeModules, Platform } from "react-native";

export const languageDevice: string =
  Platform.OS === "ios"
    ? NativeModules.SettingsManager?.settings?.AppleLocale || "en-US"
    : NativeModules.I18nManager?.localeIdentifier || "en-US";
