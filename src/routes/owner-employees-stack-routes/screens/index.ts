import { ScreenConfig } from "../types";

import { OwnerEmployeesScreen } from "@/screens/AuthenticatedScreens/owner/OwnerEmployeesScreen";
import { OwnerRegisterEmployeeScreen } from "@/screens/AuthenticatedScreens/owner/OwnerRegisterEmployeeScreen";

const screens: ScreenConfig[] = [
  { name: "OwnerEmployeesScreen", component: OwnerEmployeesScreen },
  { name: "OwnerRegisterEmployeeScreen", component: OwnerRegisterEmployeeScreen },
];

export default screens;
