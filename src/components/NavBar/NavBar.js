import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from 'react-scroll'
import './NavBar.css';



const NavBar = () => {

    return (
        <>
            <Navbar bg="dark" variant="dark" className="nav-bar" fixed="top" id="home">
                <Container className="container">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <NavDropdown title="Catalog" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3" id="catalog">Whiskey</NavDropdown.Item>
                            <NavDropdown.Item href="#action4" id="catalog">Vodca</NavDropdown.Item>
                            <NavDropdown.Item href="#action5" id="catalog">Cognac</NavDropdown.Item>
                            <NavDropdown.Item href="#action5" id="catalog">Liqeuer</NavDropdown.Item>
                            <NavDropdown.Item href="#action5" id="catalog">Champagne</NavDropdown.Item>
                            <NavDropdown.Item href="#action5" id="catalog">Wine</NavDropdown.Item>
                            <NavDropdown.Item href="#action5" id="catalog">Gin</NavDropdown.Item>
                            <NavDropdown.Item href="#action5" id="catalog">Water</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#contacts">Contacts</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}

export default NavBar;