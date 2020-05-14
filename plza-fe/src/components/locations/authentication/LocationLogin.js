import React from "react";
import SimpleContainer from "../../main/SimpleContainer";
import AuthForm from "../../authentication/AuthForm";
import { locationLogin } from "../../../redux/actions/locationsActions";
import { useSelector } from "react-redux";

const LocationsLogin = () => {
  const [loading, error] = useSelector(({location}) => [location.isLoading, location.error])
  return (
  <SimpleContainer icon="sign in" title="Business Log In">
    <AuthForm 
      type='login' 
      loginSubmit={locationLogin} 
      diet={{name: 'dietary_offerings', label: 'Dietary Offerings'}}
      loading={loading}
      error={error}
    />
  </SimpleContainer>
  )
};

export default LocationsLogin;
