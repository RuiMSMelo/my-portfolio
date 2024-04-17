import React, { useState } from "react";
import { Link } from "react-router-dom";
import htmlicon from "../../img/htmlicon.svg";
import cssicon from "../../img/cssicon.svg";

function PluginflowES() {
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
          <img src={htmlicon} className="small-icons" alt="HTML" title="HTML" />
          <img src={cssicon} className="small-icons" alt="CSS" title="CSS" />
        </div>
        <br />
        <br />
        Durante mi pasantía en Nervecenter, me asignaron desarrollar esta página
        de inicio para su nuevo sitio web.
        <br />
        Como puedes comprobar aquí:
        <Link
          to="https://nervecenter.ai/"
          target="_blank"
          className="links-to-websites"
        >
          https://nervecenter.ai/
        </Link>
        <br />
        <br />
        <br />
        Website:
        <br />
        <Link
          to="https://ruimsmelo.github.io/NerveCenter-Homepage/"
          target="_blank"
          className="links-to-websites"
        >
          <span>https://ruimsmelo.github.io/NerveCenter-Homepage/</span>
        </Link>
        <br />
        Github:
        <br />
        <Link
          to="https://github.com/RuiMSMelo/NerveCenter-Homepage"
          target="_blank"
          className="links-to-websites"
        >
          <span>https://github.com/RuiMSMelo/NerveCenter-Homepage</span>
        </Link>
      </p>
      <Link to="/es/proyectos" className="back-to-projects">
        <span>De vuelta a los proyectos</span>
      </Link>
    </div>
  );
}

export default PluginflowES;
