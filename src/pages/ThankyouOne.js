import React from 'react';
import Header from '../comonent/Header';
import Footer from '../comonent/Footer';
import { Col, Container, Row } from 'reactstrap';
import "../assets/css/Credo.css";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const ThankyouOne = () => {
    return (
        <>
            <Helmet>
                <title>Kickhead | Startup Growth Agency - From Ideas to Impact</title>
                <meta
                    name="description"
                    content="Kickhead is a startup-inspired agency that blends creativity, innovation, and strategy to scale startups from X to 10X. Your journey to impactful growth starts here."
                />
                <meta
                    name="keywords"
                    content="startup agency, business growth, creative strategy, innovation, X to 10X, Kickhead."
                />
            </Helmet>
            <Header />
            <section className='thankyou-section mt-100'>
                <Container fluid className='text-center'>
                    <Row>
                        <Col md="2">
                        </Col>
                        <Col md="8">
                            <div className='thankyou-content shadow pt-5 pb-5'>
                                <div className='thankyou-graphic'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="thankyou-icon"
                                        style={{ width: '150px', height: '150px' }}>
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9 12l2 2l4-4" />
                                    </svg>
                                </div>
                                <h1 className='thankyou-title'><b>Thank You!</b></h1>
                                <p className='thankyou-message fs-5'>
                                    Thank you for clicking here, aka kick! We'll be in <br/>touch soon to kick-start the magic together...
                                </p>
                                <Link to="/" className='button-primary btn btn-secondary'>Back To Home
                                </Link>
                            </div>
                        </Col>
                        <Col md="2">
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    );
};

export default ThankyouOne;
