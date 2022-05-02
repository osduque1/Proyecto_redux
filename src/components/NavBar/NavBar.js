import React from "react";
import {
    Navbar,
    Container,
    Offcanvas,
    Nav
} from 'react-bootstrap';
import './NavBar.scss'

const NavBar = () => {

    let navBarShow = '';

    const handleToggle = () => {
        navBarShow = document.getElementById('navBarToggle');
        navBarShow.style.visibility = 'hidden';
    };

    const handleClose = () => {
        navBarShow = document.getElementById('navBarToggle');
        navBarShow.style.visibility = 'visible';
    };

    return (
        <Navbar key="xxl" bg="light" expand="xxl" className="mb-3 NavBar-container">
            <Container fluid>
                <Navbar.Toggle
                    id="navBarToggle" 
                    aria-controls="offcanvasNavbar-expand-xxl" 
                    onClick={handleToggle}
                />
                <Navbar.Offcanvas
                    id="offcanvasNavbar-expand-xxl"
                    aria-labelledby="offcanvasNavbarLabel-expand-xxl"
                    placement="end"
                >
                    <Offcanvas.Header closeButton onClick={handleClose} />
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#action1">INICIO</Nav.Link>
                            <Nav.Link href="#action2">SERVICIOS</Nav.Link>
                            <Nav.Link href="#action3">NUESTRO EQUIPO</Nav.Link>
                            <Nav.Link href="#action4">PORTAFOLIO</Nav.Link>
                            <Nav.Link href="#action5">CONTÁCTO</Nav.Link>
                            <Nav.Link href="#action6">TÉRMINOS Y CONDICIONES</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default NavBar;

