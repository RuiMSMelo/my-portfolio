import { useState } from 'react'
import { Link } from 'react-router-dom'

function Earth() {
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
                <br />
                <br />
                An immersive 3D Earth visualization created using Three.js and
                GLSL shaders. Users can rotate the globe to explore day and
                night cycles rendered in real time, showcasing shader
                programming and 3D rendering techniques.
                <br />
                <br />
                <br />
                <br />
                Website:
                <br />
                <Link
                    to='https://ruimsmelo.github.io/3jsjourney_4_12_earth/
'
                    target='_blank'
                    className='links-to-websites'
                >
                    <span>
                        https://ruimsmelo.github.io/3jsjourney_4_12_earth/
                    </span>
                </Link>
                <br />
                Github:
                <br />
                <Link
                    to='https://github.com/RuiMSMelo/3jsjourney_4_12_earth'
                    target='_blank'
                    className='links-to-websites'
                >
                    <span>
                        https://github.com/RuiMSMelo/3jsjourney_4_12_earth
                    </span>
                </Link>
            </p>
            <Link to='/projects' className='back-to-projects'>
                <span>Back to projects</span>
            </Link>
        </div>
    )
}

export default Earth
