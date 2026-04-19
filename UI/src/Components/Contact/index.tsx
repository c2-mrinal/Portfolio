"use client";

import React, { useState } from "react";
import "./contact.css";
import MailPopUp from "./Organisms/MailPopUp";
import TypewriterEmail from "./Atoms/TypewriterEmail";
import ScrollArrow from "./Atoms/ScrollArrow";
import SocialGroup from "./Molecules/SocialGroup";
import WorkGroup from "./Molecules/WorkGroup";

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
									<TypewriterEmail onClick={toggleMailPopup} />
									<SocialGroup />
								</div>
							</div>
						</div>
					</div>
					<ScrollArrow />
				</section>

				<WorkGroup />
			</div>

			<MailPopUp show={isMailPopupVisible} hide={toggleMailPopup} />
		</div>
	);
};

export default Contact;
