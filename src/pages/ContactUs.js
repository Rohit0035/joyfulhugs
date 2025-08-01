import React, { useEffect } from 'react';
import {
    Container, Row, Col, Card, CardBody, Button, Form, FormGroup, Input, Label
} from 'reactstrap';
import '../assets/css/ContactUs.css';
import Header from '../comonent/Header';
import Footer from '../comonent/Footer';
import Chand2 from '../assets/images/coms/chand.png'
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {

       useEffect(() => {
            AOS.init({ duration: 1000, once: false });
        }, []);
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
                        <Col  xs="12" sm="12" md="12" lg="4"  className='mb-3' data-aos="zoom-in">
                            <p>
                                Dev X Binori B square 4th floor Sindhu<br /> Bhavan Road Ahmedabad 380059
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='bx-form-sec2'>
                <Container>
                    <Row>
                        <Col md="12">
                            <Form>
                                <div className='contact-form'>
                                    <Row>
                                        <Col md="12" className='mb-3'>
                                           <Label>Your Name</Label>
                                           <Input type="text" />
                                        </Col>
                                       <Col md="12" className='mb-3'>
                                           <Label>Email</Label>
                                           <Input type="email" />
                                        </Col>
                                       <Col md="12" className='mb-3'>
                                           <Label>Message</Label>
                                           <Input type="textarea"  style={{height:'150px'}} />
                                        </Col>
                                    </Row>
                                </div>
                            </Form>
                            <Col md="12">
                               <div className='text-end mt-4'>
                                <Link to="/thankyou-contact" className='btn-sub text-decoration-none'>
                                        submit
                                          <img src={Chand2} alt='joyful' className='sbm-chand' />
                                        {/* <span>
                                            <img src={Chand2} alt='joyful' className='sbm-chand' />
                                        </span> */}
                                    </Link>
                               </div>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Footer />
        </>

    );
};

export default ContactUs;
