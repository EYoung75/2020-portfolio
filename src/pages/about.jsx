import React from "react";
import Logo from "../components/logo.jsx";
const About = () => {
  return (
    <div className="about">
      <Logo />
      <h1>About</h1>
      <div className="about__container">
        <div className="about__pic" />
        <div className="about__bio">
          <p>
            Hey there, I'm a web developer and recent Kansas City transplant.
          </p>
          <p>•••</p>
          <p>
            Before taking on the role of web developer I have worked jobs
            ranging from deck-handing out of Juneau, Alaska to serving in the
            United States Navy. My eclectic job background equipped me with the
            tools to function as an effective team player and approach problems
            through the lens of a diverse problem solver.
          </p>
          <p>••• </p>
          <p>
            I spend my free time exploring my new home in KC with my dog
            Maximus, taking on new challenges, or
            expanding my technological skillset. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
