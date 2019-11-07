import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(4, "Password is too short")
    .required("Password is required")
});

export default function Login() {
  return (
    <div className="login">
      <h1>Login</h1>

      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={values => {
          console.log(values);
          alert("Form submitted!");
        }}
      >
        {() => (
          <Form>
            <Field type="text" name="username" placeholder="Username" />
            <ErrorMessage name="username" />

            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
