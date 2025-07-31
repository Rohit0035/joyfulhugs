import React, { useEffect } from "react";
import { Container, Row, Col } from 'reactstrap';
import moon from "../assets/images/coms/chand.png"
import AOS from "aos";
import "aos/dist/aos.css";


const ComeSoon = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <section
            style={{
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                backgroundColor: '#EBECE8'
            }}
        >
            <Container>
                <Row className="justify-content-center">
                    <Col md="3"></Col>
                    <Col md="6">
                        <h1 className="heading-bold position-relative" data-aos="zoom-in">Coming Soon
                            <span className="position-relative">
                                <img src={moon} alt='joyful' className='soonarc' />
                            </span>
                        </h1>
                    </Col>
                    <Col md="3"></Col>
                </Row>
            </Container>
        </section>
    );
};

export default ComeSoon;
