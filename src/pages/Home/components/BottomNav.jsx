import React from "react";
import explore_icon from "../../../assets/images/home/explore_icon.png";
import notification_icon from "../../../assets/images/home/notification_icon.png";
import profile_icon from "../../../assets/images/home/profile_icon.png";
import topographic_icon from "../../../assets/images/home/topographic_icon.png";
const BottomNav = () => {
  return (
    <div className="bottom-nav">

      <div className="bottom-nav-content">      <button><img src={explore_icon} alt="explore_icon" /></button>
        <button><img src={notification_icon} alt="explore_icon" /></button>
        <button><img src={topographic_icon} alt="explore_icon" /></button>
        <button><img src={profile_icon} alt="explore_icon" /></button>
      </div>



    </div>
  );
};

export default BottomNav;
