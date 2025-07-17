import React, { useState, useEffect } from 'react';
import {
    Collapse,
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import Logo from "../assets/images/coms/";
import { FaBars, FaTimes } from 'react-icons/fa';
import "../assets/css/Header.css";

const HeaderHome = (props) => {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleOffcanvas = () => setIsOffcanvasOpen(!isOffcanvasOpen);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <Navbar
                color=""
                light
                expand="md"
                className='header'
                style={{backgroundColor:'transparent'}}
            >
                <NavbarBrand href="/">
                    {/* <img src={Logo} alt="Logo" width="200px" /> */}
                </NavbarBrand>

                {/* Conditional rendering of icons */}
                <NavbarToggler 
                    onClick={toggleOffcanvas} 
                    className="text-white ml-auto" 
                    style={{ marginLeft: 'auto' }}
                >
                    {!isOffcanvasOpen ? (
                        <FaBars size={24} />
                    ) : (
                        <FaTimes size={24} />
                    )}
                </NavbarToggler>

                {/* Offcanvas for smaller screens */}
                <Offcanvas className="bg-black text-white" isOpen={isOffcanvasOpen} toggle={toggleOffcanvas} direction="end">
                    <OffcanvasHeader>
                        {/* <div className="f-flex">
                            <button className="btn-close-custom" onClick={toggleOffcanvas}>
                                <FaTimes color="#fff" size={24} />
                            </button>
                        </div> */}
                    </OffcanvasHeader>
                    <OffcanvasBody>
                        <Nav vertical className="menu-custom">
                            <NavItem>
                                <NavLink className="menu-bold" href="/our-credo">
                                    CREDO <span className="fs-5 fw-300 ms-5">01</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="menu-bold" href="/workfolio">
                                    WORK <span className="fs-5 fw-300 ms-5">02</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="menu-bold" href="/kick-start">
                                    KICKSTART <span className="fs-5 fw-300 ms-5">03</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="menu-bold" href="/team">
                                    TEAM <span className="fs-5 fw-300 ms-5">04</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="menu-bold" href="/freekick">
                                    FREEKICKS <span className="fs-5 fw-300 ms-5">05</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </OffcanvasBody>
                </Offcanvas>
            </Navbar>
        </div>
    );
};

export default HeaderHome;
