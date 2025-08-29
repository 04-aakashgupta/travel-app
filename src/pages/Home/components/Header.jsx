import React from "react";
import profile from "../../../assets/images/home/profile.png";

const Header = () => {
  return (
    <div className="header">

      <div className="header-top">
        <img src={profile} alt="profile" className="profile-pic" />
        <div className="header-text">
          <p className="greeting">Hello Vani</p>
          <p className="sub-greeting">Good Evening!</p>

        </div>
      </div>

      <div className="header-bottom">
        <p className="header-bottom-msg">Explore the
          Beautiful world!</p>
      </div>
    </div>
      );
};

      export default Header;
