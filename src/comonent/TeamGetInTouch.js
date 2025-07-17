import React, { useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import emailjs from "@emailjs/browser";
i
const TeamGetInTouch = () => {
    const form = useRef();
    const navigate = useNavigate(); // Initialize useNavigate



    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_u8yiqip", 
                "template_76l7j0b", 
                form.current,
                "g30qabygJR60hNpFg" 
            )
            .then(
                (result) => {
                    if (result.text === "OK") {
                        navigate("/thankyou");
                        form.current.reset(); 
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
                <div className="col-md-6 text-start mb-4 mt-4">
                    <label>First Name</label>
                    <input type="text" name="cus_firstname" className="form-control" required />
                </div>
                <div className="col-md-6 text-start mb-4 mt-4">
                    <label>Last Name</label>
                    <input type="text" name="cus_lastname" className="form-control" required />
                </div>
                <div className="col-md-6 text-start mb-4">
                    <label>Email</label>
                    <input type="email" name="cus_email" className="form-control" required />
                </div>
                <div className="col-md-6 text-start mb-4">
                    <label>Phone</label>
                    <input type="text" name="cus_phone" className="form-control" required />
                </div>
                <div className="col-md-12 text-start mb-4">
                    <label>Kickhead Path</label>
                    <select className="form-control" name="kickhead_path" required>
                        <option value="" disabled selected>---Select---</option>
                        <option value="Copywriting">Copywriting</option>
                        <option value="Art / Design / Graphic">Art / Design / Graphic</option>
                        <option value="Digital">Digital</option>
                        <option value="Tech">Tech</option>
                        <option value="Strategy">Strategy</option>
                        <option value="Behavior study">Behavior study</option>
                        <option value="Social">Social</option>
                    </select>
                </div>
                <div className="col-md-12 text-start mb-4">
                    <label>What’s your superpower that makes you powerful, authentic, and unique?</label>
                    <textarea name="super_power" className="form-control" required />
                </div>
                <div className="col-md-12 text-start mb-4">
                    <label>What message do you have for the underdogs?</label>
                    <textarea name="underdogs" className="form-control" required />
                </div>
                <div className="col-md-12 text-start mb-4">
                    <label><b>How do you like to work with others?</b> Smooth operator, hustler, fast & furious, lone ranger, collaborator …</label>
                    <textarea name="collaborator" className="form-control" required />
                </div>
                <div className="col-md-12 text-start mb-4">
                    <label><i><b>Tell us something interesting about you:</b> your favorite bands, food, books, magazines, comedians, shows, or movies.  </i></label>
                    <textarea name="movies" className="form-control" required />
                </div>
                <div className="col-md-12 text-start mb-4">
                    <label><i><b>What is your kick in life?</b> Drive, Dream, Destiny…</i></label>
                    <textarea name="destiny" className="form-control" required />
                </div>
                <div className="col-md-12">
                    <button type="submit" value="Send" className="button-primary btn btn-secondary">
                        Send Message
                    </button>
                </div>
            </div>
        </form>
    );
};

export default TeamGetInTouch;
