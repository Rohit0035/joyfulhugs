import React from 'react';
import { Container } from 'reactstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../assets/css/TeamMemberCard.css';

import img1 from "../assets/images/coms/member-myk.jpg";
import img2 from "../assets/images/coms/member-dhara.png";
import img3 from "../assets/images/coms/member-udit.jpg";

const teamData = [
    {
        name: "MAYANK SOLANKI",
        role: "FOUNDER",
        image: img1
    },
    {
        name: "DHARA PITHIYA",
        role: "COMMUNICATION HEAD",
        image: img2
    },
    {
        name: "UDIT BHATTACHARYA",
        role: "INNOVATION HEAD",
        image:img3
    },
];

const TeamMemberCard = () => {
    const renderCard = (member, idx) => (
        <div className="team-card-wrapper" key={idx}>
            <div className="team-card m-2">
                <div className="card-front">
                    <img src={member.image} alt={member.name} className="team-img" />
                    <div className="info-front d-none">
                        <h5>{member.name}</h5>
                        <p>{member.role}</p>
                    </div>
                </div>
                <div className="card-back">
                    <div className="info-back">
                        <h3 className='text-black'>{member.name}</h3>
                        <p className='text-black'>{member.role}</p>
                        <p className="bio text-black">
                            {member.name.split(' ')[0]} plays a key role in leading the team with expertise and vision in {member.role.toLowerCase()}.
                        </p>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="pb-5 team-section">
            <>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={5}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {teamData.map((member, idx) => (
                        <SwiperSlide key={idx}>
                            {renderCard(member, idx)}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        </section>
    );
};

export default TeamMemberCard;
