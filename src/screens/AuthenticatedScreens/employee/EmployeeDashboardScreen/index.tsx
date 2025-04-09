import React from "react";
import { ScrollView, StatusBar, StyleSheet } from "react-native";

import { theme } from "@/theme";
import useAuthStore from "@/store/auth";

import { Button } from "@/components/Button";

import { Container } from "./styles";

function EmployeeDashboardScreen() {
  const signOut = useAuthStore((state) => state.signOut);

  return (
    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
      <Container>
        <Button title={"Employee Sair"} mt={24} onPress={signOut} />
      </Container>
    </ScrollView>
  );
}

export { EmployeeDashboardScreen };

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: theme.colors.background_black,
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    color: theme.colors.white,
    fontSize: 24,
    fontFamily: theme.fonts.Roboto_700Bold,
  },
});
