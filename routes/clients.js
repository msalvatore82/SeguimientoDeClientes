const express = require("express");
const ClientController = require("../controllers/ClientController");
const router = express.Router();
const { authentication } = require("../middlewares/authentication");

router.post("/createClient", ClientController.createClient);
router.get("/getClientById/:_id", ClientController.getClientById);
router.put("/updateClient/:_id", ClientController.updateClient);
router.get("/getAllClients", ClientController.getAllClients);



module.exports = router;

