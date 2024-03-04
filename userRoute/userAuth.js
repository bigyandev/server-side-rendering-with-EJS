const express = require("express");
const router = express.Router()
const {v4: uuidv4} = require("uuid")
const {handleUserSignUp,handleUserLogIn} = require("../controller/userAuth")

router.post("/", handleUserSignUp)
router.post("/login", handleUserLogIn)

module.exports = router 