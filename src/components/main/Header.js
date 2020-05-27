import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu, Confirm, Dropdown } from "semantic-ui-react";
import { getItem, logoutUser } from "../../utils/auth";

import Logo from "./Logo.png";

import "./Header.css";

export default function Masthead() {
  const user = useSelector(({ user }) => user);
  const location = useSelector(({ location }) => location);
  const token = getItem("token");
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const [isModalVisible, setModalVisibility] = useState(false);

  const toggleMenuVisibility = () => {
    setMenuVisibility(!isMenuVisible);
  };

  const hideMenu = () => setMenuVisibility(false);

  const NavbarItem = (props) => (
    <Menu.Item as={NavLink} {...props} onClick={hideMenu} />
  );

  const NavDropdownItem = (props) => (
    <Dropdown.Item as={NavLink} {...props} onClick={hideMenu}>
      {props.children}
    </Dropdown.Item>
  );

  const ProfileLink = () => {
    if (user.username) {
      return <NavbarItem to="/users/dash/profile">{user.username}</NavbarItem>;
    } else if (location.business_name) {
      return (
        <NavbarItem to={`/locations/${location.id}`}>
          {location.business_name}
        </NavbarItem>
      );
    }
  };

  const HamburgerMenu = () => (
    <div
      className={`hamburger ${isMenuVisible ? "active" : "disabled"}`}
      onClick={() => toggleMenuVisibility()}
    >
      <span className="hamburger-bun"></span>
      <span className="hamburger-patty"></span>
      <span className="hamburger-bun"></span>
    </div>
  );

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
      {/* Only render this button if user is logged in */}
      {user.username && <NavbarItem to="/users/search">Discover</NavbarItem>}

      <Dropdown item text="About" pointing>
        <Dropdown.Menu>
          <NavDropdownItem to="/pages/eaters">User Features</NavDropdownItem>
          <NavDropdownItem to="/pages/businesses">
            Business Features
          </NavDropdownItem>
          <NavDropdownItem to="/pages/aboutplza">About The App</NavDropdownItem>
          <NavDropdownItem to="/pages/aboutus">Meet The Team</NavDropdownItem>
        </Dropdown.Menu>
      </Dropdown>

      <Menu.Menu position="right">
        {token ? (
          <>
            <ProfileLink />

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

      <HamburgerMenu />
    </Menu>
  );
}
