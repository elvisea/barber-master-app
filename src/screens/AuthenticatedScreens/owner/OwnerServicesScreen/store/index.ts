import { create } from "zustand";

import api from "@/services/api";
import { handleError } from "@/utils/handle-error";

import { EstablishmentServiceState, EstablishmentServiceStore } from "./types";

const initialState: EstablishmentServiceState = {
  isLoading: false,
  fetchCount: 0,
  establishmentId: null,
  establishmentServices: [],
}

const useEstablishmentServicesStore = create<EstablishmentServiceStore>((set, get) => ({
  ...initialState,

  fetchEstablishmentServices: async () => {
    const establishmentId = get().establishmentId;

    if (!establishmentId) {
      console.log("Establishment ID is not set.");
      return;
    }

    set((state) => ({ fetchCount: state.fetchCount + 1, isLoading: true }));

    try {
      const response = await api.get("/establishment-services", {
        params: { establishmentId },
      });
      set({ establishmentServices: response.data });
    } catch (error) {
      handleError({ error });
    } finally {
      set({ isLoading: false });
    }
  },

  handleSelectedEstablishment: (establishmentId) => {
    if (get().establishmentId !== establishmentId) {
      set({ establishmentId });
      get().fetchEstablishmentServices();
    }
  },

  resetState: () => set({ ...initialState }),
}));

export default useEstablishmentServicesStore;
