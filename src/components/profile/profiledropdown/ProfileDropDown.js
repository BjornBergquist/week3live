import React from "react";
import "./ProfileDropDown.css";
import { Link } from "react-router-dom";
import RoutingPath from "../../../routes/RoutingPath";

export const ProfileDropDown = () => {
  return (
    <div className="profiledropdown">
      <p>Firstname Surrname</p>
      <p>email@email.com</p>
      <hr />
      <Link to={RoutingPath.profileView}>Profile</Link>
      <br />
      <Link to={RoutingPath.settingsView}>Settings</Link>
      <br />
      <button>Log out</button>
    </div>
  );
};
