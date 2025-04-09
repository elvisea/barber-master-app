import React, { useCallback } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

import { useTranslation } from "react-i18next";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { MiniButton } from "@/components/MiniButton";
import { Button } from "@/components/Button";
import { Typography } from "@/components/Typography";
import { Loading } from "@/components/Loading";

import { RootStackParamList } from "@/routes/owner-services-stack-routes/types";

import { HorizontalList } from "@/components/HorizontalList";
import { HeaderAuthenticatedScreens } from "@/components/HeaderAuthenticatedScreens";
import { EstablishmentServiceCard } from "@/components/establishment-service-card";

import { useOwnerEstablishmentServices } from "./hooks/use-owner-establishment-services";

import { EstablishmentService } from "./store/types";
import { Container, ContainerFilter, Content, EmptyList } from "./styles";

type OwnerServicesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "OwnerRegisterServiceScreen"
>;

function OwnerServicesScreen() {
  const navigation = useNavigation<OwnerServicesScreenNavigationProp>();
  const { t: translate } = useTranslation();

  const {
    isLoading: isLoadingServices,
    isLoadingEstablishments,
    establishmentServices,
    establishmentId,
    handleSelectedEstablishment,
    establishments
  } = useOwnerEstablishmentServices();

  const renderItem = ({ item }: ListRenderItemInfo<EstablishmentService>) => (
    <EstablishmentServiceCard
      name={item.name}
      duration={item.duration}
      price={item.price}
      description={item.description}
      commissionEmployee={item.commissionEmployee}
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

  const renderServices = () => {
    if (isLoadingServices) {
      return <Loading />;
    }

    return (
      <FlatList
        data={establishmentServices}
        ListHeaderComponent={
          <Typography
            title={`${translate("QUANTITY_SERVICES")}: ${establishmentServices.length}`}
          />
        }
        ListEmptyComponent={<EmptyList />}
        keyExtractor={(item) => item.publicId}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
        contentContainerStyle={{ gap: 12 }}
        renderItem={renderItem}
      />
    );
  };

  const navigateToServiceRegister = () => {
    const params = establishments.map(establishment => ({ id: establishment.id, name: establishment.name }))
    navigation.navigate("OwnerRegisterServiceScreen", { establishments: params })
  }

  if (isLoadingEstablishments) {
    return <Loading />;
  }

  return (
    <Container>
      <HeaderAuthenticatedScreens />
      <Content>

        <ContainerFilter>
          <Typography
            title={`${translate("SELECT_ESTABLISHMENT")}: ${establishments.length}`}
          />
          <HorizontalList>
            {renderEstablishment()}
          </HorizontalList>
        </ContainerFilter>

        {renderServices()}

        <Button
          mt={16}
          title={translate("REGISTER_SERVICE_BUTTON")}
          onPress={navigateToServiceRegister}
        />
      </Content>
    </Container>
  );
}

export { OwnerServicesScreen };
