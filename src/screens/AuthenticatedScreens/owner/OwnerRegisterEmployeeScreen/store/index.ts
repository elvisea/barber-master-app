import { create } from "zustand";

import api from "@/services/api";
import { SuccessCode } from "@/enums";

import { handleError } from "@/utils/handle-error";
import { showSuccess } from "@/utils/show-success";
import { formatPhone } from "@/utils/format-phone";

import { Store, StoreState } from "../types";

const initialState: StoreState = {
  isLoading: false,
  establishmentId: null,
}

const useOwnerRegisterEmployeeStore = create<Store>((set, get) => ({
  ...initialState,

  handleRegisterEmployee: async ({ form, establishmentId, success }) => {
    set({ isLoading: true });

    const data = {
      name: form.name,
      address: form.address,
      email: form.email,
      role: form.role,
      phone: formatPhone(form.phone),
      establishmentId
    };

    try {
      const response = await api.post("/employees", data);

      if (response.status === 201) {
        showSuccess({
          successCallback: success,
          successCode: SuccessCode.EMPLOYEE_CREATION_SUCCESS,
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

export default useOwnerRegisterEmployeeStore;
