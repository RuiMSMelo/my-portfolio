import { Link } from 'react-router-dom'
import NavbarProjects from '../components/NavbarProjects.jsx'
import nerveCenterGif from '../img/nervecenter-homepage-gif.gif'
import soundSpaceImg from '../img/soundspace-img1.png'
import bookZoneImg from '../img/bookzone-img1.png'
import sharkAttackImg from '../img/sharkattack-img.png'
import githubImg from '../img/github.svg'
import weatherApp from '../img/weatherapp-img.png'
import teslaClone from '../img/teslaclone-img.png'

function Projects() {
    return (
        <div className="all-pages">
            <NavbarProjects/>
            <div className='projects text'>
                <div className='project1'>
                    <p>React & Node.js & MongoDB</p>
                    <Link to='https://lively-sprite-942da6.netlify.app/' target='_blank' className='project-link'><img src={soundSpaceImg} alt='soundspace-img' className='project-imgs'/></Link>
                    <div className='two-githubs'>
                        <Link to='https://github.com/RuiMSMelo/soundSpaceFrontend/' target='_blank'><img src={githubImg} className='link-imgs' title='frontend' alt=''/></Link>
                        <Link to='https://github.com/RuiMSMelo/soundSpaceBackend/' target='_blank'><img src={githubImg} className='link-imgs' title='backend' alt=''/></Link>
                    </div>
                </div>
                <br></br>
                <div className='project5'>
                    <p>React & CSS</p>
                    <Link to='https://ruimsmelo.github.io/tesla-clone/' target='_blank' className='project-link'><img src={teslaClone} alt='teslaclone-img' className='project-imgs'/></Link>
                    <Link to='https://github.com/RuiMSMelo/tesla-clone/tree/main' target='_blank'><img src={githubImg} className='link-imgs' alt=''/></Link>
                </div>
                <br></br>
                <div className='project2'>
                    <p>Node.js & MongoDB</p>
                    <Link to='https://bookzone.adaptable.app/' target='_blank' className='project-link'><img src={bookZoneImg} alt='bookzone-img' className='project-imgs'/></Link>   
                    <Link to='https://github.com/RuiMSMelo/bookzone' target='_blank'><img src={githubImg} className='link-imgs' alt=''/></Link>
                </div>
                <br></br>
                <div className='project3'>
                    <p>JavaScript</p>
                    <Link to='https://ruimsmelo.github.io/shark-attack/' target='_blank' className='project-link'><img src={sharkAttackImg} alt='sharkattack-img' className='project-imgs'/></Link>  
                    <Link to='https://github.com/RuiMSMelo/shark-attack' target='_blank'><img src={githubImg} className='link-imgs' alt=''/></Link>
                </div>
                <br></br>
                <div className='project4'>
                    <p>HTML & CSS</p>
                    <Link to='https://ruimsmelo.github.io/NerveCenter-Homepage/' target='_blank' className='project-link'><img src={nerveCenterGif} alt='nervecenter-img' className='project-imgs'/></Link>
                    <Link to='https://github.com/RuiMSMelo/NerveCenter-Homepage/tree/main' target='_blank'><img src={githubImg} className='link-imgs' alt=''/></Link>
                </div>
            </div>
        </div>
    )
}

export default Projects
