import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Dashboard from './Dashboard';
import PrivateRoute from "../../components/PrivateRoute";
import UserSearch from "./search/UserSearch";


const UserController = () => (
  <Switch>
    <Route path="/users/login">
      <Login />
    </Route>

    <Route path="/users/register">
      <Register />
    </Route>
  
    <PrivateRoute path = "/users/dash" component = {Dashboard} />
    
    <Route path="/users/search">
      <UserSearch />
    </Route>
  </Switch>
);

export default UserController;
