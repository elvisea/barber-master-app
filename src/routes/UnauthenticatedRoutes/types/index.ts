export type RootStackParamList = {
  LaunchScreen: undefined;
  EnterApplicationScreen: undefined;
  CreateAccountScreen: undefined;
  ContactUsScreen: undefined;

  InsertCodeScreen: {
    id: string;
    email: string;
  };
};

export type ScreenConfig = {
  name: keyof RootStackParamList;
  component: React.ComponentType<any>;
};
