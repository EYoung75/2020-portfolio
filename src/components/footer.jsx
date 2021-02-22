import React from "react";
import {
    FaGithubAlt,
    FaLinkedin,
    FaEnvelope,
    FaCameraRetro
  } from "react-icons/fa";
  
const Footer = () => {
  let date = new Date;
  date = date.getFullYear();
  return (
    <div className="footer">
      <div className="footer__left">
        <a href="https://github.com/EYoung75/" target="_blank" rel="noopener noreferrer">
          <FaGithubAlt />
        </a>
        <a href="https://www.linkedin.com/in/evanyoung4/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:young.evanj@gmail.com" target="_top">
          <FaEnvelope />
        </a>
        <a href="https://vsco.co/evanyoung75/gallery" target="_blank" rel="noopener noreferrer">
          <FaCameraRetro />
        </a>
      </div>
      <div className="footer__right">
        <h2>&#169; Evan Young</h2>
        <h2>{date}</h2>
      </div>
    </div>
  );
};

export default Footer;
