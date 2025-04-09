import { StyleSheet } from "react-native";

import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "@/theme";
import ImageHero from "@/assets/starter-logo.svg";

export const Container = styled.View`
  flex: 1;
  padding: ${RFValue(16)}px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.background_black};
`;

export const Hero = styled(ImageHero).attrs({ width: 200, height: 200 })`
  margin-top: ${RFValue(40)}px;
  margin-bottom: ${RFValue(32)}px;
`;

export const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: theme.colors.background_black,
  },
  title: {
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
  },
  contact: {
    textAlign: "center",
    borderBottomWidth: RFValue(1),
    borderBottomColor: theme.colors.white,
    paddingBottom: RFValue(4),
  },
});
