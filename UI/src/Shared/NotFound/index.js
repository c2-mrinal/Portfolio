import React from "react";
import Nav from "react-bootstrap/Nav";
import "./NotFound.css";

function NotFound() {
	return (
		<div className="notFound">
			<div className="notFoundEmoji" role="img" aria-label="lost emoji">
				😵‍💫
			</div>
			<div>
				<strong>Oh No! Page Not Found.</strong>
			</div>
			<div className="contactLink">
				<Nav.Link href="/contact">Contact Path Support</Nav.Link>
			</div>
		</div>
	);
}

export default NotFound;
