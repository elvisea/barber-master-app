import { schema } from "../constants";

type Form = Record<keyof typeof schema.fields, string>;

export type StoreState = {
  isLoading: boolean;
};

export type StoreActions = {
  handleRegisterEstablishment: (form: Form, successCallback?: () => void) => Promise<void>;
};

type Store = StoreState & StoreActions;

export { Form, Store };
