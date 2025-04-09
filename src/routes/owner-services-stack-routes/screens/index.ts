import { ScreenConfig } from "../types";

import { OwnerServicesScreen } from "@/screens/AuthenticatedScreens/owner/OwnerServicesScreen";
import { OwnerRegisterServiceScreen } from "@/screens/AuthenticatedScreens/owner/OwnerRegisterServiceScreen";

const screens: ScreenConfig[] = [
  { name: "OwnerServicesScreen", component: OwnerServicesScreen },
  { name: "OwnerRegisterServiceScreen", component: OwnerRegisterServiceScreen },
];

export default screens;
