import Landingpage from './Landingpage'
import ProjectOne from './Projectone'
import ProjectTwo from './Projecttwo'
import ProjectThree from './Projectthree'
import ProjectFour from './Projectfour'
import ProjectFive from './Projectfive'

function Homepage() {
    return (
        <div>
          <Landingpage />
          <br></br>
          <ProjectOne />
          <br></br>
          <ProjectTwo />
          <ProjectThree />
          <ProjectFour />
          <ProjectFive />
        </div>
    )
}

export default Homepage