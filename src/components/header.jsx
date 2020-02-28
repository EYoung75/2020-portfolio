import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaFacebookSquare, FaGooglePlusSquare } from "react-icons/fa";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      // <nav className="header">
      //   <h2 className="header__logo">EY20'</h2>
        // <ul className="header__navigation">
        //   <Link
        //     to="/"
        //     exact
        //     className="header__navigation__link header__navigation__link-1"
        //     activeClassName="header__navigation__link--active"
        //   >
        //     <li>Home</li>
        //   </Link>
        //   <Link
        //     to="/work"
        //     className="header__navigation__link header__navigation__link-2"
        //     activeClassName="header__navigation__link--active"
        //   >
        //     <li>Work</li>
        //   </Link>
        //   <Link
        //     to="/about"
        //     className="header__navigation__link header__navigation__link-3"
        //     activeClassName="header__navigation__link--active"
        //   >
        //     <li>About</li>
        //   </Link>
        // </ul>
      // </nav>
      <nav
        className={"navigation " + (this.state.open ? "navigation-open" : "")}
      >
        <div className="button-background" onClick={this.toggleNav}>
          <div
            className={this.state.open ? "button button-close" : "button"}
          ></div>
          
        </div>
      </nav>
    );
  }
}

export default Header;
