import React from "react";
import SimpleContainer from "../main/SimpleContainer";
import AuthenticateForm from "../authentication/AuthenticateForm";

const Login = () => (
  <SimpleContainer icon="sign in" title="Log in">
    <AuthenticateForm />
  </SimpleContainer>
);

export default Login;
