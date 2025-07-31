import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import '../assets/css/ContactUsSection.css';
import { Link } from 'react-router-dom';
import ChandImg from "../assets/images/coms/chand.png";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from 'emailjs-com'; // Import emailjs

const ContactUsSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState(null);  // To show success or failure message

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message
        };

        // Send to first email address
        emailjs.send('your_service_id', 'your_template_id', templateParams, 'your_user_id')
            .then((response) => {
                console.log('Email sent successfully:', response);
                setStatus('success');
            })
            .catch((error) => {
                console.log('Failed to send email:', error);
                setStatus('error');
            });

        // Send to second email address manually
        templateParams.to_email = "uditbhattacharya@joyfulhugs.in";  // Second email
        emailjs.send('your_service_id', 'your_template_id', templateParams, 'your_user_id')
            .then((response) => {
                console.log('Email sent successfully to second address:', response);
            })
            .catch((error) => {
                console.log('Failed to send email to second address:', error);
            });
    };

    return (
        <section className="contact-us-section py-5">
            <Container>
                <Row>
                    {/* Left: Contact Info */}
                    <Col md="8" className="mb-4 mb-md-0">
                        <h1 className="heading-bold">Contact Us </h1>
                        <p className="mt-3 mb-3">
                            Dev X Binori B square 4th floor Sindhu Bhavan Road Ahmedabad 380059
                        </p>
                        <p className="mt-0 mb-0">
                            <Link to="mailto:mayanksolanki@joyfulhugs.in" className='text-black text-decoration-none'>
                                mayanksolanki@joyfulhugs.in
                            </Link>
                        </p>

                        <p className="mt-0 mb-0">
                            <Link to="mailto:uditbhattacharya@joyfulhugs.in" className='text-black text-decoration-none'>
                                uditbhattacharya@joyfulhugs.in
                            </Link>
                        </p>
                    </Col>

                    {/* Right: Contact Form */}
                    <Col md="4">
                        <Form className='shadow-sm p-3' onSubmit={handleSubmit}>
                            <Row>
                                <Col md="6" className='mb-1'>
                                    <FormGroup>
                                        <Label for="name">Name</Label>
                                        <Input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Your name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="6" className='mb-1'>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Your email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="12" className='mb-1'>
                                    <FormGroup>
                                        <Label for="message">Message</Label>
                                        <Input
                                            type="textarea"
                                            id="message"
                                            name="message"
                                            rows="2"
                                            placeholder="Your message..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="12" className='mb-1 text-end'>
                                    <Button type="submit" className="mt-2 fs-5 text-black pe-3">
                                        Send us
                                        <span style={{ position: 'relative' }}>
                                            <img src={ChandImg} alt='joyful' className='btm-arc' />
                                        </span>
                                    </Button>
                                    {status === 'success' && <p className="text-success mt-3">Message sent successfully!</p>}
                                    {status === 'error' && <p className="text-danger mt-3">Failed to send message. Please try again.</p>}
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactUsSection;
