import React from "react";
import { TouchableOpacityProps } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/theme/colors";
import { Typography } from "@/components/Typography";

import { Container, Content, Footer, FooterContent, Header } from "./styles";

type EstablishmentProps = TouchableOpacityProps & {
  name: string;
  description: string;
  price: number;
  duration: number;
  commissionEmployee: number;
};

export function EstablishmentServiceCard({
  name,
  description,
  price,
  duration,
  commissionEmployee,
  ...rest
}: EstablishmentProps) {
  return (
    <Container activeOpacity={0.75} {...rest}>

      <Content>

        <Header>
          <Typography title={name} font="Roboto_700Bold" numberOfLines={1} />
          <Typography title={description} size={14} numberOfLines={1} />
        </Header>

        <Typography title={`R$ ${price.toFixed(2)}`} size={18} font="Roboto_700Bold" />

        <Footer>

          <FooterContent>
            <MaterialIcons name="access-time" size={20} color={colors.white} />
            <Typography title={`${duration} min`} size={14} />
          </FooterContent>

          <FooterContent>
            <MaterialIcons name="percent" size={22} color={colors.white} />
            <Typography title={`${commissionEmployee.toFixed(2)}`} size={14} />
          </FooterContent>

        </Footer>
      </Content>

      <MaterialIcons name="chevron-right" size={26} color={colors.white} />
    </Container>
  );
}
