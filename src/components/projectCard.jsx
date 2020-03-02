import React from "react";
import { FaGithubAlt, FaGlobe } from "react-icons/fa";

const ProjectCard = props => {
  let project = props.props;
  return (
    <div className="project">
      <div className="project__title">
        <h3>{project.name}</h3>
      </div>
      <div className="project__preview">
        <img src={project.img} />
      </div>
      <div className="project__links">
        <a href={project.github} target="_blank">
          <FaGithubAlt /> {"<Code/>"}
        </a>
        {project.live === "" ? (
          ""
        ) : (
          <a href={project.live} target="_blank">
            <FaGlobe /> Live Site
          </a>
        )}
      </div>
      <div className="project__description">
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
