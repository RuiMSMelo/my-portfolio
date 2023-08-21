import { Link } from 'react-router-dom'
import NavbarProjects from '../components/NavbarProjects.jsx'
import nerveCenterGif from '../img/nervecenter-homepage-gif.gif'
import soundSpaceImg from '../img/soundspace-img1.png'
import bookZoneImg from '../img/bookzone-img1.png'
import sharkAttackImg from '../img/sharkattack-img.png'
import githubImg from '../img/github.svg'

function Projects() {
    return (
        <div className="all-pages">
            <NavbarProjects/>
            <div className='projects text'>
                <div className='project1'>
                    <Link to='https://lively-sprite-942da6.netlify.app/' target='_blank'><img src={soundSpaceImg} alt='soundspace-img' className='project-imgs'/></Link>
                    <div className='two-githubs'>
                        <Link to='https://github.com/RuiMSMelo/soundSpaceFrontend/' target='_blank'><img src={githubImg} className='link-imgs' title='frontend'/></Link>
                        <Link to='https://github.com/RuiMSMelo/soundSpaceBackend/' target='_blank'><img src={githubImg} className='link-imgs' title='backend'/></Link>
                    </div>
                </div>
                <div className='project2'>
                    <Link to='https://bookzone.adaptable.app/' target='_blank'><img src={bookZoneImg} alt='bookzone-img' className='project-imgs'/></Link>   
                    <Link to='https://github.com/RuiMSMelo/bookzone' target='_blank'><img src={githubImg} className='link-imgs'/></Link>
                </div>
                <div className='project3'>
                    <Link to='https://ruimsmelo.github.io/shark-attack/' target='_blank'><img src={sharkAttackImg} alt='sharkattack-img' className='project-imgs'/></Link>  
                    <Link to='https://github.com/RuiMSMelo/shark-attack' target='_blank'><img src={githubImg} className='link-imgs'/></Link>
                </div>
                <div className='project4'>
                    <Link to='https://ruimsmelo.github.io/NerveCenter-Homepage/' target='_blank'><img src={nerveCenterGif} alt='nervecenter-img' className='project-imgs'/></Link>
                    <Link to='https://github.com/RuiMSMelo/NerveCenter-Homepage/tree/main' target='_blank'><img src={githubImg} className='link-imgs'/></Link>
                </div>
            </div>
        </div> 
    )
}

export default Projects
