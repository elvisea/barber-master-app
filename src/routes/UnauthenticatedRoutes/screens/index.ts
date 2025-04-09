import { ScreenConfig } from "../types";

import { LaunchScreen } from "@/screens/UnauthenticatedScreens/LaunchScreen";
import { CreateAccountScreen } from "@/screens/UnauthenticatedScreens/CreateAccountScreen";
import { EnterApplicationScreen } from "@/screens/UnauthenticatedScreens/EnterApplicationScreen";
import { ContactUsScreen } from "@/screens/UnauthenticatedScreens/ContactUsScreen";
import { InsertCodeScreen } from "@/screens/UnauthenticatedScreens/InsertCodeScreen";

const screens: ScreenConfig[] = [
  { name: "LaunchScreen", component: LaunchScreen },
  { name: "CreateAccountScreen", component: CreateAccountScreen },
  { name: "EnterApplicationScreen", component: EnterApplicationScreen },
  { name: "ContactUsScreen", component: ContactUsScreen },
  { name: "InsertCodeScreen", component: InsertCodeScreen },
];

export default screens;
