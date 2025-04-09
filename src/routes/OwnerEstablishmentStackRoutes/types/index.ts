export type RootStackParamList = {
  OwnerEstablishmentsScreen: undefined;
  OwnerRegisterEstablishmentScreen: undefined;
};

export type ScreenConfig = {
  name: keyof RootStackParamList;
  component: React.ComponentType<any>;
};
