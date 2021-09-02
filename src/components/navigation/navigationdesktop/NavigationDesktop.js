import React, { useContext } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import RoutingPath from "../../../routes/RoutingPath";
import { UserContext } from "../../../shared/provider/UserProvider";

export const NavigationDesktop = () => {
  const history = useHistory();
  const [authenticatedUser, SetAuthenticatedUser] = useContext(UserContext);
  const renderLogin = () => {
    if (authenticatedUser) return <span>{authenticatedUser}</span>;
    return (
      <button onClick={() => history.push(RoutingPath.signInView)}>
        Sign in
      </button>
    );
  };
  return (
    <nav>
      <button onClick={() => history.push(RoutingPath.homeView)}>Home</button>
      <button onClick={() => history.push(RoutingPath.storeView)}>Shop</button>
      {renderLogin()}
      {/* 
      <Link to={RoutingPath.homeView}>Home</Link>
      <Link to={RoutingPath.storeView}>Shop</Link>
      <Link to={RoutingPath.signInView}>SignIn</Link> */}
    </nav>
  );
};
