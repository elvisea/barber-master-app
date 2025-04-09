import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "@/theme";

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(64)}px;

  flex-direction: row;
  padding: 0 ${RFValue(16)}px;

  align-items: center;
  justify-content: center;

  background: ${theme.colors.background_black};
`;

export const Content = styled.View`
  flex: 1;
  height: ${RFValue(64)}px;
  align-items: center;
  justify-content: center;
`;

export const ButtonBack = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background: ${theme.colors.background_black};
`;
