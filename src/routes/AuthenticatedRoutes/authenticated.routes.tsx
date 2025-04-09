import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import screens from "./screens";

import useAuthStore from "@/store/auth";

import { DrawerContainer } from "@/components/Drawer/DrawerContainer";
import { DrawerHeader } from "@/components/Drawer/DrawerHeader";
import { DrawerItem } from "@/components/Drawer/DrawerItem";
import { DrawerList } from "@/components/Drawer/DrawerList";

const Drawer = createDrawerNavigator();

type Props = {
  navigation: any;
};

const CustomDrawerContent: React.FC<Props> = ({ navigation }) => {
  const role = useAuthStore((state) => state.role);

  return (
    <DrawerContainer>
      <DrawerHeader email="elvis@gmail.com" name="Elvis Amancio" />

      <DrawerList>
        {role &&
          screens[role].map((item, index) => (
            <DrawerItem
              key={index}
              icon={item.icon}
              title={item.title}
              onPress={() => navigation.navigate(item.name)}
            />
          ))}
      </DrawerList>
    </DrawerContainer>
  );
};

function AuthenticatedRoutes() {
  const role = useAuthStore((state) => state.role);

  if (!role) {
    return null;
  }

  return (
    <>
      <Drawer.Navigator
        screenOptions={{ headerShown: false, drawerStyle: { width: "72%" } }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        {screens[role].map((screen) => (
          <Drawer.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </Drawer.Navigator>
    </>
  );
}

export { AuthenticatedRoutes };
