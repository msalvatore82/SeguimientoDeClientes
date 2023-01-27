const express = require("express");
const ClientController = require("../controllers/ClientController");
const router = express.Router();
const { authentication } = require("../middlewares/authentication");


router.post("/createClient", authentication, ClientController.createClient);

module.exports = router;

