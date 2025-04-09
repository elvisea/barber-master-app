import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";

import useAuthStore from "@/store/auth";

import { AuthenticatedRoutes } from "./AuthenticatedRoutes/authenticated.routes";
import { UnauthenticatedRoutes } from "./UnauthenticatedRoutes/unauthenticated.routes";

function Routes() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
    </NavigationContainer>
  );
}

export { Routes };
