import Navbar from '../components/NavbarHome.jsx'
import ruiImg from '../img/ruidivingt6.jpg'

function Homepage() {
    return (
        <div className='all-pages'>
          <Navbar />
          <div className='text homepage'>
            <h1>Hi, I'm Rui Serôdio Melo</h1>
            <div className='img-text-div'>
              <div className='text-div'>
                <p>I'm a 30-year-old web developer from Portugal, currently living in Madrid. 
                Frontend development is my passion, where I can create captivating digital experiences. 
                <p>Portuguese is my native language but I'm also fluent in both English and Spanish. With an international background, 
                  I bring a fresh perspective to every project. Engaging in Madrid's tech scene, 
                  I proactively stay current with the latest trends in web development.</p>
                </p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Homepage