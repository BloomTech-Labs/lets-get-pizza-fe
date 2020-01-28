import React from "react";
import { Route, Switch } from "react-router-dom";

import LocationMap from "./LocationMap";
import LocationSearch from "./LocationSearch";
import LocationEdit from "./LocationEdit";
import LocationClaim from "./authentication/LocationClaim";
import LocationLogin from "./authentication/LocationLogin";
import LocationRegister from "./authentication/LocationRegister";
import LocationPage from "./detail/LocationPage";

const LocationController = () => (
  <Switch>
    <Route path="/locations/map">
      <LocationMap />
    </Route>

    {/* This route shows a list of nearby locations, allowing you to search by name. */}
    <Route path="/locations/search">
      <LocationSearch />
    </Route>

    {/* When an unregistered user clicks on an unclaimed business, they have an option to "claim",
        this is essentially the register page. */}
    <Route path="/locations/claim/:id">
      <LocationClaim />
    </Route>

    <Route path="/locations/edit/:id">
      <LocationEdit />
    </Route>

    <Route path="/locations/login">
      <LocationLogin />
    </Route>

    <Route path="/locations/register">
      <LocationRegister />
    </Route>

    {/* Individual view page */}
    <Route path="/locations/:id/:tab?">
      <LocationPage />
    </Route>
  </Switch>
);

export default LocationController;
