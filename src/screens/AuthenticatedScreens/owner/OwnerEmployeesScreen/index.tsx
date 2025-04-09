import React, { useCallback } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { useTranslation } from 'react-i18next';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { MiniButton } from '@/components/MiniButton';
import { Button } from '@/components/Button';
import { Typography } from '@/components/Typography';
import { Loading } from '@/components/Loading';

import { EmployeeCard } from '@/components/employee-card';
import { HorizontalList } from '@/components/HorizontalList';
import { HeaderAuthenticatedScreens } from '@/components/HeaderAuthenticatedScreens';

import { RootStackParamList } from '@/routes/owner-employees-stack-routes/types';

import { Employee } from './types';
import { useOwnerEmployess } from './hooks';
import { Container, ContainerFilter, Content, EmptyList } from './styles';

type OwnerEmployeesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'OwnerRegisterEmployeeScreen'
>;

function OwnerEmployeesScreen() {
  const navigation = useNavigation<OwnerEmployeesScreenNavigationProp>();
  const { t: translate } = useTranslation();

  const {
    isLoading: isLoadingServices,
    isLoadingEstablishments,
    employees,
    establishmentId,
    handleSelectedEstablishment,
    establishments,
  } = useOwnerEmployess();

  const renderItem = ({ item }: ListRenderItemInfo<Employee>) => (
    <EmployeeCard
      name={item.name}
      email={item.email}
      onPress={() => console.log(`Item ${item.id} foi pressionado`)}
    />
  );

  const renderEstablishment = useCallback(() => {
    return establishments.map((item) => (
      <MiniButton
        key={item.publicId}
        title={item.name}
        isActive={item.id === establishmentId}
        onPress={() => handleSelectedEstablishment(item.id)}
      />
    ));
  }, [establishments, establishmentId, handleSelectedEstablishment]);

  const renderEmployess = () => {
    if (isLoadingServices) {
      return <Loading />;
    }

    return (
      <FlatList
        data={employees}
        ListHeaderComponent={
          <Typography
            title={`${translate('QUANTITY_EMPLOYEES')}: ${employees.length}`}
          />
        }
        ListEmptyComponent={<EmptyList />}
        keyExtractor={(item) => item.publicId}
        showsVerticalScrollIndicator={false}
        style={{ width: '100%' }}
        contentContainerStyle={{ gap: 12 }}
        renderItem={renderItem}
      />
    );
  };

  const navigateToRegisterEmployee = () => {
    const params = establishments.map((establishment) => ({
      id: establishment.id,
      name: establishment.name,
    }));
    navigation.navigate('OwnerRegisterEmployeeScreen', { establishments: params });
  };

  if (isLoadingEstablishments) {
    return <Loading />;
  }

  return (
    <Container>
      <HeaderAuthenticatedScreens />
      <Content>
        <ContainerFilter>
          <Typography
            title={`${translate('SELECT_AN_ESTABLISHMENT')}: ${establishments.length}`}
          />
          <HorizontalList>{renderEstablishment()}</HorizontalList>
        </ContainerFilter>

        {renderEmployess()}

        <Button
          mt={16}
          title={translate('REGISTER_EMPLOYEE_BUTTON')}
          onPress={navigateToRegisterEmployee}
        />
      </Content>
    </Container>
  );
}

export { OwnerEmployeesScreen };
