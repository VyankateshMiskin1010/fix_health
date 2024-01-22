import React from "react";
import "./Testimonals.css";

export default function Testimonals() {
  return (
    <div>
      <div className="testimonals-Heading">
        <h1>Patient Recovery Stories</h1>
        <>Don't just take our word for it</>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            Enrolling our daughter at Shri Rukmini Vidya Peeth was a wise
            choice, fostering both academic excellence and social awareness.
            <span className="testimonal-author">Mr. Jadhav</span>
          </p>
        </div>
        <div className="testimonial">
          <p>
            A blessing for our family, Shri Rukmini Vidya Peeth addresses
            logistical challenges, making education accessible and impactful.
            <span className="testimonal-author">Mr. Sharma</span>
          </p>
        </div>
        <div className="testimonial">
          <p>
            Shri Rukmini Vidya Peeth's focus on practical training and values is
            shaping my child into a socially responsible individual
            <span className="testimonal-author">Mr. Patil</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
