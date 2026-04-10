import React from "react";

function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<>
			<footer className="text-center text-lg-start text-white" style={{ backgroundColor: "#3e4551" }}>
				<div
					className="text-center p-2 row"
					style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", fontSize: "calc(0.6rem + 1vw)" }}
				>
					<div className="col-sm-12 ">
						© {currentYear} Copyright:
						<a className="text-white" href="https://mrinalkasyap.com" target="_blank" rel="noopener noreferrer">
							MrinalKasyap.com
						</a>
						,{" "}
					</div>
					<div className="col-sm-12 ">All rights reserved.</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
