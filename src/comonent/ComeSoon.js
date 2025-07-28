import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import moon from "../assets/images/coms/chand.png"

const ComeSoon = () => {
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
                    <Col md="4"></Col>
                    <Col md="4">
                        <h1 className="heading-bold position-relative">Coming Soon
                            <span>
                                <img src={moon} alt='joyful' className='soonarc' />
                            </span>
                        </h1>
                    </Col>
                     <Col md="4"></Col>
                </Row>
            </Container>
        </section>
    );
};

export default ComeSoon;
