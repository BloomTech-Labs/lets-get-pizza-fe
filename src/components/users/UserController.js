import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Dashboard from './Dashboard';

const UserController = () => (
  <Switch>
    <Route path="/users/login">
      <Login />
    </Route>

    <Route path="/users/register">
      <Register />
    </Route>

    <Route path="/users/dash">
      <Dashboard />
    </Route>
  </Switch>
);

export default UserController;
