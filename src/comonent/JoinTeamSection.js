import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import '../assets/css/JoinTeamSection.css';
import { Link } from 'react-router-dom';
import Chand from '../assets/images/coms/chand.png'
import AOS from "aos";
import "aos/dist/aos.css";
const JoinTeamSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);
    return (
        <>
            <section className="join-team-section mt-5 d-none d-sm-block" >
                <Container>
                    <div className="overlay-text" data-aos="zoom-in">
                        <h1 className='heading-bold mb-0'>Join our team</h1>
                        <p className='fs-5 mt-0'>This is us for now !</p>
                    </div>

                    <div className="bottom-right-str">
                        <Link to="/contact" className="mt-2 fs-5 text-decoration-none text-black">know us
                            <span style={{
                                position: 'relative',
                            }}>
                                <img src={Chand} alt='joyful' className='btm-arc'
                                />
                            </span>
                        </Link>
                    </div>
                </Container>
            </section>
            <section className="join-team-section img-mobile d-block d-sm-none" data-aos="zoom-in">
                <Container>
                    <div className="bottom-right-str">
                        <Link to="/contact" className="mt-2 fs-5 text-decoration-none text-black pe-4">know us
                            <span style={{
                                position: 'relative',
                            }}>
                                <img src={Chand} alt='joyful' className='btm-arc'
                                />
                            </span>
                        </Link>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default JoinTeamSection;
