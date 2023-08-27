import React, { useState } from "react";
import "./intro.css";
import { useSelector } from "react-redux";
import Loader from "../../Shared/Loader";
import IntroSection from "./IntroSection";
import IntroBg from "../../image/IntroBg.mp4";
import { useProgressiveImage } from "../../Shared/CustomHooks";
import ErrorBoundary from "../../Shared/ErrorBoundry";
import CursorComponent from "./CursorComponents/CursorComponent";

function Intro(props) {
	const [downloading, setDownloading] = useState(false);
	const [downloadSuccess, setDownloadSuccess] = useState(false);
	const [pointerComp, setPointerComp] = useState(0);
	const [loading, setLoading] = useState(false);
	const isTouchDevice = useSelector((state) => state.deviceTypeTouch || false);
	const intoBGVid = useProgressiveImage(IntroBg);

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
				<video id="bg-video" autoPlay muted loop className="videoDimension">
					<source src={IntroBg} type="video/mp4" />
				</video>
			</div>
			<ErrorBoundary hide={true}>
				<IntroSection downloading={downloading} downloadSuccess={downloadSuccess} downloadResume={downloadResume} />
			</ErrorBoundary>
			<ErrorBoundary hide={true}>
				{!isTouchDevice && <div className="cursorAnimationText">Move Your Cursor Below to have Some Fun</div>}
				<div className="cursorAniContainer">
					<div className="cursorAnimationSection ca1">
						<CursorComponent
							pointerCircle={[20]}
							pointerIndex={1}
							pointerComp={pointerComp}
							setPointerComp={setPointerComp}
							href="/career"
							buttonText="Career"
							navClassName="pageDetail"
						/>
					</div>
					<div className="cursorAnimationSection ca2">
						<CursorComponent
							pointerCircle={[50]}
							pointerIndex={2}
							pointerComp={pointerComp}
							setPointerComp={setPointerComp}
							href="/skill"
							buttonText="Skill"
							navClassName="pageDetail"
						/>
					</div>
					<div className="cursorAnimationSection ca3">
						<CursorComponent
							pointerCircle={[10, 20, 30, 40, 50]}
							pointerIndex={3}
							pointerComp={pointerComp}
							setPointerComp={setPointerComp}
							href="/about"
							buttonText="About"
							delay={true}
							navClassName="pageDetail"
						/>
					</div>
					<div className="cursorAnimationSection ca4">
						<CursorComponent
							pointerCircle={[1, 2, 4, 6, 9, 12, 15, 18, 22, 26, 30, 34, 38]}
							sizeFixed={true}
							pointerIndex={4}
							pointerComp={pointerComp}
							setPointerComp={setPointerComp}
							href="/contact"
							buttonText="Contact"
							delay={true}
							navClassName="pageDetail"
						/>
					</div>
				</div>
			</ErrorBoundary>
		</>
	);
}

export default Intro;
