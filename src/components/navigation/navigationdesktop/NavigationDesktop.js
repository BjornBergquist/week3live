import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import RoutingPath from "../../../routes/RoutingPath";
import { UserContext } from "../../../shared/provider/UserProvider";
import { Profile } from "../../profile/Profile";
import "./NavigationDesktop.css";
import { Cart } from "../../cart/Cart";

export const NavigationDesktop = () => {
  const history = useHistory();
  const [authenticatedUser, SetAuthenticatedUser] = useContext(UserContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const renderLogin = () => {
    if (authenticatedUser)
      return (
        <span className="navbar__login--desktop">
          <button onClick={() => setIsCartOpen(true)}>Cart</button>
          <Profile></Profile>
        </span>
      );
    return (
      <span className="navbar__login--desktop">
        <button onClick={() => setIsCartOpen(true)}>Cart</button>
        <button onClick={() => history.push(RoutingPath.signInView)}>
          Sign in
        </button>
      </span>
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
        <li>
          <button onClick={() => history.push(RoutingPath.newsView)}>
            News
          </button>
        </li>
        <li>
          <button onClick={() => history.push(RoutingPath.accessoriesView)}>
            Accessories
          </button>
        </li>
      </ul>
      {renderLogin()}
      <Cart isCartOpen={isCartOpen} cartHandler={setIsCartOpen} />
    </nav>
  );
};
