import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Confirm, Dropdown } from "semantic-ui-react";
import { hasToken, logoutUser } from "../../utils/auth";

import Logo from "./Logo.png";

import "./Header.css";

const NavbarItem = props => <Menu.Item as={NavLink} {...props} />;

export default function Masthead() {
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const [isModalVisible, setModalVisibility] = useState(false);

  const toggleMenuVisibility = () => {
    setMenuVisibility(!isMenuVisible);
  };

  return (
    <Menu
      attached="top"
      inverted
      stackable
      className={`${isMenuVisible ? "open" : "closed"}`}
      style={{ borderRadius: 0 }}
    >
      <Menu.Item header>
        <img
          style={{ width: "90px", padding: "6px" }}
          src={Logo}
          alt="Plza logo"
        />
      </Menu.Item>

      <NavbarItem exact to="/">
        Home
      </NavbarItem>

      <NavbarItem to="/locations/map">Map</NavbarItem>
      <NavbarItem to="/locations/search">Search</NavbarItem>

      <Dropdown item text="About" pointing>
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
        {hasToken ? (
          <>
            <NavbarItem to="/users/profile">Profile</NavbarItem>
            <Menu.Item onClick={() => setModalVisibility(true)}>
              Log out
            </Menu.Item>
            <Confirm
              open={isModalVisible}
              content="Would you like to log out?"
              onCancel={() => setModalVisibility(false)}
              onConfirm={() => logoutUser()}
            />
          </>
        ) : (
          <>
            <NavbarItem to="/users/register">Register</NavbarItem>
            <NavbarItem to="/users/login">Log in</NavbarItem>
          </>
        )}
      </Menu.Menu>

      <div
        className={`hamburger ${isMenuVisible ? "active" : "disabled"}`}
        onClick={() => toggleMenuVisibility()}
      >
        <span className="hamburger-bun"></span>
        <span className="hamburger-patty"></span>
        <span className="hamburger-bun"></span>
      </div>
    </Menu>
  );
}
