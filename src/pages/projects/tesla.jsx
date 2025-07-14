import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import reacticon from '../../img/reacticon.svg'
import cssicon from '../../img/cssicon.svg'

function Tesla() {
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
                        src={reacticon}
                        className='small-icons'
                        alt='React'
                        title='React'
                    />
                    <img
                        src={cssicon}
                        className='small-icons'
                        alt='CSS'
                        title='CSS'
                    />
                </div>
                <br />
                <br />
                A copy of Tesla's website - to further improve my frontend
                development skills.
                <br />
                <br />
                <br />
                <br />
                Website:
                <br />
                <Link
                    to='https://ruimsmelo.github.io/tesla-clone/'
                    target='_blank'
                    className='links-to-websites'
                >
                    <span>https://ruimsmelo.github.io/tesla-clone/</span>
                </Link>
                <br />
                Github:
                <br />
                <Link
                    to='https://github.com/RuiMSMelo/tesla-clone'
                    target='_blank'
                    className='links-to-websites'
                >
                    <span>https://github.com/RuiMSMelo/tesla-clone</span>
                </Link>
            </p>
            <Link to='/projects' className='back-to-projects'>
                <span>Back to projects</span>
            </Link>
        </div>
    )
}

export default Tesla
