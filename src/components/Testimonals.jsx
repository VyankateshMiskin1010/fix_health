import React from "react";
import "./Testimonals.css";

export default function Testimonals() {
  return (
    <div id="Testimonalss">
      <div className="testimonals-Heading">
        <h1>Patient Recovery Stories</h1>
        <p>Don't just take our word for it</p>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            consectetur veritatis quis!
            <span className="testimonal-author">Mr. lorem</span>
          </p>
        </div>
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            deleniti nihil illum amet!
            <span className="testimonal-author">Mr. lorem</span>
          </p>
        </div>
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            quisquam ad explicabo in distinctio.
            <span className="testimonal-author">Mr. lorem</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
