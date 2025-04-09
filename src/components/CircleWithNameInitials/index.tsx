import React from "react";
import { ViewProps } from "react-native";

import { Typography } from "@/components/Typography";

import { Colors } from "@/typings";
import { getNameInitials } from "@/utils/get-name-initials";

import { Container } from "./styles";

type Props = ViewProps & {
  mt?: number;
  mb?: number;

  size: number;
  name: string;

  bg: Colors;
  textColor: Colors;
};

function CircleWithNameInitials({
  mb = 0,
  mt = 0,
  size,
  name,
  textColor,
  bg,
  ...rest
}: Props) {
  return (
    <Container mb={mb} mt={mt} size={size} bg={bg} {...rest}>
      <Typography
        color={textColor}
        font="Roboto_500Medium"
        size={24}
        title={getNameInitials(name)}
        style={{ letterSpacing: 2 }}
      />
    </Container>
  );
}

export { CircleWithNameInitials };
