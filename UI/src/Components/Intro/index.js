import React, { useState } from "react";
import "./intro.css";
import { useSelector } from "react-redux";
import Footer from "../../Shared/Footer";
import ContactBG from "./CursorComponents/ContactBG";
import AboutBG from "./CursorComponents/AboutBG";
import SkillBG from "./CursorComponents/SkillBG";
import CareerBG from "./CursorComponents/CareerBG";
import Loader from "../../Shared/Loader";

function Intro(props) {
	const [downloading, setDownloading] = useState(false);
	const [downloadSuccess, setDownloadSuccess] = useState(false);
	const [pointerComp, setPointerComp] = useState([false, false, false, false]);
	const [loading, setLoading] = useState(false);
	const isTouchDevice = useSelector((state) => state.deviceTypeTouch || false);

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
			<section className=" intoSection d-flex flex-direction-column">
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
							src={"https://drive.google.com/uc?export=view&id=1DogaiT31_9vkDL6nlXe1qsSr47svQPZE"}
							className="pointingArrow"
							alt="error"
						/>
					</div>
				</div>
				<div className="intoDesciption">
					<h1>
						<span>H</span>
						<span>e</span>
						<span>l</span>
						<span>l</span>
						<span>o</span>
						<span> !</span>
					</h1>
					<h1>
						<span> I</span>
						<span> a</span>
						<span>m</span>
						<span> M</span>
						<span>r</span>
						<span>i</span>
						<span>n</span>
						<span>a</span>
						<span>l</span>
						<span> K</span>
						<span>a</span>
						<span>s</span>
						<span>y</span>
						<span>a</span>
						<span>p</span>
					</h1>
					<h1>
						<span>J</span>
						<span>a</span>
						<span>v</span>
						<span>a</span>
						<span>S</span>
						<span>c</span>
						<span>r</span>
						<span>i</span>
						<span>p</span>
						<span>t</span>
						<span> D</span>
						<span>e</span>
						<span>v</span>
						<span>e</span>
						<span>l</span>
						<span>o</span>
						<span>p</span>
						<span>e</span>
						<span>r</span>
					</h1>
					<h1>
						<span>D</span>
						<span>e</span>
						<span>v</span>
						<span>e</span>
						<span>l</span>
						<span>o</span>
						<span>p</span>
						<span>i</span>
						<span>n</span>
						<span>g</span>
						<span> t</span>
						<span>h</span>
						<span>e</span>
						<span> c</span>
						<span>h</span>
						<span>a</span>
						<span>n</span>
						<span>g</span>
						<span>e</span>
						<span> U</span>
						<span>&</span>
						<span>I</span>
						<span> n</span>
						<span>e</span>
						<span>e</span>
						<span>d</span>
						<span>s</span>
						<span> ...</span>
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
