const path = require("path");
const express = require("express");

const skillData = require("./modules/skills/skillData");

const app = express();

// default file to be called in case of no defined path
const publicDirPath = path.join(__dirname, "../src");
app.use(express.static(publicDirPath));

app.get("/skill", (req, res) => {
  res.send(skillData);
});
app.get("/about", (req, res) => {
  res.send("About detail");
});

app.listen(8080, (error) => {
  if (error) {
    console.log("there is some problem with server !!", error);
  } else {
    console.log("Server is up on port:", 8080);
  }
});
