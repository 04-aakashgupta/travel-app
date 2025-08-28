import React from "react";
import niagara from "../../../assets/images/home/travel-place/niagara.jpg";
import burj from "../../../assets/images/home/travel-place/burj.jpg";
import location_icon from "../../../assets/images/home/location_icon.png";


const Schedule = () => {
  return (
    <div className="schedule-section">
      <div className="section-header">
        <h3 className="section-title">My Schedule</h3>
        <a href="#" className="show-more">Show more ›</a>
      </div>

      <div className="schedule-card">
        <img src={niagara} className="schedule-card-image" alt="Niagara Falls" />
        <div className="schedule-info">
          <h4>Niagara Falls</h4>
          <img src={location_icon} className="location_icon" alt="location_icon" />
          <p>Canada</p>
        </div>
        <span className="joined">Joined</span>
      </div>

      <div className="schedule-card">
        <img src={burj} alt="Burj Khalifa" className="schedule-card-image" />
        <div className="schedule-info">
          <h4>Burj Khalifa</h4>
          <img src={location_icon} className="location_icon" alt="location_icon" />

          <p>Dubai</p>
        </div>
        <span className="joined">Joined</span>
      </div>
    </div>
  );
};

export default Schedule;
