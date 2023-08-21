import { Link } from 'react-router-dom'
import Navbar from '../components/NavbarHome.jsx'
import githubImg from '../img/github.svg'
import linkedinImg from '../img/LinkedIn_icon.svg.png'
import ruiImg from '../img/ruidivingt6.jpg'
import cvPDF from '../img/RuiMeloCV-M.pdf'
import cvIcon from '../img/cvicon.png'

function Homepage() {
    return (
        <div className='all-pages'>
          <Navbar />
          <div className='text homepage'>
            <h1>Hi, I'm Rui Serôdio Melo</h1>
            <div className='img-text-div'>
              <img src={ruiImg} alt='rui-image' className='ruiImg'/>
              <div className='text-div'>
                <p>I'm a 30-year-old web developer from Portugal, currently living in Madrid. 
                Frontend development is my passion, where I can create captivating digital experiences. 
                <p>Portuguese is my native languange but I'm also fluent in both English and Spanish. With an international background, 
                  I bring a fresh perspective to every project. Engaging in Madrid's tech scene, 
                  I proactively stay current with the latest trends in web development.</p>
                </p>
              </div>
            </div>
            <div className='links-div'>
              <Link to='https://github.com/RuiMSMelo?tab=repositories' target='_blank'><img src={githubImg} className='link-imgs'/></Link>
              <Link to='https://www.linkedin.com/in/rui-ser%C3%B4dio-melo-a19715276/' target='_blank'><img src={linkedinImg} className='link-imgs'/></Link>
              <a href={cvPDF} target='_blank' rel='noopener noreferrer' className='cv-btn'><img src={cvIcon} className='link-imgs'/></a>
            </div>
          </div>
        </div>
    )
}

export default Homepage