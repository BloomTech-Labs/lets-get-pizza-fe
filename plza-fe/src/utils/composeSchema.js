import { object } from "yup";

export default function composeSchema(initialSchema, extraSchema) {
  return object().shape({ ...initialSchema, ...extraSchema });
}
