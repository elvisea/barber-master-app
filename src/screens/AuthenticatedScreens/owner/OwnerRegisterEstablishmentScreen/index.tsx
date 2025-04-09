import React from "react";

import { useTranslation } from "react-i18next";

import { useNavigation } from "@react-navigation/native";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { translateError } from "@/utils/translate-error";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Typography } from "@/components/Typography";
import { HeaderAuthenticatedScreens } from "@/components/HeaderAuthenticatedScreens";

import { Form } from "./types";
import { schema } from "./constants";

import useOwnerRegisterEstablishmentStore from "./store";
import { Container, InputContainer, ScrollContainer } from "./styles";

function OwnerRegisterEstablishmentScreen() {
  const navigation = useNavigation();
  const { t: translate } = useTranslation();

  const { isLoading, handleRegisterEstablishment } = useOwnerRegisterEstablishmentStore();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Form>({
    resolver: yupResolver(schema),
  });

  const success = () => {
    navigation.navigate("OwnerEstablishmentsScreen");
    reset();
  }

  const goBack = () => {
    navigation.goBack();
    reset();
  }

  const onSubmit = async (data: Form) => {
    await handleRegisterEstablishment(data, success);
  };

  return (
    <Container>
      <HeaderAuthenticatedScreens />
      <ScrollContainer>

        <Typography title={`${translate("REGISTER_ESTABLISHMENT_MESSAGE")}`} mb={16} />

        <InputContainer>
          <Typography title={translate("NAME_ESTABLISHMENT")} size={14} mb={8} />

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                placeholder={translate("NAME_ESTABLISHMENT_PLH")}
                keyboardType="default"
                onChangeText={onChange}
                value={value}
                accessibilityLabel={translate("NAME_ESTABLISHMENT_PLH")}
                error={translateError(translate, errors.name?.message)}
              />
            )}
          />

          <Typography
            title={translate("ADDR_ESTABLISHMENT")}
            size={14}
            mt={16}
            mb={8}
          />

          <Controller
            control={control}
            name="address"
            render={({ field: { onChange, value } }) => (
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                placeholder={translate("ADDR_ESTABLISHMENT_PLH")}
                keyboardType="default"
                onChangeText={onChange}
                value={value}
                accessibilityLabel={translate("ADDR_ESTABLISHMENT_PLH")}
                error={translateError(translate, errors.address?.message)}
              />
            )}
          />

          <Typography
            title={translate("PHONE_ESTABLISHMENT")}
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
                placeholder={translate("PHONE_ESTABLISHMENT_PLH")}
                keyboardType="numeric"
                maxLength={11}
                onChangeText={onChange}
                value={value}
                accessibilityLabel={translate("PHONE_ESTABLISHMENT_PLH")}
                error={translateError(translate, errors.phone?.message)}
              />
            )}
          />

        </InputContainer>

        <Button
          title={translate("SAVE_ESTABLISHMENT_BUTTON")}
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

export { OwnerRegisterEstablishmentScreen };
