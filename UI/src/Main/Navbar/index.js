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
			<Navbar className="nav-container fixed-top" expand="lg">
				<Container className="justify-content-between">
					<Nav>
						<Navbar.Brand className="navbar-brand" href="/">
							<img className="logo-img" src={Logo} alt="Logo" />
						</Navbar.Brand>
					</Nav>
					<Nav>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className=" flex-grow-1 Nav-Link ">
								<Nav.Link href="/career">
									<span>Career</span>
								</Nav.Link>
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
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default Header;
