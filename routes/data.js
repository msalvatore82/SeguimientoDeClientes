const express = require("express");
const PersonalDataController = require("../controllers/PersonalDataController");
const router = express.Router();


router.post("/createPersData", PersonalDataController.createPersData);

module.exports = router;

