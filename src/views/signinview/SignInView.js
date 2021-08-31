import { useState, useContext } from "react";
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
