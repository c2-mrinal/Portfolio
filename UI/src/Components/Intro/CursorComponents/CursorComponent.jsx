import React, { useEffect, useRef } from "react";
import Nav from "react-bootstrap/Nav";
import { Circle } from "../../../Shared/CircleRef";

function CareerBG(props) {
	const { delay, sizeFixed, pointerCircle, pointerIndex, pointerComp, setPointerComp, href, buttonText } = props;

	const WrapperRef = useRef(null);
	const circleRefs = useRef([]);
	circleRefs.current = [];

	useEffect(() => {
		const refCurrent = WrapperRef.current;
		refCurrent?.addEventListener("pointermove", onMove);
		return () => refCurrent?.removeEventListener("pointermove", onMove);
	}, []);

	const onMove = ({ clientX, clientY }) => {
		const posit = WrapperRef.current?.getBoundingClientRect();
		const x = posit.x;
		const y = posit.y;
		let pointerVal = [false, false, false, false];
		pointerVal[pointerIndex] = true;
		props.setPointerComp(pointerVal);
		circleRefs.current?.forEach((ref) => ref.moveTo(clientX - x, clientY - y));
	};

	const addCircleRef = (ref) => {
		if (ref) {
			circleRefs.current?.push(ref);
		}
	};

	return (
		<>
			<div className=" cursorBubbleAnimation cursorbg" ref={WrapperRef}>
				{pointerCircle.map((val, ind) => {
					return (
						<Circle
							key={ind}
							size={sizeFixed ? 10 : val}
							ref={addCircleRef}
							delay={delay ? val / 100 : 0}
							display={pointerComp[pointerIndex] ? "block" : "none"}
							isInvert={true}
							className="isInverted"
						/>
					);
				})}
			</div>
			<div className="pageDetail introCursorButton">
				<Nav.Link href={href}>
					<h3>{buttonText}</h3>
				</Nav.Link>
			</div>
		</>
	);
}

export default CareerBG;
