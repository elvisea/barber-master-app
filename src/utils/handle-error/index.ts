import { Alert } from "react-native";
import { t as translate } from 'i18next';

import { errors } from "@/constants/errors";
import { AppError } from "@/errors/AppError";

type HandleError = {
  error: unknown;
  callback?: () => void;
}

export const handleError = ({ error, callback }: HandleError) => {
  if (error instanceof AppError) {
    const { title, description, text } = errors[error.errorCode] || errors["UNKNOWN_ERROR"];
    showAlert({ title, description, text, callback })
    return;
  }

  const { title, description } = errors["UNKNOWN_ERROR"];
  showAlert({ title, description })

}

type ShowAlert = {
  title: string;
  description: string;
  text?: string;
  callback?: () => void;
}

const showAlert = ({ title, description, text, callback }: ShowAlert) => {
  Alert.alert(
    translate(title),
    translate(description),
    [
      {
        text: text ? translate(text) : undefined,
        onPress: () => callback ? callback() : undefined,
      },
    ]
  );
}
