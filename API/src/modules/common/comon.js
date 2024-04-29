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

module.exports = { fetchImageFromServer };
