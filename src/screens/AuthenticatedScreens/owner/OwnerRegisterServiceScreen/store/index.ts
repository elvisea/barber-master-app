import { create } from "zustand";

import api from "@/services/api";
import { SuccessCode } from "@/enums";

import { handleError } from "@/utils/handle-error";
import { showSuccess } from "@/utils/show-success";

import { Store, StoreState } from "../types";

const initialState: StoreState = {
  isLoading: false,
  establishmentId: null,
}

const useOwnerRegisterServiceStore = create<Store>((set, get) => ({
  ...initialState,

  handleRegisterService: async ({ form, establishmentId, success }) => {
    set({ isLoading: true });

    const data = {
      name: form.name,
      description: form.description,
      price: form.price,
      duration: form.duration,
      commissionEmployee: form.commissionEmployee,
      establishmentId
    };

    try {
      const response = await api.post("/establishment-services", data);

      if (response.status === 201) {
        showSuccess({
          successCallback: success,
          successCode: SuccessCode.SERVICE_CREATION_SUCCESS,
        })
      }

    } catch (error) {
      handleError({ error })
    } finally {
      set({ isLoading: false });
    }
  },

  handleSelectedEstablishment: (establishmentId) => {
    if (get().establishmentId !== establishmentId) {
      set({ establishmentId });
    }
  },

  resetState: () => set({ ...initialState }),

}));

export default useOwnerRegisterServiceStore;
