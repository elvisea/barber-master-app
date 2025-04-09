import { theme } from "@/theme";

import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
  width: ${RFValue(68)}px;
  align-items: center;
  justify-content: center;
  gap: ${RFValue(8)}px;
`;

export const Circle = styled.View`
  width: ${RFValue(68)}px;
  height: ${RFValue(68)}px;

  background-color: ${theme.colors.secondary_black};

  border-radius: ${RFValue(68 / 2)}px;

  align-items: center;
  justify-content: center;

  border: ${RFValue(1.5)}px solid ${theme.colors.secondary_gray};
`;
