import React from "react";
import filter_icon from "../../../assets/images/home/filter_icon.png";




const SearchBar = () => {
  return (
<div class="search-container">
  <div class="search-bar">
    <input type="text" placeholder="Search Places" />
  </div>
  <button class="filter-btn">
    <img src={filter_icon} class="filter-icon" alt="Filter" />
  </button>
</div>

  );
};

export default SearchBar;
