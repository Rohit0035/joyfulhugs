import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'reactstrap';
import Header from '../comonent/Header';
import HomeHeding from '../comonent/HomeHeding';
import BannerSlider from '../comonent/BannerSlider';
import OurBrand from '../comonent/OurBrand';
import TeamCultureSection from '../comonent/TeamCultureSection';
import JoinTeamSection from '../comonent/JoinTeamSection';
import LoopHeadingSection from '../comonent/LoopHeadingSection';
import Footer from '../comonent/Footer';
import ContactUsSection from '../comonent/ContactUsSection';
import JoyFulLoader from '../comonent/Loader';


const Home = () => {

    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        const homeVisited = localStorage.getItem('homeVisited');

        if (!homeVisited) {
            setShowLoader(true);
            localStorage.setItem('homeVisited', 'true');

            const timer = setTimeout(() => {
                setShowLoader(false);
            }, 4000); // loader duration on home page

            return () => clearTimeout(timer);
        }
    }, []);

    if (showLoader) {
        return <JoyFulLoader />;
    }



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




