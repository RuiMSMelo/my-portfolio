import React, { useState } from "react";
import { Link } from "react-router-dom";
import cssicon from "../../img/cssicon.svg";
import reacticon from "../../img/reacticon.svg";
import nodejsicon from "../../img/nodejsicon.svg";
import mongodbicon from "../../img/mongodbicon.svg";

function SoundspaceES() {
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
          <img
            src={nodejsicon}
            className="small-icons"
            alt="NodeJS"
            title="NodeJS"
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
        SPAIN soundSpace is an innovative online platform designed to bring
        together individuals in the music industry, fostering a vibrant
        community that thrives on collaboration and connection.
        <br />
        <br />
        <br />
        <br />
        Website:
        <br />
        <Link
          to="https://lively-sprite-942da6.netlify.app/"
          target="_blank"
          className="links-to-websites"
        >
          <span>https://lively-sprite-942da6.netlify.app/</span>
        </Link>
        <br />
        Github:
        <br />
        <Link
          to="https://github.com/RuiMSMelo/soundSpaceFrontend"
          target="_blank"
          className="links-to-websites"
        >
          <span>Frontend</span>
        </Link>
        <Link
          to="https://github.com/RuiMSMelo/soundSpaceBackend"
          target="_blank"
          className="links-to-websites"
        >
          <span>Backend</span>
        </Link>
      </p>
      <Link to="/es/proyectos" className="back-to-projects">
        <span>Back to projects</span>
      </Link>
    </div>
  );
}

export default SoundspaceES;
