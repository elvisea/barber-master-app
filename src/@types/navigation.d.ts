export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      // Telas não autenticadas

      ContactUsScreen: undefined;
      CreateAccountScreen: undefined;
      EnterApplicationScreen: undefined;

      InsertCodeScreen: {
        email: string;
      };

      // Telas autenticadas

      LaunchScreen: undefined;
      OwnerServicesScreen: undefined;
      OwnerAppointmentsScreen: undefined;
      OwnerClientsScreen: undefined;
      OwnerEstablishmentsScreen: undefined;
      OwnerFinancialScreen: undefined;
      OwnerEmployeesScreen: undefined;
      OwnerSaveEstablishmentsScreen: undefined;
    }
  }
}
