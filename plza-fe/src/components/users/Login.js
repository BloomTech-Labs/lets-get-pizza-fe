import React from "react";
import SimpleContainer from "../main/SimpleContainer";
import AuthenticateForm from "../authentication/AuthenticateForm";
import AuthForm from "../authentication/AuthForm";

const Login = () => {
  return (
  <SimpleContainer icon="sign in" title="Log in">
    <AuthForm />
  </SimpleContainer>
  )
};

export default Login;
