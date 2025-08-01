import React from 'react';
import { Container } from 'reactstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
// Local images
import Slider1 from "../assets/images/coms/slider-1.jpg";
import Slider2 from "../assets/images/coms/slider-2.jpg";
import Slider3 from "../assets/images/coms/slider-3.jpg";
import Chand from "../assets/images/coms/chand.png";

const Slider = () => {
    return (
        <section className="slider-area">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                // navigation
                effect="fade"
                autoplay={{ delay: 2000 }}
                loop
                className="main-swiper"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div
                        className="slider-wrapper single-slider d-flex align-items-start slider-height"
                        style={{
                            backgroundImage: `url(${Slider1})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <Container>
                            <div className="slider-content slide-content ">
                                <h2 className='position-relative' data-animation="fadeInUp" style={{ animationDelay: '0.4s' }}>
                                    A home for radical ideas in <br /> <b> adult learning</b>
                                    <img src={Chand}  alt='joyful'  className='dsk-arc'/>
                                </h2>
                            </div>
                        </Container>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div
                        className="slider-wrapper single-slider d-flex align-items-start slider-height"
                        style={{
                            backgroundImage: `url(${Slider2})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <Container>
                            <div className="slider-content">
                                <div className="slider-content slide-content ">
                                    <h2 className='position-relative' data-animation="fadeInUp" style={{ animationDelay: '0.4s' }}>
                                        Each brand under our wings dares <br /><b> to reimaging what it means to <br /> grow up</b>
                                        <img src={Chand}  alt='joyful'  className='dsk-arc2'/>
                                    </h2>
                                </div>
                            </div>
                        </Container>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div
                        className="slider-wrapper single-slider d-flex align-items-start slider-height"
                        style={{
                            backgroundImage: `url(${Slider3})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <Container>
                            <div className="slider-content">
                                <div className="slider-content slide-content ">
                                    <h2 className='position-relative' data-animation="fadeInUp" style={{ animationDelay: '0.4s' }}>
                                        We are reimaging adult learning <br /> for <b> the dreamers,  doers, and <br /> the rebels </b>
                                        <img src={Chand}  alt='joyful'  className='dsk-arc3'/>
                                    </h2>
                                </div>
                            </div>
                        </Container>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Slider;
