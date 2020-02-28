import React from "react";
import ProjectCard from "../components/projectCard.jsx";

const Work = () => {
  return (
    <div className="work">
      <h2 className="work__title">Latest Projects:</h2>
      <div className="work__projects">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Work;
