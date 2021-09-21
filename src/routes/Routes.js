import React, { useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomeView } from "../views/homeview/HomeView";
import { SignInView } from "../views/signinview/SignInView";
import { StoreView } from "../views/storeview/StoreView";
import { SettingsView } from "../views/settingsview/SettingsView";
import { ProfileView } from "../views/profileview/ProfileView";
import RoutingPath from "./RoutingPath";
import { UserContext } from "../shared/provider/UserProvider";
import LocalStorage from "../shared/storage/LocalStorage";
import { useHistory } from "react-router";
import { AccessoriesView } from "../views/accessoriesview/AccessoriesView";
import { NewsView } from "../views/newsview/NewsView";
import { PokemonView } from "../views/pokemonview/PokemonView";

export const Routes = ({ children }) => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
  const history = useHistory();

  const isUserAuthenticated = () => {
    const userFromMemory = localStorage.getItem(LocalStorage.username);
    setAuthenticatedUser(userFromMemory);
  };

  useEffect(() => {
    isUserAuthenticated();
  }, []);

  // const blockIfAuthenticated = (view) => {
  //   if (!authenticatedUser) return view;
  //   else return HomeView;
  // };

  const blockIfAuthenticated = (view) => (authenticatedUser ? HomeView : view);

  const authenticationRequired = (view) =>
    authenticatedUser ? view : HomeView;

  return (
    <BrowserRouter basename="/week3live">
      {children}
      <Switch>
        <Route
          exact
          path={RoutingPath.signInView}
          component={blockIfAuthenticated(SignInView)}
        />
        <Route exact path={RoutingPath.storeView} component={StoreView} />
        <Route
          exact
          path={RoutingPath.settingsView}
          component={authenticationRequired(SettingsView)}
        />
        <Route
          exact
          path={RoutingPath.profileView}
          component={authenticationRequired(ProfileView)}
        />
        <Route path={RoutingPath.accessoriesView} component={AccessoriesView} />
        <Route path={RoutingPath.newsView} component={NewsView} />
        <Route path={RoutingPath.pokemonView} component={PokemonView} />
        <Route path={RoutingPath.homeView} component={HomeView} />
        {/*<Route path={RoutingPath.fourOFourView} component={FourOFourView} />*/}
      </Switch>
    </BrowserRouter>
  );
};
