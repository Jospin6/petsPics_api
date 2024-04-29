const express = require("express")
const { create } = require("../controllers/likeController")
const { validateToken } = require("../middlewares/authMiddleware")
const router = new express.Router()

router.post("/like", validateToken , create)

module.exports = router