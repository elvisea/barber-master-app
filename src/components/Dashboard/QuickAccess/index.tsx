import React from "react";
import { TouchableOpacityProps } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { theme } from "@/theme";
import { Typography } from "@/components/Typography";

import { Circle, Container } from "./styles";

export type QuickAccessProps = TouchableOpacityProps & {
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

const QuickAccess: React.FC<QuickAccessProps> = ({ title, icon, ...rest }) => {
  return (
    <Container activeOpacity={0.75} {...rest}>
      <Circle>
        <MaterialIcons name={icon} size={24} color={theme.colors.white} />
      </Circle>

      <Typography
        title={title}
        size={12}
        color="white"
        font="Roboto_400Regular"
        style={{ textAlign: "center" }}
      />
    </Container>
  );
};

export { QuickAccess };
