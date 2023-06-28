import React, { useRef, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { Circle } from "../../../Shared/CircleRef";

function AboutBG(props) {
	const pointerCircle = [1, 2, 4, 6, 9, 12, 15, 18, 22, 26, 30, 34, 38];

	const AboutWrapperRef = useRef(null);
	const circleRefs = useRef([]);
	circleRefs.current = [];

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
