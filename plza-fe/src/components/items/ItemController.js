import React from "react";
import { Switch, Route } from "react-router-dom";

import ReviewCreate from "./RatingCreate";
import PromotionCreate from "./PromotionCreate";
import EventCreate from "./EventCreate";

const ItemController = () => (
  <Switch>
    <Route path="/events/:id/new">
      <EventCreate />
    </Route>

    <Route path="/promotions/:id/new">
      <PromotionCreate />
    </Route>

    <Route path="/reviews/:id/new">
      <ReviewCreate />
    </Route>
  </Switch>
);

export default ItemController;
