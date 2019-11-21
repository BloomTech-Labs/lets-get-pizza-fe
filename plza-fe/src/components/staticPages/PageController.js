import React from 'react'
import {Switch, Route} from 'react-router-dom'


import About from "./About";
import BusinessFeatures from "./BusinessFeatures";
import UserFeatures from "./UserFeatures";

export default function PagesController() {
    return (<Switch>
        <Route exact path="/pages/about">
            <About />
        </Route>
        <Route exact path="/pages/businesses">
            <BusinessFeatures />
        </Route>
        <Route exact path="/pages/eaters">
            <UserFeatures />
        </Route>
    </Switch>)
}