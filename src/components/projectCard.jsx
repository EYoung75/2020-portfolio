import React from "react";
import { FaGithubAlt, FaGlobe } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <div className="project">
      <div className="project__title">
        <h3>Project Title</h3>
      </div>
      <div className="project__preview">
        <img src={require("../assets/me.jpg")} />
      </div>
      <div className="project__links">
        <a href="#" target="_blank">
          <FaGithubAlt/> {"<Code/>"}
        </a>
        <a href="#" target="_blank">
          <FaGlobe/> Live Site
        </a>
      </div>
      <div className="project__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos quod
        aperiam harum mollitia omnis iusto doloribus enim. Ex totam aut deleniti
        ut quidem molestias necessitatibus praesentium dolores quo quas. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Molestiae ea neque
        vitae odit in incidunt magni, veniam, quod atque rerum aliquam iusto
        veritatis maiores. Eligendi consequuntur delectus quod soluta
        necessitatibus!
      </div>
    </div>
  );
};

export default ProjectCard;
