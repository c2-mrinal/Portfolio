import React, { useState } from "react";
import "./about.css";
import LeftPanel from "./Panel/LeftPanel";
import RightPanel from "./Panel/RightPanel";

function About() {
	const [selectedFolder, setSelectedFolder] = useState("");

	return (
		<div className="about-cointainer">
			<div className="splitLeft ">
				<LeftPanel selectFolder={setSelectedFolder} />
			</div>

			<div className="splitRight">
				<RightPanel selectedFolder={selectedFolder} />
			</div>
		</div>
	);
}

export default About;
