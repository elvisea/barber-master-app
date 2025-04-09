import { theme } from "@/theme";
import React from "react";
import { View, StyleSheet, ViewProps } from "react-native";

type DividerProps = ViewProps & {};

export const Divider: React.FC<DividerProps> = ({ ...props }) => {
  return <View style={[styles.divider]} {...props} />;
};

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.secondary_gray,
  },
});
