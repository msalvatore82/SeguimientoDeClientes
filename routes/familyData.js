const express = require("express");
const FamilyDataController = require("../controllers/FamilyDataController");
const router = express.Router();
// const { authentication } = require("../middlewares/authentication");


router.post("/createFamilyData", FamilyDataController.createFamilyData);

module.exports = router;

