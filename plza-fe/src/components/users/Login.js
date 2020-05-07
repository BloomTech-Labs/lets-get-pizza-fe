import React from "react";
import SimpleContainer from "../main/SimpleContainer";
import AuthForm from "../authentication/AuthForm";
import { userLogin } from "../../redux/actions/userActions";
import { useSelector } from "react-redux";

const Login = () => {
  const [loading, error] = useSelector(({user}) => [user.isLoading, user.error])
  return (
  <SimpleContainer icon="sign in" title="User Log In">
    <AuthForm 
    loginSubmit={userLogin} 
    type='login' 
    diet={{name: "dietary_preference", label: 'Dietary Preferences'}} 
    loading={loading}
    error={error}
    />
  </SimpleContainer>
  )
};

export default Login;
