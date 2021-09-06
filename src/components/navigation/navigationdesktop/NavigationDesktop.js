import React, { useContext } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import RoutingPath from "../../../routes/RoutingPath";
import { UserContext } from "../../../shared/provider/UserProvider";
import "./NavigationDesktop.css";

export const NavigationDesktop = () => {
  const history = useHistory();
  const [authenticatedUser, SetAuthenticatedUser] = useContext(UserContext);
  const renderLogin = () => {
    if (authenticatedUser)
      return (
        <span className="navbar__login--desktop">{authenticatedUser}</span>
      );
    return (
      <button
        className="navbar__login--desktop"
        onClick={() => history.push(RoutingPath.signInView)}
      >
        Sign in
      </button>
    );
  };
  return (
    <nav className="navbar--desktop">
      <span className="navbar__logo--desktop"> LogoGoesHere </span>
      <ul className="navbar__list--deskop">
        <li>
          <button onClick={() => history.push(RoutingPath.homeView)}>
            Home
          </button>
        </li>
        <li>
          <button onClick={() => history.push(RoutingPath.storeView)}>
            Shop
          </button>
        </li>
      </ul>
      {renderLogin()}
    </nav>
  );
};
