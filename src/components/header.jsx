import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return <div className="header">
      <h2 className="header__logo">EY20'</h2>
      <ul className="header__navigation">
        <Link
          to="/"
          exact
          className="header__navigation__link header__navigation__link-1"
          activeClassName="header__navigation__link--active"
        >
          <li>Home</li>
        </Link>
        <Link
          to="/work"
          className="header__navigation__link header__navigation__link-2"
          activeClassName="header__navigation__link--active"
        >
          <li>Work</li>
        </Link>
        <Link
          to="/about"
          className="header__navigation__link header__navigation__link-3"
          activeClassName="header__navigation__link--active"
        >
          <li>About</li>
        </Link>
      </ul>
  </div>;
};

export default Header;
