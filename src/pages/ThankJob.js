import React, { useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Header from '../comonent/Header';
import Footer from '../comonent/Footer';
import AOS from "aos";
import "aos/dist/aos.css";

const ThankJob = ({  }) => {
   useEffect(() => {
        AOS.init({ duration: 1000, once: false });
     }, []);
  return (
   <>
     <Header/>
     <section className='pt-120 pb-5'>
        <Container>
            <Row>
                <Col md='12'>
                   <h1 className='heading-bold mt-3' data-aos="zoom-in">Thank you for applying !</h1>

                   <h1 className='heading-bold mt-5' data-aos="zoom-in">
                       We’ve received your application and truly appreciate your interest in joining our world
                   </h1>

                   <p className='mt-4'>
                    If your profile feels like a match, we’ll reach out to you within 7 days. And if you don’t hear from us by then don’t let that dim your light. Sometimes great people and great timing just miss each other by a breath.
                   </p>

                   <h1 className='heading-bold mt-5'>
                      Stay curious. Stay bold.
                   </h1>

                </Col>
            </Row>
        </Container>
     </section>
    <Footer/>
   </>
  );
};

export default ThankJob;
