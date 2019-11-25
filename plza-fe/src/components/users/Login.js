import React from "react";
import { Container, Header } from "semantic-ui-react";
import AuthenticateForm from "../authentication/AuthenticateForm";

export default function Login() {
  return (
    <Container>
      <Header as={"h1"}>Log in</Header>
      <AuthenticateForm />
    </Container>
  );
}
