import React from "react";
import SimpleContainer from "../main/SimpleContainer";
import AuthForm from "../authentication/AuthForm";
import { userLogin } from "../../redux/actions/userActions";

const Login = () => {
  return (
  <SimpleContainer icon="sign in" title="User Log In">
    <AuthForm loginSubmit={userLogin} type='login' />
  </SimpleContainer>
  )
};

export default Login;
