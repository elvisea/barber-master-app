import { create } from "zustand";

import api from "@/services/api";
import { SuccessCode } from "@/enums";

import { handleError } from "@/utils/handle-error";
import { showSuccess } from "@/utils/show-success";
import { formatPhone } from "@/utils/format-phone";

import { Store } from "../types";

const useOwnerRegisterEstablishmentStore = create<Store>((set) => ({
  isLoading: false,

  handleRegisterEstablishment: async (form, successCallback) => {
    set({ isLoading: true });

    const data = {
      name: form.name.trim(),
      address: form.address.trim(),
      phone: formatPhone(form.phone),
    };

    try {
      const response = await api.post("/establishments", data);

      if (response.status === 201) {
        showSuccess({
          successCallback: successCallback,
          successCode: SuccessCode.ESTABLISHMENT_CREATION_SUCCESS,
        })
      }

    } catch (error) {
      handleError({ error })
    } finally {
      set({ isLoading: false });
    }
  },

}));

export default useOwnerRegisterEstablishmentStore;
