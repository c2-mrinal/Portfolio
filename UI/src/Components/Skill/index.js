import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import * as d3 from "d3";
import "./skill.css";

function useWindowSize() {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return size;
}

function Skill(props) {
	const [propWidth, propHeight] = useWindowSize();

	// const [Color, setColor] = useState(null);

	const [Data, setData] = useState([]);
	useEffect(() => {
		async function fetchMyAPI() {
			let response = await fetch(`/api/skill/details`);
			response = await response.json();
			setData([...response.skillData]);
		}
		return () => {
			fetchMyAPI();
		};
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
	let graphdata = null;

	let refNode = useRef(null);

	useEffect(() => {
		simulation = d3.forceSimulation();

		Data.forEach((d) => {
			if (d.value) {
				d.size = +d.value * 20;
				d.size < 1 ? (d.radius = 1) : (d.radius = d.size);
			} else {
				d.value = +d.value;
				d.size = +d.value / SizeDivisor;
				d.size < 3 ? (d.radius = 3) : (d.radius = d.size);
			}
		});
		graphdata = Data.sort((a, b) => {
			return b.size - a.size;
		});
		createBubblePlot(graphdata);
	}, [Data, propWidth, propHeight]);

	const createBubblePlot = (data) => {
		d3.select(refNode.current).selectAll("g").remove();
		const width = propWidth - Margin.left - Margin.right;
		const height = propHeight - Margin.top - Margin.bottom;
		simulation
			.force(
				"forceX",
				d3
					.forceX()
					.strength(0.1)
					.x(width * 0.5)
			)
			.force(
				"forceY",
				d3
					.forceY()
					.strength(0.1)
					.y(height * 0.5)
			)
			.force(
				"center",
				d3
					.forceCenter()
					.x(width * 0.5)
					.y(height * 0.5)
			)
			.force("charge", d3.forceManyBody().strength(-15));

		var tooltip = d3
			.select("body")
			.append("div")
			.style("position", "absolute")
			.style("z-index", "10")
			.style("visibility", "hidden")
			.text(function (d) {
				return `${d && d.value}`;
			});

		const nodeg = d3
			.select(refNode.current)
			.attr("width", width + Margin.left + Margin.right)
			.attr("height", height + Margin.top + Margin.bottom)
			.append("g")
			.attr("transform", "translate(" + Margin.left + "," + Margin.top + ")");
		let nodes = null;
		let nodestext1 = null;
		let nodeinnercircle = null;

		simulation
			.nodes(data)
			.force(
				"collide",
				d3
					.forceCollide()
					.strength(0.5)
					.radius((d) => {
						return (width / height / 2) * d.radius + NodePadding;
					})
					.iterations(1)
			)
			.on("tick", function (d) {
				nodes
					.attr("cx", (d) => {
						return d.x;
					})
					.attr("cy", (d) => {
						return d.y;
					});

				nodestext1
					.attr("x", (d) => {
						return d.x;
					})
					.attr("y", (d) => {
						return d.y;
					});

				nodeinnercircle
					.attr("cx", (d) => {
						return d.x;
					})
					.attr("cy", (d) => {
						return d.y;
					});
			});

		let nodedata = nodeg.selectAll("circle").data(data).enter();

		nodes = nodedata
			.append("circle")
			.attr("r", (d) => {
				return (width / height / 2) * d.radius;
			})
			.attr("fill", (d) => {
				if (d.value > 4.5) {
					return "#87b287";
				} else if (d.value > 4.0) {
					return "#82a823";
				} else if (d.value > 3.5) {
					return "#d4eaa4";
				} else if (d.value > 3.0) {
					return "#ada43c";
				} else if (d.value > 2.5) {
					return "#aac477";
				} else if (d.value > 2.0) {
					return "#71b56e";
				} else if (d.value > 1.5) {
					return "#87b287";
				} else {
					return "#9254DE";
				}
			})
			.attr("fill-opacity", (d) => {
				if (d.value) {
					let opacity = d.value.toFixed(2);
					if (opacity >= 4) {
						return opacity;
					} else if (opacity < 4 && opacity > 3) {
						return 0.8;
					} else if (opacity < 3 && opacity > 2) {
						return 0.6;
					} else {
						return 0.5;
					}
				} else {
					return 1;
				}
			})
			.attr("cx", (d) => {
				return d.x;
			})
			.attr("cy", (d) => {
				return d.y;
			})
			.on("mouseover", function (e, d) {
				mouseOver(e, d);
				tooltip.html(showTooltip(d));
				tooltip.style("visibility", "visible");
			})
			.on("mousemove", function (e, d) {
				tooltip.style("top", d.y + d.radius / 2 - 10 + "px").style("left", d.x + d.radius / 2 + 10 + "px");
			})
			.on("mouseout", function (e, d) {
				mouseOut(e, d);
				tooltip.style("visibility", "hidden");
			})
			.call(d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended));

		nodeinnercircle = nodedata
			.append("circle")
			.attr("cx", (d) => {
				return d.x;
			})
			.attr("cy", (d) => {
				return d.y;
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
			.attr("fill", "#000000")
			.attr("fill-opacity", "0");

		let nodetxt = nodeg.selectAll("text").data(data).enter();

		nodestext1 = nodetxt
			.append("text")
			.attr("x", (d) => {
				return d.x;
			})
			.attr("y", (d) => {
				return d.y;
			})
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
			.attr("font-size", "1.2rem")
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
	let handleResize = () => {
		createBubblePlot(graphdata);
	};

	useEffect(() => {
		// createBubblePlot(graphdata);
	}, [propWidth]);

	const mouseOver = (e, data) => {
		if (data) {
			if (data.label !== "" && data.label !== " ") {
				if (props.onMouseOver) {
					props.onMouseOver(e, data);
				}
			}
		}
	};
	const mouseOut = (e, data) => {
		if (data) {
			if (data.label !== "" && data.label !== " ") {
				if (props.onMouseOut) {
					props.onMouseOut(e, data);
				}
			}
		}
	};
	const showTooltip = (d) => {
		return `<div class="bubble">
        <div>Skill: ${d.label}</div>
        <div>Profency: ${d.value}</div>
        <div>Description: ${d.description}</div>
        </div>`;
	};

	return (
		<>
			<svg ref={refNode} className="svgBody" />
		</>
	);
}

export default Skill;
