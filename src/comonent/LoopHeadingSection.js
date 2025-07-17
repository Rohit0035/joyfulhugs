import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'reactstrap';
import TextTransition, { presets } from 'react-text-transition';
import '../assets/css/LoopHeadingSection.css';
import Chand from "../assets/images/coms/chand.png"
import Newpaper from "../assets/images/coms/newspaper.png"

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const words = ['powerful beginning', 'fresh chapter', 'new journey'];

const LoopHeadingSection = () => {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000); // change word every 3 seconds

        return () => clearInterval(intervalId);
    }, []);
    return (
        <>
            <section className="loop-heading-section pt-70 pb-70">
                <Container>
                    <Row>
                        <Col md="12" className="text-container">
                            <h1 className="heading-bold mb-0" data-aos="fade-up">
                                We believe adulthood is not a plateau – it’s a{' '}
                                <span className="typed-text">
                                    <TextTransition
                                        springConfig={presets.wobbly}
                                        direction="in"
                                        inline
                                    >
                                        {words[index]}
                                    </TextTransition>
                                </span>
                            </h1>
                            {/* <img src={Chand} alt='juyful'  className='mtyy' /> */}
                        </Col>
                    </Row>
                </Container>
            </section>
            <section data-aos="fade-up">
                <img src={Newpaper} alt="juyful" className="w-100" />
            </section>

            <section style={{ backgroundColor: '#E9E9E6' }}>
                <Container>
                    <Row>
                        <Col md="12" data-aos="zoom-in">
                            <div className="pb-5" data-aos="fade-up">
                                <h1 className="heading-bold2 mb-0">
                                    ADULTGARTEN
                                </h1>
                                <h1 className="heading-bold2">
                                    Philosophy
                                </h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-5" style={{ backgroundColor: '#E9E9E6' }}>
                <Container>
                    <Row>
                        <Col md="7" data-aos="zoom-in">
                            <div className="pb-5 mb-2">
                                <p className="mt-0 mb-0 ">For the 25 year old finding their voice</p>
                                <p className="mt-0 mb-0 ">For the 40 year old rewriting their story</p>
                                <p className="mt-0 mb-0 ">For every adult brave enough to begin again</p>
                                <p className="mt-4 mb-0 ">Because when adults evolve – societies shift, culture heal, future open</p>
                                <p className="mt-4 mb-0 ">This is adultgarten</p>
                            </div>
                        </Col>
                        <Col md="5">
                            <div data-aos="zoom-in" className="d-flex flex-column justify-content-end align-items-end pb-5 mt-2" style={{ height: '100%' }}>
                                <Link className="mt-2 fs-5 text-decoration-none text-black">know more
                                    <span style={{
                                        position: 'relative',
                                        right: '40px'
                                    }}>
                                        <img src={Chand} alt='joyful' width={70}
                                        />
                                    </span>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default LoopHeadingSection;
