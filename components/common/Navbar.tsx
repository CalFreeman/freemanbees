import React from "react";

import CustomLink from "./CustomLink";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <CustomLink className="navbar-brand" href="/" as="/">
          <span >SimpleBeee</span>
        </CustomLink>
        <ul className="navbar-menu">
          <li className="nav-item">
            <NavLink href="/" as="/">
              <span>About</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="/" as="/">
              <span>Blog</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="/" as="/">
              <span>Bees</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="/" as="/">
              <span>Honey</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="/" as="/">
              <span>Home</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <button className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;