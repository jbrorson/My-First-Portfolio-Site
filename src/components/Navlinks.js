import React from "react";
import { Link } from "react-router-dom";

let Navlinks = props => {
  let tempTabIndex;
  if (props.isMobileLink) {
    tempTabIndex = "-1";
  }

  return (
    <ul className="nav-links">
      <Link to="/" className="link" tabIndex={tempTabIndex}>
        <li>Home</li>
      </Link>

      <Link to="/about" className="link" tabIndex={tempTabIndex}>
        <li>About</li>
      </Link>

      <Link to="/contact" className="link" tabIndex={tempTabIndex}>
        <li>Contact</li>
      </Link>

      <Link to="/weather" className="link" tabIndex={tempTabIndex}>
        <li>Search weather</li>
      </Link>
    </ul>
  );
};

export default Navlinks;
