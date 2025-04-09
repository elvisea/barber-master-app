import React from "react";
import { View } from "react-native";

import { CircleWithNameInitials } from "@/components/CircleWithNameInitials";

import { styles } from "./styles";
import { Typography } from "@/components/Typography";

type Props = {
  name: string;
  email: string;
};

function DrawerHeader({ name, email }: Props) {
  return (
    <View style={styles.container}>
      <CircleWithNameInitials
        name={name}
        size={72}
        bg="primary_purple"
        mb={16}
        textColor="white"
      />

      <Typography
        color="white"
        font="Roboto_500Medium"
        size={16}
        title={name}
        mb={4}
      />

      <Typography
        color="white"
        font="Roboto_400Regular"
        size={14}
        title={email}
      />
    </View>
  );
}

export { DrawerHeader };
