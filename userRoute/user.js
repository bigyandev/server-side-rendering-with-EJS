
const express = require("express")
const router = express.Router()

const { handleCreateUser,
       handleGetAllUsers,
       handleGetUserbyId,
       handleEditUserById,
       handleDeleteUserById } = require("../controller/user")

router.get("/", handleGetAllUsers)
router.post("/", handleCreateUser)

router.route("/:id")
    .get(handleGetUserbyId)
    .patch(handleEditUserById)
    .delete(handleDeleteUserById)

module.exports = router