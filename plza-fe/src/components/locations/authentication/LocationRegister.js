import React from "react";
import SimpleContainer from "../../main/SimpleContainer";
import AuthForm from "../../authentication/AuthForm";
import { locationRegisterFields } from "../../forms/FormInformation";
import { useSelector } from "react-redux";
import { locationRegister } from "../../../redux/actions/locationsActions";

export default function LocationsRegister() {
  const [loading, error] = useSelector(({location}) => [location.isLoading, location.error])
  return (
    <SimpleContainer title="Register a location">
      <AuthForm
        isRegistrationForm
        registerFields={locationRegisterFields}
        registerSubmit={locationRegister}
        type='register'
        diet={{name: 'dietary_offerings', label: 'Dietary Offerings'}}
        loading={loading}
        error={error}
      />
    </SimpleContainer>
  );
}
