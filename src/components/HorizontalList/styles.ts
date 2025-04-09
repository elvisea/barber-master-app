import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    gap: RFValue(8),
    alignItems: "flex-start",
  },
})``;
