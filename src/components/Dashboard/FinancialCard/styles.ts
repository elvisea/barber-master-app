import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "@/theme";
import { Colors } from "@/typings";

type StyleProps = {
  bg: Colors;
};

export const Container = styled.View<StyleProps>`
  ${({ bg }) => css`
    min-width: ${RFValue(142)}px;
    height: ${RFValue(142)}px;

    background-color: ${theme.colors[bg]};

    padding: ${RFValue(16)}px;
    border-radius: ${RFValue(8)}px;

    align-items: flex-start;
    justify-content: space-between;

    border-width: ${RFValue(1.5)}px;
    border-color: ${bg === "primary_purple"
      ? theme.colors.primary_purple
      : theme.colors.secondary_gray};
  `}
`;

export const Content = styled.View`
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${RFValue(4)}px;
`;
