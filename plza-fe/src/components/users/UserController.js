import React from "react";
import { Route } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";

export default function UserController() {
  return (
    <>
      <Route path="/users/login">
        <Login />
      </Route>
      <Route path="/users/register">
        <Register />
      </Route>
    </>
  );
}
