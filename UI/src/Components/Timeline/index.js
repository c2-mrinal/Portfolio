import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useState, useEffect, useRef, useMemo } from "react";
import Loader from "../../Shared/Loader";
import "./timeline.css";
import TimeLineSvg from "../../Shared/SVG/TimeLineSvg";

gsap.registerPlugin(ScrollTrigger);

let currentScrollIndex = 0;
let scrollTimeout;

export default function Scene() {
	const componentRef = useRef();
	const sliderRef = useRef();
	const panelYearRef = useRef([]);
	const requestRef = useRef();
	const previousTimeRef = useRef();
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
	const handleSetPanelActive = (active) => {
		memoizedSetIsPanelActive(active);
	};
	const memoizedSetIsPanelActive = useMemo(
		(active) => {
			// console.log("view", active);
			return setViewSlide(active);
		},

		[viewSlide]
	);
	const customAnimation = (element) => {
		console.log(element);
		gsap.from(element, {
			opacity: 0,
			x: -50,
			duration: 1,
			ease: "power2.out",
		});
	};
	useEffect(() => {
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
					onUpdate: (self) => {
						const panelsLength = panels.length;
						let progress = self.progress;
						let ncurrentScrollIndex = Math.floor(progress * panelsLength);
						if (ncurrentScrollIndex !== currentScrollIndex) {
							currentScrollIndex = ncurrentScrollIndex;
						}
					},
				},
			});
		}, componentRef);

		return () => {
			ctx.revert();
		};
	});

	return (
		<>
			<div className="" ref={componentRef}>
				<div ref={sliderRef} className="containers">
					{Data.map((val, ind) => {
						return (
							<div className={`panel`}>
								<div className="textContainer">
									<div className="col-smm-1 t1"></div>
									<div className="col-smm-2 t2 " ref={panelYearRef}>
										<div className="textRotated subClass">{val.age}</div>
									</div>
									<div className="col-smm-6 t3 ">
										<h2 className={`textHeader ${currentScrollIndex === ind ? "showpanelHeader" : "hidepanelHeader"}`}>
											{val.header}
											{"  "}
											<a href={`/about/${val.value}`} target="_blank" rel="noreferrer">
												<i className="fa fa-external-link" aria-hidden="true"></i>
											</a>
										</h2>
										<div className="textAbout">
											<em>{val.about} </em>
										</div>
										<div className="textDetail">{val.detail}</div>
									</div>
									<div className="col-smm-2 t4">{val.year}</div>
									<div className="col-smm-1 t5"></div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="timeLineFrame headerTextContainer">
				<div className="col-smm-1 contain1">
					<div className="careerHeaderText chtStart">
						<h3>CAREER</h3>
					</div>
					<TimeLineSvg className="wapper1" />
				</div>
				<div className="col-smm-2 contain2">
					{" "}
					<TimeLineSvg className="wapper2" />
				</div>
				<div className="col-smm-6 contain3"></div>
				<div className="col-smm-2 contain4">
					<TimeLineSvg className="wapper3" />
				</div>
				<div className="col-smm-1 contain5">
					<div className="careerHeaderText chtEnd">
						<h3>TIMELINE</h3>
					</div>
					<TimeLineSvg className="wapper4" />
				</div>
			</div>

			<div className="timelineBgOver">
				<div className="bgover1"></div>
				<div className="bgover2"></div>
			</div>
			<div className="timeLineFrame">
				<div className="col-smm-1 ">
					<div className=" shape1"></div>
				</div>
				<div className="col-smm-2 bgWhite">
					<div className=" shape2"></div>
				</div>
				<div className="col-smm-6 shape3"></div>
				<div className="col-smm-2 bgWhite">
					<div className=" shape4"></div>
				</div>
				<div className="col-smm-1 bgWhite">
					<div className=" shape5"></div>
				</div>
			</div>
			<>{loading && <Loader />}</>
		</>
	);
}
