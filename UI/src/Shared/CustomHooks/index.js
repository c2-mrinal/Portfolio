import React, { useState, useEffect, useRef } from "react";

const useMyFirstHook = (input) => {
	console.log("customHook", input);
	// ...
};

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

export { useMyFirstHook, useProgressiveImage };
