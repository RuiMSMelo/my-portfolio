import React, { useState } from "react";
import { Link } from "react-router-dom";
import oceanVideo from "../img/openoceanfinal.mp4";
import spainFlagIcon from "../img/spain_round_icon_256.png";
import ukFlagIcon from "../img/united_kingdom_round_icon_256.png";

function Homepage() {
  const [hoveredHello, setHoveredHello] = useState(false);
  const [hoveredIm, setHoveredIm] = useState(false);
  const [hoveredRui, setHoveredRui] = useState(false);

  const handleHoverHello = () => {
    setHoveredHello(!hoveredHello);
  };

  const handleHoverIm = () => {
    setHoveredIm(!hoveredIm);
  };

  const handleHoverRui = () => {
    setHoveredRui(!hoveredRui);
  };

  return (
    <div className="homepage-container">
      <div className="video-container">
        <video muted autoPlay loop className="video-background">
          <source src={oceanVideo} type="video/mp4" />
        </video>
      </div>
      <div className="language-selector-div">
        <Link to="/en">
          <img
            className="languageSelectorIcons"
            src={ukFlagIcon}
            alt="english"
          />
        </Link>
        <Link to="/es">
          <img
            className="languageSelectorIcons"
            src={spainFlagIcon}
            alt="spanish"
          />
        </Link>
      </div>
      <div className="homepage-text-container">
        <Link to="/es/sobre">
          <h1 onMouseEnter={handleHoverHello} onMouseLeave={handleHoverHello}>
            {hoveredHello ? "Sobre mi" : "Hola."}
          </h1>
        </Link>
        <Link to="/es/proyectos">
          <h1 onMouseEnter={handleHoverIm} onMouseLeave={handleHoverIm}>
            {hoveredIm ? "Proyectos" : "Soy"}
          </h1>
        </Link>
        <Link to="/es/contactame">
          <h1 onMouseEnter={handleHoverRui} onMouseLeave={handleHoverRui}>
            {hoveredRui ? "Contáctame" : "Rui Melo"}
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
