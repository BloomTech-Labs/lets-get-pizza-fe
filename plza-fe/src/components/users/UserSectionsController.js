import React from "react";
import { Switch, Route } from "react-router-dom";

import UserEventsList from './events/UserEventsList';
import UserSettings from './settings/UserSettings';

const UserSectionsController = () => (
  <>
    <Switch>
      <Route path="/users/dash/events">
        <UserEventsList />
      </Route>
    </Switch>
    <Switch>
      <Route path="/users/dash/settings">
        <UserSettings />
      </Route>
    </Switch>
  </>
);

export default UserSectionsController;
