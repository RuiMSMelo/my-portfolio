import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Projects() {
    const [hoveredHome, setHoveredHome] = useState(false)

    const handleHoverHome = () => {
        setHoveredHome(!hoveredHome)
    }

    return (
        <div className='allpages projects-div'>
            <Link to='/en'>
                <h2
                    onMouseEnter={handleHoverHome}
                    onMouseLeave={handleHoverHome}
                    className='home-button'
                >
                    {hoveredHome ? 'home' : 'rui'}
                </h2>
            </Link>
            {/* <Link to='/tesla'><h3>Tesla</h3></Link> */}
            <Link to='/soundspace'>
                <h3>SoundSpace</h3>
            </Link>
            <Link to='/clothesStore'>
                <h3>Clothes Store</h3>
            </Link>
            <Link to='/bananas'>
                <h3>Bananas</h3>
            </Link>
            <Link to='/marblegame'>
                <h3>Marble Game</h3>
            </Link>
            <Link to='/pluginflow'>
                <h3>Plugin Flow</h3>
            </Link>
        </div>
    )
}

export default Projects
