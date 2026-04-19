import React from "react";

interface SocialIconProps {
	label: string;
	url: string;
	iconClass: string;
	className: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ label, url, iconClass, className }) => {
	return (
		<a href={url} target="_blank" rel="noreferrer">
			<div className={`contactIcon ${className}`}>
				<i className={`fa fa-brands ${iconClass}`}></i>
				<div className="iconHandle">{label}</div>
			</div>
		</a>
	);
};

export default SocialIcon;
