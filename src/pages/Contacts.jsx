import { Link } from 'react-router-dom';
import linkedInIcon from '../img/LinkedIn_icon.svg.png';
import gitHubIcon from '../img/githubwhite.jpg';

function Contacts() {
    return (
        <div className='allpages'>
            <Link to='/'><h2 className='home-button'>Home</h2></Link>
            <h1>Let's work together!</h1>
            <p>
                I'm always looking for opportunities to collaborate with companies or individuals.
                <br /><br />
                I'm not just here to work for you. I'm here to work with you. My approach is all about fostering collaboration that optimizes the unique strengths each party brings.
                <br /><br />
                If you're in search of an open-minded collaborator, someone who values teamwork over ego, then let's skip the formalities and dive into how we can create something exceptional together.
                <br /><br /><br />
                Feel free to reach out through any platforms below:
                <br /><br /><br /><br />
                Email: ruimsmelo@gmail.com
                <br /><br />
                Phone: +351 91 737 86 31
                <br /><br /><br />
                Let's connect on:
                <br /><br />
                <div className='icons-div'>
                    <Link to='https://www.linkedin.com/in/rui-ser%C3%B4dio-melo-a19715276/' target='_blank' className='icons-link'><img src={linkedInIcon} className='icons' alt='LinkedIn' /></Link>
                    <Link to='https://github.com/RuiMSMelo?tab=repositories' target='_blank' className='icons-link'><img src={gitHubIcon} className='icons' alt='GitHub' /></Link>
                </div>
            </p>
        </div>
    );
}

export default Contacts;