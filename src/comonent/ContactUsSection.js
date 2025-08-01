import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Spinner } from 'reactstrap';
import ChandImg from "../assets/images/coms/chand.png";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from 'emailjs-com';
import '../assets/css/ContactUsSection.css';
import { useNavigate } from 'react-router-dom';

const ContactUsSection = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false); // loader state

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setLoading(true); // start loader

    //     const templateParams = {
    //         name: formData.name,
    //         email: formData.email,
    //         message: formData.message
    //     };

    //     emailjs.send('service_wwvospw', 'template_l4igkoh', templateParams, 'pCvCzDycsADCQ9ryA')
    //         .then((response) => {
    //             console.log('Email sent successfully:', response);
    //             setStatus('success');
    //             setFormData({ name: '', email: '', message: '' });
    //             setTimeout(() => {
    //                 navigate('/thankyou-contact'); // 🔁 redirect after success
    //             }, 1000);
    //         })
    //         .catch((error) => {
    //             console.log('Failed to send email:', error);
    //             setStatus('error');
    //         })
    //         .finally(() => {
    //             setLoading(false); // stop loader
    //         });
    //     };

    return (
        <section className="contact-us-section py-5">
            <Container>
                <Row>
                    <Col md="8" className="mb-4 mb-md-0">
                        <h1 className="heading-bold">Contact Us</h1>
                        <p className="mt-3 mb-3">
                            Dev X Binori B square 4th floor Sindhu Bhavan Road Ahmedabad 380059
                        </p>
                        <p className="mt-0 mb-0">
                            <a href="mailto:mayanksolanki@joyfulhugs.in" className='text-black text-decoration-none'>
                                mayanksolanki@joyfulhugs.in
                            </a>
                        </p>
                        <p className="mt-0 mb-0">
                            <a href="mailto:uditbhattacharya@joyfulhugs.in" className='text-black text-decoration-none'>
                                uditbhattacharya@joyfulhugs.in
                            </a>
                        </p>
                    </Col>

                    <Col md="4">
                        <Form className='shadow-sm p-3' 
                        // onSubmit={handleSubmit}
                        >
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
                                    <Button
                                        type="submit"
                                        className="btn-sub text-decoration-none me-0"
                                        disabled={loading} // Disable when loading
                                    >
                                        {loading ? (
                                            <Spinner size="sm" color="dark" />
                                        ) : (
                                            <>
                                                send us
                                                <span style={{ position: 'relative' }}>
                                                    <img src={ChandImg} alt='joyful' className='btm-arc' />
                                                </span>
                                            </>
                                        )}
                                    </Button>

                                    {/* {status === 'success' && (
                                        <p className="text-success mt-3">Message sent successfully!</p>
                                    )}
                                    {status === 'error' && (
                                        <p className="text-danger mt-3">Failed to send message. Please try again.</p>
                                    )} */}
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
