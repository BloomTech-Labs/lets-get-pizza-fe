import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { string, ref } from "yup";

import API from "../../utils/API";
//Renamed to setAuth & include the user object(s)
import setAuth from "../../utils/auth";
import composeSchema from "../../utils/composeSchema";

const registrationSchema = {
  username: string()
    .max(128, "Username is too long")
    .required("Username is required"),
  password: string()
    .min(4, "Password is too short")
    .required("Password is required"),
  password_verify: string()
    .oneOf([ref("password")], "Passwords are not the same")
    .min(4, "Password is too short")
    .required("Password confirmation is required"),
  email: string()
    .email("Invalid email")
    .required("E-mail address is required")
};

export default function RegisterForm(props) {
  const { extraValues, extraSchema, endpoint, redirect_url, children } = props;
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        password_verify: "",
        email: "",
        ...extraValues
      }}
      validationSchema={composeSchema(registrationSchema, extraSchema)}
      onSubmit={(values, { setSubmitting, setFieldError }) => {
        // Disable form submission while running API request
        setSubmitting(true);

        // Copy values object and delete password verification
        // before sending request
        const payload = Object.assign({}, values);
        delete payload.password_verify;

        API.post(endpoint, payload)
          .then(response => {
            //Changed this function name to setAuth, and included the curr_user and curr_location in the scope
            setAuth(response.data);
            //Add a set user function here
            setSubmitting(false);

            // Redirect to specified route
            history.push(redirect_url);
          })
          .catch(error => {
            // Display server error
            setFieldError("message", error.response.data.message);
            setSubmitting(false);
          });
      }}
    >
      {props => (
        <Form {...props.children}>
          <div style={{ color: "red" }}>{props.errors.message}</div>

          <Field type="text" name="username" placeholder="Username" />
          <ErrorMessage name="username" />

          <Field type="email" name="email" placeholder="Email address" />
          <ErrorMessage name="email" />

          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" />

          <Field
            type="password"
            name="password_verify"
            placeholder="Password verification"
          />
          <ErrorMessage name="password_verify" />

          {children}

          <button type="submit" disabled={props.isSubmitting || !props.isValid}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

RegisterForm.defaultProps = {
  endpoint: "/auth/user/register",
  redirect_url: "/locations/map"
};
