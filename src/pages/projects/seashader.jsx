import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import htmlicon from '../../img/htmlicon.svg'
import cssicon from '../../img/cssicon.svg'
import expressicon from '../../img/expressiconwhite.png'
import mongodbicon from '../../img/mongodbicon.svg'
import threejsicon from '../../img/threejsicon.png'
import opengl from '../../img/opengl.png'

function Seashader() {
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
                An atmospheric WebGL shader built with GLSL and Three.js,
                creating a night-time ocean scene illuminated by a central point
                light. Users can interact with the scene using a GUI panel to
                tweak wave motion and visual effects.
                <br />
                <br />
                <br />
                <br />
                Website:
                <br />
                <Link
                    to='https://ruimsmelo.github.io/3jsjourney_4_10/'
                    target='_blank'
                    className='links-to-websites'
                >
                    <span>https://ruimsmelo.github.io/3jsjourney_4_10/</span>
                </Link>
                <br />
                Github:
                <br />
                <Link
                    to='https://github.com/RuiMSMelo/3jsjourney_4_10'
                    target='_blank'
                    className='links-to-websites'
                >
                    <span>https://github.com/RuiMSMelo/3jsjourney_4_10</span>
                </Link>
            </p>
            <Link to='/projects' className='back-to-projects'>
                <span>Back to projects</span>
            </Link>
        </div>
    )
}

export default Seashader
