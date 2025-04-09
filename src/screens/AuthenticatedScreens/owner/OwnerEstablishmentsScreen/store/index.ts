import { create } from "zustand";

import api from "@/services/api";

import { handleError } from "@/utils/handle-error";

import { Store, State } from "./types";

const initialState: State = {
  isLoading: false,
  fetchCount: 0,
  establishments: [],
}

const useEstablishmentStore = create<Store>((set) => ({
  ...initialState,

  fetchEstablishments: async () => {
    set((state) => ({ fetchCount: state.fetchCount + 1, isLoading: true }));
    try {
      const response = await api.get("/establishments");
      set({ establishments: response.data });
    } catch (error) {
      handleError({ error })
    } finally {
      set({ isLoading: false });
    }
  },

  resetState: () => set({ ...initialState })

}));

export default useEstablishmentStore;
