import React from "react";
import { ScrollViewProps } from "react-native";

import { Container } from "./styles";

type HorizontalListProps = ScrollViewProps & {};

const HorizontalList: React.FC<HorizontalListProps> = ({
  children,
  ...rest
}) => {
  return (
    <Container
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      {...rest}
    >
      {children}
    </Container>
  );
};

export { HorizontalList };
