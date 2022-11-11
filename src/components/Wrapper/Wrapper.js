import React, { useEffect, useRef, useState } from "react";
import AboutMe from "../AboutMe/AboutMe";
import { OpenButton } from "../OpenButton/OpenButton";
import "./Wrapper.css";

const Wrapper = (props) => {
  const background = useRef(null);
  const [buttonState, setButtonState] = useState(false);

  const showInfo = () => {
    background.current.className = "scale-up";
    setButtonState(!buttonState);
  };

  useEffect(() => {
    background.current.className = "roll-side";
  }, []);

  return (
    <>
      <div className="inside-wrapper" ref={background}>
        {props.children}
        <OpenButton showInfo={showInfo} buttonState={buttonState} />
        <AboutMe buttonState={buttonState} />
      </div>
    </>
  );
};

export default Wrapper;
