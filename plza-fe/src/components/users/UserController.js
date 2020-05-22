import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Dashboard from './Dashboard';
import FriendProfile from "./friends-profile/FriendProfile";

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

    <Route path='/users/:username'>
      <FriendProfile />
    </Route>
  </Switch>
);

export default UserController;
