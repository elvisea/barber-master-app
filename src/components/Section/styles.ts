import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

type Props = {
  mt: number;
  mb: number;
};

export const Container = styled.View<Props>`
  ${({ mt, mb }) => css`
    width: 100%;
    gap: ${RFValue(8)}px;
    margin-top: ${RFValue(mt)}px;
    margin-bottom: ${RFValue(mb)}px;
  `}
`;
