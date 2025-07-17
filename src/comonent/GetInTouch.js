import React, { useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import emailjs from "@emailjs/browser";

const GetInTouch = () => {
  const form = useRef();
  const navigate = useNavigate(); // Initialize useNavigate

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_u8yiqip", // Replace with your service ID
        "template_v2yuh6a", // Replace with your template ID
        form.current,
        "g30qabygJR60hNpFg" // Replace with your public key
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            // alert("Message sent successfully!");
            navigate("/thankyoutwo"); // Redirect to another page
            form.current.reset(); // Resets the form
          }
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="row">
        <div className="col-md-6 text-start mb-4">
          <label>First Name</label>
          <input type="text" name="user_first" className="form-control" />
        </div>
        <div className="col-md-6 text-start mb-4">
          <label>Last Name</label>
          <input type="text" name="user_last" className="form-control" />
        </div>
        <div className="col-md-6 text-start mb-4">
          <label>Email</label>
          <input type="email" name="user_email" className="form-control" />
        </div>
        <div className="col-md-6 text-start mb-4">
          <label>Phone</label>
          <input type="text" name="user_phone" className="form-control" />
        </div>
        <div className="col-md-12 text-start mb-4">
          <label>Date</label>
          <input
            type="date"
            name="user_date"
            className="form-control custom-date-input"
            style={{
              color: "white", // For the text color
              backgroundColor: "transparent", // For the input background
              border: "1px solid white", // Optional: for visible border
              padding: "5px",
            }}
          />
        </div>
        <div className="col-md-12 text-start mb-4">
          <label>Message</label>
          <textarea name="message" className="form-control" />
        </div>
        <div className="col-md-12">
          <button type="submit" value="Send" className="button-primary btn btn-secondary">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default GetInTouch;
