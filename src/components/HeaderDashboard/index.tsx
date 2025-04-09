import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";

import { theme } from "@/theme";
import useAuthStore from "@/store/auth";
import { Typography } from "@/components/Typography";

import { IconButton, Container, Content } from "./styles";

type HeaderDashboardProps = {
  title: string;
  value: number;
};

function HeaderDashboard({ title, value }: HeaderDashboardProps) {
  const navigation = useNavigation();

  const signOut = useAuthStore((state) => state.signOut);
  const handleMenu = () => navigation.dispatch(DrawerActions.openDrawer());

  return (
    <Container>
      <IconButton activeOpacity={0.75} onPress={handleMenu}>
        <MaterialIcons name="menu" size={28} color={theme.colors.white} />
      </IconButton>

      <Content>
        <Typography
          title={title}
          color="white"
          font="Roboto_400Regular"
          size={18}
        />
        <Typography
          title={`$${value.toFixed(2)}`}
          color="white"
          font="Roboto_700Bold"
          size={24}
        />
      </Content>

      <IconButton activeOpacity={0.75} onPress={signOut}>
        <MaterialIcons
          name="notifications"
          size={28}
          color={theme.colors.white}
        />
      </IconButton>
    </Container>
  );
}

export { HeaderDashboard };
