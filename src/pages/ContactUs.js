import React, { useState, useEffect } from 'react';
import {
    Container, Row, Col, Card, CardBody, Button, Form, FormGroup, Input, Label, Spinner
} from 'reactstrap';
import '../assets/css/ContactUs.css';
import Header from '../comonent/Header';
import Footer from '../comonent/Footer';
import Chand2 from '../assets/images/coms/chand.png'
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import ChandImg from "../assets/images/coms/chand.png";
import axios from 'axios';
import { API_BASE_URL } from '../utils/api-config';

const ContactUs = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        // Prepare URL encoded form data
        const params = new URLSearchParams();
        params.append('user_name', formData.name);
        params.append('user_email', formData.email);
        params.append('message', formData.message);

        try {
            const response = await axios.post(
                `${API_BASE_URL}/submit-contact-us-form`,
                params.toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    }
                }
            );
            // console.log(response);
            if (response.data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => {
                    navigate('/thankyou-contact');
                }, 1000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error sending contact email:', error.response || error.message);
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header />
            <section className='sec-contact'>
                <Container>
                    <Row>
                        <Col md="12">
                            <h1 className='heading-bold' data-aos="fade-right">
                                If you’re quietly working on yourself we’d love to hear from you.
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="contact-section">
                <Container>
                    <Row className='st-cus-space1'>
                        <Col xs="12" sm="12" md="12" lg="4" className='mb-3'>
                            <p className='mb-0' data-aos="zoom-in">
                                <Link className='text-black text-decoration-none'>
                                    mayanksolanki@joyfulhugs.in
                                </Link>
                            </p>
                            <p className='mb-0' data-aos="zoom-in">
                                <Link className='text-black text-decoration-none'>
                                    uditbhattacharya@joyfulhugs.in
                                </Link>
                            </p>
                        </Col>
                        <Col md="4">
                        </Col>
                        <Col xs="12" sm="12" md="12" lg="4" className='mb-3' data-aos="zoom-in">
                            <p>
                                Dev X Binori B square 4th floor Sindhu<br /> Bhavan Road Ahmedabad 380059
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='bx-form-sec2'>
                <Container>
                    <Form className='' onSubmit={handleSubmit}>
                        <div className='contact-form'>
                            <Row>
                                <Col md="12">
                                    <Row>
                                        <Col md="12" className='mb-1'>
                                            <FormGroup>
                                                <Label for="name">Your Name</Label>
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
                                        <Col md="12" className='mb-1'>
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
                                                    style={{ height: '150px' }}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                        <Row>
                            <Col md="12" className='mb-1 text-end mt-4'>
                                <Button
                                    type="submit"
                                    className="btn-sub text-decoration-none me-0"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <Spinner size="sm" color="dark" />
                                    ) : (
                                        <>
                                            submit
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
                </Container>
            </section>

            <Footer />
        </>

    );
};

export default ContactUs;
