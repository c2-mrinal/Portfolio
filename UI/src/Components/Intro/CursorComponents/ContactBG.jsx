import React, { useRef, useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { Circle } from "../../../Shared/CircleRef";

function ContactBG(props) {
	const [pointerCircle, setPointerCircle] = useState([1]);
	const ContactWrapperRef = useRef(null);
	const circleRefs = useRef([]);

	useEffect(() => {
		const refCurrent = ContactWrapperRef.current;
		refCurrent?.addEventListener("pointermove", onMove);
		return () => refCurrent?.removeEventListener("pointermove", onMove);
	}, []);

	const onMove = ({ clientX, clientY }) => {
		const posit = ContactWrapperRef.current?.getBoundingClientRect();
		const x = clientX - posit.x;
		const y = clientY - posit.y;
		props.setPointerComp([false, false, false, true]);
		circleRefs.current.forEach((ref) => ref.moveTo(x, y));
	};
	const addCircleRef = (ref) => {
		if (ref) {
			circleRefs.current.push(ref);
		}
	};

	return (
		<>
			<div className="cursorAnimation contactPointer" ref={ContactWrapperRef}>
				{pointerCircle.map((val, ind) => {
					return (
						<React.Fragment key={ind}>
							<Circle size={10} ref={addCircleRef} delay={0} display={props.pointerComp[3] ? "block" : "none"} />
						</React.Fragment>
					);
				})}
			</div>

			<Nav.Link className="careerPageDetail" href="/contact">
				<div className=" introCursorButton">
					<h3>Contact</h3>
				</div>
			</Nav.Link>
		</>
	);
}

export default ContactBG;
