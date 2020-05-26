import { object } from "yup";

/**
 * Compose Yup validation schema
 *
 * @param {object} initialSchema Example: `username`, `password`
 * @param {object} extraSchema
 * @returns {object} Composed object with initial and extra schema together
 */
export default function composeSchema(initialSchema, extraSchema) {
  return object().shape({ ...initialSchema, ...extraSchema });
}
