import * as yup from "yup";
import { InputProps } from "../types";

const schema = yup.object({
  name: yup
    .string()
    .trim()
    .required("PLEASE_ENTER_NAME_SERVICE"),

  description: yup
    .string()
    .trim()
    .required("PLEASE_ENTER_DESCRIPTION_SERVICE"),

  price: yup
    .number()
    .integer("PRICE_MUST_BE_INTEGER")
    .positive("PRICE_MUST_BE_POSITIVE")
    .min(0, "PRICE_CANNOT_BE_NEGATIVE")
    .required("PLEASE_ENTER_PRICE_SERVICE"),

  duration: yup
    .number()
    .integer("DURATION_MUST_BE_INTEGER")
    .min(0, "DURATION_CANNOT_BE_NEGATIVE")
    .required("PLEASE_ENTER_DURATION_SERVICE"),

  commissionEmployee: yup
    .number()
    .positive("COMMISSION_MUST_BE_POSITIVE")
    .integer("COMMISSION_MUST_BE_INTEGER")
    .min(0, "COMMISSION_CANNOT_BE_NEGATIVE")
    .required("PLEASE_ENTER_COMMISSION_SERVICE"),
});

const inputs: InputProps[] = [
  {
    title: "NAME_SERVICE",
    mt: 0,
    mb: 8,
    autoCapitalize: "none",
    autoCorrect: false,
    name: "name",
    placeholder: "NAME_SERVICE_PLH",
    keyboardType: "default",
  },
  {
    title: "DESCRIPTION_SERVICE",
    mt: 16,
    mb: 8,
    autoCapitalize: "none",
    autoCorrect: false,
    name: "description",
    placeholder: "DESCRIPTION_SERVICE_PLH",
    keyboardType: "default",
  },
  {
    title: "DURATION_SERVICE",
    mt: 16,
    mb: 8,
    autoCapitalize: "none",
    autoCorrect: false,
    name: "duration",
    placeholder: "DURATION_SERVICE_PLH",
    keyboardType: "numeric",
  },
  {
    title: "PRICE_SERVICE",
    mt: 16,
    mb: 8,
    autoCapitalize: "none",
    autoCorrect: false,
    name: "price",
    placeholder: "PRICE_SERVICE_PLH",
    keyboardType: "numeric",
  },
  {
    title: "COMMISSION_SERVICE",
    mt: 16,
    mb: 8,
    autoCapitalize: "none",
    autoCorrect: false,
    name: "commissionEmployee",
    placeholder: "COMMISSION_SERVICE_PLH",
    keyboardType: "numeric",
  }
];

export { schema, inputs };
