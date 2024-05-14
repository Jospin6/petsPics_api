const express = require("express")
const router = new express.Router()

const {validateToken} = require("../middlewares/authMiddleware")
const { 
    getUsers,
    create,
    show,
    login,
    currentUser,
    update,
    changePassword
} = require("../controllers/userController")


router.get("/users", validateToken, getUsers)
router.get("/users/auth", validateToken, currentUser)

router.post("/users", create)
router.get("/users/:id", show)

router.post("/users/login", login)
router.put("/users", validateToken, update)
router.put("/users/changePassword", validateToken, changePassword)


module.exports = router