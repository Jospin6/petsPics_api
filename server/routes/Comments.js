const express = require("express")
const router = new express.Router()
const {validateToken} = require("../middlewares/authMiddleware")
const {
    create
} = require("../controllers/commentController")

router.post("/comments", validateToken, create)

module.exports = router