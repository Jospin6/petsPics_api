const express = require("express")
const { create, getUserLikes } = require("../controllers/likeController")
const { validateToken } = require("../middlewares/authMiddleware")
const router = new express.Router()

router.post("/like", validateToken , create)
router.get("/like", validateToken, getUserLikes)

module.exports = router