const express = require("express");
const PersonalDataController = require("../controllers/PersonalDataController");
const router = express.Router();
// const { authentication } = require("../middlewares/authentication");


router.post("/createPersData", PersonalDataController.createPersData);

module.exports = router;

