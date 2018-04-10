import React from "react";
import {
  Router,
  Route,
  Switch,
  Link,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import List from "../components/List";
import Detail from "../components/Detail";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={List} exact={true} />

        <Route path="/:id" component={Detail} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
