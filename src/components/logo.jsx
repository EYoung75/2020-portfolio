import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" exact className="logo">
      EY '20
    </Link>
  );
};

export default Logo;
