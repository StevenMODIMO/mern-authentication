const express = require("express");
const { sign } = require("jsonwebtoken");
const router = express.Router();
const { signupUser, loginUser } = require("../controllers/userControllers");

router.post("/signup", signupUser);

router.post("/login", loginUser);

module.exports = router;
