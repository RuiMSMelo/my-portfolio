import React, { useState } from "react";
import { Link } from "react-router-dom";
import cvIcon from "../img/cviconwhite.jpg";
import cvPDFenglish from "../img/cvs/RuiCVeng.pdf";

function About() {
  const [hoveredHome, setHoveredHome] = useState(false);

  const handleHoverHome = () => {
    setHoveredHome(!hoveredHome);
  };

  return (
    <div className="allpages">
      <Link to="/en">
        <h2
          onMouseEnter={handleHoverHome}
          onMouseLeave={handleHoverHome}
          className="home-button"
        >
          {hoveredHome ? "home" : "rui"}
        </h2>
      </Link>
      <h1>I design & build digital experiences</h1>
      <p>
        Hey, I'm Rui Serôdio Melo, a web developer with a profound connection to
        the ocean.
        <br />
        <br />
        Originally from Portugal and now living in Madrid, I bring my love for
        the digital world with a background rooted in marine biology and several
        years of diving experience.
        <br />
        <br />
        Fluent in Portuguese, English, and Spanish.
        {/*, I bring a multilingual touch to my work.*/}
        <br />
        <br />
        <br />
        This portfolio is where I showcase my projects and continuously improve
        them.
        <br />
        In the future, I'll also feature projects I'm currently working on. It's
        a space that evolves with my journey, reflecting my commitment to
        progress in web development.
        <br />
        <br />
        <br />
        <br />
        Let's create together!
        <br />
        <br />
        <br />
        My CV in english:
        <br />
        <br />
        <a
          href={cvPDFenglish}
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

export default About;
