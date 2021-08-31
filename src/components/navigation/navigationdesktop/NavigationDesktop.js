import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import RoutingPath from "../../../routes/RoutingPath";

export const NavigationDesktop = () => {
  const history = useHistory();
  return (
    <nav>
      <button onClick={() => history.push(RoutingPath.homeView)}>Home</button>
      <button onClick={() => history.push(RoutingPath.storeView)}>Shop</button>
      <button onClick={() => history.push(RoutingPath.signInView)}>
        Sign in
      </button>
      {/* 
      <Link to={RoutingPath.homeView}>Home</Link>
      <Link to={RoutingPath.storeView}>Shop</Link>
      <Link to={RoutingPath.signInView}>SignIn</Link> */}
    </nav>
  );
};
