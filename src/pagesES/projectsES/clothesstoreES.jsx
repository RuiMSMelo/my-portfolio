import React, { useState } from "react";
import { Link } from "react-router-dom";
import cssicon from "../../img/cssicon.svg";
import reacticon from "../../img/reacticon.svg";

function ClothesStoreES() {
  const [hoveredHome, setHoveredHome] = useState(false);

  const handleHoverHome = () => {
    setHoveredHome(!hoveredHome);
  };

  return (
    <div className="allpages projects-div project">
      <Link to="/es">
        <h2
          onMouseEnter={handleHoverHome}
          onMouseLeave={handleHoverHome}
          className="home-button"
        >
          {hoveredHome ? "inicio" : "rui"}
        </h2>
      </Link>
      <p>
        <div className="madewith-div">
          <img
            src={reacticon}
            className="small-icons"
            alt="React"
            title="React"
          />
          <img src={cssicon} className="small-icons" alt="CSS" title="CSS" />
        </div>
        <br />
        <br />
        Construí este sitio web de compras en línea fácil de usar utilizando la
        FakeStoreAPI, con un sistema de carrito completamente funcional
        implementado.
        <br />
        Es un gran proyecto de nivel principiante-intermedio para
        desarrolladores de React.
        <br />
        <br />
        <br />
        <br />
        Sitio web:
        <br />
        <Link
          to="https://ruimsmelo.github.io/clothesStore/"
          target="_blank"
          className="links-to-websites"
        >
          <span>https://ruimsmelo.github.io/clothesStore/</span>
        </Link>
        <br />
        Github:
        <br />
        <Link
          to="https://github.com/RuiMSMelo/clothesStore"
          target="_blank"
          className="links-to-websites"
        >
          <span>https://github.com/RuiMSMelo/clothesStore</span>
        </Link>
      </p>
      <Link to="/es/proyectos" className="back-to-projects">
        <span>De vuelta a los proyectos</span>
      </Link>
    </div>
  );
}

export default ClothesStoreES;
