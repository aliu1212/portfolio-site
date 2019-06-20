import ProjectDetails from '../assets/ProjectDetails';
import OneProject from './OneProject';

const Projects = () => (
  <div>
    <div className="projects-title">
      software applications
    </div>
    <div className="projects-description">
      stuff I've built recently
    </div>
    <div>
      { 
        ProjectDetails.map((project, index) => {
          return <OneProject project={ project } key={ index } />
        }) 
      }
    </div>
    <style jsx>{`
        div[class*='projects-'] {
          display: flex;
          justify-content: center;
        }
        .projects-title {
          font-size: 28px;
          letter-spacing: 0px;
          font-weight: 400;
          text-align: center;
          margin: 20px 0px 20px 0px;
        }
        .projects-description {
          font-size: 14px;
          letter-spacing: 0px;
          font-weight: 400;
          text-align: center;
          margin: 20px 0px 20px 0px;
        }
      `}
    </style>
  </div>
)

export default Projects