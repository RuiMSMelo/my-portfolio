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
            <Link to='/'>
                <h2
                    onMouseEnter={handleHoverHome}
                    onMouseLeave={handleHoverHome}
                    className='home-button'
                >
                    {hoveredHome ? 'home' : 'rui'}
                </h2>
            </Link>
            <p>
                <div className='madewith-div'>
                    <img
                        src={javascripticon}
                        className='small-icons'
                        alt='Javascript'
                        title='Javascript'
                    />
                </div>
                <br />
                <br />
                A simple game where you control a shark, in a 2d screen, and
                need to eat all the food you can without getting caught by the
                awful, nature-disturbing scuba divers.
                <br />
                <br />
                <br />
                <br />
                Website:
                <br />
                <Link
                    to='https://ruimsmelo.github.io/shark-attack/'
                    target='_blank'
                    className='links-to-websites'
                >
                    <span>https://ruimsmelo.github.io/shark-attack/</span>
                </Link>
                <br />
                Github:
                <br />
                <Link
                    to='https://github.com/RuiMSMelo/shark-attack'
                    target='_blank'
                    className='links-to-websites'
                >
                    <span>https://github.com/RuiMSMelo/shark-attack</span>
                </Link>
            </p>
            <Link to='/projects' className='back-to-projects'>
                <span>Back to projects</span>
            </Link>
        </div>
    )
}

export default Sharkattack
