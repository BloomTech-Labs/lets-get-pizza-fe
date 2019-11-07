import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const registrationSchema = values =>
  Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string()
      .min(4, "Password is too short")
      .required("Password is required"),
    password_verify: Yup.string()
      .oneOf([values.password], "Passwords are not the same")
      .min(4, "Too short")
      .required("Password confirmation is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Required")
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
          dietary_preference: [],
          favorite_pizza_toppings: "",
          city: "",
          state: ""
        }}
        // validationSchema={registrationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert("Form submitted!");
            console.log(values);
            setSubmitting(false);
          });
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <Field type="username" name="username" placeholder="Username" />
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

            <Field as="select" multiple name="dietary_preference">
              <option value="gluten-free">Gluten-free</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
            </Field>

            <Field type="text" name="city" placeholder="City" />
            <Field type="text" name="state" placeholder="State" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
