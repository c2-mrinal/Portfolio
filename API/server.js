const express = require("express");
const appRoutes = require("./src/routes.js");
require("dotenv").config();

const app = express();
const path = require("path");
const Port = process.env.PORT;
const publicDirPath = path.join(__dirname, "../src");
app.use(express.static(publicDirPath));

app.use(express.json());
app.use("/api", appRoutes);

app.listen(Port, (error) => {
	if (error) {
		console.log("there is some problem with server !!", error);
	} else {
		console.log("Server is up on port:", Port);
	}
});
