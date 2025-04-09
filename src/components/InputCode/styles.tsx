import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    width: RFValue(50),
    height: RFValue(50),
    padding: RFValue(4),

    borderWidth: RFValue(1),
    borderRadius: RFValue(8),
    borderColor: theme.colors.primary_purple,

    color: theme.colors.white,

    fontSize: RFValue(14),
    textAlign: "center",
    fontFamily: theme.fonts.Roboto_400Regular,

    alignItems: "center",
    justifyContent: "center",
  },
});
