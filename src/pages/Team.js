import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../assets/css/TeamComponent.css'; // Custom styles for your team component
import Header from '../comonent/Header';
import Teamimg from "../assets/images/common/tean-1.jpg";
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa';
import asif1 from "../assets/images/common/asif2.jpeg"
import udit1 from "../assets/images/common/Udit1.jpg"
import SaalimII from "../assets/images/common/SaalimII.jpg"
import shreyay from "../assets/images/common/shreya_y.jpg"
import piyushdas from "../assets/images/common/piyush_das.jpg"
import hitehimg from "../assets/images/common/hitesh.jpg"


import Footer from '../comonent/Footer';
import ScrollAnimation from 'react-animate-on-scroll';
import GetInTouch from '../comonent/GetInTouch';
import FieldsetBox from '../comonent/FieldsetBox';
import TeamGetInTouch from '../comonent/TeamGetInTouch';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrow from '../assets/images/common/arrow.png'
import { Helmet } from 'react-helmet';

const teamMembers = [
    {
        name: 'Asif Shakeel',
        designation: 'Creative Strategist',
        description: '20+ years of expertise in strategy, design & storytelling with global creative agencies. Worked with 20+ startups, entrepreneurs, and  C-suites in kickstarting biz. I love food, films, and spoken words',
        image: asif1, // Add image here
        socials: { linkedin: 'https://www.linkedin.com/in/asif-shakeel-39492b13/', instagram: '#', facebook: '#' }
    },
    {
        name: 'Udit Bhattacharya ',
        designation: 'Behavior Research & Innovation ',
        description: '10+ expertise extend beyond product creation, behavioral science, semiotic & design. Have transformed corporate to mid level startup to industry powerhouse ( featured in Shark tank)',
        image: udit1, // Add image here
        socials: { linkedin: 'https://www.linkedin.com/in/udit-co-founder-creative-tr/', twitter: '#', facebook: '#' }
    },
    {
        name: 'HITESH JAIN',
        designation: 'Creative Lead, Brand builder',
        description: 'Hitesh Jain is an accomplished influencer and thought leader with extensive experience in brand awareness, outreach, social media marketing, SEO, and ROI enhancement. He has held key roles at Viral Pitch, Mirum, and RepIndia, Ogilvy & WK contributing to top brands.',
        image: hitehimg, // Add image here
        socials: { linkedin: '#', twitter: '#', facebook: '#' }
    },
  
    {
        name: 'Shreya Yadav ',
        designation: 'Digital Strategist ',
        description: '10+ years of client relations & operation management expertise in brand building and growth hacking communication. Worked with the core team of breakthrough startups developing innovative D2C products and market roadmaps.',
        image: shreyay, // Add image here
        socials: { linkedin: 'https://www.linkedin.com/in/shreya-yadav-85a75321/', twitter: '#', facebook: '#' }
    },
    {
        name: 'Piyush Kr. Das',
        designation: 'Design & illustration',
        description: '25 years of dynamic art experience, lending services to advertising, events, and exhibition industry. Worked with national and international brands utilizing modern and artistic tools in 2D and 3D art forms to create compelling visual narratives. ',
        image: piyushdas, // Add image here
        socials: { linkedin: '#', twitter: '#', facebook: '#' }
    },
   
    {
        name: 'Saalim Sulemani ',
        designation: 'Graphic Design & Art ',
        description: '17+ years of experience in creative art direction with the best design houses and advertising agencies in India & UAE. Skilled in Adobe Creative Suite, Strong arts and design.',
        image: SaalimII, // Add image here
        socials: { linkedin: 'https://www.behance.net/saalim ', twitter: '#', facebook: '#' }
    },
];


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};
const Team = () => {
    return (
        <>
            <Helmet>
                <title>Meet the Kickhead Team | Makers of New</title>
                <meta
                    name="description"
                    content="Behind every great brand is a team of innovators, strategists, and creators. Meet the people driving the Kickhead mission to empower startups and you can join too."
                />
                <meta
                    name="keywords"
                    content="Kickhead team, innovators, creators, startup strategists, Meet the makers, creative experts."
                />
            </Helmet>
            <Header />
            <section className="sec-team">
                <Container fluid style={{ padding: '0 25px' }}>
                    <ScrollAnimation animateIn='fadeInLeft'>
                        <div className=''>
                            <h1 className="heading-bold text-center mb-3">OUR TEAM</h1>
                        </div>
                    </ScrollAnimation>
                    <Slider {...settings} className='mb-5'>
                        {teamMembers.map((member, index) => (
                            <div className="team-member" key={index}>
                                <div className="image-container">
                                    <img src={member.image} alt={`${member.name}`} className="team-image" />

                                    <div className="overlay">
                                        <div className="overlay-content">
                                            <h5 className="team-name fs-4">{member.name}</h5>
                                            <p className="team-designation"><b>{member.designation}</b></p>
                                            <p className="team-description fs-6">{member.description}</p>
                                            <div className="social-links">
                                                <Link to={member.socials.linkedin} className="socil-icons"><FaLinkedin /></Link>
                                                {/* <Link to="#" className="socil-icons"><FaInstagram /></Link> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    {/* <Row>
                        {teamMembers.map((member, index) => (
                            <Col lg={3} md={6} sm={12} xs={12} key={index}>
                                <div className="team-member">
                                    <div className="image-container">
                                        <img src={member.image} alt={`${member.name}`} className="team-image" />

                                        <div className="overlay">
                                            <div className="overlay-content">
                                                <h5 className="team-name fs-4">{member.name}</h5>
                                                <p className="team-designation"><b>{member.designation}</b></p>
                                                <p className="team-description fs-6">{member.description}</p>
                                                <div className="social-links">
                                                    <Link to={member.socials.linkedin} className="socil-icons"><FaLinkedin /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row> */}
                </Container>
            </section>

            <div className='text-center' style={{ marginTop: '-35px' }}>
                <Link style={{ width: '100%', textAlign: 'center', cursor: 'pointer', }}>
                    <button
                        style={{
                            background: '#000',
                            cursor: 'pointer',
                            width: '70px',
                            height: '70px',
                            animation: 'bounce 2s infinite',
                            borderRadius: '100px',
                            border: '5px solid#fff',
                            padding: '2px'
                        }}
                    >
                        <span>
                            <img src={arrow} alt='' width='40px' />
                        </span>
                    </button>
                </Link>
            </div>
            <section className='mb-5 mt-4'>
                <Container fluid>
                    <Row>
                        <Col md="12">
                            <h3 className='text-center mb-1 team-form-head' ><b>Become part of the Kickhead tribe:</b></h3>
                            <p className='text-center fs-5 mb-0'>This isn’t about perfection, it's about potential. So, don’t sweat it. </p>
                            <p className='text-center mb-3 fs-5 '>Creativity isn’t about right or wrong. It’s about you.</p>

                            <p className='text-center fs-5 text-white mb-5'>
                                Be real, and show us what makes you tick aka kick. Ready to bring your A-game?
                            </p>
                            <ScrollAnimation animateIn='fadeInLeft'>
                                <FieldsetBox legendText="Excited !">
                                    {/* <p className='text-center fs-5 text-white mt-2'>
                                      Be real, and show us what makes you tick aka kick. Ready to bring your A-game?
                                    </p> */}
                                    <Row>
                                        <Col md='2'></Col>
                                        <Col md='8'>
                                            <TeamGetInTouch />
                                        </Col>
                                        <Col md='2'></Col>
                                    </Row>
                                </FieldsetBox>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    );
};

export default Team;
