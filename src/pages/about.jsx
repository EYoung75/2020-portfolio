import React from "react";
import Logo from "../components/logo.jsx";
const About = () => {
  return (
    <div className="about">
      <Logo />
      <h1>About</h1>
      <div className="about__bio">
        <p>I'm a web developer and recent Kansas City transplant.</p>
        <p>•••</p>
        <p>
          Before taking on the role of web developer, I have worked various jobs
          ranging from a deckhand out of Juneau, Alaska to serving in the United
          States Navy. This eclectic background provided me with the skills to
          function as an effective team player and the ability to approach
          problems through the lens of a diverse problem solver. I love taking
          on new challenges and engaging in new and exciting experiences.
        </p>
        <p>••• </p>
        <p>
          I spend my free time exploring my new home in KC with my dog Maximus,
          picking up on a new hobby, or broadening my technological skillset.
        </p>
      </div>
    </div>
  );
};

export default About;
