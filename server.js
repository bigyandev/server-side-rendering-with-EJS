const express = require("express");
const app = express()
const path = require("path")
const cookieParser = require("cookie-parser")
const {connectDB} = require("./connection")

const userRoute = require("./userRoute/user")
const staticRoute = require("./userRoute/staticRouter")
const userAuthRoute = require("./userRoute/userAuth");
const { restrictToLoggedInUserOnly, checkAuth } = require("./middleware/userAuth");



//CONNECTION 
connectDB("mongodb://127.0.0.1:27017/userData")

//TEMPLATING ENGINE
app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

//middleware 
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

//ROUTE  
app.use("/api/users", restrictToLoggedInUserOnly ,userRoute)
app.use("/", checkAuth, staticRoute)
app.use("/userauth",userAuthRoute)


app.listen(3000)