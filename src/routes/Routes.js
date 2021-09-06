import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomeView } from "../views/homeview/HomeView";
import { SignInView } from "../views/signinview/SignInView";
import { StoreView } from "../views/storeview/StoreView";
import RoutingPath from "./RoutingPath";

export const Routes = ({ children }) => {
  return (
    <BrowserRouter basename="/week3live">
      {children}
      <Switch>
        <Route exact path={RoutingPath.signInView} component={SignInView} />
        <Route exact path={RoutingPath.storeView} component={StoreView} />
        <Route path={RoutingPath.homeView} component={HomeView} />
        {/*<Route path={RoutingPath.fourOFourView} component={FourOFourView} />*/}
      </Switch>
    </BrowserRouter>
  );
};
