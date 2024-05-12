const express = require("express")
const router = new express.Router()
const {validateToken} = require("../middlewares/authMiddleware")
const { 
    create,
    show,
    index,
    usersPosts
} = require("../controllers/postController")

router.get("/post", index)
router.post("/post", validateToken, create)
router.get("/post/:id", validateToken, show)
router.get("/post/user", validateToken, usersPosts)

module.exports = router