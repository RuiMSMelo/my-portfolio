import { Link } from 'react-router-dom'
import githubImg from '../img/github.svg'


function ProjectTwo () {
    return (
        <div className='project2 all-pages snap'>
            <div className='projectsTextArea'>
                <p>A copy of Tesla's website - to further improve my frontend development skills</p>
                <p>made with <br></br> React, HTML and CSS</p>
                <Link to='https://ruimsmelo.github.io/tesla-clone/' target='_blank' className='project-link'><button className='project-button'>Checkout this project!</button></Link>
                <Link to='https://github.com/RuiMSMelo/tesla-clone/tree/main' target='_blank'><img src={githubImg} className='link-imgs' alt=''/></Link>
            </div>
        </div>
    )
}

export default ProjectTwo