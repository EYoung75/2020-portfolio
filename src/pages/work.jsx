import React from "react";
import ProjectCard from "../components/projectCard.jsx";

const Work = () => {
  const projects = [
    {
      name: "PicPost",
      img: require("../assets/picpost.gif"),
      description:
        "A picture posting social media platform built using Flutter with multiple Firebase services on the backend and utilizing Cloud Firestore as the database. Offers full CRUD functionality for posts and user profiles and the ability to follow other users and like/comment on their posts.",
      github: "https://github.com/EYoung75/flutter-random",
      live: "",
    },
    {
      name: "PinPoint",
      img: require("../assets/pinpoint.gif"),
      description:
        "A Flutter place searching application allowing users to search and view details for hot spots and places of interest around them. Provides streamlined data populated from Google's Places and Maps API in conjunction with Yelp's API for review data.",
      github: "https://github.com/EYoung75/pinpoint_flutter",
      live: "",
    },
    {
      name: "WatchList",
      img: require("../assets/watchlist.gif"),
      description:
        "A React app that consumes TMDB's Movies and TV API to render details for thousands of movies and tv shows. Designed with a 'mobile first' approach.",
      github: "https://github.com/EYoung75/watchlist",
      live: "https://movieswatchlister.surge.sh/",
    },
    // {
    //   name: "Movie Reviews",
    //   img: require("../assets/movie-reviews.gif"),
    //   description: "A full CRUD React app that allows users to review movies. Utilizes a back-end created using Express.js and PostgreSQL.",
    //   github: "https://github.com/EYoung75/movie-reviews",
    //   live: "http://roomy-apparatus.surge.sh/"
    // },
    {
      name: "Misc. Sites",
      img: require("../assets/misc.gif"),
      description:
        "A collection of miscellanious, fully responsive sites developed for professional and personal use.",
      github: "",
      live: "",
    },
  ];
  return (
    <div className="work">
      <h2 className="work__title">Latest Projects:</h2>
      <div className="work__projects">
        {projects.map((project) => (
          <ProjectCard props={project} key={project.name} />
        ))}
      </div>
      {/* <Link to="/about" className="work__link">About Me &rarr;</Link> */}
    </div>
  );
};

export default Work;
