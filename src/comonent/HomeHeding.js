import React, { useEffect } from "react";
import { Container } from 'reactstrap';
import 'aos/dist/aos.css';
import AOS from 'aos';


const HomeHeding = () => {

    useEffect(() => {
         AOS.init({ duration: 1000, once: false });
     }, []);
    return (
        <>
            <section className='pt-120 pb-70'>
                <Container>
                    <div className='pt-2 ' data-aos="zoom-in">
                        <h1 className='heading-bold'>
                            We build brands for adults who are still
                            becoming !
                        </h1>
                        <p className=''>
                            creating a force strong enough to uplift individuals, communities, and all of humanity through adult education
                        </p>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default HomeHeding;
