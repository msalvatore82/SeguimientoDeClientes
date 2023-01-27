const express = require("express");
const router = express.Router();
const ContactController = require("../controllers/ContactController");

router.post("/contact", ContactController.contact);

module.exports = router;

