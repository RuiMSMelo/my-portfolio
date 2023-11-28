import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import htmlicon from '../../img/htmlicon.svg'
import cssicon from '../../img/cssicon.svg'


function Pluginflow() {
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
                <div className='madewith-div'>
                    <img src={htmlicon} className='small-icons' alt='HTML' title='HTML'/>
                    <img src={cssicon} className='small-icons' alt='CSS' title='CSS'/>
                </div>
                <br /><br />
                During my intership with Nervecenter I was tasked to develop this homepage to their new website.
                <br /><br /><br /><br />
                Website:
                <br />
                <Link to='https://ruimsmelo.github.io/NerveCenter-Homepage/' target='_blank' className='links-to-websites'><span>https://ruimsmelo.github.io/NerveCenter-Homepage/</span></Link>
                <br />
                Github:
                <br />
                <Link to='https://github.com/RuiMSMelo/NerveCenter-Homepage' target='_blank' className='links-to-websites'><span>https://github.com/RuiMSMelo/NerveCenter-Homepage</span></Link>
            </p>
                <Link to='/projects' className='back-to-projects'><span>Back to projects</span></Link>
        </div>
    );
}

export default Pluginflow;
