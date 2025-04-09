import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { theme } from "@/theme";
import { Colors } from "@/typings";

import { Typography } from "@/components/Typography";

import { Container, Content } from "./styles";

type SchedulingCardProps = {
  value: string;
  title: string;
  iconColor: Colors;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
};

const SchedulingCard: React.FC<SchedulingCardProps> = ({
  value,
  title,
  icon,
  iconColor,
}) => {
  return (
    <Container>
      <Content>
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color={theme.colors[iconColor]}
        />

        <Typography
          title={title}
          size={16}
          color={"gray"}
          font="Roboto_400Regular"
        />
      </Content>
      <Typography title={value} size={22} color="white" font="Roboto_700Bold" />
    </Container>
  );
};

export { SchedulingCard };
