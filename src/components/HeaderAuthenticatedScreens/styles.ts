import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "@/theme";

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(72)}px;

  flex-direction: row;
  padding: 0 ${RFValue(12)}px;

  align-items: center;
  justify-content: space-between;

  background: ${theme.colors.background_black};

  border-bottom-width: ${RFValue(1)}px;
  border-bottom-color: ${theme.colors.secondary_gray};
`;

export const IconButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: ${RFValue(4)}px;
  background: ${theme.colors.background_black};
`;
