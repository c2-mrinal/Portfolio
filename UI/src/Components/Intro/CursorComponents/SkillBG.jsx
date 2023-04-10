import React, { useRef, useEffect } from "react";
import Nav from "react-bootstrap/Nav";

function SkillBG() {
	const SkillWrapperRef = useRef(null);

	useEffect(() => {
		//CONFIG VARIABLES- CHANGE FOR FUN!
		var randomMovement = 5;
		var frequency = 5;
		var size = 60;
		var speed = 2;
		var burst = 50;

		var oldX;
		var oldY;
		let mouseX;
		let mouseY;
		let deltaX;
		let deltaY;
		let randX;
		let randY;

		// setInterval(function () {
		// 	deltaX = (oldX - mouseX) / (10 / speed) + (Math.random() - 0.15) * randomMovement;
		// 	deltaY = (oldY - mouseY) / (10 / speed) + (Math.random() - 0.15) * randomMovement;

		// 	oldX = mouseX;
		// 	oldY = mouseY;

		// 	const dimension = Math.random() * size;

		// 	SkillWrapperRef.current?.appendChild(
		// 		'<div class="bubble" data-x="' +
		// 			deltaX +
		// 			'" data-y="' +
		// 			deltaY +
		// 			'" style="position:absolute;width:' +
		// 			dimension +
		// 			"px;height:" +
		// 			dimension +
		// 			"px;margin-left:" +
		// 			parseInt(mouseX - dimension / 2) +
		// 			"px;margin-top:" +
		// 			parseInt(mouseY - dimension / 2) +
		// 			"px;background-color:" +
		// 			getRandomColor() +
		// 			';"></div>'
		// 	);
		// }, 200 / frequency);

		// setInterval(function () {
		// 	$(".bubble").each(function (i) {
		// 		if (parseInt(i.current?.style.width > 0)) {
		// 			var topM = parseInt($(this).css("margin-top")) + $(this).data("y");
		// 			var leftM = parseInt($(this).css("margin-left")) + $(this).data("x");
		// 			var newDimension = parseInt($(this).css("width")) - 1;
		// 			$(this).css({
		// 				"margin-top": topM,
		// 				"margin-left": leftM,
		// 				width: newDimension,
		// 				height: newDimension,
		// 			});
		// 		} else {
		// 			$(this).remove();
		// 		}
		// 	});
		// }, 10);

		// $(document).on("click", function () {
		// 	for (var i = 0; i < burst; i++) {
		// 		randX = (Math.random() - 0.5) * 30;
		// 		randY = (Math.random() - 0.5) * 30;
		// 		const dimension = Math.random() * size;
		// 		$("body").append(
		// 			'<div class="bubble" data-x="' +
		// 				randX +
		// 				'" data-y="' +
		// 				randY +
		// 				'" style="position:absolute;width:' +
		// 				dimension +
		// 				"px;height:" +
		// 				dimension +
		// 				"px;margin-left:" +
		// 				parseInt(mouseX - dimension / 2) +
		// 				"px;margin-top:" +
		// 				parseInt(mouseY - dimension / 2) +
		// 				"px;background-color:" +
		// 				getRandomColor() +
		// 				';"></div>'
		// 		);
		// 	}
		// });

		const getRandomColor = () => {
			var letters = "0123456789ABCDEF".split("");
			var color = "#";
			for (var i = 0; i < 6; i++) {
				color += letters[Math.floor(Math.random() * 16)];
			}
			return color;
		};

		// SkillWrapperRef.current?.mousemove(function (event) {
		// 	mouseX = event.pageX;
		// 	mouseY = event.pageY;
		// });

		return () => {};
	}, []);
	const handleClick = () => {
		SkillWrapperRef.click();
	};

	return (
		<>
			<div className="cursorAnimation skillbg" onClick={handleClick} ref={SkillWrapperRef}></div>
			<Nav.Link className="careerPageDetail" href="/skill">
				<div className=" introCursorButton">
					<h3>Skills</h3>
				</div>
			</Nav.Link>
		</>
	);
}

export default SkillBG;
