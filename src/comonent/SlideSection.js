import React from 'react';
import { Container } from 'reactstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slider1 from "../assets/images/coms/slider-1.jpg";
import Slider2 from "../assets/images/coms/slider-2.jpg";
import Slider3 from "../assets/images/coms/slider-3.jpg";

const SlideSection = () => {
  const slides = [
    {
      image: Slider1,
      title: 'Slide Title 1',
      description: 'This is description for slide 1.',
    },
    {
      image: Slider2,
      title: 'Slide Title 2',
      description: 'This is description for slide 2.',
    },
    {
      image: Slider3,
      title: 'Slide Title 3',
      description: 'This is description for slide 3.',
    },
  ];

  return (
    <section className="py-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-100"
                style={{
                  position: 'relative',
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '300px',
                }}
              >
                <Container>
                  <div
                    style={{
                    //   position: 'absolute',
                    //   top: '20px',
                    //   left: '20px',
                    //   backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    //   color: '#fff',
                    //   padding: '10px 15px',
                    //   borderRadius: '5px',
                    //   maxWidth: '90%',
                    }}
                  >
                    <h4 className="mb-1">{slide.title}</h4>
                    <p className="mb-0">{slide.description}</p>
                  </div>
                </Container>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  );
};

export default SlideSection;
