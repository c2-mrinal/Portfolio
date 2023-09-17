import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import * as d3 from "d3";
import "./skill.css";
import Loader from "../../Shared/Loader";
import Modal from "react-bootstrap/Modal";

const halfStar = `<i class="fa-solid fa-star-half"></i>`;
const oneStar = `<i class="fa-solid fa-star"></i>`;
const heightS = window.innerHeight;
const widthS = window.innerWidth;
function useWindowSize() {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([widthS, heightS]);
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return size;
}

function Skill({ onMouseOver, onMouseOut }) {
	const [windowWidth, windowHeight] = useWindowSize();
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [svgRoatate, setSvgRoatate] = useState(-34);
	const svgCode = `
	<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 3600 3000">
				<rect fill="#8CBF8C" />
				<defs>
					<radialGradient id="a" gradientUnits="objectBoundingBox">
						<stop offset="0" stop-color="#FFFFFF" />
						<stop offset="1" stop-color="#8CBF8C" />
					</radialGradient>
					<linearGradient id="b" gradientUnits="userSpaceOnUse" x1="0" y1="750" x2="1550" y2="750">
						<stop offset="0" stop-color="#c6dfc6" />
						<stop offset="1" stop-color="#8CBF8C" />
					</linearGradient>
					<path
						id="s"
						fill="url(#b)"
						d="M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z"
					/>
					<g id="g">
						<use href="#s" transform="scale(0.12) rotate(60)" />
						<use href="#s" transform="scale(0.2) rotate(10)" />
						<use href="#s" transform="scale(0.25) rotate(40)" />
						<use href="#s" transform="scale(0.3) rotate(-20)" />
						<use href="#s" transform="scale(0.4) rotate(-30)" />
						<use href="#s" transform="scale(0.5) rotate(20)" />
						<use href="#s" transform="scale(0.6) rotate(60)" />
						<use href="#s" transform="scale(0.7) rotate(10)" />
						<use href="#s" transform="scale(0.835) rotate(-40)" />
						<use href="#s" transform="scale(0.9) rotate(40)" />
						<use href="#s" transform="scale(1.05) rotate(25)" />
						<use href="#s" transform="scale(1.2) rotate(8)" />
						<use href="#s" transform="scale(1.333) rotate(-60)" />
						<use href="#s" transform="scale(1.45) rotate(-30)" />
						<use href="#s" transform="scale(1.6) rotate(10)" />
					</g>
				</defs>
				<g transform="translate(940 0)">
					<g transform="translate(0 615)">
						<circle fill="url(#a)" r="3000" />
						<g opacity="0.5">
							<circle fill="url(#a)" r="2000" />
							<circle fill="url(#a)" r="1800" />
							<circle fill="url(#a)" r="1700" />
							<circle fill="url(#a)" r="1651" />
							<circle fill="url(#a)" r="1450" />
							<circle fill="url(#a)" r="1250" />
							<circle fill="url(#a)" r="1175" />
							<circle fill="url(#a)" r="900" />
							<circle fill="url(#a)" r="750" />
							<circle fill="url(#a)" r="500" />
							<circle fill="url(#a)" r="380" />
							<circle fill="url(#a)" r="250" />
						</g>
						<g transform="rotate(${svgRoatate} 0 0)">
							<use href="#g" transform="rotate(10)" />
							<use href="#g" transform="rotate(120)" />
							<use href="#g" transform="rotate(240)" />
						</g>
						<circle fill-opacity="0" fill="url(#a)" r="3000" />
					</g>
				</g>
			</svg>`;

	const divStyle = {
		backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(svgCode)}")`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		maxHeight: "100vh",
		zIndex: "1",
		height: heightS,
		widthS: widthS,
		overflow: "hidden",
	};
	useEffect(() => {
		const updateState = () => {
			setSvgRoatate((prevCount) => prevCount + -1);
		};

		let counter = 0;

		const updateLoop = () => {
			if (counter < 50) {
				setTimeout(() => {
					updateState();
					updateLoop();
					counter++;
				}, 50); // Delay in milliseconds
			}
		};

		// Start the loop
		updateLoop();
	}, []);
	useEffect(() => {
		async function fetchData() {
			try {
				let response = await fetch(`/api/skill/details`);

				if (!response.ok) {
					throw new Error(`Failed to fetch data: ${response.statusText}`);
				}

				let responseData = await response.json();

				if (responseData.success && responseData.data) {
					setData([...responseData.data]);
					setTimeout(() => {
						handlePopup();
					}, 2000);
				} else {
					console.log(responseData.statusText || responseData.message);
				}
			} catch (error) {
				console.error("An error occurred while fetching data:", error);
			} finally {
				setLoading(false);
			}
		}

		setLoading(true);
		fetchData();
	}, []);

	const Margin = {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
	};
	const SizeDivisor = 0.8;
	const NodePadding = 10.5;
	let simulation = null;
	let graphData = null;

	let refNode = useRef(null);

	useEffect(() => {
		simulation = d3.forceSimulation();

		data?.forEach((d) => {
			if (d.value) {
				d.size = +d.value * 20;
				d.size < 1 ? (d.radius = 1) : (d.radius = d.size);
			} else {
				d.value = +d.value;
				d.size = +d.value / SizeDivisor;
				d.size < 3 ? (d.radius = 3) : (d.radius = d.size);
			}
		});

		graphData = data.sort((a, b) => {
			return b.size - a.size;
		});

		createBubblePlot(graphData);
	}, [data, windowWidth, windowHeight]);

	const createBubblePlot = (data) => {
		// Clear existing content inside the SVG
		d3.select(refNode.current).selectAll("g").remove();

		// Calculate width and height
		const width = windowWidth - Margin.left - Margin.right;
		const height = windowHeight - Margin.top - Margin.bottom;

		// Define forces
		const forceX = d3
			.forceX()
			.strength(0.1)
			.x(width * 0.5);
		const forceY = d3
			.forceY()
			.strength(0.1)
			.y(height * 0.5);
		const centerForce = d3
			.forceCenter()
			.x(width * 0.5)
			.y(height * 0.5);
		const chargeForce = d3.forceManyBody().strength(-15);

		simulation
			.force("forceX", forceX)
			.force("forceY", forceY)
			.force("center", centerForce)
			.force("charge", chargeForce);

		// Create a tooltip div
		const tooltip = d3
			.select("body")
			.append("div")
			.style("position", "absolute")
			.style("z-index", "2")
			.style("visibility", "hidden")
			.text((d) => `${d && d.value ? d.value : ""}`);

		const nodeg = d3
			.select(refNode.current)
			.attr("width", width + Margin.left + Margin.right)
			.attr("height", height + Margin.top + Margin.bottom)
			.append("g")
			.attr("transform", `translate(${Margin.left},${Margin.top})`);

		// Define nodes, text, and inner circles
		let nodes, nodestext1, nodeinnercircle;

		// Configure simulation
		simulation
			.nodes(data)
			.force(
				"collide",
				d3
					.forceCollide()
					.strength(0.5)
					.radius((d) => {
						const adjustedHeight = height - width > 50 ? height - (height - width) + 50 : height;
						const aspectRatio = width > adjustedHeight ? width / adjustedHeight / 2 : adjustedHeight / width / 2;
						return aspectRatio * d.radius + NodePadding;
					})
					.iterations(1)
			)
			.on("tick", function () {
				nodes.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

				nodestext1.attr("x", (d) => d.x).attr("y", (d) => d.y);

				nodeinnercircle.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
			});

		const nodedata = nodeg.selectAll("circle").data(data).enter();

		nodes = nodedata
			.append("circle")
			.attr("r", (d) => {
				const adjustedHeight = height - width > 50 ? height - (height - width) + 50 : height;
				const aspectRatio = width > adjustedHeight ? width / adjustedHeight / 2 : adjustedHeight / width / 2;
				return aspectRatio * d.radius;
			})
			.attr("fill", (d) => {
				if (d.value > 4.5) {
					return "#6f8cc3";
				} else if (d.value > 4.0) {
					return "#00cc9c";
				} else if (d.value > 3.5) {
					return "#7ecd8c";
				} else if (d.value > 3.0) {
					return "#7a7cb8";
				} else if (d.value > 2.5) {
					return "#d378a0";
				} else if (d.value > 2.0) {
					return "#e3654f";
				} else if (d.value > 1.5) {
					return "#87b287";
				} else {
					return "#9254DE";
				}
			})
			.attr("fill-opacity", (d) => {
				if (d.value) {
					const opacity = d.value.toFixed(2);
					return opacity >= 4 ? opacity : opacity < 4 && opacity > 3 ? 0.8 : opacity < 3 && opacity > 2 ? 0.6 : 0.5;
				} else {
					return 1;
				}
			})
			.attr("cx", (d) => d.x)
			.attr("cy", (d) => d.y)
			.style("z-index", "5")
			.on("mouseover", function (e, d) {
				mouseOver(e, d);
				tooltip.html(d.label && d !== "undefined" ? showTooltip(d) : "");
				tooltip.style("visibility", "visible");
			})
			.on("mousemove", function (e, d) {
				tooltip.style("top", "15%").style("left", "1%");
			})
			.on("mouseout", function (e, d) {
				mouseOut(e, d);
				tooltip.style("visibility", "hidden");
			})
			.call(d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended));

		nodeinnercircle = nodedata
			.append("circle")
			.attr("cx", (d) => d.x)
			.attr("cy", (d) => d.y)
			.attr("r", (d) => {
				if (d.label === "" || d.label === " ") {
					return 0;
				} else {
					return 11;
				}
			})
			.attr("visibility", (d) => {
				if (d.label === "" || d.label === " " || !d.label) {
					return "hidden";
				} else {
					return "visible";
				}
			})
			.attr("fill", "#000000")
			.style("z-index", "5")
			.attr("fill-opacity", "0");

		const nodetxt = nodeg.selectAll("text").data(data).enter();

		nodestext1 = nodetxt
			.append("text")
			.attr("x", (d) => d.x)
			.attr("y", (d) => d.y)
			.attr("dy", ".3em")
			.style("text-anchor", "middle")
			.text(function (d) {
				return d.label;
			})
			.attr("r", (d) => {
				if (d.label === "" || d.label === " ") {
					return 0;
				} else {
					return 11;
				}
			})
			.attr("visibility", (d) => {
				if (d.label === "" || d.label === " " || !d.label) {
					return "hidden";
				} else {
					return "visible";
				}
			})
			.attr("font-family", "SF-Pro-Display-Semibold")
			.attr("font-size", "calc(1vh + 1.3vw)")
			.attr("font-weight", 800)
			.text(function (d) {
				return d.label;
			})
			.attr("line-height", "20px")
			.attr("fill", "white");

		simulation.alphaTarget(0.03).restart();
	};

	const dragstarted = (e, d) => {
		if (!e.active) simulation.alphaTarget(0.03).restart();
		d.fx = e.x;
		d.fy = e.y;
	};

	const dragged = (e, d) => {
		d.fx = e.x;
		d.fy = e.y;
	};

	const dragended = (e, d) => {
		if (!e.active) simulation.alphaTarget(0.03);
		d.fx = null;
		d.fy = null;
	};

	const mouseOver = (e, data) => {
		if (data) {
			if (data.label !== "" && data.label !== " ") {
				if (onMouseOver) {
					onMouseOver(e, data);
				}
			}
		}
	};

	const mouseOut = (e, data) => {
		if (data) {
			if (data.label !== "" && data.label !== " ") {
				if (onMouseOut) {
					onMouseOut(e, data);
				}
			}
		}
	};

	const showTooltip = (d) => {
		return `<div class="bubble">
      <div class="bubbleTooltip">
        <h5 class="tooltipHeader">
			<span>Skill</span> 
			<span>
			<i class="${d.icon}" ></i>
			<strong class="bubbleStrong"> ${d.label}</strong> 
			</span>
		</h5>
      </div>
	${
		d.experience?.length > 0
			? `<div class="bubbleTooltip">
		<h5 class="tooltipHeader">
			<span>Active </span> 
			<span>
				<em>since ${d.experience}</em>
			</span>
		</h5>
	</div>`
			: ""
	}
      <div class="bubbleTooltip">
        <h5 class="tooltipHeader">
		<span>Proficiency </span>
		<span>${stars(d.value)}</span>
		
		</h5>
      </div>
      <div class="bubbleTooltip">
        <h5><strong class="bubbleStrong">Description</strong></h5>
        <h6><span>${d.description}</span></h6>
      </div>
    </div>`;
	};

	const stars = (val) => {
		let starList = "";
		while (val > 0) {
			starList += val < 1 ? halfStar : oneStar;
			val -= 1;
		}
		return starList;
	};

	const handlePopup = () => {
		setShowAlert(!showAlert);
	};
	return (
		<div style={divStyle}>
			{data.length > 0 ? <svg ref={refNode} className="svgBody" /> : "NO Data Found"}
			{loading && <Loader />}
			<Modal show={showAlert} onHide={setShowAlert} className="modelContainer">
				<Modal.Body>
					<h5> Hover/Tap over Bubble for more Detail on Skill &#x1F913; </h5>
					<h5> Drag bubble to play with them &#128515;</h5>
					<h6 onClick={handlePopup}>close</h6>
					<div className="pointingTri"></div>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default Skill;
