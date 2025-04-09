import React from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

import { useTranslation } from "react-i18next";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "@/routes/OwnerEstablishmentStackRoutes/types";

import { Loading } from "@/components/Loading";
import { HeaderAuthenticatedScreens } from "@/components/HeaderAuthenticatedScreens";
import { EstablishmentCard } from "@/components/establishment";
import { Button } from "@/components/Button";
import { Typography } from "@/components/Typography";

import { Establishment } from "./store/types";
import { useOwnerEstablishments } from "./hooks/use-owner-establishments";

import { Container, Content, EmptyList } from "./styles";

type OwnerRegisterEstablishmentScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "OwnerRegisterEstablishmentScreen"
>;

function OwnerEstablishmentsScreen() {
  const navigation = useNavigation<OwnerRegisterEstablishmentScreenNavigationProp>();
  const { t: translate } = useTranslation();

  const { isLoading, establishments } = useOwnerEstablishments();

  const renderItem = ({ item }: ListRenderItemInfo<Establishment>) => (
    <EstablishmentCard
      name={item.name}
      address={item.address}
      onPress={() => console.log("Vai fazer algo...")}
    />
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <HeaderAuthenticatedScreens />
      <Content>

        {/* FlatList possui atributo para inserir componente para lista vazia */}
        {establishments.length === 0 && (
          <EmptyList />
        )}

        {establishments.length > 0 && (
          <FlatList
            data={establishments}
            ListHeaderComponent={
              <Typography
                title={`${translate("ESTABLISHMENTS_LIST_HEADER")}: ${establishments.length}`}
              />
            }
            keyExtractor={(item) => item.publicId}
            showsVerticalScrollIndicator={false}
            style={{ width: "100%" }}
            contentContainerStyle={{ gap: 12 }}
            renderItem={renderItem}
          />
        )}

        <Button
          mt={16}
          title={translate("REGISTER_ESTABLISHMENT_BUTTON")}
          onPress={() => navigation.navigate("OwnerRegisterEstablishmentScreen")}
        />
      </Content>
    </Container>
  );
}

export { OwnerEstablishmentsScreen };
