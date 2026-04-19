import React from "react";
import SocialIcon from "../Atoms/SocialIcon";

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

const SocialGroup: React.FC = () => {
	return (
		<div className="col-sm-12 col-lg-6">
			<h1>Social</h1>
			<div className="socialIcons d-flex justify-content-around">
				{socialLinks.map((link) => (
					<SocialIcon key={link.label} {...link} />
				))}
			</div>
		</div>
	);
};

export default SocialGroup;
