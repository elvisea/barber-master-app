import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    height: RFValue(56),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: RFValue(12),
    backgroundColor: theme.colors.secondary_black,
  },

  content: {
    alignItems: "center",
    flexDirection: "row",
    gap: RFValue(12),
  },

  title: {
    color: theme.colors.white,
    fontSize: RFValue(12),
    marginLeft: RFValue(12),
  },
});
