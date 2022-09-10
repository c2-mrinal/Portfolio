import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <>
      <Navbar variant="ligth" bg="light" expand="lg" fixed="top"> 
        <Container>
          <Navbar.Brand href="/">
          C2-MRINAL
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav></Nav>
          <Nav>
            <Nav.Link href="/career">Career</Nav.Link>
            <Nav.Link  href="/skill">Skills</Nav.Link>
            <Nav.Link  href="/contact">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    {/* <div className="navBarBanner"> <ul>
      <li>
        <Link to="/" className="active">
          Introduction
        </Link>
      </li>
      <li>
        <Link to="/career">Career</Link>
      </li>
      <li>
        <Link to="/skill">Skills</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
    </div> */}
    </>
  );
}

export default Header;
