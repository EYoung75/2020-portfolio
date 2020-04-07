import React from "react";
import { FaGithubAlt, FaGlobe } from "react-icons/fa";

const ProjectCard = props => {
  let project = props.props;
  return (
    <div className="project" data-aos="flip-right" data-aos-offset="200" data-aos-duration="1600">
      <div className="project__title">
        <h3>{project.name}</h3>
      </div>
      <div className="project__preview">
        <img src={project.img} alt={project.name + " preview"}/>
      </div>
      <div className="project__links">
        {project.github === "" ? (
          ""
        ) : (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <FaGithubAlt /> {"<Code/>"}
          </a>
        )}
        {project.live === "" ? (
          ""
        ) : (
          <a href={project.live} target="_blank" rel="noopener noreferrer">
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
