import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../shared/provider/UserProvider";
import "./SignInView.css";

export const SignInView = () => {
  const [authenticatedUser, SetAuthenticatedUser] = useContext(UserContext);
  const [username, setUsername] = useState("Björn");
  const [password, setPassword] = useState();
  const history = useHistory();

  const logIn = () => {
    SetAuthenticatedUser(username);
    history.goBack();
  };

  return (
    <main>
      <section>
        <h1> {username} </h1>
        <input
          placeholder="Enter username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <input
          placeholder="Enter password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
         <br />
        <button onClick={() => logIn()}>Sign in</button>
      </section>
    </main>
  );
};

/*import { useState, useContext } from "react";
import { UserContext } from "../../shared/provider/UserProvider";

export const SignInView = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  return (
    <div>
      <h1>You are in the Sign in View</h1>
      <h2>Username: {authenticatedUser}</h2>
      <input
        placeholder="Enter username"
        onChange={(event) => setAuthenticatedUser(event.target.value)}
      ></input>{" "}
      <br />
      <input
        type="password"
        placeholder="Enter password"
        onChange={(event) => setPassword(event.target.value)}
      ></input>{" "}
      <br />
      <button>Log in</button>
    </div>
  );
};
*/
