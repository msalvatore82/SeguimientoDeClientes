const express = require("express");
const StatusController = require("../controllers/StatusController");
const router = express.Router();

router.post("/createStatus", StatusController.createStatus);

module.exports = router;

