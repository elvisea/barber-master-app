import { create } from "zustand";

import { AuthStore } from "./types";

import api from "@/services/api";

import { getRoleFromToken } from "@/utils/get-role-from-token";

import {
  KEY_ACCESS_TOKEN,
  KEY_REFRESH_TOKEN,
  KEY_ROLE,
} from "@/constants/storage";

import { AuthenticationResponse } from "@/screens/UnauthenticatedScreens/EnterApplicationScreen/types";

import {
  getLocalStorage,
  removeLocalStorage,
  saveLocalStorage,
} from "@/storage/async-storage";

import { Roles } from "@/enums";

const keyRole = KEY_ROLE;
const keyAccessToken = KEY_ACCESS_TOKEN;
const keyRefreshToken = KEY_REFRESH_TOKEN;

const useAuthStore = create<AuthStore>((set) => ({
  role: null,
  isAuthenticated: false,

  signIn: async (response: AuthenticationResponse) => {
    api.defaults.headers.common.Authorization = `Bearer ${response.accessToken}`;
    set({ isAuthenticated: true });

    const role = getRoleFromToken(response.accessToken);
    set({ role });

    await saveLocalStorage(keyRole, role);
    await saveLocalStorage(keyAccessToken, response.accessToken);
    await saveLocalStorage(keyRefreshToken, response.refreshToken);
  },

  signOut: async () => {
    api.defaults.headers.common.Authorization = undefined;

    set({ role: null });
    set({ isAuthenticated: false });

    await removeLocalStorage(keyRole);
    await removeLocalStorage(keyAccessToken);
    await removeLocalStorage(keyRefreshToken);
  },

  loadTokenFromStorage: async () => {
    const storageRole = (await getLocalStorage(keyRole)) as Roles;
    const storageAccessToken = await getLocalStorage(keyAccessToken);

    if (storageAccessToken && storageRole) {
      api.defaults.headers.common.Authorization = `Bearer ${storageAccessToken}`;
      set({ role: storageRole });
      set({ isAuthenticated: true });
    }
  },
}));

export default useAuthStore;
