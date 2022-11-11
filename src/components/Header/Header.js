import React from "react";
import "./Header.css";
import profilePhoto from "../../assets/profile.jpeg";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="title-wrapper">
        <h1 className="main-title">LEONARDO LIMA ALVES</h1>
        <h2 className="subtitle">FRONT-END DEVELOPER</h2>
      </div>
      <div className="profile-wrapper">
        <img src={profilePhoto} alt="profile-pic" className="profile-photo" />
      </div>
    </div>
  );
};

export default Header;
