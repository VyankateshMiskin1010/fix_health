// Navbar.js
import React, { useState } from "react";
import { Link } from "react-scroll";

import "./Hero.css";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header id="home">
      <nav
        className={`section__container nav__container ${
          isMenuOpen ? "open" : ""
        }`}
      >
        <div className="nav__logo">
          Fix<span>Health</span>
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
            <Link to="home" smooth={true}>
              Home
            </Link>
          </li>
          <li className="link">
            <Link to="consultationForm" smooth={true}>
              Consultation Form
            </Link>
          </li>
          <li className="link">
            <Link to="doctors" smooth={true}>
              Our Doctors
            </Link>
          </li>
          <li className="link">
            <Link to="Testimonalss" smooth={true}>
              Testimonials
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mobile-nav">
        <ul className={`mob__links ${isMenuOpen ? "show" : ""}`}>
          <li className="link">
            <Link to="home" smooth={true}>
              Home
            </Link>
          </li>
          <li className="link">
            <Link to="consultationForm" smooth={true}>
              Consultation Form
            </Link>
          </li>
          <li className="link">
            <Link to="doctors" smooth={true}>
              Our Doctors
            </Link>
          </li>
          <li className="link">
            <Link to="testimonials" smooth={true}>
              Testimonials
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
