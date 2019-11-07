import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
  city: Yup.string(),
  state: Yup.string()
});

export default function Register() {
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
          city: "",
          state: ""
        }}
        validationSchema={registrationSchema}
        onSubmit={values => {
          // Delete password verification before sending request
          const valuesPayload = Object.assign({}, values);
          delete valuesPayload.password_verify;

          alert("Form submitted!");
          console.log(valuesPayload);
        }}
      >
        {() => (
          <Form>
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

            <Field type="text" name="city" placeholder="City" />
            <Field type="text" name="state" placeholder="State" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
