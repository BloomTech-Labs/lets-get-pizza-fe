import React from "react";
import { Switch, Route } from "react-router-dom";

import EventCreate from "./EventCreate";

const EventController = () => (
  <Switch>
    <Route path="/events/:id/new">
      <EventCreate />
    </Route>
  </Switch>
);

export default EventController;
