import Landingpage from './Landingpage'
import ProjectOne from './Projectone'
import ProjectTwo from './Projecttwo'
import ProjectThree from './Projectthree'
import ProjectFour from './Projectfour'
import ProjectFive from './Projectfive'

function Homepage() {
    return (
        <div id='homepageSnapSetup'>
          <Landingpage />
          <ProjectOne />
          <ProjectTwo />
          <ProjectThree />
          <ProjectFour />
          <ProjectFive />
        </div>
    )
}

export default Homepage