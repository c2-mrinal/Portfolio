"use client";

import React, { useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "@nextui-org/react";
import { Circle } from "../../../Shared/CircleRef";

interface CursorLinkProps {
	delay?: boolean;
	sizeFixed?: boolean;
	pointerCircle: number[];
	pointerIndex: number;
	pointerComp: boolean[];
	setPointerComp: (updated: boolean[]) => void;
	href: string;
	buttonText: string;
}

const CursorLink: React.FC<CursorLinkProps> = ({ 
    delay, 
    sizeFixed, 
    pointerCircle, 
    pointerIndex, 
    pointerComp, 
    setPointerComp, 
    href, 
    buttonText 
}) => {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const circleRefs = useRef<any[]>([]);

	const onMove = useCallback(
		(event: PointerEvent) => {
			const bounds = wrapperRef.current?.getBoundingClientRect();
			if (!bounds) return;

			const { x, y } = bounds;

			const updatedPointer = Array(4).fill(false);
			updatedPointer[pointerIndex] = true;
			setPointerComp(updatedPointer);

			circleRefs.current.forEach((circle) => {
				if (circle?.moveTo) {
					circle.moveTo(event.clientX - x, event.clientY - y);
				}
			});
		},
		[pointerIndex, setPointerComp]
	);

	useEffect(() => {
		const wrapper = wrapperRef.current;
		if (wrapper) {
			wrapper.addEventListener("pointermove", onMove as any);
		}
		return () => {
			if (wrapper) {
				wrapper.removeEventListener("pointermove", onMove as any);
			}
		};
	}, [onMove]);

	const addCircleRef = useCallback((ref: any) => {
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
				<Link href={href}>
					<h3>{buttonText}</h3>
				</Link>
			</div>
		</>
	);
}

export default CursorLink;
