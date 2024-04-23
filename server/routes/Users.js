const express = require("express")
const router = new express.Router()
const { 
    getUsers,
    create,
    login
 } = require("../controllers/userController")


router.get("/users", getUsers)

router.post("/users", create)

router.post("/users/login", login)


module.exports = router