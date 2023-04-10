import React, { useRef, useEffect } from "react";
import Nav from "react-bootstrap/Nav";

function AboutBG() {
	const AboutWrapperRef = useRef(null);

	return (
		<>
			<div className="cursorAnimation aboutbg" ref={AboutWrapperRef}></div>
			<Nav.Link className="careerPageDetail" href="/about">
				<div className="introCursorButton">
					<h3>About</h3>
				</div>
			</Nav.Link>
		</>
	);
}

export default AboutBG;
