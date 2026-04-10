import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../rightPanel.css";
gsap.registerPlugin(ScrollTrigger);

export default function Workflow(props) {
	const [Data, setData] = useState({});
	const workflowRefs = useRef([]);
	const pagesRef = useRef(null);
	workflowRefs.current = [];

	useEffect(() => {
		setData(props.data);
	}, [props.data]);

	useEffect(() => {
		const elements = pagesRef.current.querySelectorAll(".flowIcon");

		elements.forEach((element) => {
			gsap.fromTo(
				element,
				{
					opacity: 0,
					y: -50, // Move up by 50 pixels
				},
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: element,
						start: "top 80%", // Adjust the trigger point as needed
					},
				}
			);
		});
	}, []);

	const randomColor = () => {
		let color = "hsl(" + Math.random() * 300 + ", 100%, 75%)";
		return color;
	};

	const addToRefs = (el) => {
		if (el && !workflowRefs.current.includes(el)) {
			workflowRefs.current.push(el);
		}
	};
	return (
		<div className="pages" ref={pagesRef}>
			{Data.data?.map((val, ind) => {
				return (
					<div
						className={`workFlowContainer ${"workFlowContainer" + ind}`}
						style={{ backgroundColor: randomColor() }}
						ref={addToRefs}
					>
						<div className="flowleft">
							<i id={`flowicon-${ind}`} className={`flowIcon ${val.icon}`} style={{ color: "white" }}></i>
							<h3 className="flowHeader">{val.header}</h3>
						</div>
						<div className="flowright ">
							{val.desc?.map((val, ind) => {
								return <li key={ind}> {val}</li>;
							})}
							<ul className="dependenciesList">
								{val.header === "Dependencies" &&
									val.list?.map((subVal, ind) => {
										return (
											<li key={ind}>
												{" "}
												<strong>{Object.keys(subVal)} : </strong>
												<em>{Object.values(subVal)}</em>
											</li>
										);
									})}
							</ul>
						</div>
					</div>
				);
			})}
		</div>
	);
}
