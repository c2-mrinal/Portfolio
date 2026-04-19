"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TimelinePanel from "../Molecules/TimelinePanel";

gsap.registerPlugin(ScrollTrigger);

interface TimelineScrollerProps {
	data: any[];
}

export default function TimelineScroller({ data }: TimelineScrollerProps) {
	const componentRef = useRef<HTMLDivElement>(null);
	const sliderRef = useRef<HTMLDivElement>(null);
	const panelYearRef = useRef<(HTMLDivElement | null)[]>([]);
	const [currentScrollIndex, setCurrentScrollIndex] = useState(0);
	const scrollIndexRef = useRef(0); // localized ref tracking across scrolling

	useEffect(() => {
		if (!data || !data.length) return;

		const ctx = gsap.context(() => {
			const panels = gsap.utils.toArray(".panel");

			const panelsLength = panels.length;
			const totalDuration = Math.max(1, panelsLength - 1);

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sliderRef.current,
					pin: true,
					scrub: 1,
					snap: 1 / totalDuration,
					end: () => "+=" + (sliderRef.current?.offsetWidth || 0),
					markers: false,
					onUpdate: (self) => {
						const progress = self.progress;
						const newIndex = Math.floor(progress * panelsLength);
						if (newIndex !== scrollIndexRef.current) {
							scrollIndexRef.current = newIndex;
							setCurrentScrollIndex(newIndex);
						}
					},
				}
			});

			// Master horizontal drag across viewport constraint
			tl.to(panels, {
				xPercent: -100 * totalDuration,
				ease: "none",
				duration: totalDuration,
			}, 0);

			// Individual deep panel 3D trajectory logic mapping onto geometric shapes
			panels.forEach((panel, i) => {
				const textContainer = (panel as HTMLElement).querySelector('.textContainer');

				// Setup initial nested z-index state embedding it cleanly inside the fixed geometric frames
				gsap.set(textContainer, {
					scale: 0.6,
					y: 200,
					rotationZ: 10,
					opacity: 0,
					zIndex: 2 // Ensures rendering passes logically behind static aqua frame paths like shape3 (which has z:5)
				});

				const startTime = i - 1;
				const centerTime = i;
				
				// Entry winding forward arriving towards center screen
				if (i > 0) {
					tl.to(textContainer, {
						opacity: 1,
						scale: 1,
						y: 0,
						rotationZ: 0,
						ease: "power2.out",
						duration: 1
					}, startTime);
				} else {
					// Index 0 instantly anchors center-stage immediately
					gsap.set(textContainer, { opacity: 1, scale: 1, y: 0, rotationZ: 0 });
				}

				// Exiting winding back sliding out past left constraint
				if (i < totalDuration) {
					tl.to(textContainer, {
						opacity: 0,
						scale: 0.6,
						y: -200,
						rotationZ: -10,
						ease: "power2.in",
						duration: 1
					}, centerTime);
				}
			});
		}, componentRef);

		return () => ctx.revert();
	}, [data]);

	return (
		<div ref={componentRef}>
			{data.length > 0 && (
				<div ref={sliderRef} className="containers" style={{ width: 100 * data.length + "vw" }}>
					{data.map((val, ind) => (
						<TimelinePanel
							key={val?.age + ind}
							val={val}
							ind={ind}
							currentScrollIndex={currentScrollIndex}
							ref={(el) => {
                                panelYearRef.current[ind] = el;
                            }}
						/>
					))}
				</div>
			)}
		</div>
	);
}
