const express = require("express")
const router = new express.Router()
const { User } = require("../models")
const bcryptjs = require("bcryptjs")


router.get("/users", async (req, res) => {
    const getusers = await User.findAll()
    res.json(getusers)
})

router.post("/users", async (req, res) => {
    const {userName, password} = req.body
    bcryptjs.hash(password, 10).then(hash => {
        User.create({
            userName: userName,
            password: hash
        })
    })
    res.json("SUCCESS")
})


module.exports = router