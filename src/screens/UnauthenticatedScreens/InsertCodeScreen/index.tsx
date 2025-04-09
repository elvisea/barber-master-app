import React, { useCallback, useState } from "react";
import { Alert, ScrollView, StatusBar, StyleSheet } from "react-native";

import { useTranslation } from "react-i18next";
import { useNavigation, useRoute } from "@react-navigation/native";

import { theme } from "@/theme";

import api from "@/services/api";

import { SuccessCode } from "@/enums";
import { handleError } from "@/utils/handle-error";
import { showSuccess } from "@/utils/show-success";

import { EnterApplicationScreenProp } from "./types";

import {
  CenteredTypograph,
  Container,
  InputContainer,
  ResendTokenButton,
  ResendTokenTypograph,
} from "./styles";

import { Inputs } from "@/components/Inputs";
import { Button } from "@/components/Button";

import { HeaderUnauthenticatedScreens } from "@/components/HeaderUnauthenticatedScreens";

function InsertCodeScreen() {
  const route = useRoute();
  const { t: translate } = useTranslation();

  const params = route.params as { email: string };

  const navigation = useNavigation<EnterApplicationScreenProp>();

  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState<string[]>(Array(6).fill(""));

  const resetValues = useCallback(() => setValues(Array(6).fill("")), []);
  const onValueChanges = (array: string[]) => setValues(array);

  const navigateToNextStep = useCallback(() => {
    navigation.navigate("EnterApplicationScreen");
  }, [navigation]);

  const handleVerifyCode = useCallback(async () => {
    try {
      setIsLoading(true);

      const payload = {
        email: params.email.toLowerCase().trim(),
        token: Object.values(values).join(""),
      };
      const response = await api.post(`/email-verifications/verify-token`, payload);

      if (response.status === 204) {
        showSuccess({
          successCallback: navigateToNextStep,
          successCode: SuccessCode.EMAIL_VERIFICATION_SUCCESS,
        })
      }
    } catch (error) {
      handleError({ error, callback: resetValues });
    } finally {
      setIsLoading(false);
    }
  }, [params.email, values, navigateToNextStep, resetValues]);

  const handleReceiveNewVerificationCode = async () => {
    try {
      setIsLoading(true);

      const response = await api.put(
        `/email-verifications/${params.email.toLowerCase().trim()}`
      );

      if (response.status === 204) {
        showSuccess({
          successCallback: resetValues,
          successCode: SuccessCode.EMAIL_VERIFICATION_RENEW_SUCCESS,
        })
      }
    } catch (error) {
      handleError({ error, callback: resetValues });
    } finally {
      setIsLoading(false);
    }
  };

  const showAlert = useCallback(() => {
    Alert.alert(
      translate("INCOMPLETE_FIELDS_TITLE"),
      translate("INCOMPLETE_FIELDS_MESSAGE"),
    );
  }, [translate]);

  const handleSubmitCode = useCallback(() => {
    const isFormValid = values.every((value) => value.trim() !== "");

    if (isFormValid) {
      handleVerifyCode();
    } else {
      showAlert();
    }
  }, [values, handleVerifyCode, showAlert]);

  return (
    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
      <HeaderUnauthenticatedScreens title={translate("INSERT_CODE")} />
      <Container>
        <CenteredTypograph
          title={translate("CODE_SENT_MESSAGE").replace("[EMAIL]", params.email)}
          mt={8}
          mb={24}
          size={18}
        />

        <InputContainer>
          <Inputs inputs={6} onValueChanges={onValueChanges} values={values} />
        </InputContainer>

        <Button
          title={translate("VERIFY_CODE_BUTTON")}
          mt={36}
          onPress={handleSubmitCode}
          disabled={isLoading}
          isLoading={isLoading}
        />

        <ResendTokenButton
          activeOpacity={0.75}
          disabled={isLoading}
          onPress={handleReceiveNewVerificationCode}
        >
          <ResendTokenTypograph title={translate("RESEND_CODE")} />
        </ResendTokenButton>
      </Container>
    </ScrollView>
  );
}

export { InsertCodeScreen };

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: theme.colors.background_black,
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    color: theme.colors.white,
    fontSize: 24,
    fontFamily: theme.fonts.Roboto_700Bold,
  },
});
