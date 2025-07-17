import React, { useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import '../assets/css/ContactUsSection.css';
import { Link } from 'react-router-dom';
import ChandImg from "../assets/images/coms/chand.png"
import AOS from "aos";
import "aos/dist/aos.css";
const ContactUsSection = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);
    return (
        <section className="contact-us-section py-5">
            <Container>
                <Row>
                    {/* Left: Contact Info */}
                    <Col md="8" className="mb-4 mb-md-0">
                        <h1 className="heading-bold">Contact Us </h1>
                        <p className="mt-3 mb-3">
                            Dev X Binori B square 4th floor Sindhu Bhavan Road Ahmedabad 380059
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

                        {/* <div className="contact-info">
                            <p><FaEnvelope className="icon" /> mayanksolanki@joyfulhugs.in</p>
                            <p><FaEnvelope className="icon" /> uditbhattacharya@joyfulhugs.in</p>

                            <p><FaPhoneAlt className="icon" /> +91 xxxxx xxxx</p>
                            <p><FaMapMarkerAlt className="icon" /> Dev X Binori B square 4th floor Sindhu Bhavan Road Ahmedabad 380059
                            </p>
                        </div> */}
                    </Col>

                    {/* Right: Contact Form */}
                    <Col md="4">
                        <Form>
                            <Row>
                                <Col md="6">
                                    <FormGroup>
                                        <Label for="name">Name</Label>
                                        <Input type="text" id="name" placeholder="Your name" />
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input type="email" id="email" placeholder="Your email" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="message">Message</Label>
                                <Input type="textarea" id="message" rows="2" placeholder="Your message..." />
                            </FormGroup>
                            <Link className="mt-2 fs-5 text-decoration-none text-black">join us
                                <span style={{
                                    position: 'relative',
                                    right: '40px'
                                }}>
                                    <img src={ChandImg} alt='joyful' width={70}
                                    />
                                </span>
                            </Link>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactUsSection;
