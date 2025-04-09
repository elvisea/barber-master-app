import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "@/theme";
import { Colors } from "@/typings";

type ContainerStyleProps = {
  w: string;
  h: number;
  bg: Colors;
  mt: number;
  mb: number;

  bc: Colors;
  border: boolean;
  rounded: number;
};

export const Container = styled.TouchableOpacity<ContainerStyleProps>`
  ${({ mt, mb, w, h, bg, border, bc, rounded }) => css`
    border-radius: ${RFValue(rounded)}px;
    background: ${theme.colors[bg]};

    width: ${w}%;
    height: ${RFValue(h)}px;

    align-items: center;
    justify-content: center;

    margin-top: ${RFValue(mt)}px;
    margin-bottom: ${RFValue(mb)}px;

    border-style: solid;
    border-width: ${border ? `${RFValue(1)}px` : `${RFValue(0)}px`};
    border-color: ${border ? `${theme.colors[bc]}` : "none"};
  `}
`;

export const Box = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${RFValue(8)}px;
`;
