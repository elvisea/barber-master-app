import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "@/theme";

export const Container = styled.TouchableOpacity`
  height: ${RFValue(54)}px;
  width: 100%;

  padding: 0 ${RFValue(16)}px;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  border-radius: ${RFValue(8)}px;
  border-width: ${RFValue(1.5)}px;
  border-color: ${theme.colors.secondary_gray};

  background-color: ${theme.colors.secondary_black};
`;
