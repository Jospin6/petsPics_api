const express = require("express")
const { create, getUserLikes } = require("../controllers/likeController")
const { validateToken } = require("../middlewares/authMiddleware")
const router = new express.Router()

router.post("/like", validateToken , create)
router.get("/like/:id", validateToken , getUserLikes)

module.exports = router