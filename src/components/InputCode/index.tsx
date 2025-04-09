import React, { forwardRef } from "react";
import { TextInput, TextInputProps } from "react-native";

import { theme } from "@/theme";
import { styles } from "./styles";

interface InputTokenProps extends TextInputProps { }

const InputCode = forwardRef<TextInput, InputTokenProps>((props, ref) => (
  <TextInput
    ref={ref}
    maxLength={1}
    keyboardType="numeric"
    contextMenuHidden={true}
    placeholder="0"
    placeholderTextColor={theme.colors.gray}
    style={styles.input}
    {...props}
  />
));

InputCode.displayName = "InputCode";

export { InputCode };
