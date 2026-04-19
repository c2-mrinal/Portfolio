import { useEffect, useRef } from "react";

const useProgressiveImage = (src) => {
	const sourceLoadedRef = useRef(null);

	useEffect(() => {
		const img = new Image();
		img.src = src;
		img.onload = () => {
			sourceLoadedRef.current = src;
		};
	}, [src]);

	return sourceLoadedRef.current;
};

export { useProgressiveImage };
export { useWindowSize } from "./useWindowSize";
