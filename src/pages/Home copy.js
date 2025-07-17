import React from 'react';
import { Container } from 'reactstrap';
import "animate.css/animate.compat.css";
import KickVideo from '../assets/images/common/KickHead.mp4';
import HeaderHome from '../comonent/HeaderHome';
import arrow from '../assets/images/common/arrow.png'
import { Link } from 'react-router-dom';
import verticalvideo from "../assets/images/common/vertical-mobile.mp4"
const Home = () => {
    // Scroll handler function to scroll to the "about-section"
    const scrollToAboutSection = () => {
        document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <section>
                <div className='bg-main' style={{ position: 'relative', overflow: 'hidden' }}>
                    {/* Background video */}
                    <video loop autoPlay 
                        className='home-viedo'
                    >
                        <source src={KickVideo} type="video/mp4" />
                    </video>

                    <video loop autoPlay 
                        className='mobile-viedo'
                    >
                        <source src={verticalvideo} type="video/mp4" />
                    </video>
                     
                    {/* Overlay div */}
                    <div style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%'
                    }}>
                        <HeaderHome />
                        <Container fluid>
                            <div className='pt-5 pb-5'>
                                <Link to="/about" style={{ position: 'absolute', bottom: '90px', width: '100%', textAlign: 'center', cursor: 'pointer', }}>
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
                        </Container>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;


