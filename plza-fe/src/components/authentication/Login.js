import React from "react";
import { useHistory } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import API from "../../utils/API";
import setToken from "../../utils/token";

const loginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(4, "Password is too short")
    .required("Password is required")
});

export default function Login() {
  const history = useHistory();

  return (
    <div className="login">
      <h1>Login</h1>

      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          setSubmitting(true);
          const { username, password } = values;

          API.post("/api/auth/user/login", { username, password })
            .then(response => {
              setToken(response.data.token);
              setSubmitting(false);

              history.push("/");
            })
            .catch(error => {
              setFieldError("message", error.response.data.message);
              setSubmitting(false);
            });
        }}
      >
        {({ errors, isSubmitting, isValid }) => (
          <Form>
            <div className="message">{errors.message}</div>

            <Field type="text" name="username" placeholder="Username" />
            <ErrorMessage name="username" />

            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" />

            <button type="submit" disabled={isSubmitting || !isValid}>
              Log in
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
