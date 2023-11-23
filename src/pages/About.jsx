import { Link } from 'react-router-dom'

function About() {
    return (
        <div>
            <div>
                <Link to='/'><h2 className='home-button'>Home</h2></Link>
            </div>
            <div className='allpages'>
                <p>About me</p>
            </div>
        </div>
    )
}


export default About
