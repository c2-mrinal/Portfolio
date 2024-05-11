const { skillData } = require("../data/skills/skillData");
const { folderList, folderData, aboutData } = require("../data/about/aboutData");
const process = require("process");
const fs = require("fs");
const path = require("path");
const { careerData } = require("../data/career/careerData");

const careerTimeline = (req, res) => {
	try {
		const apiData = careerData
			? { status: 200, success: true, message: "Mrinal's Portolio Career Data", data: careerData }
			: { status: 204, success: true, message: "No Data Found for Mrinal's Portolio career" };
		res.status(200).json(apiData);
	} catch (e) {
		console.error(e);
		res.status(500).end();
	}
};

const skillDetail = (req, res) => {
	try {
		const apiData = skillData
			? { status: 200, success: true, message: "Mrinal's Portolio Skills List", data: skillData }
			: { status: 204, success: true, message: "No Data Found for Mrinal's Portolio Skills List" };
		res.status(200).json(apiData);
	} catch (e) {
		console.error(e);
		res.status(500).end();
	}
};

const aboutFolder = (req, res) => {
	try {
		const apiData = folderData
			? { status: 200, success: true, message: "Mrinal's Portolio About List", data: folderData }
			: { status: 204, success: true, message: "No Data Found for Mrinal's Portolio About List" };
		res.status(200).json(apiData);
	} catch (e) {
		console.error(e);
		res.status(500).end();
	}
};
const aboutFolderSelected = (req, res) => {
	try {
		const defVal = req.params.default;
		if (Object.keys(folderList).includes(defVal)) {
			let folData = folderData;
			folData.defaultSelected = {
				isFolder: false,
				value: defVal,
				category: folderList[defVal],
			};
			const apiData = folderData
				? { status: 200, success: true, message: "Mrinal's Portolio About List", data: folData }
				: { status: 204, success: true, message: "No Data Found for Mrinal's Portolio About List" };
			res.status(200).json(apiData);
		} else {
			aboutFolder(req, res);
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
			res
				.status(200)
				.send({ status: 200, success: true, message: "Mrinal's Portolio About Folder  Details", data: data });
		} else if (!aboutData) {
			res.status(204).send({
				status: 204,
				success: true,
				message: "No Data Found for Mrinal's Portolio About Folder Details",
				data: [],
			});
		} else if (aboutData && !data) {
			res.status(400).send({ status: 400, success: false, message: "No Data Found", data: [] });
		}
	} catch (e) {
		console.error(e);
		res.status(500).end();
	}
};
const resume = (req, res) => {
	try {
		const URL = process.env.URL || "http://localhost:8080";
		const apiData = URL
			? {
					status: 200,
					success: true,
					message: "Mrinal's Portolio Resume Download",
					data: { url: `${URL}/api/resume/download` },
			  }
			: { status: 204, success: true, message: "No URL Found for Mrinal's Portolio Resume Download" };
		res.status(200).json(apiData);
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
			res.status(200).send({ status: 204, success: true, message: "Something Went Wrong!! No Resume to Download" });
		}
	} catch (e) {
		console.error(e);
		res.status(500).end();
	}
};

module.exports = {
	careerTimeline,
	skillDetail,
	aboutFolder,
	aboutFolderSelected,
	aboutDetails,
	resume,
	resumeDownloader,
};
