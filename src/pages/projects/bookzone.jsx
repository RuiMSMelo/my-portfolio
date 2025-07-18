import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import htmlicon from '../../img/htmlicon.svg'
import cssicon from '../../img/cssicon.svg'
import expressicon from '../../img/expressiconwhite.png'
import mongodbicon from '../../img/mongodbicon.svg'

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
                <div className='madewith-div'>
                    <img
                        src={htmlicon}
                        className='small-icons'
                        alt='HTML'
                        title='HTML'
                    />
                    <img
                        src={cssicon}
                        className='small-icons'
                        alt='CSS'
                        title='CSS'
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
                </div>
                <br />
                <br />
                With just 5 days to develop this project, we decided to keep it
                simple but efficient and made this web application where the
                user can store already read and unread books.
                <br />
                <br />
                <br />
                <br />
                Website:
                <br />
                <Link
                    to='https://bookzone.adaptable.app/'
                    target='_blank'
                    className='links-to-websites'
                >
                    <span>https://bookzone.adaptable.app/</span>
                </Link>
                <br />
                Github:
                <br />
                <Link
                    to='https://github.com/RuiMSMelo/bookzone'
                    target='_blank'
                    className='links-to-websites'
                >
                    <span>https://github.com/RuiMSMelo/bookzone</span>
                </Link>
            </p>
            <Link to='/projects' className='back-to-projects'>
                <span>Back to projects</span>
            </Link>
        </div>
    )
}

export default Bookzone
