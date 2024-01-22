// src/components/ConsultationForm.js

import React, { useState, useEffect } from "react";
import "./ConsultationForm.css"; // Import your CSS file

const ConsultationForm = () => {
  const [doctorsData, setDoctorsData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    city: "",
    company: "",
    chiefComplaints: "",
    previousExperience: "dropdown",
  });

  // Add selectedDoctor state
  const [selectedDoctor, setSelectedDoctor] = useState({});

  useEffect(() => {
    // Fetch doctors data from the API (assuming you're using json-server)
    const apiUrl = `http://localhost:3000/doctors`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setDoctorsData(data));
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Filter doctors based on the user's entered city
    // Filter doctors based on the user's entered city (case-insensitive)
    const filteredDoctors = doctorsData.filter(
      (doctor) => doctor.city.toLowerCase() === formData.city.toLowerCase()
    );

    if (filteredDoctors.length > 0) {
      // Assuming the first doctor in the filtered list is the selected doctor
      const selectedDoctor = filteredDoctors[0];
      // Set the selectedDoctor in the state
      setSelectedDoctor(selectedDoctor);
      // Display a pop-up with the selected doctor's details
      // alert(
      //   `Your appointment is booked with ${selectedDoctor.name}, an expert in ${selectedDoctor.expertise} based in ${selectedDoctor.city}.`
      // );
      console.log(selectedDoctor.name);
    } else {
      alert("No available doctors found for the entered city.");
    }
  };

  const shouldShowPreviousExperience = parseInt(formData.age, 10) >= 40;

  return (
    <div className="container">
      <div className="form-container">
        <form id="contact" onSubmit={handleSubmit}>
          <h3>Book a Consultation</h3>
          <h4>See available doctor at your location </h4>
          <fieldset>
            <input
              placeholder="Your Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              placeholder="Your Phone Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Age"
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
            <input
              placeholder="Your City"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
            <input
              placeholder="Your Company"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              required
            />
          </fieldset>
          <fieldset>
            <textarea
              placeholder="Chief Complaints"
              name="chiefComplaints"
              value={formData.chiefComplaints}
              onChange={handleInputChange}
              required
            ></textarea>
          </fieldset>
          {shouldShowPreviousExperience && (
            <fieldset>
              <label>
                Any Previous Experience with Physiotherapy:
                <select
                  name="previousExperience"
                  value={formData.previousExperience}
                  onChange={handleInputChange}
                  required
                >
                  <option value="dropdown">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </label>
            </fieldset>
          )}
          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
      <div
        className="info-container"
        style={{ padding: "20px", textAlign: "center" }}
      >
        <div
          id="imggg"
          style={{
            maxWidth: "400px",
            height: "400px",
            marginBottom: "20px",
            margin: "auto",
            display: "block",
            border: "1px solid black",
          }}
        >
          {selectedDoctor.image_link && (
            <img
              src={selectedDoctor.image_link}
              alt="Imhhh"
              style={{
                height: "400px",
                marginBottom: "20px",
                margin: "auto",
                display: "block",
              }}
            />
          )}
        </div>

        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
          Name: {selectedDoctor.name}
        </p>
        <p style={{ fontSize: "16px" }}>
          Expertise: {selectedDoctor.expertise}
        </p>
        <p style={{ fontSize: "16px" }}>City: {selectedDoctor.city}</p>
      </div>
    </div>
  );
};

export default ConsultationForm;
