import React from "react";
import {
  FaGithubAlt,
  FaLinkedin,
  FaEnvelope,
  FaCameraRetro,
} from "react-icons/fa";
import "./work.jsx";
import Work from "./work.jsx";
import About from "./about.jsx";
import Contact from "./contact.jsx";
import Resume from "../components/resume.jsx";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home__hero">
          <h1 className="home__hero__title">Evan Young</h1>
          <div className="home__hero__banner">
            <h2>Software Developer {"&"} avid adventurer</h2>
            <hr/>
            <p>
              With a passion for crafting engaging user experiences and coding
              solutions
            </p>
          </div>
          {/* <div className="home__hero__banner__scroll">
            <p>scroll</p>&darr;
          </div> */}
          <div className="home__hero__footer">
            <a
              href="https://github.com/EYoung75/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubAlt />
            </a>
            <a
              href="https://www.linkedin.com/in/evanyoung4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:young.evanj@gmail.com" target="_top">
              <FaEnvelope />
            </a>
            <a
              href="https://vsco.co/evanyoung75/gallery"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCameraRetro />
            </a>
          </div>
        </div>
      </div>
      <Work />
      <About />
      <Resume />
      <Contact />
    </div>
  );
};

export default Home;
