import React from "react";
import { useHistory } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import API from "../../utils/API";
import setToken from "../../utils/token";

const registrationSchema = Yup.object().shape({
  username: Yup.string()
    .max(128, "Username is too long")
    .required("Username is required"),
  password: Yup.string()
    .min(4, "Password is too short")
    .required("Password is required"),
  password_verify: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords are not the same")
    .min(4, "Password is too short")
    .required("Password confirmation is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("E-mail address is required"),
  favorite_pizza_toppings: Yup.string(),
  display_location: Yup.string()
});

export default function Register() {
  let history = useHistory();

  return (
    <div className="register">
      <h1>Register Account</h1>

      <Formik
        initialValues={{
          username: "",
          password: "",
          password_verify: "",
          email: "",
          profile_image: "",
          display_name: "",
          dietary_preference: [],
          favorite_pizza_toppings: "",
          display_location: ""
        }}
        validationSchema={registrationSchema}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          setSubmitting(true);
          // Copy values object and delete password verification
          // before sending request
          const payload = Object.assign({}, values);
          delete payload.password_verify;

          API.post("/api/auth/user/register", payload)
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

            <Field type="text" name="display_name" placeholder="Display name" />
            <ErrorMessage name="display_name" />

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

            <Field as="select" multiple name="dietary_preference">
              <option value="gluten-free">Gluten-free</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
            </Field>

            <Field
              type="text"
              name="favorite_pizza_toppings"
              placeholder="Favorite pizza toppings"
            />

            <Field type="text" name="display_location" placeholder="Location" />

            <button type="submit" disabled={isSubmitting || !isValid}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
