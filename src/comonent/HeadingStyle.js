import React, { useEffect, useState } from 'react';
import { Slide, Fade } from 'react-reveal'; 
import '../assets/css/HeadingSlide.css';
import TextLoop from 'react-text-loop';

const HeadingStyle = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Scroll to top and reset slide index on refresh or load
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
        setCurrentSlide(0); // Resets to the first slide
    }, []);

    // Slides content
    const slides = [
        <div className="heading1">
            <h2 className="text-st">
                We’re the makers of the new ways
                <span className="colorful-text ms-2">
                    <TextLoop interval={1000}>
                        <span><b>thinking</b></span>
                        <span><b>ideas</b></span>
                    </TextLoop>
                </span>
            </h2>
        </div>,
        <div className="heading2">
            <Fade left>
                <h2 className="text-st">
                    A startup-inspired challenger agency
                </h2>
            </Fade>

        </div>,
        <div className="heading3">
            <h2 className="text-st">In the jungle of biz, where the lions roar and unicorns run wild</h2>
        </div>,
        <div className="slide-caption animated-caption">
            <h2 className="text-st">Our mission is to build thriving brands with Unique Stripes</h2>
        </div>,
        <div className="heading5">
            <h2 className="text-st">
                Designed specifically to take <b>businesses from x to 10X</b>
            </h2>
        </div>,
        <div className="heading6">
            <Fade right>
            <h2 className="text-st">
                Offering behavioural science, creativity, and innovation using{' '}
                AUTHENTIC IMAGINATION
            </h2>
            </Fade>
        </div>,
    ];

    // Transition logic
    useEffect(() => {
        if (currentSlide < slides.length) {
            const timer = setTimeout(() => setCurrentSlide(currentSlide + 1), 5000); // 5 seconds per slide
            return () => clearTimeout(timer);
        } else {
            // Redirect after last slide
            window.location.href = '/team'; // Replace with your desired URL
        }
    }, [currentSlide, slides.length]);

    return (
        <div className="slide-container">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                >
                    <Slide left when={index === currentSlide}>
                        {slide}
                    </Slide>
                </div>
            ))}
        </div>
    );
};

export default HeadingStyle;
