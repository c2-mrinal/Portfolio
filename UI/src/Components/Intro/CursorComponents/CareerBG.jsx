import React, { useState, useEffect, useRef } from "react";
import Nav from "react-bootstrap/Nav";
import { Circle } from "../../../Shared/CircleRef";

function CareerBG() {
	const CareerWrapperRef = useRef(null);
	const circleRefs = useRef([]);
	circleRefs.current = [];

	useEffect(() => {
		const refCurrent = CareerWrapperRef.current;
		refCurrent?.addEventListener("pointermove", onMove);
		return () => refCurrent?.removeEventListener("pointermove", onMove);
	}, []);

	const onMove = ({ clientX, clientY }) => {
		const posit = CareerWrapperRef.current?.getBoundingClientRect();
		const x = posit.x;
		const y = posit.y;
		circleRefs.current?.forEach((ref) => ref.moveTo(clientX - x, clientY - y));
	};

	const addCircleRef = (ref) => {
		if (ref) {
			circleRefs.current?.push(ref);
		}
	};

	return (
		<>
			<div className=" cursorBubbleAnimation careerbg" ref={CareerWrapperRef}>
				<Circle size={50} ref={addCircleRef} delay={0} />
			</div>
			<Nav.Link className="careerPageDetail" href="/career">
				<div className=" introCursorButton">
					<h3>Career</h3>
				</div>
			</Nav.Link>
		</>
	);
}

export default CareerBG;
