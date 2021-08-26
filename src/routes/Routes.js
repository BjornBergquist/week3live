import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomeView } from "../views/homeview/HomeView";
import { SignInView } from "../views/signinview/SignInView";

export const Routes = ({ children }) => {
  return (
    <BrowserRouter basename="/Week3Live">
      {children}
      <Switch>
        <Route exact path="/signin" component={SignInView} />
        <Route path="/" component={HomeView}></Route>
      </Switch>
    </BrowserRouter>
  );
};
