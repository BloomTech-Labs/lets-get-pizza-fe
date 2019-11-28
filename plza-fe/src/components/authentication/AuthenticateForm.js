import React from "react";
import { Formik, Field } from "formik";
import { Form, Message } from "semantic-ui-react";

import { string, ref } from "yup";

import API from "../../utils/API";
import setAuth from "../../utils/auth";
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

export default function AuthenticateForm(props) {
  const {
    endpoint,
    isRegistrationForm,
    extraValues,
    extraSchema,
    extraFields
  } = props;

  // If this is a registration form, spread registration schema into
  // the base schema, otherwise just return the base schema.
  const initialSchema = isRegistrationForm
    ? { ...baseSchema, ...registrationSchema }
    : baseSchema;

  return (
    <Formik
      initialValues={{ username: "", password: "", ...extraValues }}
      validationSchema={composeSchema(initialSchema, extraSchema)}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values, actions) => {
        // Copy values object so that it can be
        const payload = Object.assign({}, values);

        actions.setSubmitting(true);

        // If this is a registration form there is no need
        // to send the password verification field.
        if (isRegistrationForm) {
          delete payload.password_verify;
        }

        API.post(endpoint, payload)
          .then(response => {
            setAuth(response.data);

            // TODO: Add a set user function here
            actions.setSubmitting(false);
          })
          .catch(error => {
            // Display server error
            actions.setFieldError("message", error.response.data.message);
            actions.setSubmitting(false);
          });
      }}
    >
      {formik => (
        <Form error={!formik.isValid} onSubmit={formik.handleSubmit}>
          <Message error content={formik.errors.message} />

          <Form.Group widths="equal">
            <Field
              as={Form.Input}
              type="text"
              label="Username"
              name="username"
              error={formik.errors.username}
            />

            <Field
              as={Form.Input}
              type="password"
              label="Password"
              name="password"
              error={formik.errors.password}
            />

            {isRegistrationForm && (
              <>
                <Field
                  as={Form.Input}
                  type="password"
                  label="Verify password"
                  name="password_verify"
                  error={formik.errors.password_verify}
                />

                <Field
                  as={Form.Input}
                  type="email"
                  label="Email address"
                  name="email"
                  error={formik.errors.email}
                />
              </>
            )}
          </Form.Group>

          {props.children}

          <Form.Button
            type="submit"
            content="Log in"
            disabled={!formik.isValid}
          />
        </Form>
      )}
    </Formik>
  );
}

AuthenticateForm.defaultProps = {
  isRegistrationForm: false,
  endpoint: "/auth/user/login"
};
