import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../assets/css/BannerSlider.css";

import Slider1 from "../assets/images/coms/slider-1.jpg";
import Slider2 from "../assets/images/coms/slider-2.jpg";
import Slider3 from "../assets/images/coms/slider-3.jpg";
import Chand from "../assets/images/coms/chand.png";
import SliderMobile1 from "../assets/images/coms//mb-sl-1.png";
import SliderMobile2 from "../assets/images/coms//mb-sl-2.png";
import SliderMobile3 from "../assets/images/coms//mb-sl-3.jpg";
import { Container } from "reactstrap";
import Slider from "./Slider";


const BannerSlider = () => {
    return (
        <>
            <section className="d-none d-sm-block">
                <Slider />
            </section>
            <section className="d-block d-sm-none">
                <div className="banner-slider">
                    <Swiper
                        modules={[Autoplay, Pagination, EffectFade]}
                        slidesPerView={1}
                        effect="fade"
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false
                        }}
                    >
                        <SwiperSlide>
                            <div className="slide slide-mb-1">
                                <div className="slide-content">
                                    <h2 className="text-dark fw-300">
                                        A home for radical ideas in
                                        <b> adult learning</b>
                                        <span className="position-relative">
                                            <img src={Chand} alt="Star" className="m1" />
                                        </span>
                                    </h2>
                                </div>
                                <img
                                    src={Slider1}
                                    alt="Slide 1"
                                    className="slide-image d-none d-md-block"
                                />
                                <img
                                    src={SliderMobile1}
                                    alt="Slide 1"
                                    className="slide-image d-block d-md-none"
                                />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="slide slide-mb-2">
                                <div className="slide-content">
                                    <h2 className=" position-relative text-dark fw-300">
                                        Each brand under our wings dares
                                        to <b> reimagine what it means to grow up</b>
                                        <span className="position-relative">
                                            <img src={Chand} alt="Star" className="m2" />
                                        </span>
                                    </h2>
                                </div>
                                <img
                                    src={Slider2}
                                    alt="Slide 1"
                                    className="slide-image d-none d-md-block"
                                />
                                <img
                                    src={SliderMobile2}
                                    alt="Slide 1"
                                    className="slide-image d-block d-md-none"
                                />

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="slide slide-mb-3">
                                <div className="slide-content">
                                    <h2 className=" position-relative text-dark fw-300">
                                        We are reimagining adult learning
                                        <b>for the dreamers, doers, and the rebels</b>
                                        <span className="position-relative">
                                            <img src={Chand} alt="Star" className="m3" />
                                        </span>
                                    </h2>
                                </div>
                                <img
                                    src={Slider3}
                                    alt="Slide 1"
                                    className="slide-image d-none d-md-block"
                                />
                                <img
                                    src={SliderMobile3}
                                    alt="Slide 1"
                                    className="slide-image d-block d-md-none"
                                />

                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default BannerSlider;
