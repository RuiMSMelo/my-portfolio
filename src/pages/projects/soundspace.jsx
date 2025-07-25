import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cssicon from '../../img/cssicon.svg'
import reacticon from '../../img/reacticon.svg'
import nodejsicon from '../../img/nodejsicon.svg'
import mongodbicon from '../../img/mongodbicon.svg'

function Soundspace() {
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
                    <img
                        src={nodejsicon}
                        className='small-icons'
                        alt='NodeJS'
                        title='NodeJS'
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
                A collaborative music networking platform where artists and
                producers can connect, share ideas, and collaborate on projects.
                Built with the MERN stack (MongoDB, Express, React, Node.js),
                featuring secure user authentication, dynamic user profiles, and
                responsive UI design.
                <br />
                <br />
                <br />
                <br />
                Website:
                <br />
                <Link
                    to='https://lively-sprite-942da6.netlify.app/'
                    target='_blank'
                    className='links-to-websites'
                >
                    <span>https://lively-sprite-942da6.netlify.app/</span>
                </Link>
                <br />
                Github:
                <br />
                <Link
                    to='https://github.com/RuiMSMelo/soundSpaceFrontend'
                    target='_blank'
                    className='links-to-websites'
                >
                    <span>Frontend</span>
                </Link>
                <Link
                    to='https://github.com/RuiMSMelo/soundSpaceBackend'
                    target='_blank'
                    className='links-to-websites'
                >
                    <span>Backend</span>
                </Link>
            </p>
            <Link to='/projects' className='back-to-projects'>
                <span>Back to projects</span>
            </Link>
        </div>
    )
}

export default Soundspace
