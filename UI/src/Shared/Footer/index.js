import React from "react";

function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<>
			<footer className="text-center text-lg-start text-white" style={{ backgroundColor: "#3e4551" }}>
				<div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
					© {currentYear} Copyright:
					<a className="text-white" href="www.mrinalkasyap.com">
						MrinalKasyap.com
					</a>
					, All rights reserved.
				</div>
			</footer>
		</>
	);
}

export default Footer;
