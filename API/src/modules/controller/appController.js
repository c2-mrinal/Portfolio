const { skillData } = require("../data/skills/skillData");
const { folderData, aboutData } = require("../data/about/aboutData");
const process = require("process");
const fs = require("fs");
const path = require("path");

const skillDetail = (req, res) => {
	try {
		if (skillData) {
			res.status(200).json({ success: true, message: "Mrinal's Portolio Skills List", data: skillData });
		} else if (!skillData) {
			res.status(204).send({ success: true, message: "No Data Found for Mrinal's Portolio Skills List", data: [] });
		}
	} catch (e) {
		console.error(e);
		res.status(500).end();
	}
};

const aboutFolder = (req, res) => {
	try {
		if (folderData) {
			res.status(200).send({ success: true, message: "Mrinal's Portolio About List", data: folderData });
		} else if (!folderData) {
			res.status(204).send({ success: true, message: "No Data Found for Mrinal's Portolio About List", data: [] });
		}
	} catch (e) {
		console.error(e);
		res.status(500).end();
	}
};

const aboutDetails = (req, res) => {
	try {
		const data = aboutData[req.params.folderIs];
		if (data) {
			res.status(200).send({ success: true, message: "Mrinal's Portolio About Folder  Details", data: data });
		} else if (!aboutData) {
			res
				.status(204)
				.send({ success: true, message: "No Data Found for Mrinal's Portolio About Folder Details", data: [] });
		} else if (aboutData && !data) {
			res.status(400).send({ success: false, message: "No Data Found", data: [] });
		}
	} catch (e) {
		console.error(e);
		res.status(500).end();
	}
};
const resume = (req, res) => {
	try {
		const URL = process.env.URL;
		if (URL) {
			res.status(200).send({
				success: true,
				message: "Mrinal's Portolio Resume Download",
				data: { url: `${URL}/api/resume/download` },
			});
		} else if (!URL) {
			res.status(204).send({
				success: true,
				message: "No URL Found for Mrinal's Portolio Resume Download",
				data: [],
			});
		}
	} catch (e) {
		console.error(e);
		res.status(500).end();
	}
};

const resumeDownloader = (req, res) => {
	try {
		const file = path.join(__dirname, "..", "..", "files", "Mrinal_Kasyap_Resume.pdf");
		if (file) {
			res.status(200).download(file);
		} else {
			res.status(204).send("");
		}
	} catch (e) {
		console.error(e);
		res.status(500).end();
	}
};

module.exports = {
	skillDetail,
	aboutFolder,
	aboutDetails,
	resume,
	resumeDownloader,
};
