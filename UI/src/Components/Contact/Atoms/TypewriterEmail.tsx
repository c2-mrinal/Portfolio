"use client";
import React from "react";

interface TypewriterEmailProps {
	onClick: () => void;
}

const TypewriterEmail: React.FC<TypewriterEmailProps> = ({ onClick }) => {
	return (
		<div className="col-sm-12 col-lg-6">
			<h1>Mail</h1>
			<div className="typewriter" onClick={onClick} role="button" tabIndex={0}>
				<h1>Type...</h1>
			</div>
		</div>
	);
};

export default TypewriterEmail;
