import { Link } from 'react-router-dom'
import githubImg from '../img/github.svg'


function ProjectFour () {
    return (
        <div className='project4 all-pages snap'>
            <div className='projectsTextArea'>
                <p>A simple game where you control a shark, in a 2d screen, and need to eat all the food you can without getting caught by the awful, nature-disturbing scuba divers</p>
                <p>made with <br></br> JavaScript</p>
                <Link to='https://ruimsmelo.github.io/shark-attack/' target='_blank' className='project-link'><button className='project-button'>Checkout this project!</button></Link>  
                <Link to='https://github.com/RuiMSMelo/shark-attack' target='_blank'><img src={githubImg} className='link-imgs' alt=''/></Link>
            </div>
        </div>
    )
}

export default ProjectFour