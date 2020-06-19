import React from "react";
import { Switch, Route } from "react-router-dom";

import UserEventsList from "./events/UserEventsList";
import UserSettings from "./settings/UserSettings";
import UserFavoriteShop from "./favoriteShop/UserFavoriteShop";
import FriendsList from "./FriendsComp/FriendsList";
import UserReviewsList from "./reviews/UserReviewsList";
import ProfileMain from "./profile/ProfileMain";
import "./MobileStyle.css";


import UserPromos from "./promotions/UserPromos";

const UserSectionsController = () => (
  <>
    <Switch>
      <Route path="/users/dash/events">
        <UserEventsList />
      </Route>

      <Route path="/users/dash/settings">
        <UserSettings />
      </Route>

      <Route path="/users/dash/reviews">
        <UserReviewsList />
      </Route>

      <Route path="/users/dash/favoriteShop">
        <UserFavoriteShop />
      </Route>

      <Route path="/users/dash/friends">
        <FriendsList />
      </Route>

      <Route path="/users/dash/profile">
        <ProfileMain />
      </Route>

      <Route path="/users/dash/promotions">
        <UserPromos />
      </Route>
    </Switch>
  </>
);

export default UserSectionsController;
