import React, { useEffect } from "react";
import Header from '../comonent/Header';
import Footer from '../comonent/Footer';
import { Col, Container, Row } from 'reactstrap';
import "../assets/css/TeamCultureSection.css"
import Teambanner from "../assets/images/coms/teamcul-banner.png"
import Teambanner2 from "../assets/images/coms/team-banner-2.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import chand from "../assets/images/coms/chand.png"
import img1 from "../assets/images/coms/member-myk.jpg";
import img2 from "../assets/images/coms/member-dhara.png";
import img3 from "../assets/images/coms/member-udit.jpg";
import teammobileimg from "../assets/images/coms/teams-mobile-img.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import TeamMemberCard from "../comonent/TeamMemberCard";

const teamData = [
    {
        name: "MAYANK SOLANKI",
        role: "FOUNDER",
        image: img1,
    },
    {
        name: "DHARA PITHIYA",
        role: "COMMUNICATION HEAD",
        image: img2,
    },
    {
        name: "UDIT BHATTACHARYA",
        role: "INNOVATION HEAD",
        image: img3,
    },
];

const TeamCulture = ({ name }) => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);
    return (
        <>
            <Header />

            <section className='pt-120 pb-70'>
                <Container>
                    <Row>
                        <Col md="12" data-aos="zoom-in">
                            <h1 className="heading-bold">Team & Culture </h1>
                            <p>
                                This is a place where your voice matters, your ideas spark change, and pushing boundaries is part of the job description.
                            </p>
                        </Col>
                    </Row>

                </Container>

            </section>

            <section className="" data-aos="zoom-in">
                <div className='position-relative'>
                    <img
                        src={Teambanner}
                        alt="Team Working"
                        className="img-fluid w-100"
                    />
                    <div className="overlaytxt d-none d-sm-block ">
                        <h4 className='mb-0 text-black'>Speak freely.<br />Build boldly
                            <span>
                                <img src={chand} alt="joyful" width={80} className='arc-img'
                                    style={{
                                        position: 'relative',
                                        right: '50px'
                                    }}
                                />
                            </span>
                        </h4>
                    </div>
                </div>
            </section>

            <section className="pt-120 pb-120 spc-mb">
                <Container>
                    <Row>
                        <Col md="12" data-aos="zoom-in">
                            <h1 className='heading-bold'>
                                Here brave minds speak freely and rebels build the future.
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="d-none d-sm-block">
                <div className='position-relative' data-aos="zoom-in">
                    <img
                        src={Teambanner2}
                        alt="Team Working"
                        className="img-fluid w-100"
                    />
                    <div className="overlaytxt2">
                        <h4 className='mb-0 text-black fw-100' style={{ fontWeight: '100' }}>
                            A culture for challengers, Creators,<br /> and those who can’t help<br /> but ask <strong> “Why not?”</strong>
                            {/* <span>
                                <img src={chand} alt="joyful" width={80} className='arc-img'
                                    style={{
                                        position: 'relative',
                                        right: '50px'
                                    }}
                                />
                            </span> */}
                        </h4>
                    </div>
                </div>
            </section>


            <section className='pt-70 pb-70 spc-mb' data-aos="zoom-in">
                <Container>
                    <Row>
                        <Col md="4">
                            <div className='mb-2'>
                                <h1 className="heading-bold text-start text-sm-center ft-mobile-peple">
                                    People
                                </h1>
                            </div>
                        </Col>
                        <Col md="8">
                            <div className='mb-2 mt-2'>
                                <p>
                                    We are learners, teachers, Dreamers – bound by the belief that education is humanity greatest tool for building a better future
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* <section className='pb-50'>
                <div className="team-slider-section" data-aos="zoom-in">
                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={3}
                        spaceBetween={2}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                        }}
                    >
                        {teamData.map((member, index) => (
                            <SwiperSlide key={index}>
                                <div className="team-card mx-1">
                                    <img src={member.image} alt={member.name} className="team-img" width='100%' />
                                    <div className="team-info p-4">
                                        <h4 className='mb-0'><strong>{member.name}</strong></h4>
                                        <p className='mt-1 mb-0'>{member.role}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section> */}


            <TeamMemberCard />


            <section className="sec-mobile d-block d-sm-none mt-50 pt-5">
                <Container>
                    <Row>
                        <Col md="12" className="position-relative">
                            <h1 className="heading-bold3">
                                JOIN US
                                <spana>
                                    <img src={chand} alt="joyful"   className="joinch"/>
                                </spana>
                            </h1>
                            <p className="text-start">
                                A culture for challengers, Creators, and those who can’t help but ask <b>“Why not?”</b>
                            </p>
                        </Col>
                    </Row>
                </Container>
                <div className="">
                    <img src={teammobileimg} alt="" width="100%" />
                </div>
            </section>
            <Footer />
        </>
    );
};

export default TeamCulture;
