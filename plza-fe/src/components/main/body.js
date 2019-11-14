import React from 'react'
import { Switch, Route } from "react-router-dom";

import Home from './home/home'

//Handles the switch/routes for all users & auth
import Users from '../users/UserController'

//Handles the switch/routes for all locations routes
import Locations from '../locations/LocationController'

const Body = () => {
    return <div className="body-container">
      
      <Switch>
        <Route path="/users" component={Users} />
        <Route path="/locations" component={Locations} />

        <Route exact path="/" component={Home} />

        <Route render={() => <div>404-Not Found</div>} />
      </Switch>

    </div>
}

export default Body