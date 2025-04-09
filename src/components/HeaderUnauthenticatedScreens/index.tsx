import React from "react";

import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { theme } from "@/theme";
import { Typography } from "@/components/Typography";

import { ButtonBack, Container, Content } from "./styles";

type Props = {
  title: string;
};

function HeaderUnauthenticatedScreens({ title }: Props) {
  const { goBack } = useNavigation();

  return (
    <Container>
      <ButtonBack onPress={goBack}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={28}
          color={theme.colors.white}
        />
      </ButtonBack>

      <Content>
        <Typography
          title={title}
          color="white"
          font="Roboto_500Medium"
          size={20}
        />
      </Content>
    </Container>
  );
}

export { HeaderUnauthenticatedScreens };
