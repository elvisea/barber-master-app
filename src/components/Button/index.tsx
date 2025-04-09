import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

import { theme } from "@/theme";
import { Colors } from "@/typings";

import { Typography } from "@/components/Typography";

import { Box, Container } from "./styles";

type Props = TouchableOpacityProps & {
  w?: string;
  h?: number;

  bg?: Colors;

  mt?: number;
  mb?: number;

  tc?: Colors;
  title: string;

  border?: boolean;
  bc?: Colors;

  rounded?: number;

  icon?: JSX.Element;

  isLoading?: boolean;
};

const Button = ({
  w = "100",
  h = 54,

  bg = "primary_purple",

  mb = 0,
  mt = 0,

  tc = "white",
  title,

  border = false,
  bc = "transparent",

  rounded = 8,

  icon = undefined,
  isLoading = false,
  ...rest
}: Props) => {
  return (
    <Container
      w={w}
      h={h}
      bg={bg}
      mb={mb}
      mt={mt}
      bc={bc}
      border={border}
      rounded={rounded}
      activeOpacity={0.75}
      style={styles.container}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size="large" color={border ? bc : theme.colors.white} />
      ) : (
        <Box>
          {!!icon && icon}

          <Typography
            title={title}
            size={14}
            color={tc}
            font="Roboto_500Medium"
          />
        </Box>
      )}
    </Container>
  );
};

export { Button };

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});
