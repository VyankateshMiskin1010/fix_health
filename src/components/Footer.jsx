import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <main>
      <footer className="footer">
        <div className="fo-container">
          <div className="sec-abt">
            <div className="nav__logo">
              Fix<span>Health</span>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque eum laborum recusandae pariatur! Et, dolores!
            </p>
            <ul className="sec-soc-links">
              <li>
                <a href="/" className="whatsapp">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <a href="/" className="youtube">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="/" className="instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="/" className="facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="sec-quicklinks">
            <h2>Support</h2>
            <ul>
              <li className="link">
                <Link to="home">Home</Link>
              </li>
              <li className="link">
                <Link to="/consultationForm">Consultation Form</Link>
              </li>
              <li className="link">
                <Link to="doctors">Our Doctors</Link>
              </li>
              <li className="link">
                <Link to="Testimonalss">Testimonials</Link>
              </li>
            </ul>
          </div>
          <div className="sec-contact">
            <h2>Contact Us</h2>
            <ul className="info">
              <li>
                <span>
                  <i className="fa-solid fa-phone"></i>
                </span>
                <a href="/">
                  <p>+91 1234567899</p>
                  <br />
                  <p>+91 9876543211</p>
                </a>
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <p>testing@gmail.com</p>
              </li>
            </ul>
          </div>
          <div className="sec-contact">
            <h2>Map Location</h2>
          </div>
        </div>
        <div className="copy">
          <br />
        </div>
      </footer>
    </main>
  );
}
