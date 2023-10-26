import { Link } from 'react-router-dom'
import githubImg from '../img/github.svg'
import bookZoneImg from '../img/bookzone-img1.png'



function ProjectThree () {
    return (
        <div className='project3 all-pages'>
            <p>Node.js & MongoDB</p>
            <Link to='https://bookzone.adaptable.app/' target='_blank' className='project-link'><img src={bookZoneImg} alt='bookzone-img' className='project-imgs'/></Link>   
            <Link to='https://github.com/RuiMSMelo/bookzone' target='_blank'><img src={githubImg} className='link-imgs' alt=''/></Link>
        </div>
    )
}

export default ProjectThree