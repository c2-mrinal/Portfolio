import React from "react";
import { Link } from "@nextui-org/react";
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
				<Link href="/contact">Contact Path Support</Link>
			</div>
		</div>
	);
}

export default NotFound;
