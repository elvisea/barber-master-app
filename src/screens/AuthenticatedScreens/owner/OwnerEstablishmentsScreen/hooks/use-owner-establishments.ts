import { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { logStatus } from "@/utils/log-status";
import useEstablishmentStore from "../store";

export const useOwnerEstablishments = () => {

  const {
    isLoading,
    establishments,
    fetchCount,
    resetState,
    fetchEstablishments,
  } = useEstablishmentStore();

  logStatus({
    storeName: "useOwnerEstablishments",
    isLoading: isLoading,
    itemsLength: establishments.length,
    fetchCount: fetchCount,
    fetchFunctionName: "fetchEstablishments"
  });

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      if (isActive) {
        fetchEstablishments();
      }

      return () => {
        isActive = false;
        resetState();
      };
    }, [fetchEstablishments, resetState])
  );

  return { isLoading, establishments };
};
