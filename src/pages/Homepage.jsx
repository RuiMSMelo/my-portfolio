import { Link } from 'react-router-dom';
import oceanVideo from '../img/openoceanfinal.mp4';
import React, { useState } from 'react';

function Homepage() {
  const [hoveredHello, setHoveredHello] = useState(false)
  const [hoveredIm, setHoveredIm] = useState(false)
  const [hoveredRui, setHoveredRui] = useState(false)

  const handleHoverHello = () => {
    setHoveredHello(!hoveredHello)
  }

  const handleHoverIm = () => {
    setHoveredIm(!hoveredIm)
  }

  const handleHoverRui = () => {
    setHoveredRui(!hoveredRui)
  }

  return (
    <div className='homepage-container'>
      <div className='video-container'>
        <video muted autoPlay loop className='video-background'>
          <source src={oceanVideo} type='video/mp4' />
        </video>
      </div>
      <div className='homepage-text-container'>
        <Link to='/about'><h1 onMouseEnter={handleHoverHello} onMouseLeave={handleHoverHello}>
          {hoveredHello ? 'About me' : 'Hello.'}
        </h1></Link><br></br>
        <Link to='/projects'><h1 onMouseEnter={handleHoverIm} onMouseLeave={handleHoverIm}>
          {hoveredIm ? 'My projects' : "I'm"}
        </h1></Link><br></br>
        <Link to='/contacts'><h1 onMouseEnter={handleHoverRui} onMouseLeave={handleHoverRui}>
          {hoveredRui ? 'Contact me' : 'Rui Melo'}
        </h1></Link>
      </div>
    </div>
  );
}

export default Homepage;
