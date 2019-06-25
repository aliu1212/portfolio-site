const OneProject = (props) => (
  <div className="one-p-card">
    <div className="proj-picture">
      <picture>
        <img src={ props.project.pict } alt={ props.project.name } />
      </picture>
    </div>
    <div className="proj-text">
      <div className="project-name">
        { props.project.name }
      </div>
      <div className="project-desc">
        { props.project.desc }
      </div>
      <div className="project-tech">
        { props.project.tech }
      </div>
    </div>
  </div>
)

export default OneProject