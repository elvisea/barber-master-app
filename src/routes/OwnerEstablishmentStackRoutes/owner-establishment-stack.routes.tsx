import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import screens from "./screens";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

function OwnerEstablishmentStackRoutes() {
  return (
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
  );
}

export { OwnerEstablishmentStackRoutes };
