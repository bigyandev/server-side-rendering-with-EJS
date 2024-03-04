const { getUser } = require("../utilities/userAuth");

async function restrictToLoggedInUserOnly(req,res,next) {
  const userId = req.cookies.uuid;
  if(!userId) return res.redirect("/")
  const user = await getUser(userId)
  console.log(user)
  if(!user) res.redirect("/")
  req.user = user
  next()
}

async function checkAuth(req,res,next) {
    const userId = req.cookies.uuid;
    const user = await getUser(userId)
    req.user = user
    next()
}

module.exports = {
    restrictToLoggedInUserOnly,
    checkAuth
}