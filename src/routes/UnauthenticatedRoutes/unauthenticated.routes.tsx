import React from "react";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { theme } from "@/theme";

import screens from "./screens";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

function UnauthenticatedRoutes() {
  return (
    <>
      <StatusBar
        style="light"
        backgroundColor={theme.colors.background_black}
      />

      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "none" }}
      >
        {screens.map((screen) => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </Stack.Navigator>
    </>
  );
}

export { UnauthenticatedRoutes };
