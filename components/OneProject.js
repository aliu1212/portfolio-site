const OneProject = (props) => (
  <div className="one-p-card">
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
)

export default OneProject