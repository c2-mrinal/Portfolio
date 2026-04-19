"use client";

import React, { useState, useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";

import "./about.css";
import LeftPanel from "./Organisms/LeftPanel";
import RightPanel from "./Organisms/RightPanel";
import CollapseButton from "./Atoms/CollapseButton";

import { sharedKeywords } from "../../Shared/Static/data";

function About() {
	const [selectedFolder, setSelectedFolder] = useState<any>("");
	const [showCollpase, setShowCollpase] = useState(false);
	const [displayVisual, setDisplayVisual] = useState(false);
	const selectedFolderStore = useSelector((state: any) => state.folderIs);

	const leftSplit = () => {
		setShowCollpase(!showCollpase);
	};
	
	useLayoutEffect(() => {
		function updateSize() {
			if (window.innerWidth < 990) {
				setDisplayVisual(true);
			} else {
				setDisplayVisual(false);
			}
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	useEffect(() => {
		setShowCollpase(false);
	}, [selectedFolderStore]);

	return (
		<div className="about-cointainer">
			
			<div className={`splitLeft ${!displayVisual ? "splitLeftWidth20" : "splitLeftMinWidth"}`}>
				<LeftPanel selectFolder={setSelectedFolder} display={!displayVisual || showCollpase} />
				{displayVisual && (
					<CollapseButton onClick={leftSplit} showCollapse={showCollpase} />
				)}
			</div>

			<div className="splitRight">
				<RightPanel />
				<div className="splitBottomspacing"></div>
			</div>
		</div>
	);
}

export default About;
