import React, { useState } from "react";
import { Link } from "react-router-dom";
import cvIcon from "../img/cviconwhite.jpg";
import cvPDFspanish from "../img/cvs/RuiCVes.pdf";

function AboutES() {
  const [hoveredHome, setHoveredHome] = useState(false);

  const handleHoverHome = () => {
    setHoveredHome(!hoveredHome);
  };

  return (
    <div className="allpages">
      <Link to="/es">
        <h2
          onMouseEnter={handleHoverHome}
          onMouseLeave={handleHoverHome}
          className="home-button"
        >
          {hoveredHome ? "inicio" : "rui"}
        </h2>
      </Link>
      <h1>Diseño y construyo experiencias digitales.</h1>
      <p>
        Hola, me llamo Rui Serôdio Melo, soy un desarrollador web con una
        profunda conexión con el océano.
        <br />
        <br />
        Originario de Portugal y ahora viviendo en Madrid, llevo mi amor por el
        mundo digital con una formación en biología marina y varios años de
        experiencia en buceo.
        <br />
        <br />
        Fluido en portugués, inglés y español.
        {/*, I bring a multilingual touch to my work.*/}
        <br />
        <br />
        <br />
        <br />
        Este portafolio es donde muestro mis proyectos y continuamente los
        mejoro.
        <br />
        <br />
        En el futuro, también incluiré proyectos en los que esté trabajando
        actualmente. Es un espacio que evoluciona con mi trayectoria, reflejando
        mi compromiso con el progreso en el desarrollo web.
        <br />
        <br />
        <br />
        <br />
        ¡Creemos juntos!
        <br />
        <br />
        <br />
        Mi currículum en español:
        <br />
        <br />
        <a
          href={cvPDFspanish}
          target="_blank"
          rel="noopener noreferrer"
          className="icons-link"
        >
          <img src={cvIcon} className="icons" alt="" />
        </a>
      </p>
    </div>
  );
}

export default AboutES;
