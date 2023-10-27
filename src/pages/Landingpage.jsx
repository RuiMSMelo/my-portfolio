import ruiImg from '../img/ruidivingt6.jpg'


function Landingpage() {

    const arrowStyle = {
      fontSize: '24px'
    }

    return (
        <div className='homepage snap'>
          <h1>Hi, I'm Rui Serôdio Melo</h1>
          <div className='img-text-div'>
            <img src={ruiImg} alt='' className='ruiImg'/>
            <div className='text-div'>
              <p>I'm a 30-year-old web developer from Portugal, currently living in Madrid. 
              Frontend development is my passion, where I can create captivating digital experiences. 
              <p>Portuguese is my native language but I'm also fluent in both English and Spanish. With an international background, 
                 I bring a fresh perspective to every project. Engaging in Madrid's tech scene, 
                I proactively stay current with the latest trends in web development.</p>
              </p>
            </div>
          </div>
          <div id='checkoutMyProjectsDiv'>
            <p>scroll down to check out my projects! <span style={arrowStyle}>↓</span></p>
          </div>
        </div>
    )
}

export default Landingpage