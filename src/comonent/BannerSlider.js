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


const banners = [
    {
        id: 1,
        title: (
            <>
                A home for radical ideas in <br /> <b> adult learning</b>
                <img src={Chand} alt="Star" className="m1" style={{ width: 80 }} />
            </>
        ),
        image: Slider1
    },

    {
        id: 2,
        title: (
            <>
                Each brand under our wings dares <br /> to <b> reimaging what it means to<br /> grow up</b>
                <img src={Chand} alt="Star" className="m2" style={{ width: 80 }} />
            </>
        ),
        image: Slider2
    },
    {
        id: 3,
        title: (
            <>
                We are reimaging adult learning <br /> to <b>  for the dreamers,  doers, and<br /> the rebels</b>
                <img src={Chand} alt="Star" className="m3" style={{ width: 80 }} />
            </>
        ),
        image: Slider3
    }

    
];

const BannerSlider = () => {
    return (
        <div className="banner-slider">
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                slidesPerView={1}
                effect="fade"
                loop={true}
                // autoplay={{
                //     delay: 4000,
                //     disableOnInteraction: false
                // }}
            // pagination={{
            //   clickable: true
            // }}
            >
                {banners.map((banner) => (
                    <SwiperSlide key={banner.id}>
                        <div className="slide">
                            <img
                                src={banner.image}
                                alt={banner.title}
                                className="slide-image"
                            />
                            <div className="slide-content">
                                <h2 className="text-dark fw-300">{banner.title}</h2>
                                {/* <p>{banner.subtitle}</p> */}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerSlider;
