import React from "react";
import { Switch, Route } from "react-router-dom";

import UserEventsList from "./UserEventsList";

const UserSectionsController = () => (
  <Switch>
    <Route path="/users/profile/events">
      <UserEventsList />
    </Route>
  </Switch>
);

export default UserSectionsController;
