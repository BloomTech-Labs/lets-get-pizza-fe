import React from "react";
import { Formik, Form, Field } from "formik";

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
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert("Form submitted!");
            setSubmitting(false);
          });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="username" name="username" placeholder="Username" />
            <Field type="email" name="email" placeholder="Email address" />
            <Field type="password" name="password" placeholder="Password" />
            <Field
              type="password"
              name="password_verify"
              placeholder="Password verification"
            />
            <Field name="dietary_preference" as="select" multiple>
              <option value="gluten-free">Gluten-free</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
            </Field>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
