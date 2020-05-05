import React from "react";
import { Switch, Route } from "react-router-dom";

import UserEventsList from "./UserEventsList";
import FavoriteShop from "./favoriteShop/UserFavoriteShop";

const UserSectionsController = () => (
  <Switch>
    <Route path="/users/profile/events">
      <UserEventsList />
    </Route>
    <Route path="/users/profile/favoriteShop">
      <FavoriteShop />
    </Route>
  </Switch>
);

export default UserSectionsController;
