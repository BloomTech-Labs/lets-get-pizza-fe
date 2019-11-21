import React from "react";
import { NavLink } from "react-router-dom";
import {logout} from '../../utils/auth'

const UserProfile = () => (
  <>
    <Menu.Item>Profile</Menu.Item>
    <Menu.Item>Logout</Menu.Item>
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
  const logoutUser = (e) => {
    e.preventDefault();
    logout();
  }

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
