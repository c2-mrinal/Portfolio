import React, { useState } from "react";
import "./contact.css";
import MailPopUp from "./MailPopUp";

function Contact() {
	const [DisplayMailPopup, setDisplayMailPopup] = useState(false);
	const handleMailPopup = () => {
		setDisplayMailPopup(!DisplayMailPopup);
	};

	return (
		<>
			<div className="contactContainer">
				<section>
					<div className="contactBG">
						<div className="contactBox ">
							<div className="contactBoxContent row justify-content-around">
								<div className=" row">
									<div className="col-sm-12 col-lg-6">
										<h1>Mail</h1>
										<div className="typewriter" onClick={handleMailPopup}>
											<h1>Type...</h1>
										</div>
									</div>
									<div className="col-sm-12 col-lg-6">
										<h1>Social</h1>
										<div className="socialIcons d-flex justify-content-around">
											<a href={"https://www.linkedin.com/in/mrinal-kasyap-695853171/"} target="_blank" rel="noreferrer">
												<div className="contactIcon linkedin">
													<i className="fa fa-brands fa-linkedin-in"></i>
													<div className="iconHandle">LINKEDIN</div>
												</div>
											</a>
											<a href={"https://instagram.com/c2_mrinal?igshid=YmMyMTA2M2Y="} target="_blank" rel="noreferrer">
												<div className="contactIcon instagram">
													<i className="fa fa-brands fa-instagram"></i>
													<div className="iconHandle">INSTAGRAM</div>
												</div>
											</a>
											<a href={"https://twitter.com/mrinal_kasyap"} target="_blank" rel="noreferrer">
												<div className="contactIcon twitter">
													<i className="fa-brands fa-square-x-twitter"></i> <div className="iconHandle">TWITTER</div>
												</div>{" "}
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="downArrow">
						<div className="downArrowContainer">
							<img
								src={
									"https://raw.githubusercontent.com/c2-mrinal/PROJECT_IMAGES/main/Portfolio/Images/logos/ArrowPointing.gif"
								}
								className="pointingArrow"
								alt="error"
							/>
						</div>
					</div>
				</section>
				<section>
					<div className="contactBG">
						<div className="contactBox">
							<div className="contactBoxContent workIcon row justify-content-around">
								<div className="col-sm-12 col-md-6 col-lg-3">
									<a href={"https://github.com/c2-mrinal"} target="_blank" rel="noreferrer">
										<div className="contactIcon github">
											<i className="fa fa-brands fa-github"></i>
											<div className="iconHandle">GITHUB</div>
										</div>
									</a>
								</div>
								<div className="col-sm-12 col-md-6 col-lg-3">
									<a href={"https://stackoverflow.com/users/14725561/c2-mrinal"} rel="noreferrer" target="_blank">
										<div className="contactIcon stackoverflow">
											<i className="fa fa-brands fa-stack-overflow"></i>
											<div className="iconHandle">STACKOVERFLOW</div>
										</div>
									</a>
								</div>
								<div className="col-sm-12 col-md-6 col-lg-3">
									<a href={"https://www.hackerrank.com/mrinalspec"} target="_blank" rel="noreferrer">
										<div className="contactIcon hackerrank">
											<i className="fa fa-brands fa-hackerrank"></i>
											<div className="iconHandle">HACKERRANK</div>
										</div>
									</a>
								</div>
								<div className="col-sm-12 col-md-6 col-lg-3">
									<a href={"https://codepen.io/c2-mrinal"} target="_blank" rel="noreferrer">
										<div className="contactIcon github">
											<i className="fa fa-brands fa-codepen"></i>
											<div className="iconHandle">CODEPEN</div>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<MailPopUp show={DisplayMailPopup} hide={handleMailPopup} />
		</>
	);
}

export default Contact;
