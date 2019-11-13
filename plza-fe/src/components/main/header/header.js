import React from "react";
import './header.css'
import { NavLink } from "react-router-dom";

export default function Masthead() {
  return (
    <header className="header">
      <h1>Plza</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users/register">Register</NavLink>
        <NavLink to="/users/login">Log in</NavLink>
        <NavLink to="/locations/map">Map</NavLink>
        <NavLink to="/locations/search">Search</NavLink>
      </nav>
    </header>
  );
}
