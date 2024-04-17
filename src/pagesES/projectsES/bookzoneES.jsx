import React, { useState } from "react";
import { Link } from "react-router-dom";
import htmlicon from "../../img/htmlicon.svg";
import cssicon from "../../img/cssicon.svg";
import expressicon from "../../img/expressiconwhite.png";
import mongodbicon from "../../img/mongodbicon.svg";

function BookzoneES() {
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
          <img
            src={expressicon}
            className="small-icons"
            alt="ExpressJS"
            title="ExpressJS"
          />
          <img
            src={mongodbicon}
            className="small-icons"
            alt="MongoDB"
            title="MongoDB"
          />
        </div>
        <br />
        <br />
        Con solo 5 días para desarrollar este proyecto, decidimos mantenerlo
        simple pero eficiente y creamos esta aplicación web donde el usuario
        puede almacenar libros ya leídos y no leídos.
        <br />
        <br />
        <br />
        <br />
        Sitio web:
        <br />
        <Link
          to="https://bookzone.adaptable.app/"
          target="_blank"
          className="links-to-websites"
        >
          <span>https://bookzone.adaptable.app/</span>
        </Link>
        <br />
        Github:
        <br />
        <Link
          to="https://github.com/RuiMSMelo/bookzone"
          target="_blank"
          className="links-to-websites"
        >
          <span>https://github.com/RuiMSMelo/bookzone</span>
        </Link>
      </p>
      <Link to="/es/proyectos" className="back-to-projects">
        <span>De vuelta a los proyectos</span>
      </Link>
    </div>
  );
}

export default BookzoneES;
