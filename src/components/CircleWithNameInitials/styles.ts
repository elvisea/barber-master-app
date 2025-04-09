import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "@/theme";
import { Colors } from "@/typings";

type StyleProps = {
  mt: number;
  mb: number;

  size: number;

  bg: Colors;
};

export const Container = styled.View<StyleProps>`
  ${({ mb, mt, size, bg }) => css`
    width: ${RFValue(size)}px;
    height: ${RFValue(size)}px;

    border-radius: ${RFValue(size / 2)}px;
    background-color: ${theme.colors[bg]};

    margin-top: ${RFValue(mt)}px;
    margin-bottom: ${RFValue(mb)}px;

    align-items: center;
    justify-content: center;
  `}
`;
