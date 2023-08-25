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

function Intro(props) {
	const [downloading, setDownloading] = useState(false);
	const [downloadSuccess, setDownloadSuccess] = useState(false);
	const [pointerComp, setPointerComp] = useState([false, false, false, false]);
	const [loading, setLoading] = useState(false);
	const isTouchDevice = useSelector((state) => state.deviceTypeTouch || false);
	const pointerImage = useProgressiveImage(
		"https://drive.google.com/uc?export=view&id=1DogaiT31_9vkDL6nlXe1qsSr47svQPZE"
	);
	const intoBGVid = useProgressiveImage("");

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
				<video autoPlay muted loop className="videoDimension">
					<source
						src={"https://drive.google.com/uc?export=view&id=1WKIIMwcY-2GKVUcVjCi_IRQYkascvyna"}
						type="video/mp4"
					/>
				</video>
			</div>
			<section className=" intoSection ">
				<div className="resumeDownloadContainer">
					<div
						className={`btn-circle-download  ${downloading ? "load" : ""} ${downloadSuccess ? "done" : ""}`}
						onClick={downloadResume}
						title={downloadSuccess ? "Resume Dowloaded " : "Download Mrinal's Resume"}
					>
						<svg id="arrow" viewBox="17 14 14 20">
							<path d="M24,15 L24,32"></path>
							<polyline points="30 27 24 33 18 27"></polyline>
						</svg>
						<svg id="check" viewBox="13 17 21 15">
							<polyline points="32.5 18.5 20 31 14.5 25.5"></polyline>
						</svg>
						<svg id="border" viewBox="0 0 48 48">
							<path d="M20,3 L24,3 L24,3 C36.7025492,3 49,11.2974508 49,24 L49,24 L49,25 C49,36.7025492 36.7025492,46 24,46 L24,46 L24,46 C11.2974508,45 0,36.7025492 0,24 L0,24 L0,20 C0,1.2974508 1.2974508,3 20,3 L24,3 L25,3 L26,3 Z"></path>{" "}
						</svg>
					</div>
					<div>
						<img
							src={pointerImage}
							className="pointingArrow"
							style={{ display: `${pointerImage ? "block" : "none"}` }}
							alt="error"
						/>
					</div>
				</div>
				<div className="intoDesciption ">
					<h1 className="introHeader1">
						{["h", "e", "l", "l", "o", "", "!"].map((val, ind) => {
							return (
								<span className={"text" + ind} style={{ left: `${ind * 3.5}vw` }}>
									{" "}
									{val}{" "}
								</span>
							);
						})}
					</h1>
					<h1 className="introHeader2">
						{["I", "", "a", "m", "", "M", "r", "i", "n", "a", "l", "", "K", "a", "s", "y", "a", "p"].map((val, ind) => {
							return (
								<span className="" style={{ left: `${[6, 7].includes(ind) ? ind * 3.5 + 0.5 : ind * 3.5}vw` }}>
									{val}
								</span>
							);
						})}
					</h1>
					<h1 className="introHeader3">
						{["m", "e", "r", "n", "", "D", "e", "v", "e", "l", "o", "p", "e", "r"].map((val, ind) => {
							return (
								<span className="" style={{ left: `${[1].includes(ind) ? ind * 3.5 + 0.5 : ind * 3.5}vw` }}>
									{val}
								</span>
							);
						})}
					</h1>
					<h1 className="introHeader4">
						{[
							"D",
							"e",
							"v",
							"e",
							"l",
							"o",
							"p",
							"i",
							"n",
							"g",
							"",
							"t",
							"h",
							"e",
							"",
							"c",
							"h",
							"a",
							"n",
							"g",
							"e",
						].map((val, ind) => {
							return (
								<span className="" style={{ left: `${ind * 3.5}vw` }}>
									{val}
								</span>
							);
						})}
					</h1>
					<h1 className="introHeader5">
						{["U", "&", "I", "", "n", "e", "e", "d", "s", ". . ."].map((val, ind) => {
							return (
								<span className={"text" + ind} style={{ left: `${ind * 3.5}vw` }}>
									{val}
								</span>
							);
						})}
					</h1>
				</div>
			</section>
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
			<Footer />{" "}
		</>
	);
}

export default Intro;
