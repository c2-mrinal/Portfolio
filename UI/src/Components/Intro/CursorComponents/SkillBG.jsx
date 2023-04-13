import React, { useRef, useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { Circle } from "../../../Shared/CircleRef";

function SkillBG() {
	const [pointerCircle, setPointerCircle] = useState([0.1, 0.2, 0.3, 0.4, 0.5]);

	const SkillWrapperRef = useRef();
	const circleRefs = useRef([]);
	circleRefs.current = [];

	useEffect(() => {
		const refCurrent = SkillWrapperRef.current;
		refCurrent?.addEventListener("pointermove", onMove);
		return () => refCurrent?.removeEventListener("pointermove", onMove);
	}, []);

	const onMove = ({ clientX, clientY }) => {
		const posit = SkillWrapperRef.current?.getBoundingClientRect();
		const x = posit.x;
		const y = posit.y;
		circleRefs.current.forEach((ref) => ref.moveTo(clientX - x, clientY - y));
	};

	const addCircleRef = (ref) => {
		if (ref) {
			circleRefs.current.push(ref);
		}
	};

	return (
		<>
			<div className="cursorBubbleAnimation skillbg" ref={SkillWrapperRef}>
				{pointerCircle.map((val, ind) => {
					return (
						<>
							<Circle size={val * 100} ref={addCircleRef} delay={val} />
						</>
					);
				})}
			</div>
			<Nav.Link className="skillPageDetail" href="/skill">
				<div className=" introCursorButton">
					<h3>Skills</h3>
				</div>
			</Nav.Link>
		</>
	);
}

export default SkillBG;
