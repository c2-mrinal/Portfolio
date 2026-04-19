import React from "react";
import SocialIcon from "../Atoms/SocialIcon";

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

const WorkGroup: React.FC = () => {
	return (
		<section>
			<div className="contactBG">
				<div className="contactBox">
					<div className="contactBoxContent workIcon row justify-content-around">
						{workLinks.map((link) => (
							<div key={link.label} className="col-sm-12 col-md-6 col-lg-3">
								<SocialIcon {...link} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default WorkGroup;
