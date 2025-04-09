import React from "react";
import { ViewProps } from "react-native";

import { Container } from "./styles";

type Props = ViewProps & {
  mt?: number;
  mb?: number;
};

export const Section: React.FC<Props> = ({
  mt = 0,
  mb = 0,
  children,
  ...rest
}) => {
  return (
    <Container mb={mb} mt={mt} {...rest}>
      {children}
    </Container>
  );
};
