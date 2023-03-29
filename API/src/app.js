const path = require("path");
const express = require("express");
const fs = require("fs");

const skillData = require("./modules/skills/skillData");
const { folderData, aboutData } = require("./modules/about/aboutData");

const app = express();

// default file to be called in case of no defined path
const publicDirPath = path.join(__dirname, "../src");
app.use(express.static(publicDirPath));
app.get("/api/skill/details", (req, res) => {
  try {
    res.status(200).send(skillData);
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
});
app.get("/api/about/folders", (req, res) => {
  try {
    res.status(200).send(folderData);
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
});
app.get("/api/about/details/:folderIs", (req, res) => {
  try {
    res.status(200).send(aboutData[req.params.folderIs]);
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
});

app.get("/api/resume", (req, res) => {
  try {
    res.status(200).send({ url: "http://localhost:8080/api/resume/download" });
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
});

app.get("/api/resume/download", (req, res) => {
  try {
    var file = "./files/MrinalKasyapResume.pdf";
    var filename = path.basename(file);
    res.setHeader("Content-disposition", "attachment; filename=" + filename);
    res.setHeader("Content-type", "application/pdf");

    var filestream = fs.createReadStream(file);
    filestream.pipe(res);
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
});

app.listen(8080, (error) => {
  if (error) {
    console.log("there is some problem with server !!", error);
  } else {
    console.log("Server is up on port:", 8080);
  }
});
