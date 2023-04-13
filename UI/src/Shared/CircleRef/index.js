import { useRef, useImperativeHandle, forwardRef } from "react";
import gsap from "gsap";

export const Circle = forwardRef(({ size, delay }, ref) => {
	const el = useRef();

	useImperativeHandle(
		ref,
		() => {
			return {
				moveTo(x, y) {
					gsap.to(el.current, { x, y, delay });
				},
			};
		},
		[delay]
	);

	return (
		<div
			className={`circle ${size}`}
			style={{
				position: "absolute",
				transform: `translate(-50%, -50%)`,
				top: 0,
				left: 0,
				background: "green",
				opacity: 0.3,
				height: `${size}px`,
				width: `${size}px`,
				borderRadius: "50%",
				zIndex: 8,
				cursor: "none",
			}}
			ref={el}
		></div>
	);
});
