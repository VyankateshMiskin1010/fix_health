import React from "react";
import "./Doctors.css";
import img1 from "./Images/handsome-smiling-medical-professional-examining-with-stethoscope-colored-background.jpg";
import img2 from "./Images/portrait-smiling-young-woman-doctor-healthcare-medical-worker-pointing-fingers-left-showing-clini.jpg";
import img3 from "./Images/smiling-doctor-with-strethoscope-isolated-grey.jpg";

function Doctors() {
  const doctorsData = [
    {
      image: img1,
      name: "Dr. Emily Smith",
      specialty: "Cardiologist",
    },
    {
      image: img2,
      name: "Dr. James Anderson",
      specialty: "Neurosurgeon",
    },
    {
      image: img3,
      name: "Dr. Michael Lee",
      specialty: "Dermatologist",
    },
  ];

  return (
    <div>
      <section className="section__container doctors__container">
        <div className="doctors__header">
          <div className="doctors__header__content">
            <h2 className="section__header">Our Special Doctors</h2>
            <p>
              We take pride in our exceptional team of doctors, each a
              specialist in their respective fields.
            </p>
          </div>
        </div>
        <div className="doctors__con">
          {doctorsData.map((doctor, index) => (
            <div key={index} className="doctors__card">
              <div className="doctors__card__image">
                <img src={doctor.image} alt={`doctor-${index}`} />
                <div className="doctors__socials">
                  <span>
                    <i className="ri-instagram-line"></i>
                  </span>
                  <span>
                    <i className="ri-facebook-fill"></i>
                  </span>
                  <span>
                    <i className="ri-heart-fill"></i>
                  </span>
                  <span>
                    <i className="ri-twitter-fill"></i>
                  </span>
                </div>
              </div>
              <h4>{doctor.name}</h4>
              <p>{doctor.specialty}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Doctors;
