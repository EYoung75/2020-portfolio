import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithubAlt,
  FaLinkedin,
  FaEnvelope,
  FaCameraRetro
} from "react-icons/fa";
import "./work.jsx";
import Work from "./work.jsx";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home__hero">
          {/* <img
            srcset={`
            ${require("../assets/bg-small.jpg")} 1x, 
            ${require("../assets/bg-big.jpg")} 2x
          `}
            sizes="(max-width: 700px) 100vw, (max-width: 900px) 50vw, 33vw"
            src={require("../assets/bg-big.jpg")}
            alt="Landing"
          /> */}
          <h1 className="home__hero__title">Evan Young</h1>
          <div className="home__hero__banner">
            <h2>Web Developer {"&"} avid adventurer</h2>
            <p>
              Passionate about creating unique and engaging user experiences and
              crafting elegant coding solutions
            </p>
          </div>
          <div className="home__hero__banner__scroll">
            <p>scroll</p>&darr;
          </div>
          <div className="home__hero__footer">
            <a href="https://github.com/EYoung75/" target="_blank">
              <FaGithubAlt />
            </a>
            <a href="https://www.linkedin.com/in/evanyoung4/" target="_blank">
              <FaLinkedin />
            </a>
            <a href="mailto:young.evanj@gmail.com" target="_top">
              <FaEnvelope />
            </a>
            <a href="https://vsco.co/evanyoung75/gallery" target="_blank">
              <FaCameraRetro />
            </a>
          </div>
        </div>
      </div>
      <Work />
    </div>
  );
};

export default Home;
