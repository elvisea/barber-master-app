import { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import useOwnerRegisterEmployeeStore from "../store";

export const useOwnerRegisterEmployee = () => {
  const {
    establishmentId,
    isLoading,
    handleRegisterEmployee,
    handleSelectedEstablishment,
    resetState,
  } = useOwnerRegisterEmployeeStore((store) => store);

  console.log("Status de carregamento", isLoading ? "Carregando..." : "Pronto");
  console.log("Estabelecimento selecionado", establishmentId);

  useFocusEffect(
    useCallback(() => {
      return () => {
        resetState();
      };
    }, [resetState])
  );

  return { establishmentId, isLoading, handleRegisterEmployee, handleSelectedEstablishment };
};
