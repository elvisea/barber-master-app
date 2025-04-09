import { schema } from "../constants";

type Form = Record<keyof typeof schema.fields, string>;

type AuthenticationResponse = {
  expiresIn: number;
  accessToken: string;
  refreshToken: string;
};

export { Form, AuthenticationResponse };
