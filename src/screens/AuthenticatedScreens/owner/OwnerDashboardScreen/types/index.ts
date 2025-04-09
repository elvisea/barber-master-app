import { Colors } from "@/typings";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

// Tipo base para cards com propriedades comuns
type BaseCardData = {
  title: string;
  value: string;
  iconColor: Colors;
};

// Tipo base para cards que usam MaterialCommunityIcons
type BaseMaterialCommunityCardData = BaseCardData & {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
};

export type Screen =
  | "OwnerServicesScreen"
  | "OwnerAppointmentsScreen"
  | "OwnerClientsScreen"
  | "OwnerEstablishmentsScreen"
  | "OwnerFinancialScreen"
  | "OwnerEmployeesScreen";

export type AppointmentCardData = BaseMaterialCommunityCardData;

export type FinancialCardData = BaseMaterialCommunityCardData & {
  titleColor: Colors;
  bg: Colors;
};

export type QuickAccessData = {
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  screen: Screen;
};

export type MetricCardData = BaseMaterialCommunityCardData;

export type PerformanceCardData = BaseMaterialCommunityCardData;

export type DailyAppointmentData = BaseCardData & {
  icon: string;
};
