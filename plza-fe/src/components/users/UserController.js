import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";

const UserController = () => (
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

export default UserController;
