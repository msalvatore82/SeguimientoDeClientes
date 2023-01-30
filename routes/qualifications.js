const express = require("express");
const QualificationController = require("../controllers/QualificationController");
const router = express.Router();

router.post("/createQualification", QualificationController.createQualification);

module.exports = router;

