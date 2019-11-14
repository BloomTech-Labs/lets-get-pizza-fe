import React from 'react'
import { Switch, Route } from "react-router-dom";

import Login from './Login'
import Register from './Register'

const Body = () => {
    return <div className="body-container">
      
      <Switch>
        <Route path="users/login" component={Login} />
        <Route path="users/register" component={Register} />

        <Route render={() => <div>404-Not Found</div>} />
      </Switch>

    </div>
}

export default Body