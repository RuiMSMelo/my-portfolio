import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import javascripticon from '../../img/javascripticon.svg'

function Sharkattack() {
    const [hoveredHome, setHoveredHome] = useState(false)

    const handleHoverHome = () => {
        setHoveredHome(!hoveredHome)
    }

    return (
        <div className='allpages projects-div project'>
            <Link to='/'><h2 onMouseEnter={handleHoverHome} onMouseLeave={handleHoverHome} className='home-button'>
                {hoveredHome ? 'home' : 'rui'}
            </h2></Link>
            <p>
                A simple game where you control a shark, in a 2d screen, and need to eat all the food you can without getting caught by the awful, nature-disturbing scuba divers.
                <br /><br />
                made with
                <br />
                <div className='madewith-div'>
                    <img src={javascripticon} className='small-icons' alt='HTML' title='HTML'/>
                </div>
                <br /><br /><br /><br />
                Website:
                <br />
                <Link to='https://ruimsmelo.github.io/shark-attack/' target='_blank'><span className='links-to-websites'>https://ruimsmelo.github.io/shark-attack/</span></Link>
                <br />
                Github:
                <br />
                <Link to='https://github.com/RuiMSMelo/shark-attack' target='_blank'><span className='links-to-websites'>https://github.com/RuiMSMelo/shark-attack</span></Link>
            </p>
        </div>
    );
}

export default Sharkattack;
