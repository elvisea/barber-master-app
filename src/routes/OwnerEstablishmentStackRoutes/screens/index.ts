import { ScreenConfig } from "../types";

import { OwnerEstablishmentsScreen } from "@/screens/AuthenticatedScreens/owner/OwnerEstablishmentsScreen";
import { OwnerRegisterEstablishmentScreen } from "@/screens/AuthenticatedScreens/owner/OwnerRegisterEstablishmentScreen";

const screens: ScreenConfig[] = [
  { name: "OwnerEstablishmentsScreen", component: OwnerEstablishmentsScreen },
  { name: "OwnerRegisterEstablishmentScreen", component: OwnerRegisterEstablishmentScreen },
];

export default screens;
