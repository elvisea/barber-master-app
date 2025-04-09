import React from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { Typography } from "@/components/Typography";

import { styles } from "./styles";
import { theme } from "@/theme";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  value?: string;
};

function DrawerItem({ icon, title, value = "", ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.75} style={styles.container} {...rest}>
      <View style={styles.content}>
        <MaterialIcons name={icon} size={28} color={theme.colors.white} />
        <Typography
          font="Roboto_400Regular"
          size={16}
          title={title}
          color="white"
        />
      </View>

      {value !== "" && (
        <Typography
          font="Roboto_400Regular"
          size={16}
          title={value}
          color="white"
        />
      )}
    </TouchableOpacity>
  );
}

export { DrawerItem };
