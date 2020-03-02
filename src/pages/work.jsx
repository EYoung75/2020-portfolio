import React from "react";
import ProjectCard from "../components/projectCard.jsx";

const Work = () => {
  const projects = [
    {
      name: "OneCard",
      img: require("../assets/onecard.gif"),
      description:
        "A 'Virtual Business Card' sharing app built using Flutter and implementing user-authentication and various Firebase services on the backend. Revolves around the user specific functionality of creating a virtual business card and scanning QR codes to share and add to a virtual wallet. Implements full CRUD functionality.",
      github: "https://github.com/EYoung75/flutter_oneCard",
      live: ""
    },
    {
      name: "PinPoint",
      img: require("../assets/pinpoint.gif"),
      description: "A Flutter place searching application allowing users to search and view details for hot spots and places of interest around them. Provides streamlined data populated from Google's Places and Maps API in conjunction with Yelp's API for review data.",
      github: "https://github.com/EYoung75/pinpoint_flutter",
      live: ""
    },
    {
      name: "Movie Reviews",
      img: require("../assets/movie-reviews.gif"),
      description: "A full CRUD React app that allows users to review movies. Utilizes a back-end created using Express.js and PostgreSQL.",
      github: "https://github.com/EYoung75/movie-reviews",
      live: "http://roomy-apparatus.surge.sh/"
    },
    // {
    //   name: "Something else",
    //   img: require("../assets/movie-reviews.gif"),
    //   description: "",
    //   github: "",
    //   live: ""
    // }
  ];
  return (
    <div className="work">
      <h2 className="work__title">Latest Projects:</h2>
      <div className="work__projects">
        {projects.map(project => (
          <ProjectCard props={project} />
        ))}
      </div>
    </div>
  );
};

export default Work;
