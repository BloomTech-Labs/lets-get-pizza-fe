import React from "react";
import { Formik, Form, Field } from "formik";
import { string, ref } from "yup";

import API from "../../utils/API";
import authenticateUser from "../../utils/auth";
import composeSchema from "../../utils/composeSchema";

const baseSchema = {
  username: string().required("Username is required"),
  password: string()
    .min(4, "Password is too short")
    .required("Password is required")
};

const registrationSchema = {
  password_verify: string()
    .oneOf([ref("password")], "Passwords are not the same")
    .min(4, "Password is too short")
    .required("Password confirmation is required"),
  email: string()
    .email("Invalid email")
    .required("E-mail address is required")
};

export default function AuthenticateForm({
  endpoint,
  isRegistrationForm,
  extraValues,
  extraSchema,
  children
}) {
  // If this is a registration form, combine registration schema and
  // base schema together, otherwise just return the base schema.
  const initialSchema = isRegistrationForm
    ? { ...baseSchema, ...registrationSchema }
    : baseSchema;

  // If there is extra schema then compose the initial and extra schema
  // together, otherwise just return the initial schema.
  const finalizedSchema = extraSchema
    ? composeSchema(initialSchema, extraSchema)
    : initialSchema;

  const onSubmit = (values, actions) => {
    // Copy values object so that we can modify it later on
    const payload = Object.assign({}, values);

    // Notify that we are submitting the form right now.
    actions.setSubmitting(true);

    // If this is a registration form there is no need
    // to send the password verification field back to the server
    if (isRegistrationForm) {
      delete payload.password_verify;
    }

    API.post(endpoint, payload)
      .then(response => {
        authenticateUser(response.data);
        actions.setSubmitting(false);
      })
      .catch(error => {
        // Display server error
        actions.setFieldError("message", error.response.data.message);
        actions.setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={{ username: "", password: "", ...extraValues }}
      validationSchema={finalizedSchema}
      onSubmit={(values, actions) => onSubmit(values, actions)}
    >
      {formik => (
        <Form onSubmit={formik.handleSubmit}>
          <Field type="text" placeholder="Username" name="username" />
          <Field type="password" placeholder="Password" name="password" />

          {/* Sprinkle registration fields */}
          {isRegistrationForm && (
            <>
              <Field
                type="password"
                placeholder="Verify password"
                name="password_verify"
              />

              <Field type="email" placeholder="Email address" name="email" />
            </>
          )}

          {children}

          <button type="submit" disabled={!formik.isValid}>
            Log in
          </button>
        </Form>
      )}
    </Formik>
  );
}

AuthenticateForm.defaultProps = {
  isRegistrationForm: false,
  endpoint: "/auth/user/login"
};
