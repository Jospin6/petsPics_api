const express = require("express")
const router = new express.Router()
const { User } = require("../models/user")


router.get("/users", (req, res) => {
    res.send("Hello mr jospin !")
})


module.exports = router