import { Link } from 'react-router-dom'
import githubImg from '../img/github.svg'
import teslaClone from '../img/teslaclone-img.png'


function ProjectTwo () {
    return (
        <div className='project2 all-pages'>
            <p>React & CSS</p>
            <Link to='https://ruimsmelo.github.io/tesla-clone/' target='_blank' className='project-link'><img src={teslaClone} alt='teslaclone-img' className='project-imgs'/></Link>
            <Link to='https://github.com/RuiMSMelo/tesla-clone/tree/main' target='_blank'><img src={githubImg} className='link-imgs' alt=''/></Link>
        </div>
    )
}

export default ProjectTwo