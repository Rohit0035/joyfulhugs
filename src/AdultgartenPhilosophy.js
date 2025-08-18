import React, { useEffect } from "react";
import Header from './comonent/Header';
import Footer from './comonent/Footer';
import { Col, Container, Row } from 'reactstrap';
import SquareImg from "./assets/images/coms/square.png"
import BannerImgGirl from "./assets/images/coms/phlo-bge-n.jpg"
import Chand from "./assets/images/coms/chand.png"
import "./assets/css/Philosophy.css"
import AOS from "aos";
import "aos/dist/aos.css";

const AdultgartenPhilosophy = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);
    return (
        <>
            <Header />

            <section className='pt-120 pb-70'>
                <Container>
                    <Row>
                        <Col md='12' data-aos="zoom-in">
                            <h1 className='heading-bold'>
                                Adultgarten Philosophy
                            </h1>
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col md="3">
                            <div className='' data-aos="zoom-in">
                                <img src={SquareImg} alt='joyful' className='w-100' />
                                <h4 className='mb-0 mt-3'><strong>MAYANK  SOLANKI</strong></h4>
                                <h4 className='mt-0 mb-0 fw-light' >FOUNDER </h4>
                            </div>
                        </Col>
                        <Col md="9">
                            <div className='pt-st' data-aos="zoom-in">
                                <p className="mb-0">
                                    “At Joyful Hugs, we see every adult as a living manuscript never final, always unfolding. 
                                </p>
                                <p>
                                    In a world that often prizes certainty and completion, we honour the quiet strength it takes to remain a work in progress. That’s why we formed the Adultgarten Philosophy”
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>

            <section className='pt-70' style={{ backgroundColor: '#edeee9' }}>
                <Container>
                    <Row>
                        <Col xs="12" sm="12" md="12" lg="5">
                            <div className='mb-3' data-aos="zoom-in">
                                <h1 className='heading-bold3'>CURIOSITY</h1>
                                <h1 className='heading-bold3'>EDUCATE </h1>
                                <h1 className='heading-bold3'>EVOLVE </h1>
                            </div>
                        </Col>
                        <Col  xs="12" sm="12" md="12" lg="7">
                            <div className='text-start mb-70 mob-spc-bt' data-aos="zoom-in">
                                <p className='mt-3 mb-4'>
                                    We believe adults seek more than answers they seek meaning.
                                </p>
                                <p className='mt-0 mb-4'>
                                    Learning here is hands on, reflective, and personal.
                                </p>
                                <p className='mt-0 mb-4'>
                                    We grow by exploring, building, and questioning not to escape life, but to engage with it more deeply.
                                </p>
                                <p className='mt-0 mb-4'>
                                    Evolution is not about becoming better, but becoming more ourselves.
                                </p>
                                <p className='mt-0 mb-4'>
                                    And curiosity? It’s the quiet force that keeps us open to change.
                                    <span className="d-none">
                                        <img src={Chand} alt='joyful' width='150px' className='arc-st' />
                                    </span>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section style={{marginTop:'-30px'}}>
                <img src={BannerImgGirl} alt='joyful' className='w-100' />
            </section>

            <Footer />
        </>
    );
};

export default AdultgartenPhilosophy;
