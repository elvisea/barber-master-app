import { Alert } from "react-native";
import { t as translate } from 'i18next';

import { SuccessCode } from "@/enums";
import { success } from "@/constants/success";

type ShowSuccess = {
  successCode: SuccessCode;
  successCallback?: () => void;
}

export const showSuccess = ({ successCode, successCallback }: ShowSuccess) => {
  const message = success[successCode];
  Alert.alert(
    translate(message.title),
    translate(message.description),
    [
      {
        text: message.text ? translate(message.text) : undefined,
        onPress: () => successCallback ? successCallback() : undefined,
      },
    ]
  );
}