const User = require("../model/user")

async function handleGetAllUsers(req,res) {
    const users = await User.find({})
    return res.json(users)
}
async function handleCreateUser(req,res) {
    const body = req.body;
    await User.create({
        name: body.name,
        age: body.age,
        role: body.role,
        createdBy: req.user._id

    })
    const allUsers = await User.find({})
    return res.render("home",{users: allUsers})
    
}

async function handleGetUserbyId(req,res) {
    const id = req.params.id
    const searchedUser =  await User.findById(id)
    if(!searchedUser) return res.status(404).json({error: "user not found"})
    return res.json(searchedUser)
}

async function handleEditUserById(req,res) {
    const id = req.params.id
    const body = req.body
    console.log(body)
    await User.findByIdAndUpdate(id,body)
    return res.json({msg: "success"})
}

async function handleDeleteUserById(req,res) {
    const id = req.params.id
    await User.findByIdAndDelete(id)
    return res.json({msg: "success"})
}

//static Routing 

async function handleStaticShowUser(req,res) {
    const allUsers = await User.find({createdBy: req.user._id})
    res.render("home", {
        users: allUsers
    })
}

module.exports = {
    handleGetAllUsers,
    handleCreateUser,
    handleGetUserbyId,
    handleEditUserById,
    handleDeleteUserById,
    handleStaticShowUser
}