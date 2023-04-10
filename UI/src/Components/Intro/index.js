import React, { useState, useEffect, useRef } from "react";
import "./intro.css";
import invertedArrowPointing from "../../image/invertedArrowPointing.gif";
import backgroundMain from "../../image/backgroundMain.mp4";
import Footer from "../../Shared/Footer";
import ContactBG from "./CursorComponents/ContactBG";
import AboutBG from "./CursorComponents/AboutBG";
import SkillBG from "./CursorComponents/SkillBG";
import CareerBG from "./CursorComponents/CareerBG";

function Intro(props) {
	const [Downloading, setDownloading] = useState(false);
	const [downloadSucess, setdownloadSucess] = useState(false);
	const skillWrapperRef = useRef(null);

	const downloadResume = async () => {
		setDownloading(true);
		setTimeout(async () => {
			let response = await fetch("/api/resume");
			response = await response.json();
			if (response.success) {
				let alink = document.createElement("a");
				alink.href = response.data.url;
				alink.click();
				setdownloadSucess(true);
				setTimeout(async () => setdownloadSucess(false), 4000);
			} else {
				setdownloadSucess(false);
			}
			setDownloading(false);
		}, 1000);
	};

	return (
		<div>
			<div className="myVideo">
				<video autoPlay muted loop className="videoDimension">
					<source src={backgroundMain} type="video/mp4" />
				</video>
			</div>
			<section className=" intoSection">
				<div className="resumeDownloadContainer">
					<div
						className={`btn-circle-download ${Downloading ? "load" : ""} ${downloadSucess ? "done" : ""}`}
						onClick={downloadResume}
						title={downloadSucess ? "Resume Dowloaded " : "Download Mrinal's Resume"}
					>
						<svg id="arrow" viewBox="17 14 14 20">
							<path d="M24,15 L24,32"></path>
							<polyline points="30 27 24 33 18 27"></polyline>
						</svg>
						<svg id="check" viewBox="13 17 21 15">
							<polyline points="32.5 18.5 20 31 14.5 25.5"></polyline>
						</svg>
						<svg id="border" viewBox="0 0 48 48">
							<path d="M24,1 L24,1 L24,1 C36.7025492,1 47,11.2974508 47,24 L47,24 L47,24 C47,36.7025492 36.7025492,47 24,47 L24,47 L24,47 C11.2974508,47 1,36.7025492 1,24 L1,24 L1,24 C1,11.2974508 11.2974508,1 24,1 L24,1 Z"></path>
						</svg>
					</div>
					<div>
						<img src={invertedArrowPointing} className="pointingArrow" alt="error" />
					</div>
				</div>
				<div className="intoDesciption">
					<h1>Hello !</h1>
					<h1> I am Mrinal Kasyap</h1>
					<h1> JavaScript Developer</h1>
					<h1> Developing the change U I need ...</h1>
				</div>
			</section>
			<section className="row">
				<div className="col-sm-3 col-lg-3">
					<CareerBG />
				</div>
				<div className="col-sm-3 col-lg-3" ref={skillWrapperRef}>
					<SkillBG />
				</div>
				<div className="col-sm-3 col-lg-3">
					<AboutBG />
				</div>
				<div className="col-sm-3 col-lg-3">
					<ContactBG />
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default Intro;
