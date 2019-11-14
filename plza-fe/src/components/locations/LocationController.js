import React from 'react'
import { Switch, Route } from "react-router-dom";

import LocationsMap from './LocationsMap'
import LocationsSearch from './LocationsSearch'
import LocationsClaim from './LocationsClaim'
import LocationsLogin from './LocationsLogin'
import LocationsPage from './LocationsPage'


const Body = () => {
    return <div className="body-container">
      
      <Switch>
        {/*This route shows a larger map with the option to change the search.*/}
        <Route path="/locations/map" exact component={LocationsMap} />

        {/*This route shows a list of nearby locations, allowing you to search by name.*/}
        <Route path="/locations/search" exact component={LocationsSearch} />

        {/*When an unregistered user clicks on an unclaimed business, they have an option to "claim", 
        this is essentially the register page.*/}
        <Route path="/locations/claim/:id" exact component={LocationsClaim} />
        <Route path="/locations/login" exact component={LocationsLogin} />
        
        {/*Individual view page*/}
        <Route path="/locations/:id" exact component={LocationsPage} />

        <Route render={() => <div>404-Not Found</div>} />
      </Switch>

    </div>
}

export default Body