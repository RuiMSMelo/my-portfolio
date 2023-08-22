import { Link } from 'react-router-dom'
import githubImg from '../img/github.svg'
import linkedinImg from '../img/LinkedIn_icon.svg.png'
import cvPDF from '../img/RuiMeloCV-M.pdf'
import cvIcon from '../img/cvicon.png'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-btns'>
                <Link to='/'>About Me</Link>
            </div>
            <div className='navbar-btns navbarunselected'>
                <Link to="/projects">My Projects</Link> 
            </div>
            <div className='links-div'>
              <Link to='https://github.com/RuiMSMelo?tab=repositories' target='_blank'><img src={githubImg} className='link-imgs' alt=''/></Link>
              <Link to='https://www.linkedin.com/in/rui-ser%C3%B4dio-melo-a19715276/' target='_blank'><img src={linkedinImg} className='link-imgs' alt=''/></Link>
              <a href={cvPDF} target='_blank' rel='noopener noreferrer' className='cv-btn'><img src={cvIcon} className='link-imgs' alt=''/></a>
            </div>
        </div>  
    )
}

export default Navbar