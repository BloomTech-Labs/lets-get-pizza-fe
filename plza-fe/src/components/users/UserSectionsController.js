import React from "react";
import { Switch, Route } from "react-router-dom";

import UserEventsList from './events/UserEventsList';
import UserSettingsContainer from './settings/UserSettingsContainer';

const UserSectionsController = () => (
  <>
    <Switch>
      <Route path="/users/dash/events">
        <UserEventsList />
      </Route>
    </Switch>
    <Switch>
      <Route path="/users/dash/settings">
        <UserSettingsContainer />
      </Route>
    </Switch>
  </>
);

export default UserSectionsController;
