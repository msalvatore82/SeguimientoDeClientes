const express = require("express");
const ActionsController = require("../controllers/ActionsController");
const router = express.Router();
// const { authentication } = require("../middlewares/authentication");


router.post("/createAction", ActionsController .createAction);

module.exports = router;

