import React, { useEffect } from "react";
import { Row, Col, Container } from 'reactstrap';
import '../assets/css/TeamCultureSection.css';
import TeamCul1 from "../assets/images/coms/teamcul-1.png";
import TeamCul2 from "../assets/images/coms/teamcul-2.png";
import { Link } from 'react-router-dom';
import Chand from "../assets/images/coms/chand.png";
import AOS from "aos";
import "aos/dist/aos.css";
const TeamCultureSection = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);
    return (
        <>
            <section className="pt-70 pb-70 spc-mb">
                <Container>
                    <Row>
                        <Col md='5'>
                            <h1 className="heading-bold">
                                We are grown
                                up dreamers.
                            </h1>
                        </Col>
                        <Col md='7'>
                            <p className="mt-3  mb-0">
                                We build brands that challenge, uplift, and awaken because the world doesn’t change when people know more – it change when they start living what they believe.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="team-culture-section d-none d-sm-block ">
                <Row className="g-0 align-items-stretch h-100 team-culture-row">
                    {/* Left Text Column */}
                    <Col md="4" className="left-panel">
                        <div className="text-content text-center" data-aos="zoom-in">
                            <h1 className="mb-1 heading-bold" style={{ fontWeight: '300' }}>Team &</h1>
                            <h1 className="mb-3 heading-bold" style={{ fontWeight: '300' }}>Culture</h1>
                            <img src={Chand} alt='juyful' className='mt-moon' />
                        </div>
                        <div className="know-us-link pe-2 pb-4">
                            <Link to="/team-culture" className="mt-2 fs-5 text-decoration-none text-black me-4">know us
                                <span style={{
                                    position: 'relative',
                                }}>
                                    <img src={Chand} alt='joyful' className="btm-arc"
                                    />
                                </span>
                            </Link>
                        </div>

                    </Col>

                    {/* Image 1 */}
                    <Col md="4" className="image-panel d-md-block px-md-1  mb-1 mb-md-0">
                        <img
                            src={TeamCul1}
                            alt="Team Member 1"
                            className="img-fluid"
                            data-aos="zoom-in"
                        />
                    </Col>

                    {/* Image 2 */}
                    <Col md="4" className="image-panel">
                        <img
                            src={TeamCul2}
                            alt="Team Member 2"
                            className="img-fluid"
                            data-aos="zoom-in"
                        />
                    </Col>
                </Row>
            </section>
        </>

    );
};

export default TeamCultureSection;
