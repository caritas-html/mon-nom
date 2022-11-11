import React from "react";
import "./AboutMe.css";

const AboutMe = ({ buttonState }) => {
  return (
    <div className={buttonState ? "show-down" : "hide-up"}>
      <h2>ABOUT ME</h2>
    </div>
  );
};

export default AboutMe;
