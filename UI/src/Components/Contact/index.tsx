import React, { useState } from "react";
import "./contact.css";
import MailPopUp from "./MailPopUp";

import { sharedKeywords } from "../../Shared/Static/data";

const socialLinks = [
	{
		label: "LINKEDIN",
		url: "https://www.linkedin.com/in/mrinal-kasyap-695853171/",
		iconClass: "fa-linkedin-in",
		className: "linkedin",
	},
	{
		label: "INSTAGRAM",
		url: "https://instagram.com/c2_mrinal?igshid=YmMyMTA2M2Y=",
		iconClass: "fa-instagram",
		className: "instagram",
	},
	{
		label: "TWITTER",
		url: "https://twitter.com/mrinal_kasyap",
		iconClass: "fa-square-x-twitter",
		className: "twitter",
	},
];

const workLinks = [
	{
		label: "GITHUB",
		url: "https://github.com/c2-mrinal",
		iconClass: "fa-github",
		className: "github",
	},
	{
		label: "STACKOVERFLOW",
		url: "https://stackoverflow.com/users/14725561/c2-mrinal",
		iconClass: "fa-stack-overflow",
		className: "stackoverflow",
	},
	{
		label: "HACKERRANK",
		url: "https://www.hackerrank.com/mrinalspec",
		iconClass: "fa-hackerrank",
		className: "hackerrank",
	},
	{
		label: "CODEPEN",
		url: "https://codepen.io/c2-mrinal",
		iconClass: "fa-codepen",
		className: "github",
	},
];

const Contact = () => {
	const [isMailPopupVisible, setIsMailPopupVisible] = useState(false);

	const toggleMailPopup = () => {
		setIsMailPopupVisible((prev) => !prev);
	};

	return (
		<div className="c2-contact contact-container">
			
			<div className="contactContainer">
				<section>
					<div className="contactBG">
						<div className="contactBox">
							<div className="contactBoxContent row justify-content-around">
								<div className="row">
									<div className="col-sm-12 col-lg-6">
										<h1>Mail</h1>
										<div className="typewriter" onClick={toggleMailPopup} role="button" tabIndex={0}>
											<h1>Type...</h1>
										</div>
									</div>
									<div className="col-sm-12 col-lg-6">
										<h1>Social</h1>
										<div className="socialIcons d-flex justify-content-around">
											{socialLinks.map(({ label, url, iconClass, className }) => (
												<a key={label} href={url} target="_blank" rel="noreferrer">
													<div className={`contactIcon ${className}`}>
														<i className={`fa fa-brands ${iconClass}`}></i>
														<div className="iconHandle">{label}</div>
													</div>
												</a>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="downArrow">
						<div className="downArrowContainer">
							<img
								src="https://raw.githubusercontent.com/c2-mrinal/PROJECT_IMAGES/main/Portfolio/Images/logos/ArrowPointing.gif"
								className="pointingArrow"
								alt="Scroll down"
							/>
						</div>
					</div>
				</section>

				<section>
					<div className="contactBG">
						<div className="contactBox">
							<div className="contactBoxContent workIcon row justify-content-around">
								{workLinks.map(({ label, url, iconClass, className }) => (
									<div key={label} className="col-sm-12 col-md-6 col-lg-3">
										<a href={url} target="_blank" rel="noreferrer">
											<div className={`contactIcon ${className}`}>
												<i className={`fa fa-brands ${iconClass}`}></i>
												<div className="iconHandle">{label}</div>
											</div>
										</a>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
			</div>

			<MailPopUp show={isMailPopupVisible} hide={toggleMailPopup} />
		</div>
	);
};

export default Contact;
