export type RootStackParamList = {
  OwnerEmployeesScreen: undefined;
  OwnerRegisterEmployeeScreen: {
    establishments: { id: number; name: string; }[]
  };
};

export type ScreenConfig = {
  name: keyof RootStackParamList;
  component: React.ComponentType<any>;
};
