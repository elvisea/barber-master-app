import * as yup from "yup";

const PHONE_REGEX = /^\d{11}$/;

const schema = yup.object({
  name: yup.string().required("PLEASE_ENTER_NAME_ESTABLISHMENT"),
  address: yup
    .string()
    .required("PLEASE_ENTER_ADDRESS_ESTABLISHMENT"),
  phone: yup
    .string()
    .required("PLEASE_ENTER_PHONE_ESTABLISHMENT")
    .matches(PHONE_REGEX, "INVALID_PHONE"),
});

export { schema };
