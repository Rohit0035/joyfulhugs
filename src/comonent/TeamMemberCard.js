import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../assets/css/TeamComponent.css';
import Header from '../comonent/Header';
import Footer from '../comonent/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import img1 from "../assets/images/coms/member-myk.jpg";
import img2 from "../assets/images/coms/member-dhara.png";
import img3 from "../assets/images/coms/member-udit.jpg";

const teamData = [
    {
        name: "MAYANK SOLANKI",
        role: "Founder",
        description:
            "Mayank leads with quiet conviction and bold clarity, shaping a vision that inspires action and meaning. He believes in building not just a company, but a culture—where people feel seen, trusted, and driven by something larger than themselves. His leadership is grounded in purpose, and his greatest strength lies in bringing out the best in others.",
        image: img1,
    },
    {
        name: "UDIT BHATTACHARYA",
        role: "Innovation Head",
        description:
            "Udit is the mind that shapes possibility into form—a builder of ideas, systems, and experiences that move people. With a rare blend of depth and precision, he brings vision to life through relentless curiosity and craft. His leadership sparks momentum, ensuring innovation is not just a word, but a way of working.",
        image: img3,
    },
    {
        name: "DHARA PITHIYA",
        role: "Communication Head",
        description:
            "Dhara is the voice behind the vision—a communicator who listens deeply, speaks with intention, and connects meaning with emotion. With a rare sensitivity to both words and people, she ensures every message reflects the soul of the company. Her leadership brings clarity, coherence, and heart to how we're seen, heard, and felt.",
        image: img2,
    },
];


const TeamMemberCard = () => {
    return (
        <>
            <section className="sec-team">
                <Container fluid>
                    {/* Desktop Grid View */}
                    <div className="d-none d-md-grid">
                        <Row>
                            {teamData.map((member, index) => (
                                <Col sm="6" md="4" lg="4" className='px-1'>
                                    <div className="team-member" key={index}>
                                        <div className="image-container">
                                            <img src={member.image} alt={member.name} className="team-image" />
                                            <div className="overlayteam">
                                                <div className="overlay-content">
                                                    <h4 className="team-name text-white mt-3">{member.name}</h4>
                                                    <h6 className="team-designation">{member.role}</h6>
                                                    <p className='' style={{ fontSize: '14px', textAlign: 'justify' }}>
                                                        {member.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>

                    {/* Mobile Swiper View */}
                    <div className="d-block d-md-none">
                        <Swiper spaceBetween={10} slidesPerView={1}>
                            {teamData.map((member, index) => (
                                <SwiperSlide key={index}>
                                    <div className="team-member">
                                        <div className="image-container">
                                            <img src={member.image} alt={member.name} className="team-image" />
                                            <div className="overlayteam">
                                                <div className="overlay-content">
                                                    <h4 className="team-name text-white mt-3">{member.name}</h4>
                                                    <h6 className="team-designation">{member.role}</h6>
                                                    <p className='' style={{ fontSize: '14px', textAlign: 'justify' }}>
                                                        {member.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default TeamMemberCard;
