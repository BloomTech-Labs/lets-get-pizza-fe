import React from "react";
import { Switch, Route } from "react-router-dom";

import FriendsList from "./FriendsList";

const FriendsListController = () => (
  <Switch>
    <Route path="/users/profile/friends">
      <FriendsList />
    </Route>
  </Switch>
);

export default FriendsListController;
