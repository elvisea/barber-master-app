export type RootStackParamList = {
  OwnerServicesScreen: undefined;
  OwnerRegisterServiceScreen: {
    establishments: { id: number; name: string; }[]
  };
};

export type ScreenConfig = {
  name: keyof RootStackParamList;
  component: React.ComponentType<any>;
};
