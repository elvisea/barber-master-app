import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "@/theme";

export const Container = styled.View`
  flex: 1;
  padding: ${RFValue(16)}px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.background_black};
`;
