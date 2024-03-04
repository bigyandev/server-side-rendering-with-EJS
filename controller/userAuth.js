const {v4: uuidv4} = require("uuid")
const userAuth = require("../model/userAuth");
const {setUser} = require("../utilities/userAuth")


async function handleUserSignUp(req,res) {
    const {name,email,password} = req.body;
    await userAuth.create({
        name,
        email,
        password
    })
    res.redirect("/")
}

async function handleUserLogIn(req,res) {
    const {email,password} = req.body;
    const loggedInUser = await userAuth.findOne({email,password})
    if(!loggedInUser) return res.render("/login")
    const sessionId = uuidv4()
    setUser(sessionId,loggedInUser);
    res.cookie("uuid", sessionId)
    res.redirect("/")

}
module.exports = {
    handleUserSignUp,
    handleUserLogIn
}