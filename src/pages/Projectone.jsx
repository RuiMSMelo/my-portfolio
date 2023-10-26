import { Link } from 'react-router-dom'
import soundSpaceImg from '../img/soundspace-img1.png'
import githubImg from '../img/github.svg'


function ProjectOne () {
    return (
      <div className='project1 all-pages snap'>
        <div className='projectsTextArea'>
          <p>React & Node.js & MongoDB</p>
          <Link to='https://lively-sprite-942da6.netlify.app/' target='_blank' className='project-link'><img src={soundSpaceImg} alt='soundspace-img' className='project-imgs'/></Link>
          <div className='two-githubs'>
            <Link to='https://github.com/RuiMSMelo/soundSpaceFrontend/' target='_blank'><img src={githubImg} className='link-imgs' title='frontend' alt=''/></Link>
            <Link to='https://github.com/RuiMSMelo/soundSpaceBackend/' target='_blank'><img src={githubImg} className='link-imgs' title='backend' alt=''/></Link>
          </div>
        </div>
      </div>
    )
}

export default ProjectOne