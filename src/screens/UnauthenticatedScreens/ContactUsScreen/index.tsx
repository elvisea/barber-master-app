import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text } from "react-native";

import { theme } from "@/theme";

import { Container } from "./styles";

function ContactUsScreen() {
  return (
    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
      <Container>
        <Text style={styles.title}>Contact Us Screen</Text>
      </Container>
    </ScrollView>
  );
}

export { ContactUsScreen };

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
