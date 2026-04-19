"use client";

import React from "react";
import CursorLink from "../Molecules/CursorLink";

interface CursorNavigationGroupProps {
	pointerComp: boolean[];
	setPointerComp: (updated: boolean[]) => void;
}

export default function CursorNavigationGroup({ pointerComp, setPointerComp }: CursorNavigationGroupProps) {
	const navItems = [
		{ sizeFixed: false, pointerCircle: [20], href: "/career", buttonText: "Career", delay: false },
		{ sizeFixed: false, pointerCircle: [50], href: "/skill", buttonText: "Skill", delay: false },
		{ sizeFixed: false, pointerCircle: [10, 20, 30, 40, 50], href: "/about", buttonText: "About", delay: true },
		{ sizeFixed: true, pointerCircle: [1, 2, 4, 6, 9, 12, 15, 18, 22, 26, 30, 34, 38], href: "/contact", buttonText: "Contact", delay: true },
	];

	return (
		<div className="cursorAniContainer">
			{navItems.map((item, index) => (
				<div key={item.buttonText} className={`cursorAnimationSection ca${index + 1}`}>
					<CursorLink
						pointerCircle={item.pointerCircle}
						sizeFixed={item.sizeFixed}
						pointerIndex={index}
						pointerComp={pointerComp}
						setPointerComp={setPointerComp}
						href={item.href}
						buttonText={item.buttonText}
						delay={item.delay}
					/>
				</div>
			))}
		</div>
	);
}
