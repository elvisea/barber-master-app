import { TextInput } from "react-native";
import React, { createRef, RefObject } from "react";

import { Container } from "./styles";
import { InputCode } from "../InputCode";

type InputsProps = {
  inputs?: number;
  onValueChanges?: (values: string[]) => void;
  values: string[]; // Adiciona a prop `values`
};

const Inputs: React.FC<InputsProps> = ({
  inputs = 4,
  values,
  onValueChanges,
}) => {
  let inputRefs: RefObject<TextInput>[] = Array.from({ length: inputs }, () =>
    createRef<TextInput>(),
  );

  const focusPreviousInput = (index: number) => {
    if (index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const focusNextInput = (index: number) => {
    if (index < inputs - 1) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const onChangeText = (text: string, index: number) => {
    const newValues = [...values];
    newValues[index] = text;
    onValueChanges && onValueChanges(newValues);

    if (text) {
      focusNextInput(index);
    } else {
      focusPreviousInput(index);
    }
  };

  const onKeyPress = (key: string, index: number) => {
    if (key === "Backspace" && values[index] === "") {
      focusPreviousInput(index);
      if (index > 0) {
        const newValues = [...values];
        newValues[index - 1] = "";
        onValueChanges && onValueChanges(newValues);
      }
    }
  };

  return (
    <Container>
      {inputRefs.map((ref, index) => (
        <InputCode
          key={index}
          ref={ref}
          value={values[index]} // Usa a prop `values`
          onKeyPress={({ nativeEvent: { key } }) => onKeyPress(key, index)}
          onChangeText={(text) => onChangeText(text, index)}
        />
      ))}
    </Container>
  );
};

export { Inputs };
