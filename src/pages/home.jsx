import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home__bio">
        <img src={require("../assets/me.jpg")} alt="Picture of yours truly" className="home__image"/>
        <p>
          Hey there. My name is Evan Young and this is my portfolio site. If you
          don't really know what the hell is going on here, that makes two. But
          kick off your shoes or something and make yourself comfortable. I'm an avid
          adventurer, recent Kansas City transplant, and problem solving
          enthusiast. My passion lies in creating elegant coding solutions for
          complex, real world problems.
        </p>
      </div>
    </div>
  );
};

export default Home;
