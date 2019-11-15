import React from "react";
import { Route } from "react-router-dom";

import LocationsMap from "./LocationsMap";
import LocationSearch from "./LocationSearch";
import LocationClaim from "./LocationClaim";
import LocationsLogin from "./LocationsLogin";
import LocationPage from "./LocationPage";

export default function LocationController() {
  return (
    <>
      {/* This route shows a larger map with the option to change the search. */}
      <Route path="/locations/map">
        <LocationsMap />
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

      <Route path="/locations/login">
        <LocationsLogin />
      </Route>

      {/* Individual view page */}
      <Route path="/locations/:id">
        <LocationPage />
      </Route>
    </>
  );
}
