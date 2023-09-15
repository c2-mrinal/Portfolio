const express = require("express");
const appRoutes = require("./src/routes.js");
require("dotenv").config();

const app = express();
const path = require("path");
const Port = process.env.PORT || 8080;
const publicDirPath = path.join(__dirname, "../UI/build");
app.use(express.static(publicDirPath));
app.use("/api", appRoutes);

app.get("/*", (req, res) => {
	res.sendFile(path.join(publicDirPath, "index.html"));
});

app.use(express.json());

app.listen(Port, (error) => {
	if (error) {
		console.log("there is some problem with server !!", error);
	} else {
		console.log("Server is up on port:", Port);
	}
});
