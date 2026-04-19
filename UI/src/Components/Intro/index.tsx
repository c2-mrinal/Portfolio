"use client";

import React, { useState, useRef } from "react";
import "./intro.css";
import { useSelector } from "react-redux";
import Loader from "../../Shared/Loader";
import IntroHero from "./Organisms/IntroHero";
import CursorNavigationGroup from "./Organisms/CursorNavigationGroup";
import ErrorBoundary from "../../Shared/ErrorBoundry";
import IntroBgSvg from "../../Shared/SVG/IntroBgSvg";

function Intro() {
	const [downloading, setDownloading] = useState(false);
	const [downloadSuccess, setDownloadSuccess] = useState(false);
	// Fixed hook state setting bounds accurately resolving memory mapping crashes.
	const [pointerComp, setPointerComp] = useState<boolean[]>([false, false, false, false]);
	const [loading, setLoading] = useState(false);
	const isTouchDevice = useSelector((state: any) => state.deviceTypeTouch || false);
	const WrapperRef = useRef<HTMLDivElement>(null);

	const downloadResume = async () => {
		setDownloading(true);
		setTimeout(async () => {
			setLoading(true);
			try {
				let response: any = await fetch("/api/resume");
				if (response?.ok) {
					response = await response.json();
				}
				if (response?.success) {
					let alink = document.createElement("a");
					alink.href = response.data.url;
					alink.click();
					setDownloadSuccess(true);
					setTimeout(() => setDownloadSuccess(false), 4000);
				} else {
					console.warn(response.statusText || response.message);
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
		<div className="c2-home">
			
			{loading && <Loader />}
			<div className="myVideo">
				<IntroBgSvg />
			</div>
			
			<ErrorBoundary hide={true}>
				<div ref={WrapperRef}>
					<IntroHero 
						downloading={downloading} 
						downloadSuccess={downloadSuccess} 
						downloadResume={downloadResume} 
					/>
				</div>
			</ErrorBoundary>

			<ErrorBoundary hide={true}>
				{!isTouchDevice && <div className="cursorAnimationText">Move Your Cursor Below to have Some Fun</div>}
				<CursorNavigationGroup pointerComp={pointerComp} setPointerComp={setPointerComp} />
			</ErrorBoundary>

		</div>
	);
}

export default Intro;
