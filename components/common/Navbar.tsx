import React from "react";

import CustomLink from "./CustomLink";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <CustomLink className="navbar-brand" href="/" as="/">
          <span >SimpleBee</span>
        </CustomLink>
        <ul className="navbar-menu">
          <li className="nav-item">
            <NavLink href="/" as="/">
              <span>Home</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="/" as="/">
              <span>Honey</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="/" as="/">
              <span>About</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="/" as="/">
              <span>About</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;