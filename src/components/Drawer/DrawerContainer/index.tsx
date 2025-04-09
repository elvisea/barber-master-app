import React, { ReactNode } from "react";
import { ScrollView } from "react-native";

import { styles } from "./styles";

type Props = {
  children: ReactNode;
};

function DrawerContainer({ children }: Props) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {children}
    </ScrollView>
  );
}

export { DrawerContainer };
