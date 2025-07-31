import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../assets/css/Footer.css';
import Logo from "../assets/images/coms/logo.png"
import { FaEnvelope } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-links mb-4 py-5">
          <Col md="2" sm="12" xs="12" className='mb-3'>
            <img src={Logo} alt='juyful' width='150px' />
          </Col>
          {/* <Col md="2" sm="6" xs="6">
            <h6>BRANDS</h6>
            <Link to="/brands-coming-soon">Coming Soon</Link>
            <Link to="/brands">Brands</Link>
          </Col> */}
          <Col md="2" sm="6" xs="6" className='mb-3'>
            <h6>TEAM</h6>
            <a href="/team-culture">Founder</a>
            <a href="/contact">Join Us</a>
          </Col>
          <Col md="2" sm="6" xs="6" className='mb-3' >
            <h6>PHILOSOPHY</h6>
            <a href="/adultgarten-philosophy">Adultkarten</a>
          </Col>
          <Col md="2" sm="6" xs="6" className='mb-3'>
            <h6>JOBS</h6>
            <a href="/job">Apply Now</a>
          </Col>
          <Col md="4" sm="12" xs="12" className='mb-3'>
            <h6>CONTACT US</h6>
            <Link to="mailto:uditbhattacharya@joyfulhugs.in"> uditbhattacharya@joyfulhugs.in</Link>
            <Link to="mailto:mayanksolanki@joyfulhugs.in"> mayanksolanki@joyfulhugs.in</Link>
          </Col>
        </Row>
        <hr className='mb-0' />
        <Row className="footer-bottom text-center py-3">
          <Col xs="12" md="4">
            Joyfulhugs pvt Ltd
          </Col>
          <Col xs="12" md="4">
            Ahmedabad Gujarat
          </Col>
          <Col xs="12" md="4">
            India
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
