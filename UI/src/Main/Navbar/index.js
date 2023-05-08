import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../../image/LOGO.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
	const [pathOrigin, setPathOrigin] = useState(true);
	useEffect(() => {
		const path = window.location.pathname;
		if (path.length > 1) {
			setPathOrigin(false);
		} else {
			setPathOrigin(true);
		}
		return () => {};
	}, [window.location.href]);

	return (
		<>
			<Navbar className="nav-container fixed-top" expand="lg">
				<Navbar.Brand className="navbar-brand" href="/">
					<img className="logo-img" src={Logo} alt="Logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Container className="justify-content-end">
					<Nav>
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className={`flex-grow-1 Nav-Link `}>
								<span>
									<Nav.Link href="/career" className={`${pathOrigin ? "fontColorWhite" : ""}`}>
										Career
									</Nav.Link>
								</span>
								<span>
									<Nav.Link href="/skill" className={`${pathOrigin ? "fontColorWhite" : ""}`}>
										Skills
									</Nav.Link>
								</span>
								<span>
									<Nav.Link href="/about" className={`${pathOrigin ? "fontColorWhite" : ""}`}>
										About
									</Nav.Link>
								</span>
								<span>
									<Nav.Link href="/contact" className={`${pathOrigin ? "fontColorWhite" : ""}`}>
										Contact
									</Nav.Link>
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
