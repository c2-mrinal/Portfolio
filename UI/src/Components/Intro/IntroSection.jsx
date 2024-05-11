import React from "react";
import pointerGif from "../../image/invertedArrowPointing.gif";
import { useProgressiveImage } from "../../Shared/CustomHooks";

function IntroSection(props) {
	const pointerImage = useProgressiveImage(pointerGif);

	return (
		<section className=" intoSection ">
			<div className="resumeDownloadContainer">
				<div
					className={`btn-circle-download  ${props.downloading ? "load" : ""} ${props.downloadSuccess ? "done" : ""}`}
					onClick={props.downloadResume}
					title={props.downloadSuccess ? "Resume Dowloaded " : "Download Mrinal's Resume"}
				>
					<svg id="arrow" viewBox="0 0  24 24">
						<path
							d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
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
						src={pointerGif}
						className="pointingArrow"
						style={{ display: `${pointerGif ? "block" : "none"}` }}
						alt="error"
					/>
				</div>
			</div>
			<div className="intoDesciption ">
				<h1 className="introHeader1">
					{"hey there,curious minds".split("").map((val, ind) => {
						return (
							<span key={ind} className={"text" + ind} style={{ left: `calc( ${ind * 0.2}rem + ${ind * 2}vw)` }}>
								{" "}
								{val}{" "}
							</span>
						);
					})}
				</h1>
				<h1 className="introHeader2">
					{"and creative souls !".split("").map((val, ind) => {
						return (
							<span
								className=""
								key={ind}
								style={{
									left: `calc( ${ind * 0.2}rem + ${[6, 7].includes(ind) ? ind * 2.5 + 0.2 : ind * 2.5}vw)`,
								}}
							>
								{val}
							</span>
						);
					})}
				</h1>
				<h1 className="introHeader3">
					{"I'm Mrinal Kasyap,".split("").map((val, ind) => {
						return (
							<span
								className=""
								key={ind}
								style={{ left: `calc( ${ind * 0.2}rem + ${[].includes(ind) ? ind * 2.5 + 0.3 : ind * 2.5}vw)` }}
							>
								{val}
							</span>
						);
					})}
				</h1>
				<h1 className="introHeader4">
					{"your friendly neighborhood".split("").map((val, ind) => {
						return (
							<span
								className=""
								key={ind}
								style={{ left: `calc( ${ind * 0.2}rem + ${[].includes(ind) ? ind * 2.5 + 0.3 : ind * 2.5}vw)` }}
							>
								{val}
							</span>
						);
					})}
				</h1>
				<h1 className="introHeader5">
					{"Mern Developer on a mission ".split("").map((val, ind) => {
						return (
							<span key={ind} className="" style={{ left: `calc( ${ind * 0.2}rem + ${ind * 2.5}vw)` }}>
								{val}
							</span>
						);
					})}
				</h1>
				<h1 className="introHeader6">
					{"to create the change ".split("").map((val, ind) => {
						return (
							<span key={ind} className={"text" + ind} style={{ left: `calc( ${ind * 0.2}rem + ${ind * 2.5}vw)` }}>
								{val}
							</span>
						);
					})}
				</h1>
				<h1 className="introHeader7">
					{"U&I crave ...".split("").map((val, ind) => {
						return (
							<span key={ind} className={"text" + ind} style={{ left: `calc( ${ind * 0.2}rem + ${ind * 2.5}vw)` }}>
								{val}
							</span>
						);
					})}
				</h1>
			</div>
		</section>
	);
}

export default IntroSection;
