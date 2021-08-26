import React from "react";
import { useHistory } from "react-router";

export const NavigationDesktop = () => {
  const history = useHistory();
  return (
    <nav>
      <button onClick={() => history.push("/")}> Home </button>
      <button onClick={() => history.push("/signin")}> Sign in </button>
    </nav>
  );
};
