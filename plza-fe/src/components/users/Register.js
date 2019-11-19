import React from "react";
import { Field, ErrorMessage } from "formik";
import { string } from "yup";

import RegisterForm from "../authentication/RegisterForm";

export default function Register() {
  return (
    <div className="register">
      <h1>Register Account</h1>

      <RegisterForm
        extraValues={{
          profile_image: "",
          display_name: "",
          dietary_preference: [],
          favorite_pizza_toppings: "",
          display_location: ""
        }}
        extraSchema={{
          display_name: string(),
          favorite_pizza_toppings: string(),
          display_location: string()
        }}
      >
        <Field type="text" name="display_name" placeholder="Display name" />
        <ErrorMessage name="display_name" />

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
      </RegisterForm>
    </div>
  );
}
