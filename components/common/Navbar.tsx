import { BlockList } from "net";
import React from "react";

import CustomLink from "./CustomLink";
import NavLink from "./NavLink";

const hamburger = document.querySelector('.hamburger');

hamburger?.addEventListener('click', function(this: any) {
  this.classList.toggle('is-active')
})


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <CustomLink className="navbar-brand" href="/" as="/">
          <img className="navlogoimg" src="images/bee_logo.svg" style={{width: "75px", height: "75px", float: "left"}}/>
          <a className="brand-a" >freeman</a>

        </CustomLink>

        <ul className="navbar-menu">
          <li className="nav-item is-active">
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
        <button className="hamburger is-active">
        <span></span>
        <span></span>
        <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;