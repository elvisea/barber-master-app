import * as yup from "yup";

export const PASSWORD_REGEX =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{8,}$/;

const schema = yup.object({
  email: yup.string().required("PLEASE_ENTER_EMAIL").email("INVALID_EMAIL"),
  password: yup
    .string()
    .required("ENTER_PASSWORD")
    .min(8, "PASSWORD_LENGTH")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/,
      "PASSWORD_REQUIREMENTS",
    ),
});

export { schema };
