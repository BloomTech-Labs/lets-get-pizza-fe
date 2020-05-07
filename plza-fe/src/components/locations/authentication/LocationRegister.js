import React from "react";
import SimpleContainer from "../../main/SimpleContainer";
import AuthForm from "../../authentication/AuthForm";
import { locationRegisterFields } from "../../forms/FormInformation";

export default function LocationsRegister() {
  return (
    <SimpleContainer title="Register a location">
      <AuthForm
        isRegistrationForm
        registerFields={locationRegisterFields}
        type='register'
        diet={{name: 'dietary_offerings', label: 'Dietary Offerings'}}
      />
    </SimpleContainer>
  );
}
