const express = require("express")
const router = new express.Router()
const { User } = require("../models")


router.get("/users", async (req, res) => {
    const getusers = await User.findAll()
    res.json(getusers)
})

router.post("/users", async (req, res) => {
    const user = req.body
    await User.create(user)
    res.json(user)
})


module.exports = router