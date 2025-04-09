import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { Screen } from "../types";

export const useOwnerDashboard = () => {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const navigateToSelectedQuickAccess = (screen: Screen) => {
    navigation.navigate(screen);
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Implementar lógica de atualização dos dados
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsRefreshing(false);
  };

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        // Implementar lógica de carregamento inicial dos dados
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error("Error loading dashboard data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialData();
  }, []);

  return {
    isLoading,
    isRefreshing,
    handleRefresh,
    navigateToSelectedQuickAccess,
  };
};
