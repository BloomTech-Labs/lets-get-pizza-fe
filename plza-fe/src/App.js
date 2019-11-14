import React from "react";
import { Route, Switch } from "react-router-dom";

// Base app components
import Header from "./components/main/header/Header";
import NoMatch from "./components/main/NoMatch";

// Nested routes
import Home from "./components/main/home/home";
import Users from "./components/users/UserController";
import Locations from "./components/locations/LocationController";

import "normalize.css";

export default function App() {
  return (
    <div className="app">
      <Header />

      <Switch>
        <Route path="/users">
          <Users />
        </Route>

        <Route path="/locations">
          <Locations />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}
