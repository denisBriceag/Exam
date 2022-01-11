import React from "react";
import { Container, Navbar, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <Container fluid id='contacts' className="footer" style={{
            marginTop: "5%", display: "flex", justifyContent: "center", alignItems: "center"
        }}>
            <Navbar.Toggle aria-controls="mr-auto" />
            <Row style={{ width: "100%" }} id="par">
                <div style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-around" }}>
                    <p >Phone:+373 22 296 695</p>
                    <p>Email:office@ubfb.md </p>
                </div>
            </Row>
        </Container >
    );

}

export default Footer;