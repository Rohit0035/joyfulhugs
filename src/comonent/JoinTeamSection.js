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
        <section className="join-team-section mt-5" data-aos="zoom-in">
            <Container>
                <div className="overlay-text">
                    <h1 className='heading-bold mb-0'>Join our team</h1>
                    <p className='fs-5 mt-0'>This is us for now !</p>
                </div>

                <div className="bottom-right">
                    <Link className="mt-2 fs-5 text-decoration-none text-black">join us
                        <span style={{
                            position: 'relative',
                            right: '40px'
                        }}>
                            <img src={Chand} alt='joyful' width={70}
                            />
                        </span>
                    </Link>
                </div>
            </Container>

        </section>
    );
};

export default JoinTeamSection;
