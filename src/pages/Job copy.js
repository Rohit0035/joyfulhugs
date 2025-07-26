import React, { useEffect, useState } from "react";
import Header from '../comonent/Header';
import Footer from '../comonent/Footer';
import "../assets/css/job.css";
import { Button, Col, Container, Form, Input, Label, Row } from 'reactstrap';
import Chand from '../assets/images/coms/ch-j.png';
import Chand2 from '../assets/images/coms/chand.png';
import AOS from "aos";
import "aos/dist/aos.css";

const Job = () => {
    const [currentPosition, setCurrentPosition] = useState(0); // Change this value to test

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    const isDisabled = currentPosition === 3;

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
                                <span>
                                    <img src={Chand} alt='joyful' className='ch-j' />
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='job-sec2'>
                <Container>
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
                        <h5 className="mb-4 text-end"><b>Current Position: {currentPosition}</b></h5>
                        <Form>
                            <Row>
                                <Col md='12' className='mb-3'>
                                    <Label className='int-lbl'>POSITION :</Label>
                                    <Input type="text" className='int-bg' disabled={isDisabled} />
                                </Col>
                                <Col md='12' className='mb-3'>
                                    <Label className='int-lbl'>NAME :</Label>
                                    <Input type="text" className='int-bg' disabled={isDisabled} />
                                </Col>
                                <Col md='12' className='mb-5'>
                                    <Label className='int-lbl'>EMAIL ID :</Label>
                                    <Input type="email" className='int-bg' disabled={isDisabled} />
                                </Col>
                                <Col md='12' className='mb-5'>
                                    <Label className='int-lbl'>When did you last change your mind about something important?</Label>
                                    <Input
                                        type="textarea"
                                        className='int-bg'
                                        style={{ height: '172px' }}
                                        disabled={isDisabled}
                                    />
                                </Col>
                                <Col md='12' className='mb-5'>
                                    <Label className='int-lbl'>What’s something unusual you’ve learned recently?</Label>
                                    <Input
                                        type="textarea"
                                        className='int-bg'
                                        style={{ height: '172px' }}
                                        disabled={isDisabled}
                                    />
                                </Col>
                                <Col md='12' className='mb-5'>
                                    <Label className='int-lbl'>Tell us about a time you worked on something you didn’t know how to do</Label>
                                    <Input
                                        type="textarea"
                                        className='int-bg'
                                        style={{ height: '172px' }}
                                        disabled={isDisabled}
                                    />
                                </Col>

                                <Col md='12' className='my-5'>
                                    <h1 className='job-head'>Prefer structure? Sure, we get it.</h1>
                                    <h1 className='job-head'>If you’d like to attach a CV, portfolio, or LinkedIn profile, you can.</h1>
                                    <h1 className='job-head'>But it won’t be the reason we reach out to you. Your voice will.</h1>
                                </Col>

                                <Col md='12' className='mb-5'>
                                    <Label className='int-lbl'>Upload file :</Label>
                                    <Input type="file" className='int-bg' disabled={isDisabled} />
                                </Col>
                                <Col md='12' className='mb-5'>
                                    <Label className='int-lbl'>Paste link :</Label>
                                    <Input type="link" className='int-bg' disabled={isDisabled} />
                                </Col>

                                <Col md='12' className='mb-5 text-end'>
                                    <Button className='btn-sub' disabled={isDisabled}>
                                        submit
                                        <img src={Chand2} alt='joyful' className='sbm-chand' />
                                    </Button>
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
