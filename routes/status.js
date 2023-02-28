const express = require("express");
const StatusController = require("../controllers/StatusController");
const router = express.Router();

router.post("/createStatus", StatusController.createStatus);
router.put("/updateStatus", StatusController.updateStatus)



module.exports = router;

