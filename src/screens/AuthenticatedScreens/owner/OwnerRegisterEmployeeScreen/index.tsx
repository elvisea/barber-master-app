import { Alert } from 'react-native';
import React, { useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { useNavigation, useRoute } from '@react-navigation/native';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { translateError } from '@/utils/translate-error';
import { formatInputValue } from '@/utils/format-input-value';

import { HorizontalList } from '@/components/HorizontalList';
import { HeaderAuthenticatedScreens } from '@/components/HeaderAuthenticatedScreens';

import { Button } from '@/components/Button';
import { Typography } from '@/components/Typography';
import { Input } from '@/components/Input';
import { MiniButton } from '@/components/MiniButton';

import { Form, Params } from './types';
import { inputs, schema } from './constants';
import { useOwnerRegisterEmployee } from './hooks';

import { Container, ContainerFilter, InputContainer, ScrollContainer } from './styles';

function OwnerRegisterEmployeeScreen() {
  const route = useRoute();
  const params = route.params as Params;

  const navigation = useNavigation();
  const { t: translate } = useTranslation();

  const {
    isLoading,
    handleRegisterEmployee,
    establishmentId,
    handleSelectedEstablishment
  } = useOwnerRegisterEmployee();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Form>({
    resolver: yupResolver(schema),
  });

  const success = () => {
    navigation.navigate('OwnerEmployeesScreen');
    reset();
  };

  const goBack = () => {
    navigation.goBack();
    reset();
  };

  const showAlert = () => {
    Alert.alert(
      translate('YOU_MUST_SELECT_THE_ESTABLISHMENT_TITLE'),
      translate('YOU_MUST_SELECT_THE_ESTABLISHMENT_MESSAGE'),
    );
  };

  const onSubmit = async (form: Form) => {
    if (!establishmentId) {
      showAlert();
      return;
    }

    await handleRegisterEmployee({ form, establishmentId, success });
  };

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

        <Typography title={`${translate('REGISTER_EMPLOYEE_MESSAGE')}`} mb={16} />

        <ContainerFilter>
          <Typography title={`${translate('SELECT_AN_ESTABLISHMENT')}`} />
          <HorizontalList>{renderEstablishment()}</HorizontalList>
        </ContainerFilter>

        <InputContainer>
          {inputs.map((input) => (
            <React.Fragment key={input.name}>
              <Typography title={translate(input.title)} size={16} mt={input.mt} mb={input.mb} />

              <Controller
                control={control}
                name={input.name}
                render={({ field: { onChange, value } }) => (
                  <Input
                    autoCorrect={input.autoCorrect}
                    autoCapitalize={input.autoCapitalize}
                    placeholder={translate(input.placeholder)}
                    keyboardType={input.keyboardType}
                    onChangeText={onChange}
                    maxLength={input.maxLength}
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
          title={translate('SAVE_EMPLOYEE_BUTTON')}
          mt={40}
          mb={12}
          disabled={isLoading}
          isLoading={isLoading}
          onPress={handleSubmit(onSubmit)}
        />

        <Button
          title={translate('GO_BACK')}
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

export { OwnerRegisterEmployeeScreen };
