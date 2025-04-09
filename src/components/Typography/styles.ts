import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "@/theme";
import { Colors, Fonts } from "@/typings";

type ContainerStyleProps = {
  size: number;
  color: Colors;

  mt: number;
  mb: number;

  font: Fonts;
};

export const Container = styled.Text<ContainerStyleProps>`
  ${({ font, size, color, mt, mb }) => css`
    font-family: ${theme.fonts[font]};
    color: ${theme.colors[color]};
    font-size: ${RFValue(size)}px;

    margin-top: ${RFValue(mt)}px;
    margin-bottom: ${RFValue(mb)}px;

    line-height: ${RFValue(size * 1.2)}px;
  `}
`;
