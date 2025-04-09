import { Roles } from "@/enums";
import { AuthenticationResponse } from "@/screens/UnauthenticatedScreens/EnterApplicationScreen/types";

export type AuthState = {
  role: Roles | null;
  isAuthenticated: boolean;
};

export type AuthActions = {
  signIn: (authenticationResponse: AuthenticationResponse) => Promise<void>;
  signOut: () => Promise<void>;
  loadTokenFromStorage: () => Promise<void>;
};

export type AuthStore = AuthState & AuthActions;
