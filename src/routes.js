import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Box from "./pages/Box";

//BrowserRouter indica que as rotas na URL fica apenas com barra
//Switch garante que apenas uma rota seja chamada por vez
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/box/:id" component={Box} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
