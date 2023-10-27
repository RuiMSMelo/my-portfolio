import { Link } from 'react-router-dom'
import githubImg from '../img/github.svg'



function ProjectFive () {
    return (
        <div className='project5 all-pages snap'>
            <div className='projectsTextArea'>
                <p>A homepage for the company PluginFlow I developed during my intership</p>
                <p>made with <br></br>HTML & CSS</p>
                <Link to='https://ruimsmelo.github.io/NerveCenter-Homepage/' target='_blank' className='project-link'><button className='project-button'>Checkout this project!</button></Link>
                <Link to='https://github.com/RuiMSMelo/NerveCenter-Homepage/tree/main' target='_blank'><img src={githubImg} className='link-imgs' alt=''/></Link>
            </div>
        </div>
    )
}

export default ProjectFive