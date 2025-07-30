import React, { useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Header from '../comonent/Header';
import Footer from '../comonent/Footer';
import AOS from "aos";
import "aos/dist/aos.css";

const ThankContact = ({ }) => {

   useEffect(() => {
      AOS.init({ duration: 1000, once: false });
   }, []);

   return (
      <>
         <Header />
         <section className='pt-120 pb-5'>
            <Container>
               <Row>
                  <Col md='12'>
                     <h1 className='heading-bold mt-3' data-aos="zoom-in">Thank you for reaching out.</h1>
                     <p className='mt-4' data-aos="zoom-in">
                        If we feel there’s a way we can truly help, we’ll get back to you within 7 days—with heart, not just a reply.
                     </p>
                     <h1 className='heading-bold mt-5' data-aos="zoom-in">
                        Until then, know that your words were seen, not just sent.
                     </h1>
                  </Col>
               </Row>
            </Container>
         </section>
         <Footer />
      </>
   );
};

export default ThankContact;
