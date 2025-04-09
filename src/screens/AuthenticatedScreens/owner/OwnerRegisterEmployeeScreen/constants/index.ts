import * as yup from "yup";

import { InputProps } from "../types";

const PHONE_REGEX = /^\d{11}$/;

const schema = yup.object({
  name: yup
    .string()
    .trim()
    .required("PLEASE_ENTER_EMPLOYEE_NAME"),

  address: yup
    .string()
    .trim()
    .required("PLEASE_ENTER_EMPLOYEE_ADDRESS"),

  email: yup
    .string()
    .email("PLEASE_ENTER_EMPLOYEE_VALID_EMAIL")
    .required("PLEASE_ENTER_EMPLOYEE_EMAIL"),

  role: yup
    .string()
    .oneOf(
      ["BARBER"],
      `PLEASE_ENTER_EMPLOYEE_VALID_ROLE. Valid values are: BARBER`
    )
    .required("PLEASE_ENTER_EMPLOYEE_ROLE"),

  phone: yup
    .string()
    .required("PLEASE_ENTER_EMPLOYEE_PHONE")
    .max(11, "PLEASE_ENTER_EMPLOYEE_PHONE_MAX_LENGTH")
    .matches(PHONE_REGEX, "PLEASE_ENTER_EMPLOYEE_VALID_PHONE_NUMBER"),
});

const inputs: InputProps[] = [
  {
    title: "NAME_EMPLOYEE",
    mt: 0,
    mb: 8,
    autoCapitalize: "none",
    autoCorrect: false,
    name: "name",
    placeholder: "NAME_EMPLOYEE_PLACEHOLDER",
    keyboardType: "default",
  },
  {
    title: "ADDRESS_EMPLOYEE",
    mt: 16,
    mb: 8,
    autoCapitalize: "none",
    autoCorrect: false,
    name: "address",
    placeholder: "ADDRESS_EMPLOYEE_PLACEHOLDER",
    keyboardType: "default",
  },
  {
    title: "EMAIL_EMPLOYEE",
    mt: 16,
    mb: 8,
    autoCapitalize: "none",
    autoCorrect: false,
    name: "email",
    placeholder: "EMAIL_EMPLOYEE_PLACEHOLDER",
    keyboardType: "email-address",
  },
  {
    title: "ROLE_EMPLOYEE",
    mt: 16,
    mb: 8,
    autoCapitalize: "none",
    autoCorrect: false,
    name: "role",
    placeholder: "ROLE_EMPLOYEE_PLACEHOLDER",
    keyboardType: "default",
  },
  {
    title: "PHONE_EMPLOYEE",
    mt: 16,
    mb: 8,
    autoCapitalize: "none",
    autoCorrect: false,
    name: "phone",
    placeholder: "PHONE_EMPLOYEE_PLACEHOLDER",
    keyboardType: "numeric",
    maxLength: 11,
  },
];

export { schema, inputs };

//Exemplo com enum para usar no schema
// .oneOf(
//   Object.values(Roles),
//   `PLEASE_ENTER_EMPLOYEE_VALID_ROLE. Valid values are: ${Object.values(Roles).join(", ")}`
// )
