import { Link } from 'react-router-dom'
import githubImg from '../img/github.svg'



function ProjectThree () {
    return (
        <div className='project3 all-pages snap'>
            <div className='projectsTextArea'>
                <p>A simple but efficient web application where the user can store and keep track of already read and unread books</p>
                <p>made with <br></br> Node.js, MongoDB, HTML and CSS</p>
                <Link to='https://bookzone.adaptable.app/' target='_blank' className='project-link'><button className='project-button'>Checkout this project!</button></Link>   
                <Link to='https://github.com/RuiMSMelo/bookzone' target='_blank'><img src={githubImg} className='link-imgs' alt=''/></Link>
            </div>
        </div>
    )
}

export default ProjectThree