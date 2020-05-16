import React from "react";
import { Switch, Route } from "react-router-dom";

<<<<<<< HEAD
import UserEventsList from './events/UserEventsList';
import UserSettings from './settings/UserSettings';
import UserFavoriteShop from './favoriteShop/UserFavoriteShop';
=======
import UserEventsList from "./events/UserEventsList";
import UserSettings from "./settings/UserSettings";
import UserReviewsList from "./reviews/UserReviewsList";
import UserFavoriteShop from "./favoriteShop/UserFavoriteShop";
>>>>>>> master
import ProfileMain from "./profile/ProfileMain";

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
    <Switch>
      <Route path="/users/dash/reviews">
        <UserReviewsList />
      </Route>
    </Switch>
    <Switch>
      <Route path="/users/dash/favoriteShop">
        <UserFavoriteShop />
      </Route>
    </Switch>
    <Switch>
      <Route path="/users/dash/profile">
     <ProfileMain />
      </Route>
    </Switch>
  </>
);

export default UserSectionsController;
