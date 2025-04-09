import React, { ReactNode } from "react";
import { View } from "react-native";

import { styles } from "./styles";

type Props = {
  children: ReactNode;
};

function DrawerList({ children }: Props) {
  return <View style={styles.container}>{children}</View>;
}

export { DrawerList };
