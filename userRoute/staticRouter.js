const express = require("express")
const router = express.Router()
const {handleStaticShowUser} = require("../controller/user")

router.get("/", handleStaticShowUser)

module.exports = router