import React, { useCallback, useState } from "react";
import { Alert, ScrollView } from "react-native";

import { useTranslation } from "react-i18next";

import { useNavigation } from "@react-navigation/native";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { errors as responses } from "@/constants/errors";

import { ErrorCode } from "@/enums";

import api from "@/services/api";
import { AppError } from "@/errors/AppError";
import { translateError } from "@/utils/translate-error";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

import { HeaderUnauthenticatedScreens } from "@/components/HeaderUnauthenticatedScreens";

import { schema } from "./constants";
import { Form, UserCreated } from "./types";


import {
  PrivacyPolicy,
  Container,
  InputContainer,
  styles,
  CenteredTypograph,
} from "./styles";

function CreateAccountScreen() {
  const { t: translate } = useTranslation();

  const navigation = useNavigation();

  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Form>({
    resolver: yupResolver(schema),
  });

  const toggleVisibility = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);


  const handleError = (errorCode: ErrorCode, email: string) => {
    const message = responses[errorCode] || responses["UNKNOWN_ERROR"];

    switch (errorCode) {
      case ErrorCode.EMAIL_ALREADY_EXISTS_NOT_VERIFIED:
        Alert.alert(translate(message.title), translate(message.description), [{
          onPress: () => {
            navigateToNextScreen(email);
            reset();
          }
        }]);
        break;
      case ErrorCode.EMAIL_ALREADY_EXISTS_VERIFIED:
        Alert.alert(translate(message.title), translate(message.description), [{
          onPress: () => {
            navigation.navigate("EnterApplicationScreen");
            reset();
          }
        }]);
        break;
      default:
        Alert.alert(translate(message.title), translate(message.description), [{
          onPress: () => reset(),
        }]);
    }
  }

  const navigateToNextScreen = (email: string) => {
    navigation.navigate("InsertCodeScreen", {
      email: email,
    });
  }

  const handleCreateAccount = async ({ email, password, name, phone }: Form) => {
    try {
      setIsLoading(true);

      const payload = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password: password.trim(),
        phone: `+55${phone}`.trim(),
      };

      const response = await api.post<UserCreated>("/owners", payload);

      if (response.status === 201) {
        navigateToNextScreen(response.data.email)
      }
    } catch (error) {
      if (error instanceof AppError) {
        handleError(error.errorCode, email);
        return;
      }

      const message = responses["UNKNOWN_ERROR"];
      Alert.alert(translate(message.title), translate(message.description));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false}>
      <HeaderUnauthenticatedScreens title={translate("CREATE_ACCOUNT")} />
      <Container>
        <CenteredTypograph
          title={translate("REGISTRATION_MESSAGE")}
          mt={8}
          mb={24}
          size={18}
        />

        <InputContainer>
          <CenteredTypograph title={translate("NAME")} size={14} mb={8} />

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                placeholder={translate("NAME_PLACEHOLDER")}
                keyboardType="default"
                onChangeText={onChange}
                value={value}
                accessibilityLabel={translate("NAME_PLACEHOLDER")}
                error={translateError(translate, errors.name?.message)}
              />
            )}
          />

          <CenteredTypograph
            title={translate("EMAIL")}
            size={14}
            mt={16}
            mb={8}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                placeholder={translate("EMAIL_PLACEHOLDER")}
                keyboardType="email-address"
                onChangeText={onChange}
                value={value}
                accessibilityLabel={translate("EMAIL_PLACEHOLDER")}
                error={translateError(translate, errors.email?.message)}
              />
            )}
          />

          <CenteredTypograph
            title={translate("PHONE")}
            size={14}
            mt={16}
            mb={8}
          />

          <Controller
            control={control}
            name="phone"
            render={({ field: { onChange, value } }) => (
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                placeholder={translate("PHONE_PLACEHOLDER")}
                keyboardType="numeric"
                maxLength={11}
                onChangeText={onChange}
                value={value}
                accessibilityLabel={translate("PHONE_PLACEHOLDER")}
                error={translateError(translate, errors.phone?.message)}
              />
            )}
          />

          <CenteredTypograph
            title={translate("PASSWORD")}
            size={14}
            mt={16}
            mb={8}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                placeholder={translate("PASSWORD_PLACEHOLDER")}
                secureTextEntry={isVisible}
                hasIcon
                visible={toggleVisibility}
                visibility={isVisible}
                onChangeText={onChange}
                value={value}
                accessibilityLabel={translate("PASSWORD_PLACEHOLDER")}
                error={translateError(translate, errors.password?.message)}
              />
            )}
          />

          <CenteredTypograph
            title={translate("CONFIRM_PASSWORD")}
            size={14}
            mt={16}
            mb={8}
          />

          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, value } }) => (
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                placeholder={translate("CONFIRM_PASSWORD_PLACEHOLDER")}
                secureTextEntry={isVisible}
                hasIcon
                visible={toggleVisibility}
                visibility={isVisible}
                onChangeText={onChange}
                value={value}
                accessibilityLabel={translate("CONFIRM_PASSWORD_PLACEHOLDER")}
                error={translateError(
                  translate,
                  errors.confirmPassword?.message,
                )}
              />
            )}
          />
        </InputContainer>

        <Button
          title={translate("CREATE_ACCOUNT")}
          mt={32}
          disabled={isLoading}
          isLoading={isLoading}
          onPress={handleSubmit(handleCreateAccount)}
        />

        <PrivacyPolicy
          activeOpacity={0.75}
          onPress={() => console.log("Navegar Para Próxima Tela")}
        >
          <CenteredTypograph title={translate("PRIVACY_POLICY_TEXT")} />
        </PrivacyPolicy>
      </Container>
    </ScrollView>
  );
}

export { CreateAccountScreen };
