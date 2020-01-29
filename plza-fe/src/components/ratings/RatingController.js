import React from "react";
import { Switch, Route } from "react-router-dom";

import ReviewCreate from "./RatingCreate";

const ReviewController = () => (
  <Switch>
    <Route path="/reviews/:id/new">
      <ReviewCreate />
    </Route>
  </Switch>
);

export default ReviewController;
