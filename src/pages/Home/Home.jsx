import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TravelPlaces from "./components/TravelPlaces";
import Schedule from "./components/Schedule";
import BottomNav from "./components/BottomNav";
import "./Home.css"


const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <SearchBar />
      <TravelPlaces />
      <Schedule />
      <BottomNav />
    </div>
  );
};

export default Home;
