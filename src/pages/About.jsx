import { Link } from 'react-router-dom';
import cvIcon from '../img/cvicon.png';

function About() {
    return (
        <div className='allpages'>
            <Link to='/'><h2 className='home-button'>Home</h2></Link>
            <h1>I design & build digital experiences</h1>
            <p>
                Hey, I'm Rui Serôdio Melo, a web developer with a profound connection to the ocean.
                <br /><br />
                Originally from Portugal and now calling Madrid home, I bring my love for the digital world with a background rooted in marine biology and years of diving experience.
                <br /><br />
                Fluent in Portuguese, English, and Spanish, I bring a multilingual touch to my work. With an international background, I approach each project with a fresh perspective and keep myself actively involved in Madrid's tech community to stay updated on the latest trends in web development.
                <br /><br /><br />
                Let's create together.
                <br /><br />
                Check out my CV: <img src={cvIcon} className='icons' alt='CV Icon' />
            </p>
        </div>
    );
}

export default About;
