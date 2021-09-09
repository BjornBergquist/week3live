import { useContext } from "react";
import { UserContext } from "./../../shared/provider/UserProvider";
//import faceImg from "../../shared/img/face björn.jfif";
import "./Profile.css";
import { ProfileDropDown } from "./profiledropdown/ProfileDropDown";

export const Profile = () => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
  return (
    <div className="profile">
      <img
        className="profile__image"
        //src={faceImg}
        src="https://thispersondoesnotexist.com/image"
        alt="A random face."
      />
      <span className="profile__name">{authenticatedUser}</span>
      <ProfileDropDown />
    </div>
  );
};
