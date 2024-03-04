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
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userAuth"
}
})
const User = mongoose.model("regsiterUser", userSchema)
module.exports = User