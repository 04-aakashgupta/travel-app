import React from "react";
import { useParams } from "react-router-dom";
import travelPlacesData from "../../data/travelPlacesData";
import { FaPlane, FaWifi, FaHotel, FaUtensils, FaBus, FaStar } from "react-icons/fa";
import "./TravelDetail.css";

const TravelDetail = () => {
  const { id } = useParams();
  const place = travelPlacesData.find((p) => p.id === parseInt(id));

  if (!place) {
    return <h2>Travel Place Not Found</h2>;
  }

  return (
    <div className="detail-container">
      {/* Banner */}
      <div className="detail-banner">
        <img src={place.image} alt={place.title} className="detail-image" />
      </div>

      {/* Weather Info */}
      <div className="weather-card">
        <span className="temperature">{place.temperature}</span>
        <br />
        <span className="location">{place.country}</span>
      </div>

      {/* Title + Price */}
      <div className="detail-header">
        <h2>{place.title}</h2>
        <span className="price">{place.price}</span>
      </div>

      {/* Overview */}
      <div className="overview">
        <h3>Overview</h3>
        <div className="overview-cards">
          <div className="overview-card">
            <FaPlane className="overview-icon" />
            <p>{place.days} Days</p>
          </div>
          <div className="overview-card">
            <FaStar className="overview-icon" />
            <p>{place.rating} out of 5</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="description">{place.description}</p>

      {/* Facilities */}
      <div className="facilities">
        <FaPlane />
        <FaWifi />
        <FaHotel />
        <FaUtensils />
        <FaBus />
      </div>

      {/* Book Now */}
      <button className="book-btn">Book Now</button>
    </div>
  );
};

export default TravelDetail;
