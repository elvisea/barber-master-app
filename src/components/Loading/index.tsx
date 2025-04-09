import React from "react";
import { ActivityIndicator } from "react-native";

import { theme } from "@/theme";
import { Container } from "./styles";

const Loading = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color={theme.colors.white} />
    </Container>
  );
};

export { Loading };
