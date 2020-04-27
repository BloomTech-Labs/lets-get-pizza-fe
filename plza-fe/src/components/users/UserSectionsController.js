import React from "react";
import { Switch, Route } from "react-router-dom";

import UserEventsList from './events/UserEventsList';
import UserProfile from './profile/UserProfile';

const UserSectionsController = () => (
  <>
    <Switch>
      <Route path="/users/dash/events">
        <UserEventsList />
      </Route>
    </Switch>
    <Switch>
      <Route path="/users/dash/profile">
        <UserProfile />
      </Route>
    </Switch>
  </>
);

export default UserSectionsController;
