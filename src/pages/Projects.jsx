import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Projects() {
    const [hoveredHome, setHoveredHome] = useState(false)

    const handleHoverHome = () => {
        setHoveredHome(!hoveredHome)
    }

    return (
        <div className='allpages'>
            <Link to='/'><h2 onMouseEnter={handleHoverHome} onMouseLeave={handleHoverHome} className='home-button'>
                {hoveredHome ? 'home' : 'rui'}
            </h2></Link>
            <h2>Tesla</h2>
            <h2>SoundSpace</h2>
            <h2>Bookzone</h2>
            <h2>Sharkattack</h2>
            <h2>Plugin Flow</h2>
        </div>
    );
}

export default Projects;
