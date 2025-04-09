import styled from "styled-components/native";

import { theme } from "@/theme";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${theme.colors.background_black};
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
  padding: ${RFValue(16)}px;
  background-color: ${theme.colors.background_black};
`;
