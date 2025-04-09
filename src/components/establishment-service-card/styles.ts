import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "@/theme";

export const Container = styled.TouchableOpacity`
  width: 100%;
  gap: ${RFValue(12)}px;
  padding: ${RFValue(16)}px;
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
  align-items: flex-start;
  justify-content: center;
`;

export const Header = styled.View`
  width: 100%;
  gap: ${RFValue(2)}px;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: ${RFValue(12)}px;
`;

export const Footer = styled.View`
  width: 100%;
  gap: ${RFValue(12)}px;
  flex-direction: row;

  align-items: center;
  justify-content: flex-start;
  margin-top: ${RFValue(4)}px;
`;

export const FooterContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${RFValue(4)}px;
`;

