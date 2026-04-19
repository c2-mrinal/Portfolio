import { useState, useLayoutEffect } from "react";

export function useWindowSize() {
	const [size, setSize] = useState([0, 0]);
	
	useLayoutEffect(() => {
		let timeoutId: NodeJS.Timeout;

		function updateSize() {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				setSize([window.innerWidth, window.innerHeight]);
			}, 250);
		}

		window.addEventListener("resize", updateSize);
		
		// Initial set without debounce
		setSize([window.innerWidth, window.innerHeight]);

		return () => {
			window.removeEventListener("resize", updateSize);
			clearTimeout(timeoutId);
		};
	}, []);
	
	return size;
}
