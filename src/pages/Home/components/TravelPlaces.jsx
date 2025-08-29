import React from "react";
import { useNavigate } from "react-router-dom";
import location_icon from "../../../assets/images/home/location_icon.png";
import travelPlacesData from "../../../data/travelPlacesData"; 

const TravelPlaces = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/travel/${id}`);
  };

  return (
    <div className="travel-section">
      <div className="section-header">
        <h3 className="section-title">Travel Places</h3>
        <a href="#" className="show-more">Show more ›</a>
      </div>

      <div className="travel-cards">
        {travelPlacesData.map((place) => (
          <div
            className="travel-card"
            key={place.id}
            onClick={() => handleCardClick(place.id)}
            style={{ cursor: "pointer" }}
          >
            <img src={place.image} className="travel_image" alt={place.title} />

            <div className="travel-info">
              <h4>{place.title}</h4>

              <span className="location">
                <img src={location_icon} className="location_icon" alt="location" />
                <p className="location_name">{place.country}</p>
              </span>

              <br />

              <span className="tag">${place.price}</span>
              <span className="travel_day">{place.days} Days</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelPlaces;
