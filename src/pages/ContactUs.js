import React from 'react';
import {
    Container, Row, Col, Card, CardBody, Button, Form, FormGroup, Input, Label
} from 'reactstrap';
import { FaPhoneAlt, FaComments, FaEnvelope, FaSearchLocation } from 'react-icons/fa';
import '../assets/css/ContactUs.css';
import Header from '../comonent/Header';
import Footer from '../comonent/Footer';
import contactimg from "../assets/images/coms/contact-sec.jpg"
import Chand2 from '../assets/images/coms/chand.png'
import { Link } from 'react-router-dom';


const ContactUs = () => {
    return (
        <>

            <Header />

            <section className='sec-contact'>
                <Container>
                    <Row>
                        <Col md="12">
                            <h1 className='heading-bold'>
                                Contact Us
                            </h1>
                        </Col>
                    </Row>
                </Container>

            </section>

            <section className="contact-section py-5">
                <Container>
                    {/* Top Cards */}
                    <Row className="mb-5 text-center">
                        <Col md="4" className='mb-2'>
                            <Card className="contact-card h-100 border-none">
                                <CardBody>
                                    <div className="icon-circle"><FaPhoneAlt size={24} /></div>
                                    <h6>Call Us</h6>
                                    <a href="tel:123123123" className="text-primary d-block mt-2 text-decoration-none text-dark">1-123123123</a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4" className='mb-2'>
                            <Card className="contact-card h-100 border-none">
                                <CardBody>
                                    <div className="icon-circle"><FaSearchLocation size={24} /></div>
                                    <h6>Address</h6>
                                    <p className="small mb-2">Lorem Lorem</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4" className='mb-2'>
                            <Card className="contact-card h-100 border-none">
                                <CardBody>
                                    <div className="icon-circle"><FaEnvelope size={24} /></div>
                                    <h6>Ask a Question</h6>
                                    <Link to="mailto:uditbhattacharya@joyfulhugs.in" className='text-decoration-none text-black'> <FaEnvelope className='me-1' color='#ffe100' />uditbhattacharya@joyfulhugs.in</Link>
                                    <br/>
                                    <Link to="mailto:mayanksolanki@joyfulhugs.in" className='text-decoration-none text-black'><FaEnvelope className='me-1 ' color='#ffe100' />mayanksolanki@joyfulhugs.in</Link>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    {/* Bottom Two-Column */}
                    <Row className="align-items-center">
                        <Col md="6" className='mb-3'>
                            <img
                                src={contactimg} // Replace with your actual image path
                                alt="Contact"
                                className="img-fluid rounded shadow"
                            />
                        </Col>
                        <Col md="6">
                            <Form>
                                <FormGroup>
                                    <Label for="name">Your Name</Label>
                                    <Input type="text" id="name" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" id="email" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="message">Message</Label>
                                    <Input type="textarea" id="message" rows="4" />
                                </FormGroup>
                                <Button className='btn-sub'>
                                    submit
                                    <img src={Chand2} alt='joyful' className='sbm-chand' />
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Footer />
        </>

    );
};

export default ContactUs;
