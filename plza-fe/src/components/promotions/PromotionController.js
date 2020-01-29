import React from "react";
import { Switch, Route } from "react-router-dom";

import PromotionCreate from "./PromotionCreate";

const PromotionController = () => (
  <Switch>
    <Route path="/promotions/:id/new">
      <PromotionCreate />
    </Route>
  </Switch>
);

export default PromotionController;
