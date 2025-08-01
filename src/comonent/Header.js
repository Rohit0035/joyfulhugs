import React, { useState } from 'react';
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
} from 'reactstrap';
import Logo from "../assets/images/coms/logo.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import "../assets/css/Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    const toggleOffcanvas = () => setIsOffcanvasOpen(!isOffcanvasOpen);

    const navLinks = [
        { path: "/", label: "HOME" },
        { path: "javascript:void(0)", label: "BRAND", disabled: true },
        { path: "/team-culture", label: "TEAM" },
        { path: "/adultgarten-philosophy", label: "PHILOSOPHY " },
        { path: "/job", label: "JOBS  " },
        { path: "/contact", label: "CONTACT US" },

    ];

    return (
        <Navbar light expand="md" className="header">
            <Container className="d-flex align-items-center justify-content-between">
                {/* Logo */}
                <NavbarBrand href="/" className="p-0 m-0">
                    <img src={Logo} alt="Logo" className='logo' />
                </NavbarBrand>

                {/* Desktop Menu */}
                <Nav className="d-none d-md-flex align-items-center gap-4" navbar>
                    {navLinks.map((item, index) => (
                        <NavItem key={index}>
                            <Link className="nav-link text-dark desktop-font" to={item.path}>
                                {item.label}
                            </Link>
                        </NavItem>
                    ))}
                </Nav>

                {/* Mobile Toggler */}
                <NavbarToggler
                    onClick={toggleOffcanvas}
                    className="d-md-none border-0 bg-transparent"
                >
                    {isOffcanvasOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </NavbarToggler>
            </Container>

            {/* Mobile Offcanvas Menu */}
            <Offcanvas
                className="bg-white text-dark"
                isOpen={isOffcanvasOpen}
                toggle={toggleOffcanvas}
                direction="end"
            >
                <OffcanvasHeader toggle={toggleOffcanvas}></OffcanvasHeader>
                <OffcanvasBody>
                    <Nav vertical className="menu-custom">
                        {navLinks.map((item, index) => (
                            <NavItem key={index}>
                                <Link className="menu-bold text-black nav-link" to={item.path}>
                                    {item.label}
                                </Link>
                            </NavItem>
                        ))}
                    </Nav>
                </OffcanvasBody>
            </Offcanvas>
        </Navbar>
    );
};

export default Header;
