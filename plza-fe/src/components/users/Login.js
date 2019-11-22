import React from "react";
import { Container, Header } from "semantic-ui-react";
import LoginForm from "../authentication/LoginForm";

export default function Login() {
  return (
    <Container>
      <Header as={"h1"}>Log in</Header>
      <LoginForm />
    </Container>
  );
}
