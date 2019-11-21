import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { string } from "yup";

import API from "../../utils/API";
//Renamed to setAuth & include the user object(s)
import setAuth from "../../utils/auth";
import composeSchema from "../../utils/composeSchema";

const loginSchema = {
  username: string().required("Username is required"),
  password: string()
    .min(4, "Password is too short")
    .required("Password is required")
};

export default function LoginForm(props) {
  const history = useHistory();
  const { extraValues, extraSchema, endpoint, redirect_url, children } = props;

  return (
    <Formik
      initialValues={{ username: "", password: "", ...extraValues }}
      validationSchema={composeSchema(loginSchema, extraSchema)}
      onSubmit={(values, { setSubmitting, setFieldError }) => {
        setSubmitting(true);

        API.post(endpoint, values)
          .then(response => {
            setAuth(response.data);
            setSubmitting(false);

            // Redirect to specified URL
            history.push(redirect_url);
          })
          .catch(error => {
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

          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" />

          {children}

          <button type="submit" disabled={props.isSubmitting || !props.isValid}>
            Log in
          </button>
        </Form>
      )}
    </Formik>
  );
}

LoginForm.defaultProps = {
  endpoint: "/auth/user/login",
  redirect_url: "/locations/map"
};
