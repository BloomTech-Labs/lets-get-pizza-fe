import React from "react";
import { Form, Input, Button } from "formik-semantic-ui";
import { InputError, ServerErrorMessage } from "../forms/Errors";

import { string, ref } from "yup";

import API from "../../utils/API";
import authenticateUser from "../../utils/auth";
import composeSchema from "../../utils/composeSchema";

const baseSchema = {
  username: string().required("Username is required"),
  password: string()
    .min(4, "Password is too short")
    .required("Password is required"),
};

const registrationSchema = {
  password_verify: string()
    .oneOf([ref("password")], "Passwords are not the same")
    .min(4, "Password is too short")
    .required("Password confirmation is required"),
  email: string().email("Invalid email").required("E-mail address is required"),
};

export default function AuthenticateForm(props) {
  const {
    endpoint,
    isRegistrationForm,
    extraValues,
    extraSchema,
    children,
  } = props;

  // If this is a registration form, combine registration schema and
  // base schema together, otherwise just return the base schema.
  const initialSchema = isRegistrationForm
    ? { ...baseSchema, ...registrationSchema }
    : baseSchema;

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
      .then((response) => {
        authenticateUser(response.data);
        actions.setSubmitting(false);
      })
      .catch((error) => {
        // Display server error at top of form
        //actions.setFieldError("message", error.response.data.message);
        console.log("my log ", error);
        actions.setSubmitting(false);
      });
  };

  return (
    <Form
      initialValues={{ username: "", password: "", ...extraValues }}
      validateOnBlur={false}
      validationSchema={composeSchema(initialSchema, extraSchema)}
      onSubmit={(values, actions) => onSubmit(values, actions)}
    >
      {(formik) => (
        <Form.Children>
          {formik.errors.message && (
            <ServerErrorMessage message={formik.errors.message} />
          )}

          <Form.Group widths="equal">
            <Input
              inputProps={{
                icon: "user",
                placeholder: "Something memorable",
              }}
              label="Username"
              name="username"
              errorComponent={InputError}
            />

            <Input
              inputProps={{
                icon: "lock",
                type: "password",
                placeholder: "Minimum 4 characters",
              }}
              label="Password"
              name="password"
              errorComponent={InputError}
            />

            {/* Sprinkle registration fields */}
            {isRegistrationForm && (
              <Form.Children>
                <Input
                  inputProps={{
                    icon: "lock",
                    type: "password",
                    placeholder: "Re-enter your password",
                  }}
                  label="Verify password"
                  name="password_verify"
                  errorComponent={InputError}
                />

                <Input
                  inputProps={{
                    icon: "at",
                    type: "email",
                    placeholder: "test@example.com",
                  }}
                  label="Email address"
                  name="email"
                  errorComponent={InputError}
                />
              </Form.Children>
            )}
          </Form.Group>

          {children}

          <Button.Submit
            primary
            disabled={!formik.isValid || formik.isSubmitting}
          >
            {isRegistrationForm ? <>Register</> : <>Log in</>}
          </Button.Submit>
        </Form.Children>
      )}
    </Form>
  );
}

AuthenticateForm.defaultProps = {
  isRegistrationForm: false,
  endpoint: "/auth/user/login",
};
