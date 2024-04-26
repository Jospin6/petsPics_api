const express = require("express")
const router = new express.Router()
const {validateToken} = require("../middlewares/authMiddleware")
const { 
    create,
} = require("../controllers/postController")

router.post("/post", validateToken, create)

module.exports = router