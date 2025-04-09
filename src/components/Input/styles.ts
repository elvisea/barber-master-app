import { MaskedTextInput } from "react-native-mask-text";

import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "@/theme";

type FormProps = {
  mt: number;
  mb: number;
};

type ContainerProps = {
  error?: string | null;
};

export const Form = styled.View<FormProps>`
  ${({ mb, mt }) => css`
    width: 100%;
    margin-top: ${`${RFValue(mt)}px`};
    margin-bottom: ${`${RFValue(mb)}px`};
    align-items: flex-start;
    justify-content: center;
  `}
`;

export const Container = styled.View<ContainerProps>`
  ${({ error }) => css`
    width: 100%;
    height: ${RFValue(54)}px;
    background: ${theme.colors.secondary_black};
    border: solid ${error ? theme.colors.red : theme.colors.primary_purple}
      ${RFValue(1)}px;
    border-radius: ${RFValue(8)}px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 ${RFValue(16)}px;
  `}
`;

export const InputWithMask = styled(MaskedTextInput)`
  flex: 1;
  font-size: ${RFValue(12)}px;
  font-family: ${theme.fonts.Roboto_400Regular};

  color: ${theme.colors.white};
  height: ${RFValue(54)}px;
  border-radius: ${RFValue(30)}px;
`;

export const UnmaskedInput = styled.TextInput`
  flex: 1;
  font-size: ${RFValue(12)}px;
  font-family: ${theme.fonts.Roboto_400Regular};

  color: ${theme.colors.white};
  height: ${RFValue(54)}px;
  border-radius: ${RFValue(30)}px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  margin-left: ${RFValue(8)}px;
`;
