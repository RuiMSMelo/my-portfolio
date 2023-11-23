import { Link } from 'react-router-dom'
import oceanVideo from '../img/openoceanfinal.mp4'

function Homepage() {
    return (
        <div className='homepage-container'>
          <div className='video-container'>
            <video muted autoPlay loop className='video-background'><source src={oceanVideo} type="video/mp4" /></video>
          </div>
          <div>
            <Link to='/'><h2 className='home-button'>Home</h2></Link>
          </div>
          <div className='homepage-text-container'>
            <h1>Hello.</h1>
            <h1>I'm</h1>
            <h1>Rui Serôdio Melo</h1>
          </div>
        </div>
    )
}

export default Homepage