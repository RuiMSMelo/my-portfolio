import { useState } from 'react'
import { Link } from 'react-router-dom'
import linkedInIcon from '../img/LinkedIn_icon.svg.png'
import gitHubIcon from '../img/githubwhite.png'

function Contacts() {
    const [hoveredHome, setHoveredHome] = useState(false)
    const [hoveredEmail, setHoveredEmail] = useState(false)

    const handleHoverHome = () => {
        setHoveredHome(!hoveredHome)
    }

    const handleHoverEmail = () => {
        setHoveredEmail(!hoveredEmail)
    }

    const handleCopyEmail = () => {
        const emailToCopy = 'ruimsmelo@gmail.com'

        const textarea = document.createElement('textarea')
        textarea.value = emailToCopy
        document.body.appendChild(textarea)

        textarea.select()
        textarea.setSelectionRange(0, 99999)

        document.execCommand('copy')

        document.body.removeChild(textarea)
    }

    return (
        <div className='allpages'>
            <Link to='/en'>
                <h2
                    onMouseEnter={handleHoverHome}
                    onMouseLeave={handleHoverHome}
                    className='home-button'
                >
                    {hoveredHome ? 'home' : 'rui'}
                </h2>
            </Link>
            <h1>Let's work together!</h1>
            <p>
                Thank you for visiting my portfolio!
                <br />
                <br />
                <br />
                Whether you're here with a specific project in mind, have
                questions about my experience and skills, or simply want to
                connect and say hello, I'm here and eager to hear from you.
                <br />
                <br />
                Your feedback, inquiries, and collaboration opportunities are
                all valuable to me.
                <br />
                <br />
                Don't hesitate in reaching out through any of the platforms
                below:
                <br />
                <br />
                <br />
                Email:
                <span
                    className='email-span'
                    onClick={handleCopyEmail}
                    onMouseEnter={handleHoverEmail}
                    onMouseLeave={handleHoverEmail}
                >
                    {hoveredEmail
                        ? 'click to copy email to clipboard'
                        : 'ruimsmelo@gmail.com'}
                </span>
                <br />
                Phone:
                <br />
                +351 91 737 86 31
                <br />
                <br />
                <br />
                Connect with me on LinkedIn and GitHub to stay updated on my
                latest projects and professional adventures!
                <br />
                <br />
                <div className='icons-div'>
                    <Link
                        to='https://www.linkedin.com/in/rui-ser%C3%B4dio-melo-a19715276/'
                        target='_blank'
                        className='icons-link'
                    >
                        <img
                            src={linkedInIcon}
                            className='icons'
                            alt='LinkedIn'
                        />
                    </Link>
                    <Link
                        to='https://github.com/RuiMSMelo?tab=repositories'
                        target='_blank'
                        className='icons-link'
                    >
                        <img src={gitHubIcon} className='icons' alt='GitHub' />
                    </Link>
                </div>
            </p>
        </div>
    )
}

export default Contacts
