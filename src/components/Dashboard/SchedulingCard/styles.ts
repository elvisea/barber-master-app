import { theme } from "@/theme";

import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  height: ${RFValue(54)}px;

  gap: ${RFValue(16)}px;

  padding: 0 ${RFValue(16)}px;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  border-radius: ${RFValue(8)}px;
  border-width: ${RFValue(1.5)}px;
  border-color: ${theme.colors.secondary_gray};

  background-color: ${theme.colors.secondary_black};
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: ${RFValue(8)}px;
`;
