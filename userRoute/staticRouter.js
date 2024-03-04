const express = require("express")
const router = express.Router()
const {handleStaticShowUser} = require("../controller/user")

router.get("/", handleStaticShowUser)

router.get("/signup", (req,res) => {
    res.render("signUp")
})
router.get("/login", (req,res) => {
    res.render("logIn")
})

module.exports = router