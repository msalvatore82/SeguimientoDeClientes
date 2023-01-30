const express = require("express");
const FollowUpActionsController = require("../controllers/FollowUpActionsController");
const router = express.Router();
// const { authentication } = require("../middlewares/authentication");


router.post("/createFollowUpActions", FollowUpActionsController.createFollowUpActions);
router.put("/updateFollowUpActions/:_id", FollowUpActionsController.updateFollowUpActions);



module.exports = router;

