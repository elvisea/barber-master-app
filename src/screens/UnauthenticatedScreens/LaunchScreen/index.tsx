import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useTranslation } from "react-i18next";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Button } from "@/components/Button";
import { Typography } from "@/components/Typography";

import { Container, Hero, styles } from "./styles";
import { RootStackParamList } from "@/routes/UnauthenticatedRoutes/types";

type LaunchScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "LaunchScreen"
>;

function LaunchScreen() {
  const { t: translate } = useTranslation();
  const navigation = useNavigation<LaunchScreenNavigationProp>();

  const handlePressEnter = () => {
    navigation.navigate("EnterApplicationScreen");
  };

  const handlePressCreateAccount = () => {
    navigation.navigate("CreateAccountScreen");
  };

  const handlePressContactUs = () => {
    navigation.navigate("ContactUsScreen");
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <Container>
        <Hero />

        <Typography
          title={translate("MANAGE_BARBER_SHOP")}
          size={24}
          font="Roboto_700Bold"
          mb={20}
          style={styles.title}
        />

        <Typography
          title={translate("ADMIN_DESCRIPTION")}
          mb={40}
          size={18}
          style={styles.subtitle}
        />

        <Button title={translate("LOGIN")} mb={12} onPress={handlePressEnter} />

        <Button
          title={translate("CREATE_ACCOUNT")}
          tc="primary_purple"
          border
          bg="white"
          bc="primary_purple"
          onPress={handlePressCreateAccount}
        />

        <TouchableOpacity activeOpacity={0.75} onPress={handlePressContactUs}>
          <Typography
            title={translate("CONTACT_US")}
            mt={36}
            mb={48}
            style={styles.contact}
          />
        </TouchableOpacity>
      </Container>
    </ScrollView>
  );
}

export { LaunchScreen };
