import React from "react";

import SimpleContainer from "../main/SimpleContainer";
import AuthenticateForm from "../authentication/AuthenticateForm";

const LocationsLogin = () => (
  <SimpleContainer icon="sign in" title="Log in">
    <AuthenticateForm endpoint={"/auth/location/login"} />
  </SimpleContainer>
);

export default LocationsLogin;
