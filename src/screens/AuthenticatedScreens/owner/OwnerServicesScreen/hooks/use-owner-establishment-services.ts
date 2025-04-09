import { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { logStatus } from "@/utils/log-status";

import useEstablishmentServicesStore from "../store";
import { useOwnerEstablishments } from "../../OwnerEstablishmentsScreen/hooks/use-owner-establishments";

export const useOwnerEstablishmentServices = () => {

  const { establishments, isLoading: isLoadingEstablishments } = useOwnerEstablishments();

  const { establishmentId, isLoading, fetchCount, establishmentServices, handleSelectedEstablishment, resetState } = useEstablishmentServicesStore();

  logStatus({
    storeName: "useEstablishmentServicesStore",
    isLoading: isLoading,
    itemsLength: establishmentServices.length,
    fetchCount: fetchCount,
    fetchFunctionName: "fetchEstablishmentServices"
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
    establishmentServices,
    establishmentId,
    handleSelectedEstablishment,
    establishments,
    isLoadingEstablishments,
  };
};
