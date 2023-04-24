import React, { useState, useEffect, useRef } from "react";
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

// don't forget to register plugins
// gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);
import "./timeline.css";
import Loader from "../../Shared/Loader";

function Timeline() {
	gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);
	const [Data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetchMyAPI() {
			let response = await fetch(`/api/career`);
			if (response?.ok) {
				response = await response.json();
			}

			if (response.success && response.data) {
				setData([...response.data]);

				setLoading(false);
			} else {
				console.log(response.statusText || response.message);
				setLoading(false);
			}
		}
		return () => {
			fetchMyAPI();
		};
	}, []);
	useEffect(() => {
		const sections = gsap.utils.toArray(".container section");
		const mask = document.querySelector(".mask");

		let scrollTween = gsap.to(sections, {
			xPercent: -100 * (sections.length - 1),
			ease: "none",
			scrollTrigger: {
				trigger: ".container",
				pin: true,
				scrub: 1,
				end: "+=3000",
				//snap: 1 / (sections.length - 1),
				markers: true,
			},
		});

		//Progress bar animation

		gsap.to(mask, {
			width: "100%",
			scrollTrigger: {
				trigger: ".wrapper",
				start: "top left",
				scrub: 1,
			},
		});

		// whizz around the sections
		sections.forEach((section) => {
			// grab the scoped text
			let text = section.querySelectorAll(".anim");

			// bump out if there's no items to animate
			if (text.length === 0) return;

			// do a little stagger
			gsap.from(text, {
				y: -130,
				opacity: 0,
				duration: 2,
				ease: "elastic",
				stagger: 0.1,
				scrollTrigger: {
					trigger: section,
					containerAnimation: scrollTween,
					start: "left center",
					markers: true,
				},
			});
		});

		return () => {};
	}, [Data]);

	return (
		<div className="timelineCointainer">
			<div className="timelineDetails">
				<div className="timelineDetails d-flex hg-80">
					{Data?.map((val, ind) => {
						return (
							<>
								{" "}
								<div className="col-sm-1  shape1">1</div>
								<div className="col-sm-2  shape2">
									<span>{val.age}</span>
								</div>
								<div className="col-sm-6  shape3">
									<div className="wrapper">
										<div className="container scrollx">
											<section className={`sec${ind + 1}  pin`}>
												<span>Advanced</span>
												<h1>{val.header}</h1>

												<div className="col">
													<p>
														Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit
														praesent arcu leo lectus pellentesque. Ornare elit orci morbi volutpat. Ut fermentum lorem
														morbi quis risus amet urna. Urna egestas lorem.
													</p>
													<p>
														Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit
														praesent arcu leo lectus pellentesque. Ornare elit orci morbi volutpat. Ut fermentum lorem
														morbi quis risus amet urna. Urna egestas lorem.
													</p>
												</div>
											</section>
										</div>
									</div>
								</div>
								<div className="col-sm-2  shape4">{val.year}</div>
								<div className="col-sm-1  shape5">1</div>
							</>
						);
					})}
				</div>
			</div>
			<>{loading && <Loader />}</>
		</div>
	);
}

export default Timeline;
