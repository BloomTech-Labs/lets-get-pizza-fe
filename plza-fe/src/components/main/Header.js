import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import { hasToken, logout } from "../../utils/auth";

const UserProfile = () => (
  <>
    <Menu.Item as={NavLink} to="/users/profile">
      Profile
    </Menu.Item>
    <Menu.Item onClick={() => logout()}>Logout</Menu.Item>
  </>
);

const AuthenticateOptions = () => (
  <>
    <Menu.Item as={NavLink} to="/users/register">
      Register
    </Menu.Item>
    <Menu.Item as={NavLink} to="/users/login">
      Log in
    </Menu.Item>
  </>
);

export default function Masthead() {
  return (
    <Menu stackable inverted style={{ borderRadius: 0 }}>
      <Container>
        <Menu.Item>
          <h3>Plza</h3>
        </Menu.Item>
        <Menu.Item as={NavLink} exact to="/">
          Home
        </Menu.Item>
        <Menu.Item as={NavLink} to="/locations/map">
          Map
        </Menu.Item>
        <Menu.Item as={NavLink} to="/locations/search">
          Search
        </Menu.Item>
        <Menu.Menu position="right">
          {hasToken ? <UserProfile /> : <AuthenticateOptions />}
        </Menu.Menu>
      </Container>
    </Menu>
  );
}
