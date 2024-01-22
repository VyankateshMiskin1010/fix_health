// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header>
      <nav
        className={`section__container nav__container ${
          isMenuOpen ? "open" : ""
        }`}
      >
        <div className="nav__logo">
          Health<span>Care</span>
        </div>
        <div
          className={`menu-btn ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className="nav__links">
          <li className="link">
            <Link to="/home" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="link">
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li className="link">
            <Link to="/services" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li className="link">
            <Link to="/pages" onClick={() => setIsMenuOpen(false)}>
              Pages
            </Link>
          </li>
          <li className="link">
            <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mobile-nav">
        <ul className={`mob__links ${isMenuOpen ? "show" : ""}`}>
          <li className="link">
            <Link to="/home" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="link">
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li className="link">
            <Link to="/services" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li className="link">
            <Link to="/pages" onClick={() => setIsMenuOpen(false)}>
              Pages
            </Link>
          </li>
          <li className="link">
            <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
          </li>
        </ul>
      </div>

      <div className="section__container header__container">
        <div className="header__content">
          {/* <p className="believe">BELIEVE</p> */}

          <h1>Empowering Movement, Restoring Wellness</h1>

          <p>
            Embark on a Journey of Healing and Strength with Our Dedicated Team
            of 60+ Expert Physiotherapists, Addressing 200+ Conditions for Your
            Optimal Wellbeing
          </p>
          <button className="btn">See Services</button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
