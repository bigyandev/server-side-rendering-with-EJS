const mongoose = require("mongoose")

const userAuthSchema = new mongoose.Schema({
 name: {
    type: String,
    required: true
 },
 email: {
    type: String,
    required: true,
    unique: true
 },
 password: {
    type: String,
    required: true,
 }
},
{timestamps: true})

const userAuth = mongoose.model("userAuth", userAuthSchema)

module.exports = userAuth