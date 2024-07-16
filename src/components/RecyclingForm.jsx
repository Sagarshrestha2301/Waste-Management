import React, { useState } from "react";
import "./RecyclingForm.css";

const RecyclingForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    mobileNo: "",
    alternateNo: "",
    type: "Donate",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="recycling-form">
      <h2>START RECYCLING TODAY</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Schedule Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              placeholder="Select Date"
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            >
              <option value="">Select Time</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="7:00 PM">7:00 PM</option>
              <option value="8:00 PM">8:00 PM</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="mobileNo">Mobile No:</label>
            <input
              type="tel"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              placeholder="Enter Mobile No."
            />
          </div>
          <div className="form-group">
            <label htmlFor="alternateNo">Alternate No:</label>
            <input
              type="tel"
              id="alternateNo"
              name="alternateNo"
              value={formData.alternateNo}
              onChange={handleChange}
              placeholder="Enter Alternate No."
            />
          </div>
        </div>
        <div className="form-group type-selection">
          <label>Type:</label>
          <div className="type-options">
            <label
              className={`type-option ${
                formData.type === "Donate" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="type"
                value="Donate"
                checked={formData.type === "Donate"}
                onChange={handleChange}
              />
              Donate
            </label>
            <label
              className={`type-option ${
                formData.type === "Sell" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="type"
                value="Sell"
                checked={formData.type === "Sell"}
                onChange={handleChange}
              />
              Sell
            </label>
            <label
              className={`type-option ${
                formData.type === "Sell and Donate" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="type"
                value="Sell and Donate"
                checked={formData.type === "Sell and Donate"}
                onChange={handleChange}
              />
              Sell and Donate
            </label>
          </div>
        </div>
        <button type="submit" className="submit-btn">
          Continue
        </button>
      </form>
      <p className="call-us">Or, CALL US</p>
      <a href="tel:9869079510" className="phone-number">
        9869079510
      </a>
    </div>
  );
};

export default RecyclingForm;
