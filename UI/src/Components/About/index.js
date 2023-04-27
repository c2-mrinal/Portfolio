import React, { useState, useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";

import "./about.css";
import LeftPanel from "./Panel/LeftPanel";
import RightPanel from "./Panel/RightPanel";

function About() {
	const [selectedFolder, setSelectedFolder] = useState("");
	const [showCollpase, setShowCollpase] = useState(false);
	const [displayVisual, setDisplayVisual] = useState(false);
	const selectedFolderStore = useSelector((state) => state.folderIs);

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
					<div className="collapseSplitLeft" onClick={leftSplit}>
						<i className={`${showCollpase ? "fa-sharp fa-solid fa-xmark" : "fa-solid fa-bars"}`}></i>
					</div>
				)}
			</div>

			<div className="splitRight">
				<RightPanel selectedFolder={selectedFolder} />
				<div className="splitBottomspacing"></div>
			</div>
		</div>
	);
}

export default About;
