import { Alert } from "react-native";
import React, { useCallback } from "react";

import { useTranslation } from "react-i18next";

import { useNavigation, useRoute } from "@react-navigation/native";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { translateError } from "@/utils/translate-error";
import { formatInputValue } from "@/utils/format-input-value";

import { HorizontalList } from "@/components/HorizontalList";
import { HeaderAuthenticatedScreens } from "@/components/HeaderAuthenticatedScreens";

import { Button } from "@/components/Button";
import { Typography } from "@/components/Typography";
import { Input } from "@/components/Input";
import { MiniButton } from "@/components/MiniButton";

import { Form, Params } from "./types";
import { inputs, schema } from "./constants";
import { useOwnerRegisterService } from "./hooks/use-owner-register-service";

import { Container, ContainerFilter, InputContainer, ScrollContainer } from "./styles";

function OwnerRegisterServiceScreen() {
  const route = useRoute();
  const params = route.params as Params;

  const navigation = useNavigation();
  const { t: translate } = useTranslation();

  const { isLoading, handleRegisterService, establishmentId, handleSelectedEstablishment } = useOwnerRegisterService();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Form>({
    resolver: yupResolver(schema),
  });

  const success = useCallback(() => {
    navigation.navigate("OwnerServicesScreen");
    reset();
  }, [navigation, reset]);

  const goBack = () => {
    navigation.goBack();
    reset();
  }

  const showAlert = () => {
    Alert.alert(
      translate("YOU_MUST_SELECT_THE_ESTABLISHMENT_TITLE"),
      translate("YOU_MUST_SELECT_THE_ESTABLISHMENT_MESSAGE"),
    );
  };

  const onSubmit = useCallback(async (form: Form) => {
    if (!establishmentId) {
      showAlert();
      return;
    }

    await handleRegisterService({ form, establishmentId, success })
  }, [establishmentId, showAlert, handleRegisterService]);


  const renderEstablishment = useCallback(() => {
    return params.establishments.map((item) => (
      <MiniButton
        key={item.id}
        title={item.name}
        isActive={item.id === establishmentId}
        onPress={() => handleSelectedEstablishment(item.id)}
      />
    ));
  }, [params.establishments, establishmentId, handleSelectedEstablishment]);

  return (
    <Container>
      <HeaderAuthenticatedScreens />
      <ScrollContainer>

        <ContainerFilter>
          <Typography title={`${translate("SELECT_AN_ESTABLISHMENT")}`} />
          <HorizontalList>
            {renderEstablishment()}
          </HorizontalList>
        </ContainerFilter>

        <Typography title={`${translate("REGISTER_SERVICE_MESSAGE")}`} mb={16} />

        <InputContainer>

          {inputs.map((input) => (
            <React.Fragment key={input.name}>
              <Typography
                title={input.title}
                size={14}
                mt={input.mt}
                mb={input.mb}
              />

              <Controller
                control={control}
                name={input.name}
                render={({ field: { onChange, value } }) => (
                  <Input
                    autoCorrect={input.autoCorrect}
                    autoCapitalize={input.autoCapitalize}
                    placeholder={input.placeholder}
                    keyboardType={input.keyboardType}
                    onChangeText={onChange}
                    value={formatInputValue(value)}
                    accessibilityLabel={input.placeholder}
                    error={translateError(translate, errors[input.name]?.message)}
                  />
                )}
              />
            </React.Fragment>
          ))}

        </InputContainer>

        <Button
          title={translate("SAVE_SERVICE_BUTTON")}
          mt={40}
          mb={12}
          disabled={isLoading}
          isLoading={isLoading}
          onPress={handleSubmit(onSubmit)}
        />

        <Button
          title={translate("GO_BACK")}
          tc="red"
          border
          bg="white"
          bc="red"
          mb={80}
          disabled={isLoading}
          isLoading={isLoading}
          onPress={goBack}
        />
      </ScrollContainer>
    </Container>
  );
}

export { OwnerRegisterServiceScreen };
