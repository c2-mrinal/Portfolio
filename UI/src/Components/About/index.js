import React, { useState, useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";

import "./about.css";
import LeftPanel from "./Panel/LeftPanel";
import RightPanel from "./Panel/RightPanel";
import { Helmet } from "react-helmet-async";
import { sharedKeywords } from "../../Shared/Static/data";

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
			<Helmet>
				<title>About Mrinal Kasyap | Full-Stack Developer Journey</title>
				<meta
					name="description"
					content="Know Mrinal Kasyap’s full journey—career, education, achievements, hobbies, tech stack, and how this MERN portfolio was built and deployed."
				/>
				<meta name="keywords" content={sharedKeywords} />
				<link rel="canonical" href="https://kasyapmrinal.com/about" />
			</Helmet>
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
