import React from "react";
import { Input, TextArea, Dropdown } from "formik-semantic-ui";

import SimpleContainer from "../../main/SimpleContainer";
import AuthenticateForm from "../../authentication/AuthenticateForm";

export default function LocationsRegister() {
  return (
    <SimpleContainer title="Register a location">
      <AuthenticateForm
        isRegistrationForm
        endpoint="/auth/location/register"
        extraValues={{
          business_name: "",
          first_name: "",
          last_name: "",
          address: "",
          website_url: "",
          official_description: "",
          latitude: 0,
          longitude: 0,
          order_service: "",
          store_bio: "",
          dietary_offerings: []
        }}
      >
        <Input
          name="business_name"
          label="Business name"
          inputProps={{ placeholder: "Business name" }}
        />

        <Input
          name="first_name"
          label="First name"
          inputProps={{ placeholder: "First name" }}
        />

        <Input
          name="last_name"
          label="Last name"
          inputProps={{ placeholder: "Last name" }}
        />

        <Input
          name="address"
          label="Street address"
          inputProps={{
            placeholder: "Use your full postal address"
          }}
        />

        <Input
          name="website_url"
          label="Website URL"
          inputProps={{ type: "url", placeholder: "https://example.com/" }}
        />

        <TextArea
          name="official_description"
          inputProps={{ placeholder: "Business description" }}
        />

        <TextArea
          name="store_bio"
          inputProps={{
            placeholder: "Any location specific information goes here"
          }}
        />

        <Dropdown
          name="dietary_offerings"
          label="Dietary offerings"
          inputProps={{
            multiple: true,
            placeholder: "Select dietary offerings that you offer"
          }}
          options={[
            { text: "Gluten-free", value: "gluten-free" },
            { text: "Vegetarian", value: "vegetarian" },
            { text: "Vegan", value: "vegan" }
          ]}
        />
      </AuthenticateForm>
    </SimpleContainer>
  );
}
