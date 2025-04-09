import * as yup from "yup";

const PHONE_REGEX = /^\d{11}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const PASSWORD_REGEX =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{8,}$/;

const schema = yup.object({
  name: yup.string().required("ENTER_NAME"),
  email: yup
    .string()
    .required("PLEASE_ENTER_EMAIL")
    .matches(EMAIL_REGEX, "INVALID_EMAIL"),
  password: yup
    .string()
    .required("ENTER_PASSWORD")
    .min(8, "PASSWORD_LENGTH")
    .matches(PASSWORD_REGEX, "PASSWORD_REQUIREMENTS"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "PASSWORD_MISMATCH")
    .required("ENTER_CONFIRM_PASSWORD"),
  phone: yup
    .string()
    .required("ENTER_PHONE")
    .matches(PHONE_REGEX, "INVALID_PHONE"),
});

export { schema };
