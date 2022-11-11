import React from "react";
import "./OpenButton.css";
import angleDown from "../../assets/angle-down.svg";
import angleUp from "../../assets/angle-up.svg";

export const OpenButton = ({ showInfo, buttonState }) => {
  return (
    <div className="button-wrapper">
      <button onClick={showInfo}>
        {
          <img
            src={buttonState ? angleUp : angleDown}
            style={{ width: "24px", height: "24px" }}
            alt="show-info-button"
          />
        }
      </button>
    </div>
  );
};
