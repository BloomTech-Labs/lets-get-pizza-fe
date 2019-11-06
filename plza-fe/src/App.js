import React from "react";
import { Switch, Route } from "react-router-dom";

import Masthead from "./components/Masthead";

export default function App() {
  return (
    <div className="app">
      <Masthead />
      <Switch>
        <Route path="/register" render={() => <div>Register Account</div>} />
        <Route path="/login" render={() => <div>Login to Account</div>} />

        <Route exact path="/places" render={() => <div>Places</div>} />
        <Route
          path="/places/:id"
          render={({ match }) => <div>Place #{match.params.id} </div>}
        />
        <Route path="/places/new" render={() => <div>Create New Place</div>} />

        <Route exact path="/" render={() => <div>Hello, world!</div>} />
        <Route render={() => <div>Not Found</div>} />
      </Switch>
    </div>
  );
}
