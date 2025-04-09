import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "@/theme";

type ContainerProps = {
  mr: number;
  ml: number;
  mb: number;
  mt: number;
  isActive: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: auto;

  flex-direction: row;
  gap: ${RFValue(4)}px;
  padding: ${RFValue(8)}px;

  border-radius: ${RFValue(8)}px;
  border-color: ${({ isActive }) => isActive ? "none" : `${theme.colors.primary_purple}`};

  align-items: center;
  justify-content: center;

  border-width: ${({ isActive }) =>
    isActive ? `${RFValue(0)}px` : `${RFValue(1)}px`};

  background-color: ${({ isActive }) =>
    isActive ? theme.colors.primary_purple : theme.colors.white};

  margin-top: ${({ mt }) => `${RFValue(mt)}px`};
  margin-right: ${({ mr }) => `${RFValue(mr)}px`};
  margin-bottom: ${({ mb }) => `${RFValue(mb)}px`};
  margin-left: ${({ ml }) => `${RFValue(ml)}px`};
`;

type TitleProps = {
  isActive: boolean;
};

export const Title = styled.Text<TitleProps>`
  color: ${({ isActive }) =>
    isActive ? theme.colors.white : theme.colors.primary_purple};

  font-size: ${RFValue(12)}px;
  font-family: ${theme.fonts.Roboto_500Medium};
  line-height: ${RFValue(12 * 1.3)}px;
`;
