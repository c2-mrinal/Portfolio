// const fetch = require("node-fetch"); //npm install node-fetch

async function fetchImageFromServer(uriLink) {
	try {
		// Import 'node-fetch' dynamically
		const fetch = await import("node-fetch");

		const response = await fetch.default(uriLink);
		if (!response.ok) {
			throw new Error("Failed to fetch image");
		}
		const imageBuffer = await response.buffer();
		const imageUrl = `data:${response.headers.get("content-type")};base64,${imageBuffer.toString("base64")}`;
		console.log("Image fetched successfully:", imageUrl);
		return imageUrl;
	} catch (error) {
		console.error("Error fetching image:", { uriLink }, error);
		return null;
	}
}
function getCurrentYear(val) {
	let words = new Array();
	const date = new Date();
	let yr = date.getFullYear();
	let n = yr - val;
	const ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
	const tens = [
		"ten",
		"eleven",
		"twelve",
		"thirteen",
		"fourteen",
		"fifteen",
		"sixteen",
		"seventeen",
		"eighteen",
		"nineteen",
	];
	const twenties = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
	if (n == 0) {
		return "This Year";
	}
	if (n < 10) {
		return ones[n] + " Year Back";
	} else if (n < 100) {
		if (n < 20) {
			return tens[n - 10] + " Year Back";
		} else {
			words.push(twenties[Math.floor(n / 10) - 2]);
			words.push(ones[n % 10]);
			return words.join("-") + " Year Back";
		}
	}
}

module.exports = { fetchImageFromServer, getCurrentYear };
