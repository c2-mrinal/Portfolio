const router = require("express").Router();

const path = require("path");
const {
	skillDetail,
	aboutFolder,
	aboutDetails,
	resume,
	resumeDownloader,
	careerTimeline,
} = require("../src/modules/controller/appController");

const { sendMail } = require("./modules/functions/SendMail");

router.get("/career", careerTimeline);
router.get("/skill/details", skillDetail);
router.get("/about/folders", aboutFolder);
router.get("/about/details/:folderIs", aboutDetails);
router.get("/resume", resume);
router.get("/resume/download", resumeDownloader);

router.post("/sendMail", (req, res) => {
	try {
		sendMail(req.body);
		res.send("ok done");
	} catch (e) {
		console.error(e);
		res.status(500).end("errors");
	}
});

module.exports = router;
