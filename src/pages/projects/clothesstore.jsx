import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cssicon from '../../img/cssicon.svg'
import reacticon from '../../img/reacticon.svg'

function ClothesStore() {
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
                </div> */}
                <br />
                <br />
                A simple yet functional e-commerce website built using React and
                styled for responsiveness. The app fetches product data from a
                public API and displays them in a clean, user-friendly layout.
                <br />
                <br />
                <br />
                <br />
                Website:
                <br />
                <Link
                    to='https://ruimsmelo.github.io/clothesStore/'
                    target='_blank'
                    className='links-to-websites'
                >
                    <span>https://ruimsmelo.github.io/clothesStore/</span>
                </Link>
                <br />
                Github:
                <br />
                <Link
                    to='https://github.com/RuiMSMelo/clothesStore'
                    target='_blank'
                    className='links-to-websites'
                >
                    <span>https://github.com/RuiMSMelo/clothesStore</span>
                </Link>
            </p>
            <Link to='/projects' className='back-to-projects'>
                <span>Back to projects</span>
            </Link>
        </div>
    )
}

export default ClothesStore
