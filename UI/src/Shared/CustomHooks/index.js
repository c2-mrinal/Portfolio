import React, { useState, useEffect } from "react";

const useMyFirstHook = (input) => {
	console.log("customHook", input);
	// ...
};

const useProgressiveImage = (src) => {
	const [sourceLoaded, setSourceLoaded] = useState(null);

	useEffect(() => {
		const img = new Image();
		img.src = src;
		img.onload = () => setSourceLoaded(src);
	}, [src]);

	return sourceLoaded;
};

export { useMyFirstHook, useProgressiveImage };
