import * as yup from "yup";
import { schema } from "../constants";
import { KeyboardTypeOptions, TextInputProps } from "react-native";

type Params = {
  establishments: { id: number; name: string }[];
};

type SchemaFields = keyof typeof schema.fields;

type InputProps = {
  title: string;
  mt: number;
  mb: number;
  autoCapitalize: TextInputProps["autoCapitalize"];
  autoCorrect: boolean;
  name: SchemaFields;
  placeholder: string;
  keyboardType: KeyboardTypeOptions;
  maxLength?: number;
};

type Form = yup.InferType<typeof schema>;

export type StoreState = {
  isLoading: boolean;
  establishmentId: number | null;
};

type HandleRegisterEmployee = {
  form: Form;
  establishmentId: number;
  success?: () => void;
};

export type StoreActions = {
  handleRegisterEmployee: (handleRegisterEmployee: HandleRegisterEmployee) => Promise<void>;
  handleSelectedEstablishment: (establishmentId: number) => void;
  resetState: () => void;
};

type Store = StoreState & StoreActions;

export { Form, Store, InputProps, SchemaFields, Params };
