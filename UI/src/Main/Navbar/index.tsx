"use client";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";

import allActions from "../../actions";
import Logo from "../../image/LOGO.png";
import "./navbar.css";

const Header = () => {
	const dispatch = useDispatch();
	const pathname = usePathname();
    const router = useRouter();

	const [isHome, setIsHome] = useState(true);
	const [menuOpen, setMenuOpen] = useState(false);

	// Detect device type (run once)
	useEffect(() => {
		const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0 || (navigator as any).msMaxTouchPoints > 0;
		dispatch(allActions.deviceType(isTouchDevice));
	}, [dispatch]);

	// Update path state
	useEffect(() => {
		setIsHome(pathname === "/");
	}, [pathname]);

	const toggleMenu = () => setMenuOpen((prev) => !prev);

	const handleNavigation = (path) => {
		router.push(path);
		setMenuOpen(false);
	};

	const routes = [
		{ path: "/", label: "Home" },
		{ path: "/skill", label: "Skills" },
		{ path: "/career", label: "Career" },
		{ path: "/about", label: "About" },
		{ path: "/contact", label: "Contact" },
	];

	return (
		<Navbar className="nav-container bg-transparent shadow-none !absolute top-0 w-full z-50" maxWidth="full" position="static">
			<NavbarBrand className="navbar-brand cursor-pointer" onClick={() => handleNavigation("/")}>
				<img className="logo-img" src={Logo.src} alt="Site Logo" />
			</NavbarBrand>

			<NavbarContent justify="end" className="justify-content-end">
				<button className="collapseMenuContainer" onClick={toggleMenu} aria-label="Toggle navigation menu">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 573 495"
						className={`menuIcon ${!menuOpen ? "menuContainerExpand" : ""}`}
					>
						<g transform="translate(0,495) scale(0.1,-0.1)" fill="#7A5B84">
							<path d="M1055 3885 c-152 -53 -158 -297 -8 -361 48 -21 3657 -21 3706 0 156 65 142 320 -20 365 -26 8 -592 11 -1838 11 -1519 -1 -1806 -3 -1840 -15z" />
							<path d="M1050 2703 c-130 -49 -154 -262 -38 -345 l33 -23 1549 -3 1549 -2 43 25 c113 66 113 264 0 330 l-43 25 -1539 -1 c-846 0 -1546 -3 -1554 -6z" />
							<path d="M1045 1516 c-47 -20 -92 -78 -104 -134 -22 -104 33 -205 126 -231 57 -16 1842 -15 1896 1 155 46 170 292 23 359 -39 18 -85 19 -976 18 -750 0 -941 -2 -965 -13z" />
						</g>
					</svg>
				</button>

				{menuOpen && (
					<div className="menuListContainer">
						{routes.map((route, idx) => (
							<div className={`menuList${idx}`} key={route.path}>
								<Link
									href={route.path}
									onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation(route.path);
                                    }}
									className={isHome ? "fontColorWhite" : ""}
								>
									{route.label}
								</Link>
							</div>
						))}
					</div>
				)}
			</NavbarContent>
		</Navbar>
	);
};

export default Header;
