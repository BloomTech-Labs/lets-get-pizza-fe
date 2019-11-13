import React from 'react'
import { Switch, Route } from "react-router-dom";

import Home from './home/home'

import Login from "../authentication/Login";
import Register from "../authentication/Register";

//Handles the switch/route for all locations routes
import Locations from '../locations/location-controller'

const Body = () => {
    return <div className="body-container">
      
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/locations" component={Locations} />

        <Route exact path="/" component={Home} />
        
        <Route render={() => <div>404-Not Found</div>} />
      </Switch>

    </div>
}

export default Body