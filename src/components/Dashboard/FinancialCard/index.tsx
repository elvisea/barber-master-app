import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { theme } from "@/theme";
import { Colors } from "@/typings";

import { Typography } from "@/components/Typography";

import { Container, Content } from "./styles";

export type FinancialCardProps = {
  value: string;
  title: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  bg?: Colors;
  iconColor: Colors;
  titleColor?: Colors;
};

const FinancialCard: React.FC<FinancialCardProps> = ({
  value,
  title,
  icon,
  bg = "secondary_black",
  iconColor,
  titleColor = "gray",
}) => {
  return (
    <Container bg={bg}>
      <MaterialCommunityIcons
        name={icon}
        size={38}
        color={theme.colors[iconColor]}
      />

      <Content>
        <Typography
          title={title}
          size={16}
          color={titleColor}
          font="Roboto_400Regular"
        />
        <Typography
          title={value}
          size={18}
          color="white"
          font="Roboto_700Bold"
        />
      </Content>
    </Container>
  );
};

export { FinancialCard };
