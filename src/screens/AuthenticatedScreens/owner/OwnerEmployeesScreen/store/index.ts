import { create } from "zustand";

import api from "@/services/api";
import { handleError } from "@/utils/handle-error";

import { EmployeeState, EmployeeStateStore } from "../types";

const initialState: EmployeeState = {
  isLoading: false,
  fetchCount: 0,
  establishmentId: null,
  employees: [],
}

const useEmployeesStore = create<EmployeeStateStore>((set, get) => ({
  ...initialState,

  fetchEmployees: async () => {
    const establishmentId = get().establishmentId;

    if (!establishmentId) {
      console.log("Establishment ID is not set.");
      return;
    }

    set((state) => ({ fetchCount: state.fetchCount + 1, isLoading: true }));

    try {
      const response = await api.get("/employees", {
        params: { establishmentId },
      });
      set({ employees: response.data });
    } catch (error) {
      handleError({ error });
    } finally {
      set({ isLoading: false });
    }
  },

  handleSelectedEstablishment: (establishmentId) => {
    if (get().establishmentId !== establishmentId) {
      set({ establishmentId });
      get().fetchEmployees();
    }
  },

  resetState: () => set({ ...initialState }),
}));

export default useEmployeesStore;
