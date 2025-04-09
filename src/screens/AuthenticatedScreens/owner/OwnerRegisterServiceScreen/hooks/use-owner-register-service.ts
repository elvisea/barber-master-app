import { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import useOwnerRegisterServiceStore from "../store";

export const useOwnerRegisterService = () => {
  const { establishmentId, isLoading, handleRegisterService, handleSelectedEstablishment, resetState } = useOwnerRegisterServiceStore(store => store);

  console.log("Status carregamento:", isLoading);
  console.log("Estabelecimento selecionado:", establishmentId);

  useFocusEffect(
    useCallback(() => {

      return () => {
        resetState();
      };
    }, [resetState])
  );

  return { establishmentId, isLoading, handleRegisterService, handleSelectedEstablishment };
};
