import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

// don't forget to register plugins
// gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);
import "./timeline.css";

function Timeline() {
	return (
		<div className="timelineCointainer">
			<div className="timelineDetails">
				<section class="timelineDetails d-flex hg-80">
					<div className="col-sm-1  shape1">1</div>
					<div className="col-sm-2  shape2">2</div>
					<div className="col-sm-6  shape3">6</div>
					<div className="col-sm-2  shape4">2</div>
					<div className="col-sm-1  shape5">1</div>
					<div></div>
				</section>
			</div>
		</div>
	);
}

export default Timeline;
