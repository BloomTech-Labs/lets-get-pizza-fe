import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";

export default function UserController() {
  return (
    <Switch>
      <Route path="/users/login">
        <Login />
      </Route>

      <Route path="/users/register">
        <Register />
      </Route>
      
      <Route path="/users/profile">
        <Profile />
      </Route>
    </Switch>
  );
}
