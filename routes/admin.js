const express = require("express");
const AdminController = require("../controllers/AdminController");
const router = express.Router();
const { authentication } = require("../middlewares/authentication");


router.post("/register", AdminController.register);
router.get('/confirm/:emailToken',AdminController.confirm)
router.post('/login',AdminController.login)
router.delete('/logout',authentication, AdminController.logout)
router.get("/getInfo", authentication, AdminController.getInfo);


module.exports = router;

