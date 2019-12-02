import React from "react";
import SimpleContainer from "../main/SimpleContainer";
import AuthenticateForm from "../authentication/AuthenticateForm";

export default function Login() {
  return (
    <SimpleContainer icon="sign in" title="Log in">
      <AuthenticateForm />
    </SimpleContainer>
  );
}
