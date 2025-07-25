import { useState } from 'react'
import { Link } from 'react-router-dom'
import oceanVideo from '../img/openoceanfinal.mp4'

function Homepage() {
    const [hoveredHello, setHoveredHello] = useState(false)
    const [hoveredIm, setHoveredIm] = useState(false)
    const [hoveredRui, setHoveredRui] = useState(false)

    const handleHoverHello = () => {
        setHoveredHello(!hoveredHello)
    }

    const handleHoverIm = () => {
        setHoveredIm(!hoveredIm)
    }

    const handleHoverRui = () => {
        setHoveredRui(!hoveredRui)
    }

    const [videoLoaded, setVideoLoaded] = useState(false)

    return (
        <>
            {!videoLoaded && <div className='black-screen' />}{' '}
            <div className='homepage-container'>
                {/* <div
                    className={`video-container ${
                        videoLoaded ? 'fade-in' : 'hidden'
                    }`}
                >
                    <video
                        muted
                        autoPlay
                        loop
                        className='video-background'
                        onLoadedData={() => setVideoLoaded(true)}
                    >
                        <source src={oceanVideo} type='video/mp4' />
                    </video>
                </div> */}

                <div className='homepage-text-container'>
                    <Link to='/about'>
                        <h1
                            onMouseEnter={handleHoverHello}
                            onMouseLeave={handleHoverHello}
                        >
                            {hoveredHello ? 'About' : 'Hello.'}
                        </h1>
                    </Link>
                    <Link to='/projects'>
                        <h1
                            onMouseEnter={handleHoverIm}
                            onMouseLeave={handleHoverIm}
                        >
                            {hoveredIm ? 'Projects' : "I'm"}
                        </h1>
                    </Link>
                    <Link to='/contacts'>
                        <h1
                            onMouseEnter={handleHoverRui}
                            onMouseLeave={handleHoverRui}
                        >
                            {hoveredRui ? 'Contact me' : 'Rui Melo'}
                        </h1>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Homepage
