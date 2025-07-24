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
                {/* <div className='madewith-div'>
                    <img
                        src={javascripticon}
                        className='small-icons'
                        alt='Javascript'
                        title='Javascript'
                    />
                </div> */}
                <br />
                <br />
                A game made with Three.js
                <br />
                <br />
                <br />
                <br />
                Website:
                <br />
                <Link
                    to='https://ruimsmelo.github.io/3jsjourney_7_14_game/'
                    target='_blank'
                    className='links-to-websites'
                >
                    <span>
                        https://ruimsmelo.github.io/3jsjourney_7_14_game/
                    </span>
                </Link>
                <br />
                Github:
                <br />
                <Link
                    to='https://github.com/RuiMSMelo/3jsjourney_7_14_game'
                    target='_blank'
                    className='links-to-websites'
                >
                    <span>
                        https://github.com/RuiMSMelo/3jsjourney_7_14_game
                    </span>
                </Link>
            </p>
            <Link to='/projects' className='back-to-projects'>
                <span>Back to projects</span>
            </Link>
        </div>
    )
}

export default Sharkattack
