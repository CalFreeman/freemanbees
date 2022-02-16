import React, { useState } from "react"

import CustomLink from "./CustomLink";
import NavLink from "./NavLink";
import Hamburger from "./Hamburger";

if (typeof window === 'object') {
  // Check if document is finally loaded
  const hamburger = document.querySelector('.hamburger');

  hamburger?.addEventListener('click', function(this: any) {
    this.classList.toggle('is-active')

  })
}

const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <CustomLink className="navbar-brand" href="/" as="/">
          <img className="navlogoimg" src="images/bee_logo.svg"/>
          <a className="brand-a" >freemanbees</a>
        </CustomLink>

        <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
        <Hamburger></Hamburger>

        <ul className={`navbar-menu ${navbarOpen ? " showMenu" : ""}`}>
          <li className="nav-item is-active">
            <NavLink href="/about" as="/about">
              <span>About</span>
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink href="/blog" as="/blog">
              <span>Blog</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="/bees" as="/bees">
              <span>Bees</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="/honey" as="/honey">
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
    </nav>
  );
};

export default Navbar;