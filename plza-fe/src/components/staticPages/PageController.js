import React from 'react'
import {Switch, Route} from 'react-router-dom'


import AboutPlza from "./AboutPlza";
import AboutUs from "./AboutUs";
import BusinessFeatures from "./BusinessFeatures";
import UserFeatures from "./UserFeatures";

export default function PagesController() {
    return (
      <Switch>
        <Route exact path="/pages/aboutplza">
          <AboutPlza />
        </Route>
        <Route exact path="/pages/businesses">
          <BusinessFeatures />
        </Route>
        <Route exact path="/pages/eaters">
          <UserFeatures />
        </Route>
        <Route exact path="/pages/aboutplza">
          <AboutPlza />
        </Route>
        <Route exact path="/pages/aboutus">
          <AboutUs />
        </Route>
      </Switch>
    );
}