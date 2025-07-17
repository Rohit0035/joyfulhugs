import React from 'react';
import '../assets/css/ComingSoon.css';
import Header from '../comonent/Header';
import Footer from '../comonent/Footer';
import Soon from "../assets/images/coms/soon.png"
const ComingSoon = () => {
    return (
        <>
            <Header/>
            <div className="coming-soon-container">
                <div className="content-box shadow-sm">
                    <img src={Soon}  alt="joyful"  width="150px"/>
                    <h1 className="main-title">Something Awesome</h1>
                    <h2 className="blink-text">Coming Soon...</h2>
                    <p className="subtitle">
                        We're working hard behind the scenes to launch our next big thing.
                        Stay tuned!
                    </p>
                    {/* <button className="notify-btn">Notify Me</button> */}
                </div>
            </div>
            <Footer/>
        </>

    );
};

export default ComingSoon;
