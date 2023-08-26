import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./navbar.css";
import Logo from "../../image/LOGO.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import allActions from "../../actions";

function Header() {
	const [pathOrigin, setPathOrigin] = useState(true);
	const [showMenu, setShowMenu] = useState(false);
	const [showAnimate, setShowAnimate] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		const deviceTypeTouch =
			"ontouchstart" in window || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;
		dispatch(allActions.deviceType(deviceTypeTouch));
	}, []);
	useEffect(() => {
		const path = window.location.pathname;
		if (path.length > 1) {
			setPathOrigin(false);
		} else {
			setPathOrigin(true);
		}
		return () => {};
	}, []);

	return (
		<>
			<Navbar className="nav-container fixed-top" expand="lg">
				<Navbar.Brand className="navbar-brand" href="/">
					<img className="logo-img" src={Logo} alt="Logo" />
				</Navbar.Brand>
				<Container className="justify-content-end">
					<div className={`collapseMenuContainer `} onClick={() => setShowMenu(!showMenu)}>
						<svg
							version="1.0"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 573.000000 495.000000"
							preserveAspectRatio="xMidYMid meet"
							className={`menuIcon ${showMenu ? "" : "menuContainerExpand"}`}
						>
							<g transform="translate(0.000000,495.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
								<path
									d="M1055 3885 c-152 -53 -158 -297 -8 -361 48 -21 3657 -21 3706 0 156
65 142 320 -20 365 -26 8 -592 11 -1838 11 -1519 -1 -1806 -3 -1840 -15z"
								/>
								<path
									d="M1050 2703 c-130 -49 -154 -262 -38 -345 l33 -23 1549 -3 1549 -2 43
25 c113 66 113 264 0 330 l-43 25 -1539 -1 c-846 0 -1546 -3 -1554 -6z"
								/>
								<path
									d="M1045 1516 c-47 -20 -92 -78 -104 -134 -22 -104 33 -205 126 -231 57
-16 1842 -15 1896 1 155 46 170 292 23 359 -39 18 -85 19 -976 18 -750 0 -941
-2 -965 -13z"
								/>
							</g>
						</svg>
					</div>
					{showMenu && (
						<div className="menuListContainer">
							<div className="menuList0">
								<Nav.Link href="/" className={`${pathOrigin ? "fontColorWhite" : ""}`}>
									Home
								</Nav.Link>
							</div>
							<div className="menuList1">
								<Nav.Link href="/skill" className={`${pathOrigin ? "fontColorWhite" : ""}`}>
									Skills
								</Nav.Link>
							</div>
							<div className="menuList2">
								<Nav.Link href="/about" className={`${pathOrigin ? "fontColorWhite" : ""}`}>
									About
								</Nav.Link>
							</div>
							<div className="menuList3">
								<Nav.Link href="/career" className={`${pathOrigin ? "fontColorWhite" : ""}`}>
									Career
								</Nav.Link>
							</div>
							<div className="menuList4">
								<Nav.Link href="/contact" className={`${pathOrigin ? "fontColorWhite" : ""}`}>
									Contact
								</Nav.Link>
							</div>
							<div></div>
						</div>
					)}
				</Container>
			</Navbar>
		</>
	);
}

export default Header;
