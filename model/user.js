const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    role: {
        type: String
    }
})
const User = mongoose.model("regsiterUser", userSchema)
module.exports = User