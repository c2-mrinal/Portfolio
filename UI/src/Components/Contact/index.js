import React, { useState } from "react";
import "./contact.css";
import MailPopUp from "./MailPopUp";
import arrowPointing from "../../image/ArrowPointing.gif";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faLinkedinIn,
//   faInstagram,
//   faTwitter,
//   faGithub,
// } from "@fortawesome/free-solid-svg-brands";

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
							<div className="contactBoxContent ">
								<div className=" row">
									<div className="col-sm-12 col-lg-6">
										<h1>Mail</h1>
										<div className="typewriter" onClick={handleMailPopup}>
											<h1>Type...</h1>
										</div>
									</div>
									<div className="col-sm-12 col-lg-6">
										<h1>Social</h1>
										<div className="socialIcons d-flex justify-content-evenly">
											<a
												href={"https://www.linkedin.com/in/mrinal-kasyap-695853171/"}
												target="_blank"
												rel="noreferrer"
												title="Linkedin"
											>
												<span className="contactIcon linkedin">
													<i className="fa fa-brands fa-linkedin-in"></i>
												</span>
											</a>
											<a href={"https://twitter.com/mrinal_kasyap"} target="_blank" rel="noreferrer" title="Twitter">
												<span className="contactIcon twitter">
													<i className="fa fa-brands fa-twitter"></i>
												</span>{" "}
											</a>
											<a
												href={"https://instagram.com/c2_mrinal?igshid=YmMyMTA2M2Y="}
												target="_blank"
												rel="noreferrer"
												title="Instagram"
											>
												<span className="contactIcon instagram">
													<i className="fa fa-brands fa-instagram"></i>
												</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="downArrow">
						<div className="downArrowContainer">
							<img src={arrowPointing} className="pointingArrow" alt="error" />
						</div>
					</div>
				</section>
				<section>
					<div className="contactBG">
						<div className="contactBox">
							<div className="contactBoxContent row justify-content-center">
								<span className="col-sm-12 col-md-12 col-lg-3">
									<a href={"https://github.com/c2-mrinal"} target="_blank" rel="noreferrer" title="Github">
										<span className="contactIcon github">
											<i className="fa fa-brands fa-github"></i>
										</span>
									</a>
								</span>
								<span className="col-sm-12 col-md-12 col-lg-3">
									<a
										href={"https://stackoverflow.com/users/14725561/c2-mrinal"}
										rel="noreferrer"
										target="_blank"
										title="Stack Overflow"
									>
										<span className="contactIcon stackoverflow">
											<i className="fa fa-brands fa-stack-overflow"></i>
										</span>
									</a>
								</span>
								<span className="col-sm-12 col-md-12 col-lg-3">
									<a
										href={"https://www.hackerrank.com/mrinalspec"}
										target="_blank"
										rel="noreferrer"
										title="Hacker Rank"
									>
										<span className="contactIcon hackerrank">
											<i className="fa fa-brands fa-hackerrank"></i>
										</span>
									</a>
								</span>
								<span className="col-sm-12 col-md-12 col-lg-3">
									<a href={"https://codepen.io/c2-mrinal"} target="_blank" rel="noreferrer" title="Codepen">
										<span className="contactIcon github" title="Codepen">
											<i className="fa fa-brands fa-codepen"></i>
										</span>
									</a>
								</span>
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
