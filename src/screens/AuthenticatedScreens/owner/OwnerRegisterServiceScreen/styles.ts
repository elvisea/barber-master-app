import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "@/theme";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${theme.colors.background_black};
`;

export const InputContainer = styled.View`
  width: 100%;
  height: auto;
  align-items: flex-start;
  justify-content: center;
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
  padding: ${RFValue(16)}px;
  background-color: ${theme.colors.background_black};
`;

export const ContainerFilter = styled.View`
  width: 100%;
  gap: ${RFValue(8)}px;
  margin-bottom: ${RFValue(16)}px;
`;


