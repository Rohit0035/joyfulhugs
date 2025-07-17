import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import BrandImg from "../assets/images/coms/barnd-1.png"
import Comsoon from "../assets/images/coms/comesoon.png"

const brandData = [
    { id: 1, name: "Brand One", logo: BrandImg },
    { id: 2, name: "Brand Two", logo: BrandImg },
    { id: 3, name: "Brand Three", logo: BrandImg },
    { id: 4, name: "Brand Four", logo: BrandImg },
    { id: 5, name: "Brand Five", logo: BrandImg },
    { id: 5, name: "Brand Five", logo: BrandImg },

];

const OurBrand = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <>
            <section className="pt-50 pb-50">
                <Container>
                    <Row>
                        <Col md="5">
                            <div data-aos="fade-up">
                                <h1 className="heading-bold">We are grown up dreamers.</h1>
                            </div>
                        </Col>
                        <Col md="7">
                            <p className="mb-0 mt-4" data-aos="fade-up">
                                We build brands that challenge, uplift, and awaken because the world doesn’t change when people know more – it changes when they start living what they believe.
                            </p>
                        </Col>
                    </Row>

                    {/* <Row className="mt-5">
                        <Col md="12">
                            <div data-aos="fade-up">
                                <Swiper
                                    modules={[Autoplay]}
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                                    breakpoints={{
                                        320: { slidesPerView: 1 },
                                        576: { slidesPerView: 2 },
                                        768: { slidesPerView: 3 },
                                        992: { slidesPerView: 4 },
                                    }}
                                >
                                    {brandData.map((brand) => (
                                        <SwiperSlide key={brand.id}>
                                            <div className="brand-card text-center p-3 border rounded shadow-sm bg-white">
                                                <img
                                                    src={brand.logo}
                                                    alt={brand.name}
                                                    style={{ maxWidth: "100px", height: "auto" }}
                                                />
                                                <p className="mt-2 fw-semibold">{brand.name}</p>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </Col>
                    </Row> */}
                </Container>
            </section>
            <section>
               <img src={Comsoon}  alt="joyful" className="w-100" />
            </section>
        </>
    );
};

export default OurBrand;
