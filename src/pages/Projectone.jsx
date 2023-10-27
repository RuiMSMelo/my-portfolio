import { Link } from 'react-router-dom'
import githubImg from '../img/github.svg'


function ProjectOne () {
    return (
      <div className='project1 all-pages snap'>
        <div className='projectsTextArea'>
          <p>soundSpace is a social media type of application designed for individuals in the music industry to share and find work opportunities around the world</p>
          <p>made with <br></br> React, Node.js, MongoDB, HTML and CSS</p>
          <Link to='https://lively-sprite-942da6.netlify.app/' target='_blank' className='project-link'><button className='project-button'>Checkout this project!</button></Link>
          <div className='two-githubs'>
            <Link to='https://github.com/RuiMSMelo/soundSpaceFrontend/' target='_blank'><img src={githubImg} className='link-imgs' title='Frontend' alt='Frontend'/></Link>
            <Link to='https://github.com/RuiMSMelo/soundSpaceBackend/' target='_blank'><img src={githubImg} className='link-imgs' title='Backend' alt='Backend'/></Link>
          </div>
        </div>
      </div>
    )
}

export default ProjectOne