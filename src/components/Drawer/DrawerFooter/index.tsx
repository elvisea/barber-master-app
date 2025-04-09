import React, { ReactNode } from "react";
import { View } from "react-native";

import { styles } from "./styles";

type Props = {
  children: ReactNode;
};

function DrawerFooter({ children }: Props) {
  return <View style={styles.container}>{children}</View>;
}

export { DrawerFooter };
