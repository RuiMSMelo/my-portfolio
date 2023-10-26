import { Link } from 'react-router-dom'
import githubImg from '../img/github.svg'
import sharkAttackImg from '../img/sharkattack-img.png'


function ProjectFour () {
    return (
        <div className='project4 all-pages'>
            <p>JavaScript</p>
            <Link to='https://ruimsmelo.github.io/shark-attack/' target='_blank' className='project-link'><img src={sharkAttackImg} alt='sharkattack-img' className='project-imgs'/></Link>  
            <Link to='https://github.com/RuiMSMelo/shark-attack' target='_blank'><img src={githubImg} className='link-imgs' alt=''/></Link>
        </div>
    )
}

export default ProjectFour