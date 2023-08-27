import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useState, useEffect, useRef } from "react";
import Loader from "../../Shared/Loader";
import "./timeline.css";
import TimeLineSvg from "../../Shared/SVG/TimeLineSvg";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
	let currentScrollIndex = 0;
	const componentRef = useRef();
	const sliderRef = useRef();
	const panelYearRef = useRef([]);
	const [viewSlide, setViewSlide] = useState(0);

	const [Data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		async function fetchMyAPI() {
			try {
				setLoading(true);
				let response = await fetch(`/api/career`);

				if (!response.ok) {
					throw new Error(`Failed to fetch data: ${response.statusText}`);
				}

				let responseData = await response.json();

				if (responseData.success) {
					setData([...responseData.data]);
				} else {
					throw new Error(responseData.message || "API response unsuccessful");
				}
			} catch (error) {
				console.error("An error occurred while fetching data:", error);
			} finally {
				setLoading(false);
			}
		}

		fetchMyAPI();
	}, []);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			let panels = gsap.utils.toArray(".panel");
			gsap.to(panels, {
				xPercent: -100 * (panels.length - 1),
				ease: "none",
				scrollTrigger: {
					trigger: sliderRef.current,
					pin: true,
					scrub: 1,
					snap: 1 / (panels.length - 1),
					end: () => "+=" + sliderRef.current.offsetWidth,
					markers: false,
					// onToggle: (self) => {
					// 	gsap.to(`panel`, {
					// 		duration: 0.2,
					// 		opacity: self.isActive ? 1 : 0, // if active then 1 or else 0.5
					// 		color: self.isActive ? "white" : "black",
					// 	});
					// },
					onUpdate: (self) => {
						const panelsLength = panels.length;
						let progress = self.progress;
						let ncurrentScrollIndex = Math.floor(progress * panelsLength);
						if (ncurrentScrollIndex !== currentScrollIndex) {
							currentScrollIndex = ncurrentScrollIndex;
							// console.log(panelYearRef.current[currentScrollIndex]);
							// panelYearRef.current[currentScrollIndex].classList.add("main-div"); // corresponding DOM node
							// const element = panelYearRef.current[currentScrollIndex];

							// Remove the class using the classList property
							// element?.classList.add("your-class-name");
							// span.className = "hidden";
							// console.log("scroll", currentScrollIndex, currentScrollIndex, viewSlide);
						}
					},
				},
			});
		}, componentRef);

		// console.log(viewSlide);
		return () => ctx.revert();
	});
	useEffect(() => {
		if (viewSlide !== currentScrollIndex) setViewSlide(currentScrollIndex);
		// console.log({ viewSlide, currentScrollIndex });
	}, [currentScrollIndex]);

	return (
		<>
			<div className="timeLineFrame">
				<div className="col-sm-1 contain1">
					<div className="careerHeaderText chtStart">
						<h3>C</h3>
						<h3>A</h3>
						<h3>R</h3>
						<h3>E</h3>
						<h3>E</h3>
						<h3>R</h3>
					</div>
					<TimeLineSvg className="wapper1" />
				</div>
				<div className="col-sm-2 contain2">
					{" "}
					<TimeLineSvg className="wapper2" />
				</div>
				<div className="col-sm-6 contain3"></div>
				<div className="col-sm-2 contain4">
					<div className="careerHeaderText chtEnd">
						<h3>T</h3>
						<h3>I</h3>
						<h3>M</h3>
						<h3>E</h3>
						<h3>L</h3>
						<h3>I</h3>
						<h3>N</h3>
						<h3>E</h3>
					</div>
					<TimeLineSvg className="wapper3" />
				</div>
				<div className="col-sm-1 contain5">
					<TimeLineSvg className="wapper4" />
				</div>
			</div>
			<div className="timeLineFrame">
				<div className="col-sm-1 shape1"></div>
				<div className="col-sm-2 shape2"></div>
				<div className="col-sm-6 shape3"></div>
				<div className="col-sm-2 shape4"></div>
				<div className="col-sm-1 shape5"></div>
			</div>
			<div className="" ref={componentRef}>
				<div ref={sliderRef} className="containers">
					{Data.map((val, ind) => {
						return (
							<div className={`panel`}>
								<div className="textContainer">
									<div className="col-sm-1 t1"></div>
									<div className="col-sm-2 t2" ref={panelYearRef.current[ind]}>
										<div className="textRotated">{val.age}</div>
									</div>
									<div className="col-sm-6 t3 ">
										<h2 className={`textHeader ${currentScrollIndex === ind ? "showpanelHeader" : "hidepanelHeader"}`}>
											{val.header}
											{"  "}
											<a href="/career" target="_blank" rel="noreferrer">
												<i className="fa fa-external-link" aria-hidden="true"></i>
											</a>
										</h2>
										<div className="textAbout">
											<em>{val.about} </em>
										</div>
										<div className="textDetail">{val.detail}</div>
									</div>
									<div className="col-sm-2 t4">{val.year}</div>
									<div className="col-sm-1 t5"></div>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<>{loading && <Loader />}</>
		</>
	);
}
