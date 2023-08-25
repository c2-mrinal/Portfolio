import React, { useState } from "react";
import "./intro.css";
import { useSelector } from "react-redux";
import Footer from "../../Shared/Footer";
import ContactBG from "./CursorComponents/ContactBG";
import AboutBG from "./CursorComponents/AboutBG";
import SkillBG from "./CursorComponents/SkillBG";
import CareerBG from "./CursorComponents/CareerBG";
import Loader from "../../Shared/Loader";

import { useProgressiveImage } from "../../Shared/CustomHooks";
import IntroSection from "./IntroSection";
import ErrorBoundary from "../../Shared/ErrorBoundry";

function Intro(props) {
	const [downloading, setDownloading] = useState(false);
	const [downloadSuccess, setDownloadSuccess] = useState(false);
	const [pointerComp, setPointerComp] = useState([false, false, false, false]);
	const [loading, setLoading] = useState(false);
	const isTouchDevice = useSelector((state) => state.deviceTypeTouch || false);
	const intoBGVid = useProgressiveImage("https://drive.google.com/uc?export=view&id=1WKIIMwcY-2GKVUcVjCi_IRQYkascvyna");

	const downloadResume = async () => {
		setDownloading(true);
		setTimeout(async () => {
			setLoading(true);
			try {
				let response = await fetch("/api/resume");
				if (response?.ok) {
					response = await response.json();
				}
				if (response.success) {
					let alink = document.createElement("a");
					alink.href = response.data.url;
					alink.click();
					setDownloadSuccess(true);
					setTimeout(() => setDownloadSuccess(false), 4000);
				} else {
					console.log(response.statusText || response.message);
				}
			} catch (error) {
				console.error("An error occurred:", error);
			} finally {
				setLoading(false);
				setDownloading(false);
			}
		}, 1000);
	};

	return (
		<>
			{loading && <Loader />}
			<div className="myVideo">
				<video autoPlay muted loop className="videoDimension" style={{ display: `${intoBGVid ? "block" : "none"}` }}>
					<source src={intoBGVid} type="video/mp4" />
				</video>
			</div>
			<ErrorBoundary hide={true}>
				<IntroSection downloading={downloading} downloadSuccess={downloadSuccess} downloadResume={downloadResume} />
			</ErrorBoundary>
			<ErrorBoundary hide={true}>
				{!isTouchDevice && <div className="cursorAnimationText">Move Your Cursor Below to have Some Fun</div>}
				<div className="row justify-content-start ">
					<div className="col-sm-12 col-md-6 col-lg-3 cursorAnimationSection">
						<ContactBG pointerComp={pointerComp} setPointerComp={setPointerComp} />
					</div>
					<div className=" col-sm-12 col-md-6 col-lg-3 cursorAnimationSection ">
						<CareerBG pointerComp={pointerComp} setPointerComp={setPointerComp} />
					</div>
					<div className=" col-sm-12 col-md-6 col-lg-3 cursorAnimationSection">
						<SkillBG pointerComp={pointerComp} setPointerComp={setPointerComp} />
					</div>
					<div className=" col-sm-12 col-md-6 col-lg-3 cursorAnimationSection">
						<AboutBG pointerComp={pointerComp} setPointerComp={setPointerComp} />
					</div>
				</div>
			</ErrorBoundary>
			<Footer />{" "}
		</>
	);
}

export default Intro;
