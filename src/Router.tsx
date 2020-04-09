import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import { Home } from "views/Home";
import { NotFoundView } from "views/404";

export const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          <NotFoundView />
        </Route>
      </Switch>
    </HashRouter>
  );
};
