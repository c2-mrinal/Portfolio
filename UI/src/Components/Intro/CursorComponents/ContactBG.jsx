import React, { useRef, useEffect } from "react";
import Nav from "react-bootstrap/Nav";

function ContactBG() {
	const ContactWrapperRef = useRef(null);

	return (
		<>
			<div className="cursorAnimation contactbg" ref={ContactWrapperRef}></div>

			<Nav.Link className="careerPageDetail" href="/contact">
				<div className=" introCursorButton">
					<h3>Contact</h3>
					Spotlight Cursor Text Screen
				</div>
			</Nav.Link>
		</>
	);
}

export default ContactBG;
