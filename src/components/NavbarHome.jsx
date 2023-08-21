import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-btns'>
                <Link to='/'>About Me</Link>
            </div>
            <div className='navbar-btns navbarunselected'>
                <Link to="/projects">My Projects</Link> 
            </div>
        </div>  
    )
}

export default Navbar