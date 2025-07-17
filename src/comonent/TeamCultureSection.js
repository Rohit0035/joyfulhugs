import React, { useEffect } from "react";
import { Row, Col } from 'reactstrap';
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
        <section className="team-culture-section mt-5">
            <Row className="g-0 align-items-stretch h-100 team-culture-row">
                {/* Left Text Column */}
                <Col md="4" className="left-panel">
                    <div className="text-content text-center" data-aos="zoom-in">
                        <h1 className="mb-1 heading-bold ">Team &</h1>
                        <h1 className="mb-3 heading-bold">Culture</h1>
                        <img src={Chand} alt='juyful' className='mt-moon' />
                    </div>
                    <div className="know-us-link pe-5">
                        <Link to="/about" className="know-us text-decoration-none fs-5">know us</Link>
                    </div>
                </Col>

                {/* Image 1 */}
                <Col md="4" className="image-panel d-none d-md-block px-md-1">
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
    );
};

export default TeamCultureSection;
