import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Bookzone() {
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
                        src={threejsicon}
                        className='small-icons'
                        alt='THREEJS'
                        title='THREEJS'
                    />
                    <img
                        src={opengl}
                        className='small-icons'
                        alt='opengl'
                        title='opengl'
                    />
                    <img
                        src={expressicon}
                        className='small-icons'
                        alt='ExpressJS'
                        title='ExpressJS'
                    />
                    <img
                        src={mongodbicon}
                        className='small-icons'
                        alt='MongoDB'
                        title='MongoDB'
                    />
                </div> */}
                <br />
                <br />
                An interactive homepage featuring a dynamic 3D scene of rotating
                bananas floating across the screen. Built with React Three Fiber
                and styled in vibrant yellow tones for a fun and unique visual
                experience.
                <br />
                <br />
                <br />
                <br />
                Website:
                <br />
                <Link
                    to='https://ruimsmelo.github.io/Bananas/'
                    target='_blank'
                    className='links-to-websites'
                >
                    <span>https://ruimsmelo.github.io/Bananas/</span>
                </Link>
                <br />
                Github:
                <br />
                <Link
                    to='https://github.com/RuiMSMelo/Bananas'
                    target='_blank'
                    className='links-to-websites'
                >
                    <span>https://github.com/RuiMSMelo/Bananas</span>
                </Link>
            </p>
            <Link to='/projects' className='back-to-projects'>
                <span>Back to projects</span>
            </Link>
        </div>
    )
}

export default Bookzone
