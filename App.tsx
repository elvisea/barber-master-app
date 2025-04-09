import "react-native-gesture-handler";

import { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

import * as SplashScreen from "expo-splash-screen";

import { I18nextProvider } from "react-i18next";

import i18n from "@/translations";
import { Routes } from "@/routes";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { theme } from "@/theme";
import useAuthStore from "@/store/auth";
import { Loading } from "@/components/Loading";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  const [appIsReady, setAppIsReady] = useState(false);
  const loadTokenFromStorage = useAuthStore((state) => state.loadTokenFromStorage);

  useEffect(() => {
    const prepare = async () => {
      try {
        await loadTokenFromStorage();

        if (fontsLoaded) {
          // Hide the splash screen
          await SplashScreen.hideAsync();
          setAppIsReady(true);
        }
      } catch (error) {
        console.error("Erro ao preparar o aplicativo:", error);
      }
    };

    prepare();
  }, [fontsLoaded, loadTokenFromStorage]);

  if (!appIsReady) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={theme.colors.background_black}
      />
      <I18nextProvider i18n={i18n}>
        <Routes />
      </I18nextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
