import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithubAlt,
  FaLinkedin,
  FaEnvelope,
  FaCameraRetro
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      <div className="home__hero">
        <h1 className="home__hero__title">Evan Young</h1>
        <div className="home__hero__banner">
          <h2>Web Developer {"&"} avid adventurer</h2>
          <p>
            Focused on creating unique and engaging user experiences and elegant
            coding solutions
          </p>
        </div>
        <div className="home__hero__banner__scroll">&darr;</div>

        <div className="home__hero__footer">
          <FaGithubAlt />
          <FaLinkedin />
          <FaEnvelope />
          <FaCameraRetro />
        </div>
      </div>
      <div className="home__sub"></div>
    </div>
  );
};

export default Home;
