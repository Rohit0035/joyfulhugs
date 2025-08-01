import React, { useEffect } from "react";
import Header from '../comonent/Header';
import Footer from '../comonent/Footer';
import "../assets/css/job.css";
import { Button, Col, Container, Form, Input, Label, Row, Card, CardBody } from 'reactstrap';
import Chand from '../assets/images/coms/ch-j.png'
import Chand2 from '../assets/images/coms/chand.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Job = ({ positions, deletePosition }) => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);
    return (
        <>
            <Header />
            <section className='job-sec'>
                <Container>
                    <Row>
                        <Col md="12">
                            <div className='position-relative' data-aos="zoom-in">
                                <h1 className='heading-bold'>
                                    Don't Just Apply <br />
                                    Respond.

                                </h1>
                                <span className="position-relative">
                                    <img src={Chand} alt='joyful' className='ch-j' />
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='job-sec2'>
                <Container>
                    {/* <Row>
                        <Col md="12">
                            <h4>Job Positions</h4>
                            {positions.length === 0 ? (
                                <p>No positions added yet.</p>
                            ) : (
                                positions.map((pos, index) => (
                                    <Card key={index} className="mb-3">
                                        <CardBody>
                                            <strong>Position No:</strong> {pos}
                                        </CardBody>
                                    </Card>
                                ))
                            )}
                        </Col>
                    </Row> */}
                    <Row>
                        <Col md="12">
                            <p className='mt-0 mb-0' data-aos="zoom-in">
                                We’re not looking for perfect profiles.
                            </p>
                            <p className='mt-0 mb-0' data-aos="zoom-in">
                                We’re looking for thinkers who care.
                            </p>
                        </Col>

                        <Col md="12">
                            <p className='mt-5 mb-0' data-aos="zoom-in">
                                If you’re the kind of person who sees learning as a lifelong habit, who doesn’t wait to be told what to do, and who enjoys being a beginner again and again — we want to hear from you. Not in a resume. In your own words.
                            </p>
                        </Col>
                    </Row>
                    <div className='mt-5 job-form' data-aos="zoom-in">
                        <Form>
                            <Row>
                                <Col md='12' className='mb-3'>
                                    <Label className='int-lbl'>POSITION :</Label>
                                    <Input type="text" className='int-bg' />
                                </Col>
                                <Col md='12' className='mb-3'>
                                    <Label className='int-lbl'>NAME :</Label>
                                    <Input type="text" className='int-bg' />
                                </Col>
                                <Col md='12' className='mb-5'>
                                    <Label className='int-lbl'>EMAIL ID :</Label>
                                    <Input type="email" className='int-bg' />
                                </Col>
                                <Col md='12' className='mb-5'>
                                    <Label className='int-lbl'>When did you last change your mind about something important? :</Label>
                                    <Input
                                        id="1"
                                        name="text"
                                        type="textarea"
                                        className='int-bg'
                                        style={{ height: '172px' }}
                                    />
                                </Col>
                                <Col md='12' className='mb-5'>
                                    <Label className='int-lbl'>What’s something unusual you’ve learned recently?</Label>
                                    <Input
                                        id="1"
                                        name="text"
                                        type="textarea"
                                        className='int-bg'
                                        style={{ height: '172px' }}
                                    />
                                </Col>
                                <Col md='12' className='mb-5'>
                                    <Label className='int-lbl'>Tell us about a time you worked on something you didn’t know how to do it</Label>
                                    <Input
                                        id="1"
                                        name="text"
                                        type="textarea"
                                        className='int-bg'
                                        style={{ height: '172px' }}
                                    />
                                </Col>
                                <br />
                                <br />
                                <Col md='12' className='my-5'>
                                    <h1 className='job-head'>Prefer structure? Sure, we get it.</h1>
                                    <h1 className='job-head'>If you’d like to attach a CV, portfolio, or LinkedIn profile, you can.</h1>
                                    <h1 className='job-head'>But it won’t be the reason we reach out to you. Your voice will.</h1>
                                </Col>
                                <Col md='12' className='mb-5'>
                                    <Label className='int-lbl'>Upload file :</Label>
                                    <Input type="file" className='int-bg' />
                                </Col>
                                <Col md='12' className='mb-5'>
                                    <Label className='int-lbl'>Paste link :</Label>
                                    <Input type="link" className='int-bg' />
                                </Col>
                                <Col md='12' className='mb-5 text-end'>
                                    <Link to="/thankyou" className='btn-sub text-decoration-none' >
                                        submit
                                        <img src={Chand2} alt='joyful' className='sbm-chand' />
                                        {/* <span>
                                            <img src={Chand2} alt='joyful' className='sbm-chand' />
                                        </span> */}
                                    </Link>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    );
};

export default Job;
