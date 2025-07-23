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




