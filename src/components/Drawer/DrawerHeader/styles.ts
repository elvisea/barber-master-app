import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    height: RFValue(188),
    alignItems: "flex-start",
    justifyContent: "flex-end",
    padding: RFValue(16),
    backgroundColor: theme.colors.secondary_black,
  },
});
