import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

// don't forget to register plugins
// gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);
import "./timeline.css";

function Timeline() {
	gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

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
	}, []);

	return (
		<div className="timelineCointainer">
			<div className="timelineDetails">
				<section class="timelineDetails d-flex hg-80">
					<div className="col-sm-1  shape1">1</div>
					<div className="col-sm-2  shape2">2</div>
					<div className="col-sm-6  shape3">
						<div class="wrapper">
							<div class="container scrollx">
								<section class="sec1 pin">
									<span>Advanced</span>
									<h1>Signify Elegance</h1>

									<div class="col">
										<p>
											Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent
											arcu leo lectus pellentesque. Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis risus
											amet urna. Urna egestas lorem.
										</p>
										<p>
											Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent
											arcu leo lectus pellentesque. Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis risus
											amet urna. Urna egestas lorem.
										</p>
									</div>
								</section>
								<section class="sec2 pin">
									<span class="anim">Advanced</span>
									<h1 class="anim">Signify Elegance</h1>

									<div class="col anim">
										<p>
											Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent
											arcu leo lectus pellentesque. Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis risus
											amet urna. Urna egestas lorem.
										</p>
										<p>
											Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent
											arcu leo lectus pellentesque. Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis risus
											amet urna. Urna egestas lorem.
										</p>
									</div>
								</section>
								<section class="sec3 pin">
									<span class="anim">Advanced</span>
									<h1 class="anim">Signify Elegance</h1>

									<div class="col anim">
										<p>
											Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent
											arcu leo lectus pellentesque. Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis risus
											amet urna. Urna egestas lorem.
										</p>
										<p>
											Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent
											arcu leo lectus pellentesque. Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis risus
											amet urna. Urna egestas lorem.
										</p>
									</div>
								</section>
							</div>
						</div>
					</div>
					<div className="col-sm-2  shape4">2</div>
					<div className="col-sm-1  shape5">1</div>
					<div></div>
				</section>
			</div>
		</div>
	);
}

export default Timeline;
