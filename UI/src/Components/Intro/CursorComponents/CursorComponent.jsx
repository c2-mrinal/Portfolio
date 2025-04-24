import React, { useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import Nav from "react-bootstrap/Nav";
import { Circle } from "../../../Shared/CircleRef";

function CareerBG({ delay, sizeFixed, pointerCircle, pointerIndex, pointerComp, setPointerComp, href, buttonText }) {
	const wrapperRef = useRef(null);
	const circleRefs = useRef([]);

	// Memoized move handler to optimize performance
	const onMove = useCallback(
		({ clientX, clientY }) => {
			const bounds = wrapperRef.current?.getBoundingClientRect();
			if (!bounds) return;

			const { x, y } = bounds;

			const updatedPointer = Array(4).fill(false);
			updatedPointer[pointerIndex] = true;
			setPointerComp(updatedPointer);

			// Update each circle's position based on mouse movement
			circleRefs.current.forEach((circle) => {
				if (circle?.moveTo) {
					circle.moveTo(clientX - x, clientY - y);
				}
			});
		},
		[pointerIndex, setPointerComp]
	);

	useEffect(() => {
		const wrapper = wrapperRef.current;
		if (wrapper) {
			wrapper.addEventListener("pointermove", onMove);
		}
		return () => {
			if (wrapper) {
				wrapper.removeEventListener("pointermove", onMove);
			}
		};
	}, [onMove]);

	// Register circle refs ensuring no duplicates
	const addCircleRef = useCallback((ref) => {
		if (ref && !circleRefs.current.includes(ref)) {
			circleRefs.current.push(ref);
		}
	}, []);

	return (
		<>
			<div className="cursorBubbleAnimation cursorbg" ref={wrapperRef}>
				{pointerCircle.map((val, ind) => (
					<Circle
						key={ind}
						size={sizeFixed ? 10 : val}
						ref={addCircleRef}
						delay={delay ? val / 100 : 0}
						display={pointerComp[pointerIndex] ? "block" : "none"}
						isInvert={true}
						className="isInverted"
					/>
				))}
			</div>
			<div className="pageDetail introCursorButton">
				<Nav.Link href={href}>
					<h3>{buttonText}</h3>
				</Nav.Link>
			</div>
		</>
	);
}

// PropTypes for type safety and clarity
CareerBG.propTypes = {
	delay: PropTypes.bool,
	sizeFixed: PropTypes.bool,
	pointerCircle: PropTypes.arrayOf(PropTypes.number).isRequired,
	pointerIndex: PropTypes.number.isRequired,
	pointerComp: PropTypes.arrayOf(PropTypes.bool).isRequired,
	setPointerComp: PropTypes.func.isRequired,
	href: PropTypes.string.isRequired,
	buttonText: PropTypes.string.isRequired,
};

export default CareerBG;
