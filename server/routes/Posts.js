const express = require("express")
const router = new express.Router()
const {validateToken} = require("../middlewares/authMiddleware")
const {upload} = require('../middlewares/uploadImgMiddleware')
const { 
    create,
    show,
    index,
    usersPosts
} = require("../controllers/postController")

router.get("/post", index)
router.post("/post", validateToken, upload.single('image'), create)
router.get("/post/:id", validateToken, show)
router.get("/user-posts", validateToken, usersPosts)

module.exports = router