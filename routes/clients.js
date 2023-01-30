const express = require("express");
const ClientController = require("../controllers/ClientController");
const router = express.Router();
const { authentication } = require("../middlewares/authentication");

router.post("/createClient", authentication, ClientController.createClient);
router.get("/getClientbyId/:_id", ClientController.getClientbyId);
router.put("/updateClient/:_id", ClientController.updateClient);

module.exports = router;

