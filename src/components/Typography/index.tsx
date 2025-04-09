import { TextProps } from "react-native";

import { Colors, Fonts } from "@/typings";

import { Container } from "./styles";

type TypographyProps = TextProps & {
  title: string;

  size?: number;
  color?: Colors;

  mt?: number;
  mb?: number;

  font?: Fonts;
};

function Typography({
  title,
  font = "Roboto_400Regular",

  size = 16,
  color = "white",

  mt = 0,
  mb = 0,

  ...rest
}: TypographyProps) {
  return (
    <Container size={size} color={color} mt={mt} mb={mb} font={font} {...rest}>
      {title}
    </Container>
  );
}

export { Typography };
