import React, { useRef, useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { Circle } from "../../../Shared/CircleRef";

function ContactBG(props) {
	const [pointerCircle, setPointerCircle] = useState([1]);
	const ContactWrapperRef = useRef(null);
	const circleRefs = useRef([]);

	const [mouseX, setMouseX] = useState(0);
	const [mouseY, setMouseY] = useState(0);
	let randomMovement = 5;
	let frequency = 5;
	let size = 60;
	let speed = 2;
	let burst = 50;
	let oldX;
	let oldY;
	let deltaX;
	let deltaY;
	let randX;
	let randY;
	// useEffect(() => {
	// 	let bubbleData = pointerCircle;

	// 	// setInterval(() => {
	// 	// 	bubbleData?.shift();
	// 	// 	setpointerCircle(bubbleData);
	// 	// }, 3000);
	// }, [mouseX, mouseY]);

	// useEffect(() => {
	// setInterval(function () {
	// 	let bubbleData = pointerCircle || [];
	// 	bubbleData.push(mouseX);
	// 	setPointerCircle(bubbleData);
	// 	bubbleCreate();
	// }, 200 / frequency);
	// setInterval(() => {
	// 	let bubbleData = pointerCircle || [];
	// 	bubbleData?.shift();
	// 	setPointerCircle(bubbleData);
	// }, 5000);

	// 	// setInterval(function () {
	// 	const bubbleCreated = document.getElementsByClassName("bubble");

	// 	while (bubbleCreated.length > 0) {
	// 		let bubbleEach = bubbleCreated[0].parentNode;
	// 		let bubbleComputer = getComputedStyle(bubbleEach);
	// 		console.log(
	// 			parseInt(bubbleComputer.getPropertyValue("width")),
	// 			bubbleComputer.getPropertyValue("margin"),
	// 			bubbleEach.getAttribute("data-y")
	// 		);
	// 		if (parseInt(bubbleComputer.getPropertyValue("width")) > 0) {
	// 			const topM = parseInt(bubbleComputer.getPropertyValue("margin-top") + bubbleEach.getAttribute("data-y"));
	// 			const leftM = parseInt(bubbleComputer.getPropertyValue("margin-left") + bubbleEach.getAttribute("data-x"));
	// 			const newDimension = parseInt(bubbleEach.style.width) - 1;
	// 			bubbleEach.style.marginTop = topM;
	// 			bubbleEach.style.marginLeft = leftM;
	// 			bubbleEach.style.width = newDimension;
	// 			bubbleEach.style.height = newDimension;
	// 		} else {
	// 			bubbleEach.removeChild(bubbleCreated[0]);
	// 		}
	// 	}
	// 	// }, 1000);
	// 	return () => {};
	// }, [mouseX, mouseY]);

	// const bubbleCreate = () => {
	// 	const dimension = Math.random() * size;
	// 	const marginL = parseInt(mouseX - dimension) / 2 + "px";
	// 	const marginT = parseInt(mouseY - dimension) / 2 + "px";
	// 	console.log(dimension, marginL, marginT, pointerCircle);
	// 	// return (
	// 	// 	<div
	// 	// 		className="bubble"
	// 	// 		style={{
	// 	// 			position: "absolute",
	// 	// 			width: dimension + "px",
	// 	// 			height: dimension + "px",
	// 	// 			marginLeft: marginL,
	// 	// 			marginTop: marginT,
	// 	// 			backgroundColor: getRandomColor(),
	// 	// 		}}
	// 	// 	></div>
	// 	// );

	// 	// deltaX = mouseX / (10 / speed) + (Math.random() - 0.15) * randomMovement;
	// 	// deltaY = mouseY / (10 / speed) + (Math.random() - 0.15) * randomMovement;
	// 	// const bubbleNode = document.createElement("div");
	// 	// bubbleNode.classList.add("bubble");
	// 	// bubbleNode.setAttribute("data-x", deltaX);
	// 	// bubbleNode.setAttribute("data-y", deltaY);
	// 	// bubbleNode.style.position = "absolute";
	// 	// bubbleNode.style.width = dimension + "px";
	// 	// bubbleNode.style.height = dimension + "px";
	// 	// bubbleNode.style.marginLeft = parseInt(mouseX - dimension / 2) + "px";
	// 	// bubbleNode.style.margintop = parseInt(mouseY - dimension / 2) + "px";
	// 	// bubbleNode.style.backgroundColor = getRandomColor();
	// 	// ContactWrapperRef.current?.appendChild(bubbleNode);
	// };

	// const getRandomColor = () => {
	// 	var letters = "0123456789ABCDEF".split("");
	// 	var color = "#";
	// 	for (var i = 0; i < 6; i++) {
	// 		color += letters[Math.floor(Math.random() * 16)];
	// 	}
	// 	return color;
	// };

	// const bubbleClick = () => {
	// 	for (var i = 0; i < burst; i++) {
	// 		// randX = (Math.random() - 0.5) * 30;
	// 		// randY = (Math.random() - 0.5) * 30;
	// 		const dimension = Math.random() * size;
	// 		const bubbleNode = document.createElement("div");
	// 		// bubbleNode.setAttribute("data-x", randX);
	// 		// bubbleNode.setAttribute("data-y", randY);
	// 		bubbleNode.style.position = "absolute";
	// 		bubbleNode.style.width = dimension + "px";
	// 		bubbleNode.style.height = dimension + "px";
	// 		bubbleNode.style.marginLeft = parseInt(mouseX - dimension / 2) + "px";
	// 		bubbleNode.style.marginTop = parseInt(mouseY - dimension / 2) + "px";
	// 		bubbleNode.style.backgroundColor = getRandomColor();
	// 		bubbleNode.classList.add("bubble");
	// 		ContactWrapperRef.current?.appendChild(bubbleNode);
	// 	}
	// };
	// const handleClick = () => {
	// 	bubbleClick();
	// };
	// useEffect(() => {
	// 	setInterval(function () {
	// 		bubbleCreate();
	// 	}, 200 / frequency);
	// 	setInterval(() => {
	// 		let bubbleData = pointerCircle;
	// 		bubbleData?.shift();
	// 		setPointerCircle(bubbleData);
	// 	}, 100);
	// });

	const bubbleCreate = () => {
		let bubbleIS = pointerCircle;
		const dimension = Math.random() * size;
		const backgroundColor = getRandomColor();
		bubbleIS.push({ dimension, backgroundColor });
		setPointerCircle(bubbleIS);
	};

	const getRandomColor = () => {
		const letters = "0123456789ABCDEF".split("");
		let color = "#";
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	};

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
			<div
				className="cursorAnimation contactPointer"
				// onClick={handleClick}
				ref={ContactWrapperRef}
			>
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
					{/* Spotlight Cursor Text Screen */}
				</div>
			</Nav.Link>
		</>
	);
}

export default ContactBG;