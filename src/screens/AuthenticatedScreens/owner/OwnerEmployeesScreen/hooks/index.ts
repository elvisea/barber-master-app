import { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { logStatus } from "@/utils/log-status";
import { useOwnerEstablishments } from "@/screens/AuthenticatedScreens/owner/OwnerEstablishmentsScreen/hooks/use-owner-establishments";

import useEmployeesStore from "../store";

export const useOwnerEmployess = () => {

  const { establishments, isLoading: isLoadingEstablishments } = useOwnerEstablishments();

  const { establishmentId, isLoading, fetchCount, employees, handleSelectedEstablishment, resetState } = useEmployeesStore();

  logStatus({
    storeName: "useEmployeesStore",
    isLoading: isLoading,
    itemsLength: employees.length,
    fetchCount: fetchCount,
    fetchFunctionName: "fetchEmployees"
  });

  const loadInitialData = useCallback(() => {
    if (establishments.length > 0) {
      const firstEstablishment = establishments[0];
      handleSelectedEstablishment(firstEstablishment.id);
    }
  }, [establishments, handleSelectedEstablishment]);

  useFocusEffect(
    useCallback(() => {

      loadInitialData();

      return () => {
        resetState();
      };
    }, [resetState, loadInitialData])
  );

  return {
    isLoading,
    employees,
    establishmentId,
    handleSelectedEstablishment,
    establishments,
    isLoadingEstablishments,
  };
};
