import { TouchableOpacityProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { theme } from "@/theme";
import { Container, Title } from "./styles";

interface MiniButtonProps extends TouchableOpacityProps {
  title?: string;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  isActive?: boolean;
}

function MiniButton({
  title,
  mt = 0,
  mr = 0,
  mb = 0,
  ml = 0,
  isActive = true,
  ...rest
}: MiniButtonProps) {
  return (
    <Container
      activeOpacity={0.75}
      isActive={isActive}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      {...rest}
    >
      <Title isActive={isActive}>{title}</Title>

      {isActive && (
        <MaterialCommunityIcons
          name="check"
          size={16}
          color={theme.colors.white}
        />
      )}
    </Container>
  );
}

export { MiniButton };
