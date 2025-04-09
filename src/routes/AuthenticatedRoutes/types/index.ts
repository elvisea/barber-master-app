import { Roles } from "@/enums";

import { MaterialIcons } from "@expo/vector-icons";

export type Screens = {
  [key in Roles]: {
    name: string;
    component: React.ComponentType;
    icon: keyof typeof MaterialIcons.glyphMap;
    title: string;
  }[];
};
