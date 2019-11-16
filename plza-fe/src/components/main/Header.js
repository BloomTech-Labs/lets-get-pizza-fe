import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  background-color: grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Title = styled.h1``;

const Link = styled(NavLink)`
  padding: 5px;
`;

export default function Masthead() {
  return (
    <Header>
      <Title>Plza</Title>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users/register">Register</Link>
        <Link to="/users/login">Log in</Link>
        <Link to="/locations/map">Map</Link>
        <Link to="/locations/search">Search</Link>
      </nav>
    </Header>
  );
}
