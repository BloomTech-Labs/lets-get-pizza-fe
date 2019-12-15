import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Dropdown } from "semantic-ui-react";
import { hasToken, logoutUser } from "../../utils/auth";

import Logo from "./Logo.png";

import "./Header.css";

const UserProfile = () => (
  <>
    <Menu.Item as={NavLink} to="/users/profile">
      Profile
    </Menu.Item>
    <Menu.Item onClick={() => logoutUser()}>Logout</Menu.Item>
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
  const [isVisible, setVisibility] = useState(false);

  const toggleMenuVisibility = () => {
    setVisibility(!isVisible);
  };

  return (
    <Menu
      inverted
      stackable
      className={`${isVisible ? "open" : "closed"}`}
      style={{ borderRadius: 0, marginBottom: 0 }}
    >
      <Menu.Item header>
        <div style={{ width: "102px", padding: "0 12px" }}>
          <img width="100%" src={Logo} alt="Plza logo" />
        </div>
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
      <Dropdown text="About" pointing className="link item">
        <Dropdown.Menu>
          <Dropdown.Item as={NavLink} to="/pages/eaters">
            User Features
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="/pages/businesses">
            Business Features
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="/pages/about">
            About Our Team
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Menu.Menu position="right">
        {hasToken ? <UserProfile /> : <AuthenticateOptions />}
      </Menu.Menu>

      <div
        className={`hamburger ${isVisible ? "active" : "disabled"}`}
        onClick={() => toggleMenuVisibility()}
      >
        <span className="hamburger-bun"></span>
        <span className="hamburger-patty"></span>
        <span className="hamburger-bun"></span>
      </div>
    </Menu>
  );
}
