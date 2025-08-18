import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../assets/css/Footer.css';
import Logo from "../assets/images/coms/logo.png"
const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-links mb-4 py-5">
          <Col xs="6" sm="6" md="4" lg="2" className='mb-4'>
            <img src={Logo} alt='juyful' width='150px' />
          </Col>
          <Col xs="6" sm="6" md="4" lg="2" className='mb-4'>
            <h6>TEAM</h6>
            <Link to="/team-culture">Founder</Link>
            <Link to="/job">Join Us</Link>
          </Col>
          <Col xs="6" sm="6" md="4" lg="2" className='mb-4' >
            <h6>PHILOSOPHY</h6>
            <Link to="/adultgarten-philosophy">Adultgarten </Link>
          </Col>
          <Col xs="6" sm="6" md="4" lg="2" className='mb-4'>
            <h6>JOBS</h6>
            <Link to="/job">Apply Now</Link>
          </Col>
          <Col xs="6" sm="6" md="4" lg="4" className='mb-4'>
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
