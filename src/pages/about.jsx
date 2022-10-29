import React from "react";
// import Logo from "../components/logo.jsx";

const About = () => {
  return (
    <div className="about">
      {/* <Logo /> */}
      <h1>Hey, I'm Evan</h1>
      <div className="about__bio">
        {/* <p>I'm a Software Engineer and recent Kansas City transplant.</p>
        <p>•••</p> */}
        <p>
          My career in tech began shortly after leaving the United States Navy back in 2018,
          when I attended the Immersive Software Engineering Program at Galvanize - Denver Campus.
          Fast forward several years and I now have the opportunity to make big ideas happen on a daily basis.
        </p>
        <p>••• </p>
        <p>
          I have experience working within several different industries and with various team sizes and dynamics.    
          I love collaborating to tackle real world problems and enjoy writing code that is performant, maintainable, and well documented.
          I'm an optimization enthusiast with a passion for continuous learning and growth, and I strongly believe that no problem is too hard if you break it down into smaller pieces.
        </p>
        <p>••• </p>
        <p>
          When I'm not coding I enjoy traveling, spending time with friends (and/or my dog Max), playing guitar, photography, marathon/triathlon, and tinkering with new hobbies.
          Check out my GitHub for more work and feel free to connect with me on LinkedIn.
        </p>
      </div>
    </div>
  );
};

export default About;
