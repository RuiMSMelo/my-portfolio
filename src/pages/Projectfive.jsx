import { Link } from 'react-router-dom'
import githubImg from '../img/github.svg'
import nerveCenterGif from '../img/nervecenter-homepage-gif.gif'



function ProjectFive () {
    return (
        <div className='project5 all-pages snap'>
            <div className='projectsTextArea'>
                <p>HTML & CSS</p>
                <Link to='https://ruimsmelo.github.io/NerveCenter-Homepage/' target='_blank' className='project-link'><img src={nerveCenterGif} alt='nervecenter-img' className='project-imgs'/></Link>
                <Link to='https://github.com/RuiMSMelo/NerveCenter-Homepage/tree/main' target='_blank'><img src={githubImg} className='link-imgs' alt=''/></Link>
            </div>
        </div>
    )
}

export default ProjectFive