const OneProject = (props) => (
  <div className="one-p-card">
    <div className="proj-picture">
      <picture>
        <img src="https://alexliudev.s3-us-west-1.amazonaws.com/placeholder.jpg" />
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