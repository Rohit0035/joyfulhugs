// import React, { useEffect, useRef } from 'react';
// import { Container } from 'reactstrap';
// import "animate.css/animate.compat.css";
// import KickVideo from '../assets/images/common/KickHead.mp4';
// import HeaderHome from '../comonent/HeaderHome';
// import arrow from '../assets/images/common/arrow.png'
// import { Link } from 'react-router-dom';
// import verticalvideo from "../assets/images/common/vertical-mobile.mp4"

// import { Helmet } from 'react-helmet';

// const Home = () => {
//     const videoRef = useRef(null);

//     useEffect(() => {
//         if (videoRef.current) {
//             videoRef.current.play().catch((error) => {
//                 console.error("Video autoplay failed:", error);
//             });
//         }
//     }, []);

//     return (
//         <>

//             <Helmet>
//                 <title>Kickhead | Startup Growth Agency - From Ideas to Impact</title>
//                 <meta
//                     name="description"
//                     content="Kickhead is a startup-inspired agency that blends creativity, innovation, and strategy to scale startups from X to 10X. Your journey to impactful growth starts here."
//                 />
//                 <meta
//                     name="keywords"
//                     content="startup agency, business growth, creative strategy, innovation, X to 10X, Kickhead."
//                 />
//             </Helmet>
//             <section>
//                 <div className='bg-main' style={{ position: 'relative', overflow: 'hidden' }}>
//                     {/* Background video */}
//                     {/* <video loop autoPlay 
//                         className='home-viedo'
//                     >
//                         <source src={KickVideo} type="video/mp4" />
//                     </video>  */}

//                     <video
//                         ref={videoRef}
//                         loop
//                         autoPlay
//                         muted
//                         playsInline
//                         className='home-viedo'
//                     >
//                         <source src={KickVideo} type="video/mp4" />
//                     </video>
//                     <video loop autoPlay
//                         className='mobile-viedo'
//                     >
//                         <source src={verticalvideo} type="video/mp4" />
//                     </video>

//                     {/* Overlay div */}
//                     <div style={{
//                         position: 'absolute',
//                         top: '0',
//                         left: '0',
//                         width: '100%',
//                         height: '100%'
//                     }}>
//                         <HeaderHome />
//                         <Container >
//                             <div className='pt-5 pb-5'>
//                                 <Link to="/about" style={{ position: 'absolute', bottom: '90px', width: '100%', textAlign: 'center', cursor: 'pointer', }}>
//                                     <button
//                                         style={{
//                                             background: '#000',
//                                             cursor: 'pointer',
//                                             width: '70px',
//                                             height: '70px',
//                                             animation: 'bounce 2s infinite',
//                                             borderRadius: '100px',
//                                             border: '5px solid#fff',
//                                             padding: '2px'
//                                         }}
//                                     >
//                                         <span>
//                                             <img src={arrow} alt='' width='40px' />
//                                         </span>
//                                     </button>
//                                 </Link>
//                             </div>
//                         </Container>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Home;


import React, { useEffect, useRef } from 'react';
import { Container } from 'reactstrap';
import JoyfulLoader from '../comonent/JoyfulLoader';
import Header from '../comonent/Header';
import HomeHeding from '../comonent/HomeHeding';
import BannerSlider from '../comonent/BannerSlider';
import OurBrand from '../comonent/OurBrand';
import TeamCultureSection from '../comonent/TeamCultureSection';
import JoinTeamSection from '../comonent/JoinTeamSection';
import LoopHeadingSection from '../comonent/LoopHeadingSection';
import Footer from '../comonent/Footer';
import ContactUsSection from '../comonent/ContactUsSection';

const Home = () => {


    return (
        <>
            <Header />

            <HomeHeding />

            <BannerSlider />

            <OurBrand />

            <TeamCultureSection />

            <JoinTeamSection />

            <LoopHeadingSection />

            <ContactUsSection />

            <Footer />

        </>
    );
};

export default Home;




