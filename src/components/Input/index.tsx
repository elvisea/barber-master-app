import React from "react";
import { TextInputProps } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { MaskedTextInputProps } from "react-native-mask-text";

import { theme } from "@/theme";
import { Typography } from "@/components/Typography";

import {
  Form,
  Container,
  ButtonIcon,
  InputWithMask,
  UnmaskedInput,
} from "./styles";

type Props = MaskedTextInputProps &
  TextInputProps & {
    mt?: number;
    mb?: number;

    hasIcon?: boolean;
    visibility?: boolean;

    visible?: () => void;

    mask?: string | undefined;
    error?: string | null;
  };

const Input = ({
  mt = 0,
  mb = 0,

  hasIcon = false,
  visibility,
  visible,
  error = null,
  mask = undefined,
  ...rest
}: Props) => {
  return (
    <Form mb={mb} mt={mt}>
      <Container error={error}>
        {mask ? (
          <InputWithMask
            mask={mask}
            style={{ fontSize: 16 }}
            placeholderTextColor={theme.colors.gray}
            {...rest}
          />
        ) : (
          <UnmaskedInput
            style={{ fontSize: 16 }}
            placeholderTextColor={theme.colors.gray}
            {...rest}
          />
        )}

        {hasIcon && (
          <ButtonIcon onPress={visible} activeOpacity={0.75}>
            <MaterialIcons
              name={visibility ? "visibility" : "visibility-off"}
              size={24}
              color={theme.colors.gray}
            />
          </ButtonIcon>
        )}
      </Container>

      {error && <Typography title={error} color="red" mt={4} size={14} />}
    </Form>
  );
};

export { Input };
