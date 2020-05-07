import React from "react";
import SimpleContainer from "../../main/SimpleContainer";
import AuthForm from "../../authentication/AuthForm";
import { locationLogin } from "../../../redux/actions/locationsActions";

const LocationsLogin = () => (
  <SimpleContainer icon="sign in" title="Business Log In">
    <AuthForm 
      type='login' 
      loginSubmit={locationLogin} 
      diet={{name: 'dietary_offerings', label: 'Dietary Offerings'}}
    />
  </SimpleContainer>
);

export default LocationsLogin;
