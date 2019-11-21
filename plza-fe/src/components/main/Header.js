import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

export default function Masthead() {
  return (
    <header className="header">
      <h1 className="title">Plza</h1>
      <nav className="navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/locations/map">Map</NavLink>
        <NavLink to="/locations/search">Search</NavLink>
        { localStorage.token ?        
        <span>
          <NavLink to="/users/profile">Your Profile</NavLink>
          <NavLink to="/users/logout">Logout</NavLink>
        </span>
        :
        <span>
          <NavLink to="/users/register">Register</NavLink>
          <NavLink to="/users/login">Log in</NavLink>
        </span>
        } 
      </nav>
    </header>
  );
}
