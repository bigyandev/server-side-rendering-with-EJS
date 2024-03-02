const express = require("express");
const app = express()
const path = require("path")
const {connectDB} = require("./connection")
const userRoute = require("./userRoute/user")
const staticRoute = require("./userRoute/staticRouter")


//CONNECTION 
connectDB("mongodb://127.0.0.1:27017/userData")

//TEMPLATING ENGINE
app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

//middleware 
app.use(express.urlencoded({extended: false}))

//ROUTE 
app.use("/api/users", userRoute)
app.use("/test", staticRoute)


app.listen(3000)