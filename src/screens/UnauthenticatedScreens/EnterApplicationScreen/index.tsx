import React, { useCallback, useState } from "react";
import { Alert, ScrollView } from "react-native";

import { useTranslation } from "react-i18next";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { translateError } from "@/utils/translate-error";

import { Input } from "@/components/Input";

import { Button } from "@/components/Button";
import { HeaderUnauthenticatedScreens } from "@/components/HeaderUnauthenticatedScreens";

import { AuthenticationResponse, Form } from "./types";
import { schema } from "./constants";

import { errors as responses } from "@/constants/errors";

import api from "@/services/api";

import useAuthStore from "@/store/auth";
import { AppError } from "@/errors/AppError";

import {
  PrivacyPolicy,
  Container,
  InputContainer,
  ForgotPassword,
  styles,
  CenteredTypograph,
  ForgotPasswordTypograph,
} from "./styles";

function EnterApplicationScreen() {
  const { t: translate } = useTranslation();

  const signIn = useAuthStore((state) => state.signIn);

  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: yupResolver(schema),
  });

  const toggleVisibility = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);

  const handleLogin = async ({ email, password }: Form) => {
    try {
      setIsLoading(true);

      const payload = {
        email: email.trim().toLowerCase(),
        password: password.trim(),
      };

      const response = await api.post<AuthenticationResponse>(
        "/auth",
        payload,
      );

      if (response.status === 200) {
        await signIn(response.data);
      }
    } catch (error) {
      if (error instanceof AppError) {
        const message = responses[error.errorCode] || responses["UNKNOWN_ERROR"];
        Alert.alert(translate(message.title), translate(message.description));
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
      <HeaderUnauthenticatedScreens title={translate("LOGIN_TITLE")} />
      <Container>
        <CenteredTypograph
          title={translate("WELCOME_BACK_MESSAGE")}
          mt={8}
          mb={24}
          size={18}
        />

        <InputContainer>
          <CenteredTypograph title={"Email"} size={14} mb={8} />

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
        </InputContainer>

        <Button
          title={translate("SIGN_IN")}
          mt={24}
          disabled={isLoading}
          isLoading={isLoading}
          onPress={handleSubmit(handleLogin)}
        />

        <ForgotPassword
          activeOpacity={0.75}
          disabled={isLoading}
          onPress={() => console.log("Navegar Para Próxima Tela")}
        >
          <ForgotPasswordTypograph title={translate("FORGOT_PASSWORD")} />
        </ForgotPassword>

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

export { EnterApplicationScreen };
