import React, { useState } from "react";
import { Link } from "react-router-dom";

function Proyectos() {
  const [hoveredHome, setHoveredHome] = useState(false);

  const handleHoverHome = () => {
    setHoveredHome(!hoveredHome);
  };

  return (
    <div className="allpages projects-div">
      <Link to="/es">
        <h2
          onMouseEnter={handleHoverHome}
          onMouseLeave={handleHoverHome}
          className="home-button"
        >
          {hoveredHome ? "inicio" : "rui"}
        </h2>
      </Link>
      {/* <Link to='/tesla'><h3>Tesla</h3></Link> */}
      <Link to="/es/soundspace">
        <h3>ESPAINSoundSpace</h3>
      </Link>
      <Link to="/es/clothesStore">
        <h3>Clothes Store</h3>
      </Link>
      <Link to="/es/bookzone">
        <h3>Bookzone</h3>
      </Link>
      <Link to="/es/sharkattack">
        <h3>Sharkattack</h3>
      </Link>
      <Link to="/es/pluginflow">
        <h3>Plugin Flow</h3>
      </Link>
    </div>
  );
}

export default Proyectos;
