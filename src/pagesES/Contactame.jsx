import React, { useState } from "react";
import { Link } from "react-router-dom";
import linkedInIcon from "../img/LinkedIn_icon.svg.png";
import gitHubIcon from "../img/githubwhite.png";

function Contactame() {
  const [hoveredHome, setHoveredHome] = useState(false);
  const [hoveredEmail, setHoveredEmail] = useState(false);

  const handleHoverHome = () => {
    setHoveredHome(!hoveredHome);
  };

  const handleHoverEmail = () => {
    setHoveredEmail(!hoveredEmail);
  };

  const handleCopyEmail = () => {
    const emailToCopy = "ruimsmelo@gmail.com";

    const textarea = document.createElement("textarea");
    textarea.value = emailToCopy;
    document.body.appendChild(textarea);

    textarea.select();
    textarea.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(textarea);
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
      <h1>¡Trabajemos juntos!</h1>
      <p>
        ¡Gracias por visitar mi portafolio!
        <br />
        <br />
        <br />
        Ya sea que estés aquí con un proyecto específico en mente, tengas
        preguntas sobre mi experiencia y habilidades, o simplemente quieras
        conectar y saludar, estoy aquí y ansioso por escucharte.
        <br />
        <br />
        ¡Tu feedback, consultas y oportunidades de colaboración son muy valiosas
        para mí!
        <br />
        <br />
        No dudes en comunicarte a través de cualquiera de las plataformas a
        continuación:
        <br />
        <br />
        <br />
        Email:
        <span
          className="email-span"
          onClick={handleCopyEmail}
          onMouseEnter={handleHoverEmail}
          onMouseLeave={handleHoverEmail}
        >
          {hoveredEmail
            ? "Haz clic para copiar el correo electrónico"
            : "ruimsmelo@gmail.com"}
        </span>
        <br />
        Teléfono:
        <br />
        +351 91 737 86 31
        <br />
        <br />
        <br />
        ¡Conéctate conmigo en LinkedIn y GitHub para mantenerte al día sobre mis
        últimos proyectos y aventuras profesionales!
        <br />
        <br />
        <div className="icons-div">
          <Link
            to="https://www.linkedin.com/in/rui-ser%C3%B4dio-melo-a19715276/"
            target="_blank"
            className="icons-link"
          >
            <img src={linkedInIcon} className="icons" alt="LinkedIn" />
          </Link>
          <Link
            to="https://github.com/RuiMSMelo?tab=repositories"
            target="_blank"
            className="icons-link"
          >
            <img src={gitHubIcon} className="icons" alt="GitHub" />
          </Link>
        </div>
      </p>
    </div>
  );
}

export default Contactame;
