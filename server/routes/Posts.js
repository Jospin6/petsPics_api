const express = require("express")
const router = new express.Router()
const {validateToken} = require("../middlewares/authMiddleware")
const { 
    create,
    show
} = require("../controllers/postController")

router.post("/post", validateToken, create)
router.get("/post/:id", validateToken, show)

module.exports = router