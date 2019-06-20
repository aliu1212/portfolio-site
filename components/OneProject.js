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
    <style jsx>{`
        div[class*='quote-'] {
          display: flex;
          justify-content: center;
        }
        .project-name {
          font-size: 18px;
          letter-spacing: 0px;
          font-weight: 400;
          text-align: center;
          margin: 20px 0px 15px 0px;
        }
        .project-desc {
          font-size: 14px;
          letter-spacing: 0px;
          font-weight: 400;
          text-align: center;
          margin: 5px 0px 5px 0px;
        }
        .project-tech {
          font-size: 14px;
          letter-spacing: 0px;
          font-weight: 400;
          text-align: center;
          margin: 5px 0px 5px 0px;
        }
        .one-p-card {
          box-shadow: 2px 4px 8px 2px rgba(0,0,0,0.2);
          transition: 0.3s;
          padding: 5px 15px 25px 15px;
          margin: 15px 15px;
          border-radius: 8px;
        }
        .one-p-card:hover {
          box-shadow: 2px 8px 16px 2px rgba(0,0,0,0.2);
        }
      `}
    </style>
  </div>
)

export default OneProject