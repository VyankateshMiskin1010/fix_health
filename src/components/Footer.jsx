import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <main>
      <footer className="footer">
        <div className="fo-container">
          <div className="sec-abt">
            <h2>About Us</h2>
            <p>
              Founded in 1992, Shri Rukmini Vidyapith, Matoshri Ishwaramma
              Vidyalay, and Kanistha Mahavidyalay in Pandharpur are dedicated
              educational institutions with a common mission: to empower women
              through education
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
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Founder">Founder</Link>
              </li>
              <li>
                <Link to="/Donation">Get Involved</Link>
              </li>
              {/* <li>
                <Link to="/cards">Trusty Members</Link>
              </li> */}
              <li>
                <Link to="/Gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
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
                  <p>+91 8275202365</p>
                  <br />
                  <p>+91 9923454344</p>
                </a>
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <a href="mailto:rukminividyapeeth999@gmail.com">
                  <p>rukminividyapeeth999@gmail.com</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="sec-contact">
            <h2>Map Location</h2>
            <ul className="info">
              <li>
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60826.771138964985!2d75.27409461522502!3d17.665630700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc41817b54f9157%3A0xec170ac9cb42d433!2srukmini%20vidyalaya%20pandharpur!5e0!3m2!1sen!2sin!4v1699423992576!5m2!1sen!2sin"
                  width="245"
                  height="150"
                  style={{ border: "0" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </li>
            </ul>
          </div>
        </div>
        <div className="copy">
          <br />
          <p>
            © 2024 RnDs ERP Solution Pvt Ltd. All Rights Reserved.{" "}
            <a target="__blank" href="http://rndserp.com/">
              Visit Us
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
