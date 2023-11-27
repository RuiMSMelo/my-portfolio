import { Link } from 'react-router-dom';

function Projects() {
    return (
        <div className='allpages'>
            <Link to='/'><h2 className='home-button'>Home</h2></Link>
            <h2>Tesla</h2>
            <h2>SoundSpace</h2>
            <h2>Bookzone</h2>
            <h2>Sharkattack</h2>
            <h2>Plugin Flow</h2>
        </div>
    );
}

export default Projects;
