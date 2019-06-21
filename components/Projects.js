import ProjectDetails from '../assets/ProjectDetails';
import OneProject from './OneProject';

const Projects = () => (
  <div>
    <div className="projects-title">
      software applications
    </div>
    <div className="projects-description">
      some fun things i've built recently - check em out!
    </div>
    <div>
      { 
        ProjectDetails.map((project, index) => {
          return <OneProject project={ project } key={ index } />
        }) 
      }
    </div>
  </div>
)

export default Projects