import React, { useRef, useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Circle } from "../../../Shared/CircleRef";

function AboutBG(props) {
	const [pointerCircle, setPointerCircle] = useState([1, 2, 4, 6, 9, 12, 15, 18, 22, 26, 30, 34, 38]);

	const AboutWrapperRef = useRef(null);
	const circleRefs = useRef([]);
	circleRefs.current = [];

	// useEffect(() => {
	// 	const refCurrent = AboutWrapperRef.current;
	// 	var dots = [],
	// 		mouse = {
	// 			x: 0,
	// 			y: 0,
	// 		};

	// 	// The Dot object used to scaffold the dots
	// 	var Dot = function () {
	// 		this.x = 0;
	// 		this.y = 0;
	// 		this.node = (function () {
	// 			var n = document.createElement("div");
	// 			n.className = "trail";
	// 			document.body.appendChild(n);
	// 			return n;
	// 		})();
	// 	};
	// 	// The Dot.prototype.draw() method sets the position of
	// 	// the object's <div> node
	// 	Dot.prototype.draw = function () {
	// 		this.node.style.left = this.x + "px";
	// 		this.node.style.top = this.y + "px";
	// 	};

	// 	// Creates the Dot objects, populates the dots array
	// 	for (var i = 0; i < 20; i++) {
	// 		var d = new Dot();
	// 		dots.push(d);
	// 	}

	// 	// This is the screen redraw function
	// 	const draw = () => {
	// 		// Make sure the mouse position is set everytime
	// 		// draw() is called.
	// 		var x = mouse.x,
	// 			y = mouse.y;

	// 		// This loop is where all the 90s magic happens
	// 		dots.forEach(function (dot, index, dots) {
	// 			var nextDot = dots[index + 1] || dots[0];

	// 			dot.x = x;
	// 			dot.y = y;
	// 			dot.draw();
	// 			x += (nextDot.x - dot.x) * 0.6;
	// 			y += (nextDot.y - dot.y) * 0.6;
	// 		});
	// 	};

	// 	// refCurrent?.addEventListener("mousemove", function (event) {
	// 	// 	event.preventDefault();
	// 	// 	mouse.x = event.pageX;
	// 	// 	mouse.y = event.pageY;
	// 	// 	props.setPointerComp([false, false, true, false]);
	// 	// });

	// 	function animate() {
	// 		draw();
	// 		requestAnimationFrame(animate);
	// 	}
	// 	refCurrent?.addEventListener("pointermove", ({ clientX, clientY }) => {
	// 		const posit = AboutWrapperRef.current?.getBoundingClientRect();
	// 		mouse.x = clientX - posit.x;
	// 		mouse.y = clientY - posit.y;
	// 		props.setPointerComp([false, false, true, false]);
	// 		// onMove();
	// 	});
	// 	return () => refCurrent?.removeEventListener("pointermove", onMove);
	// 	return () => {
	// 		refCurrent?.removeEventListener("mousemove", function (event) {
	// 			event.preventDefault();
	// 			mouse.x = event.pageX;
	// 			mouse.y = event.pageY;
	// 		});
	// 		animate();
	// 	};
	// }, []);

	useEffect(() => {
		const refCurrent = AboutWrapperRef.current;
		refCurrent?.addEventListener("pointermove", onMove);
		return () => refCurrent?.removeEventListener("pointermove", onMove);
	}, []);

	const onMove = ({ clientX, clientY }) => {
		const posit = AboutWrapperRef.current?.getBoundingClientRect();
		const x = posit.x;
		const y = posit.y;
		props.setPointerComp([false, false, true, false]);

		circleRefs.current.forEach((ref) => ref.moveTo(clientX - x, clientY - y));
	};

	const addCircleRef = (ref) => {
		if (ref) {
			circleRefs.current.push(ref);
		}
	};
	return (
		<>
			<div className="cursorAnimation aboutbg" ref={AboutWrapperRef}>
				{pointerCircle.map((val, ind) => {
					return (
						<React.Fragment key={ind}>
							<Circle
								size={10}
								ref={addCircleRef}
								delay={val * 0.02}
								display={props.pointerComp[2] ? "block" : "none"}
							/>
						</React.Fragment>
					);
				})}
			</div>
			<Nav.Link className="careerPageDetail" href="/about">
				<div className="introCursorButton">
					<h3>About</h3>
				</div>
			</Nav.Link>
		</>
	);
}

export default AboutBG;
