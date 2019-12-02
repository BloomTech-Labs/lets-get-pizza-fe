import React from "react";
import { Input, Dropdown } from "formik-semantic-ui";
import { string } from "yup";

import SimpleContainer from "../main/SimpleContainer";
import AuthenticateForm from "../authentication/AuthenticateForm";

export default function Register() {
  return (
    <SimpleContainer
      icon="add user"
      title="Register account"
      description="Create an account for great features and fun!"
    >
      <AuthenticateForm
        isRegistrationForm
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
        <Input
          name="display_name"
          label="Display name"
          inputProps={{
            placeholder:
              "Either a nickname or your real name, or nothing at all, no pressure."
          }}
        />

        <Dropdown
          name="dropdown"
          label="Dietary preferences"
          inputProps={{
            multiple: true,
            placeholder: "Select dietary preferences"
          }}
          options={[
            { text: "Gluten-free", value: "gluten-free" },
            { text: "Vegetarian", value: "vegetarian" },
            { text: "Vegan", value: "vegan" }
          ]}
        />

        <Input
          name="favorite_pizza_toppings"
          label="Favorite pizza toppings"
          inputProps={{
            placeholder: "Pepperoni, olives, pineapple, anchovies"
          }}
        />

        <Input
          name="display_location"
          label="Location"
          inputProps={{
            placeholder: "A rough approximation of where you live"
          }}
        />
      </AuthenticateForm>
    </SimpleContainer>
  );
}
