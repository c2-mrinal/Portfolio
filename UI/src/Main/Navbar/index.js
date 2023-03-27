import React from "react";
// import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../../image/LOGO.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <>
      <Navbar className="nav-container sticky-top" expand="lg">
        <Container className="justify-content-evenly">
          <Navbar.Brand className="justify-content-start" href="/">
            <img className="logo-img" src={Logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav></Nav>
            <Nav className="justify-content-center flex-grow-1 Nav-Link ">
              <span>
                <Nav.Link href="/career">Career</Nav.Link>
              </span>
              <span>
                <Nav.Link href="/skill">Skills</Nav.Link>
              </span>
              <span>
                <Nav.Link href="/about">About</Nav.Link>
              </span>
              <span>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
