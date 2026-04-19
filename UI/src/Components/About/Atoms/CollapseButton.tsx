"use client";

import React from "react";

interface CollapseButtonProps {
	onClick: () => void;
	showCollapse: boolean;
}

function CollapseButton({ onClick, showCollapse }: CollapseButtonProps) {
	return (
		<div className="collapseSplitLeft" onClick={onClick}>
			<i className={`${showCollapse ? "fa-sharp fa-solid fa-xmark" : "fa-solid fa-bars"}`}></i>
		</div>
	);
}

export default CollapseButton;
