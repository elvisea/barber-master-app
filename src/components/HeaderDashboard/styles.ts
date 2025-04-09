import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "@/theme";

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(172)}px;

  padding: ${RFValue(16)}px;

  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  background: ${theme.colors.primary_purple};
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
`;

export const IconButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: ${RFValue(4)}px;
  background: ${theme.colors.primary_purple};
`;
