import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "@/theme";
import { Typography } from "@/components/Typography";

export const Container = styled.View`
  flex: 1;
  padding: ${RFValue(16)}px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.background_black};
`;

export const InputContainer = styled.View`
  width: 100%;
  height: auto;
  align-items: flex-start;
  justify-content: center;
`;

export const CenteredTypograph = styled(Typography)`
  text-align: center;
`;

export const ResendTokenButton = styled.TouchableOpacity`
  margin-top: ${RFValue(28)}px;
  padding: ${RFValue(8)}px;
`;

export const ResendTokenTypograph = styled(Typography)`
  text-align: center;
  border-bottom-width: ${RFValue(1)}px;
  border-bottom-color: ${theme.colors.white};
  padding-bottom: ${RFValue(4)}px;
`;
