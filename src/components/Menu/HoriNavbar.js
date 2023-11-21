// HorizontalNavbar.js
import React, { useState } from "react";
import advisor from "../../img/advisor.png";
import dropdown from "../../img/dropdown.png";
import notification from "../../img/notification.png";

const HorizontalNavbar = ({ searchbar, notificationIconSrc, userIconSrc }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="hori-navbar">
      <div className="searchbar">{searchbar}</div>
      <div className="notification" onClick={toggleDropdown}>
        <img src={notification} alt="Notification" />
        {showDropdown && (
          <div className="dropdown">
            
          </div>
        )}
      </div>
      <div className="user-icon" onClick={toggleDropdown}>
        <img src={advisor} alt="User" />
        <img src={dropdown} alt="Dropdown" />
       
        {showDropdown && (
          <div className="dropdown">
           
          </div>
        )}
      </div>
    </div>
  );
};

export default HorizontalNavbar;
