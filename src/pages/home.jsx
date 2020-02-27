import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home__hero">
        <div className="home__hero__title">
          <h1>EY 20'</h1>
          <h2>web development portfolio</h2>
        </div>
      </div>
      <div className="home__sub">
        <div className="home__sub__content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          soluta accusamus ratione, quisquam pariatur perferendis odit
          dignissimos porro? Culpa quas dolorum deleniti minus recusandae!
          Explicabo doloremque error impedit saepe dolor.
        </div>
        <div className="home__sub__pic" />
        <div className="home__sub__content home__sub__content-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quo
          numquam. Aperiam quibusdam deserunt id, natus ut itaque maxime odio
          deleniti dolorum molestias corrupti veniam adipisci ex, officiis
          reiciendis laudantium!
        </div>
      </div>
    </div>
  );
};

export default Home;
