const express = require("express")
const router = new express.Router()
const { 
    create,
} = require("../controllers/postController")

router.post("/post", create)

module.exports = router