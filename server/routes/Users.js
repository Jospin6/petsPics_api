const express = require("express")
const router = new express.Router()

const {validateToken} = require("../middlewares/authMiddleware")
const { 
    getUsers,
    create,
    show,
    login
} = require("../controllers/userController")


router.get("/users", validateToken, getUsers)

router.post("/users", create)
router.get("/users/:id", show)

router.post("/users/login", login)



module.exports = router