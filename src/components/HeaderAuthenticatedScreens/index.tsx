import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";

import { theme } from "@/theme";
import useAuthStore from "@/store/auth";

import { IconButton, Container } from "./styles";

function HeaderAuthenticatedScreens() {
  const navigation = useNavigation();

  const signOut = useAuthStore((state) => state.signOut);
  const handleMenu = () => navigation.dispatch(DrawerActions.openDrawer());

  return (
    <Container>
      <IconButton onPress={handleMenu}>
        <MaterialIcons name="menu" size={28} color={theme.colors.white} />
      </IconButton>

      <IconButton onPress={signOut}>
        <MaterialIcons
          name="power-settings-new"
          size={28}
          color={theme.colors.white}
        />
      </IconButton>
    </Container>
  );
}

export { HeaderAuthenticatedScreens };
