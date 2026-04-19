import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { getSkillTooltipHtml } from "../Atoms/skillTooltipHTML";

interface BubbleChartProps {
	data: any[];
	windowWidth: number;
	windowHeight: number;
	onMouseOver?: (e: any, d: any) => void;
	onMouseOut?: (e: any, d: any) => void;
}

const Margin = { top: 0, right: 0, bottom: 0, left: 0 };
const SizeDivisor = 0.8;
const NodePadding = 10.5;

export function BubbleChart({ data, windowWidth, windowHeight, onMouseOver, onMouseOut }: BubbleChartProps) {
	const refNode = useRef<SVGSVGElement | null>(null);

	useEffect(() => {
		if (!data || data.length === 0 || !refNode.current) return;

		const simulation = d3.forceSimulation();

		data.forEach((d) => {
			if (d.value) {
				d.size = +d.value * 20;
				d.size < 1 ? (d.radius = 1) : (d.radius = d.size);
			} else {
				d.value = +d.value;
				d.size = +d.value / SizeDivisor;
				d.size < 3 ? (d.radius = 3) : (d.radius = d.size);
			}
		});

		const graphData = data.sort((a, b) => b.size - a.size);

		const width = windowWidth - Margin.left - Margin.right;
		const height = windowHeight - Margin.top - Margin.bottom;

		d3.select(refNode.current).selectAll("g").remove();
		d3.select("body").selectAll(".bubble").remove(); // clean up previous tooltip

		const forceX = d3.forceX(width * 0.5).strength(0.1);
		const forceY = d3.forceY(height * 0.5).strength(0.1);
		const centerForce = d3.forceCenter(width * 0.5, height * 0.5);
		const chargeForce = d3.forceManyBody().strength(-15);

		simulation
			.force("forceX", forceX)
			.force("forceY", forceY)
			.force("center", centerForce)
			.force("charge", chargeForce);

		const tooltip = d3
			.select("body")
			.append("div")
            .attr("class", "bubble-tooltip-container")
			.style("position", "absolute")
			.style("z-index", "1000")
			.style("pointer-events", "none")
			.style("visibility", "hidden");

		const svgGroup = d3
			.select(refNode.current)
			.attr("width", width + Margin.left + Margin.right)
			.attr("height", height + Margin.top + Margin.bottom)
			.append("g")
			.attr("transform", `translate(${Margin.left},${Margin.top})`);

		simulation
			.nodes(graphData)
			.force(
				"collide",
				d3
					.forceCollide()
					.strength(0.5)
					.radius((d: any) => {
						const adjustedHeight = height - width > 50 ? height - (height - width) + 50 : height;
						const aspectRatio = width > adjustedHeight ? width / adjustedHeight / 2 : adjustedHeight / width / 2;
						return aspectRatio * d.radius + NodePadding;
					})
					.iterations(1)
			)
			.on("tick", () => {
				nodes.attr("cx", (d: any) => d.x).attr("cy", (d: any) => d.y);
				nodeLabels.attr("x", (d: any) => d.x).attr("y", (d: any) => d.y);
				innerCircles.attr("cx", (d: any) => d.x).attr("cy", (d: any) => d.y);
			});

		const nodeEnter = svgGroup.selectAll("circle").data(graphData).enter();

		const dragstarted = (e: any, d: any) => {
			if (!e.active) simulation.alphaTarget(0.03).restart();
			d.fx = e.x;
			d.fy = e.y;
		};

		const dragged = (e: any, d: any) => {
			d.fx = e.x;
			d.fy = e.y;
		};

		const dragended = (e: any, d: any) => {
			if (!e.active) simulation.alphaTarget(0.03);
			d.fx = null;
			d.fy = null;
		};

		const mouseOverHandler = (e: any, d: any) => {
			if (d && d.label !== "" && d.label !== " ") {
				if (onMouseOver) onMouseOver(e, d);
				tooltip.html(d.label ? getSkillTooltipHtml(d) : "").style("visibility", "visible");
			}
		};

		const mouseOutHandler = (e: any, d: any) => {
			if (d && d.label !== "" && d.label !== " ") {
				if (onMouseOut) onMouseOut(e, d);
				tooltip.style("visibility", "hidden");
			}
		};

		const nodes = nodeEnter
			.append("circle")
			.attr("r", (d: any) => {
				const adjustedHeight = height - width > 50 ? height - (height - width) + 50 : height;
				const aspectRatio = width > adjustedHeight ? width / adjustedHeight / 2 : adjustedHeight / width / 2;
				return aspectRatio * d.radius;
			})
			.attr("fill", (d: any) => {
				if (d.value > 4.5) return "#6f8cc3";
				if (d.value > 4.0) return "#00cc9c";
				if (d.value > 3.5) return "#7ecd8c";
				if (d.value > 3.0) return "#7a7cb8";
				if (d.value > 2.5) return "#d378a0";
				if (d.value > 2.0) return "#e3654f";
				if (d.value > 1.5) return "#87b287";
				return "#9254DE";
			})
			.attr("fill-opacity", (d: any) => {
				const val = parseFloat(d.value) || 1;
				if (val >= 4) return val;
				if (val > 3) return 0.8;
				if (val > 2) return 0.6;
				return 0.5;
			})
			.attr("cx", (d: any) => d.x)
			.attr("cy", (d: any) => d.y)
			.style("z-index", "5")
			.on("mouseover", mouseOverHandler)
			.on("mousemove", (e) => {
				tooltip.style("top", "15%").style("left", "1%");
			})
			.on("mouseout", mouseOutHandler)
			.call(d3.drag<SVGCircleElement, any>().on("start", dragstarted).on("drag", dragged).on("end", dragended));

		const innerCircles = nodeEnter
			.append("circle")
			.attr("cx", (d: any) => d.x)
			.attr("cy", (d: any) => d.y)
			.attr("r", (d: any) => (!d.label || d.label.trim() === "" ? 0 : 11))
			.attr("visibility", (d: any) => (!d.label || d.label.trim() === "" ? "hidden" : "visible"))
			.attr("fill", "#000000")
			.attr("fill-opacity", "0")
			.style("z-index", "5");

		const nodeLabels = svgGroup
			.selectAll("text")
			.data(graphData)
			.enter()
			.append("text")
			.attr("x", (d: any) => d.x)
			.attr("y", (d: any) => d.y)
			.attr("dy", ".3em")
			.style("text-anchor", "middle")
			.attr("visibility", (d: any) => (!d.label || d.label.trim() === "" ? "hidden" : "visible"))
			.attr("font-family", "SF-Pro-Display-Semibold")
			.attr("font-size", "calc(1vh + 1.3vw)")
			.attr("font-weight", 800)
			.attr("fill", "white")
			.text((d: any) => d.label || "");

		simulation.alphaTarget(0.03).restart();

		return () => {
			simulation.stop();
			d3.select("body").selectAll(".bubble-tooltip-container").remove();
		};
	}, [data, windowWidth, windowHeight]);

	return <svg ref={refNode} className="svgBody" />;
}
