import React from "react";
import './header.css'
import { NavLink } from "react-router-dom";

export default function Masthead() {
  return (
    <header className="header">
      <h1>Plza</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Log in</NavLink>
      </nav>
    </header>
  );
}
